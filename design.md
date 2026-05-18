# Design System — WOSOL Strategy Hub

## Philosophy

The design language is the brand made digital. Every choice — palette,
typography, motion, spacing, restraint — answers a single question: *would a
senior Saudi household feel at home here?*

The reference set is fixed: **Aman** atmosphere, **Ritz-Carlton** editorial,
**Architectural Digest** composition, **Apple** restraint. We never reference
SaaS UI, dashboard culture, or startup landing pages.

---

## Palette

| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#0B1220` | Primary text, dark surfaces (manifesto, recommendation sections) |
| `cream` | `#F5EFE4` | Primary "paper" background — the brand's default state |
| `cream-50` | `#FBF8F2` | Card surfaces, hover states |
| `champagne-300` | `#B89968` | The single metallic — hairlines, accent type, foil-like detail |
| `champagne-200` | `#CDB68A` | Lighter accent for shadows on ink backgrounds |
| `marble` | `#E8E2D2` | Operational notes section (mid-tonal break) |
| `marble-warm` | `#EFE9DA` | Image-brief placeholder gradients |

**Forbidden:** Bright colors, gradients with high saturation, neon, pure white
backgrounds, pure black backgrounds, any third hue introduced "for events" or
"for partnerships".

---

## Typography

Three families. No more.

| Family | CSS variable | Role |
| ------ | ------------ | ---- |
| **Cormorant Garamond** | `--font-serif` | English display — chapter titles, pull-quotes, hero text |
| **Inter** | `--font-sans` | English UI — small caps, eyebrows, buttons, captions |
| **IBM Plex Sans Arabic** | `--font-arabic` | All Arabic content — display and body |

The Tailwind type scale (in `tailwind.config.ts`):

```ts
"display-2xl": clamp(3.5rem, 8vw, 7rem)  // hero
"display-xl":  clamp(2.75rem, 6vw, 5rem) // chapter title
"display-lg":  clamp(2rem, 4.5vw, 3.5rem)// section title
"display-md":  clamp(1.5rem, 3vw, 2.25rem) // sub-section
"eyebrow":     0.75rem, tracking 0.28em  // small-cap labels
```

**The eyebrow style.** Every section opens with a small-caps, wide-tracked
label in champagne. It is the brand's signature typographic gesture — never
omitted.

**RTL handling.** In Arabic, serif italic is dropped (Arabic does not italicise
gracefully), letter-spacing on eyebrows is reduced from `0.28em` to `0.18em`,
and `text-transform: uppercase` is disabled.

---

## Layout

Three containers, three widths.

- `.container-prose` — `max-w-prose` (68ch). Manifesto, pull-quotes, narrative
  paragraphs.
- `.container-editorial` — `max-w-editorial` (1240px). Default page width.
- `.container-wide` — `max-w-wide` (1440px). Navigation, footer, ultra-wide
  imagery.

Vertical rhythm uses two custom spacings: `spacing-editorial` (between major
sections, `clamp(4rem, 10vw, 9rem)`) and `spacing-chapter` (within a chapter,
`clamp(2.5rem, 6vw, 5rem)`).

---

## The signature elements

### Hairline (`.hairline`)
A 1px champagne rule, 3.5rem wide. Used everywhere as the brand's quiet
signature mark. It appears before every chapter, before every title, between
every pillar, before every CTA. It is the most-repeated visual element in the
project.

### Surface (`.surface`)
The card primitive. Cream-50 background, a barely-there champagne border,
700ms ease-editorial transition on hover. Hover brings a soft editorial shadow.

### Chapter number (`.chapter-number`)
A small champagne tabular-numeric label (e.g. `04.II`) that anchors every
chapter section. Acts as a typographic anchor without competing with the
title.

### Backdrops
- `.backdrop-cream` — the default
- `.backdrop-marble` — operational notes
- `.backdrop-ink` — executive recommendations and manifesto

Each backdrop uses radial gradients in champagne tones to add ambient warmth
without overt branding.

---

## Motion

Two easing curves. No more.

- `ease-editorial` (`cubic-bezier(0.22, 1, 0.36, 1)`) — for content reveals.
  Used on fade-up, hairline draws, card entries.
- `ease-cinematic` (`cubic-bezier(0.65, 0, 0.35, 1)`) — for state transitions.
  Used on filter chip selection, nav background change, button hovers.

**Duration discipline.** Default transition durations are **500–1100ms** —
deliberately slower than typical web motion. Speed feels cheap; restraint
feels composed.

**Stagger.** Card grids stagger by 50ms within a row, never more. Anything
faster reads as 'effect'; anything slower reads as 'lag'.

---

## Bilingual

Every textual surface is bilingual. The pattern is uniform:

```ts
{ en: "…", ar: "…" }
```

The language toggle (top-right) writes `lang` and `dir` to `<html>`, which
flips the whole layout to RTL via Tailwind's `rtl:` variant and CSS logical
properties.

The Arabic translations are **composed, not auto-translated**. Voice, cadence,
and cultural register are matched per chapter.

---

## Photography & image briefs

The hub currently uses **placeholder image slots** with detailed art-direction
briefs in each chapter's `imageBriefs` field. Each brief includes:

- `slot` — where the asset is used
- `scene` — the scene to be produced
- `mood` — the emotional/visual mood

The brief format follows the existing brand kit (see `../partner-image-prompts.md`):

> Cream-first, deep navy, muted champagne gold. No visible brand logos. No
> readable text. No watermark. No crowded scenes. No people posing toward
> camera. No alcohol.

When real assets are produced, drop them into `public/assets/chapters/` and
replace the SVG/gradient placeholders in `StrategyPageLayout.tsx`.

---

## Discipline rules

These are the visual analogues of Chapter Forty's "ten disciplines":

1. **No emoji** anywhere — comments, copy, commits.
2. **No bullet point overuse** — prose is the default; lists are reserved.
3. **No exclamation points** in copy.
4. **No more than three typefaces** ever.
5. **No more than two metallic accents** — champagne only.
6. **No drop shadows on text.**
7. **No skeuomorphic textures** — the noise overlay is the only texture.
8. **No icons in headlines.**
9. **No animations longer than 1.4s.**
10. **No banners, no toasts, no popups.** The brand does not interrupt.

---

## Adding a new chapter

1. Open the relevant group file in `lib/strategies/data/`.
2. Add a new `Strategy` object — make sure `slug`, `number`, and `group` are
   set correctly.
3. The homepage grid and the dynamic route both regenerate automatically at
   build time.

If the chapter belongs to a new group, you may add a new file in `data/`,
export the array, and include it in `lib/strategies/index.ts`.

---

## Accessibility

- All interactive elements have visible focus states (cream `outline` on ink).
- Color contrast pairs meet WCAG AA across all text/background combinations.
- Motion respects `prefers-reduced-motion` via Tailwind's `motion-safe:` and
  Framer Motion's built-in handling.
- The language toggle is keyboard-accessible and announces state change to
  screen readers.

---

## A note on restraint

Every component in this codebase was written to do one thing, well, quietly.
If you find yourself reaching for a new color, a new font, a new transition,
or a new icon set — pause. The brand is not asking for more. It is asking for
better.
