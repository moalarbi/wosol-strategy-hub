import type { Strategy } from "../types";

const G = { en: "Funnel", ar: "القُمع" };

export const FUNNEL_CHAPTERS: Strategy[] = [
  // ──────────────────────────────────────────────────────────
  {
    slug: "qr-funnel",
    number: "17",
    group: G,
    eyebrow: { en: "Chapter Seventeen · The Threshold", ar: "الفصل السابع عشر · العتبة الرقمية" },
    title: { en: "QR Funnel Strategy", ar: "استراتيجية قُمع الـ QR" },
    subtitle: {
      en: "The QR is not a sign-up form. It is the entry to a private corridor.",
      ar: "رمز الـ QR ليس نموذج تسجيل. هو مدخل إلى ممر خاص."
    },
    lead: {
      en: "Conventional event QR codes lead to bloated landing pages with sales banners, social embeds, and aggressive forms. WOSOL inverts every assumption. The QR is small, hand-set on a folded cream card, presented only when the guest signals interest. It leads to a single quiet page — black on cream, no images, no logos, four fields — that reads like the first page of a sealed letter. The aim is not to maximise capture rate. The aim is to qualify, to set tone, and to begin a relationship in a register the guest will not have encountered at any other booth.",
      ar: "رموز الـ QR التقليدية في الفعاليات تقود لصفحات هبوط مكتظة بلافتات مبيعات، تضمينات اجتماعية، ونماذج عدوانية. تقلب وصول كل افتراض. الرمز صغير، موضوع يدوياً على بطاقة كريمية مطوية، يُقدَّم فقط حين يُشير الضيف باهتمام. يقود لصفحة هادئة واحدة — أسود على كريمي، لا صور، لا شعارات، أربعة حقول — تُقرأ كأول صفحة في رسالة مختومة. الهدف ليس تعظيم نسبة التقاط. الهدف التأهيل، تثبيت النبرة، بدء علاقة في طبقة لم يصادفها الضيف في أي منصة أخرى."
    },
    whyItMatters: {
      en: "First-touch tone determines everything that follows. A bloated sign-up flow erodes the brand's perceived tier in the only sixty seconds the guest is paying full attention.",
      ar: "نبرة اللمس الأول تحدد كل ما يليها. مسار تسجيل مكتظ يُذيب طبقة العلامة في الستين ثانية الوحيدة التي يكون فيها الضيف بانتباه كامل."
        },
    pillars: [
      {
        title: { en: "Four Fields, No Sixth", ar: "أربعة حقول، لا خامس" },
        body: {
          en: "Name. Mobile. Preferred language. A single optional 'how may we serve you' line. No marketing checkbox. No newsletter opt-in. No company. No address. The brevity is the brand.",
          ar: "الاسم. الجوال. اللغة المفضَّلة. سطر اختياري واحد \"بأي شيء يمكننا أن نخدمك\". لا مربع تسويق. لا اشتراك نشرة. لا شركة. لا عنوان. الإيجاز هو العلامة."
        }
      },
      {
        title: { en: "Cream Page, Editorial Type", ar: "صفحة كريمية، طباعة تحريرية" },
        body: {
          en: "The landing page is rendered in the brand's editorial typography on a cream backdrop. The submit button is replaced by 'In your trust' (in Arabic: 'في عهدتكم'). The page reads like a printed card.",
          ar: "تُعرَض صفحة الهبوط بطباعة العلامة التحريرية على خلفية كريمية. زر الإرسال يُستبدَل بـ \"في عهدتكم\" (بالإنجليزية: 'In your trust'). الصفحة تُقرأ كأنها بطاقة مطبوعة."
        }
      },
      {
        title: { en: "Pixel Quietly", ar: "البكسل بتحفُّظ" },
        body: {
          en: "Meta, TikTok, Snapchat, and Google Tag Manager pixels are loaded — but only after consent is given by submitting the form, and only with the data fields that are consented to. Compliance is non-negotiable. (See Chapter 19.)",
          ar: "بكسلات ميتا، تيك توك، سناب، وجوجل تاج مانجر مُحمَّلة — لكن فقط بعد إعطاء الموافقة بإرسال النموذج، وفقط بالحقول المُوافَق عليها. الالتزام غير قابل للتفاوض. (انظر الفصل ١٩.)"
        }
      },
      {
        title: { en: "Routing by Tier", ar: "التوجيه حسب الفئة" },
        body: {
          en: "The submission is routed instantly to the booth's senior custodian, with a tier hint generated from operational signals (visit time of day, guest profile filled by the custodian, mall location). Tier-routing turns a form into a relationship.",
          ar: "يُوجَّه الطلب فوراً للقِوام الرفيع في المنصة، مع تلميح فئة مُولَّد من إشارات تشغيلية (وقت الزيارة، ملف الضيف الذي يملؤه القِوام، موقع المركز). توجيه الفئات يحوّل النموذج إلى علاقة."
        }
      }
    ],
    operations: {
      en: [
        "The QR card is folded cream stock, presented only after the guest crosses the threshold and expresses interest. Never placed on the booth wall. Never offered to passers-by.",
        "QR codes are uniquely generated per shift, per custodian. The generation reveals which custodian gathered the lead and when.",
        "The landing page is dark navy on cream, with the brand wordmark at one tenth its largest scale. No imagery. No CTAs other than the single quiet 'In your trust' button.",
        "Submissions trigger an immediate, hand-written-feel SMS in the guest's preferred language: 'Your message reached us. A custodian will be in touch within twenty-four hours. — In your service, WOSOL.'",
        "Senior custodian follow-up is required within twenty-four hours of submission, by a phone call (not SMS), introducing themselves by name and offering one simple next step.",
        "Submissions that bounce or go unfollowed are escalated to the operations director in a weekly audit."
      ],
      ar: [
        "بطاقة الـ QR ورق كريمي مطوي، تُقدَّم فقط بعد عبور الضيف العتبة وإبدائه اهتماماً. لا تُوضَع على جدار المنصة. لا تُعرَض على المارّة.",
        "تُولَّد رموز الـ QR فريدة لكل مناوبة، لكل قِوام. التوليد يكشف أي قِوام جمع العميل المحتمل ومتى.",
        "صفحة الهبوط كحلية عميقة على كريمي، علامة العلامة المكتوبة بعُشر حجمها الأكبر. لا صور. لا نداءات فعل عدا زر \"في عهدتكم\" الهادئ.",
        "تُطلق الطلبات رسالة SMS فورية بإحساس مكتوب يدوياً باللغة المفضَّلة: \"وصلَتنا رسالتك. سيتواصل معك قِوام خلال أربع وعشرين ساعة. — في خدمتكم، وصول\".",
        "متابعة القِوام الرفيع مطلوبة خلال أربع وعشرين ساعة من الإرسال، بمكالمة هاتفية (لا SMS)، يُعرِّف نفسه باسمه ويعرض خطوة تالية واحدة بسيطة.",
        "الطلبات المرتدّة أو غير المُتابَعة تُصعَّد لمدير العمليات في تدقيق أسبوعي."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The QR card plate", ar: "صورة بطاقة الـ QR" },
        scene: {
          en: "A folded cream paper card on a walnut tray with a small printed QR code in deep navy ink at the centre, a single champagne hairline above it. No other text. Soft warm side light.",
          ar: "بطاقة ورق كريمي مطوية على صينية جوز برمز QR صغير مطبوع بحبر كحلي عميق في المركز، خيط شامبانيا مفرد فوقه. لا نص آخر. ضوء جانبي دافئ خفيف."
        },
        mood: { en: "An invitation, not a form.", ar: "دعوة، لا نموذج." }
      },
      {
        slot: { en: "The landing page render", ar: "عرض صفحة الهبوط" },
        scene: {
          en: "A laptop screen on a walnut desk showing the WOSOL landing page: cream backdrop, deep navy editorial type, four simple fields, the 'In your trust' button. No photography on the page.",
          ar: "شاشة لابتوب على مكتب جوز تعرض صفحة هبوط وصول: خلفية كريمية، حرف كحلي تحريري، أربعة حقول بسيطة، زر \"في عهدتكم\". لا صور في الصفحة."
        },
        mood: { en: "The digital corridor.", ar: "الممر الرقمي." }
      }
    ],
    recommendations: [
      {
        title: { en: "Refuse 'capture optimisation' culture", ar: "ارفض ثقافة \"تحسين الالتقاط\"" },
        body: {
          en: "Conversion-rate optimisation playbooks (urgency, scarcity, social proof badges) violate the brand. Trade three percent capture rate for a more qualified audience every single time.",
          ar: "أدلة تحسين معدل التحويل (الاستعجال، الندرة، شارات الإثبات الاجتماعي) تنتهك العلامة. استبدل ثلاث بالمئة من معدل الالتقاط بجمهور أكثر تأهيلاً في كل مرة."
        }
      }
    ],
    manifesto: {
      en: "The form is the first sentence the brand says in private to the guest.",
      ar: "النموذج هو الجملة الأولى التي تقولها العلامة بشكل خاص للضيف."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "retargeting",
    number: "18",
    group: G,
    eyebrow: { en: "Chapter Eighteen · The Return", ar: "الفصل الثامن عشر · العودة" },
    title: { en: "Retargeting Ecosystem", ar: "منظومة إعادة الاستهداف" },
    subtitle: {
      en: "We do not chase guests with ads. We let the brand stay quietly in their visual life.",
      ar: "نحن لا نُطارد الضيوف بالإعلانات. نحن نترك العلامة تحضر بهدوء في حياتهم البصرية."
        },
    lead: {
      en: "Retargeting in luxury is a delicate instrument. Done wrong, it makes a brand feel desperate. Done right, it produces the gentle 'I keep noticing them' sensation that is the heart of brand recall. WOSOL's retargeting playbook is narrow: cinematic Atmosphere reels from Chapter 13, framed as content rather than offers, served at low frequency to a tightly defined audience. There is never a discount, never an urgency badge, never a 'shop now' button. The objective is not to convert. The objective is to remind.",
      ar: "إعادة الاستهداف في الفخامة آلة دقيقة. إن أُسيء استخدامها، أشعرت العلامة بأنها يائسة. إن أُحسِنت، أنتجت إحساس \"دائماً ألاحظهم\" اللطيف الذي هو قلب تذكُّر العلامة. دفتر تشغيل إعادة الاستهداف في وصول ضيق: ريلز الجو السينمائية من الفصل ١٣، مُؤطَّرة كمحتوى لا كعروض، تُقدَّم بتردد منخفض لجمهور محدَّد بإحكام. لا تخفيض أبداً. لا شارة استعجال. لا زر \"اشترِ الآن\". الهدف ليس التحويل. الهدف التذكير."
    },
    whyItMatters: {
      en: "Retargeting is the largest paid surface the brand will buy. If the brand's tier slips here, it slips everywhere — because retargeting reaches the same future members the brand has spent so much to attract.",
      ar: "إعادة الاستهداف هي أكبر سطح مدفوع تشتريه العلامة. إن انزلقت طبقة العلامة هنا، انزلقت في كل مكان — لأن إعادة الاستهداف تصل إلى الأعضاء المستقبليين أنفسهم الذين أنفقت العلامة الكثير لجذبهم."
        },
    pillars: [
      {
        title: { en: "Three Audiences, Three Rhythms", ar: "ثلاثة جماهير، ثلاثة إيقاعات" },
        body: {
          en: "Visited the booth (audience A) sees one Atmosphere reel every 9 days for 90 days. Submitted the form (audience B) sees a deeper Manifesto reel every 14 days for 120 days. Member look-alike (audience C) sees Craft content monthly indefinitely. No more frequent.",
          ar: "زار المنصة (الجمهور A) يرى ريل جو واحداً كل ٩ أيام لـ ٩٠ يوماً. أرسل النموذج (الجمهور B) يرى ريل بيان أعمق كل ١٤ يوماً لـ ١٢٠ يوماً. الشبيه بالأعضاء (الجمهور C) يرى محتوى حرفة شهرياً بلا انقطاع. ليس أكثر من ذلك."
        }
      },
      {
        title: { en: "No Direct Response", ar: "لا استجابة مباشرة" },
        body: {
          en: "All retargeting creative is the brand's organic content — never a sales unit. The CTA, if present, is 'Read the chapter' linking back to the strategy hub.",
          ar: "كل إبداع إعادة الاستهداف هو المحتوى العضوي للعلامة — لا وحدة مبيعات أبداً. نداء الفعل، إن وُجد، هو \"اقرأ الفصل\" يربط بمركز الاستراتيجية."
        }
      },
      {
        title: { en: "Platform Discipline", ar: "انضباط المنصة" },
        body: {
          en: "Meta (Instagram primarily, Facebook lightly), YouTube pre-roll (15-second cuts only), and Google Display in premium publisher inventory. TikTok and Snapchat retargeting only for the Member look-alike audience and only with the 60-second cinematic edit.",
          ar: "ميتا (إنستغرام أساساً، فيسبوك بخفّة)، يوتيوب قبل التشغيل (قطع ١٥ ثانية فقط)، وعرض جوجل في مخزون ناشرين راقٍ. إعادة استهداف تيك توك وسناب فقط لجمهور الشبيه بالأعضاء وفقط بمونتاج سينمائي ٦٠ ثانية."
        }
      },
      {
        title: { en: "Frequency Cap as a Brand Standard", ar: "سقف التردد كمعيار علامة" },
        body: {
          en: "Never more than one impression per platform per day per user. Frequency exhaustion converts brand recall into brand resentment. The cap is a brand asset.",
          ar: "لا أكثر من ظهور واحد لكل منصة لكل مستخدم يومياً. إنهاك التردد يحوّل تذكُّر العلامة إلى استياء منها. السقف أصل علامة."
        }
      }
    ],
    operations: {
      en: [
        "All retargeting is managed in-house by a senior performance media director. No external agency runs paid media for the brand.",
        "Creative library refreshed once a month with one new edit from the Atmosphere library. No 'urgent' creative is produced.",
        "Audiences are rebuilt monthly to remove members and confirmed candidates — they should not see retargeting once converted. Internal database integration with the CRM is critical.",
        "Spend caps are absolute. The brand will not exceed an annual retargeting budget set at the start of the year, even at the expense of campaign performance.",
        "Quarterly review of brand sentiment captured in social listening and qualitative member feedback. Drift in retargeting tone is corrected immediately.",
        "Annual external creative audit by a senior luxury advertising consultant. If the creative looks like 'advertising', it is reworked."
      ],
      ar: [
        "تُدار كل إعادة الاستهداف داخلياً من مدير وسائط أداء رفيع. لا وكالة خارجية تدير الوسائط المدفوعة للعلامة.",
        "تُحدَّث مكتبة الإبداع مرة شهرياً بمونتاج جديد من مكتبة الجو. لا يُنتَج إبداع \"عاجل\".",
        "تُعاد بناء الجماهير شهرياً لإزالة الأعضاء والمرشحين المؤكّدين — يجب ألا يروا إعادة الاستهداف بعد التحويل. تكامل قاعدة البيانات الداخلية مع نظام إدارة العلاقات حاسم.",
        "أسقف الإنفاق مطلقة. لن تتجاوز العلامة ميزانية إعادة الاستهداف السنوية المُحدَّدة في بداية العام، حتى لو على حساب أداء الحملة.",
        "مراجعة فصلية لشعور العلامة المُلتقَط في الاستماع الاجتماعي وملاحظات الأعضاء النوعية. الانحراف في نبرة إعادة الاستهداف يُصحَّح فوراً.",
        "تدقيق إبداع خارجي سنوي من مستشار إعلانات فاخر رفيع. إذا بدا الإبداع كـ\"إعلان\"، يُعاد تشكيله."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Audience map plate", ar: "صورة خريطة الجمهور" },
        scene: {
          en: "A clean diagram drawn in deep navy ink on cream paper showing three concentric circles labelled A, B, C with thin champagne hairlines, no other detail. A folded ribbon marker rests across one corner.",
          ar: "مخطّط نظيف مرسوم بحبر كحلي عميق على ورق كريمي يُظهر ثلاث دوائر متركّزة مُعَنوَنة A، B، C بخيوط شامبانيا رفيعة، لا تفاصيل أخرى. خيط علامة مطوي يستريح عند زاوية."
        },
        mood: { en: "Strategy on paper.", ar: "الاستراتيجية على الورق." }
      }
    ],
    recommendations: [
      {
        title: { en: "Sunset retargeting after 120 days", ar: "أوقف إعادة الاستهداف بعد ١٢٠ يوماً" },
        body: {
          en: "Beyond 120 days without engagement, the user is removed from active audiences. Continuing past this point feels stalking, not service.",
          ar: "بعد ١٢٠ يوماً بدون تفاعل، يُزال المستخدم من الجماهير النشطة. الاستمرار بعد ذلك يبدو ملاحقة، لا خدمة."
        }
      }
    ],
    manifesto: {
      en: "We do not return to the guest. We stay quietly in their air.",
      ar: "نحن لا نعود إلى الضيف. نبقى بهدوء في هوائه."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "pixel-strategy",
    number: "19",
    group: G,
    eyebrow: { en: "Chapter Nineteen · The Mark", ar: "الفصل التاسع عشر · العلامة الرقمية" },
    title: { en: "Pixel Strategy", ar: "استراتيجية البكسل" },
    subtitle: {
      en: "Pixels are loaded with consent, used with discretion, and audited with discipline.",
      ar: "تُحمَّل البكسلات بموافقة، تُستخدَم بتحفُّظ، وتُدقَّق بانضباط."
    },
    lead: {
      en: "The brand's pixel architecture is the technical layer that makes Chapters 17 and 18 possible. It must be both rigorously compliant and quietly powerful. WOSOL's pixel stack uses Meta, TikTok, Snapchat, and Google Tag Manager (GTM) — but each is loaded server-side via GTM after consent, with strictly limited event mapping. The brand respects two principles equally: data laws (Saudi PDPL, GDPR equivalence) and the brand's own discretion code. Both reach the same conclusion: collect less, store less, segment more carefully.",
      ar: "هندسة البكسل للعلامة هي الطبقة التقنية التي تُمكِّن الفصلين ١٧ و١٨. يجب أن تكون مُلتزِمة بصرامة وقوية بهدوء. حزمة بكسلات وصول تستخدم ميتا، تيك توك، سناب، وجوجل تاج مانجر (GTM) — لكن كل واحد يُحمَّل من جانب الخادم عبر GTM بعد الموافقة، بتخطيط أحداث محدود بصرامة. تحترم العلامة مبدأين بالتساوي: قوانين البيانات (نظام حماية البيانات السعودي PDPL، ما يعادل GDPR) وكود تحفُّظ العلامة. كلاهما يصل لنفس النتيجة: جمعِ أقل، تخزينِ أقل، تقسيمِ أدق."
    },
    whyItMatters: {
      en: "Pixel architecture is invisible to guests but visible to regulators, journalists, and ultimately the brand's reputation. A data scandal at this tier of brand is unrecoverable.",
      ar: "هندسة البكسل خفيّة عن الضيوف لكنها ظاهرة للمنظِّمين، الصحفيين، وفي النهاية سمعة العلامة. فضيحة بيانات في هذه الطبقة من العلامة لا يُتعافى منها."
        },
    pillars: [
      {
        title: { en: "Server-Side Via GTM", ar: "من جانب الخادم عبر GTM" },
        body: {
          en: "All pixels (Meta, TikTok, Snapchat, Google) are fired server-side from Google Tag Manager. Client-side pixels are forbidden. The architecture is harder to set up and far harder to compromise.",
          ar: "كل البكسلات (ميتا، تيك توك، سناب، جوجل) تُطلَق من جانب الخادم من Google Tag Manager. البكسلات من جانب العميل محظورة. الهندسة أصعب في الإعداد وأصعب بكثير في الاختراق."
        }
      },
      {
        title: { en: "Explicit Consent Layer", ar: "طبقة موافقة صريحة" },
        body: {
          en: "A discreet consent panel appears only on form submission, never on page load. The wording is editorial, in Arabic and English, with one accept and one decline option. Default decline.",
          ar: "لوحة موافقة تحفُّظية تظهر فقط عند إرسال النموذج، لا عند تحميل الصفحة. الصياغة تحريرية، بالعربية والإنجليزية، بخيار قبول واحد وخيار رفض واحد. الافتراض رفض."
        }
      },
      {
        title: { en: "Event Discipline", ar: "انضباط الأحداث" },
        body: {
          en: "Only five events are tracked: PageView, ChapterView, FormStart, FormSubmit, MemberCandidate. No micro-events, no scroll depth, no rage clicks. The fewer events, the cleaner the audience signal.",
          ar: "تُتتبَّع خمسة أحداث فقط: عرض صفحة، عرض فصل، بدء نموذج، إرسال نموذج، مرشّح عضوية. لا أحداث صغيرة، لا عمق تمرير، لا نقرات غضب. الأقل من الأحداث يُعطي إشارة جمهور أنظف."
        }
      },
      {
        title: { en: "Data Retention Cap", ar: "سقف الاحتفاظ بالبيانات" },
        body: {
          en: "User data on advertising platforms is set to a 180-day retention maximum. Internal CRM retains relationship data indefinitely, but advertising IDs do not.",
          ar: "بيانات المستخدم على منصات الإعلان مُعَيَّنة بسقف احتفاظ ١٨٠ يوماً. نظام إدارة العلاقات الداخلي يحتفظ ببيانات العلاقة بلا انقطاع، لكن معرّفات الإعلان لا."
        }
      }
    ],
    operations: {
      en: [
        "A senior data engineer (or contractor) is responsible for the pixel stack. The role is brand-critical and reports to the operations director.",
        "Annual external audit of the data architecture by a Saudi-licensed PDPL consultancy. Findings reviewed by the founders.",
        "All pixel changes go through a written change-control log. No 'quick edits' to production tags.",
        "A 'pixel kill-switch' exists at GTM level — pixels can be fully disabled within five minutes if a brand or compliance issue arises.",
        "The brand publishes a short, editorial privacy notice — bilingual, on the same cream page as the form — that uses no legalese, only a clear explanation in plain language.",
        "Member-tier guests are removed from all advertising platform audiences upon membership confirmation. They never see retargeting."
      ],
      ar: [
        "مهندس بيانات رفيع (أو متعاقد) مسؤول عن حزمة البكسلات. الدور حرج للعلامة ويرفع لمدير العمليات.",
        "تدقيق خارجي سنوي لهندسة البيانات من استشارية مرخَّصة سعودياً لنظام حماية البيانات. تُراجَع النتائج من المؤسسين.",
        "كل تغيير في البكسلات يمرّ بسجل تحكُّم تغيير مكتوب. لا \"تعديلات سريعة\" على وسوم الإنتاج.",
        "\"مفتاح إيقاف البكسل\" موجود على مستوى GTM — يمكن تعطيل البكسلات كلياً خلال خمس دقائق إذا ظهرت مشكلة علامة أو التزام.",
        "تنشر العلامة إشعار خصوصية تحريري قصير — ثنائي اللغة، على نفس الصفحة الكريمية مع النموذج — يستخدم لا لغة قانونية، فقط شرحاً بلغة واضحة.",
        "ضيوف فئة الأعضاء يُزالون من كل جماهير منصات الإعلان عند تأكيد العضوية. لا يرون إعادة الاستهداف."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The architecture plate", ar: "صورة الهندسة" },
        scene: {
          en: "A clean diagram on cream paper showing GTM at the centre, with thin lines leading to four platform marks (Meta, TikTok, Snapchat, Google) drawn in deep navy. A folded ribbon marker rests at one corner.",
          ar: "مخطّط نظيف على ورق كريمي يُظهر GTM في المركز، بخطوط رفيعة تقود لأربع علامات منصة (ميتا، تيك توك، سناب، جوجل) مرسومة بكحلي عميق. خيط علامة مطوي يستريح عند زاوية."
        },
        mood: { en: "Compliance as architecture.", ar: "الالتزام بوصفه هندسة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Publish a 'House Data Code'", ar: "انشر \"دستور بيانات الدار\"" },
        body: {
          en: "A short, editorial document — printed for members and key partners — that articulates how the brand handles data. Plain language, no legalese. It becomes a trust asset.",
          ar: "وثيقة تحريرية قصيرة — مطبوعة للأعضاء والشركاء الرئيسيين — تُجلِّي كيف تتعامل العلامة مع البيانات. لغة واضحة، لا قانونية. تصير أصل ثقة."
        }
      }
    ],
    manifesto: {
      en: "We collect less than we are permitted to. We store less than we collect. We never trade what we keep.",
      ar: "نجمع أقل مما يُسمَح لنا. نحفظ أقل مما نجمع. ولا نتاجر أبداً بما نُبقي."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "lead-collection",
    number: "20",
    group: G,
    eyebrow: { en: "Chapter Twenty · The Custody", ar: "الفصل العشرون · العهدة" },
    title: { en: "Lead Collection System", ar: "نظام جمع العملاء" },
    subtitle: {
      en: "Every lead is a name we are now responsible for. The system is built around responsibility, not capture.",
      ar: "كل عميل محتمل اسمٌ صرنا مسؤولين عنه. النظام مبني حول المسؤولية، لا الالتقاط."
    },
    lead: {
      en: "Most lead systems are designed to capture volume. WOSOL's is designed to honour relationships. The CRM is a private archive of every person who has crossed the brand's threshold. The fields, the tagging, the routing, and the language of follow-up are calibrated to make the lead feel held, not processed. The brand uses a single integrated CRM (HubSpot Enterprise or equivalent) with a custom-developed front layer that hides operational details and surfaces the relationship narrative for every contact.",
      ar: "أغلب أنظمة العملاء مُصمَّمة لالتقاط الحجم. أما نظام وصول فمُصمَّم لاحترام العلاقات. نظام إدارة العلاقات هو أرشيف خاص لكل شخص عبر عتبة العلامة. الحقول، التوسيم، التوجيه، ولغة المتابعة معاير ليُحَسّ العميل بأنه مُحتَضَن لا مُعالَج. تستخدم العلامة نظاماً متكاملاً واحداً (HubSpot Enterprise أو ما يكافئه) بطبقة أمامية مُخصَّصة تُخفي التفاصيل التشغيلية وتُظهر سردية العلاقة لكل جهة اتصال."
    },
    whyItMatters: {
      en: "A great CRM is the brand's institutional memory. Without it, custodians lose context across shifts, members lose continuity across years, and the brand's promise of 'we remember' becomes hollow.",
      ar: "نظام إدارة علاقات جيد هو ذاكرة العلامة المؤسسية. بدونه، يفقد القِوامون السياق عبر المناوبات، ويفقد الأعضاء الاستمرارية عبر السنوات، ووعد العلامة بـ \"نحن نتذكر\" يصير أجوف."
        },
    pillars: [
      {
        title: { en: "The Relationship View", ar: "منظر العلاقة" },
        body: {
          en: "The CRM front layer for each contact opens with a 'relationship summary': name, preferred language, last interaction, last note from the senior custodian, and three recalled details. Pricing and operational data are accessible but secondary.",
          ar: "تفتح الطبقة الأمامية للنظام لكل جهة اتصال بـ \"ملخص علاقة\": الاسم، اللغة المفضَّلة، آخر تفاعل، آخر ملاحظة من القِوام الرفيع، وثلاث تفاصيل مُسترجَعة. التسعير والبيانات التشغيلية متاحة لكنها ثانوية."
        }
      },
      {
        title: { en: "Tagging Discipline", ar: "انضباط الوسوم" },
        body: {
          en: "Tags are limited to six categories: Tier, Territory of Life, Family Context, Cultural Notes, Communication Preferences, Discretion Flags. No marketing-funnel tags. The tags reflect the brand's mind, not the team's pipeline.",
          ar: "الوسوم محدودة بستة تصنيفات: الفئة، إقليم الحياة، السياق العائلي، ملاحظات ثقافية، تفضيلات تواصل، رايات تحفُّظ. لا وسوم قُمع تسويق. الوسوم تعكس ذهن العلامة، لا خط أنابيب الفريق."
        }
      },
      {
        title: { en: "Routing by Stage", ar: "التوجيه حسب المرحلة" },
        body: {
          en: "Leads at journey Stages 1–3 (Chapter 7) are owned by the senior on duty. Stage 4 transitions to a Senior Custodian. Stage 5 transitions to the Head of House. Ownership transitions are personal, written, and acknowledged by the guest.",
          ar: "العملاء في المراحل ١-٣ (الفصل ٧) هم بمسؤولية الرفيع في المناوبة. المرحلة الرابعة تنتقل لقِوام رفيع. المرحلة الخامسة تنتقل لرئيس الدار. تحويلات المسؤولية شخصية، مكتوبة، يُقرّها الضيف."
        }
      },
      {
        title: { en: "Discretion Flags", ar: "رايات التحفُّظ" },
        body: {
          en: "Specific contacts carry a discretion flag — never in CC, never mentioned by name in group threads, communications routed through one named custodian only. The flag is set by the founder and not removed without founder approval.",
          ar: "جهات اتصال محددة تحمل راية تحفُّظ — لا تُذكَر في نسخ، لا يُذكَر اسمها في مجموعات، التواصل يُوجَّه عبر قِوام واحد مذكور بالاسم. الراية تُعَيَّن من المؤسس ولا تُحذَف إلا بموافقته."
        }
      }
    ],
    operations: {
      en: [
        "Single source of truth: HubSpot Enterprise (or Salesforce equivalent) is the brand's only CRM. No spreadsheets. No personal contact lists. No team-shared Notes apps.",
        "Every contact entry is reviewed within forty-eight hours of creation by the operations director, who can correct, tag, or flag.",
        "Senior custodians' personal observation journals (Chapter 9) are reconciled into the CRM weekly. The journals remain private; only sanitised entries reach the CRM.",
        "Two-factor authentication, role-based access, and quarterly access audit. No one outside the brand sees the database, ever.",
        "An exit protocol: when any team member leaves, their CRM access is revoked within four hours, with a formal acknowledgment letter from the founder.",
        "A 'memory refresh' ritual: every member-tier contact's record is reviewed by the senior custodian and updated quarterly, even if no recent interaction."
      ],
      ar: [
        "مصدر حقيقة واحد: HubSpot Enterprise (أو ما يكافئ Salesforce) هو النظام الوحيد للعلامة. لا جداول. لا قوائم اتصال شخصية. لا تطبيقات ملاحظات مشتركة.",
        "كل إدخال جهة اتصال يُراجَع خلال ثماني وأربعين ساعة من إنشائه من مدير العمليات، الذي يستطيع التصحيح، التوسيم، أو رفع راية.",
        "تُوفَّق دفاتر ملاحظات القِوامين الرفيعين الشخصية (الفصل ٩) مع النظام أسبوعياً. تظل الدفاتر خاصة؛ فقط الإدخالات المُجَهَّزة تصل للنظام.",
        "تحقق ثنائي العامل، صلاحيات على أساس الدور، وتدقيق صلاحيات ربع سنوي. لا يرى أحد من خارج العلامة قاعدة البيانات، أبداً.",
        "بروتوكول خروج: عند مغادرة أي عضو فريق، تُلغى صلاحياته على النظام خلال أربع ساعات، برسالة إقرار رسمية من المؤسس.",
        "طقس \"تحديث الذاكرة\": سجل كل جهة اتصال من فئة الأعضاء يُراجَع من القِوام الرفيع ويُحدَّث ربع سنوياً، حتى لو لم يكن هناك تفاعل حديث."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The relationship view plate", ar: "صورة منظر العلاقة" },
        scene: {
          en: "A laptop screen on a walnut desk showing a custom CRM 'relationship summary' page: editorial type on cream, deep navy section dividers, no charts, no funnels visible.",
          ar: "شاشة لابتوب على مكتب جوز تعرض صفحة \"ملخص علاقة\" لنظام مخصص: حرف تحريري على كريمي، فواصل أقسام كحلية عميقة، لا رسوم بيانية، لا قُمَع ظاهرة."
        },
        mood: { en: "A database that reads like a letter.", ar: "قاعدة بيانات تُقرأ كرسالة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Build a custom CRM front layer", ar: "ابنِ طبقة أمامية مخصصة للنظام" },
        body: {
          en: "Out-of-the-box CRM UIs are sales-funnel UIs. A small custom front layer (a few weeks of development) communicates to the team that they manage relationships, not pipelines.",
          ar: "واجهات الأنظمة الجاهزة هي واجهات قُمَع مبيعات. طبقة أمامية مخصصة صغيرة (بضعة أسابيع تطوير) تقول للفريق إنهم يديرون علاقات، لا خطوط أنابيب."
        }
      }
    ],
    manifesto: {
      en: "We do not capture leads. We accept names into our custody.",
      ar: "نحن لا نلتقط عملاء. نحن نقبل أسماء في عهدتنا."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "hnwi-audience",
    number: "24",
    group: G,
    eyebrow: { en: "Chapter Twenty-Four · The Right Reader", ar: "الفصل الرابع والعشرون · القارئ الصحيح" },
    title: { en: "HNWI Audience Strategy", ar: "استراتيجية جمهور أصحاب الثروات العالية" },
    subtitle: {
      en: "We do not target wealth. We position next to it and let it find us.",
      ar: "نحن لا نستهدف الثروة. نحن نتموضع إلى جوارها ونتركها تجدنا."
    },
    lead: {
      en: "Direct paid targeting of HNWI is structurally weak — interest, behaviour, and demographic targeting on advertising platforms is far too coarse to reliably reach senior wealth. WOSOL's audience strategy is composed of two layers: a 'lookalike from members' digital audience (precision-built from confirmed members), and a much larger 'cultural adjacency' offline audience (built through patronage, partnerships, member events, and editorial press placement). The first reaches scale at low cost; the second reaches the right scale at the right places.",
      ar: "الاستهداف المدفوع المباشر لأصحاب الثروات العالية ضعيف بنيوياً — استهدافات الاهتمام، السلوك، والديموغرافيا على منصات الإعلان أخشن من أن تصل بثبات لرفاع الثروة. استراتيجية جمهور وصول مكوّنة من طبقتين: جمهور رقمي \"شبيه بالأعضاء\" (مبني بدقة من أعضاء مؤكدين)، وجمهور خارج الإنترنت أكبر بكثير من \"الجوار الثقافي\" (مبني عبر الرعاية، الشراكات، فعاليات الأعضاء، وتوضّعات الإعلام التحريرية). الأول يصل لنطاق بتكلفة منخفضة؛ الثاني يصل للنطاق الصحيح في الأماكن الصحيحة."
    },
    whyItMatters: {
      en: "Audience strategy is the largest hidden lever in a luxury brand. Direct targeting wastes money. Adjacency targeting builds the right reputation in the right rooms at the right time.",
      ar: "استراتيجية الجمهور هي أكبر رافعة خفيّة في علامة فاخرة. الاستهداف المباشر يُهدر المال. استهداف الجوار يبني السمعة الصحيحة في الغرف الصحيحة في الوقت الصحيح."
        },
    pillars: [
      {
        title: { en: "Lookalike from Members", ar: "شبيه من الأعضاء" },
        body: {
          en: "Once 100 members are confirmed, a Meta Lookalike audience and Google Customer Match audience are built from the member list. These audiences are quiet, qualified, and remarkably accurate. Refreshed quarterly.",
          ar: "بعد تأكيد ١٠٠ عضو، يُبنى جمهور Meta Lookalike وجمهور Google Customer Match من قائمة الأعضاء. هذه الجماهير هادئة، مؤهَّلة، ودقيقة بشكل لافت. تُحدَّث ربع سنوياً."
        }
      },
      {
        title: { en: "Cultural Adjacency", ar: "الجوار الثقافي" },
        body: {
          en: "Partner with the spaces that HNWI already occupy in Riyadh and Jeddah: Diriyah hospitality, FII conferences, private galleries, senior school events, Saudi Cup hospitality, members-only clubs. Presence in adjacency is more powerful than ad spend.",
          ar: "اشترك مع الأماكن التي يحضرها أصحاب الثروات العالية فعلاً في الرياض وجدة: ضيافة الدرعية، مؤتمرات مبادرة مستقبل الاستثمار، الصالات الخاصة، فعاليات المدارس الراقية، ضيافة كأس السعودية، نوادي الأعضاء فقط. الحضور في الجوار أقوى من إنفاق الإعلانات."
        }
      },
      {
        title: { en: "Editorial Placement", ar: "التوضّع التحريري" },
        body: {
          en: "Anchor titles (Chapter 37) reach HNWI in ways advertising cannot. A two-page editorial feature in the right title outperforms a six-month paid campaign in audience quality.",
          ar: "المطبوعات المرساة (الفصل ٣٧) تصل لأصحاب الثروات العالية بطرق لا يستطيعها الإعلان. مقال تحريري من صفحتين في المطبوعة الصحيحة يتفوق على حملة مدفوعة من ستة أشهر في جودة الجمهور."
        }
      },
      {
        title: { en: "Refusal of Mass Tactics", ar: "رفض التكتيكات الجماهيرية" },
        body: {
          en: "WOSOL formally rejects mass-market HNWI tactics: rented mailing lists, paid email blasts, generic luxury lifestyle databases, 'high net worth interest' targeting on social. Each of these damages the brand more than it helps.",
          ar: "ترفض وصول رسمياً التكتيكات الجماهيرية لأصحاب الثروات العالية: قوائم بريدية مُؤجَّرة، حملات إيميل مدفوعة، قواعد بيانات لنمط حياة فاخر عامة، استهداف \"اهتمام ذوي الثروات العالية\" الاجتماعي. كل واحدة منها تُضرّ بالعلامة أكثر مما تنفعها."
        }
      }
    ],
    operations: {
      en: [
        "An annual 'audience map' compiled by the head of growth showing where Saudi HNWI cluster (events, venues, publications, schools, clubs) and the brand's planned points of presence for each.",
        "Lookalike audiences seeded quarterly from a clean member list, with strict exclusions to prevent overlap with already-converted candidates.",
        "Editorial placement and adjacency partnerships are tracked qualitatively (member feedback, referral attribution) not by impressions.",
        "Any data partnership that would expose member identities is refused, regardless of commercial value.",
        "Senior leadership commits to attending three cultural-adjacency events per quarter, personally — presence is the strategy.",
        "Annual review of where the last 100 members heard about WOSOL. The findings guide the next year's audience investment."
      ],
      ar: [
        "\"خريطة جمهور\" سنوية يُعدّها رئيس النمو تُظهر أين يتجمع أصحاب الثروات العالية السعوديون (فعاليات، أماكن، مطبوعات، مدارس، نوادٍ) ونقاط حضور العلامة المخطّط لها لكل منها.",
        "جماهير Lookalike مُؤسَّسة ربع سنوياً من قائمة أعضاء نظيفة، باستثناءات صارمة لمنع تداخل مع مرشحين مُحوَّلين سلفاً.",
        "التوضّع التحريري وشراكات الجوار تُتتبَّع نوعياً (ملاحظات الأعضاء، إسناد الإحالة) لا بالظهور.",
        "أي شراكة بيانات قد تكشف هويات الأعضاء تُرفَض، بصرف النظر عن قيمتها التجارية.",
        "تلتزم القيادة العليا بحضور ثلاث فعاليات جوار ثقافي ربع سنوياً، شخصياً — الحضور هو الاستراتيجية.",
        "مراجعة سنوية لمن أين سمع آخر ١٠٠ عضو عن وصول. تُوجِّه النتائج استثمار الجمهور للسنة التالية."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The audience map plate", ar: "صورة خريطة الجمهور" },
        scene: {
          en: "A printed cream map of Riyadh on a walnut surface with several small champagne brass pins placed at private venue locations — no labels, no names. A folded ribbon marker rests across one corner.",
          ar: "خريطة كريمية مطبوعة للرياض على سطح جوز بعدّة دبابيس شامبانية نحاسية صغيرة موضوعة عند مواقع أماكن خاصة — لا تسميات، لا أسماء. خيط علامة مطوي يستريح عند زاوية."
        },
        mood: { en: "The right rooms, marked.", ar: "الغرف الصحيحة، مُعَلَّمة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Buy fewer ads, attend more rooms", ar: "اشترِ إعلانات أقل، احضر غرفاً أكثر" },
        body: {
          en: "Cut paid spend by 30% in year one and reinvest in adjacency partnerships, patronage, and editorial placement. The returns are slower but compound permanently.",
          ar: "اقطع الإنفاق المدفوع بنسبة ٣٠٪ في السنة الأولى وأعد الاستثمار في شراكات الجوار، الرعاية، التوضّع التحريري. العوائد أبطأ لكنها تتراكم بشكل دائم."
        }
      }
    ],
    manifesto: {
      en: "We do not chase the wealthy. We earn the right to sit beside them.",
      ar: "نحن لا نطارد الأثرياء. نكتسب الحق في الجلوس إلى جوارهم."
    }
  }
];
