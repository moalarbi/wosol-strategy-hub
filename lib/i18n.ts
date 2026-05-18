// ────────────────────────────────────────────────────────────
// WOSOL Strategy Hub — i18n primitives
// Bilingual AR/EN with RTL handling.
// ────────────────────────────────────────────────────────────

export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  ar: "العربية"
};

export const LOCALE_DIR: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl"
};

// The bilingual primitive: every label, heading, paragraph carries both languages.
export type Bilingual = { en: string; ar: string };

export type BilingualArray = { en: string[]; ar: string[] };

export function pick<T extends Bilingual | BilingualArray>(
  b: T,
  locale: Locale
): T extends BilingualArray ? string[] : string {
  // @ts-expect-error generic narrowing
  return b[locale];
}

// UI chrome strings — used by Navigation, footer, language toggle, etc.
export const UI = {
  brand: { en: "WOSOL", ar: "وصول" },
  brandLong: {
    en: "WOSOL Concierge",
    ar: "وصول كونسيرج"
  },
  partner: {
    en: "Kingdom Centre Riyadh",
    ar: "مركز المملكة، الرياض"
  },
  partnership: {
    en: "WOSOL × Kingdom Centre",
    ar: "وصول × مركز المملكة"
  },
  hubLabel: {
    en: "Strategy Hub",
    ar: "مركز الاستراتيجية"
  },
  classified: {
    en: "Executive Confidential",
    ar: "ملف تنفيذي خاص"
  },
  edition: {
    en: "Edition 01 · Riyadh 2026",
    ar: "الإصدار الأول · الرياض ٢٠٢٦"
  },
  // Section labels
  index: { en: "Index", ar: "الفهرس" },
  chapters: { en: "Chapters", ar: "الفصول" },
  explore: { en: "Explore the Hub", ar: "اكتشف المركز" },
  return: { en: "Return", ar: "رجوع" },
  back: { en: "Back to Index", ar: "العودة للفهرس" },
  next: { en: "Next Chapter", ar: "الفصل التالي" },
  previous: { en: "Previous", ar: "السابق" },
  pillars: { en: "Strategic Pillars", ar: "الركائز الاستراتيجية" },
  operations: { en: "Operational Notes", ar: "ملاحظات تشغيلية" },
  recommendations: {
    en: "Executive Recommendations",
    ar: "توصيات تنفيذية"
  },
  visualDirection: { en: "Visual Direction", ar: "التوجه البصري" },
  imageBriefs: { en: "Image Briefs", ar: "موجز الصور" },
  manifesto: { en: "Manifesto", ar: "بيان" },
  philosophy: { en: "Philosophy", ar: "الفلسفة" },
  whyItMatters: { en: "Why It Matters", ar: "لماذا يهم" },
  switchLang: { en: "العربية", ar: "English" },
  open: { en: "Open Chapter", ar: "افتح الفصل" },
  ofForty: { en: "of 40", ar: "من ٤٠" }
};
