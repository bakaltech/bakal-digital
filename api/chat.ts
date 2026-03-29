import { generateChatResponse, getChatPayload, HttpError } from "../lib/server/assistant";
import { getRequestMethod, readJsonBody, sendJson } from "./_utils";

type NodeRequestLike = {
  method?: string;
  body?: unknown;
};

type NodeResponseLike = {
  status(code: number): NodeResponseLike;
  json(body: unknown): void;
};

export default async function handler(
  request: Request | NodeRequestLike,
  response?: NodeResponseLike,
): Promise<Response | void> {
  if (getRequestMethod(request) !== "POST") {
    return sendJson({ error: "Method not allowed." }, 405, response);
  }

  try {
    const payload = await readJsonBody(request);
    const { messages, messageText } = getChatPayload(payload);
    const chatResponse = await generateChatResponse({ messages, messageText });
    return sendJson(chatResponse, 200, response);
  } catch (error) {
    if (error instanceof HttpError) {
      return sendJson({ error: error.message }, error.status, response);
    }

    console.error("Chat API error:", error);
    return sendJson({ error: "Failed to generate a response." }, 500, response);
  }
}
