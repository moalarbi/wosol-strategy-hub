import type { Strategy } from "../types";

const G = { en: "Growth", ar: "النمو" };

export const GROWTH_CHAPTERS: Strategy[] = [
  // ──────────────────────────────────────────────────────────
  {
    slug: "partnership-ecosystem",
    number: "25",
    group: G,
    eyebrow: { en: "Chapter Twenty-Five · The Adjacent Houses", ar: "الفصل الخامس والعشرون · الدور المجاورة" },
    title: { en: "Partnership Ecosystem", ar: "منظومة الشراكات" },
    subtitle: {
      en: "Partnerships are how the brand serves its members at scale without scaling the brand.",
      ar: "الشراكات هي كيف تخدم العلامة أعضاءها على نطاق دون أن تتوسع هي."
    },
    lead: {
      en: "WOSOL is not a vertically-integrated luxury house. It does not own hotels, restaurants, ateliers, or galleries. Its strength is its ability to compose an experience drawn from the best of what the world already produces, on behalf of its members. That requires a precisely curated partnership ecosystem, defined by ten verticals — luxury hotels, private aviation, superyachts, resorts, fine dining, wellness retreats, real estate, luxury fashion, art and design, private events — each anchored by a small number of senior, exclusive partners. The brand does not need many partnerships. It needs the right partnerships, deeply held.",
      ar: "وصول ليست داراً فاخرة عمودية التكامل. لا تملك فنادق، مطاعم، ورش، أو صالات. قوتها قدرتها على تأليف تجربة من أفضل ما يُنتجه العالم بالفعل، بالنيابة عن أعضائها. هذا يستلزم منظومة شراكات منتقاة بدقة، مُعرَّفة بعشرة قطاعات — فنادق فاخرة، طيران خاص، يخوت فائقة، منتجعات، مطاعم راقية، خلوات صحية، عقارات، أزياء فاخرة، فنون وتصميم، فعاليات خاصة — كلّ منها مُرسى بعدد صغير من شركاء رفيعين حصريين. لا تحتاج العلامة لشراكات كثيرة. تحتاج الشراكات الصحيحة، عميقة الإمساك."
    },
    whyItMatters: {
      en: "Partnerships are how a 100-person brand can deliver a 10,000-person experience. Without them, the brand cannot serve a member at the standard the membership promises.",
      ar: "الشراكات هي كيف تستطيع علامة من ١٠٠ شخص أن تقدّم تجربة بحجم ١٠٬٠٠٠ شخص. بدونها، لا تستطيع العلامة أن تخدم عضواً وفق المعيار الذي تَعِد به العضوية."
        },
    pillars: [
      {
        title: { en: "Ten Verticals, One Standard", ar: "عشرة قطاعات، معيار واحد" },
        body: {
          en: "Each vertical has a written 'House Standards Annex' — a one-page document defining the brand's expectations of any partner in that vertical. Annexes are signed alongside any commercial agreement.",
          ar: "لكل قطاع \"ملحق معايير الدار\" مكتوب — وثيقة من صفحة تُعرِّف توقّعات العلامة من أي شريك في ذلك القطاع. تُوقَّع الملاحق إلى جانب أي اتفاق تجاري."
        }
      },
      {
        title: { en: "Few, Senior, Exclusive", ar: "قليلون، رفيعون، حصريون" },
        body: {
          en: "Two to four partners per vertical — never more. Each partner is the most senior available option in their geography. Exclusivity is mutually negotiated: the partner agrees not to grant equivalent terms to a competing concierge.",
          ar: "شريكان إلى أربعة لكل قطاع — لا أكثر. كل شريك هو الخيار الأرفع المتاح في جغرافيته. الحصرية متبادلة التفاوض: يوافق الشريك على عدم منح شروط معادلة لكونسيرج منافس."
        }
      },
      {
        title: { en: "Reciprocity, Not Commission", ar: "تبادل، لا عمولات" },
        body: {
          en: "The brand does not take commissions from partners. The relationship is reciprocity: partners send their guests to WOSOL for Saudi service, WOSOL sends its members to them abroad. Commissions corrupt the recommendation, and the brand cannot afford to recommend with a conflict.",
          ar: "العلامة لا تأخذ عمولات من الشركاء. العلاقة تبادل: يرسل الشركاء ضيوفهم لـ وصول للخدمة السعودية، ترسل وصول أعضاءها إليهم خارجياً. العمولات تفسد التزكية، ولا تتحمل العلامة أن تُزكّي بتعارض."
        }
      },
      {
        title: { en: "The Director of Partnerships", ar: "مدير الشراكات" },
        body: {
          en: "A single senior role owns the partnership ecosystem. The director has the founder's authority to refuse, terminate, or renegotiate. The partnership function is not delegated to junior business development.",
          ar: "دور رفيع واحد يمتلك منظومة الشراكات. للمدير صلاحية المؤسس في الرفض، الإنهاء، إعادة التفاوض. وظيفة الشراكات لا تُفوَّض لتطوير أعمال صغير."
        }
      }
    ],
    operations: {
      en: [
        "Annual partnership review: every partner is reviewed against the House Standards Annex, with a written memo from the director. Renewal is not automatic.",
        "Member feedback on partners is collected discreetly through senior custodian conversations, never via surveys. The feedback is the truth.",
        "A 'partner of last resort' protocol — if a partner fails a member, the brand absorbs the cost and issues a private apology. The partner is then reviewed and, if necessary, removed from the ecosystem.",
        "Quarterly partner gatherings — small dinners at the brand's atelier office, attended by the founder and two partners per vertical. The relationships are personal first.",
        "International partnerships are visited in person once a year by the head of partnerships. Relationships at this tier cannot be maintained by email.",
        "Confidentiality is mutual and contractual. Member visits to partners are not disclosed back to the brand without consent."
      ],
      ar: [
        "مراجعة شراكات سنوية: كل شريك يُراجَع وفق ملحق معايير الدار، بمذكرة مكتوبة من المدير. التجديد ليس آلياً.",
        "تُجمَع ملاحظات الأعضاء على الشركاء بتحفُّظ عبر حوارات القِوامين الرفيعين، لا عبر استبيانات. الملاحظات هي الحقيقة.",
        "بروتوكول \"الشريك الأخير\" — إذا أخفق شريك مع عضو، تستوعب العلامة التكلفة وتُصدر اعتذاراً خاصاً. ثم يُراجَع الشريك، وإن لزم، يُحذَف من المنظومة.",
        "تجمعات شركاء ربع سنوية — عشاءات صغيرة في مكتب ورشة العلامة، يحضرها المؤسس وشريكان لكل قطاع. العلاقات شخصية أولاً.",
        "تُزار الشراكات الدولية شخصياً مرة سنوياً من رئيس الشراكات. لا يمكن صيانة علاقات بهذه الطبقة بالإيميل.",
        "السرّية متبادلة وتعاقدية. زيارات الأعضاء للشركاء لا تُكشَف للعلامة بدون موافقة."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The vertical map", ar: "خريطة القطاعات" },
        scene: {
          en: "A printed cream document on a walnut surface showing ten small icons in deep navy — one for each vertical — arranged in a grid. A folded ribbon marker rests across one corner.",
          ar: "وثيقة كريمية مطبوعة على سطح جوز تُظهر عشر أيقونات صغيرة بكحلي عميق — واحدة لكل قطاع — مرتبة في شبكة. خيط علامة مطوي يستريح عند زاوية."
        },
        mood: { en: "An ecosystem, mapped.", ar: "منظومة، مُخرَّطة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Refuse commissions in the founding documents", ar: "ارفض العمولات في الوثائق التأسيسية" },
        body: {
          en: "Codify the no-commission principle in the brand's foundational documents. It removes the temptation in years three, four, five — when scale pressure makes it most appealing.",
          ar: "قنّن مبدأ \"لا عمولات\" في وثائق العلامة التأسيسية. يُزيل الإغراء في السنوات الثالثة، الرابعة، الخامسة — حين يكون ضغط التوسع أكثر إغراءً."
        }
      }
    ],
    manifesto: {
      en: "We do not partner. We compose.",
      ar: "نحن لا نَعقد شراكة. نحن نُؤلِّف."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "lifestyle-expansion",
    number: "26",
    group: G,
    eyebrow: { en: "Chapter Twenty-Six · The Wider Life", ar: "الفصل السادس والعشرون · الحياة الأوسع" },
    title: { en: "Luxury Lifestyle Expansion", ar: "التوسع في نمط الحياة الفاخر" },
    subtitle: {
      en: "The brand's growth is not in new cities first. It is in new territories of life.",
      ar: "نمو العلامة ليس في مدن جديدة أولاً. هو في أقاليم جديدة من الحياة."
    },
    lead: {
      en: "When a luxury brand grows, the wrong instinct is to open new locations. The right instinct is to deepen the relationship with existing members across more territories of their lives. WOSOL's first expansion priority is intensive: take each existing household from one territory of life (e.g., travel only) to all seven. The second priority is geographic — Jeddah and Diriyah specifically, before any international expansion. International expansion is the third priority, and the first international city is not London or Dubai. It is the city where the brand's senior members already spend the most time abroad — likely London — but with restraint, opening only when the Saudi base is unmistakably anchored.",
      ar: "حين تنمو علامة فاخرة، الغريزة الخطأ فتح مواقع جديدة. الغريزة الصحيحة تعميق العلاقة مع الأعضاء الحاليين عبر أقاليم أكثر من حياتهم. أولوية التوسع الأولى لـ وصول مكثَّفة: نقل كل بيت موجود من إقليم حياة واحد (مثلاً السفر فقط) إلى الأقاليم السبعة. الأولوية الثانية جغرافية — جدة والدرعية تحديداً، قبل أي توسع دولي. التوسع الدولي هو الأولوية الثالثة، وأول مدينة دولية ليست لندن أو دبي. هي المدينة التي ينفق فيها أعضاء العلامة الرفيعون معظم وقتهم خارجياً — على الأرجح لندن — لكن بضبط النفس، تُفتَح فقط حين تكون القاعدة السعودية مُرساة بلا لبس."
    },
    whyItMatters: {
      en: "Expansion is the test that breaks more luxury brands than launch. Premature geographic expansion dilutes brand quality faster than any other single decision.",
      ar: "التوسع هو الاختبار الذي يكسر علامات فاخرة أكثر مما يكسره الإطلاق. التوسع الجغرافي المبكر يُذيب جودة العلامة أسرع من أي قرار آخر."
        },
    pillars: [
      {
        title: { en: "Vertical Before Horizontal", ar: "العمودي قبل الأفقي" },
        body: {
          en: "Year one and two are spent expanding each household across all seven territories of life. Year three onwards is the first horizontal step (Jeddah, Diriyah). International is years five-plus.",
          ar: "السنة الأولى والثانية تُقضى في توسعة كل بيت عبر أقاليم الحياة السبعة كلها. السنة الثالثة وما بعدها هي الخطوة الأفقية الأولى (جدة، الدرعية). الدولي للسنة الخامسة فما فوق."
        }
      },
      {
        title: { en: "Saudi Anchor First", ar: "المرساة السعودية أولاً" },
        body: {
          en: "Before any international footprint, the brand must be the unmistakable Saudi luxury concierge house. International expansion that precedes Saudi authority undermines the home position.",
          ar: "قبل أي بصمة دولية، يجب أن تكون العلامة دار الكونسيرج الفاخرة السعودية التي لا لبس فيها. التوسع الدولي قبل السلطة السعودية يقوّض الموقع المحلي."
        }
      },
      {
        title: { en: "London as First International, Not Dubai", ar: "لندن أولاً دولياً، لا دبي" },
        body: {
          en: "Dubai is the obvious next step and the wrong one. Dubai overlaps too closely with WOSOL's existing footprint and competes with the brand's Saudi anchoring. London is the right second city — where Saudi members live, study, and summer.",
          ar: "دبي هي الخطوة التالية الواضحة وهي الخطأ. دبي تتداخل بشدّة مع بصمة وصول الحالية وتتنازع مع تثبيتها السعودي. لندن هي المدينة الثانية الصحيحة — حيث يعيش الأعضاء السعوديون، يدرسون، ويصيّفون."
        }
      },
      {
        title: { en: "Adjacent Verticals, Carefully", ar: "قطاعات مجاورة، بحذر" },
        body: {
          en: "Possible future adjacencies: WOSOL Residences (residential concierge for senior developments), WOSOL School (a children's lifestyle and education concierge), WOSOL Travel (a private travel atelier). Each is a five-year decision, never an opportunistic add-on.",
          ar: "مجاورات مستقبلية ممكنة: وصول ريزيدنسز (كونسيرج سكني للتطويرات الراقية)، وصول سكول (كونسيرج نمط حياة وتعليم للأطفال)، وصول ترافيل (ورشة سفر خاصة). كل واحدة قرار خمس سنوات، لا إضافة انتهازية."
        }
      }
    ],
    operations: {
      en: [
        "An annual expansion review by the founders and an external strategic advisor. Decisions are made annually, never quarterly.",
        "A 'no two simultaneous expansions' rule. The brand opens one new geography or vertical at a time and beds it in for at least 18 months before the next.",
        "Each expansion requires a full Standards Audit before launch — booth, team, scent, sound, uniforms, SOPs all measured against home standard.",
        "International expansions are led by a senior Saudi custodian relocated for at least three years, not a local hire. Saudi identity must travel.",
        "An exit option for every expansion. Pre-defined criteria for when an expansion is wound down. The discipline of being willing to retreat is what allows the discipline of expansion.",
        "Annual review of expansion economics. If an expansion is not contributing to the brand's perceived tier within 24 months, it is reviewed for closure."
      ],
      ar: [
        "مراجعة توسع سنوية من المؤسسين ومستشار استراتيجي خارجي. القرارات تُتخذ سنوياً، لا ربع سنوياً.",
        "قاعدة \"لا توسعتين متزامنتين\". تفتح العلامة جغرافية أو قطاعاً واحداً في كل مرة وتُرسّخه لـ ١٨ شهراً على الأقل قبل التالي.",
        "كل توسع يستلزم تدقيق معايير كامل قبل الإطلاق — المنصة، الفريق، العطر، الصوت، الأزياء، الأنظمة كلها تُقاس بمعيار البيت.",
        "التوسعات الدولية يقودها قِوام سعودي رفيع منقول لثلاث سنوات على الأقل، لا تعيين محلي. الهوية السعودية يجب أن تسافر.",
        "خيار خروج لكل توسع. معايير معرَّفة سلفاً لمتى يُغلَق التوسع. انضباط الاستعداد للتراجع هو ما يُتيح انضباط التوسع.",
        "مراجعة اقتصاديات التوسع السنوية. إذا لم يُسهم التوسع في الطبقة المُدرَكة للعلامة خلال ٢٤ شهراً، يُراجَع للإغلاق."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The expansion map", ar: "خريطة التوسع" },
        scene: {
          en: "A folded cream map of the Kingdom on a walnut desk, with three small champagne pins (Riyadh, Jeddah, Diriyah). A second smaller map underneath shows London with a single pin. No labels readable.",
          ar: "خريطة كريمية مطوية للمملكة على مكتب جوز، بثلاث دبابيس شامبانية صغيرة (الرياض، جدة، الدرعية). خريطة أصغر تحتها تُظهر لندن بدبوس مفرد. لا تسميات مقروءة."
        },
        mood: { en: "Patience drawn in pins.", ar: "صبر مرسوم بالدبابيس." }
      }
    ],
    recommendations: [
      {
        title: { en: "Refuse Dubai for at least five years", ar: "ارفض دبي لخمس سنوات على الأقل" },
        body: {
          en: "Dubai will be the most pressed opportunity. Refuse it. The brand's authority is in being unambiguously Saudi. Dubai dilutes that authority faster than London does.",
          ar: "ستكون دبي الفرصة الأكثر إلحاحاً. ارفضها. سلطة العلامة في كونها سعودية بلا لبس. دبي تُذيب تلك السلطة أسرع مما تفعل لندن."
        }
      }
    ],
    manifesto: {
      en: "We grow into our members' lives before we grow into new cities.",
      ar: "ننمو داخل حياة أعضائنا قبل أن ننمو إلى مدن جديدة."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "future-expansion",
    number: "31",
    group: G,
    eyebrow: { en: "Chapter Thirty-One · The Far Horizon", ar: "الفصل الحادي والثلاثون · الأفق البعيد" },
    title: { en: "Future Expansion Opportunities", ar: "فرص التوسع المستقبلية" },
    subtitle: {
      en: "Where the brand could be in ten years — and what it must refuse along the way to get there.",
      ar: "أين قد تكون العلامة بعد عشر سنوات — وما يجب أن ترفضه على الطريق لتصل."
    },
    lead: {
      en: "A brand's long-term position is determined less by what it builds and more by what it refuses to build. In ten years, WOSOL could be the Saudi-rooted, internationally fluent reference brand for private luxury hospitality in the GCC and beyond — comparable in stature to Aman in hospitality or Quintessentially in concierge. Or it could be a diluted, over-extended, multi-format service brand. The difference is discipline. This chapter sets the ten-year north star, the four major opportunities to pursue, and the four major opportunities to refuse.",
      ar: "موقع العلامة على المدى الطويل يحدِّده ما ترفض بناءه أكثر مما يحدِّده ما تبنيه. خلال عشر سنوات، يمكن لـ وصول أن تكون العلامة المرجع السعودية الجذور المتقنة دولياً للضيافة الفاخرة الخاصة في الخليج وما وراءه — تُقارَن في المكانة بـ أمان في الضيافة أو كوينتيسنشلي في الكونسيرج. أو يمكن أن تكون علامة خدمات مذابة، مُفرَطة الامتداد، متعددة الأشكال. الفارق هو الانضباط. يضع هذا الفصل نجم الشمال لعشر سنوات، الفرص الأربع الكبرى للمتابعة، والفرص الأربع الكبرى للرفض."
    },
    whyItMatters: {
      en: "Without an explicit ten-year vision and refusal list, the brand will drift toward whatever opportunity arrives next. With them, the brand has a discipline that survives leadership transitions.",
      ar: "بدون رؤية صريحة لعشر سنوات وقائمة رفض، ستنحرف العلامة نحو أي فرصة تأتي تالياً. ومعهما، تملك العلامة انضباطاً يتجاوز انتقالات القيادة."
        },
    pillars: [
      {
        title: { en: "Four to Pursue", ar: "أربعة للمتابعة" },
        body: {
          en: "WOSOL London (year 5–6), WOSOL Residences (year 4–5), WOSOL Travel (year 3–4), WOSOL Patronage Foundation (year 3 onwards). Each is a vertical expansion, not a new business unit.",
          ar: "وصول لندن (السنة ٥-٦)، وصول ريزيدنسز (السنة ٤-٥)، وصول ترافيل (السنة ٣-٤)، وصول للرعاية الثقافية (من السنة ٣ فما فوق). كلها توسعات عمودية، لا وحدات أعمال جديدة."
        }
      },
      {
        title: { en: "Four to Refuse", ar: "أربعة للرفض" },
        body: {
          en: "WOSOL Tech (an app or marketplace), WOSOL Hotels (operating actual hotels), WOSOL Dubai (the obvious expansion that dilutes the brand), WOSOL Mass-Market (a 'lite' tier or freemium model). Each would generate revenue but cost the brand's tier.",
          ar: "وصول تيك (تطبيق أو سوق)، وصول هوتلز (تشغيل فنادق فعلية)، وصول دبي (التوسع الواضح الذي يُذيب العلامة)، وصول للسوق العام (فئة \"مخفّفة\" أو نموذج مجاني). كل واحدة منها ستُولِّد إيراداً لكن تكلِّف طبقة العلامة."
        }
      },
      {
        title: { en: "The Patronage Foundation", ar: "مؤسسة الرعاية الثقافية" },
        body: {
          en: "A small non-profit arm — funded by a fixed percentage of membership revenue — that supports Saudi cultural and craft figures. The foundation is the brand's most durable long-term asset and its most powerful Vision 2030 alignment.",
          ar: "ذراع ربحية صغيرة غير ربحية — مُموَّلة بنسبة ثابتة من إيرادات العضوية — تدعم الشخصيات الثقافية والحرفية السعودية. المؤسسة هي أكثر أصول العلامة بقاءً على المدى الطويل، وأقوى انسجامها مع رؤية ٢٠٣٠."
        }
      },
      {
        title: { en: "Succession Discipline", ar: "انضباط الخلافة" },
        body: {
          en: "By year seven, the brand has a documented succession plan for the founder, with a designated successor and a written transition protocol. Founder dependence is the brand's biggest long-term risk.",
          ar: "بحلول السنة السابعة، تملك العلامة خطة خلافة موثّقة للمؤسس، بخليفة مُعَيَّن وبروتوكول انتقال مكتوب. الاعتماد على المؤسس هو الخطر الأكبر للعلامة على المدى الطويل."
        }
      }
    ],
    operations: {
      en: [
        "An annual 'horizon review' — two days, off-site, with founders, senior leadership, and one external advisor. The output is a refreshed ten-year north star and the refusal list.",
        "The Patronage Foundation is registered as a separate legal entity in year three. It has its own board (including senior Saudi cultural figures) and its own annual report.",
        "A 'brand archive' is maintained from year one — every printed object, every uniform edition, every commissioned scent. The archive is the brand's institutional memory.",
        "A written 'do not do' list, kept at the founder's desk, is updated annually. The list is as important as the strategic plan.",
        "Leadership development: every senior role has a designated 'shadow' from year three onwards, in preparation for succession.",
        "An external 'brand advisory council' of three senior figures (one hospitality, one cultural, one finance) meets annually with the founders to review long-term direction."
      ],
      ar: [
        "\"مراجعة أفق\" سنوية — يومان، خارج المكتب، مع المؤسسين، القيادة العليا، ومستشار خارجي واحد. الناتج نجم شمال عشر سنوات محدَّث وقائمة الرفض.",
        "تُسجَّل مؤسسة الرعاية الثقافية ككيان قانوني منفصل في السنة الثالثة. لها مجلسها الخاص (يضم شخصيات ثقافية سعودية رفيعة) وتقريرها السنوي.",
        "\"أرشيف علامة\" يُحفَظ من السنة الأولى — كل غرض مطبوع، كل إصدار زي، كل عطر مكلَّف. الأرشيف هو ذاكرة العلامة المؤسسية.",
        "قائمة \"لا تفعل\" مكتوبة، تُحفَظ على مكتب المؤسس، تُحدَّث سنوياً. القائمة بأهمية الخطة الاستراتيجية.",
        "تطوير القيادة: كل دور رفيع له \"ظِلّ\" مُعَيَّن من السنة الثالثة فما فوق، تحضيراً للخلافة.",
        "\"مجلس استشاري للعلامة\" خارجي من ثلاث شخصيات رفيعة (واحدة ضيافة، واحدة ثقافية، واحدة مالية) يجتمع سنوياً مع المؤسسين لمراجعة الاتجاه طويل المدى."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The horizon plate", ar: "صورة الأفق" },
        scene: {
          en: "An empty desk at dawn, a printed ten-year plan folded on the surface, a single fountain pen across the corner, a cream cup of coffee untouched. A long shadow cast by the morning light.",
          ar: "مكتب فارغ عند الفجر، خطة عشر سنوات مطبوعة مطوية على السطح، قلم حبر مفرد عند الزاوية، فنجان قهوة كريمي لم يُمَسّ. ظل طويل من ضوء الصباح."
        },
        mood: { en: "Patience drawn in plan.", ar: "صبر مرسوم في خطة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Publish the refusal list internally", ar: "انشر قائمة الرفض داخلياً" },
        body: {
          en: "Print the four-refusals list and frame it in the founder's office. It is the strategic discipline made visible. The visibility itself reinforces the discipline year over year.",
          ar: "اطبع قائمة الأربع رفضات وأَطِّرها في مكتب المؤسس. هي الانضباط الاستراتيجي وقد ظهر. الظهور ذاته يُعزِّز الانضباط سنة بعد سنة."
        }
      }
    ],
    manifesto: {
      en: "Our future is the discipline of saying no to four obvious opportunities for every yes.",
      ar: "مستقبلنا هو انضباط قول \"لا\" لأربع فرص واضحة، مقابل كل \"نعم\"."
    }
  }
];
