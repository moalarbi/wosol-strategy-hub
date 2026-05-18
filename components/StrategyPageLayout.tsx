"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { pick, UI } from "@/lib/i18n";
import type { Strategy } from "@/lib/strategies/types";

type Props = {
  strategy: Strategy;
  prev?: Strategy | null;
  next?: Strategy | null;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.06 * i }
  })
};

export function StrategyPageLayout({ strategy, prev, next }: Props) {
  const { locale } = useLocale();
  const serifFamily =
    locale === "ar" ? "var(--font-arabic)" : "var(--font-serif)";
  const serifWeight = locale === "ar" ? 500 : 400;

  return (
    <article className="pt-24">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="container-editorial pt-chapter pb-editorial">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
          className="flex items-center justify-between"
        >
          <Link
            href="/#chapters"
            className="text-eyebrow text-ink/60 hover:text-ink transition-colors"
          >
            ← {pick(UI.back, locale)}
          </Link>
          <span className="eyebrow text-ink/40">
            {strategy.number} · {pick(strategy.group, locale)}
          </span>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={1} className="mt-12">
          <span className="hairline" aria-hidden />
          <div className="eyebrow mt-4">{pick(strategy.eyebrow, locale)}</div>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={2}
          className="mt-6 text-display-xl text-ink"
          style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
        >
          {pick(strategy.title, locale)}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={3}
          className="mt-8 max-w-prose text-lg text-ink/75 leading-[1.65]"
        >
          {pick(strategy.subtitle, locale)}
        </motion.p>
      </section>

      {/* ── Philosophy & Why It Matters ─────────────────────── */}
      <section className="bg-cream-50 border-t border-b border-champagne-300/20">
        <div className="container-editorial py-editorial grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="chapter-number">{strategy.number}.I</span>
            <h2
              className="mt-3 text-display-md text-ink"
              style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
            >
              {pick(UI.philosophy, locale)}
            </h2>
            <span className="hairline mt-4" aria-hidden />
          </div>
          <div className="lg:col-span-8 space-y-7 text-[17px] leading-[1.75] text-ink/80">
            <p>{pick(strategy.lead, locale)}</p>
            <div>
              <span className="eyebrow">{pick(UI.whyItMatters, locale)}</span>
              <p className="mt-3">{pick(strategy.whyItMatters, locale)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Strategic Pillars ───────────────────────────────── */}
      <section className="container-editorial py-editorial">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="chapter-number">{strategy.number}.II</span>
            <h2
              className="mt-3 text-display-md text-ink"
              style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
            >
              {pick(UI.pillars, locale)}
            </h2>
            <span className="hairline mt-4" aria-hidden />
          </div>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {strategy.pillars.map((p, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
              className="relative"
            >
              <div className="chapter-number">{`0${i + 1}`.slice(-2)}</div>
              <h3
                className="mt-2 text-2xl leading-tight text-ink"
                style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
              >
                {pick(p.title, locale)}
              </h3>
              <span className="hairline mt-3" aria-hidden />
              <p className="mt-4 text-[16px] leading-[1.75] text-ink/75">
                {pick(p.body, locale)}
              </p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* ── Operational Notes ───────────────────────────────── */}
      <section className="backdrop-marble border-t border-b border-champagne-300/20">
        <div className="container-editorial py-editorial grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="chapter-number">{strategy.number}.III</span>
            <h2
              className="mt-3 text-display-md text-ink"
              style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
            >
              {pick(UI.operations, locale)}
            </h2>
            <span className="hairline mt-4" aria-hidden />
          </div>
          <ul className="lg:col-span-8 space-y-5">
            {pick(strategy.operations, locale).map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.04 * i }}
                className="grid grid-cols-[2.5rem_1fr] gap-4 items-start text-[16px] leading-[1.75] text-ink/80"
              >
                <span className="font-serif text-champagne-400 text-sm pt-1 tabular-nums">
                  — {`0${i + 1}`.slice(-2)}
                </span>
                <span>{line}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Visual Direction / Image Briefs ─────────────────── */}
      <section className="container-editorial py-editorial">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="chapter-number">{strategy.number}.IV</span>
            <h2
              className="mt-3 text-display-md text-ink"
              style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
            >
              {pick(UI.visualDirection, locale)}
            </h2>
            <span className="hairline mt-4" aria-hidden />
          </div>
          <p className="max-w-md text-sm text-ink/55 leading-relaxed">
            {locale === "en"
              ? "Editorial briefs for the production team. Cream-first, deep navy, muted champagne gold. No logos. No readable text. No alcohol."
              : "موجز تحريري لفريق الإنتاج. كريمي أولاً، كحلي عميق، شامبانيا ذهبية هادئة. لا شعارات، لا نصوص مقروءة، لا كحول."}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategy.imageBriefs.map((b, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
              className="surface p-6 lg:p-7 flex flex-col"
            >
              {/* Decorative cream/champagne placeholder — represents the image slot */}
              <div className="aspect-[8/5] w-full bg-gradient-to-br from-marble-warm via-cream-100 to-champagne-50 border border-champagne-300/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-50" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <span className="text-eyebrow text-ink/40">
                    {strategy.number}.IV.{i + 1}
                  </span>
                  <span className="hairline" aria-hidden />
                </div>
              </div>
              <figcaption className="mt-5">
                <span className="eyebrow text-champagne-400">
                  {pick(b.slot, locale)}
                </span>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
                  {pick(b.scene, locale)}
                </p>
                <p className="mt-3 text-sm italic text-ink/55">{pick(b.mood, locale)}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ── Executive Recommendations ───────────────────────── */}
      <section className="backdrop-ink text-cream">
        <div className="container-editorial py-editorial grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="chapter-number text-champagne-200">{strategy.number}.V</span>
            <h2
              className="mt-3 text-display-md text-cream"
              style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
            >
              {pick(UI.recommendations, locale)}
            </h2>
            <span className="hairline mt-4" aria-hidden />
          </div>
          <ol className="lg:col-span-8 space-y-10">
            {strategy.recommendations.map((r, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
                className="grid grid-cols-[3rem_1fr] gap-5"
              >
                <span className="font-serif text-3xl text-champagne-300 tabular-nums">
                  {`0${i + 1}`.slice(-2)}
                </span>
                <div>
                  <h3
                    className="text-xl text-cream"
                    style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
                  >
                    {pick(r.title, locale)}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-[1.75] text-cream/75">
                    {pick(r.body, locale)}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Manifesto Closing ───────────────────────────────── */}
      <section className="container-editorial py-editorial">
        <div className="container-prose text-center">
          <span className="hairline mx-auto" aria-hidden />
          <p
            className="pullquote mt-8"
            style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
          >
            “{pick(strategy.manifesto, locale)}”
          </p>
          <span className="hairline mx-auto mt-8" aria-hidden />
        </div>
      </section>

      {/* ── Prev / Next ─────────────────────────────────────── */}
      <section className="container-editorial pb-editorial">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-champagne-300/30 pt-10">
          {prev ? (
            <Link
              href={`/strategy/${prev.slug}`}
              className="surface p-6 group hover:bg-cream"
            >
              <span className="text-eyebrow text-ink/50">
                ← {pick(UI.previous, locale)} · {prev.number}
              </span>
              <h4
                className="mt-3 text-xl text-ink leading-snug"
                style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
              >
                {pick(prev.title, locale)}
              </h4>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/strategy/${next.slug}`}
              className="surface p-6 group hover:bg-cream md:text-right"
            >
              <span className="text-eyebrow text-ink/50">
                {pick(UI.next, locale)} · {next.number} →
              </span>
              <h4
                className="mt-3 text-xl text-ink leading-snug"
                style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
              >
                {pick(next.title, locale)}
              </h4>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </article>
  );
}
