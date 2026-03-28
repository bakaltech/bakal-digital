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

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  source: string;
  interests: string[];
};

export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

type FlowStep = {
  key: keyof Omit<LeadFormArgs, "summary">;
  prompt: string;
  quickReplies: string[];
};

const flowSteps: FlowStep[] = [
  {
    key: "projectType",
    prompt: "What type of project are you looking for?",
    quickReplies: ["Website", "Branding", "AI automation"],
  },
  {
    key: "projectStage",
    prompt: "Is this a brand new project or an existing one you want to improve?",
    quickReplies: ["Brand new", "Improve existing", "Not sure yet"],
  },
  {
    key: "industry",
    prompt: "What industry or business are you in?",
    quickReplies: ["Professional services", "Ecommerce", "Other industry"],
  },
  {
    key: "mainGoal",
    prompt: "What is the main goal for this project?",
    quickReplies: ["Get more leads", "Look more premium", "Save time"],
  },
  {
    key: "budget",
    prompt: "What budget range are you aiming for?",
    quickReplies: ["Under $2k", "$2k-$5k", "$5k+"],
  },
  {
    key: "timeline",
    prompt: "When would you like to launch?",
    quickReplies: ["ASAP", "This month", "Next 2-3 months"],
  },
];

function isChatMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    (candidate.role === "user" || candidate.role === "model") &&
    typeof candidate.text === "string"
  );
}

function getUserMessages(messages: ChatMessage[]) {
  return messages.filter((message) => message.role === "user");
}

function buildSummary(values: Record<string, string>) {
  return [
    `Project type: ${values.projectType}`,
    `Project stage: ${values.projectStage}`,
    `Industry: ${values.industry}`,
    `Main goal: ${values.mainGoal}`,
    `Budget: ${values.budget}`,
    `Timeline: ${values.timeline}`,
  ].join(" | ");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
  messages: ChatMessage[];
  messageText: string;
}): Promise<ChatResponse> {
  const userMessages = [
    ...getUserMessages(params.messages),
    { role: "user" as const, text: params.messageText },
  ];
  const answers = userMessages.map((message) => message.text.trim());
  const currentStepIndex = answers.length - 1;

  if (currentStepIndex < flowSteps.length - 1) {
    const nextStep = flowSteps[currentStepIndex + 1];

    return {
      text: nextStep.prompt,
      quickReplies: nextStep.quickReplies,
      leadFormArgs: null,
    };
  }

  const values = flowSteps.reduce<Record<string, string>>((accumulator, step, index) => {
    accumulator[step.key] = answers[index] || "";
    return accumulator;
  }, {});

  return {
    text: `Here is what I have gathered: ${buildSummary(values)}. Please fill out the secure form below so we can send your tailored plan and next steps.`,
    quickReplies: [],
    leadFormArgs: {
      projectType: values.projectType,
      projectStage: values.projectStage,
      industry: values.industry,
      mainGoal: values.mainGoal,
      budget: values.budget,
      timeline: values.timeline,
      summary: buildSummary(values),
    },
  };
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

export function getContactPayload(body: unknown): ContactPayload {
  const payload = typeof body === "object" && body !== null
    ? (body as Record<string, unknown>)
    : {};

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const source = typeof payload.source === "string" ? payload.source.trim() : "website";
  const interests = Array.isArray(payload.interests)
    ? payload.interests.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    : [];

  if (!name) {
    throw new HttpError(400, "A name is required.");
  }

  if (!email || !isValidEmail(email)) {
    throw new HttpError(400, "A valid email is required.");
  }

  if (!message) {
    throw new HttpError(400, "A project message is required.");
  }

  return {
    name,
    email,
    company: company || undefined,
    message,
    source,
    interests,
  };
}

async function postToWebhook(webhookUrl: string | undefined, payload: Record<string, unknown>) {
  if (!webhookUrl) {
    throw new HttpError(500, "Lead webhook is not configured.");
  }

  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  if (!webhookResponse.ok) {
    throw new HttpError(500, `Lead webhook responded with status ${webhookResponse.status}`);
  }
}

export async function submitLead(params: {
  email: string;
  details: LeadFormArgs;
  webhookUrl: string | undefined;
}) {
  await postToWebhook(params.webhookUrl, {
    type: "chat-intake",
    email: params.email,
    ...params.details,
  });
}

export async function submitContact(params: ContactPayload & { webhookUrl: string | undefined }) {
  await postToWebhook(params.webhookUrl, {
    type: "contact-request",
    name: params.name,
    email: params.email,
    company: params.company || "",
    message: params.message,
    source: params.source,
    interests: params.interests,
  });
}
