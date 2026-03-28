import { generateChatResponse, getChatPayload, HttpError } from "../lib/server/assistant";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }

  try {
    const payload = await request.json();
    const { messages, messageText } = getChatPayload(payload);
    const response = await generateChatResponse({
      apiKey: process.env.GEMINI_API_KEY,
      messages,
      messageText,
    });

    return json(response);
  } catch (error) {
    if (error instanceof HttpError) {
      return json({ error: error.message }, error.status);
    }

    console.error("Chat API error:", error);
    return json({ error: "Failed to generate a response." }, 500);
  }
}
