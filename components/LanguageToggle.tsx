"use client";

import { useLocale } from "@/lib/locale-context";

export function LanguageToggle() {
  const { locale, toggle } = useLocale();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className="group inline-flex items-center gap-3 px-3 py-2 text-eyebrow text-ink/70 hover:text-ink transition-colors duration-500"
    >
      <span
        className={`transition-opacity duration-500 ${locale === "en" ? "opacity-100" : "opacity-40"}`}
        style={{ letterSpacing: "0.2em" }}
      >
        EN
      </span>
      <span aria-hidden className="block h-3 w-px bg-champagne-300/60" />
      <span
        className={`transition-opacity duration-500 ${locale === "ar" ? "opacity-100" : "opacity-40"}`}
        style={{ fontFamily: "var(--font-arabic)", letterSpacing: "0" }}
      >
        ع
      </span>
    </button>
  );
}
