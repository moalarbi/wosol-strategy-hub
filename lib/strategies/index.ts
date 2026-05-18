import type { Strategy } from "./types";
import { BRAND_CHAPTERS } from "./data/01-brand";
import { EXPERIENCE_CHAPTERS } from "./data/02-experience";
import { HOSPITALITY_CHAPTERS } from "./data/03-hospitality";
import { ATELIER_CHAPTERS } from "./data/04-atelier";
import { CONTENT_CHAPTERS } from "./data/05-content";
import { FUNNEL_CHAPTERS } from "./data/06-funnel";
import { MEMBERSHIP_CHAPTERS } from "./data/07-membership";
import { GROWTH_CHAPTERS } from "./data/08-growth";
import { CLOSING_CHAPTERS } from "./data/09-closing";

// ────────────────────────────────────────────────────────────
// The complete 40-chapter index, ordered by chapter number.
// ────────────────────────────────────────────────────────────

const ALL: Strategy[] = [
  ...BRAND_CHAPTERS,
  ...EXPERIENCE_CHAPTERS,
  ...HOSPITALITY_CHAPTERS,
  ...ATELIER_CHAPTERS,
  ...CONTENT_CHAPTERS,
  ...FUNNEL_CHAPTERS,
  ...MEMBERSHIP_CHAPTERS,
  ...GROWTH_CHAPTERS,
  ...CLOSING_CHAPTERS
];

export const STRATEGIES: Strategy[] = ALL.slice().sort((a, b) =>
  a.number.localeCompare(b.number, "en", { numeric: true })
);

export const STRATEGY_SLUGS: string[] = STRATEGIES.map((s) => s.slug);

export function getStrategyBySlug(slug: string): Strategy | undefined {
  return STRATEGIES.find((s) => s.slug === slug);
}

export function getAdjacent(
  slug: string
): { prev: Strategy | null; next: Strategy | null } {
  const i = STRATEGIES.findIndex((s) => s.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? STRATEGIES[i - 1] : null,
    next: i < STRATEGIES.length - 1 ? STRATEGIES[i + 1] : null
  };
}

export type { Strategy } from "./types";
