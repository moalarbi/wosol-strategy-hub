"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { pick, UI } from "@/lib/i18n";
import type { Strategy } from "@/lib/strategies/types";

export function StrategyCard({ strategy, index }: { strategy: Strategy; index: number }) {
  const { locale } = useLocale();
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(0.05 * (index % 6), 0.3)
      }}
      className="group"
    >
      <Link
        href={`/strategy/${strategy.slug}`}
        className="surface flex h-full flex-col justify-between p-7 lg:p-8 hover:bg-cream hover:border-champagne-300/70 hover:shadow-editorial"
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="chapter-number">{strategy.number}</span>
            <span className="eyebrow text-ink/40">{pick(strategy.group, locale)}</span>
          </div>

          <span className="hairline mt-5" aria-hidden />

          <h3
            className="mt-6 text-display-md leading-tight text-ink"
            style={{
              fontFamily:
                locale === "ar" ? "var(--font-arabic)" : "var(--font-serif)",
              fontWeight: locale === "ar" ? 500 : 400
            }}
          >
            {pick(strategy.title, locale)}
          </h3>

          <p className="mt-4 text-[15px] leading-relaxed text-ink/65 line-clamp-4">
            {pick(strategy.subtitle, locale)}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-eyebrow text-ink/40">
            {strategy.number} {pick(UI.ofForty, locale)}
          </span>
          <span className="inline-flex items-center gap-2 text-eyebrow text-champagne-400 group-hover:text-ink transition-colors">
            {pick(UI.open, locale)}
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.li>
  );
}
