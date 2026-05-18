"use client";

import { useLocale } from "@/lib/locale-context";
import { UI, pick } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="no-print mt-editorial border-t border-champagne-300/20 bg-cream-50">
      <div className="container-wide py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div
            className="font-serif text-3xl text-ink"
            style={{
              fontFamily: locale === "ar" ? "var(--font-arabic)" : "var(--font-serif)"
            }}
          >
            {pick(UI.brand, locale)}
          </div>
          <span className="hairline mt-3" aria-hidden />
          <p className="mt-4 text-sm text-ink/60 max-w-xs leading-relaxed">
            {locale === "en"
              ? "A quiet-luxury Saudi concierge lifestyle brand, designed for the new generation of high-net-worth living."
              : "علامة فاخرة سعودية لخدمات الكونسيرج، مصمّمة لجيل جديد من نمط حياة ذوي الثروات."}
          </p>
        </div>

        <div>
          <div className="eyebrow">{pick(UI.partnership, locale)}</div>
          <p className="mt-3 text-sm text-ink/70 leading-relaxed">
            {locale === "en"
              ? "Strategic Partnership announced 6 May 2026. An on-site concierge presence inside Kingdom Centre Riyadh — aligned with Saudi Vision 2030 hospitality ambitions."
              : "شراكة استراتيجية أُعلنت في ٦ مايو ٢٠٢٦. حضور كونسيرج داخل مركز المملكة بالرياض، متوافق مع طموحات رؤية السعودية ٢٠٣٠ في قطاع الضيافة."}
          </p>
        </div>

        <div>
          <div className="eyebrow">{pick(UI.edition, locale)}</div>
          <p className="mt-3 text-sm text-ink/70 leading-relaxed">
            {locale === "en"
              ? "Internal document. Prepared for executive review. Not for public distribution."
              : "مستند داخلي. أُعدّ للمراجعة التنفيذية. لا يُتداول علنياً."}
          </p>
          <p className="mt-4 text-xs text-ink/40 tracking-wider">
            © 2026 WOSOL Concierge. {locale === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
          </p>
        </div>
      </div>
    </footer>
  );
}
