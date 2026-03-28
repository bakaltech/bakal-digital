# Bakal Digital

Bakal Digital is a React + Vite portfolio site with a scripted lead-qualification chatbot and secure lead capture.

## Local development

Prerequisites:
- Node.js 20+

Setup:
1. Install dependencies with `npm install`
2. Fill in `.env.local`
3. Start the local app with `npm run dev`

Required environment variables:
- `GOOGLE_SHEETS_WEBHOOK_URL`
- `PORT` for local development only

## Deployment

This project is set up for Vercel:
- Frontend is built with Vite
- API routes live in `api/chat.ts` and `api/leads.ts`
- Secrets must be added in Vercel Project Settings > Environment Variables

Vercel environment variables:
- `GOOGLE_SHEETS_WEBHOOK_URL`

## Security

- No API keys are exposed to the browser
- The chatbot uses a scripted server-side flow
- Lead submissions are posted server-side
- `.env.local` is ignored by git
