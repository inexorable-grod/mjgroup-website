# MJ Group SAS — Corporate Website

## Quick Start

```bash
git clone https://github.com/mjgroupsas/mjgroup-website.git
cd mjgroup-website
npm install
cp .env.example .env.local
# Fill in .env.local with your values (see .env.example for instructions)
npm run dev
```

## Generate Admin Password Hash

```bash
node -e "require('bcryptjs').hash('YourSecurePassword123!', 12).then(h => console.log(h))"
```

Copy the output to `ADMIN_PASSWORD_HASH` in `.env.local`.

## Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel dashboard
3. Set all environment variables from `.env.example`
4. Deploy (region: gru1 / Sao Paulo for low latency to Colombia)

## Project Structure

See `CLAUDE.md` for full documentation and agent system.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Auth:** NextAuth.js v5
- **Deployment:** Vercel
- **Email:** Resend

## Contact

MJ Group SAS — mj.groupcolombia@gmail.com · +57 314 8114739
