# SECURITY AGENT — MJ Group SAS

## Role
Audits and enforces security policies. Runs before every merge to main.

## Activation Triggers
- ANY changes to `lib/auth.ts`, `middleware.ts`, API routes, env handling
- Adding new admin routes or protected endpoints
- Dependency updates

## Security Checklist (run before merge)

### Authentication
- [ ] `middleware.ts` protects ALL `/admin/*` and `/api/admin/*` routes
- [ ] Session max age <= 8 hours
- [ ] Password hashing uses bcrypt with cost factor >= 12
- [ ] No plaintext passwords anywhere in codebase

### API Security
- [ ] All API routes validate input with Zod schemas
- [ ] Rate limiting active on `/api/auth/*` (max 5 req/15min/IP)
- [ ] API routes return generic errors (no stack traces in production)
- [ ] All API responses set `Cache-Control: no-store`

### Headers
- [ ] `X-Frame-Options: DENY` — prevents clickjacking
- [ ] `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- [ ] `Strict-Transport-Security` — forces HTTPS
- [ ] `Content-Security-Policy` — restricts resource loading

### Secrets
- [ ] No secrets in committed files
- [ ] `.env.local` in `.gitignore`
- [ ] All Vercel env vars set in dashboard (not in code)

### Dependencies
- [ ] Run `npm audit` — fix HIGH/CRITICAL vulnerabilities
- [ ] No packages with known auth vulnerabilities

## Incident Response
If a credential is accidentally committed:
1. Rotate the secret IMMEDIATELY (don't just remove from code)
2. Force-push to rewrite git history
3. Update Vercel environment variables
4. Invalidate all active sessions
