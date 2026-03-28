import express from "express";
import { FunctionDeclaration, GoogleGenAI, Type } from "@google/genai";
import path from "path";
import { createServer as createViteServer } from "vite";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

type LeadFormArgs = {
  projectType: string;
  projectStage: string;
  industry: string;
  mainGoal: string;
  budget: string;
  timeline: string;
  summary: string;
};

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

function isChatMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const message = value as Record<string, unknown>;
  return (
    (message.role === "user" || message.role === "model") &&
    typeof message.text === "string"
  );
}

function isLeadFormArgs(value: unknown): value is LeadFormArgs {
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
    ? quickRepliesMatch[1].split("|").map((reply) => reply.trim()).filter(Boolean)
    : [];

  return {
    quickReplies,
    text: text.replace(/\[QUICK_REPLIES:\s*(.*?)\]/, "").trim(),
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT || 3000);
  const ai = process.env.GEMINI_API_KEY
    ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
    : null;

  app.use(express.json());

  app.post("/api/chat", async (req, res) => {
    try {
      if (!ai) {
        return res.status(500).json({ error: "Gemini API key is not configured." });
      }

      const messages = Array.isArray(req.body?.messages)
        ? req.body.messages.filter(isChatMessage)
        : [];
      const messageText =
        typeof req.body?.message === "string" ? req.body.message.trim() : "";

      if (!messageText) {
        return res.status(400).json({ error: "A message is required." });
      }

      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: [...messages, { role: "user", text: messageText }].map(
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
        return res.json({
          text: "Please fill out the secure form below to receive your tailored plan and next steps.",
          quickReplies: [],
          leadFormArgs: functionCall.args,
        });
      }

      const modelText =
        response.text || "I'm sorry, I couldn't process that. Could you try again?";
      const parsed = parseQuickReplies(modelText);

      return res.json({
        text: parsed.text || "I'm sorry, I couldn't process that. Could you try again?",
        quickReplies: parsed.quickReplies,
        leadFormArgs: null,
      });
    } catch (error) {
      console.error("Chat API error:", error);
      return res.status(500).json({ error: "Failed to generate a response." });
    }
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const email =
        typeof req.body?.email === "string" ? req.body.email.trim() : "";
      const details = req.body?.details;

      if (!email || !isValidEmail(email)) {
        return res.status(400).json({ error: "A valid email is required." });
      }

      if (!isLeadFormArgs(details)) {
        return res.status(400).json({ error: "Lead details are incomplete." });
      }

      const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      if (!webhookUrl) {
        return res.status(500).json({ error: "Lead webhook is not configured." });
      }

      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ ...details, email }),
      });

      if (!webhookResponse.ok) {
        throw new Error(
          `Lead webhook responded with status ${webhookResponse.status}`,
        );
      }

      return res.status(200).json({ ok: true });
    } catch (error) {
      console.error("Lead API error:", error);
      return res.status(500).json({ error: "Failed to submit the lead." });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
