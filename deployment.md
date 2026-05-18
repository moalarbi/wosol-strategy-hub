# Deployment Guide

This is a standard Next.js 14 App Router project. Deployment is intentionally
simple — the discipline is in the brand, not in the infrastructure.

---

## 1. Local prerequisites

| Tool | Version |
| ---- | ------- |
| Node | ≥ 18.17 (recommended: 20.x LTS) |
| npm | ≥ 10 (or pnpm/yarn, your choice) |
| Git | ≥ 2.40 |

```bash
node -v
npm -v
git --version
```

---

## 2. First-time setup

```bash
cd wosol-strategy-hub

# install dependencies
npm install

# run the dev server
npm run dev
```

Open <http://localhost:3000>. The site should render at the cream homepage with
the hero, the four-figure executive summary, the forty-card grid, and the
manifesto closing.

Run a production build locally to confirm the project compiles cleanly:

```bash
npm run build
npm run start
```

---

## 3. Push to GitHub

```bash
# from inside wosol-strategy-hub/
git init
git add .
git commit -m "Initial commit — WOSOL × Kingdom Centre strategy hub"

# create a new private repo at github.com (recommended: private)
# then add the remote
git remote add origin git@github.com:<your-org>/wosol-strategy-hub.git
git branch -M main
git push -u origin main
```

> **Privacy note.** This is an internal executive document. Use a **private**
> repository unless instructed otherwise by the founder.

---

## 4. Deploy to Vercel

Vercel is the recommended host — Next.js is built and maintained by the same
company, so zero-config deployment is fully supported.

### Option A — One-click via the Vercel dashboard

1. Go to <https://vercel.com/new>.
2. Click **Import Git Repository**.
3. Authorise GitHub and select `wosol-strategy-hub`.
4. Vercel auto-detects Next.js. No environment variables required.
5. Click **Deploy**.

Vercel will run `npm install`, `npm run build`, and serve the output. First
deploy typically completes in 60–90 seconds.

### Option B — Via the Vercel CLI

```bash
# install the CLI once
npm i -g vercel

# from inside wosol-strategy-hub/
vercel              # creates a preview deployment
vercel --prod       # promotes to production
```

---

## 5. Custom domain

Once the production deployment is up:

1. Go to the project on Vercel → **Settings** → **Domains**.
2. Add your domain (e.g. `strategy.wosol.sa`).
3. Configure the DNS records exactly as Vercel instructs (typically a single
   CNAME or A record at your DNS provider).
4. SSL is provisioned automatically.

---

## 6. Updating the content

The content of all forty chapters lives in `lib/strategies/data/`. To revise:

```bash
git checkout -b edit/chapter-04-booth-experience
# edit the file in your editor
git add lib/strategies/data/02-experience.ts
git commit -m "Refine booth experience operational notes"
git push origin edit/chapter-04-booth-experience
```

Open a pull request, get the brand custodian's review, merge to `main`.
Vercel auto-deploys on every push to `main` and produces a preview URL for
every pull request.

---

## 7. Environment variables (none required)

This project intentionally has **zero runtime environment variables**. The
content is static, the routes are statically generated at build time, and no
external services are called at runtime.

If you later add CMS integration, analytics, or a contact endpoint, document
the environment variables here and in `.env.example`.

---

## 8. Build configuration

Vercel uses the defaults:

| Setting | Value |
| ------- | ----- |
| Framework Preset | Next.js (auto-detected) |
| Build Command | `npm run build` |
| Output Directory | `.next` (auto-detected) |
| Install Command | `npm install` |
| Node.js Version | 20.x |

No customisation needed.

---

## 9. Performance & SEO

- The site uses Next.js static generation (`generateStaticParams`) so every
  one of the 40 strategy pages is pre-rendered at build time. Server
  computation per request is essentially zero.
- Fonts use `next/font` with `display: swap` — no FOUT.
- Images are intentionally minimal in this edition (design-token + briefs).
  When real photography is added, use `next/image` with the `priority` flag
  on hero images.
- `<title>` and `<meta description>` are generated per chapter via the
  dynamic route's `generateMetadata`.

---

## 10. Troubleshooting

**`Module not found: @/...`**
The TypeScript path alias `@/*` points to the project root in `tsconfig.json`.
If your IDE flags the imports, restart the TS server.

**Arabic text shows boxes**
The Arabic font (IBM Plex Sans Arabic) is loaded via `next/font` in
`app/layout.tsx`. On first run, ensure your network is reachable to Google
Fonts; subsequent builds cache the font locally.

**Build is slow**
Static generation builds 40 pages. Build times under 60 seconds are normal.
For faster iteration, use `npm run dev`.

**RTL layout looks wrong**
Confirm the language toggle is writing `dir="rtl"` on `<html>`. If it isn't,
clear `localStorage` (key `wosol.locale`) and refresh.

---

## 11. Internal handoff checklist

Before sharing the deployment URL with the board:

- [ ] Production build runs cleanly (`npm run build`)
- [ ] All 40 chapter routes load (`/strategy/brand-philosophy`, etc.)
- [ ] EN ↔ AR toggle works on every page
- [ ] RTL layout is correct in Arabic
- [ ] Mobile responsive (test at 375px, 768px, 1280px)
- [ ] No console errors in production
- [ ] Custom domain configured and HTTPS working
- [ ] Repository is set to **private**
- [ ] Board has been added as Vercel project members (Viewer role)

---

## 12. The discipline

This deployment is not a launch. It is a tool. The launch is the moment the
booth opens at Kingdom Centre. Treat this site as the institutional document
that prepares the team for that moment — and continues to define the brand
long after.
