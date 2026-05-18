"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "./i18n";
import { DEFAULT_LOCALE, LOCALE_DIR } from "./i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "wosol.locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Hydrate from localStorage / <html lang> on mount.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "ar" || saved === "en") {
        applyLocale(saved);
        setLocaleState(saved);
      }
    } catch {
      /* no-op */
    }
  }, []);

  const applyLocale = (l: Locale) => {
    const dir = LOCALE_DIR[l];
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", l);
      document.documentElement.setAttribute("dir", dir);
    }
  };

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    applyLocale(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* no-op */
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "en" ? "ar" : "en");
  }, [locale, setLocale]);

  const value: LocaleContextValue = {
    locale,
    setLocale,
    toggle,
    dir: LOCALE_DIR[locale]
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside a <LocaleProvider />");
  }
  return ctx;
}
