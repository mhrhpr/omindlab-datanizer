# DataNizer

**PriceList-as-a-Service / QuickOps** برای کسب‌وکارهایی که با Excel، CSV، قیمت‌نامه و به‌روزرسانی‌های مکرر سروکار دارند.

## Stack
Next.js 16 · TypeScript · Prisma 7 · PostgreSQL · Zod · Resend · Vercel

## Local
\`\`\`bash
npm install
cp .env.example .env.local
npx prisma generate
npx prisma migrate dev
npm run dev
\`\`\`

Node 24+ required.

## Notifications
For website lead notifications, configure \`ADMIN_NOTIFICATION_EMAIL\`, Telegram, Bale, Rubika and optionally WhatsApp Business Cloud API variables from \`.env.example\`. Missing channels are skipped without blocking lead creation.

## Customer contact channels
Set the \`NEXT_PUBLIC_CONTACT_*\` variables to the URLs users should use for direct file submission. Keep all bot tokens server-only; never prefix secrets with \`NEXT_PUBLIC_\`.

## SEO
The site uses service landing pages, long-tail guide pages, canonical URLs, sitemap, robots, metadata, Organization/Service/Article structured data, internal links and people-first Persian content. Search engines decide ranking; no #1 position is guaranteed.
