import { enforceRateLimit, getContactPayload, HttpError, submitContact } from "../lib/server/assistant";
import { getHeaderValue, getRequestMethod, readJsonBody, sendJson } from "./_utils";

type NodeRequestLike = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};

type NodeResponseLike = {
  status(code: number): NodeResponseLike;
  json(body: unknown): void;
};

function getClientIp(request: Request | NodeRequestLike) {
  const forwardedFor = getHeaderValue(request, "x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return getHeaderValue(request, "x-real-ip") || "unknown";
}

export default async function handler(
  request: Request | NodeRequestLike,
  response?: NodeResponseLike,
): Promise<Response | void> {
  if (getRequestMethod(request) !== "POST") {
    return sendJson({ error: "Method not allowed." }, 405, response);
  }

  try {
    enforceRateLimit(`contact:${getClientIp(request)}`);

    const payload = await readJsonBody(request);
    const contact = getContactPayload(payload);

    await submitContact({
      ...contact,
      webhookUrl: process.env.GOOGLE_SHEETS_WEBHOOK_URL,
    });

    return sendJson({ ok: true }, 200, response);
  } catch (error) {
    if (error instanceof HttpError) {
      return sendJson({ error: error.message }, error.status, response);
    }

    console.error("Contact API error:", error);
    return sendJson({ error: "Failed to submit your message." }, 500, response);
  }
}
