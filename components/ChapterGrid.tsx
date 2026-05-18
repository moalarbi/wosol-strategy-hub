"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { STRATEGIES } from "@/lib/strategies";
import { StrategyCard } from "./StrategyCard";

// Group keys derived from the data — used as filter chips.
function uniqueGroups(locale: "en" | "ar") {
  const map = new Map<string, string>();
  STRATEGIES.forEach((s) => {
    map.set(s.group.en, locale === "en" ? s.group.en : s.group.ar);
  });
  return Array.from(map.entries()); // [enKey, label]
}

export function ChapterGrid() {
  const { locale } = useLocale();
  const [activeGroup, setActiveGroup] = useState<string | "ALL">("ALL");

  const groups = useMemo(() => uniqueGroups(locale), [locale]);

  const filtered = useMemo(() => {
    if (activeGroup === "ALL") return STRATEGIES;
    return STRATEGIES.filter((s) => s.group.en === activeGroup);
  }, [activeGroup]);

  return (
    <section id="chapters" className="container-editorial py-editorial">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <span className="hairline" aria-hidden />
          <div className="eyebrow mt-3">
            {locale === "en" ? "The Forty Chapters" : "الفصول الأربعون"}
          </div>
          <h2
            className="mt-6 text-display-lg text-ink leading-tight"
            style={{
              fontFamily:
                locale === "ar" ? "var(--font-arabic)" : "var(--font-serif)",
              fontWeight: locale === "ar" ? 500 : 400
            }}
          >
            {locale === "en" ? "Index" : "الفهرس"}
          </h2>
        </div>

        {/* group filter chips */}
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={activeGroup === "ALL"}
            label={locale === "en" ? "All" : "الكل"}
            onClick={() => setActiveGroup("ALL")}
          />
          {groups.map(([enKey, label]) => (
            <FilterChip
              key={enKey}
              active={activeGroup === enKey}
              label={label}
              onClick={() => setActiveGroup(enKey)}
            />
          ))}
        </div>
      </div>

      <motion.ul
        layout
        className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((s, i) => (
          <StrategyCard key={s.slug} strategy={s} index={i} />
        ))}
      </motion.ul>
    </section>
  );
}

function FilterChip({
  active,
  label,
  onClick
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-eyebrow transition-all duration-500 ease-editorial border ${
        active
          ? "bg-ink text-cream border-ink"
          : "bg-transparent text-ink/65 border-ink/15 hover:border-ink/40"
      }`}
    >
      {label}
    </button>
  );
}
