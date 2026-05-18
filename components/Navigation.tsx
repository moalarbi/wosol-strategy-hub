"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageToggle } from "./LanguageToggle";
import { useLocale } from "@/lib/locale-context";
import { UI, pick } from "@/lib/i18n";

export function Navigation() {
  const { locale } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-editorial ${
        scrolled
          ? "bg-cream/85 backdrop-blur border-b border-champagne-300/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-baseline gap-3">
          <span
            className="font-serif text-2xl tracking-tight text-ink"
            style={{
              fontFamily: locale === "ar" ? "var(--font-arabic)" : "var(--font-serif)"
            }}
          >
            {pick(UI.brand, locale)}
          </span>
          <span className="hairline" aria-hidden />
          <span className="text-eyebrow text-ink/60">
            {pick(UI.hubLabel, locale)}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/#chapters"
            className="text-eyebrow text-ink/70 hover:text-ink transition-colors duration-500"
          >
            {pick(UI.chapters, locale)}
          </Link>
          <Link
            href="/#manifesto"
            className="text-eyebrow text-ink/70 hover:text-ink transition-colors duration-500"
          >
            {pick(UI.manifesto, locale)}
          </Link>
          <Link
            href="/#index"
            className="text-eyebrow text-ink/70 hover:text-ink transition-colors duration-500"
          >
            {pick(UI.index, locale)}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden lg:inline-block text-eyebrow text-ink/40">
            {pick(UI.classified, locale)}
          </span>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
