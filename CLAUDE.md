# CLAUDE.md — MJ Group SAS Project Intelligence

## Quick Context
You are working on the MJ Group SAS corporate website + admin panel.
- Company: electrical infrastructure services in Colombia
- Codebase: Next.js 16, TypeScript, Tailwind CSS v4, NextAuth.js v5
- All company data is in `data/fleet.ts`, `data/contracts.ts`, `data/clients.ts`
- Admin panel at `/admin/*` — protected by NextAuth middleware
- Login credentials stored as env vars, NO DATABASE in Phase 1

## Current Phase: 1 (MVP)
- [x] Project scaffold
- [x] Design system (Tailwind v4 CSS-based config)
- [x] Authentication (no DB)
- [x] Landing page (all sections)
- [x] Admin panel (static data)
- [ ] Deployed to Vercel

## Phase 2 (Next)
- [ ] PostgreSQL via Supabase
- [ ] Prisma ORM for CRUD operations
- [ ] File uploads (Vercel Blob)
- [ ] Email notifications (Resend)

## Critical Files
| File | Purpose |
|---|---|
| `lib/auth.ts` | NextAuth config — touch carefully |
| `middleware.ts` | Route protection — never break |
| `data/fleet.ts` | Fleet specs from brochure |
| `data/contracts.ts` | Contract history from brochure |
| `app/globals.css` | Tailwind v4 design system + theme |
| `.env.example` | All required environment variables |

## Agent System
5 specialized agents in `agents/` directory:
- `CONTENT_AGENT.md` — Spanish copy, technical accuracy
- `SEO_AGENT.md` — metadata, structured data, keywords
- `SECURITY_AGENT.md` — auth, headers, secret management
- `FLEET_AGENT.md` — vehicle data integrity
- `TRANSLATION_AGENT.md` — bilingual content (ES/EN)

Invoke the appropriate agent by referencing its file before making changes in that domain.

## Commands
```bash
npm run dev          # Development server (port 3000)
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript check (tsc --noEmit)
npm run format       # Prettier format all files
```

## Design Tokens
- Primary: `#0EA5E9` (electric blue) — `electric-500`
- Accent: `#F97316` (power orange) — `power-500`
- Dark bg: `#080D1A` (carbon deep) — `carbon-950`
- Font display: Bebas Neue (`--font-bebas`)
- Font body: DM Sans (`--font-dm-sans`)
- Font mono: JetBrains Mono (`--font-jetbrains`)

## Tailwind v4 Notes
- Config is CSS-based in `app/globals.css` using `@theme inline` blocks
- Dark mode uses `@custom-variant dark (&:where(.dark, .dark *));`
- No `tailwind.config.ts` file — all config in CSS
- Custom colors: `electric-*`, `power-*`, `carbon-*`

## Security Rules (NEVER violate)
1. Passwords hashed with bcrypt cost >= 12
2. Session max 8 hours
3. Rate limit: 5 login attempts / 15 min / IP (when Upstash configured)
4. All API inputs validated with Zod
5. No secrets in committed code
6. Security headers on all routes
