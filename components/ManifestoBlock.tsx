"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";

export function ManifestoBlock() {
  const { locale } = useLocale();
  const serifFamily =
    locale === "ar" ? "var(--font-arabic)" : "var(--font-serif)";
  const serifWeight = locale === "ar" ? 500 : 400;

  return (
    <section
      id="manifesto"
      className="backdrop-ink text-cream relative overflow-hidden"
    >
      {/* warm ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(184,153,104,0.55) 0%, transparent 60%)"
        }}
        aria-hidden
      />
      <div className="container-editorial py-editorial relative z-10">
        <div className="container-prose text-center">
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            className="inline-block h-px w-24 bg-champagne-300 origin-left mb-12"
            aria-hidden
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-display-lg leading-tight italic text-cream"
            style={{
              fontFamily: serifFamily,
              fontWeight: serifWeight,
              fontStyle: locale === "ar" ? "normal" : "italic"
            }}
          >
            {locale === "en"
              ? "“We did not build this house to be the largest concierge in the Kingdom. We built it to be the one that defines what Saudi luxury means for a generation.”"
              : "«لم نَبْنِ هذه الدار لتكون أكبر كونسيرج في المملكة. بنيناها لتكون التي تُعَرِّف للأجيال ما تعنيه الفخامة السعودية.»"}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 text-eyebrow text-champagne-200"
          >
            {locale === "en"
              ? "— Chapter Forty · Executive Recommendations"
              : "— الفصل الأربعون · التوصيات التنفيذية"}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
