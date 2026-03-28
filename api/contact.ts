import { getContactPayload, HttpError, submitContact, enforceRateLimit } from "../lib/server/assistant";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }

  try {
    enforceRateLimit(`contact:${getClientIp(request)}`);

    const payload = await request.json();
    const contact = getContactPayload(payload);

    await submitContact({
      ...contact,
      webhookUrl: process.env.GOOGLE_SHEETS_WEBHOOK_URL,
    });

    return json({ ok: true });
  } catch (error) {
    if (error instanceof HttpError) {
      return json({ error: error.message }, error.status);
    }

    console.error("Contact API error:", error);
    return json({ error: "Failed to submit your message." }, 500);
  }
}
