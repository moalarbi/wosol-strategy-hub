import type { Strategy } from "../types";

const G = { en: "Content", ar: "المحتوى" };

export const CONTENT_CHAPTERS: Strategy[] = [
  // ──────────────────────────────────────────────────────────
  {
    slug: "content-strategy",
    number: "12",
    group: G,
    eyebrow: { en: "Chapter Twelve · The Voice in Public", ar: "الفصل الثاني عشر · الصوت في العلن" },
    title: { en: "Luxury Content Strategy", ar: "استراتيجية المحتوى الفاخر" },
    subtitle: {
      en: "We publish for two audiences: the members who already know us, and the future members who are watching from a distance.",
      ar: "ننشر لجمهورين: الأعضاء الذين يعرفوننا، والأعضاء المستقبليون الذين يراقبوننا من بُعد."
    },
    lead: {
      en: "Luxury content is not lead generation. It is reputation construction. Every piece WOSOL publishes is read by two audiences at once: members who already trust the brand and use the content as confirmation that they chose wisely; and future members who are watching from a respectful distance, building up the impression of a house worthy of approach. Content built for either audience alone will fail at building a brand of standing. WOSOL's content discipline is therefore quieter, slower, and rarer than the digital marketing default — and far more powerful.",
      ar: "المحتوى الفاخر ليس توليد عملاء محتملين. هو بناء سمعة. كل قطعة تنشرها وصول يقرؤها جمهوران معاً: الأعضاء الذين يثقون بالعلامة سلفاً ويستخدمون المحتوى تأكيداً على حُسن اختيارهم؛ والأعضاء المستقبليون الذين يراقبون من بُعد محترم، يبنون انطباع دارٍ تستحق الاقتراب منها. المحتوى الذي يُبنى لأحد الجمهورين فقط يخفق في بناء علامة ذات مقام. لذلك انضباط المحتوى في وصول أكثر هدوءاً، أبطأ، وأندر من الافتراضات الرقمية — وأقوى بكثير."
    },
    whyItMatters: {
      en: "Content is the brand's only daily public expression. Without a clear content discipline, the team will produce, and the brand will drift. The discipline is the asset.",
      ar: "المحتوى هو التعبير العلني اليومي الوحيد للعلامة. بدون انضباط محتوى واضح، سيُنتج الفريق، وستنحرف العلامة. الانضباط هو الأصل."
        },
    pillars: [
      {
        title: { en: "Three Pillars Only", ar: "ثلاث ركائز فقط" },
        body: {
          en: "WOSOL publishes around three pillars: Atmosphere (cinematic moments inside the booth or residence), Craft (Saudi makers, materials, rituals), and Manifesto (short philosophical texts, never longer than 80 words). Nothing else. No menus, no offers, no specials.",
          ar: "تنشر وصول حول ثلاث ركائز: الجو (لحظات سينمائية داخل المنصة أو الإقامة)، الحرفة (الصنّاع، المواد، الطقوس السعودية)، والبيان (نصوص فلسفية قصيرة، لا تزيد عن ٨٠ كلمة). لا شيء غيرها. لا قوائم، لا عروض، لا تخفيضات."
        }
      },
      {
        title: { en: "Cadence as Restraint", ar: "الإيقاع كضبط نفس" },
        body: {
          en: "Two posts per week, never more. One Atmosphere or Craft, one Manifesto. The discipline of restraint produces a feed that members re-visit as if it were a magazine.",
          ar: "منشوران في الأسبوع، لا أكثر. واحد للجو أو الحرفة، وواحد للبيان. انضباط ضبط النفس يُنتج صفحة يعود إليها الأعضاء وكأنها مجلة."
        }
      },
      {
        title: { en: "Bilingual Always", ar: "ثنائي اللغة دائماً" },
        body: {
          en: "Every caption is published in Arabic first, English second, with the same brand voice across both. Arabic is never a translation of English; the two are composed in parallel.",
          ar: "يُنشر كل تعليق بالعربية أولاً، الإنجليزية ثانياً، بنفس صوت العلامة. العربية ليست ترجمة للإنجليزية؛ الاثنتان تُؤلَّفان جنباً إلى جنب."
        }
      },
      {
        title: { en: "No Performance Metrics on the Wall", ar: "لا مقاييس أداء على الجدار" },
        body: {
          en: "Reach, likes, comments, saves are not the success metric. The success metric is repeat visit by qualified audience — members and member candidates — which is tracked through pixel-anchored CRM lookups, not vanity counts.",
          ar: "الوصول، الإعجابات، التعليقات، الحفظ ليست مقياس النجاح. المقياس هو الزيارة المتكررة من جمهور مؤهَّل — الأعضاء والمرشحون — يُتتبَّع عبر بحث في نظام إدارة العلاقات المثبَّت بالبكسل، لا عبر أعداد سطحية."
        }
      }
    ],
    operations: {
      en: [
        "A monthly content council — founder, brand custodian, head of content, senior cultural advisor — approves the month's pillar mix in advance.",
        "All captions are reviewed against the brand voice booklet (Chapters 16 and 30) before scheduling. Two-person sign-off on every post.",
        "No reposting of member content unless explicit, written, in-person permission has been granted. Member privacy is the brand's content default.",
        "A reels production pipeline staffed by one in-house cinematic editor (no agency). Output is slow but unmistakable.",
        "Every Atmosphere reel runs under 25 seconds, every Craft reel under 45 seconds, every Manifesto post is a single static cream card with bilingual text.",
        "A 'quiet weeks' rule: four weeks per year are pre-designated as publishing pauses. The brand goes silent on purpose during these. Silence is itself content."
      ],
      ar: [
        "مجلس محتوى شهري — المؤسس، قِوام العلامة، رئيس المحتوى، مستشار ثقافي رفيع — يُقرّ مزيج ركائز الشهر سلفاً.",
        "تُراجَع كل التعليقات أمام كتيب صوت العلامة (الفصلان ١٦ و٣٠) قبل الجدولة. توقيع شخصين على كل منشور.",
        "لا تُعاد مشاركة محتوى الأعضاء إلا بموافقة صريحة، مكتوبة، شخصياً. خصوصية الأعضاء هي الافتراض في محتوى العلامة.",
        "خط إنتاج ريلز بمونتاج سينمائي داخلي واحد (لا وكالة). المخرجات بطيئة لكن لا تُخطئها العين.",
        "كل ريل جو تحت ٢٥ ثانية، كل ريل حرفة تحت ٤٥ ثانية، كل بيان منشور كرت كريمي ثابت بنص ثنائي اللغة.",
        "قاعدة \"الأسابيع الهادئة\": أربعة أسابيع في السنة مُعَيَّنة سلفاً كفترات توقُّف نشر. تصمت العلامة عمداً فيها. الصمت ذاته محتوى."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Atmosphere reel still", ar: "لقطة من ريل الجو" },
        scene: {
          en: "A slow tracking shot through the booth at dusk, soft warm light catching cream stone, deep navy timber, a single porcelain cup mid-pour by an unseen hand. The pour is the entire reel.",
          ar: "لقطة تتبُّع بطيئة عبر المنصة عند الغسق، ضوء دافئ خفيف يلامس حجراً كريمياً، خشباً كحلياً عميقاً، فنجاناً خزفياً مفرداً يُسكَب فيه بيد غير ظاهرة. السكب هو الريل كاملاً."
        },
        mood: { en: "A single gesture, fully composed.", ar: "إيماءة واحدة، مُؤلَّفة بالكامل." }
      },
      {
        slot: { en: "Manifesto card", ar: "كرت البيان" },
        scene: {
          en: "A cream square with a single bilingual quote in editorial serif Arabic and English, framed by a thin champagne hairline. No imagery. No logo. The quote is the brand.",
          ar: "مربع كريمي بمقولة ثنائية اللغة واحدة بحرف تحريري عربي وإنجليزي، يُؤطِّرها خيط شامبانيا رفيع. لا صورة. لا شعار. المقولة هي العلامة."
        },
        mood: { en: "A line that earns a screenshot.", ar: "سطر يستحق لقطة شاشة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Treat the feed as a magazine, not a marketing channel", ar: "اعتبر الصفحة مجلة، لا قناة تسويق" },
        body: {
          en: "Run the social presence with editorial calendars, not campaign briefs. The brand's social is the magazine for its members. Magazines do not run promotions.",
          ar: "أدر الحضور الاجتماعي بتقاويم تحريرية، لا بمختصرات حملات. حضور العلامة الاجتماعي هو مجلة لأعضائها. والمجلات لا تنشر تخفيضات."
        }
      },
      {
        title: { en: "Reserve content for members only", ar: "احتفظ بمحتوى للأعضاء فقط" },
        body: {
          en: "Once a quarter, publish one piece in a private members' channel (a sealed PDF, an audio piece, or a private screening link) — never on the public feed. The asymmetry deepens the relationship.",
          ar: "مرة كل ربع، انشر قطعة في قناة أعضاء خاصة (PDF مختوم، مقطوعة صوتية، رابط عرض خاص) — لا على الصفحة العامة. عدم التماثل يُعمِّق العلاقة."
        }
      }
    ],
    manifesto: {
      en: "We do not publish to be followed. We publish to be remembered.",
      ar: "لا ننشر لنُتابَع. ننشر لنُذكَر."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "video-direction",
    number: "13",
    group: G,
    eyebrow: { en: "Chapter Thirteen · The White Gloves Experience", ar: "الفصل الثالث عشر · تجربة القفازات البيضاء" },
    title: { en: "Cinematic Video Direction", ar: "الإخراج السينمائي" },
    subtitle: {
      en: "Every frame is staged. Every cut is intentional. The brand's anchor film is a quiet cinematic essay, not an advertisement.",
      ar: "كل إطار مُعَدّ. كل قطع مقصود. فيلم العلامة المرساة مقالة سينمائية هادئة، لا إعلان."
    },
    lead: {
      en: "WOSOL's anchor film — internally titled 'The White Gloves Experience' — is a four-minute cinematic essay. There is no voiceover narrating the brand's offerings. There is no music score climbing to a CTA. There is the sound of cream linen unfolding, of Arabic coffee being poured, of a brass key tray being set down on walnut, of a custodian's white-gloved hand opening a deep navy door. The film is a sensory composition. The viewer leaves not with information, but with longing. Longing is the brand's most valuable response.",
      ar: "فيلم وصول المرساة — المُعنوَن داخلياً \"تجربة القفازات البيضاء\" — مقالة سينمائية مدتها أربع دقائق. لا تعليق صوتي يسرد عروض العلامة. لا موسيقى تتصاعد نحو نداء فعل. هناك صوت كتان كريمي يُفتح، قهوة عربية تُسكَب، صينية مفاتيح نحاسية توضَع على جوز، يد قِوام بقفاز أبيض تفتح باباً كحلياً عميقاً. الفيلم تأليف حسّي. يخرج المشاهد لا بمعلومة، بل بشوق. الشوق هو أثمن ردّ يمكن أن تكسبه العلامة."
    },
    whyItMatters: {
      en: "A great brand film is the most leveraged content asset in luxury. It is sent before meetings. Played at events. Embedded in the website. Carried in private WhatsApp threads. One disciplined film does more for a luxury brand than a year of social posts.",
      ar: "فيلم العلامة الجيد هو أعلى أصل محتوى نفوذاً في الفخامة. يُرسَل قبل الاجتماعات. يُعرَض في الفعاليات. يُضمَّن في الموقع. يُحمل في رسائل واتساب الخاصة. فيلم منضبط واحد يفعل للعلامة الفاخرة أكثر مما تفعله سنة من المنشورات."
        },
    pillars: [
      {
        title: { en: "Storyboard in Five Acts", ar: "السيناريو في خمسة فصول" },
        body: {
          en: "Act I — The City at Dawn (Riyadh waking in cream and navy light). Act II — The Threshold (the booth, the door, the silence). Act III — The Ritual (Arabic coffee poured by white-gloved hand). Act IV — The Custodian (walking, never speaking, never facing the camera). Act V — The Departure (a sealed envelope carried into the city). No spoken word.",
          ar: "الفصل الأول — المدينة عند الفجر (الرياض تستيقظ في ضوء كريمي وكحلي). الفصل الثاني — العتبة (المنصة، الباب، الصمت). الفصل الثالث — الطقس (قهوة عربية تُسكَب بيد بقفاز أبيض). الفصل الرابع — القِوام (يمشي، لا يتكلم، لا يواجه الكاميرا). الفصل الخامس — المغادرة (ظرف مختوم يُحمَل إلى المدينة). دون كلمة منطوقة."
        }
      },
      {
        title: { en: "Camera Discipline", ar: "انضباط الكاميرا" },
        body: {
          en: "Anamorphic 2.39:1 aspect ratio. Long, slow, dolly-led movement. No handheld. No drone overhead shots in the residence scenes. One drone moment, only one, for the city establishing shot.",
          ar: "نسبة عرض أنامورفيك ٢٫٣٩:١. حركة طويلة بطيئة بقيادة الدوللي. لا تصوير بالكتف. لا لقطات درون من فوق في مشاهد الإقامة. لحظة درون واحدة فقط، للقطة تأسيس المدينة."
        }
      },
      {
        title: { en: "Sound as Score", ar: "الصوت كمقطوعة" },
        body: {
          en: "No music. The score is the diegetic sound — coffee, fabric, footsteps, breath — recorded at studio quality on a Foley pass. The bespoke ambient track from Chapter 11 is layered underneath at extreme low volume.",
          ar: "لا موسيقى. المقطوعة هي الصوت الديجيتي — قهوة، قماش، خطوات، نَفَس — مُسجَّلة بجودة استوديو بمعالجة فولي. مقطوعة الأمبيانس المخصصة من الفصل ١١ مُطبَّقة تحتها بمستوى منخفض جداً."
        }
      },
      {
        title: { en: "Casting Discreetly", ar: "اختيار التمثيل بتحفُّظ" },
        body: {
          en: "No celebrities. No models. The custodians in the film are actual senior custodians (paid as actors), with one professional Saudi actor in a non-speaking role for the lead custodian. Authenticity over recognition.",
          ar: "لا مشاهير. لا عارضو أزياء. القِوامون في الفيلم هم قِوامون رفيعون حقيقيون (يُدفَع لهم كممثلين)، مع ممثل سعودي محترف واحد في دور القِوام الرئيسي بدون كلام. الأصالة قبل التعرُّف."
        }
      }
    ],
    operations: {
      en: [
        "Director selection: a Saudi or Saudi-resident commercial director with editorial pedigree (architecture films, fashion films), not a typical agency commercial director.",
        "Production budget anchored at four to six weeks of pre-production, three days of shoot, four weeks of post. Slow production is itself a luxury signal.",
        "Final cut authority is held by the founder personally. No client-side committee approval process.",
        "Distribution discipline: the film lives on the brand website's hero, in a single sealed Vimeo unlisted link for press, and on a private members' page. It does not run as paid advertising.",
        "An annual 'short' counterpart — a 60-second cutdown — produced in the same shoot, used for paid retargeting (Chapter 18), never as the primary asset.",
        "The film is re-cut every two years, never replaced. The same footage, recomposed."
      ],
      ar: [
        "اختيار المخرج: مخرج تجاري سعودي أو مقيم في السعودية ذو سجلّ تحريري (أفلام معمارية، أفلام أزياء)، لا مخرج إعلانات وكالة نمطي.",
        "ميزانية الإنتاج تستقر على أربعة إلى ستة أسابيع تحضير، ثلاثة أيام تصوير، أربعة أسابيع ما بعد إنتاج. الإنتاج البطيء بحد ذاته إشارة فخامة.",
        "صلاحية المونتاج النهائي للمؤسس شخصياً. لا عملية موافقة لجنة من جانب العميل.",
        "انضباط التوزيع: يعيش الفيلم في الهيرو على موقع العلامة، وفي رابط Vimeo مختوم غير مُدرَج للصحافة، وعلى صفحة أعضاء خاصة. لا يُشغَّل كإعلان مدفوع.",
        "نسخة قصيرة سنوية موازية — قطع لـ ٦٠ ثانية — تُنتَج في نفس التصوير، تُستخدَم لإعادة الاستهداف المدفوعة (الفصل ١٨)، لا بوصفها الأصل الأساسي.",
        "يُعاد مونتاج الفيلم كل سنتين، لا يُستبدَل. نفس المادة المصوَّرة، مُؤَلَّفة من جديد."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Storyboard Act I — Riyadh at dawn", ar: "السيناريو الفصل الأول — الرياض عند الفجر" },
        scene: {
          en: "A wide aerial of Riyadh at first light, Kingdom Tower softly visible but not centred, an oblique angle, sky in cream and champagne, no human elements visible.",
          ar: "لقطة جوية عريضة للرياض عند أول الضوء، برج المملكة ظاهر بهدوء لا متوسط، زاوية مائلة، السماء بألوان كريمية وشامبانية، لا عناصر بشرية ظاهرة."
        },
        mood: { en: "A city waking, watched by something quiet.", ar: "مدينة تستيقظ، يراقبها شيء هادئ." }
      },
      {
        slot: { en: "Storyboard Act III — the ritual", ar: "السيناريو الفصل الثالث — الطقس" },
        scene: {
          en: "Close, slow, side-lit: a white-gloved hand pouring Arabic coffee from a brass dallah into a porcelain cup on a walnut tray. The pour fills the entire frame, in slow motion.",
          ar: "قريبة، بطيئة، بإضاءة جانبية: يد بقفاز أبيض تسكب قهوة عربية من دلّة نحاس في فنجان خزفي على صينية جوز. السكب يملأ الإطار كاملاً، بحركة بطيئة."
        },
        mood: { en: "The brand in a single gesture.", ar: "العلامة في إيماءة واحدة." }
      },
      {
        slot: { en: "Storyboard Act V — the departure", ar: "السيناريو الفصل الخامس — المغادرة" },
        scene: {
          en: "A guest in tailored attire (back to camera) walking out of the booth into the mall's ambient light, a sealed cream envelope in hand. The booth fades behind in soft focus.",
          ar: "ضيف بزي مفصَّل (ظهره للكاميرا) يخرج من المنصة إلى إضاءة المركز المحيطة، ظرف كريمي مختوم في يده. تتلاشى المنصة خلفه بعمق غير حاد."
        },
        mood: { en: "The brand leaves with the guest.", ar: "العلامة تغادر مع الضيف." }
      }
    ],
    recommendations: [
      {
        title: { en: "Never re-shoot. Re-cut.", ar: "لا تُعِد التصوير. أعد المونتاج." },
        body: {
          en: "Re-shooting yields uneven brand consistency over time. Re-cutting the same footage every two years builds a coherent visual archive that becomes itself an asset.",
          ar: "إعادة التصوير تُنتج تفاوتاً في اتساق العلامة عبر الزمن. إعادة المونتاج لنفس المادة كل سنتين تبني أرشيفاً بصرياً متناسقاً يصير بحد ذاته أصلاً."
        }
      }
    ],
    manifesto: {
      en: "Our anchor film is not what we say. It is what we refuse to say.",
      ar: "فيلمنا المرساة ليس ما نقوله. هو ما نرفض قوله."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "drone-coverage",
    number: "14",
    group: G,
    eyebrow: { en: "Chapter Fourteen · The View From Above", ar: "الفصل الرابع عشر · المنظر من فوق" },
    title: { en: "Drone Coverage Strategy", ar: "استراتيجية تصوير الدرون" },
    subtitle: {
      en: "Drone footage is the brand's view of the city — used rarely, never as spectacle.",
      ar: "لقطات الدرون هي رؤية العلامة للمدينة — تُستخدَم بندرة، لا بوصفها استعراضاً."
    },
    lead: {
      en: "Drone footage has become a cliché of contemporary luxury film — every brand circles a tower, every brand sweeps a coastline. WOSOL's drone discipline is the opposite. Drone is reserved for two purposes only: one establishing aerial of Riyadh in the anchor film, and a small library of quiet, slow, low-altitude moves of the Kingdom Centre tower at dawn or dusk, used in a controlled way across the year. The brand's primary visual asset is the still, composed interior — not the dramatic exterior.",
      ar: "صار تصوير الدرون كليشيهاً في الفيلم الفاخر المعاصر — كل علامة تدور حول برج، كل علامة تجوب ساحلاً. انضباط الدرون في وصول معاكس. الدرون مُكرَّس لغرضين فقط: لقطة جوية تأسيس للرياض في الفيلم المرسى، ومكتبة صغيرة من حركات هادئة بطيئة منخفضة الارتفاع لبرج مركز المملكة عند الفجر أو الغسق، تُستخدَم بانضباط على مدار السنة. الأصل البصري الأساسي للعلامة هو الداخل الساكن المُؤلَّف — لا الخارج الدراماتيكي."
    },
    whyItMatters: {
      en: "Drone-led visual identities feel like real estate marketing. Interior-led visual identities feel like residences. The brand must choose the second, and the drone discipline is what enforces the choice.",
      ar: "الهويات البصرية بقيادة الدرون تبدو تسويقاً عقارياً. الهويات بقيادة الداخل تبدو إقامات. على العلامة أن تختار الثانية، وانضباط الدرون هو ما يفرض الاختيار."
        },
    pillars: [
      {
        title: { en: "Two Approved Moves", ar: "حركتان معتمدتان" },
        body: {
          en: "Move one: a slow ascending tilt-up alongside Kingdom Tower at first light, ending on the tower's apex against a soft cream sky. Move two: a slow lateral pan across the Riyadh skyline from a fixed distance, intentionally unflattering — the city quiet, not heroic.",
          ar: "الحركة الأولى: ميل صعودي بطيء بمحاذاة برج المملكة عند أول الضوء، تنتهي عند قمته في سماء كريمية ناعمة. الحركة الثانية: حركة عرضية بطيئة عبر أفق الرياض من مسافة ثابتة، غير مُجمِّلة عمداً — المدينة هادئة، لا بطولية."
        }
      },
      {
        title: { en: "No Crowds, No Cars, No Mall Roof", ar: "لا حشود، لا سيارات، لا سقف المركز" },
        body: {
          en: "Drone shots that show the mall's roof, the parking, the surrounding traffic, or the night neon are forbidden. The brand's exterior is the city itself, not the building.",
          ar: "لقطات الدرون التي تُظهر سقف المركز، المواقف، الحركة المحيطة، أو إضاءات الليل، محظورة. خارج العلامة هو المدينة ذاتها، لا المبنى."
        }
      },
      {
        title: { en: "Times of Day", ar: "أوقات اليوم" },
        body: {
          en: "Drone is shot only in the first 45 minutes of sunrise or the last 45 minutes of sunset. Midday drone is forbidden. Night drone is forbidden. The light defines the brand more than the angle.",
          ar: "يُصوَّر الدرون فقط في أول ٤٥ دقيقة من الشروق أو آخر ٤٥ دقيقة من الغروب. درون منتصف النهار محظور. درون الليل محظور. الضوء يُعرِّف العلامة أكثر من الزاوية."
        }
      },
      {
        title: { en: "Library, Not Live", ar: "مكتبة، لا حيّ" },
        body: {
          en: "All drone is shot in two annual production windows (March and October) into a controlled library. No 'we need a drone shot for this' last-minute production. The library is the budget.",
          ar: "يُصوَّر كل الدرون في نافذتي إنتاج سنويتين (مارس وأكتوبر) في مكتبة منضبطة. لا تصوير اللحظة الأخيرة بنية \"نحتاج لقطة درون لهذا\". المكتبة هي الميزانية."
        }
      }
    ],
    operations: {
      en: [
        "Licensed drone operator with all regulatory approvals secured annually with relevant Saudi authorities. No improvisation on permissions.",
        "Two production windows per year — late winter and early autumn — to capture the brand's preferred lighting conditions.",
        "All drone footage stored in a single named library, version-controlled, available to the in-house cinematic editor only.",
        "No drone footage is published raw. Every public use is re-cut, slowed, graded to the brand's cream-and-navy palette, and reviewed by the brand custodian.",
        "Member events are not drone-covered. Drone is forbidden at activations as a discretion-protection measure.",
        "An annual review by the founder decides whether to expand the library by one new move; no new move is added without that decision."
      ],
      ar: [
        "مشغّل درون مرخَّص بكل الموافقات التنظيمية تُؤمَّن سنوياً مع الجهات السعودية المعنية. لا ارتجال على الصلاحيات.",
        "نافذتا إنتاج في السنة — أواخر الشتاء وأوائل الخريف — لالتقاط ظروف الإضاءة المفضَّلة للعلامة.",
        "تُحفَظ كل مادة الدرون في مكتبة واحدة مُسمَّاة، بإدارة إصدار، متاحة للمونتاج السينمائي الداخلي فقط.",
        "لا تُنشر مادة درون خام. كل استخدام عام يُعاد مونتاجه، يُبطَّأ، يُدرَّج بألوان العلامة الكريمية والكحلية، ويُراجَع من قِوام العلامة.",
        "فعاليات الأعضاء لا تُغطَّى بالدرون. الدرون محظور في التفعيلات كإجراء حماية تحفُّظ.",
        "مراجعة سنوية من المؤسس تحدد ما إذا كانت المكتبة ستتوسع بحركة جديدة؛ لا تُضاف حركة جديدة دون هذا القرار."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The first-light tower", ar: "البرج عند أول الضوء" },
        scene: {
          en: "Kingdom Tower from a slow drone tilt-up at dawn, soft cream and champagne sky, no other buildings dominant in frame. The tower not centred — composed at the right third.",
          ar: "برج المملكة من ميل درون بطيء صعودي عند الفجر، سماء كريمية شامبانية ناعمة، لا مبانٍ أخرى مهيمنة في الإطار. البرج ليس في المنتصف — مُؤلَّف عند الثلث الأيمن."
        },
        mood: { en: "The city introducing the brand.", ar: "المدينة تُقدِّم العلامة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Resist all drone trends", ar: "قاوم كل اتجاهات الدرون" },
        body: {
          en: "Every six months a new drone visual style will sweep luxury content. WOSOL must hold the discipline of two moves only. Trend resistance is the brand's compounding advantage.",
          ar: "كل ستة أشهر سيجتاح أسلوب درون بصري جديد المحتوى الفاخر. على وصول التمسك بانضباط الحركتين فقط. مقاومة الاتجاهات هي ميزة العلامة المتراكمة."
        }
      }
    ],
    manifesto: {
      en: "Spectacle is everywhere. We are the brand that does not need it.",
      ar: "الاستعراض في كل مكان. نحن العلامة التي لا تحتاجه."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "pr-media",
    number: "37",
    group: G,
    eyebrow: { en: "Chapter Thirty-Seven · The Press", ar: "الفصل السابع والثلاثون · الإعلام" },
    title: { en: "PR & Media Strategy", ar: "استراتيجية العلاقات العامة والإعلام" },
    subtitle: {
      en: "We do not chase coverage. We choose it.",
      ar: "نحن لا نطارد التغطية. نحن نختارها."
    },
    lead: {
      en: "The brand's relationship with the press is governed by a single discipline: rarity. WOSOL appears in print and online sparingly, deliberately, and only in outlets that match the brand's tier. The aim is not maximum coverage. The aim is the right coverage in the right places, leaving the impression of a house that the press follows rather than pitches to. Anchor relationships are built with no more than six titles globally — two Saudi cultural and lifestyle outlets, two regional luxury titles, and two international titles of editorial weight.",
      ar: "علاقة العلامة بالصحافة تحكمها قاعدة واحدة: الندرة. تظهر وصول في المطبوعات والإنترنت بقلّة، بقصد، وفقط في وسائل تطابق طبقة العلامة. الهدف ليس التغطية القصوى. الهدف هو التغطية الصحيحة في الأماكن الصحيحة، مما يترك انطباع دار تتبعها الصحافة لا دار تطرح نفسها عليها. تُبنى علاقات مرساة مع لا أكثر من ست مطبوعات عالمياً — اثنتان سعوديتان ثقافيتان ولنمط الحياة، اثنتان إقليميتان للفخامة، اثنتان دوليتان ذات وزن تحريري."
    },
    whyItMatters: {
      en: "Press strategy is reputation strategy. Sloppy press placements deposit the brand at the wrong tier in the wrong reader's mind. One careless tabloid story can take a year of disciplined press to correct.",
      ar: "استراتيجية الإعلام هي استراتيجية السمعة. توضّعات إعلامية مهملة تودع العلامة في الطبقة الخطأ في ذهن القارئ الخطأ. قصة طبلوئيد واحدة مهملة قد تأخذ سنة من إعلام منضبط لتصحيحها."
        },
    pillars: [
      {
        title: { en: "Six Titles, Not Sixty", ar: "ست مطبوعات، لا ستون" },
        body: {
          en: "An anchor list of six titles — two Saudi (e.g., a Riyadh culture title, an Arabic-language luxury title), two regional (e.g., a Gulf luxury title, a Vogue Arabia equivalent), two international (e.g., a Wallpaper-tier title, a Monocle-tier title). All other inquiries are politely declined.",
          ar: "قائمة مرساة من ست مطبوعات — اثنتان سعوديتان (مثلاً مطبوعة ثقافية رياضية، مطبوعة فاخرة عربية)، اثنتان إقليميتان (مثلاً مطبوعة خليجية فاخرة، نظير فوغ العربية)، اثنتان دوليتان (مثلاً مطبوعة بمستوى وول بيبر، مطبوعة بمستوى مونوكل). كل الاستفسارات الأخرى تُرفَض بأدب."
        }
      },
      {
        title: { en: "Embargoed, Single-Outlet Stories", ar: "قصص حصرية مختومة" },
        body: {
          en: "Major stories — launch, WOSOL BLACK, founder profile, partnership announcements — are placed exclusively with one outlet at a time, under written embargo. The discipline trains the press to take WOSOL seriously.",
          ar: "القصص الكبرى — الإطلاق، وصول بلاك، البورتريه الشخصي للمؤسس، إعلانات الشراكات — تُوضَع حصرياً مع وسيلة واحدة في كل مرة، تحت حظر نشر مكتوب. الانضباط يُدرِّب الصحافة على أخذ وصول بجدية."
        }
      },
      {
        title: { en: "The Founder is the Voice", ar: "المؤسس هو الصوت" },
        body: {
          en: "The CEO is the brand's only on-record spokesperson. Communications team, marketing leads, and partnerships do not give interviews. One voice, controlled, recognisable.",
          ar: "الرئيس التنفيذي هو الناطق الرسمي الوحيد. فريق الاتصال، قادة التسويق، الشراكات لا يعطون مقابلات. صوت واحد، مُتحكَّم به، يُعرَف."
        }
      },
      {
        title: { en: "No Press Releases", ar: "لا بيانات صحفية" },
        body: {
          en: "WOSOL replaces 'press release' with 'editor's letter' — a short, considered communication from the founder to a named editor, never templated, never PR-style. Mass press releases break the tier.",
          ar: "تستبدل وصول \"البيان الصحفي\" بـ \"رسالة المحرر\" — تواصل قصير مدروس من المؤسس لمحرر مذكور بالاسم، لا يكون نموذجياً، لا بأسلوب علاقات عامة. البيانات الجماعية تكسر الطبقة."
        }
      }
    ],
    operations: {
      en: [
        "Anchor title relationships are personally cultivated by the founder, supported by a senior in-house PR director — not delegated to an external PR agency for primary relationship work.",
        "An annual press calendar with three to five major moments per year, never more. Quiet months are intentional.",
        "All press images are drawn from the brand's own controlled archive (Chapter 13). No 'event photographer' shots are released to press.",
        "Press requests outside the six-title list are answered with a polite written response acknowledging interest, declining the request, and offering nothing further. The discipline holds the tier.",
        "Founder media training is renewed twice a year with a senior journalist coach. The skill is not speaking; the skill is restraint.",
        "An emergency communications protocol exists for negative coverage. It is written, rehearsed, and never used unless required."
      ],
      ar: [
        "علاقات المطبوعات المرساة يُبنيها المؤسس شخصياً، يدعمه مدير علاقات عامة داخلي رفيع — لا تُفوَّض لوكالة علاقات عامة خارجية للعلاقة الأساسية.",
        "تقويم إعلامي سنوي بثلاث إلى خمس لحظات كبرى في السنة، لا أكثر. الأشهر الهادئة مقصودة.",
        "كل صور الإعلام مستلَّة من أرشيف العلامة المُتحكَّم به (الفصل ١٣). لا تُسلَّم لقطات \"مصوّر فعالية\" للصحافة.",
        "طلبات الإعلام خارج قائمة المطبوعات الست تُجاب بردّ مكتوب مهذب يُقرّ بالاهتمام، يرفض الطلب، ولا يقدّم شيئاً آخر. الانضباط يحفظ الطبقة.",
        "تدريب المؤسس الإعلامي يُجدَّد مرتين سنوياً مع مدرّب صحفي رفيع. المهارة ليست التحدث؛ المهارة هي ضبط النفس.",
        "بروتوكول اتصالات طوارئ موجود للتغطية السلبية. مكتوب، مُتدرَّب عليه، لا يُستخدَم إلا عند الحاجة."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The editor's letter plate", ar: "صورة رسالة المحرر" },
        scene: {
          en: "A single sheet of cream stock with a typed editorial letter, folded once, sealed with deep navy wax, on a polished walnut desk. A fountain pen rests across the corner.",
          ar: "ورقة كريمية مفردة برسالة تحريرية مكتوبة، مطوية مرة، مختومة بشمع كحلي عميق، على مكتب جوز مصقول. قلم حبر يستريح عند الزاوية."
        },
        mood: { en: "Press without a press release.", ar: "إعلام بدون بيان صحفي." }
      }
    ],
    recommendations: [
      {
        title: { en: "Refuse all 'top 100' lists", ar: "ارفض كل قوائم \"أهم ١٠٠\"" },
        body: {
          en: "Inclusion in industry 'top 100' lists feels like recognition but is reputation dilution. WOSOL declines these placements as standard.",
          ar: "الإدراج في قوائم \"أهم ١٠٠\" يبدو اعترافاً لكنه إذابة سمعة. ترفض وصول هذه التوضّعات كمعيار."
        }
      }
    ],
    manifesto: {
      en: "Press is not a megaphone. It is a quiet conversation with the right reader.",
      ar: "الإعلام ليس مكبّر صوت. هو حوار هادئ مع القارئ الصحيح."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "influencer-strategy",
    number: "38",
    group: G,
    eyebrow: { en: "Chapter Thirty-Eight · The Faces", ar: "الفصل الثامن والثلاثون · الوجوه" },
    title: { en: "Influencer & Elite Guest Strategy", ar: "استراتيجية المؤثرين والضيوف الرفيعين" },
    subtitle: {
      en: "WOSOL does not work with influencers. WOSOL hosts elite guests, who are sometimes also influencers.",
      ar: "وصول لا تعمل مع مؤثرين. وصول تستضيف ضيوفاً رفيعين، يكون بعضهم أحياناً مؤثرين."
    },
    lead: {
      en: "The conventional influencer model — pay, brief, post — is fatal at the luxury tier. Every visible 'sponsored' post reduces the brand's tier in the mind of the senior reader. WOSOL inverts the model: a small private list of high-credibility cultural figures, members of senior Saudi families, and editorial-tier creators are invited as guests, without contract, without brief, without payment. They may choose to post or not. They are extended the brand's hospitality because they themselves are part of the brand's positioning. This is patronage, not influencer marketing.",
      ar: "نموذج المؤثرين التقليدي — ادفع، أوصِ، انشر — مميت في الطبقة الفاخرة. كل منشور \"مموَّل\" ظاهر يُنزِل طبقة العلامة في ذهن القارئ الرفيع. تقلب وصول النموذج: قائمة خاصة صغيرة من شخصيات ثقافية عالية المصداقية، أبناء بيوت سعودية رفيعة، وصنّاع محتوى من طبقة تحريرية يُدعَون كضيوف، بلا عقد، بلا توجيه، بلا دفع. لهم أن ينشروا أو لا. يُمتدّ لهم كرم الضيافة لأنهم ذاتهم جزء من تموضع العلامة. هذه رعاية، لا تسويق مؤثرين."
    },
    whyItMatters: {
      en: "The faces that publicly associate with WOSOL define the perceived tier of the brand. One wrong association costs more than ten right ones build. Discipline here is non-negotiable.",
      ar: "الوجوه التي تظهر علناً مع وصول تُعرِّف طبقة العلامة المُدرَكة. ارتباط واحد خاطئ يكلف أكثر مما يبنيه عشرة ارتباطات صحيحة. الانضباط هنا غير قابل للتفاوض."
        },
    pillars: [
      {
        title: { en: "Cultural Figures Over Counters", ar: "شخصيات ثقافية لا أعداد متابعين" },
        body: {
          en: "Invitation criteria are based on cultural standing, family standing, or editorial credibility — never follower count. A poet, a senior gallery director, a private banker, a refined Saudi female fashion designer all rank above an influencer with three million followers.",
          ar: "معايير الدعوة قائمة على المقام الثقافي، المقام العائلي، أو المصداقية التحريرية — لا عدد المتابعين. شاعر، مدير صالة فنية رفيع، مصرفي خاص، مصممة أزياء سعودية رفيعة كلهم أعلى من مؤثر بثلاثة ملايين متابع."
        }
      },
      {
        title: { en: "No Contracts, No Briefs", ar: "لا عقود، لا توجيهات" },
        body: {
          en: "Guests are extended hospitality with no expectation of public output. If they choose to post, they post freely. WOSOL does not request, does not approve, does not gift in exchange for content.",
          ar: "يُمتدّ للضيوف كرم الضيافة دون توقع مخرَج علني. إذا اختاروا النشر، نشروا بحرية. وصول لا تطلب، لا تُقِرّ، لا تُهدي مقابل محتوى."
        }
      },
      {
        title: { en: "Patronage as Strategy", ar: "الرعاية بوصفها استراتيجية" },
        body: {
          en: "The brand discreetly supports Saudi cultural figures — sponsoring an artist's exhibition catalogue, a poet's chapbook, a designer's runway show — without expecting public mention. Patronage builds a different kind of credibility.",
          ar: "تدعم العلامة بهدوء شخصيات ثقافية سعودية — برعاية كتالوج معرض فنان، ديوان شاعر، عرض أزياء مصمم — دون توقع ذكر علني. الرعاية تبني مصداقية من نوع مختلف."
        }
      },
      {
        title: { en: "The 'Quiet Refusal' List", ar: "قائمة \"الرفض الهادئ\"" },
        body: {
          en: "An internal list of influencer profiles whose association with the brand would damage the tier. The list is maintained privately and applied without explanation when invitation lists are drawn up.",
          ar: "قائمة داخلية بملفات مؤثرين سيكون ارتباطهم بالعلامة مُضرّاً للطبقة. تُحفَظ القائمة سرّاً وتُطبَّق بدون تفسير عند إعداد قوائم الدعوات."
        }
      }
    ],
    operations: {
      en: [
        "A 'Cultural Council' of three senior cultural advisors meets twice a year to nominate names for the brand's invitation list. The names are kept confidential.",
        "Hosting invitations are sent on cream cards by hand-delivery, with no link to any social handles. The invitation does not acknowledge the recipient's public profile.",
        "Senior Saudi female cultural figures are deliberately prioritised in the invitation flow — both for cultural reasons and brand positioning reasons.",
        "Hospitality experienced by these guests is recorded only in the brand's private archive. Public reposts of any guest content are extremely rare and require explicit consent.",
        "A 'silent gift' to a patronage figure (cultural sponsorship, exhibition support) requires founder sign-off and is logged in a separate registry.",
        "Annual review of the invitation list and patronage portfolio. Names that no longer match the brand's tier are politely removed without notification."
      ],
      ar: [
        "\"مجلس ثقافي\" من ثلاثة مستشارين ثقافيين رفيعين يجتمع مرتين سنوياً لترشيح أسماء لقائمة دعوات العلامة. الأسماء سرية.",
        "تُرسَل دعوات الاستضافة على بطاقات كريمية بالتسليم اليدوي، دون أي رابط لأي حساب اجتماعي. الدعوة لا تُقِرّ بالملف العام للمتلقي.",
        "السعوديات الرفيعات الثقافيات يُولَين أولوية مقصودة في مسار الدعوة — لأسباب ثقافية وأسباب تموضع علامة معاً.",
        "تُسجَّل الضيافة التي يختبرها هؤلاء الضيوف فقط في أرشيف العلامة الخاص. إعادة نشر محتوى ضيف علناً نادرة جداً وتستلزم موافقة صريحة.",
        "\"الهدية الصامتة\" لشخصية مرعيّة (رعاية ثقافية، دعم معرض) تستلزم توقيع المؤسس وتُسجَّل في سجل منفصل.",
        "مراجعة سنوية لقائمة الدعوات ومحفظة الرعاية. الأسماء التي لم تعد تطابق طبقة العلامة تُحذف بأدب دون إشعار."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The hosted guest plate", ar: "صورة الضيف المستضاف" },
        scene: {
          en: "An empty conversation seat at the booth set with two porcelain cups, a folded cream linen napkin, and a small handwritten card placed on the side. No person. No name visible.",
          ar: "جلسة حوار فارغة في المنصة مُعدّة بفنجاني خزف، منديل كتان كريمي مطوي، وبطاقة صغيرة مكتوبة يدوياً موضوعة على الجانب. لا شخص. لا اسم ظاهر."
        },
        mood: { en: "The chair that earns its guest.", ar: "الكرسي الذي يستحق ضيفه." }
      }
    ],
    recommendations: [
      {
        title: { en: "Reject paid influencer marketing entirely", ar: "ارفض تسويق المؤثرين المدفوع بالكامل" },
        body: {
          en: "Even 'soft' paid campaigns leak through the brand's positioning. The brand is structurally better served by patronage and discreet hospitality than by any campaign budget spent on influencers.",
          ar: "حتى الحملات المدفوعة \"الناعمة\" تتسرّب عبر تموضع العلامة. تخدم العلامة بنيوياً الرعاية والضيافة التحفُّظية أكثر من أي ميزانية حملة تُنفَق على مؤثرين."
        }
      }
    ],
    manifesto: {
      en: "We do not buy faces. We host them.",
      ar: "نحن لا نشتري وجوهاً. نحن نستضيفها."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "social-media",
    number: "39",
    group: G,
    eyebrow: { en: "Chapter Thirty-Nine · The Channels", ar: "الفصل التاسع والثلاثون · القنوات" },
    title: { en: "Luxury Social Media Strategy", ar: "استراتيجية التواصل الاجتماعي الفاخر" },
    subtitle: {
      en: "Three channels, three roles, three audiences. No others.",
      ar: "ثلاث قنوات، ثلاثة أدوار، ثلاثة جماهير. لا غيرها."
    },
    lead: {
      en: "WOSOL maintains a deliberately narrow social presence: Instagram (the brand magazine), a private WhatsApp Broadcast (member channel), and a quiet, occasional X/LinkedIn presence for the founder (institutional voice). TikTok, Snapchat, YouTube long-form, and broader social platforms are decisively not used as primary channels. The brand resists the volume game and plays the rarity game. Every post, every story, every voice note is shaped by the brand's three pillars (Atmosphere, Craft, Manifesto) and reviewed against the brand voice guidelines.",
      ar: "تُحافظ وصول على حضور اجتماعي ضيّق بقصد: إنستغرام (مجلة العلامة)، قائمة واتساب خاصة (قناة أعضاء)، وحضور هادئ متقطّع للمؤسس على إكس/لينكدإن (الصوت المؤسسي). تيك توك، سناب، يوتيوب الطويل، ومنصات أوسع لا تُستخدَم بحسم كقنوات أساسية. ترفض العلامة لعبة الكميّة وتلعب لعبة الندرة. كل منشور، كل ستوري، كل ملاحظة صوتية تُشكَّل من ركائز العلامة الثلاث (الجو، الحرفة، البيان) وتُراجَع أمام إرشادات صوت العلامة."
    },
    whyItMatters: {
      en: "Social media at luxury is the only daily window into the brand for most observers. A loose feed today is read as a loose brand tomorrow. Discipline online is brand defence offline.",
      ar: "التواصل الاجتماعي في الفخامة هو النافذة اليومية الوحيدة على العلامة لأغلب المراقبين. صفحة فضفاضة اليوم تُقرأ كعلامة فضفاضة غداً. الانضباط على الإنترنت هو دفاع العلامة خارجه."
        },
    pillars: [
      {
        title: { en: "Instagram as Magazine", ar: "إنستغرام كمجلة" },
        body: {
          en: "Two grid posts per week. Stories used sparingly — no daily updates, no behind-the-scenes content, no operational footage. The grid is the brand's printed magazine, the stories are the rare letter.",
          ar: "منشوران في الشبكة أسبوعياً. الستوريز تُستخدَم بقلّة — لا تحديثات يومية، لا محتوى خلف الكواليس، لا لقطات تشغيلية. الشبكة هي مجلة العلامة المطبوعة، والستوريز هي الرسالة النادرة."
        }
      },
      {
        title: { en: "WhatsApp Broadcast for Members", ar: "قائمة واتساب للأعضاء" },
        body: {
          en: "A private members' broadcast — opt-in only — delivers one short composed message per month. Never sales. Never operational news. Often a single sentence and a single image. The privacy is the value.",
          ar: "قائمة واتساب خاصة للأعضاء — بالاشتراك فقط — تُسلِّم رسالة مُؤلَّفة قصيرة شهرياً. لا مبيعات. لا أخبار تشغيل. غالباً جملة واحدة وصورة واحدة. الخصوصية هي القيمة."
        }
      },
      {
        title: { en: "Founder Voice on LinkedIn", ar: "صوت المؤسس على لينكدإن" },
        body: {
          en: "A monthly considered post from the founder on luxury, hospitality, Saudi cultural development, Vision 2030 themes — never on WOSOL operationally. The voice is institutional and personal, never promotional.",
          ar: "منشور شهري مدروس من المؤسس عن الفخامة، الضيافة، التطور الثقافي السعودي، مواضيع رؤية ٢٠٣٠ — لا عن عمليات وصول. الصوت مؤسسي وشخصي، لا ترويجي."
        }
      },
      {
        title: { en: "Refused Platforms", ar: "منصات مرفوضة" },
        body: {
          en: "TikTok and Snapchat are formally not used. Their cultural register clashes with the brand's tier. The brand may run paid retargeting on TikTok (Chapter 19) but does not maintain an organic presence.",
          ar: "تيك توك وسناب لا تُستخدَمان رسمياً. طبقتهما الثقافية تتنازع مع طبقة العلامة. يمكن للعلامة أن تشغّل إعادة استهداف مدفوعة على تيك توك (الفصل ١٩) لكنها لا تُحافظ على حضور عضوي فيه."
        }
      }
    ],
    operations: {
      en: [
        "A monthly content calendar reviewed by the brand custodian. Two grid posts per week, no exceptions for events or urgency.",
        "Captions in Arabic and English, written by the head of content, reviewed by an Arabic linguistic consultant once a month.",
        "No comments are deleted unless they violate the brand's discretion standards (naming members, vulgarity). Comment moderation is light but consistent.",
        "Direct messages on Instagram are answered within 24 hours by a dedicated senior team member, never by an auto-responder. The tone is hospitable, not commercial.",
        "Founder LinkedIn posts are drafted by the founder personally, reviewed by the head of content, and reviewed by a senior cultural advisor before publication.",
        "Annual review of platform performance against members' qualitative feedback — not vanity metrics."
      ],
      ar: [
        "تقويم محتوى شهري يُراجَع من قِوام العلامة. منشوران في الشبكة أسبوعياً، لا استثناءات للفعاليات أو الاستعجال.",
        "التعليقات بالعربية والإنجليزية، يكتبها رئيس المحتوى، يُراجعها مستشار لغوي عربي مرّة شهرياً.",
        "لا تُحذف التعليقات إلا إذا انتهكت معايير تحفُّظ العلامة (ذكر أسماء الأعضاء، الفجاجة). إدارة التعليقات خفيفة لكنها مستمرة.",
        "الرسائل المباشرة على إنستغرام تُجاب خلال ٢٤ ساعة من عضو فريق رفيع متفرّغ، لا برد آلي. النبرة ضيافيّة، لا تجارية.",
        "منشورات لينكدإن للمؤسس يصوغها المؤسس شخصياً، يراجعها رئيس المحتوى، ويراجعها مستشار ثقافي رفيع قبل النشر.",
        "مراجعة سنوية لأداء المنصة وفق ملاحظات الأعضاء النوعية — لا المقاييس السطحية."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The grid plate", ar: "صورة الشبكة" },
        scene: {
          en: "A flat-lay of an Instagram grid view rendered on a phone screen on a walnut desk, the screen showing six cream-and-navy editorial posts in a coherent grid. The phone case is plain leather. No notifications visible.",
          ar: "تكوين علوي لمنظر شبكة إنستغرام على شاشة هاتف على مكتب جوز، الشاشة تعرض ستة منشورات تحريرية كريمية كحلية في شبكة متسقة. غطاء الهاتف جلد بسيط. لا إشعارات ظاهرة."
        },
        mood: { en: "An editorial product, not a feed.", ar: "منتج تحريري، لا صفحة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Resist TikTok virality temptation", ar: "قاوم إغراء الانتشار على تيك توك" },
        body: {
          en: "TikTok virality will be offered as a 'huge opportunity' annually. It is not. A viral TikTok costs WOSOL more brand equity than it earns. Decline politely.",
          ar: "سيُعرَض الانتشار على تيك توك بوصفه \"فرصة هائلة\" سنوياً. ليس كذلك. تيك توك فيرال يكلّف وصول رصيد علامة أكثر مما يكسبه. ارفض بأدب."
        }
      }
    ],
    manifesto: {
      en: "Our presence is narrow on purpose. Width is for brands without a tier.",
      ar: "حضورنا ضيق بقصد. السَعَة للعلامات التي بلا طبقة."
    }
  }
];
