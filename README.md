# OMINDLAB × DataNizer

Productized Data & Reporting Automation Service MVP by OMINDLAB.

## Stack
Next.js 16 · TypeScript · Prisma 8 · PostgreSQL · Zod · OpenAI · Resend · Vercel Cron

## Local
```bash
npm install
cp .env.example .env.local
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

Node 24+ is required.
