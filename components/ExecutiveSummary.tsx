"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";

const stats = [
  {
    figure: "40",
    en: "Strategic chapters across philosophy, experience, content, funnel, and growth.",
    ar: "فصلاً استراتيجياً تغطي الفلسفة، التجربة، المحتوى، القُمع، والنمو."
  },
  {
    figure: "100",
    en: "Households reserved at the apex of the WOSOL BLACK membership architecture in the first five years.",
    ar: "بيتٌ محجوز عند قمّة هندسة عضوية وصول بلاك خلال السنوات الخمس الأولى."
  },
  {
    figure: "7",
    en: "Territories of life — Travel, Residence, Wardrobe, Table, Health, Family, Discretion — owned by senior custodians.",
    ar: "أقاليم للحياة — السفر، البيت، الخزانة، المائدة، الصحة، الأسرة، التحفُّظ — يُشرف عليها قِوامون رفيعون."
  },
  {
    figure: "10",
    en: "Decisions and ten disciplines compressed into a single executive chapter for the board.",
    ar: "قرارات وعشرة انضباطات مضغوطة في فصل تنفيذي واحد للمجلس."
  }
];

export function ExecutiveSummary() {
  const { locale } = useLocale();
  const serifFamily =
    locale === "ar" ? "var(--font-arabic)" : "var(--font-serif)";
  const serifWeight = locale === "ar" ? 500 : 400;

  return (
    <section
      id="executive"
      className="backdrop-marble border-t border-b border-champagne-300/20"
    >
      <div className="container-editorial py-editorial">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <span className="hairline" aria-hidden />
            <div className="eyebrow mt-3">
              {locale === "en" ? "Executive Summary" : "الملخص التنفيذي"}
            </div>
            <h2
              className="mt-6 text-display-lg text-ink leading-tight"
              style={{ fontFamily: serifFamily, fontWeight: serifWeight }}
            >
              {locale === "en"
                ? "A house, not a service. A doctrine, not a deck."
                : "دارٌ لا خدمة. عقيدةٌ لا عرض."}
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink/70 max-w-md">
              {locale === "en"
                ? "WOSOL Concierge is a Saudi-rooted luxury hospitality house, launching its first physical custodianship at Kingdom Centre Riyadh. This hub is the brand's strategic doctrine — philosophy, operations, content, funnel, membership, and the disciplines that protect them."
                : "وصول كونسيرج دارٌ سعودية الجذور للضيافة الفاخرة، تطلق أول قِوامة مادية لها في مركز المملكة بالرياض. هذا المركز هو عقيدة العلامة الاستراتيجية — الفلسفة، العمليات، المحتوى، القُمع، العضوية، والانضباطات التي تحميها."}
            </p>
          </div>

          <ul className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10">
            {stats.map((stat, i) => (
              <motion.li
                key={stat.figure}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
              >
                <div
                  className="font-serif text-display-xl text-champagne-400 leading-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {stat.figure}
                </div>
                <span className="hairline mt-3" aria-hidden />
                <p className="mt-4 text-[16px] leading-relaxed text-ink/75 max-w-sm">
                  {locale === "en" ? stat.en : stat.ar}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
