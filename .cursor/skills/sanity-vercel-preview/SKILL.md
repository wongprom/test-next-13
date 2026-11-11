---
name: sanity-vercel-preview
description: >-
  Sanity Studio (/admin) on Vercel previews and localhost: CORS origins,
  credentials, development host vs register studio, and common /admin failures
  after Next/React upgrades. Use when working on /admin, Sanity Studio, CMS
  preview access, CORS, or smoke-testing Studio on a Vercel preview URL.
---

# Sanity Studio on Vercel previews

## Where Studio lives

| Environment | URL | Role |
| :--- | :--- | :--- |
| Production | `https://jimmybackstrom.com/admin` (and `www`) | Real editor Studio |
| Local | `http://localhost:3000/admin` | Dev |
| Preview | `https://test-next-13-git-<branch>-wongproms-projects.vercel.app/admin` | Branch smoke tests |

Config: `sanity.config.ts` (`basePath: '/admin'`), route `app/admin/[[...index]]/`.
Env: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`.

## When `/admin` loads but cannot see content

Studio shows **Connect this studio to your project** or API/CORS failures.

### Choose correctly in the Studio prompt

| Option | Use when |
| :--- | :--- |
| **Add development host** | Localhost or **Vercel preview** URLs |
| **Register this studio** | Production / long-lived editor Studio only |

Do **not** register each preview deployment as a production studio.

### Add CORS origin (Sanity dashboard)

Path: Sanity project → **API** → **CORS origins** → **Add CORS origin**.

1. Origin = exact preview origin, no path, no trailing slash. Example:
   `https://test-next-13-git-upgrade-vercel-prior-8d05e8-wongproms-projects.vercel.app`
2. **Allow credentials** = **checked** (required when hosting Studio on that origin).
3. Save, hard-refresh `/admin` on the preview.

Prefer the **stable branch alias** (`…-git-<branch>-…`) over per-commit URLs (`test-next-13-<hash>-…`). Per-commit hosts need a new CORS entry every time.

Already expected in this project:

- `https://www.jimmybackstrom.com`
- `http://localhost:3000` (and sometimes `:3333`)
- Older one-off Vercel hosts (can clean up later)

## When `/admin` crashes (white screen / 500)

Often **not** a Sanity account issue. On Next 15 + React 19 this app had:

- Server 500 / React canary vs `react-dom` mismatch from webpack `react-dom/server` aliasing
- Fix direction: keep Studio client-only; alias `react-dom/server` to Next’s vendored `next/dist/compiled/react-dom/server.browser.js`; avoid pulling Sanity into the server bundle

Live production working does **not** prove the upgrade preview is fine — production may still be an older Next/React stack until the upgrade is merged.

## Smoke-test checklist for `/admin`

1. Preview HTML/route returns OK (not Next 500 page).
2. Studio UI appears (not only “Application error”).
3. If prompted: **Add development host** (preview) or confirm CORS + credentials.
4. Desk opens; Certificates (or other schemas) list is readable.

## Agent notes

- No Sanity MCP is required for CORS guidance; the human adds origins in the Sanity dashboard.
- Do not ask for Sanity tokens to “fix” CORS — dashboard CORS + development host is enough.
- When documenting a PR smoke test, link the **branch** preview `/admin`, not only production.
