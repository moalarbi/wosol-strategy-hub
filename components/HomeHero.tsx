"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { UI, pick } from "@/lib/i18n";

export function HomeHero() {
  const { locale } = useLocale();
  const serifFamily =
    locale === "ar" ? "var(--font-arabic)" : "var(--font-serif)";
  const serifWeight = locale === "ar" ? 500 : 400;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 overflow-hidden">
      {/* ambient marble glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-noise" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[60vw] h-[60vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(184,153,104,0.18) 0%, transparent 60%)"
        }}
        aria-hidden
      />

      <div className="container-editorial relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <span className="hairline" aria-hidden />
          <span className="eyebrow">{pick(UI.partnership, locale)}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-8 text-display-2xl text-ink"
          style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
        >
          {locale === "en" ? (
            <>
              The Quiet
              <br />
              <em className="italic text-champagne-400">Authority</em> of Saudi
              <br />
              Luxury Hospitality.
            </>
          ) : (
            <>
              السلطة الهادئة
              <br />
              <em className="not-italic text-champagne-400">للضيافة</em>
              <br />
              السعودية الفاخرة.
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-10 max-w-prose text-lg leading-[1.7] text-ink/75"
        >
          {locale === "en"
            ? "An executive strategy hub for the launch of WOSOL Concierge at Kingdom Centre, Riyadh — a forty-chapter dossier on philosophy, hospitality, content, funnel, membership, and growth. Composed for the board. Composed for the house."
            : "مركز استراتيجية تنفيذي لإطلاق وصول كونسيرج في مركز المملكة بالرياض — ملفّ من أربعين فصلاً عن الفلسفة، الضيافة، المحتوى، القُمع، العضوية، والنمو. مُؤلَّف للمجلس. مُؤلَّف للدار."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="mt-14 flex flex-wrap items-center gap-4"
        >
          <a href="#chapters" className="btn-quiet">
            <span>{pick(UI.explore, locale)}</span>
            <span aria-hidden>↓</span>
          </a>
          <a href="#executive" className="btn-champagne">
            <span>
              {locale === "en" ? "Executive Summary" : "الملخص التنفيذي"}
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="mt-20 flex flex-wrap items-end justify-between gap-y-6 text-eyebrow text-ink/40 border-t border-champagne-300/30 pt-6"
        >
          <span>{pick(UI.classified, locale)}</span>
          <span>{pick(UI.edition, locale)}</span>
          <span>
            {locale === "en"
              ? "Forty Chapters · One Decision"
              : "أربعون فصلاً · قرار واحد"}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
