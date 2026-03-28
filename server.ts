import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import {
  enforceRateLimit,
  generateChatResponse,
  getChatPayload,
  getContactPayload,
  getLeadPayload,
  HttpError,
  submitContact,
  submitLead,
} from "./lib/server/assistant";

function getClientIp(req: express.Request) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0]?.trim() || req.ip || "unknown";
  }

  if (Array.isArray(forwardedFor) && forwardedFor[0]) {
    return forwardedFor[0];
  }

  return req.ip || "unknown";
}

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT || 3000);

  app.use(express.json());

  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, messageText } = getChatPayload(req.body);
      const response = await generateChatResponse({ messages, messageText });
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
      enforceRateLimit(`lead:${getClientIp(req)}`);
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

  app.post("/api/contact", async (req, res) => {
    try {
      enforceRateLimit(`contact:${getClientIp(req)}`);
      const contact = getContactPayload(req.body);
      await submitContact({
        ...contact,
        webhookUrl: process.env.GOOGLE_SHEETS_WEBHOOK_URL,
      });

      return res.status(200).json({ ok: true });
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.status).json({ error: error.message });
      }

      console.error("Contact API error:", error);
      return res.status(500).json({ error: "Failed to submit your message." });
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
