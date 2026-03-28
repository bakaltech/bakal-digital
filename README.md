# Bakal Digital

Bakal Digital is a React + Vite portfolio site with a server-side AI assistant and secure lead capture.

## Local development

Prerequisites:
- Node.js 20+

Setup:
1. Install dependencies with `npm install`
2. Fill in `.env.local`
3. Start the local app with `npm run dev`

Required environment variables:
- `GEMINI_API_KEY`
- `GOOGLE_SHEETS_WEBHOOK_URL`
- `PORT` for local development only

## Deployment

This project is set up for Vercel:
- Frontend is built with Vite
- API routes live in `api/chat.ts` and `api/leads.ts`
- Secrets must be added in Vercel Project Settings > Environment Variables

Vercel environment variables:
- `GEMINI_API_KEY`
- `GOOGLE_SHEETS_WEBHOOK_URL`

## Security

- No API keys are exposed to the browser
- The AI request runs server-side
- Lead submissions are posted server-side
- `.env.local` is ignored by git
