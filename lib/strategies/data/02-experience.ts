import type { Strategy } from "../types";

const G = { en: "Experience", ar: "التجربة" };

export const EXPERIENCE_CHAPTERS: Strategy[] = [
  // ──────────────────────────────────────────────────────────
  {
    slug: "event-strategy",
    number: "03",
    group: G,
    eyebrow: { en: "Chapter Three · The Birth", ar: "الفصل الثالث · الميلاد" },
    title: { en: "Event Strategy", ar: "استراتيجية الحدث" },
    subtitle: {
      en: "The launch is not the opening of a booth. It is the public birth of a Saudi luxury lifestyle house.",
      ar: "ليس الإطلاق افتتاح منصة. هو الميلاد العلني لدار سعودية فاخرة لنمط الحياة."
    },
    lead: {
      en: "Every detail of the launch — the invitation, the silence before the doors open, the scent in the corridor, the way the first guest is greeted — is choreographed to communicate one message: a new house has arrived, and the city's standards have just been raised. The launch event is a positioning instrument first, an awareness instrument second, and a sales instrument third. Inverting this hierarchy is the most common mistake luxury brands make at launch. WOSOL will not make it.",
      ar: "كل تفصيلة من تفاصيل الإطلاق — الدعوة، الصمت قبل أن تُفتح الأبواب، العطر في الممر، طريقة الترحيب بالضيف الأول — مُخرَجة لتقول رسالة واحدة: دارٌ جديدة قد وصلت، وقد ارتفع للتو سقف المدينة. حدث الإطلاق أداة تموضع أولاً، أداة وعي ثانياً، أداة مبيعات ثالثاً. قلب هذا الترتيب هو الخطأ الأكثر شيوعاً في إطلاقات العلامات الفاخرة. وصول لن ترتكبه."
    },
    whyItMatters: {
      en: "The launch is the only moment WOSOL gets a single, controlled, undistracted impression with every relevant stakeholder in the city at once. Wasted, it costs years. Earned, it compresses years of brand-building into a single night.",
      ar: "حدث الإطلاق هو اللحظة الوحيدة التي تحصل فيها وصول على انطباع واحد مُتحكَّم به وغير مشتَّت مع كل صاحب علاقة في المدينة في آنٍ معاً. إن أُهدر، كلَّف سنوات. وإن استُحقَّ، اختصر سنوات من بناء العلامة في ليلة."
        },
    pillars: [
      {
        title: { en: "Two Events, One Story", ar: "حدثان، حكاية واحدة" },
        body: {
          en: "Stage One: a private founders' dinner two weeks before the public opening, hosted in a refined residence, for forty senior guests. Stage Two: the in-mall activation, designed as the world's most composed booth experience. The first creates the rumour; the second confirms it.",
          ar: "المرحلة الأولى: عشاء خاص للمؤسسين قبل الافتتاح العلني بأسبوعين، يُقام في إقامة راقية، لأربعين ضيفاً رفيعاً. المرحلة الثانية: التفعيل داخل المركز، مُصمَّم بوصفه أكثر تجارب المنصّات تركيباً في العالم. الأول يخلق الإشاعة؛ الثاني يؤكدها."
        }
      },
      {
        title: { en: "The Guest Tier Map", ar: "خريطة فئات الضيوف" },
        body: {
          en: "Three tiers — Founders' Circle (40 invitees), Honoured Guests (120 invitees), Open House (curated walk-in). Each tier receives a different invitation, scent, and welcome. The choreography is invisible to the guest but exact internally.",
          ar: "ثلاث فئات — دائرة المؤسسين (٤٠ مدعوّاً)، ضيوف الشرف (١٢٠ مدعوّاً)، البيت المفتوح (دخول منتقى). تتلقى كل فئة دعوة وعطراً وترحيباً مختلفاً. تخريج الإيقاع خفيّ على الضيف، لكنه دقيق داخلياً."
        }
      },
      {
        title: { en: "Press Discipline", ar: "انضباط إعلامي" },
        body: {
          en: "No general press access. A single embargoed press conversation with two outlets only — one English-language quality outlet, one Arabic-language cultural outlet. Photography by one credentialed studio. Discretion is the brand's signature.",
          ar: "لا حضور إعلامي عام. حوار صحفي واحد بحظر نشر مع وسيلتين فقط — وسيلة إنجليزية رصينة، وسيلة عربية ثقافية. التصوير عبر استوديو واحد مُعتمَد. التحفظ هو توقيع العلامة."
        }
      },
      {
        title: { en: "The Silent Reveal", ar: "الكشف الصامت" },
        body: {
          en: "No live presentation. No master of ceremonies. No 'thank you for coming' speech. The guests discover the brand through the space itself — the scent, the sound, the people, the still life. The space is the speech.",
          ar: "لا عرض حيّ. لا مقدّم حفل. لا خطاب \"شكراً على حضوركم\". يكتشف الضيوف العلامة عبر المكان نفسه — العطر، الصوت، الناس، الطبيعة الصامتة. المكان هو الخطبة."
        }
      }
    ],
    operations: {
      en: [
        "Founders' dinner: handwritten invitation on uncoated cream stock, sealed with deep-navy wax. Hand-delivered by a senior custodian in white gloves. Never sent by courier.",
        "A single 'Master of the House' — typically the CEO — greets every Founders' Circle guest by name at the door, without staff cards or earpieces visible.",
        "Service team rehearses the launch flow seven times before the live event. The last rehearsal is silent — no spoken communication permitted, only signals.",
        "A perfumer is briefed to compose the launch scent six months in advance. It is layered into the venue from forty minutes before the first guest arrives.",
        "All branded signage at the launch is limited to one element: a single bound brass nameplate, no larger than a guest book. No banners. No screens with logos. No step-and-repeat backdrop.",
        "Post-event ritual: a hand-written letter from the founder to every Founders' Circle and Honoured Guest within five days, signed and sealed, sent by personal courier."
      ],
      ar: [
        "عشاء المؤسسين: دعوة بخط اليد على ورق كريمي غير مطلي، مختومة بشمع كحلي عميق. تُسلَّم باليد بواسطة قِوام رفيع بقفازات بيضاء. لا تُرسل عبر شركة شحن.",
        "\"معلِّم الدار\" واحد — عادةً الرئيس التنفيذي — يستقبل كل ضيف من دائرة المؤسسين باسمه عند الباب، دون بطاقات موظفين أو سمّاعات أذن ظاهرة.",
        "يتدرّب فريق الخدمة على إيقاع الإطلاق سبع مرّات قبل الحدث الحقيقي. التجربة الأخيرة صامتة — لا تواصل لفظي مسموح، إشارات فقط.",
        "يُكلَّف مُركِّب عطور بتأليف عطر الإطلاق قبل ستة أشهر. يُبثّ في المكان قبل وصول الضيف الأول بأربعين دقيقة.",
        "كل لافتات الإطلاق العلامية محدودة بعنصر واحد: لوح اسم نحاسي مجلَّد، لا يتجاوز حجم دفتر ضيوف. لا لافتات. لا شاشات بشعارات. لا خلفية تكرارية للتصوير.",
        "طقس ما بعد الحدث: رسالة بخط اليد من المؤسس لكل ضيف من المؤسسين وضيوف الشرف خلال خمسة أيام، موقّعة ومختومة، تُرسل عبر مرسال خاص."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Hero plate — the moment before doors open", ar: "صورة هيرو — اللحظة قبل أن تُفتح الأبواب" },
        scene: {
          en: "An empty cream-stone entry corridor, deep-navy doors closed, two simple brass candle pillars, soft golden light from above. No people. No signage.",
          ar: "ممر دخول من حجر كريمي فارغ، أبواب كحلية مغلقة، عمودا شمعدان نحاسيان بسيطان، ضوء ذهبي خفيف من الأعلى. لا أشخاص. لا لافتات."
        },
        mood: { en: "Anticipation. The pause before the brand begins.", ar: "ترقّب. السكوت الذي يسبق بدء العلامة." }
      },
      {
        slot: { en: "Companion — the seated founders' dinner", ar: "صورة مرافقة — جلسة عشاء المؤسسين" },
        scene: {
          en: "A long cream linen table set for forty in a private residence: porcelain, water glassware, white florals, place cards with sealed wax — no readable text. Warm low pendant lighting.",
          ar: "مائدة طويلة من كتان كريمي مُعدّة لأربعين في إقامة خاصة: خزف، كؤوس ماء، أزهار بيضاء، بطاقات أماكن مختومة بشمع — لا نص مقروء. إضاءة دافئة خافتة من معلّقات."
        },
        mood: { en: "Composed intimacy.", ar: "حميمية مُحكَمة." }
      },
      {
        slot: { en: "Detail — the sealed invitation", ar: "تفصيل — الدعوة المختومة" },
        scene: {
          en: "A single envelope on cream stock, sealed with a deep-navy wax stamp embossed in a discreet WOSOL mark, resting on a polished walnut tray with one folded ivory glove.",
          ar: "ظرف مفرد بورق كريمي، مختوم بشمع كحلي عميق منقوش بعلامة وصول التحفظية، يستريح على صينية جوز مصقولة مع قفاز عاجي مطوي."
        },
        mood: { en: "An object the guest will keep.", ar: "غرض يحتفظ به الضيف." }
      }
    ],
    recommendations: [
      {
        title: { en: "Refuse to scale the guest list", ar: "ارفض توسيع قائمة الضيوف" },
        body: {
          en: "Pressure to add names is constant and almost always corrosive. The founders must have explicit authority to refuse any addition not on the original tier map.",
          ar: "الضغط لإضافة أسماء مستمرّ وعادة ما يكون مُضرّاً. يجب أن تكون لدى المؤسسين صلاحية صريحة برفض أي إضافة ليست في خريطة الفئات الأصلية."
        }
      },
      {
        title: { en: "Pre-write the memory", ar: "اكتب الذاكرة قبل وقوعها" },
        body: {
          en: "Before the event, the team writes the specific sentence they want each guest tier to leave repeating in private. The event design is then engineered backwards from that sentence.",
          ar: "قبل الحدث، يكتب الفريق الجملة المحددة التي يريد لكل فئة من الضيوف أن تخرج وهي تردّدها بصمت. ثم يُهندَس تصميم الحدث عكسياً من تلك الجملة."
        }
      },
      {
        title: { en: "Reserve a 'second wave' for month two", ar: "احتفظ بـ \"موجة ثانية\" للشهر الثاني" },
        body: {
          en: "Do not spend the entire press and rumour budget on opening night. Reserve thirty percent of the curated guest list and one PR moment for the second month — when noise has settled and quality stands out.",
          ar: "لا تستهلك كل ميزانية الصدى والإعلام في ليلة الإطلاق. احتفظ بثلاثين بالمئة من قائمة الضيوف المُنتقاة، ولحظة علاقات عامة واحدة، للشهر الثاني — حين يهدأ الضجيج فتتميّز الجودة."
        }
      }
    ],
    manifesto: {
      en: "An opening night is not a celebration. It is a declaration.",
      ar: "ليلة الافتتاح ليست احتفالاً. هي إعلان."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "booth-experience",
    number: "04",
    group: G,
    eyebrow: { en: "Chapter Four · The Stage", ar: "الفصل الرابع · المسرح" },
    title: { en: "Booth Experience", ar: "تجربة المنصّة" },
    subtitle: {
      en: "Not a booth. A residence on loan to the mall.",
      ar: "ليست منصة. هي إقامةٌ مُعارَة للمركز."
    },
    lead: {
      en: "Every assumption about activation booths must be inverted. A traditional booth is loud, branded, transactional, and designed to capture attention from passing traffic. WOSOL's space is quiet, almost branded, intentionally selective in who it draws in, and designed to capture conviction rather than attention. The booth is staged as the corner of a private residence that happens to be visible in the mall — a sitting area, a custodian's writing desk, a discreet welcome ritual. It is the most controlled stage WOSOL operates, and every element is composed.",
      ar: "كل افتراض حول منصّات التفعيل يجب أن يُقلَب. المنصة التقليدية صاخبة، مُعلَّمة، تَجاريّة، مُصمَّمة لجذب الانتباه من حركة المارة. أما مساحة وصول فهادئة، شبه مُعلَّمة فقط، انتقائية بوعي فيمن تجذبه، ومُصمَّمة لانتزاع القناعة لا الانتباه. المنصة مُهيَّأة بوصفها زاوية من إقامة خاصة صادف أنها ظاهرة في المركز — جلسة، مكتب كتابة لقِوام، طقس ترحيب خافت. هي أكثر المسارح التي تُديرها وصول تحكُّماً، وكل عنصر فيها مُؤلَّف."
    },
    whyItMatters: {
      en: "The booth is the only place in the brand's universe where a complete stranger can become a member candidate within ten minutes. Get the staging wrong and every other channel must work twice as hard. Get it right and the booth becomes the brand's most productive single asset.",
      ar: "المنصة هي الموضع الوحيد في كون العلامة الذي يستطيع فيه غريب تامّ أن يتحوّل إلى مرشّح عضوية خلال عشر دقائق. إن أُسيء تكوينها، فكل قناة أخرى ستعمل ضعفاً. وإن أُحسِنت، صارت المنصة أكثر أصول العلامة إنتاجية على الإطلاق."
        },
    pillars: [
      {
        title: { en: "Materials Communicate Status", ar: "الخامات تتكلَّم بالمقام" },
        body: {
          en: "Cream travertine or warm stone, deep-navy panelled timber, brushed brass details, hand-rolled cream linen, walnut writing surfaces. No plastic. No vinyl. No printed banners. The materials are the message.",
          ar: "ترافرتين كريمي أو حجر دافئ، خشب مُلوَّح بالكحلي العميق، تفاصيل نحاس مصقول، كتان كريمي مُلَفّ يدوياً، أسطح كتابة جوزية. لا بلاستيك. لا فينيل. لا لافتات مطبوعة. الخامات هي الرسالة."
        }
      },
      {
        title: { en: "The Zone of Silence", ar: "منطقة الصمت" },
        body: {
          en: "The booth has three distinct zones — the threshold (where the guest is greeted and offered Arabic coffee or water), the conversation seat (a private upholstered nook for ten-minute dialogues), and the registration desk (where membership is invited, never sold). Each zone carries different sound and light.",
          ar: "للمنصة ثلاث مناطق متمايزة — العتبة (حيث يُرحَّب بالضيف وتُقدَّم له قهوة عربية أو ماء)، جلسة الحوار (زاوية مكسوّة خاصة لمحادثات من عشر دقائق)، ومكتب التسجيل (حيث يُدعى إلى العضوية، لا تُباع له). كل منطقة بصوتها وضوئها."
        }
      },
      {
        title: { en: "The Calibrated Welcome", ar: "الاستقبال المُعَيَّر" },
        body: {
          en: "Two custodians on duty at all times — never more than two visible. One stands at the threshold, attentive but composed. One sits at the writing desk, busy but available. This composition reads as 'a residence' rather than 'a counter'.",
          ar: "قِوامان فقط في كل وقت — لا يظهر أكثر من اثنين. أحدهما عند العتبة، يقظ لكن متّزن. الآخر يجلس عند مكتب الكتابة، منشغل لكن متاح. هذا التكوين يُقرأ \"إقامة\" لا \"كاونتر\"."
        }
      },
      {
        title: { en: "Branded Restraint", ar: "تعليم مُتحفّظ" },
        body: {
          en: "The WOSOL name appears in exactly three places in the booth: a brass nameplate at the threshold, a small mark on the guest book, and a sealed wax detail on the membership envelope. Nowhere else. This is the brand's confidence.",
          ar: "يظهر اسم وصول في ثلاثة مواضع فقط داخل المنصة: لوحة نحاسية عند العتبة، علامة صغيرة على دفتر الضيوف، وختم شمعي على ظرف العضوية. لا في أي مكان آخر. هذه ثقة العلامة."
        }
      }
    ],
    operations: {
      en: [
        "Operating hours match Kingdom Centre's premium hours; the booth is fully staffed but quiet during peak traffic. Custodians do not approach passers-by. The booth attracts; it does not solicit.",
        "Arabic coffee is brewed fresh on-site, never bulk-prepared. Dates are sourced weekly from a single Saudi supplier and presented on a refined porcelain dish.",
        "Air conditioning, scent diffusion, and ambient music are run as a single 'atmosphere stack' from a discreet control unit. The stack is checked twice a day against a written standard.",
        "All recorded conversations and CCTV in the booth are encrypted and held only for security purposes. Discretion is a brand standard, not a legal compromise.",
        "A daily 'booth journal' is filled in by the custodians at close — notable guests, notable refusals, notable mistakes, notable observations. Read every morning by the operations director.",
        "The booth never displays QR codes carelessly. The QR is on a small folded cream card placed only when a guest indicates interest. The QR is never on the wall."
      ],
      ar: [
        "ساعات التشغيل توافق ساعات الذروة الراقية في مركز المملكة؛ المنصة كاملة الطاقم لكنها هادئة خلال ذروة الحركة. لا يقترب القِوامون من المارّة. المنصة تجذب، لا تستجدي.",
        "تُحضَّر القهوة العربية طازجة في الموقع، لا تُعَدّ بكميات سلفاً. التمر يُجلَب أسبوعياً من مورّد سعودي واحد ويُقدَّم في طبق خزفي راقٍ.",
        "تُدار التكييف، نثر العطر، والموسيقى المحيطية بوصفها \"حزمة أجواء\" واحدة من وحدة تحكم مخفية. تُفحَص الحزمة مرتين يومياً وفق معيار مكتوب.",
        "كل مكالمات المنصة والكاميرات مشفّرة ومحفوظة لأغراض أمنية فقط. التحفظ معيار علامة لا تنازل قانوني.",
        "يُعبَّأ \"يومية المنصة\" من القِوامين عند الإغلاق — ضيوف جديرون بالملاحظة، رفضات جديرة بالملاحظة، أخطاء جديرة بالملاحظة، ملاحظات جديرة بالملاحظة. تُقرأ كل صباح من مدير العمليات.",
        "لا تعرض المنصة رموز QR باستهتار. يكون الرمز على بطاقة كريمية مطوية صغيرة، تُوضَع فقط حين يُبدي الضيف اهتماماً. لا يُعلَّق رمز QR على الجدار."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Hero plate — the threshold view", ar: "صورة هيرو — منظر العتبة" },
        scene: {
          en: "The booth seen from outside its threshold: cream stone and deep-navy timber, a single brass nameplate, a folded ivory linen tray with two small porcelain Arabic coffee cups, soft warm light. The booth is empty but composed.",
          ar: "المنصة من خارج عتبتها: حجر كريمي وخشب كحلي عميق، لوح اسم نحاسي مفرد، صينية كتان عاجية مطوية بفنجاني قهوة عربية خزفيين صغيرين، ضوء دافئ خفيف. المنصة فارغة لكنها مُتكوّنة."
        },
        mood: { en: "An invitation in stone.", ar: "دعوة في الحجر." }
      },
      {
        slot: { en: "Interior — the conversation seat", ar: "الداخل — جلسة الحوار" },
        scene: {
          en: "A private upholstered nook with cream wool and deep-navy linen, a low walnut side table holding a porcelain pot of Arabic coffee, a folded cream throw on the bench. No people.",
          ar: "ركن مكسوّ خاص بصوف كريمي وكتان كحلي عميق، طاولة جانبية جوز منخفضة عليها إبريق قهوة عربية خزفي، بطّانية كريمية مطوية. لا أشخاص."
        },
        mood: { en: "A residence corner inside the mall.", ar: "زاوية إقامة داخل المركز." }
      },
      {
        slot: { en: "Detail — the writing desk", ar: "تفصيل — مكتب الكتابة" },
        scene: {
          en: "A polished walnut writing desk, a cream leather guest book open to a blank page, a black fountain pen resting at a precise angle, a single brass desk lamp.",
          ar: "مكتب كتابة جوزي مصقول، دفتر ضيوف جلدي كريمي مفتوح على صفحة فارغة، قلم حبر أسود مستريح بزاوية دقيقة، مصباح مكتب نحاسي مفرد."
        },
        mood: { en: "Composed authority.", ar: "سلطة مُتكوّنة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Veto any retail-style merchandising", ar: "ارفض أي بضاعة بأسلوب التجزئة" },
        body: {
          en: "Mall operators will pressure the brand to add visible product, posters, or screens. Every visible commercial element drops the booth's perceived tier. The brand's right to refuse must be agreed contractually with Kingdom Centre.",
          ar: "سيضغط مشغلو المراكز لإضافة منتج ظاهر، ملصقات، شاشات. كل عنصر تجاري ظاهر يُنزِل طبقة المنصة. حق العلامة في الرفض يجب أن يُتفَّق عليه تعاقدياً مع مركز المملكة."
        }
      },
      {
        title: { en: "Treat the booth as a service venue, not a sales venue", ar: "اعتبر المنصة موقع خدمة، لا موقع مبيعات" },
        body: {
          en: "Custodians at the booth should already be handling live service requests during operating hours — not just registering interest. A booth that is visibly working is a booth that visibly matters.",
          ar: "يجب أن يكون قِوامو المنصة يعالجون طلبات خدمة حيّة فعلاً خلال ساعات العمل — لا مجرد تسجيل اهتمام. المنصة التي تعمل فعلاً هي المنصة التي تُحتسب فعلاً."
        }
      },
      {
        title: { en: "Build a 'second booth' for private events", ar: "ابنِ \"منصة ثانية\" للفعاليات الخاصة" },
        body: {
          en: "A demountable, portable version of the booth — same materials, same scent, same writing desk — that travels to Saudi Cup hospitality, Diriyah events, and senior private functions. Becomes a mobile ambassador.",
          ar: "نسخة قابلة للفك ومتنقلة من المنصة — بنفس الخامات، نفس العطر، نفس مكتب الكتابة — تنتقل لضيافة كأس السعودية، فعاليات الدرعية، والمناسبات الخاصة الراقية. تصير سفيراً متنقلاً."
        }
      }
    ],
    manifesto: {
      en: "The booth must be the first place in the mall where one feels at home.",
      ar: "يجب أن تكون المنصة أول مكان في المركز يشعر فيه الزائر أنه في بيته."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "guest-journey",
    number: "07",
    group: G,
    eyebrow: { en: "Chapter Seven · The Arc", ar: "الفصل السابع · القوس" },
    title: { en: "Guest Journey", ar: "رحلة الضيف" },
    subtitle: {
      en: "The full ninety-minute arc from a passing glance to a signed introduction — designed as a single composed sequence.",
      ar: "القوس الكامل من النظرة العابرة إلى التقديم المُوقَّع — مُصمَّم كتتابع مُؤلَّف واحد."
    },
    lead: {
      en: "Most concierge brands plan customer journeys as marketing funnels. WOSOL plans them as choreography. The guest moves through five stages: Notice, Approach, Settle, Confide, Carry. Each stage has its own atmosphere, its own sentences, its own object. The guest may complete only one stage on the first visit — that is by design, not failure. The brand earns the right to the next stage by the calibre of the previous one. A guest who experiences all five within the first two visits is, structurally, a future member.",
      ar: "تُخطِّط أغلب علامات الكونسيرج رحلة العميل بوصفها قُمعاً تسويقياً. أما وصول فتخطِّطها بوصفها تخريجاً مسرحياً. يمرّ الضيف بخمس مراحل: الالتفات، الاقتراب، الاستقرار، البوح، الحمل. لكل مرحلة جوّها، جُملها، وغرضها. قد يُكمل الضيف مرحلة واحدة فقط في الزيارة الأولى — هذا بالتصميم لا بالفشل. تستحق العلامة المرحلة التالية بجودة المرحلة السابقة. الضيف الذي يَعبُر المراحل الخمس في أول زيارتين هو، بنيوياً، عضو المستقبل."
    },
    whyItMatters: {
      en: "Without a defined journey, every custodian invents their own. Without a defined journey, success cannot be replicated and failure cannot be diagnosed. The journey is the brand's most underrated operational asset.",
      ar: "بدون رحلة معرّفة، يخترع كل قِوام رحلته الخاصة. بدون رحلة معرّفة، لا يمكن تكرار النجاح، ولا تشخيص الفشل. الرحلة هي أكثر الأصول التشغيلية للعلامة قيمةً وأقلّها ذكراً."
        },
    pillars: [
      {
        title: { en: "Stage One — Notice", ar: "المرحلة الأولى — الالتفات" },
        body: {
          en: "The guest sees the booth from across the mall and registers it as different. The cue is the silence and the materials, not movement. Notice is won in three to five seconds and lost in the same.",
          ar: "يرى الضيف المنصة من الجانب المقابل للمركز فيُسجِّلها بوصفها مختلفة. الإشارة هي الصمت والخامات، لا الحركة. الالتفات يُربَح في ثلاث إلى خمس ثوانٍ ويُفقَد في المدة نفسها."
        }
      },
      {
        title: { en: "Stage Two — Approach", ar: "المرحلة الثانية — الاقتراب" },
        body: {
          en: "The custodian at the threshold establishes eye contact, offers a small bow of the head, and waits. No approach. No script. The guest crosses the threshold of their own volition — and that volition is the first contract.",
          ar: "يلتقي قِوام العتبة بعينَيْ الضيف، ينحني انحناءة رأس خفيفة، وينتظر. لا اقتراب. لا نص محفوظ. يعبر الضيف العتبة بإرادته — وهذه الإرادة هي العقد الأول."
        }
      },
      {
        title: { en: "Stage Three — Settle", ar: "المرحلة الثالثة — الاستقرار" },
        body: {
          en: "The custodian guides the guest to the conversation seat, offers Arabic coffee or water, and leaves a thirty-second pause before any verbal exchange. The pause is the brand's loudest signal: you are not being sold to.",
          ar: "يقود القِوام الضيف إلى جلسة الحوار، يقدّم له القهوة العربية أو الماء، ويترك سكوناً مدته ثلاثون ثانية قبل أي تبادل لفظي. هذا السكون أعلى إشارة في العلامة: لست في موقع بيع."
        }
      },
      {
        title: { en: "Stage Four — Confide", ar: "المرحلة الرابعة — البوح" },
        body: {
          en: "Only here does the conversation begin, and it begins with the custodian asking how the guest's day has been. Not what brought them in. Not what they need. The conversation is curious about the person, never the transaction.",
          ar: "هنا فقط يبدأ الحوار، ويبدأ بسؤال القِوام عن كيف كان يوم الضيف. لا عما جاء به. لا عما يحتاجه. الحوار فضولي حول الشخص، لا حول الصفقة."
        }
      },
      {
        title: { en: "Stage Five — Carry", ar: "المرحلة الخامسة — الحمل" },
        body: {
          en: "On departure, the guest carries a small object — a sealed envelope, a printed card, a bound notebook. The object is the brand's continuation when the guest is no longer in the room. Without this object, the visit evaporates.",
          ar: "عند المغادرة، يحمل الضيف غرضاً صغيراً — ظرفاً مختوماً، بطاقة مطبوعة، دفتراً مجلَّداً. هذا الغرض هو امتداد العلامة حين لا يكون الضيف في الغرفة. بدونه، تتبخر الزيارة."
        }
      }
    ],
    operations: {
      en: [
        "A single laminated 'journey card' is held by every custodian, in Arabic and English, with the five stages and the brand's hallmark sentence for each. Read every shift, internalised, never shown to a guest.",
        "Stage progression is logged in the CRM. A guest who reaches Stage Four within two visits is flagged for the senior relationship lead.",
        "The 'Carry' object is composed per tier — a sealed cream envelope with a personal note for general guests; a bound notebook for honoured guests; a hand-numbered House Code copy for member candidates.",
        "A 'thirty-second silence' rule is enforced operationally. Custodians who fill the silence with sales talk are coached privately the same day.",
        "Recovery protocol: if a guest is approached too quickly (the most common mistake), the custodian pivots to an unrelated observation about the season or the mall, never an apology. The brand does not narrate its mistakes.",
        "End-of-visit ritual: the senior on duty escorts the guest two steps beyond the threshold before turning back. The guest sees their host turn, not their back."
      ],
      ar: [
        "بطاقة رحلة واحدة مغلَّفة يحملها كل قِوام، بالعربية والإنجليزية، فيها المراحل الخمس وجملة العلامة المميزة لكل واحدة. تُقرأ كل مناوبة، تُستبطَن، ولا تُعرَض للضيف.",
        "تُسجَّل مراحل التقدّم في نظام إدارة علاقات العملاء. يُعلَّم الضيف الذي يبلغ المرحلة الرابعة في زيارتين لرئيس العلاقات الرفيع.",
        "غرض \"الحمل\" يُؤلَّف حسب الفئة — ظرف كريمي مختوم برسالة شخصية للضيوف العامين؛ دفتر مجلَّد لضيوف الشرف؛ نسخة مرقَّمة بخط اليد من \"دستور الدار\" لمرشّحي العضوية.",
        "قاعدة \"الثلاثون ثانية صمتاً\" تُطبَّق تشغيلياً. القِوام الذي يملأ الصمت بكلام بيعي يُدرَّب على انفراد في اليوم نفسه.",
        "بروتوكول الترميم: إذا اقتُرِب من الضيف بسرعة (الخطأ الأشهر)، يحوِّل القِوام الحديث إلى ملاحظة لا علاقة لها عن الموسم أو المركز، لا إلى اعتذار. العلامة لا تروي أخطاءها.",
        "طقس ختام الزيارة: يصاحب القِوام الرفيع الضيف خطوتين خارج العتبة قبل أن يستدير. يرى الضيف مضيفه يستدير، لا ظهره."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Plate One — Notice", ar: "صورة واحد — الالتفات" },
        scene: {
          en: "A long mall corridor photographed from a guest's eye line, the WOSOL booth visible at the far end as a single composed cream-and-navy mass, foreground softly blurred.",
          ar: "ممر مركز طويل مُصوَّر من خطّ نظر الضيف، منصة وصول ظاهرة في الطرف البعيد ككتلة كريمية كحلية واحدة مُتكوّنة، خلفية أمامية ضبابية خفيفة."
        },
        mood: { en: "The first 3 seconds.", ar: "أول ثلاث ثوانٍ." }
      },
      {
        slot: { en: "Plate Two — Settle", ar: "صورة اثنين — الاستقرار" },
        scene: {
          en: "A close still life inside the booth: a porcelain Arabic coffee cup, a small dish of dates, a folded cream linen napkin, on a low walnut surface. Side warm light.",
          ar: "طبيعة صامتة قريبة داخل المنصة: فنجان قهوة عربية خزفي، طبق تمر صغير، منديل كتان كريمي مطوي، على سطح جوز منخفض. ضوء جانبي دافئ."
        },
        mood: { en: "The pause that earns trust.", ar: "السكوت الذي يكسب الثقة." }
      },
      {
        slot: { en: "Plate Three — Carry", ar: "صورة ثلاثة — الحمل" },
        scene: {
          en: "A guest's gloved hand (cropped at the wrist) carrying a sealed cream envelope marked only with a wax stamp, walking away from the booth into ambient mall light.",
          ar: "يد ضيف بقفاز (مقطوعة عند المعصم) تحمل ظرفاً كريمياً مختوماً بشمع فقط، تبتعد عن المنصة نحو إضاءة المركز."
        },
        mood: { en: "The brand leaving the room.", ar: "العلامة وهي تخرج من الغرفة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Train the journey before training the offer", ar: "درّب الرحلة قبل تدريب العرض" },
        body: {
          en: "New custodians must master the five stages before they are introduced to pricing, membership tiers, or partner brands. Mastering the journey produces a custodian who can sell anything. Mastering the offer first produces a salesperson.",
          ar: "يجب أن يتقن القِوامون الجدد المراحل الخمس قبل أن يُعرَّفوا بالتسعير، الفئات، الشراكات. إتقان الرحلة يُنتج قِواماً يستطيع بيع أي شيء. إتقان العرض أولاً يُنتج بائعاً."
        }
      },
      {
        title: { en: "Score the journey weekly", ar: "قَيِّم الرحلة أسبوعياً" },
        body: {
          en: "Each custodian's interactions are weekly scored by the operations director against the five-stage rubric. The score is qualitative, narrative, and read out in the weekly stand-up.",
          ar: "تُقيَّم تفاعلات كل قِوام أسبوعياً من مدير العمليات وفق رُكب المراحل الخمس. التقييم نوعي وسردي، يُتلى في اجتماع الأسبوع."
        }
      }
    ],
    manifesto: {
      en: "We do not move guests through funnels. We carry them through chapters.",
      ar: "لا نُمرّر الضيوف عبر قُمَع. نحملهم عبر فصول."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "guest-interaction",
    number: "16",
    group: G,
    eyebrow: { en: "Chapter Sixteen · The Exchange", ar: "الفصل السادس عشر · التبادل" },
    title: { en: "Guest Interaction System", ar: "نظام تفاعل الضيف" },
    subtitle: {
      en: "What we say, when, in which language, and at what register — codified, rehearsed, and consistent across every touch.",
      ar: "ما نقول، متى، بأي لغة، وبأي طبقة من الحديث — مُقنَّن ومُتدرَّب عليه ومتّسق عبر كل لمسة."
    },
    lead: {
      en: "Luxury consistency lives or dies on language. The same brand can produce a perfect material environment and lose a client because a custodian said 'no worries'. The Guest Interaction System defines the brand's vocabulary, its register shifts between Arabic and English, the moments to speak and the moments to remain silent, and the recovery moves when something goes wrong. The system is short — short enough to memorise — and rehearsed daily.",
      ar: "تعيش الفخامة وتموت في اللغة. نفس العلامة قد تُنتج بيئة مادية متقنة وتخسر عميلاً لأن قِواماً قال \"ولا يهمك\". نظام تفاعل الضيف يُعرِّف مفردات العلامة، تحوّلاتها بين العربية والإنجليزية، لحظات الكلام ولحظات الصمت، وحركات الترميم حين يقع خطأ. النظام قصير — قصير بما يكفي للحفظ — ويُتدرَّب عليه يومياً."
    },
    whyItMatters: {
      en: "Language is the only luxury asset that travels into every photo, every recording, every retelling. A perfect interior cannot survive a careless sentence in the lobby. Language is the brand's air.",
      ar: "اللغة هي الأصل الفاخر الوحيد الذي ينتقل إلى كل صورة، كل تسجيل، كل رواية. لا يمكن لداخلية متقنة أن تنجو من جملة مهملة في الردهة. اللغة هي هواء العلامة."
        },
    pillars: [
      {
        title: { en: "Three Registers", ar: "ثلاث طبقات للحديث" },
        body: {
          en: "Formal (initial greeting and any moment of recovery), Warm (Stage Four conversation and member relationships), and Discreet (every operational exchange overheard by the guest). Every custodian knows which register applies, when.",
          ar: "رسمية (التحية الأولى وأي لحظة ترميم)، دافئة (حوار المرحلة الرابعة وعلاقات الأعضاء)، تَحفُّظية (كل تبادل تشغيلي قد يسمعه الضيف). كل قِوام يعرف أي طبقة تنطبق ومتى."
        }
      },
      {
        title: { en: "Arabic-First, English-Capable", ar: "العربية أولاً، الإنجليزية بإتقان" },
        body: {
          en: "The default greeting is Arabic. The custodian switches only if the guest answers in English. English remains lexically rich, never colloquial. 'Hi' and 'hey' do not exist in the brand's English. 'Hello' is the minimum.",
          ar: "التحية الافتراضية بالعربية. لا ينتقل القِوام إلا إذا أجاب الضيف بالإنجليزية. تبقى الإنجليزية ثرية المفردات، لا عاميّة. \"Hi\" و\"hey\" لا توجدان في إنجليزية العلامة. \"Hello\" هو الحد الأدنى."
        }
      },
      {
        title: { en: "Forbidden and Preferred Words", ar: "ألفاظ محظورة وألفاظ مُفضّلة" },
        body: {
          en: "A two-column private list. Forbidden: 'no problem', 'sure', 'will try', 'maybe', 'I think', 'sweetie', 'mate'. Preferred: 'with pleasure', 'consider it arranged', 'leave it to me', 'I will look into it personally'. The list is rehearsed in shift briefings.",
          ar: "قائمة سرية ذات عمودين. محظور: \"ولا يهمك\"، \"تمام\"، \"بحاول\"، \"يمكن\"، \"أعتقد\"، \"حبيبتي\"، \"أخي\". مُفضَّل: \"بكل سرور\"، \"اعتبرها مُرتَّبة\"، \"أتركها لي\"، \"سأبحث الأمر شخصياً\". تُكرَّر القائمة في إحاطات المناوبة."
        }
      },
      {
        title: { en: "The Discreet Channel", ar: "القناة التحفُّظية" },
        body: {
          en: "Operational coordination overheard by guests follows a fixed code: numbers, single Arabic letters, and pre-agreed phrases. The brand never has a 'staff voice' in front of guests.",
          ar: "التنسيق التشغيلي الذي قد يسمعه الضيوف يتبع كوداً ثابتاً: أرقام، حروف عربية مفردة، وجمل مُتفَق عليها سلفاً. لا تظهر \"لغة موظفين\" أمام الضيوف."
        }
      }
    ],
    operations: {
      en: [
        "Weekly 30-minute language drill led by the senior custodian on shift. Role-play one greeting, one recovery, one departure. The drill is not optional.",
        "Voice notes from team WhatsApp groups are reviewed monthly for tone drift. Custodians who slip into casual register receive private coaching.",
        "A 'Recovery Phrase Book' for the ten most common service failures — late delivery, misunderstood request, wrong arrangement, guest dissatisfaction. Each entry is a single sentence, never longer.",
        "All written communication is reviewed before sending if it is to a Member Tier guest. Two-person sign-off rule.",
        "A 'silence allowance' is taught: it is professional to take a five-second pause to think. Filling silence with 'um' or 'so' is treated as a brand violation.",
        "Bilingual sign-off conventions standardised. Arabic: 'في خدمتكم دائماً'. English: 'In your service'."
      ],
      ar: [
        "تدريب لغوي أسبوعي مدته ثلاثون دقيقة يقوده القِوام الرفيع في المناوبة. تمثيل تحية، ترميم، مغادرة. التدريب ليس اختيارياً.",
        "تُراجَع المقاطع الصوتية من مجموعات الفريق على واتساب شهرياً بحثاً عن انحراف نبرة. القِوامون الذين ينزلقون لطبقة عامية يحظون بإحاطة خاصة.",
        "\"كتاب جُمل الترميم\" لأكثر عشرة إخفاقات شيوعاً — تأخر توصيل، طلب فُهم خطأ، ترتيب غير صحيح، عدم رضا ضيف. كل بند جملة واحدة، لا أطول.",
        "تُراجع كل المراسلات الكتابية قبل إرسالها إذا كانت لعميل من فئة الأعضاء. قاعدة توقيع شخصين.",
        "تُعَلَّم \"مهلة الصمت\": من المهنية أن تأخذ خمس ثوانٍ للتفكير. ملء الصمت بـ\"يعني\" أو \"اممم\" يُعتبر مخالفة علامة.",
        "تُوحَّد صيغ التوقيع ثنائي اللغة. عربية: \"في خدمتكم دائماً\". إنجليزية: \"In your service\"."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The phrase book plate", ar: "صورة كتاب الجمل" },
        scene: {
          en: "A small hand-bound cream notebook open on a walnut desk, the pages crowded with handwritten Arabic and English entries in a clean editorial hand, a brass paperweight resting beside it.",
          ar: "دفتر صغير مجلَّد يدوياً كريمي مفتوح على مكتب جوزي، الصفحات مكتظة بمدخلات بالعربية والإنجليزية بخط تحريري نظيف، ثقّالة ورق نحاسية تستريح بجواره."
        },
        mood: { en: "Language as discipline.", ar: "اللغة كانضباط." }
      },
      {
        slot: { en: "The discreet channel plate", ar: "صورة القناة التحفُّظية" },
        scene: {
          en: "Two custodian silhouettes communicating across a quiet corridor with the briefest exchange of hand signals — backs to the camera, side lit. The guest is not visible. The conversation cannot be heard.",
          ar: "ظلَّا قِوامَيْن يتواصلان عبر ممر هادئ بأبسط تبادل لإشارات اليد — ظهرهما للكاميرا، إضاءة جانبية. الضيف غير ظاهر. الحديث لا يُسمَع."
        },
        mood: { en: "The conversation the guest never overhears.", ar: "الحوار الذي لا يلتقطه الضيف." }
      }
    ],
    recommendations: [
      {
        title: { en: "Publish the language standards", ar: "انشر معايير اللغة" },
        body: {
          en: "An internal, printed, bilingual 'House Voice' booklet — distinct from the philosophy document — that codifies the system. Reviewed annually by a senior cultural advisor.",
          ar: "كتيب داخلي مطبوع ثنائي اللغة بعنوان \"صوت الدار\" — منفصل عن وثيقة الفلسفة — يُقنّن النظام. يُراجَع سنوياً من مستشار ثقافي رفيع."
        }
      },
      {
        title: { en: "Run a quarterly 'tone audit'", ar: "نفّذ \"تدقيق نبرة\" ربع سنوي" },
        body: {
          en: "External luxury hospitality consultant samples ten written and ten verbal interactions per quarter, scores against the standards, and reports privately to the founders. Drift detected early is drift cheaply corrected.",
          ar: "مستشار ضيافة فاخرة خارجي يأخذ عيّنة من عشر تفاعلات مكتوبة وعشر شفهية في كل ربع، يُقيِّمها وفق المعايير، ويرفع تقريراً سرّياً للمؤسسين. الانحراف الذي يُلتقَط مبكراً يُصحَّح برخصٍ."
        }
      }
    ],
    manifesto: {
      en: "Language is the air the brand breathes. We refuse to share its air with sloppy sentences.",
      ar: "اللغة هي الهواء الذي تتنفسه العلامة. ونحن نرفض أن نُشاركها الهواء مع جُمَل مُتهَّلكة."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "event-activations",
    number: "34",
    group: G,
    eyebrow: { en: "Chapter Thirty-Four · The Year", ar: "الفصل الرابع والثلاثون · العام" },
    title: { en: "Event Activation Ideas", ar: "أفكار التفعيلات السنوية" },
    subtitle: {
      en: "A rolling calendar of small, immaculate activations — each one its own miniature launch, never a generic 'campaign'.",
      ar: "تقويم متدحرج لتفعيلات صغيرة متقنة — كل واحدة منها إطلاقٌ مصغَّر بحد ذاتها، لا \"حملة\" عامة."
    },
    lead: {
      en: "Luxury brands that go quiet after launch lose the city. Luxury brands that go loud after launch lose the tier. The discipline is in between: small, frequent, immaculately staged activations that keep the brand present without ever feeling marketed. WOSOL must publish an annual activation calendar that hits the city's cultural beats — and quietly reveals new layers of the brand each time.",
      ar: "العلامات الفاخرة التي تخفت بعد الإطلاق تخسر المدينة. والعلامات التي تصرخ بعد الإطلاق تخسر الطبقة. الانضباط بين هذين: تفعيلات صغيرة متكررة متقنة الإخراج تُبقي العلامة حاضرة دون أن تبدو مُسوَّقة. يجب أن تنشر وصول تقويماً سنوياً للتفعيلات يضرب نبضات المدينة الثقافية — ويكشف بهدوء طبقات جديدة من العلامة في كل مرة."
    },
    whyItMatters: {
      en: "Annual activation discipline is the difference between a brand that launches and a brand that lasts. Without it, the brand becomes a memory. With it, the brand becomes a habit of mind.",
      ar: "انضباط التفعيلات السنوي هو الفارق بين علامة تُطلق وعلامة تَدوم. بدونه، تصير العلامة ذكرى. ومعه، تصير عادةً ذهنية."
        },
    pillars: [
      {
        title: { en: "The Eight Beats", ar: "النبضات الثمانية" },
        body: {
          en: "Eight activation moments per year: pre-Ramadan welcome, Ramadan majlis evenings, Eid hospitality, Saudi Founding Day, Saudi Cup week, Riyadh Season opening, Saudi National Day, year-end private dinner. Eight is enough.",
          ar: "ثماني لحظات تفعيل في السنة: ترحيب ما قبل رمضان، أمسيات مجلس رمضانية، ضيافة العيد، يوم التأسيس، أسبوع كأس السعودية، افتتاح موسم الرياض، اليوم الوطني، عشاء نهاية العام الخاص. ثمانية كافية."
        }
      },
      {
        title: { en: "Smaller than Expected", ar: "أصغر مما يُتوقَّع" },
        body: {
          en: "Every activation is intentionally smaller than guests expect. A 'majlis evening' for forty, not four hundred. A 'Saudi Cup gathering' for twenty, not two hundred. Scarcity is the brand's signature ingredient.",
          ar: "كل تفعيل أصغر مما يتوقع الضيوف. \"أمسية مجلس\" لأربعين لا لأربعمئة. \"تجمّع كأس السعودية\" لعشرين لا لمئتين. الندرة هي مكوّن العلامة المميَّز."
        }
      },
      {
        title: { en: "An Object per Activation", ar: "غرض لكل تفعيل" },
        body: {
          en: "Each activation produces a single small object — a printed menu, a hand-numbered booklet, a small ceramic dish — that guests carry home. Eight objects a year compound into a private archive in members' homes.",
          ar: "ينتج كل تفعيل غرضاً صغيراً واحداً — قائمة طعام مطبوعة، كتيّب مرقَّم يدوياً، صحن خزفي صغير — يحمله الضيوف لبيوتهم. ثمانية أغراض في السنة تتراكم لأرشيف خاص في بيوت الأعضاء."
        }
      },
      {
        title: { en: "No Public Recap", ar: "لا تغطية عامة" },
        body: {
          en: "Activations are never publicly recapped. No social media post 'thanking guests for an unforgettable evening'. The absence is itself a status signal — these are evenings you were either at or absent from. The brand never apologises for the missing.",
          ar: "لا تُغطَّى التفعيلات علناً. لا منشور سوشيال ميديا يشكر الضيوف على \"أمسية لا تُنسى\". الغياب نفسه إشارة مكانة — هذه أمسيات إما حضرتها أو لم تحضرها. العلامة لا تعتذر للغائبين."
        }
      }
    ],
    operations: {
      en: [
        "Annual activation calendar locked Q4 of the prior year. Locked, not 'planned'. No additions are made within sixty days of any activation.",
        "Every activation has a sealed brief — venue, scent, sound, dress code, guest tier, object — produced by the operations director and approved by the founder.",
        "A single 'house photographer' (not a videographer) attends each activation for archival images only. No reels. No clips. The brand does not document itself for the public.",
        "Guests RSVP not by online form but by reply to a printed card or a custodian's call. The friction is intentional and qualifying.",
        "A 'no-show fee' — symbolic, not monetary — is communicated. A no-show without notice forfeits the next two activation invitations. The brand respects its own table.",
        "Two activations a year are designated 'silent' — no Arabic coffee service, no toasts, no music. A meal eaten in candlelight. The variation prevents the calendar from becoming predictable."
      ],
      ar: [
        "يُغلَق تقويم التفعيلات السنوي في الربع الأخير من العام السابق. مُغلَق، لا \"مخطَّط\". لا إضافات تُقبل خلال ستين يوماً من أي تفعيل.",
        "لكل تفعيل ملف مختوم — المكان، العطر، الصوت، الزي، فئة الضيوف، الغرض — يُعدّه مدير العمليات ويُقرّه المؤسس.",
        "\"مصوّر الدار\" واحد فقط (لا مُصوِّر فيديو) يحضر كل تفعيل لصور أرشيفية فحسب. لا ريلز. لا مقاطع. العلامة لا توثِّق نفسها للجمهور.",
        "يؤكد الضيوف الحضور لا عبر نموذج إلكتروني بل بالرد على بطاقة مطبوعة أو بمكالمة قِوام. الاحتكاك مقصود ومُؤهِّل.",
        "تُبلَّغ \"رسوم غياب\" رمزية لا مالية. الغياب دون إخطار يُلغي دعوتَي التفعيلين التاليتين. العلامة تحترم مائدتها.",
        "تفعيلان في السنة يُصنَّفان \"صامتَيْن\" — لا تقديم قهوة عربية، لا أناشيد، لا موسيقى. وجبة تُؤكل على ضوء الشموع. التنوع يمنع التقويم من الصيرورة متوقعاً."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Calendar plate", ar: "صورة التقويم" },
        scene: {
          en: "A large cream linen-bound desk diary open to a page marked with eight discrete brass-pin entries throughout the year. A single fountain pen rests beside it. No readable text.",
          ar: "مفكرة مكتب كبيرة مغلَّفة بكتان كريمي مفتوحة على صفحة مُعلَّمة بثماني علامات نحاسية متفرقة على مدار العام. قلم حبر يستريح بجوارها. لا نص مقروء."
        },
        mood: { en: "Eight beats, composed.", ar: "ثماني نبضات، مُؤلَّفة." }
      },
      {
        slot: { en: "Activation interior plate", ar: "صورة داخل التفعيل" },
        scene: {
          en: "A Ramadan majlis evening set in a refined residence: cream low cushions, deep navy carpets, brass coffee pots arranged with porcelain cups, candles lining a long low table. Empty before guests arrive.",
          ar: "أمسية مجلس رمضانية مُعدّة في إقامة راقية: مساند منخفضة كريمية، سجاد كحلي عميق، دلال نحاس مرتبة بفناجين خزف، شموع تصطفّ على طاولة منخفضة طويلة. فارغة قبل وصول الضيوف."
        },
        mood: { en: "Saudi luxury hospitality, restated.", ar: "الضيافة السعودية الفاخرة بصياغة جديدة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Plan the entire year's objects centrally", ar: "خطّط أغراض السنة كلها مركزياً" },
        body: {
          en: "All eight activation objects should be commissioned at the start of the year from a small number of Saudi makers. The continuity of craftsmanship is itself the brand.",
          ar: "ينبغي إصدار أوامر تنفيذ كل أغراض التفعيلات الثمانية في بداية السنة من عدد محدود من صنّاع سعوديين. تواصل الحرفة هو ذاته العلامة."
        }
      },
      {
        title: { en: "Reserve one 'open' beat", ar: "احتفظ بنبضة واحدة \"مفتوحة\"" },
        body: {
          en: "Keep one activation slot deliberately unscheduled until the second quarter. Allows the brand to respond to an unforeseen cultural moment — a state visit, a royal occasion — without forcing a fit.",
          ar: "اترك خانة تفعيل واحدة دون جدولة عمداً حتى الربع الثاني. تتيح للعلامة الاستجابة للحظة ثقافية غير متوقعة — زيارة دولة، مناسبة ملكية — دون إقحامها."
        }
      }
    ],
    manifesto: {
      en: "The calendar is not a marketing tool. It is a discipline of presence.",
      ar: "التقويم ليس أداة تسويق. هو انضباط حضور."
    }
  }
];
