# Zwane Architectural & Engineering Solutions

Premium single-page practice website for Zwane Architectural and Engineering Solutions in Mbombela, Mpumalanga.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/zwane-architectural-website/index.html` — semantic page structure, SEO metadata, business copy, enquiry form, and navigation.
- `artifacts/zwane-architectural-website/src/site.css` — portable visual system, responsive layout, abstract architectural visuals, and motion.
- `artifacts/zwane-architectural-website/src/site.js` — menu, scroll/reveal behavior, concept filters, enquiry success state, and click-to-call support.
- `artifacts/zwane-architectural-website/public/favicon.svg` — practice mark used for the browser icon.

## Architecture decisions

- The site is intentionally a static, single-page presentation build with no backend requirement.
- The visual work is abstract architectural concept imagery and is labeled as generic reference material, not as completed Zwane projects.
- The enquiry form provides a client-side success state until a real submission destination is confirmed.
- The app stays portable and easy to edit with vanilla HTML, CSS, and JavaScript inside the hosted artifact shell.

## Product

The site presents Zwane's architectural design, building-plan, engineering-oriented, project-planning, and design-consultation services; explains the practice approach and process; filters concept studies by category; and gives prospective clients direct phone and enquiry-form paths.

## User preferences

- Keep the site sophisticated, technical, precise, and design-led rather than resembling a generic construction website.
- Do not claim unverified registrations, qualifications, awards, completed projects, or specialist services.

## Gotchas

- The artifact workflow injects `PORT` and `BASE_PATH`; direct Vite build commands need those values when run outside the workflow.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
