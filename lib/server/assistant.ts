import { FunctionDeclaration, GoogleGenAI, Type } from "@google/genai";

export type ChatMessage = {
  role: "user" | "model";
  text: string;
};

export type LeadFormArgs = {
  projectType: string;
  projectStage: string;
  industry: string;
  mainGoal: string;
  budget: string;
  timeline: string;
  summary: string;
};

export type ChatResponse = {
  text: string;
  quickReplies: string[];
  leadFormArgs: LeadFormArgs | null;
};

export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const GEMINI_MODEL = "gemini-3-flash-preview";

const requestLeadFormDeclaration: FunctionDeclaration = {
  name: "requestLeadForm",
  description:
    "Triggers a secure popup form for the user to enter their email and contact details after all project requirements are gathered.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      projectType: { type: Type.STRING },
      projectStage: { type: Type.STRING },
      industry: { type: Type.STRING },
      mainGoal: { type: Type.STRING },
      budget: { type: Type.STRING },
      timeline: { type: Type.STRING },
      summary: {
        type: Type.STRING,
        description:
          "A brief 1-2 sentence summary of the entire project based on the collected requirements.",
      },
    },
    required: [
      "projectType",
      "projectStage",
      "industry",
      "mainGoal",
      "budget",
      "timeline",
      "summary",
    ],
  },
};

const systemInstruction = `You are the Bakal AI Guide, a lead qualification and discovery assistant for a premium digital agency. Your core objective is to extract structured client requirements through a natural conversation and prepare a clear brief for a strategy call.

### Core Rules & Conversation Structure:
1. Step-by-Step: Ask exactly one question at a time. Never ask two questions in the same message. Do not repeat questions. Progress logically.
2. Data to Collect: You must extract these fields in order (roughly):
   - Project type (app, website, branding, AI)
   - Project stage (new or existing)
   - Industry
   - Main goal
   - Budget range
   - Timeline
3. Question Design: Use guided choices instead of open-ended questions. Always allow options like "Not sure" or "Something else".
4. Input Handling: If the user says "ok", "idk", "help me", or is vague, provide simple options and guide them forward.
5. Tone: Professional, clear, and efficient. No corporate jargon. No long explanations. No vague or hallucinated language.
6. Formatting: DO NOT use asterisks, bolding, or informal formatting in your responses. Keep the text clean and professional.
7. Value Layer: Occasionally provide small insights to build trust (keep it 1-2 lines max).
8. Progress Feedback: Add progress feedback to keep them engaged (e.g., "Understood. Just two more questions and I will map this out for you.").
9. You are the Guide, Not the Builder: Never say that you (the AI) will build, design, or create the project. Clarify that you are mapping out the plan so our strategy team can execute it. Do not use internal names or specific team member references.

### Contact Capture & Output Logic:
- Once you have collected the 6 key data points (project type, stage, industry, goal, budget, timeline), do not ask for their email in the chat.
- Instead, immediately call the requestLeadForm function. This will trigger a secure popup form in the UI where the user can enter their contact details.
- Before calling the function, generate a short structured summary of what you collected.

### Quick Replies:
- For all standard questions, provide 2-3 short quick reply options for the user, formatted exactly like this on a new line:
[QUICK_REPLIES: Option 1 | Option 2 | Option 3]`;

export function isChatMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const message = value as Record<string, unknown>;
  return (
    (message.role === "user" || message.role === "model") &&
    typeof message.text === "string"
  );
}

export function isLeadFormArgs(value: unknown): value is LeadFormArgs {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const payload = value as Record<string, unknown>;
  return [
    "projectType",
    "projectStage",
    "industry",
    "mainGoal",
    "budget",
    "timeline",
    "summary",
  ].every((key) => typeof payload[key] === "string");
}

function parseQuickReplies(text: string) {
  const quickRepliesMatch = text.match(/\[QUICK_REPLIES:\s*(.*?)\]/);
  const quickReplies = quickRepliesMatch?.[1]
    ? quickRepliesMatch[1]
        .split("|")
        .map((reply) => reply.trim())
        .filter(Boolean)
    : [];

  return {
    quickReplies,
    text: text.replace(/\[QUICK_REPLIES:\s*(.*?)\]/, "").trim(),
  };
}

export function getChatPayload(body: unknown) {
  const payload = typeof body === "object" && body !== null
    ? (body as Record<string, unknown>)
    : {};

  const messages = Array.isArray(payload.messages)
    ? payload.messages.filter(isChatMessage)
    : [];
  const messageText = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!messageText) {
    throw new HttpError(400, "A message is required.");
  }

  return { messages, messageText };
}

export async function generateChatResponse(params: {
  apiKey: string | undefined;
  messages: ChatMessage[];
  messageText: string;
}): Promise<ChatResponse> {
  if (!params.apiKey) {
    throw new HttpError(500, "Gemini API key is not configured.");
  }

  const ai = new GoogleGenAI({ apiKey: params.apiKey });

  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: [...params.messages, { role: "user", text: params.messageText }].map(
      (message) => ({
        role: message.role,
        parts: [{ text: message.text }],
      }),
    ),
    config: {
      systemInstruction,
      tools: [{ functionDeclarations: [requestLeadFormDeclaration] }],
    },
  });

  const functionCall = response.functionCalls?.[0];
  if (
    functionCall?.name === "requestLeadForm" &&
    isLeadFormArgs(functionCall.args)
  ) {
    return {
      text: "Please fill out the secure form below to receive your tailored plan and next steps.",
      quickReplies: [],
      leadFormArgs: functionCall.args,
    };
  }

  const modelText =
    response.text || "I'm sorry, I couldn't process that. Could you try again?";
  const parsed = parseQuickReplies(modelText);

  return {
    text: parsed.text || "I'm sorry, I couldn't process that. Could you try again?",
    quickReplies: parsed.quickReplies,
    leadFormArgs: null,
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getLeadPayload(body: unknown) {
  const payload = typeof body === "object" && body !== null
    ? (body as Record<string, unknown>)
    : {};

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const details = payload.details;

  if (!email || !isValidEmail(email)) {
    throw new HttpError(400, "A valid email is required.");
  }

  if (!isLeadFormArgs(details)) {
    throw new HttpError(400, "Lead details are incomplete.");
  }

  return { email, details };
}

export async function submitLead(params: {
  email: string;
  details: LeadFormArgs;
  webhookUrl: string | undefined;
}) {
  if (!params.webhookUrl) {
    throw new HttpError(500, "Lead webhook is not configured.");
  }

  const webhookResponse = await fetch(params.webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({ ...params.details, email: params.email }),
  });

  if (!webhookResponse.ok) {
    throw new HttpError(500, `Lead webhook responded with status ${webhookResponse.status}`);
  }
}
