# WOSOL × Kingdom Centre — Luxury Strategy Hub

An executive-level, bilingual (AR/EN), forty-chapter strategic dossier for the
launch of **WOSOL Concierge** at **Kingdom Centre Riyadh** — built as a
production-ready Next.js 14 application, designed in quiet-luxury editorial
language, ready for GitHub and Vercel.

> *"We did not build this house to be the largest concierge in the Kingdom. We
> built it to be the one that defines what Saudi luxury means for a generation."*
> — Chapter Forty

---

## What this is

This is not a marketing site. It is a strategic operating document for the
executive board, the operations team, and the brand custodians of WOSOL.

The hub contains **forty chapters**, each a self-contained editorial spread:

- Brand Philosophy, Luxury Positioning, Concierge Services, Saudi Market, Riyadh Retail Trends
- Event Strategy, Booth Experience, Guest Journey, Guest Interaction, Event Activations
- Hospitality Psychology, Butler Experience, SOPs, Staff Training, Body Language, Speech, Children
- Uniform, Scent, Sound, Visual Identity, Gifts
- Content Strategy, Video Direction, Drone Coverage, PR, Influencer, Social Media
- QR Funnel, Retargeting, Pixel Strategy, Lead Collection, HNWI Audience
- Membership Architecture, WOSOL BLACK, VIP Funnel
- Partnership Ecosystem, Lifestyle Expansion, Future Horizons
- Executive Recommendations

Every chapter has: a philosophy, four strategic pillars, six operational notes,
two-to-three image briefs for the production team, and three-to-four executive
recommendations — fully bilingual in Arabic and English.

---

## Tech stack

| Layer | Choice |
| ----- | ------ |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | TailwindCSS with editorial design tokens |
| Animation | Framer Motion |
| Typography | Cormorant Garamond (EN serif), Inter (EN sans), IBM Plex Sans Arabic (AR) |
| i18n | Lightweight client-side locale context with RTL support |
| Deployment | Vercel-ready, zero-config |

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm run start
```

---

## Project structure

```
wosol-strategy-hub/
├── app/
│   ├── globals.css              # Design system + utilities
│   ├── layout.tsx               # Root layout, fonts, LocaleProvider
│   ├── page.tsx                 # Cinematic homepage
│   └── strategy/[slug]/page.tsx # Dynamic strategy chapter page (static at build)
├── components/
│   ├── Navigation.tsx           # Sticky top chrome with language toggle
│   ├── LanguageToggle.tsx       # EN ↔ AR with RTL switching
│   ├── HomeHero.tsx             # Cinematic opening section
│   ├── ExecutiveSummary.tsx     # 4-figure executive snapshot
│   ├── ChapterGrid.tsx          # 40 cards with group filtering
│   ├── StrategyCard.tsx         # Editorial card primitive
│   ├── StrategyPageLayout.tsx   # Reusable 5-section chapter spread
│   ├── ManifestoBlock.tsx       # Closing pull-quote
│   └── Footer.tsx               # Editorial footer
├── lib/
│   ├── i18n.ts                  # Locale primitives + UI dictionary
│   ├── locale-context.tsx       # Client locale state, localStorage, RTL handling
│   └── strategies/
│       ├── types.ts             # Strategy data schema
│       ├── index.ts             # Aggregate + helpers (getBySlug, getAdjacent)
│       └── data/                # Nine grouped chapter files (40 chapters total)
│           ├── 01-brand.ts
│           ├── 02-experience.ts
│           ├── 03-hospitality.ts
│           ├── 04-atelier.ts
│           ├── 05-content.ts
│           ├── 06-funnel.ts
│           ├── 07-membership.ts
│           ├── 08-growth.ts
│           └── 09-closing.ts
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── package.json
├── README.md          ← you are here
├── design.md          ← visual design system documentation
└── deployment.md      ← GitHub + Vercel deployment guide
```

---

## Design language

The hub is built in the brand's quiet-luxury palette:

| Token | Hex | Role |
| ----- | --- | ---- |
| `ink` | `#0B1220` | Deep navy — primary text, dark surfaces |
| `cream` | `#F5EFE4` | Warm cream — primary "paper" background |
| `champagne` | `#B89968` | Muted champagne gold — single metallic accent |
| `marble` | `#E8E2D2` | Soft beige marble — secondary surfaces |

The visual reference is **Aman** atmosphere, **Ritz-Carlton** editorial energy,
**Architectural Digest** styling — never SaaS, never startup, never neon. Every
surface is composed; every detail is intentional.

See [`design.md`](./design.md) for the full design system.

---

## Working with the content

All forty chapters live as typed data in `lib/strategies/data/`. To edit a
chapter:

1. Open the relevant group file (e.g. `01-brand.ts`).
2. Find the chapter object by its `slug`.
3. Edit the fields — every textual field is `{ en: string, ar: string }`.

The site automatically regenerates static routes for every chapter at build
time, so adding or removing chapters requires no other code changes.

---

## Brand discipline

This codebase is a brand asset, not just a website. A few rules to preserve the
discipline:

- **No bright colors.** The Tailwind palette is locked.
- **No loud type.** Stick to the serif/sans/Arabic trio.
- **No emoji.** Anywhere. In code comments, in commit messages, in copy.
- **No vanity metrics in copy.** This is an executive document.
- **No SaaS phrasing.** No "platform", "app", "users". WOSOL is a house.

---

## License

© 2026 WOSOL Concierge. Internal document. Not for public distribution.
