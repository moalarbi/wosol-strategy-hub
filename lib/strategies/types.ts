import type { Bilingual, BilingualArray } from "../i18n";

// ────────────────────────────────────────────────────────────
// Schema for a single strategy chapter — used across all 40 pages.
// Every chapter is a self-contained editorial spread.
// ────────────────────────────────────────────────────────────

export type Pillar = {
  title: Bilingual;
  body: Bilingual;
};

export type ImageBrief = {
  slot: Bilingual;          // where the asset is used
  scene: Bilingual;         // the scene to be produced
  mood: Bilingual;          // the emotional/visual mood
};

export type Recommendation = {
  title: Bilingual;
  body: Bilingual;
};

export type Strategy = {
  slug: string;             // url slug (kebab-case)
  number: string;           // "01" .. "40", used as chapter index
  group: Bilingual;         // section grouping (Brand / Experience / Funnel / Membership / Content / Operations / Growth)
  eyebrow: Bilingual;       // small caps line above title
  title: Bilingual;         // chapter title
  subtitle: Bilingual;      // editorial lead (~one short sentence)
  lead: Bilingual;          // opening paragraph (the "philosophy")
  whyItMatters: Bilingual;  // strategic stake
  pillars: Pillar[];        // 3–5 strategic pillars
  operations: BilingualArray;       // operational notes / SOPs (5–10 bullets, prose-style)
  imageBriefs: ImageBrief[];        // 2–3 visual direction briefs
  recommendations: Recommendation[]; // 3–4 executive recommendations
  manifesto: Bilingual;     // closing one-line manifesto
};

export type StrategyGroupKey =
  | "brand"
  | "experience"
  | "guest"
  | "atelier"
  | "content"
  | "funnel"
  | "membership"
  | "operations"
  | "growth";
