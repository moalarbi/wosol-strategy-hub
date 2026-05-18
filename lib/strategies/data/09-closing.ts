import type { Strategy } from "../types";

const G = { en: "Closing", ar: "الخاتمة" };

export const CLOSING_CHAPTERS: Strategy[] = [
  // ──────────────────────────────────────────────────────────
  {
    slug: "executive-recommendations",
    number: "40",
    group: G,
    eyebrow: { en: "Chapter Forty · The Decisions", ar: "الفصل الأربعون · القرارات" },
    title: { en: "Executive Recommendations", ar: "التوصيات التنفيذية" },
    subtitle: {
      en: "If the executive board chooses to act on only one chapter of this document, this is the chapter.",
      ar: "إذا اختار المجلس التنفيذي التحرّك بناءً على فصل واحد فقط من هذه الوثيقة، فهذا هو الفصل."
    },
    lead: {
      en: "Strategy without decisions is observation. This chapter compresses the entire document into ten decisions the executive board is asked to make and ten disciplines the board is asked to enforce. Each decision is binary: accept or refuse. Each discipline is annual: continue to hold or release. The board's value to the brand is not its participation; it is its willingness to hold these decisions and disciplines steady when the operational team faces pressure to deviate.",
      ar: "الاستراتيجية بدون قرارات هي ملاحظة. يضغط هذا الفصل الوثيقة كاملة في عشرة قرارات يُطلَب من المجلس التنفيذي اتخاذها وعشرة انضباطات يُطلَب من المجلس فرضها. كل قرار ثنائي: قبول أو رفض. كل انضباط سنوي: استمرار في الإمساك أو إفلات. قيمة المجلس للعلامة ليست في حضوره؛ هي في استعداده لإمساك هذه القرارات والانضباطات ثابتة حين يواجه فريق العمليات ضغوطاً للانحراف."
    },
    whyItMatters: {
      en: "Brands at this tier are made or broken by board-level discipline, not by team-level execution. The team will execute whatever the board permits. This chapter defines what is permitted.",
      ar: "تُصنَع أو تُكسَر العلامات في هذه الطبقة بانضباط المجلس، لا بتنفيذ الفريق. سينفّذ الفريق ما يسمح به المجلس. يُعرِّف هذا الفصل ما هو مسموح."
        },
    pillars: [
      {
        title: { en: "Ten Decisions to Accept", ar: "عشرة قرارات للقبول" },
        body: {
          en: "(1) Accept the philosophy in Chapter 1 as doctrine. (2) Accept the positioning frame in Chapter 2. (3) Accept the membership architecture in Chapters 21–23. (4) Accept the WOSOL BLACK cap. (5) Accept the no-commission principle in Chapter 25. (6) Accept the refusal list in Chapter 31. (7) Accept the press discipline in Chapter 37. (8) Accept the patronage model in Chapter 38. (9) Accept the geographic expansion order in Chapter 26 (Saudi anchor, then London). (10) Accept the data discipline in Chapter 19.",
          ar: "(١) قبول الفلسفة في الفصل ١ بوصفها عقيدة. (٢) قبول إطار التموضع في الفصل ٢. (٣) قبول هندسة العضوية في الفصول ٢١-٢٣. (٤) قبول سقف وصول بلاك. (٥) قبول مبدأ \"لا عمولات\" في الفصل ٢٥. (٦) قبول قائمة الرفض في الفصل ٣١. (٧) قبول انضباط الإعلام في الفصل ٣٧. (٨) قبول نموذج الرعاية في الفصل ٣٨. (٩) قبول ترتيب التوسع الجغرافي في الفصل ٢٦ (المرساة السعودية، ثم لندن). (١٠) قبول انضباط البيانات في الفصل ١٩."
        }
      },
      {
        title: { en: "Ten Disciplines to Enforce", ar: "عشرة انضباطات للفرض" },
        body: {
          en: "(1) Annual membership cap at 15% growth or below. (2) BLACK cap at 100 households for five years. (3) No mass-market tier ever. (4) No commissions from partners. (5) No Dubai expansion before year six. (6) No discounting, no promo codes, no public price list. (7) No paid influencer marketing. (8) No agency-led press relationships. (9) No team headcount growth faster than training capacity. (10) No founder dependence in member-facing decisions by year seven.",
          ar: "(١) سقف نمو العضوية السنوي عند ١٥٪ أو دون. (٢) سقف بلاك عند ١٠٠ بيت لخمس سنوات. (٣) لا فئة جماهيرية أبداً. (٤) لا عمولات من الشركاء. (٥) لا توسع لدبي قبل السنة السادسة. (٦) لا تخفيضات، لا أكواد، لا قائمة أسعار علنية. (٧) لا تسويق مؤثرين مدفوع. (٨) لا علاقات إعلام تقودها الوكالات. (٩) لا نمو في عدد الفريق أسرع من قدرة التدريب. (١٠) لا اعتماد على المؤسس في قرارات تواجه الأعضاء بحلول السنة السابعة."
        }
      },
      {
        title: { en: "The First 100 Days", ar: "أول مئة يوم" },
        body: {
          en: "Days 1–30: finalise philosophy and positioning documents, lock the launch event guest list, commission the signature scent and uniforms. Days 31–60: complete custodian recruitment and Cycle 1 training, build the booth, finalise the QR/funnel architecture. Days 61–100: soft launch with the founders' dinner (Day 75), open the booth (Day 90), execute the first PR moment (Day 95).",
          ar: "اليوم ١-٣٠: إنهاء وثائق الفلسفة والتموضع، إغلاق قائمة ضيوف حدث الإطلاق، تكليف العطر والأزياء المميَّزة. اليوم ٣١-٦٠: إكمال تجنيد القِوامين وتدريب الدورة الأولى، بناء المنصة، إنهاء هندسة الـ QR/القُمع. اليوم ٦١-١٠٠: إطلاق ناعم بعشاء المؤسسين (اليوم ٧٥)، فتح المنصة (اليوم ٩٠)، تنفيذ أول لحظة علاقات عامة (اليوم ٩٥)."
        }
      },
      {
        title: { en: "Year One Success Metrics", ar: "مقاييس نجاح السنة الأولى" },
        body: {
          en: "Not impressions. Not followers. Not booth foot traffic. The metrics are: number of qualified members confirmed (target: 80–120), member retention at year one (target: 95%), unprompted editorial mentions in anchor titles (target: 6–10), number of senior cultural figures hosted (target: 25), number of patronage commitments (target: 4–6). Vanity is not measured.",
          ar: "ليس الانطباعات. ليس المتابعين. ليس حركة قدم المنصة. المقاييس هي: عدد الأعضاء المؤهَّلين المؤكَّدين (الهدف: ٨٠-١٢٠)، احتفاظ الأعضاء في السنة الأولى (الهدف: ٩٥٪)، الذكر التحريري غير المُحفَّز في المطبوعات المرساة (الهدف: ٦-١٠)، عدد الشخصيات الثقافية الرفيعة المُستضافة (الهدف: ٢٥)، عدد التزامات الرعاية (الهدف: ٤-٦). الكميات السطحية لا تُقاس."
        }
      }
    ],
    operations: {
      en: [
        "An annual 'state of the house' memo from the founder to the board — 1,200 words maximum — reviewing the year against the ten decisions and ten disciplines.",
        "Each board meeting opens with a five-minute reading of the philosophy chapter, in Arabic and English, on rotation. The discipline is the brand.",
        "An external annual audit of brand discipline by a senior luxury consultant (Aman, Quintessentially, John Paul Group veteran). Findings are written, board-reviewed, never publicly disclosed.",
        "A two-day annual off-site for board, founders, and senior leadership. The off-site reviews the ten-year horizon (Chapter 31) and updates the refusal list.",
        "A private internal newsletter, monthly, from the founder to the board — one page, hand-signed, covering one member story, one operational reflection, one discipline observation.",
        "An emergency convening protocol: any of the ten disciplines can be reviewed mid-year, but only by majority board vote, and only with a written rationale from the proposer."
      ],
      ar: [
        "مذكرة \"حال الدار\" السنوية من المؤسس للمجلس — ١٬٢٠٠ كلمة كحدّ أقصى — تراجع السنة وفق القرارات العشرة والانضباطات العشرة.",
        "يُفتَتح كل اجتماع مجلس بقراءة خمس دقائق من فصل الفلسفة، بالعربية والإنجليزية، بالتناوب. الانضباط هو العلامة.",
        "تدقيق سنوي خارجي للانضباط العلامي من مستشار فاخر رفيع (محنّك من أمان، كوينتيسنشلي، جون بول). النتائج مكتوبة، يراجعها المجلس، لا تُكشَف علناً.",
        "يومان خارج المكتب سنوياً للمجلس، المؤسسين، والقيادة العليا. يُراجع الخروج أفق العشر سنوات (الفصل ٣١) ويُحدِّث قائمة الرفض.",
        "نشرة داخلية خاصة، شهرية، من المؤسس للمجلس — صفحة واحدة، موقَّعة بخط اليد، تغطي قصة عضو واحدة، تأمل تشغيلي واحد، ملاحظة انضباط واحدة.",
        "بروتوكول عقد طارئ: أي من الانضباطات العشرة يمكن مراجعته في منتصف العام، لكن فقط بتصويت أغلبية المجلس، وفقط بمبرّر مكتوب من المُقتَرِح."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The board document", ar: "وثيقة المجلس" },
        scene: {
          en: "A hand-bound document on a deep navy linen surface, the cream cover embossed only with 'Ten Decisions, Ten Disciplines' in champagne foil. A folded ribbon marker hangs from inside. No other text visible.",
          ar: "وثيقة مجلَّدة يدوياً على سطح كتان كحلي عميق، الغلاف الكريمي منقوش فقط بـ \"عشرة قرارات، عشرة انضباطات\" بورق شامبانيا. خيط علامة مطوي يتدلى من الداخل. لا نص آخر ظاهر."
        },
        mood: { en: "The brand on a single document.", ar: "العلامة في وثيقة واحدة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Print the ten-and-ten and frame them", ar: "اطبع العشرة والعشرة وأَطِّرها" },
        body: {
          en: "Hang the ten decisions and ten disciplines in the founder's office, the board room, and the operations director's room. Visible, unavoidable, sealed. The wall enforces the discipline when the team forgets.",
          ar: "علِّق القرارات العشرة والانضباطات العشرة في مكتب المؤسس، قاعة المجلس، وغرفة مدير العمليات. ظاهرة، لا مَفَر منها، مختومة. الجدار يُلزم الانضباط حين ينساه الفريق."
        }
      },
      {
        title: { en: "Treat refusal as a board KPI", ar: "اعتبر الرفض مؤشر أداء للمجلس" },
        body: {
          en: "Score the board annually on the number of opportunities it has refused that violated the disciplines. High refusal scores are the most valuable board outputs in years one through three.",
          ar: "قَيِّم المجلس سنوياً بعدد الفرص التي رفضها ممّا انتهك الانضباطات. درجات الرفض العالية هي أثمن مخرجات المجلس في السنوات الأولى الثلاث."
        }
      },
      {
        title: { en: "Rotate one external advisor", ar: "دوِّر مستشاراً خارجياً واحداً" },
        body: {
          en: "Maintain one rotating external advisor on the board — three-year terms, no renewal — drawn from luxury hospitality, Saudi cultural figures, or veteran private banking. The rotation prevents board calcification.",
          ar: "احتفظ بمستشار خارجي متناوب في المجلس — فترات ثلاث سنوات، لا تجديد — من الضيافة الفاخرة، الشخصيات الثقافية السعودية، أو المصرفية الخاصة المخضرمة. التناوب يمنع تجمُّد المجلس."
        }
      }
    ],
    manifesto: {
      en: "We did not build this house to be the largest concierge in the Kingdom. We built it to be the one that defines what 'Saudi luxury' means for a generation.",
      ar: "لم نَبْنِ هذه الدار لتكون أكبر كونسيرج في المملكة. بنيناها لتكون التي تُعَرِّف للأجيال ما تعنيه \"الفخامة السعودية\"."
    }
  }
];
