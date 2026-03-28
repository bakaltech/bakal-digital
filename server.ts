import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import {
  generateChatResponse,
  getChatPayload,
  getLeadPayload,
  HttpError,
  submitLead,
} from "./lib/server/assistant";

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT || 3000);

  app.use(express.json());

  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, messageText } = getChatPayload(req.body);
      const response = await generateChatResponse({
        apiKey: process.env.GEMINI_API_KEY,
        messages,
        messageText,
      });

      return res.json(response);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.status).json({ error: error.message });
      }

      console.error("Chat API error:", error);
      return res.status(500).json({ error: "Failed to generate a response." });
    }
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const { email, details } = getLeadPayload(req.body);
      await submitLead({
        email,
        details,
        webhookUrl: process.env.GOOGLE_SHEETS_WEBHOOK_URL,
      });

      return res.status(200).json({ ok: true });
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.status).json({ error: error.message });
      }

      console.error("Lead API error:", error);
      return res.status(500).json({ error: "Failed to submit the lead." });
    }
  });

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);

  app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
