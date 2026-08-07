# lcathala-cv

Portfolio of Louis Cathala (Développeur Fullstack). Replaces the previous portfolio hosted at www.wildredbeard.tech. Static marketing site, no API routes, no database, no environment variables.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4 (`@tailwindcss/postcss`), `tw-animate-css`
- shadcn/ui-style components on @base-ui/react (only `components/ui/button.tsx` so far)
- lucide-react icons, framer-motion animations, class-variance-authority + tailwind-merge via `cn()` in `lib/utils.ts`
- @vercel/analytics rendered in `app/layout.tsx` when `NODE_ENV === 'production'`

## Commands

| Task | Command |
| ---- | ------- |
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Docker (production) | `docker compose up -d --build` |
| Docker logs | `docker compose logs -f` |

## Project layout

- `app/` — App Router pages (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — section-level components (Header, Hero, About, Skills, Experience, Education, Contact, Footer)
- `components/ui/` — UI primitives
- `lib/` — shared utilities (`utils.ts` exports `cn()`)
- `public/` — static assets (images, CV PDF, favicons)

## Conventions

- Use existing patterns: section components compose directly into `app/page.tsx`
- Icons from lucide-react; animations with framer-motion
- Dark/light theme: `dark`/`light` class on `<html>` (see theme script in `app/layout.tsx` and `components/theme-toggle.tsx`)
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` — the build will NOT fail on TS errors; rely on editor/`tsc` instead
- `next.config.mjs` sets `images.unoptimized: true` — no image optimizer, works behind nginx without extra config

## Package manager

npm is canonical — `package-lock.json` is the source of truth. `pnpm-lock.yaml` is a stale v0 scaffold artifact: never edit it, and it is excluded from the Docker build context.

## Deployment (Raspberry Pi)

- Target: Raspberry Pi (arm64), running Docker + nginx on the host
- The app container listens on `localhost:4002` only; host nginx terminates SSL and reverse-proxies `www.wildredbeard.tech` → `http://127.0.0.1:4002`
- nginx/SSL config is already in place — do not touch it, do not expose the app publicly
- Build is done on the Pi itself (`docker compose up -d --build`) so the arm64 architecture matches automatically
- Container: multi-stage `node:24-alpine`, Next.js standalone output (`output: 'standalone'`), runs as non-root user `node`
