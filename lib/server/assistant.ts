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

type SubmissionGuard = {
  website?: string;
  startedAt?: number;
};

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  source: string;
  interests: string[];
  website?: string;
  startedAt?: number;
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
    prompt: "What needs to be built or fixed first?",
    quickReplies: ["Website or platform", "AI workflow", "Automation and reporting"],
  },
  {
    key: "projectStage",
    prompt: "Is this a new initiative, or something existing that is not performing well enough?",
    quickReplies: ["Brand new build", "Improving existing", "Still shaping scope"],
  },
  {
    key: "industry",
    prompt: "What kind of business is this for?",
    quickReplies: ["Startup", "Service business", "Commerce brand"],
  },
  {
    key: "mainGoal",
    prompt: "If this works well, what should improve most?",
    quickReplies: ["More qualified demand", "Clearer product or buying flow", "Less manual operational drag"],
  },
  {
    key: "budget",
    prompt: "Which budget range fits the work you have in mind?",
    quickReplies: ["Under $5k", "$5k-$15k", "$15k+"],
  },
  {
    key: "timeline",
    prompt: "What timeline are you working against?",
    quickReplies: ["As soon as possible", "Within 4-6 weeks", "Within this quarter"],
  },
];

const MIN_FORM_COMPLETION_MS = 1500;
const MAX_FORM_AGE_MS = 1000 * 60 * 60 * 24;
const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 10;
const RATE_LIMIT_MAX_REQUESTS = 6;
const requestBuckets = new Map<string, number[]>();

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

function getSubmissionGuard(payload: Record<string, unknown>): SubmissionGuard {
  return {
    website: typeof payload.website === "string" ? payload.website.trim() : "",
    startedAt: typeof payload.startedAt === "number" ? payload.startedAt : undefined,
  };
}

function validateSubmissionGuard(guard: SubmissionGuard) {
  if (guard.website) {
    throw new HttpError(400, "Submission blocked.");
  }

  if (typeof guard.startedAt !== "number" || Number.isNaN(guard.startedAt)) {
    throw new HttpError(400, "Submission timing is invalid.");
  }

  const elapsed = Date.now() - guard.startedAt;

  if (elapsed < MIN_FORM_COMPLETION_MS) {
    throw new HttpError(429, "Please take a moment and try again.");
  }

  if (elapsed > MAX_FORM_AGE_MS) {
    throw new HttpError(400, "This form expired. Please try again.");
  }
}

export function enforceRateLimit(key: string) {
  const now = Date.now();
  const recent = (requestBuckets.get(key) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    throw new HttpError(429, "Too many requests. Please wait a few minutes and try again.");
  }

  recent.push(now);
  requestBuckets.set(key, recent);
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
    text: `Here is the brief summary so far: ${buildSummary(values)}. Add the best email for follow-up below and we will reply with the clearest next step.`,
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
  const guard = getSubmissionGuard(payload);

  validateSubmissionGuard(guard);

  if (!email || !isValidEmail(email)) {
    throw new HttpError(400, "A valid email is required.");
  }

  if (!isLeadFormArgs(details)) {
    throw new HttpError(400, "Lead details are incomplete.");
  }

  return { email, details, guard };
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
  const guard = getSubmissionGuard(payload);

  validateSubmissionGuard(guard);

  if (!name) {
    throw new HttpError(400, "A name is required.");
  }

  if (!email || !isValidEmail(email)) {
    throw new HttpError(400, "A valid email is required.");
  }

  if (!message) {
    throw new HttpError(400, "A project message is required.");
  }

  if (message.length < 20) {
    throw new HttpError(400, "Please share a bit more detail so we can help properly.");
  }

  return {
    name,
    email,
    company: company || undefined,
    message,
    source,
    interests,
    website: guard.website,
    startedAt: guard.startedAt,
  };
}

async function postToWebhook(webhookUrl: string | undefined, payload: Record<string, unknown>) {
  if (!webhookUrl) {
    console.warn("Lead capture webhook not configured. Logging payload instead.", payload);
    return;
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
