import type { Strategy } from "../types";

// Group: Brand — the foundational philosophy of the WOSOL × Kingdom Centre proposition.
const G = { en: "Brand", ar: "العلامة" };

export const BRAND_CHAPTERS: Strategy[] = [
  // ──────────────────────────────────────────────────────────
  {
    slug: "brand-philosophy",
    number: "01",
    group: G,
    eyebrow: {
      en: "Chapter One · The Premise",
      ar: "الفصل الأول · المنطلق"
    },
    title: {
      en: "Brand Philosophy",
      ar: "فلسفة العلامة"
    },
    subtitle: {
      en: "WOSOL is not a service. It is a quiet authority — the unseen hand that arranges a life worth living.",
      ar: "وصول ليست خدمة. هي سلطة هادئة — اليد الخفية التي تُهندس حياةً تستحق أن تُعاش."
    },
    lead: {
      en: "The most expensive thing a person of standing owns is not a watch, a residence, or a car. It is attention. WOSOL exists to return that attention to its owner. Where ordinary brands shout, WOSOL whispers. Where ordinary services transact, WOSOL anticipates. The philosophy is rooted in a single principle: the highest form of luxury is the absence of friction, and the deepest expression of hospitality is the absence of explanation. The client should never have to ask twice. The client should rarely have to ask at all.",
      ar: "أغلى ما يملكه الإنسان الراقي ليس الساعة ولا العقار ولا السيارة. إنه انتباهه. وُجدت وصول لتعيد له هذا الانتباه. حيث تصرخ العلامات العادية، تهمس وصول. حيث تتعامل العلامات العادية بمنطق الصفقة، تستبق وصول الحاجة قبل أن تُطلب. الفلسفة تقوم على مبدأ واحد: أرقى أشكال الفخامة هو غياب الاحتكاك، وأعمق تجليات الضيافة هو غياب الحاجة إلى الشرح. لا يجب أن يطلب العميل مرتين. وفي الحالات الأرقى، لا يجب أن يضطر إلى الطلب أصلاً."
    },
    whyItMatters: {
      en: "Saudi Arabia is producing a generation of wealth-holders whose tastes have outgrown the country's available service infrastructure. Without WOSOL, that demand is served abroad — by London concierges, Geneva private offices, Monaco lifestyle managers. WOSOL anchors that spend, that loyalty, and that prestige back inside the Kingdom. It is a sovereign hospitality asset, not a retail amenity.",
      ar: "تنتج المملكة العربية السعودية جيلاً من أصحاب الثروات تجاوزت أذواقهم البنية الخدمية المتاحة محلياً. وبدون وصول، يُلبَّى هذا الطلب في الخارج — عبر شركات الكونسيرج في لندن، والمكاتب الخاصة في جنيف، ومدراء نمط الحياة في موناكو. وصول تُعيد ترسيخ هذا الإنفاق وهذا الولاء وهذه المكانة داخل المملكة. هي أصل سيادي في قطاع الضيافة، لا مجرد كماليّة في التجزئة."
    },
    pillars: [
      {
        title: { en: "Quiet by Design", ar: "هدوء مقصود" },
        body: {
          en: "Loudness signals insecurity. The brand voice, visuals, and behavior are built on restraint. The most powerful signal a luxury brand can send is the confidence to remove what other brands would have added.",
          ar: "الضجيج إشارة قلق. صوت العلامة وصورها وسلوكها مبني على ضبط النفس. أقوى رسالة تبعثها علامة فاخرة هي ثقتها في حذف ما كانت العلامات الأخرى ستضيفه."
        }
      },
      {
        title: { en: "Anticipation, Not Reaction", ar: "استباق لا استجابة" },
        body: {
          en: "True concierge is measured by what the guest never had to mention. Our internal scoring system rewards anticipated requests, not fulfilled ones. The team is trained to read context, climate, and calendar — not to wait for instructions.",
          ar: "يُقاس الكونسيرج الحقيقي بما لم يضطر الضيف إلى ذكره. نظام التقييم الداخلي لدينا يُكافئ الطلب المُستبَق لا الطلب المُنفَّذ. الفريق مدرّب على قراءة السياق والمناخ والتقويم، لا على انتظار التعليمات."
        }
      },
      {
        title: { en: "Saudi at the Core", ar: "سعودي في الجوهر" },
        body: {
          en: "WOSOL is a Saudi brand answering Saudi taste — Arabic coffee rituals, the cadence of Friday, the rhythm of the season, the privacy codes of Najdi hospitality. The brand never imports a foreign idea where a refined local one will do.",
          ar: "وصول علامة سعودية تُجيب على الذوق السعودي — طقوس القهوة العربية، إيقاع الجمعة، إيقاع الموسم، أعراف الخصوصية في الضيافة النجدية. لا تستورد العلامة فكرة أجنبية حيث يُغني عنها إحياء فكرة محلية راقية."
        }
      },
      {
        title: { en: "Custodianship, Not Service", ar: "قِوامة لا خدمة" },
        body: {
          en: "Our internal vocabulary replaces 'service' with 'custodianship'. The team are not staff; they are custodians of a client's time, taste, reputation, and household equilibrium. The word change reframes every interaction.",
          ar: "نستبدل في قاموسنا الداخلي كلمة \"خدمة\" بكلمة \"قِوامة\". الفريق ليس موظفين؛ هم قِوام على وقت العميل وذوقه وسمعته وتوازن بيته. تغيير المفردة يُعيد تأطير كل تفاعل."
        }
      }
    ],
    operations: {
      en: [
        "Forbidden vocabulary list for all client-facing staff: 'no problem', 'sure', 'okay', 'will try', 'I think'. Replaced by 'with pleasure', 'consider it arranged', 'leave it to me'.",
        "Every team member memorises the brand's three commitments — discretion, anticipation, refinement — in both Arabic and English, and recites them at the start of each shift.",
        "All written communication (WhatsApp, email, SMS) is reviewed against a tone checklist before it leaves the system. No emojis. No exclamation points. No urgency framing.",
        "A monthly philosophy refresh: one-hour internal session led by the operations director — case studies from Aman, Quintessentially, Knightsbridge Circle.",
        "Mystery client visits twice per month, scored against the philosophy — not the SOP. SOPs measure compliance. Philosophy measures soul.",
        "A brand drift log captures any moment a team member, partner, or campaign violates the philosophy. Reviewed quarterly with the founders."
      ],
      ar: [
        "قائمة مفردات محظورة لكل موظف بتواصل مباشر مع العميل: \"ما في مشكلة\"، \"تمام\"، \"اوكي\"، \"بحاول\"، \"أعتقد\". تُستبدل بـ: \"بكل سرور\"، \"اعتبرها مُرتَّبة\"، \"أتركها لي\".",
        "يحفظ كل عضو من الفريق التزامات العلامة الثلاثة — التحفظ، الاستباق، التهذيب — بالعربية والإنجليزية، ويستحضرها في بداية كل مناوبة.",
        "تُراجع كل المراسلات المكتوبة (واتساب، إيميل، رسائل) أمام قائمة نبرة قبل إرسالها. لا إيموجي. لا علامات تعجب. لا إطار استعجال.",
        "تحديث فلسفي شهري: جلسة داخلية مدتها ساعة يقودها مدير العمليات — دراسات حالة من أمان، كوينتيسنشلي، نايتسبردج سيركل.",
        "زيارات عميل سرّي مرّتين شهرياً، تُقيَّم وفق الفلسفة لا وفق إجراءات العمل. الإجراءات تقيس الامتثال؛ الفلسفة تقيس الروح.",
        "سجل انحراف العلامة يرصد أي لحظة ينتهك فيها موظف أو شريك أو حملة الفلسفة. يُراجَع ربع سنوي مع المؤسسين."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Cover plate — Brand Philosophy hero", ar: "صورة الغلاف — هيرو فلسفة العلامة" },
        scene: {
          en: "A single cream linen-wrapped key tray on a polished walnut console, deep navy wall, a low-mounted brass picture light. No logos. No human hands. Mid-morning side light.",
          ar: "صينية مفاتيح ملفوفة بكتان كريمي مفردة على كونسول جوزي مصقول، جدار كحلي عميق، إضاءة لوحة نحاسية منخفضة. لا شعارات. لا أيادٍ بشرية. ضوء جانبي في منتصف الصباح."
        },
        mood: { en: "Restraint. Discretion. The brand at rest.", ar: "ضبط النفس. التحفّظ. العلامة في حالة سكون." }
      },
      {
        slot: { en: "Secondary — anticipation made visible", ar: "صورة ثانوية — الاستباق وقد تجلّى" },
        scene: {
          en: "A folded cashmere throw, a single porcelain Arabic coffee cup placed without instruction, a private balcony overlooking a Riyadh skyline rendered in evening haze.",
          ar: "بطّانية كشمير مطوية، فنجان قهوة عربية خزفي مُوضع دون طلب، شُرفة خاصة تطلّ على أفق الرياض في ضباب المساء."
        },
        mood: { en: "The detail that was not requested but was already there.", ar: "التفصيل الذي لم يُطلب لكنه كان حاضراً سلفاً." }
      },
      {
        slot: { en: "Closing plate — custodianship", ar: "الصورة الختامية — القِوامة" },
        scene: {
          en: "A custodian's white-gloved hand resting on the edge of a navy leather guest book, lit by a single warm pendant. The hand is composed, not posed.",
          ar: "يدٌ ترتدي قفازاً أبيض ترتاح على حافة دفتر ضيوف جلدي كحلي، تُضيئها إنارة دافئة فردية. اليد هادئة لا مُتكلّفة."
        },
        mood: { en: "The hand of a custodian, not a server.", ar: "يد قِوام لا يد خادم." }
      }
    ],
    recommendations: [
      {
        title: { en: "Codify the philosophy as a printed document, not a slide", ar: "تدوين الفلسفة في وثيقة مطبوعة لا في شريحة عرض" },
        body: {
          en: "A 16-page bound philosophy booklet, printed on uncoated cream stock, in Arabic and English. Issued to every team member, every partner, every senior stakeholder. The medium itself communicates that this is doctrine.",
          ar: "كتيّب فلسفة مجلّد من ١٦ صفحة، مطبوع على ورق كريمي غير مطلي، بالعربية والإنجليزية. يُسلَّم لكل عضو في الفريق، لكل شريك، لكل صاحب قرار. الوسيط نفسه يقول إن هذا عقيدة، لا اقتراحاً."
        }
      },
      {
        title: { en: "Hire on philosophy alignment first, skills second", ar: "التوظيف على المواءمة الفلسفية أولاً، المهارة ثانياً" },
        body: {
          en: "Hospitality skills can be trained. Temperament cannot. The hiring screen should include a 'silence test' — how the candidate behaves when there is nothing to say, no one to perform for.",
          ar: "المهارات يمكن تدريبها. الطباع لا تُدرَّب. مرحلة التوظيف يجب أن تتضمن \"اختبار الصمت\" — كيف يتصرّف المرشّح حين لا يوجد ما يُقال ولا أحد يُتصنَّع له."
        }
      },
      {
        title: { en: "Protect the philosophy from commercial dilution", ar: "حماية الفلسفة من التميُّع التجاري" },
        body: {
          en: "Establish a 'brand veto' held jointly by the CEO and a senior cultural advisor. Any campaign, partnership, or pricing decision can be vetoed on philosophical grounds without further explanation.",
          ar: "إنشاء صلاحية \"اعتراض العلامة\" يحملها الرئيس التنفيذي ومستشار ثقافي رفيع المستوى مشتركاً. يمكن إيقاف أي حملة أو شراكة أو قرار تسعير على أسس فلسفية دون الحاجة لتفسير إضافي."
        }
      }
    ],
    manifesto: {
      en: "We do not serve. We anticipate. We do not arrange. We orchestrate. We do not speak. We are heard.",
      ar: "نحن لا نخدم. نحن نستبق. نحن لا نُرتّب. نحن نُهندس. نحن لا نتكلم. نحن نُسمَع."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "luxury-positioning",
    number: "02",
    group: G,
    eyebrow: { en: "Chapter Two · The Frame", ar: "الفصل الثاني · الإطار" },
    title: { en: "Luxury Positioning", ar: "تموضع العلامة الفاخرة" },
    subtitle: {
      en: "WOSOL does not compete with concierges. It competes with private offices, family bureaus, and the small black books of the world's quiet rich.",
      ar: "وصول لا تنافس شركات الكونسيرج. هي تنافس المكاتب الخاصة، ومكاتب العائلات، ودفاتر الأرقام الخاصة لأثرياء العالم الهادئين."
    },
    lead: {
      en: "Most concierge brands position themselves against hotels and travel services. WOSOL must position one level higher: against the private structures that the world's quietest wealth uses to organise daily life. This frame changes everything — pricing, language, recruitment, partnerships, even the cadence of how we appear in public. Positioning is not a marketing exercise; it is the strategic decision of who we sit next to in the mind of a client. We choose to sit next to private family offices, not against Lyft Concierge.",
      ar: "تُموضع أغلب علامات الكونسيرج نفسها في مواجهة الفنادق وخدمات السفر. أما وصول فيجب أن تُموضع نفسها مستوىً أعلى: في مواجهة الهياكل الخاصة التي تنظّم بها ثروات العالم الأكثر هدوءاً حياتها اليومية. هذا الإطار يُغيِّر كل شيء — التسعير، اللغة، التوظيف، الشراكات، وحتى إيقاع ظهورنا أمام الجمهور. التموضع ليس تمريناً تسويقياً؛ هو القرار الاستراتيجي بمن نجلس إلى جواره في ذهن العميل. ونحن نختار أن نجلس إلى جوار المكاتب العائلية الخاصة، لا في مواجهة تطبيقات الكونسيرج الاستهلاكية."
    },
    whyItMatters: {
      en: "A brand that positions itself against ride-share concierges will earn ride-share fees and ride-share respect. A brand that positions itself against family offices will earn family-office trust, family-office contracts, and family-office referrals. The maths of luxury rewards the brand that pulls upward, not the one that scales down.",
      ar: "العلامة التي تُموضع نفسها في مواجهة كونسيرج تطبيقات النقل ستكسب أجور تطبيقات النقل واحترامها. العلامة التي تُموضع نفسها بجوار المكاتب العائلية ستكسب ثقة هذه المكاتب، عقودها، وإحالاتها. حسابات الفخامة تُكافئ العلامة التي تسحب نفسها للأعلى، لا التي تنزل بمستواها."
    },
    pillars: [
      {
        title: { en: "The Upward Frame", ar: "إطار التموضع الصاعد" },
        body: {
          en: "Every comparison sentence is consciously upgraded. We do not say 'better than X mall concierge'. We say 'a Saudi-rooted equivalent of Knightsbridge Circle, with Aman discretion'. The reference brands trade us upward in the listener's mind.",
          ar: "كل جملة مقارنة تُرفَع وعياً. لا نقول \"أفضل من كونسيرج المول الفلاني\". نقول \"نظير سعودي الجذور لـ نايتسبردج سيركل، بانضباط أمان\". المراجع المستخدمة ترفع موضع وصول في ذهن المستمع."
        }
      },
      {
        title: { en: "Pricing as Communication", ar: "التسعير بوصفه رسالة" },
        body: {
          en: "Price is the loudest positioning signal a luxury brand has. WOSOL membership and service tiers must be priced as if discounts are offensive. The pricing card does not exist on the public website. The price is part of the qualification.",
          ar: "السعر هو أعلى إشارة تموضع تملكها علامة فاخرة. يجب أن تُسعَّر عضويات وصول وفئات خدماتها بطريقة تجعل التخفيض إهانة. لا توجد بطاقة أسعار على الموقع العام. السعر جزء من معايير الأهلية."
        }
      },
      {
        title: { en: "Refusal as Reputation", ar: "الرفض بوصفه سمعة" },
        body: {
          en: "Who WOSOL refuses to onboard says more than who we accept. A maintained, occasionally communicated, waitlist for WOSOL BLACK is a positioning asset more valuable than any campaign.",
          ar: "من ترفض وصول استقباله يقول أكثر مما يقوله من تقبل. قائمة انتظار مُحافَظ عليها لـ وصول بلاك، يُلمَّح إليها أحياناً، هي أصل تموضعي أعلى قيمة من أي حملة إعلانية."
        }
      },
      {
        title: { en: "Geographic Anchoring", ar: "التثبيت الجغرافي" },
        body: {
          en: "WOSOL is positioned as 'Saudi-born, globally fluent' — not 'imported from London'. The brand earns prestige by being the local original, not the imported import. This is the harder, more durable position.",
          ar: "تُموضع وصول بوصفها \"وُلِدَت في السعودية، تتحدث لغة العالم\" — لا \"مستوردة من لندن\". تكسب العلامة هيبتها من كونها الأصل المحلي، لا الاستيراد المُستورَد. وهذا الموقع الأصعب، وهو الأطول عمراً."
        }
      }
    ],
    operations: {
      en: [
        "All competitive deck slides reframe the competitive set: family offices, private banks' lifestyle desks, global concierge houses. Mall concierges do not appear in the comparison matrix.",
        "A 'never-discount' policy. No promo codes. No launch discounts. No referral bonuses paid in cash. Referrers receive symbolic gifts — a hand-bound notebook, a private dinner — not money.",
        "Public pricing is replaced by 'Membership by introduction'. The website explains the tiers but does not publish numbers.",
        "A library of three reference houses (Aman, Knightsbridge Circle, John Paul Group) is kept on the operations director's desk. Every new positioning decision is benchmarked against them.",
        "All press, partnership, and PR work avoids the word 'startup'. WOSOL is a 'house', a 'firm', a 'private practice'. Never a 'startup', never a 'platform', never an 'app'.",
        "Pricing reviewed annually, but only upward. The brand does not become cheaper. Ever."
      ],
      ar: [
        "تُعاد صياغة كل شرائح المنافسة في العروض: المكاتب العائلية، مكاتب نمط الحياة في البنوك الخاصة، شركات الكونسيرج العالمية. لا تظهر علامات كونسيرج المولات في مصفوفة المقارنة.",
        "سياسة \"لا تخفيضات\". لا أكواد عروض. لا تخفيضات إطلاق. لا مكافآت إحالة نقدية. يحصل المُحيلون على هدايا رمزية — دفتر مجلّد يدوياً، عشاء خاص — لا على مال.",
        "يُستبدل التسعير العلني بـ \"العضوية بالتزكية\". يشرح الموقع الفئات دون نشر الأرقام.",
        "تُحفظ مكتبة من ثلاث علامات مرجعية (أمان، نايتسبردج سيركل، جون بول) على مكتب مدير العمليات. كل قرار تموضع جديد يُقاس بها.",
        "تتجنّب كل المواد الإعلامية والشراكات والعلاقات العامة كلمة \"ستارت أب\". وصول \"بيت\"، \"دار\"، \"شركة خاصة\". ليست \"ستارت أب\"، ولا \"منصة\"، ولا \"تطبيقاً\".",
        "تُراجَع الأسعار سنوياً، لكن باتجاه واحد: صعوداً. لا تصبح العلامة أرخص. أبداً."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Positioning hero — the mind ladder", ar: "هيرو التموضع — سُلَّم الذهن" },
        scene: {
          en: "An empty leather-bound members' ledger on a dark walnut desk, a single Mont Blanc-style pen unmarked of brand, a closed brass reading lamp. No client name visible. No emblem visible.",
          ar: "دفتر أعضاء جلدي فارغ على مكتب جوزي داكن، قلم بطراز فاخر بلا علامة تجارية ظاهرة، مصباح قراءة نحاسي مُطفأ. لا اسم عميل ظاهر. لا شعار ظاهر."
        },
        mood: { en: "Quietly inaccessible.", ar: "تعذُّر هادئ." }
      },
      {
        slot: { en: "Companion — the upper frame visualised", ar: "صورة مرافقة — تجسيد الإطار الأعلى" },
        scene: {
          en: "A boardroom corner: cream wool carpet, deep navy panelled walls, a single architectural Saudi date palm in a marble vessel, low golden light from above. Empty. Composed.",
          ar: "زاوية مجلس: سجادة صوف كريمية، جدران مكسوّة بألواح كحلية عميقة، نخلة سعودية معمارية مفردة في وعاء رخامي، ضوء ذهبي خافت من الأعلى. فارغة. مُتزنة."
        },
        mood: { en: "A room that costs respect to enter.", ar: "غرفة يكلِّف دخولها قدراً من الاحترام." }
      }
    ],
    recommendations: [
      {
        title: { en: "Publish a 'House Code' rather than a brochure", ar: "نشر \"دستور الدار\" بدلاً من البروشور" },
        body: {
          en: "A short, hand-bound document — printed in fewer than 500 numbered copies — that articulates WOSOL's philosophy, code of conduct, and membership disciplines. Sent to a curated list of family offices, private banks, and senior Saudi households.",
          ar: "وثيقة قصيرة مجلّدة يدوياً — مطبوعة في أقل من ٥٠٠ نسخة مرقّمة — تُجلِّي فلسفة وصول وأخلاقياتها ومنظومتها العضوية. تُرسَل لقائمة منتقاة من المكاتب العائلية، البنوك الخاصة، وكبار البيوتات السعودية."
        }
      },
      {
        title: { en: "Build a 'Refusal Register'", ar: "إنشاء \"سجل الرفض\"" },
        body: {
          en: "An internal record of membership requests politely declined. Reviewed quarterly. Never publicised, but the existence of the register itself becomes word of mouth among those who matter.",
          ar: "سجل داخلي لطلبات العضوية التي رُفِضت بأدب. يُراجَع ربع سنوي. لا يُنشر علناً، لكن وجوده ذاته يصير شفهياً بين من يُعتدّ بهم."
        }
      },
      {
        title: { en: "Negotiate vertical-only partnerships", ar: "التفاوض على شراكات صاعدة فقط" },
        body: {
          en: "Only partner with brands at WOSOL's tier or above. A single tier-drop partnership re-anchors the brand at the wrong level and is far more expensive to recover from than to avoid.",
          ar: "الشراكة فقط مع علامات في طبقة وصول أو أعلى. شراكة واحدة في طبقة أدنى تُعيد تثبيت العلامة في المكان الخطأ، وتكلفة التعافي منها أعلى بكثير من تكلفة تجنّبها."
        }
      }
    ],
    manifesto: {
      en: "Positioning is the only marketing decision a luxury brand truly makes. Everything else is execution.",
      ar: "التموضع هو القرار التسويقي الوحيد الذي تتخذه علامة فاخرة بحق. كل ما عداه تنفيذ."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "concierge-services",
    number: "05",
    group: G,
    eyebrow: { en: "Chapter Five · The Offer", ar: "الفصل الخامس · العرض" },
    title: { en: "Concierge Services", ar: "خدمات الكونسيرج" },
    subtitle: {
      en: "The service menu is not a list of tasks. It is a manifesto of how a refined life is composed.",
      ar: "قائمة الخدمات ليست لائحة مهام. هي بيان عن كيف تُؤلَّف حياةٌ راقية."
    },
    lead: {
      en: "A common mistake among emerging luxury brands is the tendency to publish service menus that read like delivery-app categories. WOSOL inverts this. The service architecture is structured as 'territories of life' — Travel, Residence, Wardrobe, Table, Health, Family, Discretion. Each territory has principles before it has line items. Within each territory the team can compose, improvise, and orchestrate. The menu is the start of a conversation, not the limit of one.",
      ar: "خطأ شائع لدى العلامات الفاخرة الناشئة أن قوائم خدماتها تُقرأ كأنها تصنيفات تطبيقات توصيل. وصول تقلب هذه المعادلة. تُبنى منظومة الخدمات بوصفها \"أقاليم للحياة\" — السفر، البيت، الخزانة، المائدة، الصحة، الأسرة، التحفظ. يسبق كل إقليم مبدأ قبل أن يحوي بنوداً. وداخل كل إقليم يستطيع الفريق أن يُؤلِّف ويرتجل ويُهندس. القائمة بداية حوار، لا نهايته."
    },
    whyItMatters: {
      en: "Clients of standing do not want a list to choose from. They want a relationship that already understands what they are likely to want. The architecture of the service offer determines whether WOSOL is hired once or retained for a lifetime.",
      ar: "أصحاب المكانة لا يريدون قائمة يختارون منها. يريدون علاقةً تعرف مسبقاً ما الذي يُرجَّح أن يطلبوه. منظومة العرض الخدمي هي ما يحدد ما إذا كانت وصول تُستأجَر مرة، أم تُحتفَظ بها مدى الحياة."
        },
    pillars: [
      {
        title: { en: "Territories, Not Tasks", ar: "أقاليم لا مهام" },
        body: {
          en: "Seven territories of life: Travel, Residence, Wardrobe, Table, Health, Family, Discretion. Each is led by a senior custodian who answers personally for the territory's standards.",
          ar: "سبعة أقاليم للحياة: السفر، البيت، الخزانة، المائدة، الصحة، الأسرة، التحفظ. لكل إقليم قِوام رفيع يُجيب شخصياً عن معايير إقليمه."
        }
      },
      {
        title: { en: "The Default Excellence Rule", ar: "قاعدة التميُّز الافتراضي" },
        body: {
          en: "If the client did not specify, we choose the most refined possible option, never the cheapest or the most convenient. The team trusts that taste is the brand's deepest asset.",
          ar: "إذا لم يحدد العميل، نختار أرقى ما يُمكن، لا الأرخص ولا الأسهل. الفريق يثق بأن الذوق هو أعمق أصول العلامة."
        }
      },
      {
        title: { en: "Invisible Logistics", ar: "لوجستيات خفيّة" },
        body: {
          en: "The client should never see the seams: deliveries arrive pre-arranged, returns processed silently, vendor calls handled off-stage. Every visible operational moment is a failure of design.",
          ar: "يجب ألا يرى العميل التماسات: التوصيلات تصل مرتبة سلفاً، المرتجعات تُعالَج بصمت، مكالمات المورّدين تجري خلف الكواليس. كل لحظة تشغيلية ظاهرة هي خلل في التصميم."
        }
      },
      {
        title: { en: "The Two-Person Rule", ar: "قاعدة الشخصين" },
        body: {
          en: "Every account is overseen by a primary custodian and a senior shadow. If one is unreachable, the other answers as if the relationship were their own. The client never feels a handover.",
          ar: "يُشرف على كل حساب قِوام أساسي وظِلّ رفيع. إن تعذّر الوصول للأول، يُجيب الثاني وكأن العلاقة علاقته. لا يشعر العميل بأي تسليم بين الفريق."
        }
      }
    ],
    operations: {
      en: [
        "Each territory operates against a written 'standards charter' — what the territory considers excellent, acceptable, or unacceptable. The charter is reviewed twice a year.",
        "All requests are logged not by task but by territory, so the brand can see trend lines per client across years, not weeks.",
        "Vendor onboarding is treated as a brand decision, not a procurement one. Vendors sign a 'House Standards Annex' alongside any commercial agreement.",
        "The team carries no public price list when serving guests. Pricing is communicated by the head of the relationship, in person or in writing, never at a counter.",
        "A confidential 'preferred-not-to-be-mentioned' field in every client profile captures the things the client never wants asked again — allergies, faith observances, family sensitivities, scheduling patterns.",
        "An end-of-quarter ritual letter from the founder to top-tier clients, hand-signed, with a single observation about how their relationship with WOSOL has evolved."
      ],
      ar: [
        "يعمل كل إقليم وفق \"ميثاق معايير\" مكتوب — ما يعتبره الإقليم متميزاً، مقبولاً، أو غير مقبول. يُراجَع مرتين سنوياً.",
        "تُسجَّل الطلبات لا حسب المهمة بل حسب الإقليم، حتى ترى العلامة خطوط الأنماط لكل عميل عبر السنين لا الأسابيع.",
        "تعريف المورّدين يُعالَج بوصفه قراراً متعلقاً بالعلامة، لا قراراً مشترياتي. يوقّع المورّدون \"ملحق معايير الدار\" مع أي اتفاق تجاري.",
        "لا يحمل الفريق قائمة أسعار علنية حين يخدم الضيوف. يُبلَّغ التسعير من خلال مسؤول العلاقة، شخصياً أو كتابةً، لا عند الكاونتر.",
        "حقل سري \"لا يُذكر مرة أخرى\" في كل ملف عميل، يحتفظ بما لا يرغب أن يُسأل عنه مجدداً — حساسيات، التزامات دينية، حساسيات عائلية، أنماط جدولة.",
        "طقس فصلي: رسالة من المؤسس لكبار العملاء، موقعة يدوياً، تتضمن ملاحظة واحدة عن تطور علاقتهم بـ وصول."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Territory map plate", ar: "صورة خريطة الأقاليم" },
        scene: {
          en: "A hand-drawn cream cartographic map laid open on a walnut writing desk, marked with seven small champagne-gold pins. A single fountain pen rests across the corner. No labels readable.",
          ar: "خريطة كريمية مرسومة يدوياً مفتوحة على مكتب جوزي، مُعلَّمة بسبع دبابيس صغيرة بلون الشامبانيا الذهبية. قلم حبر يستريح عند الزاوية. لا يمكن قراءة أي تسميات."
        },
        mood: { en: "An atlas of a life.", ar: "أطلس حياة." }
      },
      {
        slot: { en: "Companion — invisible logistics", ar: "صورة مرافقة — لوجستيات خفيّة" },
        scene: {
          en: "A pristine private corridor moments before a guest's arrival: linen pressed, fresh white florals, a tray with a folded handwritten card placed without a writer present. Cream stone walls.",
          ar: "ممر خاص نقي قبل وصول الضيف بلحظات: كتان مكويّ، أزهار بيضاء طازجة، صينية بطاقة مكتوبة يدوياً ومُوضعة دون حضور كاتبها. جدران حجر كريمية."
        },
        mood: { en: "The stage set before the guest sees it.", ar: "المسرح وقد جُهِّز قبل أن يراه الضيف." }
      }
    ],
    recommendations: [
      {
        title: { en: "Publish principles, withhold prices", ar: "انشر المبادئ، احجب الأسعار" },
        body: {
          en: "The website should articulate the seven territories and their principles, but pricing remains a relationship conversation. This positions the relationship as the unit of value, not the task.",
          ar: "ينشر الموقع الأقاليم السبعة ومبادئها، ويترك التسعير حواراً علاقيّاً. هذا يضع العلاقة بوصفها وحدة القيمة، لا المهمة."
        }
      },
      {
        title: { en: "Hire territory leads with industry depth", ar: "وظِّف قادة أقاليم بعمق قطاعي" },
        body: {
          en: "Each territory lead should be someone who has spent a career inside that world — a former private banker for Discretion, an ex-Aman GM for Travel, a household manager from a senior Riyadh family for Residence.",
          ar: "يجب أن يكون قائد كل إقليم شخصاً قضى مساره داخل ذلك العالم — مصرفي خاص سابق لإقليم التحفظ، مدير عام أمان سابق لإقليم السفر، مدير منزل من بيت ريادي بالرياض لإقليم البيت."
        }
      },
      {
        title: { en: "Run an annual 'standards re-write'", ar: "ادفع لمراجعة سنوية للمعايير" },
        body: {
          en: "Once a year the founders, territory leads, and a small panel of long-term clients re-write the standards charter together. This protects the brand from operational drift.",
          ar: "مرّة في السنة، يُعيد المؤسسون وقادة الأقاليم ولجنة صغيرة من العملاء القدامى كتابة ميثاق المعايير معاً. هذا يحمي العلامة من الانحراف التشغيلي."
        }
      }
    ],
    manifesto: {
      en: "We sell a relationship, denominated in tasks.",
      ar: "نحن نبيع علاقة، تُعدّ بوحدات من المهام."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "saudi-market",
    number: "32",
    group: G,
    eyebrow: { en: "Chapter Thirty-Two · The Ground", ar: "الفصل الثاني والثلاثون · الأرض" },
    title: { en: "Saudi Luxury Market Opportunity", ar: "فرصة سوق الفخامة السعودي" },
    subtitle: {
      en: "Vision 2030 has created the largest single-market luxury formation event of the last two decades. WOSOL is positioned at the centre of it.",
      ar: "أحدثت رؤية ٢٠٣٠ أكبر حدث تشكُّلٍ لسوق فاخر مفرد في العقدين الماضيين. وصول تموضع في قلبه."
    },
    lead: {
      en: "Three forces converge simultaneously inside the Kingdom. First, a generational transfer of wealth that is faster and more concentrated than in any G20 economy. Second, a regulatory and tourism transformation that is dragging international luxury houses, hotel groups, and lifestyle brands into Riyadh, Jeddah, and the Red Sea coast. Third, a cultural moment in which Saudis are increasingly proud to consume Saudi-born luxury rather than imported alternatives. For a domestic concierge brand of the right calibre, this convergence is a structural advantage that will not recur. WOSOL must move before the window closes.",
      ar: "ثلاث قوى تلتقي في وقت واحد داخل المملكة. الأولى، انتقال جيلي للثروة أسرع وأكثر تركيزاً من أي اقتصاد في مجموعة العشرين. الثانية، تحول تنظيمي وسياحي يجذب علامات الفخامة والمجموعات الفندقية وعلامات نمط الحياة الدولية إلى الرياض وجدة وساحل البحر الأحمر. الثالثة، لحظة ثقافية يزداد فيها فخر السعودي باستهلاك فخامة سعودية المولد بدلاً من البدائل المستوردة. لعلامة كونسيرج محلية من العيار الصحيح، هذا الالتقاء ميزة بنيوية لن تتكرر. يجب أن تتحرّك وصول قبل أن تُغلَق النافذة."
    },
    whyItMatters: {
      en: "Markets like this are won in the first 36 months. The first brand to anchor a category in a luxury market formation owns the recall, the partnerships, and the talent for a decade. The second brand pays double for the same gains.",
      ar: "تُحسَم أسواق كهذه في أول ٣٦ شهراً. العلامة الأولى التي ترسو في قطاع داخل سوق فاخر ناشئ تمتلك الذاكرة الذهنية، والشراكات، والكفاءات لعشر سنوات. العلامة الثانية تدفع ضعفاً لتحقيق المكاسب نفسها."
        },
    pillars: [
      {
        title: { en: "The Wealth Curve", ar: "منحنى الثروة" },
        body: {
          en: "Saudi UHNW and HNW populations are projected to grow faster than any other GCC market through 2030, with notable concentration in the under-45 cohort — exactly the demographic most receptive to a modern domestic luxury brand.",
          ar: "يتوقَّع أن تنمو شرائح الثروة العالية والفائقة في السعودية بأسرع من أي سوق خليجي حتى عام ٢٠٣٠، مع تركّز ملحوظ في فئة دون ٤٥ عاماً — وهي تماماً الشريحة الأكثر تقبّلاً لعلامة فاخرة محلية حديثة."
        }
      },
      {
        title: { en: "The Inflow of Houses", ar: "تدفّق الدور العالمية" },
        body: {
          en: "Aman, Rosewood, Six Senses, Mandarin Oriental, and others are operating or opening in the Kingdom. Each new house is a partnership opportunity, a referral source, and a competitor in the talent market.",
          ar: "أمان، روزوود، سيكس سنسز، ماندرين أورينتال، وغيرها تعمل أو تفتح في المملكة. كل دار جديدة فرصة شراكة، ومصدر إحالات، ومنافس على الكفاءات."
        }
      },
      {
        title: { en: "The Cultural Pivot", ar: "الانعطاف الثقافي" },
        body: {
          en: "A growing class of Saudi consumers actively prefers domestically created luxury — Saudi fashion houses, Saudi restaurants, Saudi galleries. A Saudi-rooted concierge brand inherits this pride, provided it earns the right to it.",
          ar: "طبقة متنامية من المستهلكين السعوديين تُفضِّل بإرادة الفخامة السعودية الصنع — دور الأزياء السعودية، المطاعم السعودية، الصالات السعودية. علامة كونسيرج سعودية الجذور ترث هذا الفخر، شرط أن تستحقه."
        }
      },
      {
        title: { en: "The Vision 2030 Frame", ar: "إطار رؤية ٢٠٣٠" },
        body: {
          en: "WOSOL is uniquely positioned to be cited as a Vision 2030-aligned case study — quality of life, tourism contribution, domestic luxury, female employment, Saudi entrepreneurship. This frame opens institutional doors.",
          ar: "تتموضع وصول بشكل فريد لتكون مثالاً يُستشهد به في إطار رؤية ٢٠٣٠ — جودة الحياة، الإسهام السياحي، الفخامة المحلية، توظيف المرأة، ريادة الأعمال السعودية. هذا الإطار يفتح الأبواب المؤسسية."
        }
      }
    ],
    operations: {
      en: [
        "Quarterly market intelligence brief, internal only — covering UHNW growth, hospitality openings, regulatory changes, and Vision 2030 hospitality milestones.",
        "Maintain a 'Saudi Luxury Index' — a private list of high-trust Saudi luxury brands across fashion, dining, design, art, with whom WOSOL co-positions and cross-references.",
        "Senior leadership attends every major Saudi luxury and tourism event — Riyadh Season VIP openings, FII, Saudi Cup, Diriyah Season — under a controlled appearance policy.",
        "An institutional relations function with one full-time lead, responsible for cultivating contact with PIF subsidiaries, Royal Commission for Riyadh City, Ministry of Tourism, and Ministry of Investment.",
        "Two annual private founder breakfasts hosted by WOSOL at the residence of a senior friend of the house — invitation-only, twenty-five seats, no media."
      ],
      ar: [
        "نشرة استخبارات سوقية ربع سنوية، داخلية فقط — تغطي نمو شرائح الثروة، افتتاحات الضيافة، التغييرات التنظيمية، ومحطات رؤية ٢٠٣٠ في قطاع الضيافة.",
        "الاحتفاظ بـ \"مؤشر الفخامة السعودي\" — قائمة خاصة بعلامات سعودية فاخرة عالية الثقة في الأزياء والمطاعم والتصميم والفن، تتموضع وصول إلى جوارها وتتبادل معها الإحالات.",
        "تحضر القيادة العليا كل حدث سعودي فاخر وسياحي رئيسي — افتتاحات موسم الرياض الخاصة، مؤتمر مبادرة مستقبل الاستثمار، كأس السعودية، موسم الدرعية — ضمن سياسة ظهور مدروسة.",
        "وحدة علاقات مؤسسية بقائد متفرّغ، مسؤول عن بناء التواصل مع شركات صندوق الاستثمارات العامة، الهيئة الملكية لمدينة الرياض، وزارة السياحة، ووزارة الاستثمار.",
        "إفطاران سنويان خاصان يستضيفهما المؤسس في منزل صديق رفيع للدار — بالدعوة فقط، خمسة وعشرون مقعداً، دون إعلام."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Macro plate — the Kingdom skyline", ar: "صورة كلية — أفق المملكة" },
        scene: {
          en: "Riyadh skyline at the golden hour, photographed from a high private residence — Kingdom Tower visible but not centred, evening haze in champagne tones, a single uncropped foreground detail of marble window ledge.",
          ar: "أفق الرياض في الساعة الذهبية، مُصوَّر من مقام سكني عالٍ خاص — برج المملكة ظاهر دون أن يكون في المركز، ضباب مسائي بنغمات شامبانية، تفصيل أمامي واحد لحافة نافذة رخامية."
        },
        mood: { en: "An economy mid-formation, photographed from above.", ar: "اقتصاد في طور التشكّل، مُصوَّر من علٍ." }
      },
      {
        slot: { en: "Detail — Saudi cultural anchor", ar: "تفصيل — مرساة ثقافية سعودية" },
        scene: {
          en: "A close still life: a single small dallah (Arabic coffee pot) silhouetted, a folded white ghutra, a Najdi-style window arch in soft focus behind. No people. Late-afternoon shadow.",
          ar: "طبيعة صامتة قريبة: ظلّ دلّة قهوة عربية صغيرة، غترة بيضاء مطوية، قوس نافذة بطراز نجدي في عمق غير حاد. لا أشخاص. ظلّ أصيل."
        },
        mood: { en: "Local. Specific. Proud without volume.", ar: "محلية. محددة. فخورة دون ضجيج." }
      }
    ],
    recommendations: [
      {
        title: { en: "Anchor before the foreign brands do", ar: "ارسُ قبل أن ترسو العلامات الأجنبية" },
        body: {
          en: "Quintessentially, Knightsbridge Circle, and John Paul Group will eventually enter Saudi. WOSOL must already be the default reference inside the local market before they arrive. The clock is the asset.",
          ar: "ستدخل كوينتيسنشلي ونايتسبردج سيركل وجون بول إلى السعودية في النهاية. يجب أن تكون وصول هي المرجع الافتراضي في السوق المحلي قبل وصولهم. الزمن هو الأصل."
        }
      },
      {
        title: { en: "Frame WOSOL as a Vision 2030 case study", ar: "تأطير وصول كنموذج لرؤية ٢٠٣٠" },
        body: {
          en: "Engage with relevant government and quasi-government bodies as a quality-of-life and tourism-quality case. This earns institutional cover, partnership routes, and indirect endorsement.",
          ar: "التعامل مع الجهات الحكومية وشبه الحكومية ذات الصلة بوصف وصول مثالاً على جودة الحياة وجودة السياحة. يكسبها هذا غطاءً مؤسسياً، ومسارات شراكة، وتزكية غير مباشرة."
        }
      },
      {
        title: { en: "Recruit Saudi senior women into visible roles", ar: "تجنيد سعوديات في مناصب قيادية ظاهرة" },
        body: {
          en: "The brand's credibility, public alignment with Vision 2030, and cultural authority all benefit from senior Saudi women in custodian-facing, partnership, and PR roles. This is structurally right and strategically powerful.",
          ar: "تستفيد مصداقية العلامة وانسجامها العام مع رؤية ٢٠٣٠ وسلطتها الثقافية من تواجد سعوديات في أدوار رفيعة ظاهرة — قِوامة، شراكات، علاقات عامة. هذا صحيح بنيوياً وقوي استراتيجياً."
        }
      }
    ],
    manifesto: {
      en: "A market this rare is not entered — it is anchored.",
      ar: "سوقٌ بهذه الندرة لا يُدخَل — يُرسى فيه."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "riyadh-retail-trends",
    number: "33",
    group: G,
    eyebrow: { en: "Chapter Thirty-Three · The City", ar: "الفصل الثالث والثلاثون · المدينة" },
    title: { en: "Riyadh Luxury Retail Trends", ar: "اتجاهات تجزئة الفخامة في الرياض" },
    subtitle: {
      en: "Riyadh's luxury retail map is being redrawn every quarter. WOSOL must read it before its clients do.",
      ar: "خريطة تجزئة الفخامة في الرياض تُعاد رسمها كل ربع سنة. على وصول أن تقرأها قبل أن يقرأها عملاؤها."
    },
    lead: {
      en: "Riyadh's luxury retail has moved through three distinct phases in a decade: the era of the imported boutique, the era of the multi-brand mall anchor, and now the era of curated district destinations. Kingdom Centre played a defining role in the second phase and is now repositioning into the third. WOSOL's booth, services, and partnerships must be designed for where the city is going — Diriyah, Boulevard, Via Riyadh, Mohammed bin Salman district, NHC luxury residential clusters — not where it has been. This chapter is the strategic map.",
      ar: "مرّت تجزئة الفخامة في الرياض بثلاث مراحل واضحة خلال عقد: عصر البوتيك المستورد، عصر مجمع التجزئة متعدد العلامات، والآن عصر الوجهات الحضرية المُنسَّقة. لعب مركز المملكة دوراً محورياً في المرحلة الثانية، ويعيد الآن تموضعه في الثالثة. يجب أن تُصمَّم منصة وصول وخدماتها وشراكاتها لما تتجه إليه المدينة — الدرعية، البوليفارد، فيا الرياض، نطاق محمد بن سلمان، أحياء الإسكان الفاخرة — لا لما كانت عليه. هذا الفصل هو الخريطة الاستراتيجية."
    },
    whyItMatters: {
      en: "Retail context is destiny. A concierge brand inside the right mall, at the right moment, with the right partnerships, can become the city's default reference. A concierge brand in the wrong context can be invisible regardless of its quality.",
      ar: "السياق التجاري قَدَر. علامة كونسيرج داخل المركز الصحيح، في اللحظة الصحيحة، بالشراكات الصحيحة، يمكن أن تصبح المرجع الافتراضي للمدينة. وعلامة كونسيرج في السياق الخطأ تكون غير مرئية بصرف النظر عن جودتها."
        },
    pillars: [
      {
        title: { en: "Kingdom Centre as Anchor, Not Ceiling", ar: "مركز المملكة كمَرسى لا كسقف" },
        body: {
          en: "Kingdom Centre is the launch anchor. But the brand must consciously plan for parallel touchpoints in emerging districts so that WOSOL is not perceived as a single-mall amenity.",
          ar: "مركز المملكة هو مرسى الإطلاق. لكن يجب أن تُخطِّط العلامة بوعي لنقاط لمس موازية في الأحياء الناشئة، حتى لا تُعتبر وصول كمالية تابعة لمول واحد."
        }
      },
      {
        title: { en: "The Diriyah Future", ar: "مستقبل الدرعية" },
        body: {
          en: "Diriyah Gate is being built as the cultural luxury district of the city. WOSOL must be present from year one — not as a booth, but through partnerships with Diriyah's hospitality operators.",
          ar: "تُبنى بوابة الدرعية لتكون الحي الثقافي الفاخر للمدينة. يجب أن تكون وصول حاضرة من السنة الأولى — لا عبر منصة، بل عبر شراكات مع مُشغّلي الضيافة في الدرعية."
        }
      },
      {
        title: { en: "Residential Concierge", ar: "كونسيرج المقام" },
        body: {
          en: "NHC and high-end private developments are launching residential clusters with concierge requirements. WOSOL can plug into these as the residential concierge of choice for the city's senior households.",
          ar: "تطلق الشركة الوطنية للإسكان وتطويرات خاصة راقية مجمعات سكنية مع متطلبات كونسيرج. تستطيع وصول الانخراط في هذه المجمعات بوصفها كونسيرج المقام المفضّل لكبار البيوتات في المدينة."
        }
      },
      {
        title: { en: "The Seasonality Pulse", ar: "نبض الموسمية" },
        body: {
          en: "Riyadh's luxury rhythm is shaped by Riyadh Season, Saudi Cup, Diriyah Season, Formula E, and Ramadan. WOSOL's calendar of activations, content, and partnerships must run on this beat, not on a generic Q1–Q4 marketing year.",
          ar: "يَتشكَّل إيقاع الفخامة في الرياض بفعل موسم الرياض، كأس السعودية، موسم الدرعية، فورمولا إي، ورمضان. يجب أن يسير تقويم تفعيلات وصول ومحتواها وشراكاتها على هذا الإيقاع، لا على سنة تسويق تقليدية."
        }
      }
    ],
    operations: {
      en: [
        "Quarterly retail map update — a single internal slide showing where Riyadh's luxury foot-traffic is concentrating, which developments are opening, and which are losing relevance.",
        "Active relationships with the senior leasing and experience teams of the three most relevant landlords beyond Kingdom Centre: Diriyah Company, Boulevard, and at least one branded residential project.",
        "A 'season activation plan' aligned with Riyadh's actual cultural calendar, not an imported retail one. Pre-Ramadan, Saudi National Day, Saudi Founding Day, Saudi Cup week, Riyadh Season opening night, etc.",
        "Watchlist for foreign luxury concierge entrants. Each is profiled internally and a competitive response prepared.",
        "Two members of senior leadership are designated as 'city scouts' — they visit every new luxury opening in the city within seven days and write a brief internal note on it."
      ],
      ar: [
        "تحديث خريطة التجزئة ربع سنوي — شريحة داخلية واحدة تُظهر أين تتركز حركة الفخامة في الرياض، أي التطويرات يُفتتح، وأيها يفقد أهميته.",
        "علاقات نشطة مع قيادات التأجير والتجربة في أهم ثلاث جهات مالكة بعد مركز المملكة: شركة الدرعية، البوليفارد، ومشروع سكني فاخر مُعلَّم واحد على الأقل.",
        "\"خطة تفعيلات موسمية\" متوافقة مع التقويم الثقافي السعودي الفعلي، لا تقويم تجزئة مستورد. قبل رمضان، اليوم الوطني، يوم التأسيس، أسبوع كأس السعودية، ليلة افتتاح موسم الرياض، إلخ.",
        "قائمة مراقبة للمتنافسين الأجانب في كونسيرج الفخامة. يُحلَّل كل واحد منهم داخلياً ويُعَدّ ردّ تنافسي.",
        "اثنان من القيادة العليا يُعيَّنان بوصفهما \"كشّافي المدينة\" — يزوران كل افتتاح فاخر جديد خلال سبعة أيام ويكتبان مذكرة داخلية مختصرة."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "City map plate", ar: "صورة خريطة المدينة" },
        scene: {
          en: "A high-end city map of Riyadh rendered in cream and navy on heavy paper, three small champagne brass markers placed precisely. Black-and-white aerial photography in soft focus behind.",
          ar: "خريطة مدينة فاخرة للرياض بتدرّجات كريمية وكحلية على ورق سميك، ثلاث علامات نحاسية شامبانية صغيرة موضوعة بدقة. خلفية تصوير جوي بالأبيض والأسود بعمق ضبابي."
        },
        mood: { en: "A city read as a board.", ar: "مدينة تُقرأ كرقعة." }
      },
      {
        slot: { en: "Companion — district presence", ar: "صورة مرافقة — حضور حضري" },
        scene: {
          en: "A still composition from a Diriyah-style traditional doorway at dusk: cream stone, deep navy timber, a single brass lantern. No signage. No people.",
          ar: "تكوين ساكن من باب تقليدي بطراز الدرعية عند الغسق: حجر كريمي، خشب كحلي عميق، فانوس نحاسي مفرد. لا لافتات. لا أشخاص."
        },
        mood: { en: "Heritage as the next luxury district.", ar: "التراث بوصفه حيّ الفخامة القادم." }
      }
    ],
    recommendations: [
      {
        title: { en: "Plan Touchpoint #2 within 12 months of launch", ar: "خطط لنقطة اللمس الثانية خلال ١٢ شهراً من الإطلاق" },
        body: {
          en: "Without a second physical or partnership-anchored presence within 12 months of the Kingdom Centre launch, the brand risks single-context perception. Target Diriyah hospitality or a senior residential development.",
          ar: "بدون حضور ثانٍ مادي أو مُرسى بشراكة خلال ١٢ شهراً من إطلاق مركز المملكة، تواجه العلامة خطر تصوّرها كسياق واحد. استهدف ضيافة الدرعية أو تطويراً سكنياً رفيعاً."
        }
      },
      {
        title: { en: "Co-publish a 'Riyadh Luxury Brief'", ar: "شارك في نشر \"موجز فخامة الرياض\"" },
        body: {
          en: "Once a year, in collaboration with one high-credibility partner, publish a private members' brief on Riyadh's luxury landscape. Becomes the brand's most powerful soft asset.",
          ar: "مرّة سنوياً، بالتعاون مع شريك واحد عالي المصداقية، انشر موجز أعضاء خاصاً عن مشهد الفخامة في الرياض. يصير من أقوى الأصول الناعمة للعلامة."
        }
      }
    ],
    manifesto: {
      en: "We do not chase the city. We read it before it reveals itself.",
      ar: "لا نطارد المدينة. نقرؤها قبل أن تكشف نفسها."
    }
  }
];
