import type { Strategy } from "../types";

const G = { en: "Membership", ar: "العضوية" };

export const MEMBERSHIP_CHAPTERS: Strategy[] = [
  // ──────────────────────────────────────────────────────────
  {
    slug: "membership-strategy",
    number: "21",
    group: G,
    eyebrow: { en: "Chapter Twenty-One · The Architecture", ar: "الفصل الحادي والعشرون · الهندسة" },
    title: { en: "Luxury Membership Strategy", ar: "استراتيجية العضوية الفاخرة" },
    subtitle: {
      en: "Membership is the brand's only true business model. Everything else is acquisition for it.",
      ar: "العضوية هي نموذج العمل الحقيقي الوحيد للعلامة. ما عداها مجرد جلب لها."
    },
    lead: {
      en: "Most concierge brands monetise per-transaction. WOSOL inverts this model. Per-transaction fees are deliberately positioned as administrative — the relationship's revenue comes from annual membership at three tiers. Membership creates predictability, deepens the relationship, and produces the only metric that matters at this tier: lifetime value per household. The architecture is composed as three clear, distinct, and emotionally distinct membership tiers: WOSOL House, WOSOL Circle, and WOSOL BLACK.",
      ar: "أغلب علامات الكونسيرج تكسب من المعاملة الواحدة. تقلب وصول هذا النموذج. تُموضَع رسوم المعاملة بقصد بوصفها إدارية — إيرادات العلاقة تأتي من عضوية سنوية بثلاث فئات. العضوية تخلق إمكانية تنبُّؤ، تعمّق العلاقة، وتُنتج المقياس الوحيد المهمّ في هذه الطبقة: القيمة العمرية لكل بيت. الهندسة مُؤلَّفة من ثلاث فئات عضوية واضحة، متمايزة، عاطفياً متمايزة: وصول هاوس، وصول سيركل، وصول بلاك."
    },
    whyItMatters: {
      en: "A great membership architecture provides the brand with operating predictability, deepens loyalty, and creates the conditions for compounding price discipline. A weak architecture turns the brand into a service provider that must re-sell every month.",
      ar: "هندسة عضوية ممتازة تُوفِّر للعلامة إمكانية تنبُّؤ تشغيلية، تُعمِّق الولاء، وتخلق ظروف انضباط تسعير متراكم. هندسة ضعيفة تحوّل العلامة لمزوّد خدمة عليه إعادة البيع كل شهر."
        },
    pillars: [
      {
        title: { en: "Three Tiers, Three Worlds", ar: "ثلاث فئات، ثلاث عوالم" },
        body: {
          en: "WOSOL House (entry, foundational concierge), WOSOL Circle (committed relationship, lifestyle territories engaged), WOSOL BLACK (private custodianship, founder-tier engagement). Each tier is a different world, not a different price.",
          ar: "وصول هاوس (دخول، كونسيرج تأسيسي)، وصول سيركل (علاقة ملتزمة، تفعيل أقاليم الحياة)، وصول بلاك (قِوامة خاصة، تفاعل بفئة المؤسس). كل فئة عالم مختلف، لا سعر مختلف."
        }
      },
      {
        title: { en: "Application, Not Subscription", ar: "تقديم طلب، لا اشتراك" },
        body: {
          en: "Membership is applied for, considered, and granted — never bought. The application is short, the consideration is sincere, and the response (positive or polite refusal) is hand-signed.",
          ar: "العضوية تُقدَّم لها، تُدرَس، وتُمنَح — لا تُشترى. الطلب قصير، الدراسة صادقة، والرد (إيجابي أو رفض مهذب) مُوقَّع بخط اليد."
        }
      },
      {
        title: { en: "Annual, Hand-Signed", ar: "سنوية، مُوقَّعة بخط اليد" },
        body: {
          en: "Memberships are annual. Renewal is acknowledged with a hand-signed letter from the founder. Auto-renewal exists operationally but the brand acknowledges the moment of choice each year.",
          ar: "العضويات سنوية. التجديد يُقَر برسالة موقَّعة بخط اليد من المؤسس. التجديد التلقائي موجود تشغيلياً لكن العلامة تُقِرّ بلحظة الاختيار كل سنة."
        }
      },
      {
        title: { en: "Family-Held, Not Individual", ar: "للبيت لا للفرد" },
        body: {
          en: "Memberships are held in the name of a household, not an individual. Spouses and children of members benefit fully. The frame is the family — and that frame produces three-generation loyalty.",
          ar: "العضويات بأسماء البيوت، لا الأفراد. الأزواج والأبناء يستفيدون كاملاً. الإطار هو العائلة — وهذا الإطار يُنتج ولاءً يمتد لثلاثة أجيال."
        }
      }
    ],
    operations: {
      en: [
        "Membership decisions are reviewed weekly by a small panel: founder, head of relationships, head of operations. No automated approvals.",
        "Membership numbers are hand-issued on a printed certificate, sealed in cream and navy, hand-delivered to the principal's home or office.",
        "An internal cap on member growth — never more than 15% year-over-year — protects the experience and the team. Quality, not scale, is the standard.",
        "A 'pause' option for members who experience a major life event (bereavement, divorce, business reorganisation) — the membership is held without charge for up to six months, returned without explanation.",
        "Member referrals are honoured with a hand-written note from the founder, never with a commercial reward.",
        "An annual 'House Letter' from the founder to every member, sent in January, looking back and forward. The letter is the brand's most read internal document."
      ],
      ar: [
        "قرارات العضوية تُراجَع أسبوعياً من لجنة صغيرة: المؤسس، رئيس العلاقات، رئيس العمليات. لا موافقات آلية.",
        "أرقام العضويات تُصدَر يدوياً على شهادة مطبوعة، مختومة بكريمي وكحلي، تُسلَّم باليد لبيت أو مكتب الرئيس.",
        "سقف داخلي لنمو الأعضاء — لا أكثر من ١٥٪ سنوياً — يحمي التجربة والفريق. الجودة، لا النطاق، هي المعيار.",
        "خيار \"إيقاف مؤقت\" للأعضاء الذين يختبرون حدثاً كبيراً في حياتهم (فقدان، طلاق، إعادة هيكلة عمل) — تُعلَّق العضوية بدون رسوم لمدة تصل لستة أشهر، وتُستعاد دون تفسير.",
        "إحالات الأعضاء تُكرَّم بمذكرة مكتوبة بخط اليد من المؤسس، لا بمكافأة تجارية.",
        "\"رسالة الدار\" السنوية من المؤسس لكل عضو، تُرسَل في يناير، تنظر للوراء وللأمام. الرسالة هي الوثيقة الداخلية الأكثر قراءة للعلامة."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The membership certificate", ar: "شهادة العضوية" },
        scene: {
          en: "A cream paper certificate on a walnut desk, embossed with the WOSOL wordmark in champagne foil, hand-numbered in deep navy ink, sealed in wax at the bottom right corner.",
          ar: "شهادة ورق كريمي على مكتب جوز، منقوشة بعلامة وصول المكتوبة بورق شامبانيا، مُرقَّمة بخط اليد بحبر كحلي عميق، مختومة بشمع في الزاوية اليمنى السفلى."
        },
        mood: { en: "Admission, not subscription.", ar: "قبول، لا اشتراك." }
      }
    ],
    recommendations: [
      {
        title: { en: "Protect the cap publicly", ar: "احمِ السقف علنياً" },
        body: {
          en: "Announce the annual membership cap — without numbers — in editorial press placements. The cap itself becomes part of the brand's positioning.",
          ar: "أعلن سقف العضوية السنوي — بدون أرقام — في توضّعات إعلامية تحريرية. السقف ذاته يصير جزءاً من تموضع العلامة."
        }
      }
    ],
    manifesto: {
      en: "Membership is a covenant. We honour it. So must they.",
      ar: "العضوية عهد. نحن نَفِيه. ويجب أن يَفُوه أيضاً."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "wosol-black",
    number: "22",
    group: G,
    eyebrow: { en: "Chapter Twenty-Two · The Inner Circle", ar: "الفصل الثاني والعشرون · الدائرة الداخلية" },
    title: { en: "WOSOL BLACK Membership", ar: "عضوية وصول بلاك" },
    subtitle: {
      en: "Not a tier. A relationship between a household and the founders.",
      ar: "ليست فئة. هي علاقة بين بيت والمؤسسين."
    },
    lead: {
      en: "WOSOL BLACK is the brand's most precise instrument. It is positioned as the private custodianship layer, capped at no more than 100 households across the Kingdom in the first five years. Each BLACK relationship is overseen by the founder personally and a dedicated Head of House. It includes territories beyond the standard menu: legacy planning support, family office adjacency, international concierge networks, private hospital arrangements, education concierge, residential concierge, philanthropic counsel. BLACK is invitation-only, never advertised, and not listed on the public website. Its existence is rumoured rather than announced.",
      ar: "وصول بلاك هي الأداة الأدق للعلامة. تُموضَع بوصفها طبقة القِوامة الخاصة، بسقف لا يتجاوز ١٠٠ بيت في المملكة خلال السنوات الخمس الأولى. كل علاقة بلاك يُشرف عليها المؤسس شخصياً ورئيس دار متفرّغ. تشمل أقاليم تتجاوز القائمة المعتادة: دعم تخطيط الإرث، الجوار مع المكاتب العائلية، شبكات الكونسيرج الدولية، الترتيبات الطبية الخاصة، كونسيرج التعليم، كونسيرج السكن، الإرشاد في العمل الخيري. بلاك بالدعوة فقط، لا تُعلَن، ولا تُذكَر على الموقع العام. وجودها يُتهامَس به أكثر مما يُعلَن."
    },
    whyItMatters: {
      en: "Black is the brand's gravity well. Its existence anchors the entire price ladder above WOSOL House and Circle. Without BLACK, the lower tiers slide toward generic. With BLACK, the entire ladder pulls upward.",
      ar: "بلاك هي بئر جاذبية العلامة. وجودها يُرسي سُلَّم الأسعار كله فوق وصول هاوس وسيركل. بدون بلاك، تنزلق الفئات الأدنى نحو العام. مع بلاك، يَسحَب السلم بأكمله نحو الأعلى."
        },
    pillars: [
      {
        title: { en: "100 Households, Five Years", ar: "١٠٠ بيت، خمس سنوات" },
        body: {
          en: "A hard cap. The cap is written into the brand's foundational documents. Lifting the cap requires a board-level decision and is not lifted within the first five years.",
          ar: "سقف صلب. السقف مكتوب في وثائق العلامة التأسيسية. رفع السقف يستلزم قراراً على مستوى المجلس ولا يُرفَع خلال السنوات الخمس الأولى."
        }
      },
      {
        title: { en: "Founder-Held Relationships", ar: "علاقات بإشراف المؤسس" },
        body: {
          en: "Every BLACK household has direct, named access to the founder. The CEO commits time on a weekly basis to BLACK relationships. This commitment is non-negotiable.",
          ar: "كل بيت بلاك له وصول مباشر مذكور بالاسم للمؤسس. يلتزم الرئيس التنفيذي بوقت أسبوعي لعلاقات بلاك. هذا الالتزام غير قابل للتفاوض."
        }
      },
      {
        title: { en: "Beyond Concierge", ar: "ما وراء الكونسيرج" },
        body: {
          en: "BLACK extends into legacy, education, philanthropic, and family-office adjacency — not because the brand provides them directly but because the brand is the trusted introducer to the world's most refined private specialists.",
          ar: "تمتدّ بلاك إلى الإرث، التعليم، العمل الخيري، الجوار مع المكاتب العائلية — لا لأن العلامة تقدّمها مباشرة بل لأن العلامة هي المُقَدِّم الموثوق إلى أرفع المتخصصين الخواص في العالم."
        }
      },
      {
        title: { en: "International Network", ar: "شبكة دولية" },
        body: {
          en: "Reciprocal arrangements with select equivalents abroad — Knightsbridge Circle (London), specific Geneva private offices, a senior Tokyo concierge house. BLACK members carry their custodianship across borders.",
          ar: "ترتيبات تبادلية مع نظراء منتقاة خارجياً — نايتسبردج سيركل (لندن)، مكاتب جنيف خاصة محددة، دار كونسيرج رفيعة في طوكيو. أعضاء بلاك يحملون قِوامتهم عبر الحدود."
        }
      }
    ],
    operations: {
      en: [
        "BLACK has a separate physical workspace from the main operations facility — a small, deliberately understated office, used for member visits, private dinners, and confidential consultations.",
        "BLACK communications are encrypted, with a small named team of three custodians at most. No general team member ever sees BLACK communication.",
        "An annual BLACK 'House Gathering' — a single private weekend retreat for BLACK households, in a refined Saudi residence (e.g., a Diriyah heritage residence), strictly off the record.",
        "Onboarding is conducted by the founder personally over three meetings: initial conversation (informal, exploratory), formal acceptance (in a refined residence, hand-signed documents), induction (a private tour of the brand's atelier and operations).",
        "BLACK members are not asked for testimonials, referrals, or content. The relationship is non-extractive.",
        "An 'exit gracefully' protocol: if a BLACK member chooses to leave, the brand sends one farewell gift and a hand-written letter. No retention attempts. The exit is honoured."
      ],
      ar: [
        "لـ بلاك مكان عمل مادي منفصل عن منشأة العمليات الرئيسية — مكتب صغير مُتعمَّد التواضع، يُستخدَم لزيارات الأعضاء، عشاءات خاصة، استشارات سرية.",
        "اتصالات بلاك مشفّرة، بفريق مذكور بالاسم لا يتجاوز ثلاثة قِوامين. لا يرى أي عضو فريق عادي اتصال بلاك أبداً.",
        "\"تجمع الدار\" السنوي لـ بلاك — عطلة نهاية أسبوع خاصة لبيوت بلاك، في إقامة سعودية راقية (مثل إقامة تراثية في الدرعية)، خارج التغطية بصرامة.",
        "الانضمام يقوده المؤسس شخصياً عبر ثلاث لقاءات: حوار أولي (غير رسمي، استكشافي)، قبول رسمي (في إقامة راقية، وثائق موقَّعة باليد)، تعريف (جولة خاصة في ورشة وعمليات العلامة).",
        "أعضاء بلاك لا يُطلَب منهم شهادات، إحالات، أو محتوى. العلامة غير استخراجية.",
        "بروتوكول \"المغادرة بأناقة\": إذا اختار عضو بلاك الرحيل، تُرسل العلامة هدية وداع واحدة ورسالة بخط اليد. لا محاولات احتفاظ. تُكرَّم المغادرة."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The BLACK card", ar: "بطاقة بلاك" },
        scene: {
          en: "A single matte black card on a cream linen square, embossed only with a small champagne 'BLACK' wordmark and a hand-numbered code at one corner. No photography. No additional design.",
          ar: "بطاقة سوداء مطفية واحدة على مربع كتان كريمي، منقوشة فقط بكلمة \"BLACK\" شامبانية صغيرة وكود مُرقَّم بخط اليد عند زاوية. لا تصوير. لا تصميم إضافي."
        },
        mood: { en: "The card whose existence is the message.", ar: "البطاقة التي وجودها هو الرسالة." }
      },
      {
        slot: { en: "The retreat plate", ar: "صورة العزلة السنوية" },
        scene: {
          en: "An empty private dining room in a Diriyah-style heritage residence at evening, cream stone walls, a long low table set with dates, water, candles, and place cards. No guests visible.",
          ar: "غرفة طعام خاصة فارغة في إقامة تراثية بطراز الدرعية في المساء، جدران حجر كريمية، طاولة طويلة منخفضة مُعدّة بتمر، ماء، شموع، بطاقات أماكن. لا ضيوف ظاهرون."
        },
        mood: { en: "The room where the year is reset.", ar: "الغرفة التي تُعاد فيها السنة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Resist BLACK growth temptation always", ar: "قاوم إغراء نمو بلاك دائماً" },
        body: {
          en: "BLACK will be the brand's most requested tier. Every additional household above 100 over five years dilutes the entire brand. Refusal is the strategy.",
          ar: "ستكون بلاك الفئة الأكثر طلباً للعلامة. كل بيت إضافي فوق ١٠٠ خلال خمس سنوات يُذيب العلامة كاملة. الرفض هو الاستراتيجية."
        }
      },
      {
        title: { en: "Never advertise BLACK", ar: "لا تُعلِن بلاك أبداً" },
        body: {
          en: "BLACK is the only brand layer that is structurally not allowed to appear in advertising of any kind. Its visibility is membership chatter, editorial mention, and rumour — never paid spend.",
          ar: "بلاك هي الطبقة الوحيدة في العلامة المحظور بنيوياً ظهورها في أي إعلان. ظهورها همس الأعضاء، ذكر تحريري، وإشاعة — لا إنفاق مدفوع أبداً."
        }
      }
    ],
    manifesto: {
      en: "BLACK is the brand's most powerful word, used the fewest times.",
      ar: "بلاك هي أقوى كلمات العلامة، الأقل استخداماً."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "vip-funnel",
    number: "23",
    group: G,
    eyebrow: { en: "Chapter Twenty-Three · The Right Door", ar: "الفصل الثالث والعشرون · الباب الصحيح" },
    title: { en: "VIP Client Funnel", ar: "قُمع العميل الرفيع" },
    subtitle: {
      en: "A senior household does not walk through the front door. Their funnel is built backwards from the founder's calendar.",
      ar: "البيت الرفيع لا يدخل من الباب الأمامي. قُمعه يُبنى عكسياً من تقويم المؤسس."
    },
    lead: {
      en: "There is no funnel for VIPs in the conventional sense. There is a private path. Senior households do not fill in forms; they are introduced. Introductions come from existing members, from senior cultural figures, from family offices, from private banks. The brand's job is not to capture them; it is to receive them with composure when they choose to approach. WOSOL builds and maintains a deliberate map of the introduction sources, the relationships that lead to them, and the operational sequence that turns an introduction into a household relationship.",
      ar: "لا يوجد قُمع للضيوف الرفيعين بالمعنى التقليدي. يوجد مسار خاص. البيوت الرفيعة لا تملأ نماذج؛ تُقدَّم. التقديمات تأتي من أعضاء حاليين، من شخصيات ثقافية رفيعة، من مكاتب عائلية، من بنوك خاصة. مهمة العلامة ليست التقاطهم؛ هي استقبالهم برَباطة حين يختارون الاقتراب. تبني وصول وتحفظ خريطة مدروسة لمصادر التقديم، العلاقات التي تؤدي إليها، والتتابع التشغيلي الذي يحوّل تقديماً إلى علاقة بيت."
    },
    whyItMatters: {
      en: "The introductions are the asset. Without them, even an excellent brand spends years to reach senior households. With them, the brand reaches the right households in months.",
      ar: "التقديمات هي الأصل. بدونها، حتى العلامة الممتازة تنفق سنوات للوصول للبيوت الرفيعة. ومعها، تصل العلامة للبيوت الصحيحة في أشهر."
        },
    pillars: [
      {
        title: { en: "Six Introduction Sources", ar: "ست مصادر تقديم" },
        body: {
          en: "Existing members, senior cultural figures, family offices, private banks, hospitality partners (Aman, Rosewood etc.), and a small list of friends-of-the-house. Anyone outside these six is a lead, not an introduction.",
          ar: "أعضاء حاليون، شخصيات ثقافية رفيعة، مكاتب عائلية، بنوك خاصة، شركاء ضيافة (أمان، روزوود، إلخ)، قائمة صغيرة من أصدقاء الدار. أي مصدر خارج هذه الستة هو عميل محتمل، لا تقديم."
        }
      },
      {
        title: { en: "The Founder's Introduction Calendar", ar: "تقويم تقديم المؤسس" },
        body: {
          en: "The founder reserves four hours a week, every week, specifically for first introduction conversations. The slots are not used for general business. Their sanctity is a brand discipline.",
          ar: "يحجز المؤسس أربع ساعات أسبوعياً، كل أسبوع، خصيصاً لحوارات التقديم الأولى. الخانات لا تُستخدَم لعمل عام. قدسيتها انضباط علامة."
        }
      },
      {
        title: { en: "Three Meetings Before Membership", ar: "ثلاثة لقاءات قبل العضوية" },
        body: {
          en: "An introduction (often by an introducer present), a private one-to-one, and a formal acceptance. Each meeting is composed, hand-written-noted, and unrushed. Membership is offered, not pitched.",
          ar: "تقديم (غالباً بحضور المُقدِّم)، لقاء خاص ثنائي، قبول رسمي. كل لقاء مُؤلَّف، يُكتَب يدوياً، غير مُستعجَل. تُعرَض العضوية، لا تُسوَّق."
        }
      },
      {
        title: { en: "Recognition of the Introducer", ar: "تكريم المُقدِّم" },
        body: {
          en: "Every introducer — whether member or external — is recognised with a hand-written letter and, where appropriate, a non-commercial gift. Recognition deepens the introducer's relationship with the brand and produces the next introduction.",
          ar: "كل مُقدِّم — سواء عضو أو خارجي — يُكرَّم برسالة بخط اليد، وحيث يناسب، بهدية غير تجارية. التكريم يُعمِّق علاقة المُقدِّم بالعلامة ويُنتج التقديم التالي."
        }
      }
    ],
    operations: {
      en: [
        "Introduction sources are mapped, owned, and reviewed quarterly by the head of relationships. Introducers' preferences, family contexts, and sensitivities are documented in the CRM with discretion flags.",
        "Each first introduction is followed within 24 hours by a hand-written letter from the founder.",
        "The acceptance meeting is held in a refined residence — preferably the brand's atelier office or, by invitation, the prospective household's own residence. Never at the mall booth.",
        "Pricing is shared verbally only by the founder, never by email, never in a deck. The number is part of the conversation, not a brochure.",
        "Refusal protocol: if a prospective household is not a fit for any tier, the founder writes personally to decline. The letter is generous, considered, and never specific. The brand never lists reasons.",
        "All VIP-tier records carry a discretion flag by default."
      ],
      ar: [
        "تُرسَم مصادر التقديم، يُمتلَكها رئيس العلاقات، وتُراجَع ربع سنوياً. تفضيلات المُقدِّمين، سياقاتهم العائلية، حساسياتهم تُوثَّق في النظام برايات تحفُّظ.",
        "كل تقديم أول يتبعه خلال ٢٤ ساعة رسالة مكتوبة بخط اليد من المؤسس.",
        "لقاء القبول يُعقَد في إقامة راقية — يُفضَّل مكتب ورشة العلامة أو، بدعوة، إقامة البيت المُحتمَل ذاته. لا في منصة المركز أبداً.",
        "التسعير يُذكَر شفوياً من المؤسس فقط، لا بالإيميل، لا في عرض. الرقم جزء من الحوار، لا من بروشور.",
        "بروتوكول الرفض: إذا لم يكن البيت المُحتمَل مناسباً لأي فئة، يكتب المؤسس شخصياً ليرفض. الرسالة كريمة، مدروسة، لا تذكر تفاصيل. العلامة لا تذكر أسباباً.",
        "كل سجلات فئة الـ VIP تحمل راية تحفُّظ افتراضياً."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The introducer's note", ar: "مذكرة المُقدِّم" },
        scene: {
          en: "A folded cream card on a walnut desk, hand-written in deep navy ink (illegible), a wax seal in the bottom right corner, a folded ivory glove resting beside it.",
          ar: "بطاقة كريمية مطوية على مكتب جوز، مكتوبة بخط اليد بحبر كحلي عميق (غير مقروء)، ختم شمعي في الزاوية اليمنى السفلى، قفاز عاجي مطوي يستريح بجوارها."
        },
        mood: { en: "An introduction made in writing.", ar: "تقديم تمّ كتابةً." }
      }
    ],
    recommendations: [
      {
        title: { en: "Track introducer health quarterly", ar: "تتبَّع صحة المُقدِّمين ربع سنوياً" },
        body: {
          en: "Every introduction source is reviewed quarterly for vitality — frequency of recent introductions, quality of their introductions, evolution of the relationship. The brand invests in introducer relationships, not lead lists.",
          ar: "تُراجَع كل مصادر التقديم ربع سنوياً للحيوية — تردد التقديمات الأخيرة، جودتها، تطور العلاقة. تستثمر العلامة في علاقات المُقدِّمين، لا في قوائم العملاء."
        }
      }
    ],
    manifesto: {
      en: "The VIP does not enter our brand. The VIP is presented to it.",
      ar: "العميل الرفيع لا يدخل علامتنا. العميل الرفيع يُقدَّم إليها."
    }
  }
];
