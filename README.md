# Ultimate HQ — FC 27 Ultimate Team Companion

A responsive Next.js 15 / React 19 / TypeScript starter with a premium dark interface and FC green accents.

> **Demo-data disclaimer:** Player ratings, card attributes, market prices, price history, SBCs and Evolutions are illustrative records created for the UI. They are not an official FC 27 dataset and are not connected to a live market. Replace the demo repository with data from a provider whose licence permits your intended use before publishing.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Visit http://localhost:3000. The UI runs with the local demo dataset and does not require database/API credentials.

## Included routes

- `/` — homepage, player search, trending cards, market movers, featured SBCs/Evolutions.
- `/players` — searchable/filterable database, sort controls and grid/list modes.
- `/players/kylian-mbappe` — example player profile and detailed attribute breakdown.
- `/compare` — compare up to four players, add/remove players and compare attributes.
- `/squad-builder` — formation selector, editable slots, lineup summary and local value estimate.
- `/sbcs` — SBC list, type filters and search.
- `/evolutions` — evolution paths, objective steps and sample eligibility.
- `/market` — platform/range selectors, price chart and biggest movers.
- `/admin` — admin dashboard concept and integration readiness view.
- `/api/players` — validated demo player-search endpoint.
- `/api/sbcs` and `/api/evolutions` — demo catalogue endpoints.
- `/sitemap.xml` and `/robots.txt` — generated SEO discovery files.

## Database

PostgreSQL schema is in `prisma/schema.prisma`. Configure `DATABASE_URL`, then:

```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

The schema covers players, price history by platform, SBCs and community solutions, Evolutions, user profiles, watchlists, squads/slots and audit logs.

## Integrations staged for implementation

Environment variables are provided for Clerk, Redis, Algolia and a market-data provider. The packages are listed, but external services are **not active** until you add their adapters, credentials and server-side logic. The admin screen is not protected in this starter; implement Clerk authentication plus server-side role checks before deployment. Never trust client-side visibility as authorization.

## Production checklist

1. Connect an appropriately licensed player/market data provider and document data provenance, timestamps, platforms and update cadence.
2. Replace in-memory arrays in `lib/data.ts` with a repository backed by Prisma.
3. Add scheduled data ingestion, Redis caching, Algolia indexing, pagination and rate limits.
4. Add Clerk sign-in/sign-up, verified user profiles, admin roles and authorization on every mutation/API.
5. Persist squads/watchlists; implement secure public-share tokens and actual PNG export.
6. Implement chemistry calculations, chemistry-style modifiers, SBC rating/chemistry rules and Evolution eligibility against current game rules.
7. Add automated tests, validation, audit logs, error monitoring, backups, accessibility review and SEO sitemap/metadata.

## Architecture

```text
app/                 App Router pages, metadata, SEO routes and API routes
components/          Shell, player cards, stat bars and charts
lib/                 Types, sample data and utility functions
prisma/              PostgreSQL schema and seed
```
