import type { Strategy } from "../types";

const G = { en: "Hospitality", ar: "الضيافة" };

export const HOSPITALITY_CHAPTERS: Strategy[] = [
  // ──────────────────────────────────────────────────────────
  {
    slug: "hospitality-psychology",
    number: "06",
    group: G,
    eyebrow: { en: "Chapter Six · The Mind of the Guest", ar: "الفصل السادس · ذهن الضيف" },
    title: { en: "Luxury Hospitality Psychology", ar: "علم نفس الضيافة الفاخرة" },
    subtitle: {
      en: "The deepest luxury is the relief of being understood without speaking.",
      ar: "أعمق الفخامة هي راحة أن تُفهَم دون أن تتكلم."
    },
    lead: {
      en: "Wealth at scale rarely complains. The senior guest does not raise a voice — they simply do not return. WOSOL therefore trains its team to read the silent signals: the change in posture, the second glance, the unfinished cup, the slight delay in opening a folder. The psychology of luxury hospitality is not the psychology of selling. It is the psychology of attention — observing without staring, attending without hovering, anticipating without presuming. The aim is not to satisfy. The aim is to leave the guest with the sensation that they have been seen.",
      ar: "الثروة الواسعة لا تشكو غالباً. الضيف الرفيع لا يرفع صوته — هو فقط لا يعود. لذلك تدرّب وصول فريقها على قراءة الإشارات الصامتة: تغيّر الجلسة، النظرة الثانية، الفنجان غير المكتمل، التأخر اليسير في فتح ملف. علم نفس الضيافة الفاخرة ليس علم نفس البيع. هو علم نفس الانتباه — الملاحظة دون تحديق، الحضور دون تربّص، الاستباق دون افتراض. الهدف ليس إرضاء الضيف. الهدف أن يُغادر وفي وجدانه أنه قد رُئي."
    },
    whyItMatters: {
      en: "Guest psychology determines retention more powerfully than any service level agreement. A guest who feels understood will forgive operational mistakes. A guest who feels processed will leave even when service was technically perfect.",
      ar: "علم نفس الضيف يحدد الاحتفاظ أكثر من أي اتفاقية مستوى خدمة. الضيف الذي يشعر بأنه مفهوم يغفر الأخطاء التشغيلية. والضيف الذي يشعر بأنه مُعالَج كملف يرحل حتى إذا كانت الخدمة كاملة من الناحية الفنية."
        },
    pillars: [
      {
        title: { en: "Read the Silent Signals", ar: "قراءة الإشارات الصامتة" },
        body: {
          en: "Four cues to read: posture, gaze, breath, hand position. Each tells the custodian more than a question would. Trained custodians can adjust the visit within seven seconds of the guest entering.",
          ar: "أربع إشارات تُقرأ: الجلسة، النظرة، النفس، وضع اليد. كلٌّ منها تخبر القِوام أكثر مما يخبره السؤال. القِوامون المدرَّبون يستطيعون تعديل الزيارة خلال سبع ثوان من دخول الضيف."
        }
      },
      {
        title: { en: "The Gift of Discretion", ar: "هبة التحفُّظ" },
        body: {
          en: "The senior guest carries reputations, family obligations, business sensitivities. The brand's silence about these is itself the gift. Mentioning a guest's name in public, even praising them, can rupture a relationship.",
          ar: "يحمل الضيف الرفيع سُمعاً، التزامات عائلية، حساسيات مهنية. صمت العلامة عن هذه هو الهبة. ذكر اسم ضيف علناً، حتى بالثناء، قد يكسر علاقة."
        }
      },
      {
        title: { en: "Status Mirroring", ar: "مرآة المقام" },
        body: {
          en: "The brand never out-dresses its guest, never out-talks its guest, never out-spaces its guest. The custodian is calibrated to be one tone quieter than the guest's energy in the room. The room belongs to the guest.",
          ar: "العلامة لا تتفوّق على ضيفها لباساً، ولا حديثاً، ولا حضوراً. القِوام مُعَيَّر ليكون أهدأ بدرجة واحدة من طاقة الضيف في الغرفة. الغرفة للضيف."
        }
      },
      {
        title: { en: "The Memory Loop", ar: "حلقة الذاكرة" },
        body: {
          en: "What the guest mentions in passing is recorded — a son's school, a preferred fragrance, a forthcoming trip. On the next visit, the detail returns. Memory is the brand's most powerful luxury currency.",
          ar: "ما يذكره الضيف عَرَضاً يُسجَّل — مدرسة ابن، عطر مفضّل، سفرة قادمة. في الزيارة التالية، يعود التفصيل. الذاكرة هي أقوى عملة فاخرة تملكها العلامة."
        }
      }
    ],
    operations: {
      en: [
        "Custodians are trained in a 'silent observation' practice for the first three weeks of onboarding. They watch without serving, on the floor of a partner hotel, and write daily journals.",
        "The CRM has a 'private observations' field accessible only to senior leadership. Sensitive guest details — health, family, faith observance — live here, never in the general system.",
        "A weekly 'memory rehearsal' ritual: the operations director quizzes the senior custodians on three randomly selected guests' previously noted preferences.",
        "All guest-facing photography by partners is reviewed before use. Any image identifying a senior guest without explicit consent is destroyed, not archived.",
        "A formal 'do not name' list: guests who must never be referenced by name in any internal Slack, WhatsApp, or email. Anonymised codes only.",
        "Body language is observed not for compliance but for adjustment. A guest leaning back is being given five extra seconds before the next sentence. A guest leaning in is given the prepared offer earlier."
      ],
      ar: [
        "يُدرَّب القِوامون على \"ممارسة الملاحظة الصامتة\" خلال أول ثلاثة أسابيع من الانضمام. يراقبون دون أن يخدموا، في فندق شريك، ويكتبون يوميات يومية.",
        "في نظام إدارة علاقات العملاء حقل \"ملاحظات سرية\" متاح للقيادة العليا فقط. تفاصيل الضيوف الحساسة — صحة، عائلة، التزام ديني — تعيش هنا، لا في النظام العام.",
        "طقس \"تدريب الذاكرة\" الأسبوعي: يختبر مدير العمليات القِوامين الرفيعين في تفضيلات ثلاثة عملاء تُختار عشوائياً.",
        "تُراجَع كل صور الشركاء التي يظهر فيها الضيوف قبل الاستخدام. كل صورة تكشف هوية ضيف رفيع دون موافقة صريحة تُتلف، لا تُؤرشَف.",
        "قائمة رسمية \"لا تُذكَر بالاسم\": ضيوف يحظر ذكرهم باسمهم في أي سلاك أو واتساب أو إيميل داخلي. أكواد مجهولة فقط.",
        "تُرصد لغة الجسد لا للالتزام بل للتعديل. الضيف الذي يميل للخلف يُمنَح خمس ثوانٍ قبل الجملة التالية. الضيف الذي يميل للأمام يُقدَّم له العرض المُعَدّ مسبقاً مبكراً."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Hero plate — the moment of being seen", ar: "صورة الهيرو — لحظة أن يُرى المرء" },
        scene: {
          en: "Two empty deep-navy chairs facing each other in soft warm light, a low walnut table between them, a single porcelain Arabic coffee cup placed exactly equidistant. No people. The composition is the relationship.",
          ar: "كرسيان كحليان عميقان فارغان متقابلان في ضوء دافئ خفيف، طاولة جوز منخفضة بينهما، فنجان قهوة عربية خزفي مفرد موضوع على المسافة المنصفة تماماً. لا أشخاص. التكوين هو العلاقة."
        },
        mood: { en: "Symmetry. Equality of stature.", ar: "تماثل. مساواة في المقام." }
      },
      {
        slot: { en: "Companion — the discreet hand", ar: "صورة مرافقة — اليد المتحفِّظة" },
        scene: {
          en: "A custodian's hand, white-gloved, placing a small folded card on a cream linen tray. Soft side lighting. The hand is leaving, not arriving.",
          ar: "يد قِوام بقفاز أبيض، تضع بطاقة مطوية صغيرة على صينية كتان كريمية. إضاءة جانبية دافئة. اليد مغادرة لا مُقبِلة."
        },
        mood: { en: "Absence is the gift.", ar: "الغياب هو الهبة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Hire from observation, not from CV", ar: "وظِّف من الملاحظة لا من السيرة الذاتية" },
        body: {
          en: "Final interviews should include a one-hour silent observation in a lounge, with the candidate writing a single page describing what they noticed. Reveals temperament that a CV cannot.",
          ar: "يجب أن تتضمن المقابلات النهائية ساعة ملاحظة صامتة في صالة، يكتب فيها المرشّح صفحة واحدة عما لاحظ. تكشف هذا الطباع الذي لا تكشفه السيرة."
        }
      },
      {
        title: { en: "Codify a 'Memory Standard'", ar: "قنّن \"معيار الذاكرة\"" },
        body: {
          en: "Every member-tier guest is owed three recalled details on every visit. The standard is non-negotiable. Below this threshold, the brand has not earned the next renewal.",
          ar: "كل ضيف من فئة الأعضاء يستحق ثلاث تفاصيل مُسترجَعة في كل زيارة. المعيار غير قابل للتفاوض. ودون هذا الحدّ، لم تستحق العلامة التجديد التالي."
        }
      }
    ],
    manifesto: {
      en: "The deepest service is the one the guest never has to request — because we have already noticed.",
      ar: "أعمق خدمة هي تلك التي لم يطلبها الضيف — لأننا لاحظنا قبله."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "butler-experience",
    number: "09",
    group: G,
    eyebrow: { en: "Chapter Nine · The Custodian", ar: "الفصل التاسع · القِوام" },
    title: { en: "Butler Experience", ar: "تجربة البتلر" },
    subtitle: {
      en: "We do not employ butlers. We cultivate custodians.",
      ar: "نحن لا نوظّف بَتلَرَة. نحن نُربّي قُوّاماً."
    },
    lead: {
      en: "The English word 'butler' carries colonial associations that do not fit a Saudi luxury house. WOSOL uses 'custodian' (قِوام) — a word with depth, dignity, and Arabic resonance. A custodian is responsible for the equilibrium of a household, the dignity of a guest, and the discretion of a relationship. The role is not service; it is stewardship. The training, uniform, and even the gait of a custodian must reflect this elevation.",
      ar: "كلمة \"بتلر\" الإنجليزية تحمل دلالات استعمارية لا تناسب داراً سعودية فاخرة. تستخدم وصول \"قِوام\" — كلمة فيها عمق وكرامة وصدى عربي. القِوام مسؤول عن توازن البيت، كرامة الضيف، وتحفُّظ العلاقة. الدور ليس خدمة؛ هو رعاية. وعلى التدريب، الزي، حتى مشية القِوام أن تعكس هذا الارتفاع."
    },
    whyItMatters: {
      en: "The custodian is the brand made flesh. Every other asset — booth, scent, content — is a stage for the custodian to perform on. If the custodian is calibrated, the brand is unstoppable. If not, no amount of marble repairs the damage.",
      ar: "القِوام هو العلامة وقد تجسَّدت. كل أصل آخر — منصة، عطر، محتوى — هو خشبة يؤدي عليها القِوام. إذا كان القِوام مُعَيَّراً، فلا يُوقَف العلامة شيء. وإلا، فلا قدر من الرخام يصلح ما أُفسد."
        },
    pillars: [
      {
        title: { en: "The Three Tiers of Custodianship", ar: "ثلاث طبقات للقِوامة" },
        body: {
          en: "Junior custodian (booth-floor and operational support), Senior custodian (member-tier relationships and home visits), and Head of House (founder-tier and ultra-private engagements). Promotion is by demonstrated judgment, not by tenure.",
          ar: "قِوام مبتدئ (أرضية المنصة والدعم التشغيلي)، قِوام رفيع (علاقات فئة الأعضاء والزيارات المنزلية)، رئيس الدار (فئة المؤسسين والمشاركات السرية القصوى). الترقية بالحكم البرهاني، لا بالأقدمية."
        }
      },
      {
        title: { en: "Saudi Identity, Global Capability", ar: "هوية سعودية، قدرة عالمية" },
        body: {
          en: "The brand intentionally hires a majority of Saudi nationals — particularly senior Saudi women in member-facing roles — paired with seasoned international custodians from Aman, Four Seasons, and Quintessentially. The blend is the brand's defining hire profile.",
          ar: "تُوظِّف العلامة بوعي أغلبية سعودية — خصوصاً سعوديات في الأدوار التي تواجه الأعضاء — مع قِوامين دوليين خبراء من أمان، فور سيزنز، كوينتيسنشلي. هذا المزيج هو ملف توظيف العلامة المميَّز."
        }
      },
      {
        title: { en: "Composed, Never Stiff", ar: "مُتزن، لا متيبّس" },
        body: {
          en: "The custodian's posture is composed but human. The brand rejects the stiff, performative butler stance. The standard is 'a senior Saudi host in their own home' — warm, calm, present, never theatrical.",
          ar: "وقفة القِوام مُتّزنة لكنها إنسانية. ترفض العلامة الوقفة المتيبسة الاستعراضية للبتلر. المعيار هو \"مضيف سعودي رفيع في بيته\" — دافئ، هادئ، حاضر، غير مسرحي."
        }
      },
      {
        title: { en: "The Personal Library", ar: "المكتبة الشخصية" },
        body: {
          en: "Every custodian maintains a private journal of guest observations — written, on paper. The journal travels with them across promotions. It is the discipline that produces memory at scale.",
          ar: "يحتفظ كل قِوام بدفتر ملاحظات شخصي عن الضيوف — مكتوب يدوياً على ورق. يصاحبه الدفتر عبر ترقياته. هذا الانضباط هو ما يُنتج الذاكرة على نطاق."
        }
      }
    ],
    operations: {
      en: [
        "Custodian training is twelve weeks: four weeks observation, four weeks paired shadow service, four weeks supervised live service. No shortcut is permitted.",
        "Daily fifteen-minute pre-shift ritual: standing posture check, voice warm-up, breath drill, recite the three brand commitments.",
        "Custodians do not check their phones in front of guests. A single discreet earpiece is the only permitted device, used for operational coordination, never personal communication.",
        "Promotion case: a Senior Custodian's promotion requires the testimony of three current member-tier clients, gathered confidentially by the operations director.",
        "Annual 'ascent week' — every custodian spends one week in residence at a partner luxury hotel anywhere in the world, observing, learning, and journaling.",
        "Exit ritual: any custodian leaving the brand is honoured with a hand-written letter from the founder. The brand never burns a relationship — former custodians are alumni, not departures."
      ],
      ar: [
        "تدريب القِوام اثني عشر أسبوعاً: أربعة أسابيع ملاحظة، أربعة أسابيع خدمة مقترنة كظل، أربعة أسابيع خدمة حيّة تحت إشراف. لا يُسمَح بأي اختصار.",
        "طقس يومي مدته خمس عشرة دقيقة قبل المناوبة: فحص وقفة، إحماء صوت، تمرين تنفّس، استرجاع التزامات العلامة الثلاثة.",
        "لا يفحص القِوامون هواتفهم أمام الضيوف. سمّاعة أذن تَحفُّظية واحدة هي الجهاز المسموح به، وللتنسيق التشغيلي فقط، لا للتواصل الشخصي.",
        "ترقية القِوام الرفيع تستلزم شهادة ثلاثة عملاء حاليين من فئة الأعضاء، تُجمَع سرياً من مدير العمليات.",
        "\"أسبوع الصعود\" السنوي — يقضي كل قِوام أسبوعاً مقيماً في فندق فاخر شريك في أي مكان من العالم، يلاحظ ويتعلم ويكتب.",
        "طقس الخروج: أي قِوام يغادر العلامة يُكرَّم برسالة بخط اليد من المؤسس. العلامة لا تحرق علاقة — القِوامون السابقون خرّيجون، لا مغادرون."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The custodian portrait", ar: "البورتريه التحفُّظي للقِوام" },
        scene: {
          en: "A custodian photographed from behind, walking down a cream stone corridor, in a deep-navy bisht-cut overcoat with cream linen inner. No face visible. Calm, composed gait.",
          ar: "قِوام مُصوَّر من الخلف، يسير في ممر حجر كريمي، يرتدي معطفاً بقصّة بشت كحلية عميقة مع داخلية كتان كريمية. لا وجه ظاهر. مشية هادئة مُتّزنة."
        },
        mood: { en: "Quiet authority moving through the house.", ar: "سلطة هادئة تمشي في الدار." }
      },
      {
        slot: { en: "Hands and tray", ar: "اليدان والصينية" },
        scene: {
          en: "Close composition: a custodian's white-gloved hands carrying a polished walnut tray with a single porcelain Arabic coffee cup, a folded cream napkin, a single date in a tiny dish.",
          ar: "تكوين قريب: يدا قِوام بقفاز أبيض تحملان صينية جوز مصقولة عليها فنجان قهوة عربية خزفي مفرد، منديل كتان كريمي مطوي، تمرة واحدة في صحن صغير."
        },
        mood: { en: "The unit of service.", ar: "الوحدة الأساسية للخدمة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Promote 'House of Custodians' as a public asset", ar: "ادفع \"دار القِوامين\" بوصفها أصلاً علنياً" },
        body: {
          en: "Position the custodian profession in public dialogue as a Saudi luxury career — comparable to becoming an Aman GM. This is a cultural contribution as much as a recruitment lever.",
          ar: "ضع مهنة القِوام في الحوار العام بوصفها مهنة سعودية فاخرة — تُقارَن بمنصب مدير عام أمان. هذا إسهام ثقافي بقدر ما هو رافعة توظيف."
        }
      },
      {
        title: { en: "Refuse to scale headcount faster than culture", ar: "ارفض توسعة العدد أسرع من الثقافة" },
        body: {
          en: "A team that grows faster than the culture can train will dilute the brand within twelve months. Better to refuse new clients than to dilute the team.",
          ar: "الفريق الذي ينمو أسرع مما تستطيع الثقافة تدريبه يُذيب العلامة خلال اثني عشر شهراً. أفضل أن نرفض عملاء جدداً من أن نُذيب الفريق."
        }
      }
    ],
    manifesto: {
      en: "We do not hire staff. We elevate custodians.",
      ar: "لا نوظّف موظفين. نحن نرتفع بالقِوامين."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "hospitality-sop",
    number: "27",
    group: G,
    eyebrow: { en: "Chapter Twenty-Seven · The Discipline", ar: "الفصل السابع والعشرون · الانضباط" },
    title: { en: "Luxury Hospitality SOP", ar: "أنظمة التشغيل الموحَّدة للضيافة" },
    subtitle: {
      en: "Service consistency is the difference between a luxury brand and a luxury moment.",
      ar: "اتّساق الخدمة هو الفرق بين علامة فاخرة ولحظة فاخرة."
    },
    lead: {
      en: "Without written SOPs, a luxury brand cannot scale. Without philosophy underneath the SOPs, the SOPs become bureaucracy. WOSOL writes its SOPs as a hybrid — every procedure is preceded by the principle it serves, and every principle is anchored to the brand's three commitments. The result is a manual that custodians read with pride, not resentment. Each SOP is short, illustrated, and bilingual.",
      ar: "بدون أنظمة تشغيل مكتوبة، لا تستطيع علامة فاخرة أن تتسع. وبدون فلسفة تحت تلك الأنظمة، تصير الأنظمة بيروقراطية. تكتب وصول أنظمتها بأسلوب هجين — كل إجراء يسبقه المبدأ الذي يخدمه، وكل مبدأ مُرسى إلى التزامات العلامة الثلاثة. النتيجة دليل يقرأه القِوامون بكرامة، لا بضجر. كل بند قصير، مُصوَّر، ثنائي اللغة."
    },
    whyItMatters: {
      en: "SOPs are the only mechanism that preserves the brand when the founders are not in the room. They are the brand's voice when its founders cannot be present, and its discipline when its energy momentarily drops.",
      ar: "أنظمة التشغيل هي الآلية الوحيدة التي تحفظ العلامة حين لا يكون المؤسسون في الغرفة. هي صوت العلامة حين يغيب مؤسسوها، وانضباطها حين تنخفض طاقتها لحظة."
        },
    pillars: [
      {
        title: { en: "Principle Before Procedure", ar: "المبدأ قبل الإجراء" },
        body: {
          en: "Every SOP opens with the principle. The procedure is the principle made operational. Custodians who only memorise procedures break in edge cases. Custodians who internalise principles improvise correctly in any situation.",
          ar: "يبدأ كل نظام بالمبدأ. الإجراء هو المبدأ وقد صار تشغيلياً. القِوامون الذين يحفظون الإجراءات فقط يتعطّلون في الحالات الاستثنائية. الذين يستبطنون المبادئ يرتجلون بصحّة في أي حالة."
        }
      },
      {
        title: { en: "Bilingual, Illustrated, Short", ar: "ثنائي اللغة، مُصوَّر، قصير" },
        body: {
          en: "Every SOP fits on a single bound spread — Arabic on the right page, English on the left. A small line illustration accompanies each, drawn in cream and navy. The manual is itself a brand object.",
          ar: "كل نظام يتسع في صفحتين متقابلتين — العربية على اليمنى، الإنجليزية على اليسرى. رسم خطّي صغير يرافق كل بند، بألوان كريمية وكحلية. الدليل ذاته غرض علامة."
        }
      },
      {
        title: { en: "Living Document", ar: "وثيقة حيّة" },
        body: {
          en: "SOPs are versioned and re-printed annually. The version number is embossed on the cover. Old versions are not destroyed but archived. The team can see how the discipline has matured year over year.",
          ar: "أنظمة التشغيل لها أرقام إصدار وتُعاد طباعتها سنوياً. رقم الإصدار منقوش على الغلاف. لا تُتلف الإصدارات القديمة بل تُؤرشَف. يستطيع الفريق أن يرى كيف نضج الانضباط سنة بعد سنة."
        }
      },
      {
        title: { en: "SOP Index", ar: "فهرس الأنظمة" },
        body: {
          en: "Eight SOP chapters: Greeting, Coffee Service, Member Onboarding, Home Visit, Recovery, Discretion, Departure, Memory. Each chapter no longer than ten pages. Read in shift rotations so every custodian knows every chapter.",
          ar: "ثمانية فصول للأنظمة: الترحيب، خدمة القهوة، استقبال العضو، الزيارة المنزلية، الترميم، التحفُّظ، المغادرة، الذاكرة. لا يتجاوز كل فصل عشر صفحات. تُقرأ بالتناوب في المناوبات حتى يعرف كل قِوام كل فصل."
        }
      }
    ],
    operations: {
      en: [
        "Master SOP volume printed in 50 numbered copies. Each copy assigned to a custodian or senior staff member. Lost copies are reported to the founder personally.",
        "Quarterly 'SOP read-out' — one chapter is read aloud in the team's morning ritual, in both languages, on rotation.",
        "All proposed SOP edits enter a written submission process. Custodians who propose accepted edits are credited by name in the next version.",
        "An 'edge case log' — every situation that the existing SOP did not anticipate is logged within twenty-four hours, with the custodian's improvised solution. Reviewed monthly to revise the SOP.",
        "External audit: once a year, a senior hospitality consultant from outside the brand reads the SOPs against a peer-set (Aman, Quintessentially) and provides a written critique.",
        "SOP language is reviewed annually by a senior Arabic linguist. The brand's voice in Arabic is too important to leave to translation."
      ],
      ar: [
        "تُطبع نسخة الأنظمة الرئيسية في خمسين نسخة مرقَّمة. تُسلَّم كل نسخة لقِوام أو موظف رفيع. النسخ المفقودة تُبلَّغ للمؤسس شخصياً.",
        "\"قراءة الأنظمة\" ربع سنوية — يُقرأ فصل واحد بصوت عالٍ في الطقس الصباحي للفريق، باللغتين، بالتناوب.",
        "كل اقتراح تعديل على النظام يدخل عملية تقديم كتابية. القِوامون الذين تُقبَل اقتراحاتهم يُذكَرون بأسمائهم في الإصدار التالي.",
        "\"سجل الحالات الاستثنائية\" — كل وضع لم يتوقعه النظام يُسجَّل خلال أربع وعشرين ساعة، مع حلّ القِوام الارتجالي. يُراجَع شهرياً لتعديل النظام.",
        "تدقيق خارجي: مرّة سنوياً، مستشار ضيافة رفيع من خارج العلامة يقرأ الأنظمة في ضوء أقرانها (أمان، كوينتيسنشلي) ويقدم نقداً مكتوباً.",
        "تُراجَع لغة النظام عربيّاً سنوياً من لغوي رفيع. صوت العلامة بالعربية أهمّ من أن يُترك للترجمة."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The SOP volume", ar: "مجلَّد الأنظمة" },
        scene: {
          en: "A cream-linen-bound manual on a dark walnut desk, the cover embossed with 'Edition 01' in small champagne foil. A folded ribbon marker hangs from inside. No readable text on the cover.",
          ar: "دليل مُغلَّف بكتان كريمي على مكتب جوز داكن، غلافه منقوش بـ \"الإصدار الأول\" بورق شامبانيا صغير. خيط علامة مطوي يتدلى من داخله. لا نص مقروء على الغلاف."
        },
        mood: { en: "Doctrine as object.", ar: "العقيدة بوصفها غرضاً." }
      }
    ],
    recommendations: [
      {
        title: { en: "Treat SOPs as brand assets, not HR documents", ar: "اعتبر الأنظمة أصول علامة، لا وثائق موارد بشرية" },
        body: {
          en: "House the SOPs in the operations function and the brand function jointly. They are simultaneously what the team must do and what the brand believes.",
          ar: "ضع الأنظمة تحت العمليات والعلامة معاً. هي في آن واحد ما يجب أن يفعله الفريق وما تؤمن به العلامة."
        }
      }
    ],
    manifesto: {
      en: "Discipline is the only luxury that does not lose value over time.",
      ar: "الانضباط هو الفخامة الوحيدة التي لا تفقد قيمتها مع الزمن."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "staff-training",
    number: "28",
    group: G,
    eyebrow: { en: "Chapter Twenty-Eight · The Forge", ar: "الفصل الثامن والعشرون · المسبك" },
    title: { en: "Staff Training Psychology", ar: "علم نفس تدريب الفريق" },
    subtitle: {
      en: "We train for temperament first, technique second. Technique fades. Temperament remains.",
      ar: "ندرّب الطباع أولاً، التقنية ثانياً. التقنية تخفت. الطباع تبقى."
    },
    lead: {
      en: "Most hospitality training programmes are technique catalogues — tray-holding, glass-pouring, table-clearing. Those skills can be taught in two weeks. What cannot be taught in two weeks is composure, judgement, empathy, and discretion. WOSOL's training programme inverts the conventional priority and dedicates its first month to temperament, only afterwards moving to technique. The result is a custodian who can be trusted in unscripted situations.",
      ar: "أغلب برامج تدريب الضيافة كاتالوجات تقنية — حمل الصواني، سكب الكؤوس، إخلاء الطاولات. تلك المهارات تُدرَّس في أسبوعين. ما لا يُدرَّس في أسبوعين هو الرَّباطة، الحكم، التعاطف، التحفُّظ. يقلب برنامج وصول الأولوية التقليدية ويكرّس شهره الأول للطباع، ولا ينتقل للتقنية إلا بعدها. النتيجة قِوام يُؤتمَن في المواقف غير المُحضَّرة."
    },
    whyItMatters: {
      en: "Training is the brand's only true scaling mechanism. Booths, technology, partnerships are all bought. People are made. A trained team produces consistency that capital alone cannot purchase.",
      ar: "التدريب هو الآلية الوحيدة الحقيقية لتوسعة العلامة. المنصّات والتقنية والشراكات تُشترى. أما الناس فيُصنَعون. الفريق المُدرَّب يُنتج اتساقاً لا يستطيع رأس المال وحده شراءه."
        },
    pillars: [
      {
        title: { en: "Month One — Observation", ar: "الشهر الأول — الملاحظة" },
        body: {
          en: "Four weeks of supervised observation. No service tasks. Daily journaling. End-of-week composition essays in both Arabic and English. The output is a portfolio of seeing.",
          ar: "أربعة أسابيع ملاحظة تحت إشراف. لا مهام خدمة. يوميات يومية. مقالات نهاية الأسبوع بالعربية والإنجليزية. الناتج محفظة رؤية."
        }
      },
      {
        title: { en: "Month Two — Shadow", ar: "الشهر الثاني — الظل" },
        body: {
          en: "Paired with a senior custodian on every shift. Watches, supports, and writes. Begins to handle small operational tasks under direct sight.",
          ar: "مقترن بقِوام رفيع في كل مناوبة. يراقب، يدعم، يكتب. يبدأ في تولّي مهام تشغيلية صغيرة تحت نظر مباشر."
        }
      },
      {
        title: { en: "Month Three — Supervised Live", ar: "الشهر الثالث — حيّ تحت إشراف" },
        body: {
          en: "Handles full interactions but with a senior present in the booth. The senior intervenes only after a fault has occurred — and only in private, never in front of the guest.",
          ar: "يتولّى التفاعلات الكاملة لكن مع وجود رفيع في المنصة. الرفيع لا يتدخّل إلا بعد وقوع الخطأ — وعلى انفراد، لا أمام الضيف أبداً."
        }
      },
      {
        title: { en: "Continuous Education", ar: "تربية مستمرة" },
        body: {
          en: "After onboarding, every custodian completes two annual deep-learning weeks (one with a partner luxury house abroad, one with a master craftsman or artisan). The brand pays. Attendance is non-negotiable.",
          ar: "بعد الانضمام، يُكمل كل قِوام أسبوعَيْ تعلّم عميق سنوياً (واحد مع دار فاخرة شريكة في الخارج، واحد مع حِرَفي أو صانع رفيع). تدفع العلامة. الحضور غير قابل للتفاوض."
        }
      }
    ],
    operations: {
      en: [
        "Training is led personally by the COO and a senior 'Head of House' figure, not delegated to HR. Training is a brand function.",
        "An external acting coach is retained twice a year to work with custodians on voice, posture, and presence. Acting drills reduce nervous mannerisms.",
        "A library of fifty case studies (real and anonymised) is used for ethical and judgment training. Custodians debate the case studies in small groups.",
        "A senior Saudi cultural advisor reviews all training material to ensure no cultural mis-step in Arabic content, etiquette, or family-context training.",
        "A 'reading list' of six books — combining hospitality memoir, philosophy of attention, and Arabic literature — is assigned to every new hire. Discussion sessions monthly.",
        "Promotion to Senior Custodian requires submission of a written 'reflection on the year' — what they learned, where they failed, how they grew."
      ],
      ar: [
        "يقود التدريب شخصياً المدير التنفيذي للعمليات وشخصية رفيعة من \"رؤساء الدار\"، ولا يُفوَّض لقسم الموارد البشرية. التدريب وظيفة علامة.",
        "يُستعان بمدرّب تمثيل خارجي مرتين سنوياً ليعمل مع القِوامين على الصوت، الوقفة، الحضور. تمارين التمثيل تُقلِّل الحركات العصبية.",
        "مكتبة من خمسين دراسة حالة (حقيقية ومُجَهَّلة) تُستعمَل في تدريب الأخلاق والحكم. يناقش القِوامون الحالات في مجموعات صغيرة.",
        "مستشار ثقافي سعودي رفيع يراجع كل مادة تدريب لضمان عدم وقوع زلّة ثقافية في المحتوى العربي، الإتيكيت، تدريبات السياق العائلي.",
        "\"قائمة قراءة\" من ستة كتب — تجمع مذكرات ضيافة، فلسفة الانتباه، أدب عربي — تُكلَّف لكل موظف جديد. جلسات نقاش شهرية.",
        "ترقية القِوام الرفيع تستلزم تقديم \"تأمل في العام\" مكتوب — ما تعلمه، أين أخفق، كيف نضج."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Training plate", ar: "صورة التدريب" },
        scene: {
          en: "A training room with eight cream wool armchairs in a semi-circle, a single low walnut table at the centre with a folded napkin and a glass of water. Empty. Late-afternoon side light.",
          ar: "غرفة تدريب فيها ثمانية كراسي صوف كريمية في نصف دائرة، طاولة جوز منخفضة في الوسط عليها منديل مطوي وكأس ماء. فارغة. ضوء جانبي أصيل."
        },
        mood: { en: "The shape of attention.", ar: "هندسة الانتباه." }
      }
    ],
    recommendations: [
      {
        title: { en: "Resist 'fast-tracking'", ar: "قاوم \"المسار السريع\"" },
        body: {
          en: "Pressure to fast-track senior custodians will be constant — particularly during expansion windows. Resist. Twelve weeks is a brand standard, not a target.",
          ar: "سيكون الضغط لتسريع القِوامين الرفيعين مستمراً — خصوصاً في نوافذ التوسع. قاوم. اثنا عشر أسبوعاً معيار علامة، لا هدف."
        }
      }
    ],
    manifesto: {
      en: "We do not train hands. We shape temperaments.",
      ar: "لا ندرّب أيادي. نُشكِّل طِباعاً."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "butler-body-language",
    number: "29",
    group: G,
    eyebrow: { en: "Chapter Twenty-Nine · The Posture", ar: "الفصل التاسع والعشرون · الوقفة" },
    title: { en: "Butler Body Language", ar: "لغة جسد القِوام" },
    subtitle: {
      en: "Before any word is spoken, the body has already finished half the conversation.",
      ar: "قبل أن تُنطَق أي كلمة، يكون الجسد قد أنهى نصف الحوار."
    },
    lead: {
      en: "Body language at the luxury tier is not theatrical service. It is the absence of theatre. The custodian's stance, gait, hand position, and gaze are calibrated to communicate composure without performance. The aim is for the guest to feel held by the space and the person, without being able to articulate why. This chapter codifies the postural language so that it can be taught, observed, and corrected.",
      ar: "لغة الجسد في الطبقة الفاخرة ليست خدمة مسرحية. هي غياب المسرح. وقفة القِوام، مشيته، وضع يديه، ونظره معاير لتقول الرَّباطة دون استعراض. الهدف أن يشعر الضيف بالاحتواء من المكان والشخص، دون أن يستطيع تفسير السبب. يُقنِّن هذا الفصل اللغة الوقفيّة حتى تُدرَّس، وتُلاحَظ، وتُصحَّح."
    },
    whyItMatters: {
      en: "Body language is the only luxury asset that cannot be edited. A photograph can be retouched, copy can be re-written, a website can be relaunched — but a custodian's posture in the moment of arrival is permanent in the guest's memory.",
      ar: "لغة الجسد هي الأصل الفاخر الوحيد الذي لا يمكن تعديله. الصورة يمكن إعادة لمسها، النص يمكن إعادة كتابته، الموقع يمكن إعادة إطلاقه — لكن وقفة القِوام في لحظة الوصول دائمة في ذاكرة الضيف."
        },
    pillars: [
      {
        title: { en: "Composed Stillness", ar: "سكون مُتّزن" },
        body: {
          en: "The default stance is stillness — hands relaxed at the sides, shoulders down, gaze level but not direct, breath slow. The custodian does not 'wait'. They are present.",
          ar: "الوقفة الافتراضية سكون — يدان مرتاحتان بجانبَيْ الجسم، الكتفان منخفضان، النظر أفقي غير مباشر، النَفَس بطيء. القِوام لا \"ينتظر\". هو حاضر."
        }
      },
      {
        title: { en: "The Quarter Turn", ar: "ربع الالتفاتة" },
        body: {
          en: "When acknowledging a guest at distance, the custodian rotates the body a quarter turn and inclines the head slightly. Full body turns are reserved for direct address. This calibration prevents over-attention.",
          ar: "عند التحية على بُعد، يلتفت القِوام بربع التفاتة وينحني رأسه قليلاً. الالتفاتة الكاملة محفوظة للتخاطب المباشر. هذا المعيار يمنع الانتباه الزائد."
        }
      },
      {
        title: { en: "Hands as Instruments", ar: "اليدان كأداة" },
        body: {
          en: "Hands are always visible, never in pockets, never behind the back unless gloved. When carrying a tray, the non-dominant hand rests at hip height as a stabiliser. Trembling, fidgeting, finger-pointing are eliminated.",
          ar: "اليدان دائماً ظاهرتان، لا في جيب، لا خلف الظهر إلا إذا كانتا بقفازات. عند حمل الصينية، تستريح اليد غير المُسيطِرة عند مستوى الورك كموازِن. الارتعاش، الحركة العصبية، الإشارة بالإصبع، كلها مُلغاة."
        }
      },
      {
        title: { en: "The Departure Step", ar: "خطوة المغادرة" },
        body: {
          en: "When leaving a guest, the custodian takes one full step backwards before turning. This is the brand's signature departure. It communicates respect without performance.",
          ar: "عند مغادرة الضيف، يأخذ القِوام خطوة كاملة للوراء قبل أن يستدير. هذه خطوة المغادرة المميَّزة للعلامة. تقول الاحترام دون استعراض."
        }
      }
    ],
    operations: {
      en: [
        "Weekly posture drill — fifteen minutes, led by a senior custodian. Standing positions, departure step, tray carrying. Recorded on video monthly for self-review.",
        "An 'observation mirror' — a large unsigned mirror in the staff prep area. Custodians review their own posture before each shift.",
        "A small body of forbidden mannerisms: chewing gum, crossed arms in view of guests, leaning on walls, slouching, exaggerated bowing. Each carries a brand-violation note.",
        "Annual partnership with a movement coach (former dancer or theatre director) for advanced posture and grace work. Two days per year.",
        "Photography for the brand archive includes posture-only studies — custodians without faces, photographed for the way they stand.",
        "Posture is reviewed by the operations director during senior promotions. A custodian whose composure has slipped is not promoted, regardless of other strengths."
      ],
      ar: [
        "تدريب وقفة أسبوعي — خمس عشرة دقيقة، يقوده قِوام رفيع. وضعيات وقوف، خطوة المغادرة، حمل الصينية. يُسجَّل بالفيديو شهرياً للمراجعة الذاتية.",
        "\"مرآة الملاحظة\" — مرآة كبيرة بلا توقيع في منطقة تجهيز الفريق. يراجع القِوامون وقفتهم قبل كل مناوبة.",
        "قائمة صغيرة من العادات المحظورة: مضغ علكة، ضمّ اليدين أمام الصدر بمرأى الضيوف، الاتكاء على الجدران، التراخي، الانحناء المبالَغ فيه. كل عادة بمذكرة مخالفة علامة.",
        "شراكة سنوية مع مدرب حركة (راقص سابق أو مخرج مسرحي) لعمل وقفة متقدم وحضور أنيق. يومان في السنة.",
        "تصوير أرشيف العلامة يشمل دراسات وقفة فقط — قِوامون بلا وجوه، يُصوَّرون بطريقة وقوفهم.",
        "تُراجَع الوقفة من مدير العمليات في الترقيات الرفيعة. القِوام الذي تراجعت رَباطته لا يُرقّى مهما كانت نقاط قوته الأخرى."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Posture study", ar: "دراسة وقفة" },
        scene: {
          en: "A custodian in deep-navy attire standing at composed rest beside a cream stone column, photographed in profile, ambient warm light, no face visible.",
          ar: "قِوام بزي كحلي عميق يقف بسكون مُتّزن بجانب عمود حجر كريمي، مُصوَّر بنصف هيئة، إضاءة دافئة محيطة، لا وجه ظاهر."
        },
        mood: { en: "A column of two — one stone, one person.", ar: "عمودان — أحدهما حجر، الآخر شخص." }
      }
    ],
    recommendations: [
      {
        title: { en: "Hire posture coaches before sales coaches", ar: "وظّف مدربي وقفة قبل مدربي مبيعات" },
        body: {
          en: "A custodian with composure converts better than a custodian with scripts. Invest in movement coaching before pitch coaching.",
          ar: "القِوام صاحب الرَّباطة يحوّل أكثر من القِوام صاحب النصوص. استثمر في تدريب الحركة قبل تدريب المبيعات."
        }
      }
    ],
    manifesto: {
      en: "What we say is heard. How we stand is felt. How we stand stays.",
      ar: "ما نقوله يُسمَع. كيف نقف يُشعَر به. وكيف نقف يبقى."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "speech-guidelines",
    number: "30",
    group: G,
    eyebrow: { en: "Chapter Thirty · The Voice", ar: "الفصل الثلاثون · الصوت" },
    title: { en: "Luxury Speech Guidelines", ar: "إرشادات الحديث الفاخر" },
    subtitle: {
      en: "The brand has a written voice and a spoken voice. They must agree to the syllable.",
      ar: "للعلامة صوت مكتوب وصوت منطوق. ويجب أن يتفقا حتى المقطع."
    },
    lead: {
      en: "Speech is the highest-risk and highest-reward instrument the brand possesses. A perfectly written invitation can be undone by a single careless sentence at the door. WOSOL's speech guidelines codify how custodians speak in Arabic and English: tone, vocabulary, pace, register, the use of pauses, and the music of bilingual switching. The document is short, rehearsed weekly, and held in print.",
      ar: "الحديث هو أعلى أدوات العلامة مخاطرة وأعلاها مكافأة. دعوة مكتوبة بكمال يمكن أن تُهدَم بجملة واحدة مهملة عند الباب. تُقنِّن إرشادات وصول طريقة كلام القِوامين بالعربية والإنجليزية: النبرة، المفردات، الإيقاع، الطبقة، استخدام السكتات، وموسيقى التحوّل ثنائي اللغة. الوثيقة قصيرة، تُتدرَّب أسبوعياً، وتُحفظ مطبوعة."
    },
    whyItMatters: {
      en: "Speech is what the guest takes home in their memory. Long after the décor is forgotten, the cadence of the conversation remains. The voice is the brand's afterlife in the guest's mind.",
      ar: "الحديث هو ما يحمله الضيف إلى بيته في ذاكرته. بعد أن يُنسى الديكور بزمن طويل، يبقى إيقاع الحوار. الصوت هو امتداد العلامة في ذهن الضيف."
        },
    pillars: [
      {
        title: { en: "Arabic First, Always", ar: "العربية أولاً، دائماً" },
        body: {
          en: "Greetings, sign-offs, and the brand's hallmark phrases are spoken in Arabic by default, even with international guests. The switch to English is graceful, but the brand never opens in English.",
          ar: "التحيات، التوقيعات، وعبارات العلامة المميَّزة تُقال بالعربية افتراضياً، حتى مع الضيوف الدوليين. الانتقال للإنجليزية أنيق، لكن العلامة لا تفتتح بالإنجليزية أبداً."
        }
      },
      {
        title: { en: "Pace and Pause", ar: "إيقاع وسكتة" },
        body: {
          en: "Custodians speak slowly — slower than they think appropriate. The brand's pace is approximately twenty percent below conversational speed. Pauses are kept and not filled.",
          ar: "يتحدث القِوامون ببطء — أبطأ مما يظنون مناسباً. إيقاع العلامة يقلّ بنحو عشرين بالمئة عن السرعة الحوارية. السكتات تُحفَظ ولا تُملأ."
        }
      },
      {
        title: { en: "Vocabulary Discipline", ar: "انضباط المفردات" },
        body: {
          en: "The forbidden/preferred word list (from Chapter 16) is the operational backbone. Reviewed weekly. New words are added when observation shows new drift.",
          ar: "قائمة الكلمات المحظورة/المُفضَّلة (من الفصل ١٦) هي العمود التشغيلي. تُراجَع أسبوعياً. تُضاف كلمات جديدة حين تكشف الملاحظة انحرافاً جديداً."
        }
      },
      {
        title: { en: "Bilingual Music", ar: "موسيقى ثنائي اللغة" },
        body: {
          en: "When a custodian must switch languages mid-conversation, they do so on a natural breath, never mid-sentence. The transition is musical, not abrupt. Trained through repetition.",
          ar: "حين يضطر القِوام للتحوّل بين اللغتين خلال الحديث، يفعل ذلك على نَفَس طبيعي، لا في منتصف جملة. الانتقال موسيقي، لا قاطع. يُدرَّب عليه بالتكرار."
        }
      }
    ],
    operations: {
      en: [
        "A small bound 'House Voice' booklet, issued to every custodian, updated annually. The booklet is held in print, not stored in an app.",
        "Daily voice warm-up — five minutes — before each shift. Includes one Arabic and one English short tongue-twister.",
        "Every member-tier conversation is followed by a written internal note recording any noteworthy phrase used. Phrases that work are formalised into the booklet.",
        "Custodians are coached not to fill silence. A five-second pause for thought is a brand standard, not a failure.",
        "Use of slang, current internet phrases, English filler ('like', 'literally'), and Arabic colloquialism slips ('بصراحة', 'يعني') are observed and corrected.",
        "Annual recording of senior custodians at work (with consent) for internal language reference. New hires study the recordings during onboarding."
      ],
      ar: [
        "كتيب \"صوت الدار\" مجلَّد صغير، يُسلَّم لكل قِوام، يُحدَّث سنوياً. الكتيب مطبوع، لا مُخزَّن في تطبيق.",
        "إحماء صوتي يومي — خمس دقائق — قبل كل مناوبة. يشمل لسان عربي قصير وآخر إنجليزي.",
        "كل حوار مع عميل من فئة الأعضاء تتبعه مذكرة داخلية مكتوبة تسجّل أي جملة لافتة استُخدمَت. الجمل التي تنجح تُرسَّم في الكتيّب.",
        "يُدرَّب القِوامون على عدم ملء الصمت. سكتة خمس ثوانٍ للتفكير معيار علامة، لا فشل.",
        "تُلاحَظ وتُصحَّح زلّات الكلام الدارج، عبارات الإنترنت الراهنة، حشو إنجليزي (\"like\", \"literally\")، وزلّات عامية عربية (\"بصراحة\"، \"يعني\").",
        "تسجيل سنوي للقِوامين الرفيعين أثناء العمل (بموافقتهم) كمرجع لغوي داخلي. يدرس الموظفون الجدد التسجيلات خلال الانضمام."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The voice booklet", ar: "كتيب الصوت" },
        scene: {
          en: "A small cream-bound notebook on a navy linen cloth, open to a page divided by a champagne hairline — Arabic on one side, English on the other. A fountain pen rests across the top.",
          ar: "دفتر صغير مغلَّف بكريمي على قماش كتان كحلي، مفتوح على صفحة مقسومة بخيط شامبانيا — العربية في جانب والإنجليزية في الآخر. قلم حبر يستريح على الأعلى."
        },
        mood: { en: "Voice as document.", ar: "الصوت بوصفه وثيقة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Hire a senior Arabic linguistic consultant", ar: "وظّف مستشاراً لغوياً عربياً رفيعاً" },
        body: {
          en: "The brand's Arabic voice is too important to be drafted in the operations team. A part-time senior linguist reviews quarterly and protects the register.",
          ar: "صوت العلامة العربي أهم من أن يُصاغ في فريق العمليات. لغوي رفيع بدوام جزئي يراجع ربعياً ويحمي الطبقة."
        }
      }
    ],
    manifesto: {
      en: "When we speak, we mean every syllable. When we are silent, we mean that too.",
      ar: "حين نتكلم، نقصد كل مقطع. وحين نصمت، نقصد ذلك أيضاً."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "children-interaction",
    number: "36",
    group: G,
    eyebrow: { en: "Chapter Thirty-Six · The Youngest Guest", ar: "الفصل السادس والثلاثون · الضيف الأصغر" },
    title: { en: "Children Luxury Interaction Strategy", ar: "استراتيجية التفاعل مع الأطفال" },
    subtitle: {
      en: "How we treat a six-year-old at the booth shapes the loyalty of a family for three decades.",
      ar: "طريقة معاملتنا لطفل في السادسة تُشكِّل ولاء عائلة لثلاثة عقود."
    },
    lead: {
      en: "In Saudi households, the child is at the centre of the family's emotional decisions. A custodian who treats a child with the same dignity afforded the parent earns a relationship that purchases decades of loyalty. Inversely, a custodian who treats a child as a logistical inconvenience risks the parent withdrawing the entire family from the brand. WOSOL designs a dedicated, deeply considered protocol for children — never childish, always dignified.",
      ar: "في البيوت السعودية، الطفل في مركز قرارات العائلة العاطفية. القِوام الذي يعامل الطفل بنفس الكرامة التي يعامل بها الوالد يكسب علاقة تشتري عقوداً من الولاء. وبالعكس، القِوام الذي يعامل الطفل كإزعاج لوجستي يُجازف بانسحاب العائلة كلها من العلامة. تصمم وصول بروتوكولاً مُكرَّساً عميقاً للأطفال — لا طفولياً أبداً، بل مكرَّماً دائماً."
    },
    whyItMatters: {
      en: "Children's interactions are remembered far longer than adult ones. A senior family will refer WOSOL to a peer family on the strength of how their son or daughter was greeted at the booth. This is one of the highest-leverage interactions in the brand.",
      ar: "تفاعلات الأطفال تُذكَر أطول بكثير من تفاعلات البالغين. عائلة رفيعة ستحيل وصول إلى عائلة من أقرانها بناءً على كيف رُحِّب بابنها أو ابنتها عند المنصة. هذا من أعلى التفاعلات نفوذاً في العلامة."
        },
    pillars: [
      {
        title: { en: "Eye-Level Greeting", ar: "تحية على مستوى النظر" },
        body: {
          en: "The custodian kneels or crouches to meet the child at eye level — not as a performance, but as a courtesy. A child greeted at the chest height of an adult learns to feel small. A child greeted at eye level learns to feel seen.",
          ar: "يجلس القِوام أو ينحني ليلتقي بالطفل عند مستوى النظر — لا استعراضاً بل أدباً. الطفل الذي يُحيَّى عند صدر الكبير يتعلَّم الشعور بالصِغَر. الطفل الذي يُحيَّى عند مستوى نظره يتعلم الشعور بأنه مرئيّ."
        }
      },
      {
        title: { en: "Children's Object", ar: "غرض الطفل" },
        body: {
          en: "Every visiting child receives a small composed object — a cream-bound notebook with their name written in by hand, a small ceramic figurine, a folded card. Never a candy, never a plastic toy, never a logoed item.",
          ar: "يحصل كل طفل زائر على غرض مُؤلَّف صغير — دفتر مغلَّف بكريمي عليه اسمه بخط اليد، تمثال خزفي صغير، بطاقة مطوية. لا حلوى، لا لعبة بلاستيكية، لا غرض مُعَلَّم."
        }
      },
      {
        title: { en: "Parent Acknowledgement", ar: "الإقرار للوالد" },
        body: {
          en: "After greeting the child, the custodian acknowledges the parent with a slight inclination of the head, communicating: 'I will not bypass you, but I will honour your child.' This sequence is essential.",
          ar: "بعد تحية الطفل، يُقِرّ القِوام للوالد بانحناءة رأس خفيفة، تقول: \"لن أتجاوزك، لكني سأكرّم طفلك\". هذا التتابع أساسي."
        }
      },
      {
        title: { en: "Discretion About the Child", ar: "تحفُّظ عن الطفل" },
        body: {
          en: "Photographs of children are never taken, never archived. Their names are never referenced in any communication unless explicitly invited by the parent. The brand's discretion extends younger.",
          ar: "صور الأطفال لا تُلتقَط أبداً، لا تُؤرشَف. أسماؤهم لا تُذكَر في أي مراسلة إلا بدعوة صريحة من الوالد. تحفُّظ العلامة يمتد للأصغر."
        }
      }
    ],
    operations: {
      en: [
        "Stock of children's objects is maintained discreetly behind the writing desk. Refreshed weekly. Each object is reviewed by the operations director before stocking.",
        "Custodians complete a one-day training on Saudi child etiquette, family dynamics, and culturally appropriate forms of address (with a senior cultural advisor).",
        "A 'family file' in the CRM logs the names and ages of children in member-tier households. This file is locked — accessible only to the senior custodian and operations director.",
        "If a child's name is to be used (e.g., on a notebook), the parent's explicit consent is sought first, in person or by message.",
        "Children's beverages are prepared with the same composure as adult ones — porcelain, not plastic. No paper straws unless requested.",
        "Annual review of children-protocol effectiveness: anonymised feedback from member-tier parents."
      ],
      ar: [
        "مخزون أغراض الأطفال يُحفَظ بتحفُّظ خلف مكتب الكتابة. يُجدَّد أسبوعياً. كل غرض يُراجَع من مدير العمليات قبل التخزين.",
        "يُكمل القِوامون تدريباً ليوم واحد على آداب الأطفال في السياق السعودي، ديناميات العائلة، وصيغ المخاطبة الثقافية المناسبة (مع مستشار ثقافي رفيع).",
        "\"ملف عائلي\" في نظام إدارة علاقات العملاء يسجّل أسماء وأعمار الأطفال في بيوت فئة الأعضاء. الملف مُقفَل — متاح للقِوام الرفيع ومدير العمليات فقط.",
        "إذا كان اسم الطفل سيُستخدَم (على دفتر مثلاً)، تُطلب موافقة الوالد الصريحة أولاً، شخصياً أو بمراسلة.",
        "تُحضَّر مشروبات الأطفال بنفس الرَّباطة التي تُحضَّر بها مشروبات الكبار — خزف لا بلاستيك. لا شفّاطات ورقية إلا عند الطلب.",
        "مراجعة سنوية لفاعلية بروتوكول الأطفال: ملاحظات مُجهَّلة من والدي فئة الأعضاء."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The child's object", ar: "غرض الطفل" },
        scene: {
          en: "A small cream-bound notebook on a walnut tray, a single brass clip holding a folded card inside, the name page handwritten in cream ink (illegible). No child visible.",
          ar: "دفتر صغير مغلَّف بكريمي على صينية جوز، مشبك نحاسي مفرد يثبّت بطاقة مطوية بالداخل، صفحة الاسم بحبر كريمي مكتوب يدوياً (غير واضح). لا طفل ظاهر."
        },
        mood: { en: "Dignity in miniature.", ar: "كرامة مصغَّرة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Treat the children's protocol as a brand pillar", ar: "اعتبر بروتوكول الأطفال ركيزة علامة" },
        body: {
          en: "Most luxury brands treat children as exceptions. WOSOL must treat them as a designed audience with their own protocol, their own objects, their own respect.",
          ar: "أغلب العلامات الفاخرة تعامل الأطفال بوصفهم استثناءات. على وصول أن تعاملهم بوصفهم جمهوراً مُصمَّماً، له بروتوكوله، أغراضه، احترامه."
        }
      }
    ],
    manifesto: {
      en: "How we greet a child is how we are remembered as a brand.",
      ar: "طريقة تحيتنا للطفل هي طريقة تذكُّرنا كعلامة."
    }
  }
];
