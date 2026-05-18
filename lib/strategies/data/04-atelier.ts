import type { Strategy } from "../types";

const G = { en: "Atelier", ar: "الورشة" };

export const ATELIER_CHAPTERS: Strategy[] = [
  // ──────────────────────────────────────────────────────────
  {
    slug: "uniform-strategy",
    number: "08",
    group: G,
    eyebrow: { en: "Chapter Eight · The Cut", ar: "الفصل الثامن · القَصّة" },
    title: { en: "Uniform Strategy", ar: "استراتيجية الزي" },
    subtitle: {
      en: "The custodian is the brand made visible. The uniform is the brand made wearable.",
      ar: "القِوام هو العلامة وقد ظهرت. الزي هو العلامة وقد صارت تُلبَس."
    },
    lead: {
      en: "Hospitality uniforms collapse into three categories: corporate (the tray-and-tie of mid-tier hotels), costume (the over-styled servility of theme-park luxury), or atelier (tailored, refined, modern, with a national signature). WOSOL belongs in the third category. The uniform is designed as a Saudi-rooted tailored garment in cream and deep navy, with refined detailing that reads as quiet luxury — never traditional cosplay, never imported colonial butler dress.",
      ar: "ينقسم الزي الفندقي إلى ثلاث فئات: مؤسسي (صينية وربطة عنق فنادق الطبقة المتوسطة)، تنكّري (الخدمة المبالَغ بها في فخامة المدن الترفيهية)، أو ورشة تصميم (قَصّة، رقيّ، حداثة، بتوقيع وطني). تنتمي وصول للفئة الثالثة. الزي مُصمَّم بوصفه قطعة سعودية الجذور بقَصّة دقيقة بألوان كريمية وكحلية عميقة، بتفاصيل دقيقة تُقرأ بوصفها فخامة هادئة — لا أزياء تراثية تنكرية، ولا زي بتلر استعماري مستورد."
    },
    whyItMatters: {
      en: "The uniform is the most photographed asset in the brand. Every photo, video, and live encounter places it at the foreground. Its design must be more deliberate than any logo system.",
      ar: "الزي هو أكثر أصول العلامة تصويراً. كل صورة، فيديو، ولقاء حيّ يضعه في المقدمة. تصميمه يجب أن يكون أكثر إعمالاً من أي منظومة شعار."
        },
    pillars: [
      {
        title: { en: "A Tailored Saudi Silhouette", ar: "قَصّة سعودية مُفصَّلة" },
        body: {
          en: "The senior custodian's uniform reinterprets a bisht-inspired long coat in deep navy fine wool with a soft cream linen inner. No traditional cosplay — the proportions are modern, the cut is slim, the fabric is unmistakably contemporary.",
          ar: "زي القِوام الرفيع يُعيد تفسير معطف بقصّة بشت بطول مناسب من صوف ناعم كحلي عميق مع داخلية كتان كريمية ناعمة. لا أزياء تراثية تنكرية — النِسَب حديثة، القَصّة ضيقة، القماش معاصر بلا لبس."
        }
      },
      {
        title: { en: "Two Tones, One Trim", ar: "لونان، خيط واحد" },
        body: {
          en: "Cream and deep navy as the two base tones. A single muted champagne brass thread or button as the only metallic accent. Nothing else. The discipline of restraint communicates the brand without a logo.",
          ar: "كريمي وكحلي عميق لونَا الأساس. خيط نحاسي شامبانيا خافت أو زر واحد بوصفه الإكسسوار المعدني الوحيد. لا شيء غيره. انضباط ضبط النفس يُبلِّغ العلامة بدون شعار."
        }
      },
      {
        title: { en: "Female Senior Uniform", ar: "زي القِوامة الرفيعة" },
        body: {
          en: "For senior Saudi female custodians, a refined long-line tailored garment in the same palette, designed with cultural respect and modern Saudi luxury intent. Developed with a senior Saudi female fashion house in partnership.",
          ar: "للقِوامات السعوديات الرفيعات، قطعة مُفصَّلة طويلة بنفس درجات الألوان، مُصمَّمة باحترام ثقافي ورؤية فخامة سعودية حديثة. تُطوَّر بشراكة مع دار أزياء سعودية رفيعة."
        }
      },
      {
        title: { en: "No Visible Branding", ar: "لا تعليم ظاهر" },
        body: {
          en: "Embroidered logos, name tags, or visible badges are not used. A small interior label, signed by the founder of the partner atelier, is the only mark. The custodian is the mark.",
          ar: "لا شعارات مطرَّزة، بطاقات أسماء، أو شارات ظاهرة. علامة داخلية صغيرة، يوقّعها مؤسس ورشة الشراكة، هي العلامة الوحيدة. القِوام هو العلامة."
        }
      }
    ],
    operations: {
      en: [
        "Uniforms are commissioned from a single Saudi senior atelier (male) and a single senior Saudi female fashion house. Each uniform is bespoke-fitted per custodian.",
        "Two uniforms per custodian, plus one reserve in the operations cupboard. Daily uniform laundering by a curated specialty cleaner. Same-day press standard.",
        "A 'wear discipline' code: shoes polished daily, gloves changed twice per shift, scent applied lightly. No personal jewellery beyond the brand-issued lapel piece.",
        "Annual collection refresh — the uniform evolves once a year, never more. The brand publishes a 'New Edition' announcement only internally.",
        "Custodians retain their uniforms on departure as a gesture of dignity (after a final inventory check). Returning them is not a brand standard.",
        "A protected sample archive: one uniform from every edition is preserved in cream cotton dust covers in the brand's archive."
      ],
      ar: [
        "تُكلَّف الأزياء من ورشة سعودية رفيعة واحدة (للرجال) ودار أزياء سعودية رفيعة واحدة (للنساء). كل زي مُفصَّل خصيصاً لكل قِوام.",
        "زيّان لكل قِوام، مع زي احتياطي في خزانة العمليات. غسيل يومي عبر مغسلة متخصصة مُنتقاة. معيار الكي في اليوم نفسه.",
        "كود \"انضباط الإرتداء\": حذاء يُلمَّع يومياً، قفازان يُغيَّران مرتين في المناوبة، عطر يُرشّ بخفّة. لا حلي شخصية بعيداً عن قطعة العلامة على الياقة.",
        "تحديث المجموعة سنوي — يتطوّر الزي مرة في السنة، لا أكثر. تُعلن العلامة \"إصدار جديد\" داخلياً فقط.",
        "يحتفظ القِوامون بأزيائهم عند المغادرة بوصفها بادرة كرامة (بعد جرد نهائي). إعادتها ليست معياراً.",
        "أرشيف عيّنات محمي: زي واحد من كل إصدار يُحفَظ في أغطية قطن كريمية في أرشيف العلامة."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "Uniform plate — back view, walking", ar: "صورة الزي — منظر خلفي، أثناء المشي" },
        scene: {
          en: "Senior custodian in deep-navy bisht-cut overcoat with cream linen inner, photographed from behind walking down a cream stone corridor in warm side light. No face visible.",
          ar: "قِوام رفيع بمعطف بقصّة بشت كحلي عميق مع داخلية كتان كريمية، مُصوَّر من الخلف يسير في ممر حجر كريمي بضوء جانبي دافئ. لا وجه ظاهر."
        },
        mood: { en: "Tailoring as identity.", ar: "القَصّة بوصفها هوية." }
      },
      {
        slot: { en: "Detail — interior label", ar: "تفصيل — العلامة الداخلية" },
        scene: {
          en: "Close composition of a folded uniform showing the cream interior label embossed with the brand mark and a hand-numbered signature, on a navy linen surface.",
          ar: "تكوين قريب لزي مطوي يُظهر العلامة الداخلية الكريمية المنقوشة بعلامة العلامة وتوقيع مُرقَّم يدوياً، على سطح كتان كحلي."
        },
        mood: { en: "Signature without display.", ar: "توقيع بلا عرض." }
      }
    ],
    recommendations: [
      {
        title: { en: "Publish a 'Uniform Year' campaign internally only", ar: "اطلق حملة \"عام الزي\" داخلياً فقط" },
        body: {
          en: "Once per year, photograph the new edition with one celebrated Saudi photographer. The campaign is private — sent to members only, with no public release. The privacy itself is the campaign.",
          ar: "مرة في السنة، يُصوَّر الإصدار الجديد مع مصوّر سعودي محتفى به. الحملة خاصة — تُرسَل للأعضاء فقط، دون نشر علني. الخصوصية ذاتها هي الحملة."
        }
      },
      {
        title: { en: "Partner with the Saudi fashion ecosystem", ar: "اشترك مع منظومة الأزياء السعودية" },
        body: {
          en: "Commissioning uniforms from senior Saudi houses positions WOSOL inside the Saudi luxury fashion community — a strategic asset for partnership, recruitment, and cultural credibility.",
          ar: "تكليف الأزياء من دور سعودية رفيعة يضع وصول داخل مجتمع الأزياء السعودية الفاخر — أصل استراتيجي للشراكة، التوظيف، والمصداقية الثقافية."
        }
      }
    ],
    manifesto: {
      en: "The uniform is not what custodians wear. It is what they answer to.",
      ar: "الزي ليس ما يلبسه القِوامون. هو ما يُحاسَبون عليه."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "scent-strategy",
    number: "10",
    group: G,
    eyebrow: { en: "Chapter Ten · The Atmosphere", ar: "الفصل العاشر · الهواء" },
    title: { en: "Luxury Scent Strategy", ar: "استراتيجية العطر" },
    subtitle: {
      en: "Memory is scent-led. A signature scent is the brand's longest-lasting touch on the guest.",
      ar: "الذاكرة تقودها الروائح. عطر مميَّز هو أطول لمسة تبقى من العلامة في الضيف."
    },
    lead: {
      en: "A signature scent is engineered, not chosen. WOSOL commissions a Saudi-rooted bespoke scent from a senior perfumer, with three layered notes that map to the brand's three commitments: oud (rooted, Saudi, soul), cardamom (anticipation, warmth, hospitality), and sandalwood (composure, longevity, restraint). The scent is diffused at the booth, layered into all printed objects, and used in member-tier home visits. It is the brand's most invisible asset and its most persistent.",
      ar: "العطر المميَّز يُهنْدَس، لا يُختار. تكلِّف وصول مُركِّباً سعودي الجذور بصناعة عطر خاص من مُركِّب عطور رفيع، بثلاث طبقات تُحاكي التزامات العلامة الثلاثة: العود (الجذور، السعودية، الروح)، الهيل (الاستباق، الدفء، الضيافة)، الصندل (الرَّباطة، البقاء، ضبط النفس). يُنشَر العطر في المنصة، يُطبَّق على كل الأغراض المطبوعة، ويُستعمَل في زيارات بيوت فئة الأعضاء. هو الأصل الأكثر خفاء والأطول بقاء."
    },
    whyItMatters: {
      en: "Sight fades, sound fades, but scent travels into long-term memory. Years after a guest has stopped engaging with the brand, the scent will bring it back. There is no marketing channel with this half-life.",
      ar: "البصر يَخفت، الصوت يَخفت، لكن العطر يدخل الذاكرة الطويلة. بعد سنوات من توقف الضيف عن التعامل مع العلامة، يعيدها العطر. لا قناة تسويقية بعمر زمني كهذا."
        },
    pillars: [
      {
        title: { en: "A Saudi-Rooted Composition", ar: "تركيبة سعودية الجذور" },
        body: {
          en: "Oud — the heart of Saudi olfactory identity — is the anchor note. It cannot be replaced by a Western alternative without losing the brand's Saudi authority.",
          ar: "العود — قلب الهوية العطرية السعودية — هو نوتة الارتساء. لا يمكن استبداله ببديل غربي دون خسارة سلطة العلامة السعودية."
        }
      },
      {
        title: { en: "Three Diffusion Tiers", ar: "ثلاث طبقات نشر" },
        body: {
          en: "Booth tier (a continuous ambient diffusion), Object tier (printed papers and envelopes lightly scented), and Member tier (the full bespoke perfume used in member home visits and gift sets).",
          ar: "طبقة المنصة (نشر محيطي متواصل)، طبقة الأغراض (الأوراق والظروف المطبوعة معطَّرة بخفّة)، طبقة الأعضاء (العطر الخاص الكامل في زيارات الأعضاء وأطقم الهدايا)."
        }
      },
      {
        title: { en: "The Scent Bottle as Gift", ar: "زجاجة العطر كهدية" },
        body: {
          en: "A small bespoke 30ml bottle is produced as an annual gift for senior members. The bottle itself is a brand object — cream glass, deep navy stopper, a sealed wax detail on the box.",
          ar: "زجاجة خاصة صغيرة بحجم ٣٠ مل تُنتَج هدية سنوية لكبار الأعضاء. الزجاجة بحد ذاتها غرض علامة — زجاج كريمي، سدّادة كحلية عميقة، تفصيل شمع مختوم على العلبة."
        }
      },
      {
        title: { en: "Diffusion Discipline", ar: "انضباط النشر" },
        body: {
          en: "The booth's scent intensity is measured weekly with a hand-held instrument and held within a narrow target. Over-diffusion is as much a failure as absence.",
          ar: "تُقاس شدة العطر في المنصة أسبوعياً بجهاز محمول وتُحفَظ ضمن هدف ضيق. النشر المُفرِط فشلٌ كغياب النشر تماماً."
        }
      }
    ],
    operations: {
      en: [
        "The signature scent is composed in collaboration with a senior Saudi perfumer (e.g., from Riyadh's emerging niche perfumery scene). Exclusive licensing — the perfumer cannot produce a similar scent for any other client.",
        "Scent is layered into invitations, member envelopes, and the launch booklet, applied by a dedicated 'objects atelier' room in the operations facility.",
        "Booth diffusion runs on a programmable system, calibrated to release strongest forty minutes before peak hours and ease before closing.",
        "A 'scent journal' kept by the senior custodian on shift — any guest comment about scent is logged for future composition adjustment.",
        "Annual review with the perfumer. The scent may evolve within a one-percent boundary year over year. It does not change.",
        "An emergency 'unscented day' protocol — for members with allergies or sensitivities, the booth runs scent-free with no operational disruption."
      ],
      ar: [
        "يُؤلَّف العطر المميَّز بتعاون مع مُركِّب سعودي رفيع (مثلاً من مشهد العطور النيش الناشئ في الرياض). ترخيص حصري — لا يستطيع المُركِّب إنتاج عطر مماثل لأي عميل آخر.",
        "يُطبَّق العطر على الدعوات، أظرف الأعضاء، وكتيب الإطلاق، من غرفة \"ورشة أغراض\" مخصصة في منشأة العمليات.",
        "نشر العطر في المنصة يعمل عبر نظام مُبرمَج، مُعَيَّر ليطلق الشدّة الأقوى قبل ساعات الذروة بأربعين دقيقة ويخفت قبل الإغلاق.",
        "\"يومية العطر\" يحتفظ بها القِوام الرفيع في المناوبة — أي تعليق ضيف عن العطر يُسجَّل لتعديل تركيبة مستقبلية.",
        "مراجعة سنوية مع المُركِّب. يمكن أن يتطوَّر العطر ضمن حدود ١٪ من سنة لأخرى. لا يتغيَّر.",
        "بروتوكول \"يوم بلا عطر\" للحالات الطارئة — للأعضاء أصحاب الحساسيات، تعمل المنصة بلا عطر دون خلل تشغيلي."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The bottle plate", ar: "صورة الزجاجة" },
        scene: {
          en: "A single 30ml cream glass scent bottle with a deep-navy stopper on a polished walnut tray, a folded cream linen square beside it. Soft warm side light. No labels readable.",
          ar: "زجاجة عطر مفردة بحجم ٣٠ مل من زجاج كريمي بسدّادة كحلية عميقة على صينية جوز مصقولة، مربع كتان كريمي مطوي بجوارها. ضوء جانبي دافئ خفيف. لا ملصقات مقروءة."
        },
        mood: { en: "Memory in glass.", ar: "ذاكرة في زجاج." }
      },
      {
        slot: { en: "The atmosphere plate", ar: "صورة الجو" },
        scene: {
          en: "A wide composition of the booth's threshold at dusk, faint visible diffusion from a discreet vent, deep shadow at the edges, cream stone glowing under warm light.",
          ar: "تكوين عريض لعتبة المنصة عند الغسق، نشر خفيف ظاهر من فتحة تحفُّظية، ظلّ عميق عند الحواف، حجر كريمي يتوهج تحت ضوء دافئ."
        },
        mood: { en: "The air the brand breathes.", ar: "الهواء الذي تتنفسه العلامة." }
      }
    ],
    recommendations: [
      {
        title: { en: "Trademark the formulation in the GCC", ar: "سجِّل التركيبة في دول الخليج" },
        body: {
          en: "Protect the scent formally. Without exclusivity, the brand's most distinctive sensory asset becomes copyable by any competitor with a perfumer on retainer.",
          ar: "احمِ العطر رسمياً. بدون حصرية، يصير أكثر أصول العلامة الحسّية تميُّزاً قابلاً للنسخ من أي منافس عنده مُركِّب عطور."
        }
      },
      {
        title: { en: "Develop a 'home scent' product later", ar: "طوّر منتج \"عطر منزل\" لاحقاً" },
        body: {
          en: "After year two, extend the scent into a candle and a room diffuser priced as a member benefit — never sold publicly. Extends brand presence into member homes daily.",
          ar: "بعد السنة الثانية، وسّع العطر إلى شمعة ومنتشر غرفة بتسعير ميزة عضوية — لا يُباعان علناً. يمدّان حضور العلامة إلى بيوت الأعضاء يومياً."
        }
      }
    ],
    manifesto: {
      en: "Of all the brand's senses, scent will outlive the brand's words.",
      ar: "من بين حواس العلامة جميعاً، العطر هو من سيبقى بعد أن تختفي كلماتها."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "sound-atmosphere",
    number: "11",
    group: G,
    eyebrow: { en: "Chapter Eleven · The Hearing", ar: "الفصل الحادي عشر · السمع" },
    title: { en: "Sound & Atmosphere", ar: "الصوت والجو" },
    subtitle: {
      en: "What we play is less important than what we choose not to play.",
      ar: "ما نُشغِّله أقل أهمية مما نختار ألا نشغِّله."
    },
    lead: {
      en: "Sound is the most overlooked luxury asset. Mall environments are sonically harsh — lift dings, retail jingles, escalator hum, distant music from competing storefronts. WOSOL's booth must be a sonic island. The brand commissions a custom sound design — eight to ten ambient pieces composed for the brand — that play softly enough to be perceived as silence, but loud enough to mask the surrounding mall.",
      ar: "الصوت هو الأصل الفاخر الأكثر إهمالاً. بيئات المراكز قاسية صوتياً — رنين المصاعد، أناشيد المتاجر، أزيز السلالم، موسيقى بعيدة من واجهات منافسة. يجب أن تكون منصة وصول جزيرة صوتية. تكلِّف العلامة تصميماً صوتياً مخصصاً — ثماني إلى عشر مقطوعات أمبيانس مُؤلَّفة للعلامة — تعمل بهدوء يُدرَك بوصفه صمتاً، لكن بقوة تكفي لحجب صوت المركز المحيط."
    },
    whyItMatters: {
      en: "Sound is the only sensory layer that can either earn or destroy a luxury moment in a fraction of a second. A wrong song can break the spell more decisively than a wrong word.",
      ar: "الصوت هو الطبقة الحسّية الوحيدة التي تستطيع كسب أو تدمير لحظة فاخرة في جزء من الثانية. أغنية خاطئة تكسر السحر أكثر حسماً من كلمة خاطئة."
        },
    pillars: [
      {
        title: { en: "Bespoke, Not Spotify", ar: "مُؤلَّف، لا سبوتيفاي" },
        body: {
          en: "The brand never uses streaming services. A composer or sound designer creates a bespoke ten-piece library, one piece per week of the year, looped within the brand's sonic identity.",
          ar: "العلامة لا تستخدم خدمات البث. مُؤلِّف أو مصمم صوت يخلق مكتبة عشر مقطوعات خاصة، مقطوعة كل أسبوع من السنة، تُكرَّر ضمن هوية صوتية للعلامة."
        }
      },
      {
        title: { en: "Saudi Tonality, Modern Texture", ar: "نغمة سعودية، نسيج حديث" },
        body: {
          en: "The compositions incorporate oud, qanun, or ney instruments — minimally, never as 'world music'. The texture is modern ambient, anchored to Saudi tonality. It must feel like 'a Riyadh evening', not 'Arabia for tourists'.",
          ar: "تتضمَّن التراكيب آلات العود، القانون، الناي — بحدّ أدنى، لا بوصفها \"موسيقى عالمية\". النسيج أمبيانس حديث، مُرسى على نغمة سعودية. يجب أن يُحَسّ بوصفه \"مساء في الرياض\"، لا \"الجزيرة العربية للسائحين\"."
        }
      },
      {
        title: { en: "Volume Discipline", ar: "انضباط الصوت" },
        body: {
          en: "Volume is held at the threshold of perception — 35 to 42 decibels. Daily measurement. A loud setting is a brand violation. The sound exists to remove other sound, not to be heard.",
          ar: "يُحفَظ الصوت عند عتبة الإدراك — ٣٥ إلى ٤٢ ديسيبل. قياس يومي. الصوت العالي مخالفة علامة. الصوت موجود لإزالة الأصوات الأخرى، لا ليُسمَع."
        }
      },
      {
        title: { en: "Silence as a Track", ar: "الصمت بوصفه مقطوعة" },
        body: {
          en: "Two thirty-minute periods of full silence per day — sunrise opening and pre-closing. Silence is the brand's most audacious sound choice.",
          ar: "فترتان من الصمت الكامل يومياً، كل فترة ثلاثون دقيقة — الافتتاح عند الشروق وما قبل الإغلاق. الصمت هو أجرأ اختيار صوتي للعلامة."
        }
      }
    ],
    operations: {
      en: [
        "Commission a Saudi or Saudi-resident composer (one who already produces ambient or contemporary classical work) for an annual ten-piece library. Renew the commission annually.",
        "Volume measurement twice daily, logged in the booth journal. Out-of-range settings are corrected immediately and reviewed in the next stand-up.",
        "Live music is permissible at activations — never a DJ. A solo oud or qanun player, framed as performance, not background.",
        "Sound rights and licensing are fully owned by the brand. No third-party tracks are ever used.",
        "Pre-opening silence ritual: the booth opens with thirty minutes of measured silence before the first track plays. The team uses this for their morning briefing.",
        "An annual 'sound update' announcement to members — when the new ten-piece library begins, a small printed card explains its theme."
      ],
      ar: [
        "كلِّف مُؤلِّفاً سعودياً أو مقيماً في السعودية (ممن يُنتجون أمبيانس أو كلاسيكي معاصر) بمكتبة سنوية من عشر مقطوعات. جدِّد التكليف سنوياً.",
        "قياس مستوى الصوت مرتين يومياً، يُسجَّل في يومية المنصة. الإعدادات خارج النطاق تُصحَّح فوراً وتُراجَع في الإحاطة التالية.",
        "الموسيقى الحيّة مسموح بها في التفعيلات — لا ديجي. عازف عود أو قانون منفرد، يُؤطَّر بوصفه أداءً، لا خلفية.",
        "حقوق الصوت والترخيص ملكية كاملة للعلامة. لا تُستخدَم مقاطع طرف ثالث أبداً.",
        "طقس صمت ما قبل الافتتاح: تفتح المنصة بثلاثين دقيقة من الصمت المُقاس قبل تشغيل المقطوعة الأولى. يستخدم الفريق هذا الوقت لإحاطتهم الصباحية.",
        "إعلان \"تحديث الصوت\" السنوي للأعضاء — عند بدء مكتبة العشر مقطوعات الجديدة، بطاقة مطبوعة صغيرة تشرح موضوعها."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The composer plate", ar: "صورة المُؤلِّف" },
        scene: {
          en: "A Saudi oud resting on a deep-navy linen cloth in front of a window with soft Riyadh afternoon light, a folded musical score visible at the edge. No musician in frame.",
          ar: "عود سعودي يستريح على قماش كتان كحلي عميق أمام نافذة بضوء عصر هادئ من الرياض، نوتة موسيقية مطوية ظاهرة عند الحافة. لا عازف في الإطار."
        },
        mood: { en: "The instrument that will compose us.", ar: "الآلة التي ستؤلِّفنا." }
      }
    ],
    recommendations: [
      {
        title: { en: "Release a member-only sound edition", ar: "أصدر إصداراً صوتياً للأعضاء فقط" },
        body: {
          en: "Once a year, distribute the ten-piece library as a member benefit on a small vinyl pressing or USB key in a brand object. Members carry the brand's sound into their homes.",
          ar: "مرة في السنة، وزّع مكتبة العشر مقطوعات بوصفها ميزة عضوية على إصدار فينيل صغير أو ذاكرة USB في غرض علامة. يحمل الأعضاء صوت العلامة إلى بيوتهم."
        }
      }
    ],
    manifesto: {
      en: "We play not to be heard. We play so that nothing else is heard.",
      ar: "نُشغِّل الصوت لا لنُسمَع. بل لكي لا يُسمَع شيء آخر."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "visual-identity",
    number: "15",
    group: G,
    eyebrow: { en: "Chapter Fifteen · The Mark", ar: "الفصل الخامس عشر · العلامة" },
    title: { en: "Luxury Visual Identity", ar: "الهوية البصرية الفاخرة" },
    subtitle: {
      en: "A luxury identity is built less by what is shown and more by what is consistently withheld.",
      ar: "تُبنى الهوية الفاخرة بما لا يُعرَض باستمرار، أكثر مما تُبنى بما يُعرَض."
    },
    lead: {
      en: "WOSOL's visual identity is anchored in restraint. The logo is small. The typography is editorial. The colour palette is fixed. The brand never appears on a banner. Never appears on a screensaver. Never appears as a step-and-repeat. The visual identity is engineered to look at home on a printed wax-sealed envelope and on the cover of a hand-bound guest book — and nowhere else without deliberate decision. This chapter is the visual code of the house.",
      ar: "هوية وصول البصرية مُرساة في ضبط النفس. الشعار صغير. الطباعة تحريرية. لوحة الألوان ثابتة. لا تظهر العلامة على لافتة. لا تظهر على شاشة توقف. لا تظهر كخلفية تكرارية للتصوير. الهوية البصرية مُهَنْدَسة لتكون في بيتها على ظرف مختوم بالشمع وعلى غلاف دفتر ضيوف مجلَّد يدوياً — ولا في أي مكان آخر دون قرار مُقصود. هذا الفصل هو الكود البصري للدار."
    },
    whyItMatters: {
      en: "Identity systems compound. Every place the brand appears either deposits or withdraws from the bank of brand equity. A loose identity, applied widely, withdraws fast. A disciplined identity, applied narrowly, compounds.",
      ar: "أنظمة الهوية تتراكم. كل موضع تظهر فيه العلامة إما يودع أو يسحب من رصيد العلامة. هوية فضفاضة، مطبَّقة بسعة، تسحب سريعاً. هوية مُنضبطة، مطبَّقة بضيق، تتراكم."
        },
    pillars: [
      {
        title: { en: "The Wordmark is the Brand", ar: "العلامة المكتوبة هي العلامة" },
        body: {
          en: "WOSOL's primary mark is its wordmark, drawn in two languages — وصول in a refined Arabic hand, WOSOL in a precise editorial serif. No icon, no monogram, no abstract emblem. The word is the brand.",
          ar: "العلامة الأساسية هي العلامة المكتوبة، مرسومة بلغتين — وصول بخط عربي رفيع، WOSOL بحرف لاتيني تحريري دقيق. لا أيقونة، لا حروف مدمجة، لا شعار مُجرَّد. الكلمة هي العلامة."
        }
      },
      {
        title: { en: "Two Tones, One Metallic", ar: "لونان، معدن واحد" },
        body: {
          en: "Cream and deep navy as the two base tones (same as the uniform), with muted champagne brass as the only metallic. No additional colours are introduced — not for events, not for seasons, not for partnerships.",
          ar: "كريمي وكحلي عميق لونَا الأساس (نفس الزي)، مع نحاس شامبانيا خافت بوصفه المعدن الوحيد. لا تُضاف ألوان أخرى — لا للفعاليات، لا للمواسم، لا للشراكات."
        }
      },
      {
        title: { en: "Typography Discipline", ar: "انضباط الطباعة" },
        body: {
          en: "Two typefaces only: a refined English serif (e.g. Cormorant Garamond) for editorial use, and a refined Arabic sans (e.g. IBM Plex Sans Arabic) for both display and body. The English sans (Inter) is the operational typeface, used for UI only.",
          ar: "خَطّان فقط: حرف لاتيني تحريري رفيع (مثل كورمورانت غارامون) للاستخدام التحريري، وحرف عربي رفيع (مثل IBM Plex Sans Arabic) للعرض والمتن. الحرف الإنجليزي بلا سيريف (Inter) هو الخط التشغيلي، للواجهات فقط."
        }
      },
      {
        title: { en: "Where the Logo Does Not Go", ar: "أين لا يذهب الشعار" },
        body: {
          en: "A forbidden surfaces list, written and enforced. Never on banners. Never on retail floor stickers. Never on car wraps. Never embroidered on towels. Never on disposable items. Never on screens used by other brands.",
          ar: "قائمة أسطح محظورة، مكتوبة ومُلزِمة. لا على لافتات. لا على ملصقات أرضية. لا على لاصقات السيارات. لا مطرَّز على المناشف. لا على أغراض تُلقى. لا على شاشات تستخدمها علامات أخرى."
        }
      }
    ],
    operations: {
      en: [
        "Brand guidelines printed as a hand-bound volume, two languages, sixty pages. Issued to a controlled list of partners, vendors, agencies.",
        "All visual collateral approved by a single 'brand custodian' (typically the founder or a delegated senior designer). No exceptions.",
        "Print quality standards: minimum 350gsm uncoated cream stock for invitations, member envelopes, House Code booklets. Foil stamping by a single specialty press.",
        "Photography guidelines tightly held: cream-first, deep-navy second, muted champagne third, never bright. No people posing toward camera. No alcohol. No readable text.",
        "A 'mark audit' twice a year — partner channels, partner content, news mentions — to identify and correct any misuse.",
        "A 'design hospital' protocol — partners or vendors who misapply the identity are not penalised, but receive a brief, polite, written correction with reference to the printed guidelines."
      ],
      ar: [
        "إرشادات العلامة مطبوعة كمجلَّد مجلَّد يدوياً، بلغتين، ستين صفحة. تُسلَّم لقائمة منضبطة من الشركاء، الموردين، الوكالات.",
        "كل مادة بصرية تُعتمَد من \"قِوام علامة\" واحد (عادةً المؤسس أو مصمم رفيع مُفوَّض). لا استثناءات.",
        "معايير جودة الطباعة: حد أدنى ٣٥٠ جم/م² لورق كريمي غير مطلي للدعوات، أظرف الأعضاء، كتيبات دستور الدار. ختم رقائق من مطبعة متخصصة واحدة.",
        "إرشادات التصوير مضبوطة بإحكام: كريمي أولاً، كحلي ثانياً، شامبانيا ثالثاً، لا ألوان زاهية. لا أشخاص يتصنّعون للكاميرا. لا كحول. لا نص مقروء.",
        "\"تدقيق علامة\" مرتين سنوياً — قنوات الشركاء، محتوى الشركاء، ذكر إخباري — لتحديد وتصحيح أي إساءة استخدام.",
        "بروتوكول \"مستشفى التصميم\" — الشركاء أو الموردون الذين يُسيئون تطبيق الهوية لا يُعاقَبون، لكنهم يتلقّون تصحيحاً مكتوباً قصيراً مهذباً مع إشارة إلى الإرشادات المطبوعة."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The wordmark plate", ar: "صورة العلامة المكتوبة" },
        scene: {
          en: "A cream uncoated paper card, the WOSOL wordmark in Arabic and English embossed in muted champagne foil, the card resting on a deep navy linen surface.",
          ar: "بطاقة ورق كريمي غير مطلي، علامة وصول المكتوبة بالعربية والإنجليزية منقوشة بورق شامبانيا خافت، البطاقة مستريحة على سطح كتان كحلي عميق."
        },
        mood: { en: "Restraint as design.", ar: "ضبط النفس بوصفه تصميماً." }
      },
      {
        slot: { en: "Print object plate", ar: "صورة الغرض المطبوع" },
        scene: {
          en: "An assortment of brand print objects laid in soft side light — invitation, House Code booklet, envelope with wax seal, place card. Each in the same palette, each in pristine condition.",
          ar: "مجموعة من أغراض العلامة المطبوعة موضوعة بضوء جانبي خفيف — دعوة، كتيب دستور الدار، ظرف مختوم بالشمع، بطاقة مكان. كلها بنفس درجات الألوان، كلها بحالة بكر."
        },
        mood: { en: "An identity that lives on paper.", ar: "هوية تعيش على الورق." }
      }
    ],
    recommendations: [
      {
        title: { en: "Refuse digital-first logo applications", ar: "ارفض تطبيقات الشعار الرقمية أولاً" },
        body: {
          en: "Digital surfaces flatten luxury identity. Lead every brand decision with the printed application first, then translate down to digital. This inversion of habit produces a brand that photographs beautifully and reads quietly online.",
          ar: "الأسطح الرقمية تُسطِّح الهوية الفاخرة. اقد كل قرار علامة بالتطبيق المطبوع أولاً، ثم انقله للرقمي. هذا القلب للعادة يُنتج علامة تُصوَّر بجمال وتُقرأ بهدوء على الإنترنت."
        }
      }
    ],
    manifesto: {
      en: "Our identity is the discipline of refusing surfaces it does not deserve.",
      ar: "هويتنا هي انضباط رفض الأسطح التي لا تستحقها."
    }
  },

  // ──────────────────────────────────────────────────────────
  {
    slug: "gift-strategy",
    number: "35",
    group: G,
    eyebrow: { en: "Chapter Thirty-Five · The Object Left Behind", ar: "الفصل الخامس والثلاثون · الغرض المتروك" },
    title: { en: "Luxury Gift Strategy", ar: "استراتيجية الهدايا" },
    subtitle: {
      en: "A gift in this brand is never a souvenir. It is the brand's continuation in the guest's hand.",
      ar: "الهدية في هذه العلامة ليست تذكاراً أبداً. هي امتداد العلامة في يد الضيف."
    },
    lead: {
      en: "The strategy of gifting at the luxury tier is rarely understood. The aim is not generosity (everyone is generous). The aim is not gratitude (everyone is grateful). The aim is to leave a physical object in the guest's home that, by its presence, continues to communicate the brand quietly for years. WOSOL designs three gift tiers: the visit object, the annual gift, and the milestone gift. Each is composed, hand-made, and unbranded except for the most discreet of marks.",
      ar: "استراتيجية الهدايا في الطبقة الفاخرة قلَّما تُفهَم. الهدف ليس الكرم (كل أحد كريم). الهدف ليس الامتنان (كل أحد ممتنّ). الهدف هو ترك غرض مادي في بيت الضيف يستمر، بحضوره، في التحدث عن العلامة بهدوء لسنوات. تصمم وصول ثلاث طبقات للهدايا: غرض الزيارة، الهدية السنوية، الهدية المعلَمية. كلها مُؤلَّفة، مصنوعة يدوياً، غير مُعَلَّمة سوى بأكثر العلامات تحفُّظاً."
    },
    whyItMatters: {
      en: "A gift well-given becomes a permanent shelf inside the member's home or office. The brand's most valuable real estate is not its booth; it is the desks and shelves of its members.",
      ar: "هدية حُسن إهداؤها تصير رفّاً دائماً في بيت العضو أو مكتبه. أثمن عقار للعلامة ليس منصتها؛ بل مكاتب ورفوف أعضائها."
        },
    pillars: [
      {
        title: { en: "The Visit Object", ar: "غرض الزيارة" },
        body: {
          en: "Every first-time guest leaves with a small composed object — a sealed cream envelope with a handwritten card, or a slim hand-bound notebook. Cost is symbolic; thoughtfulness is everything.",
          ar: "كل ضيف لأول مرة يُغادر بغرض مُؤلَّف صغير — ظرف كريمي مختوم ببطاقة بخط اليد، أو دفتر صغير مجلَّد يدوياً. الكلفة رمزية؛ التفكير كل شيء."
        }
      },
      {
        title: { en: "The Annual Gift", ar: "الهدية السنوية" },
        body: {
          en: "Once a year, every member-tier client receives a substantial hand-made object — a small ceramic dish, a bespoke candle, the year's signature scent bottle, a tailored bound book. Hand-delivered by a senior custodian.",
          ar: "مرة في السنة، يتلقى كل عميل من فئة الأعضاء غرضاً يدوياً جوهرياً — صحناً خزفياً صغيراً، شمعة خاصة، زجاجة عطر السنة المميَّز، كتاباً مُجلَّداً مفصَّلاً. يُسلَّم باليد من قِوام رفيع."
        }
      },
      {
        title: { en: "The Milestone Gift", ar: "هدية المعلَم" },
        body: {
          en: "On personal milestones recorded in the family file (weddings, births, business openings), the brand sends a hand-composed gift selected by the senior custodian and approved by the founder. Discreet, never publicly mentioned.",
          ar: "في المعالم الشخصية المُسجَّلة في الملف العائلي (زواج، ولادة، افتتاح أعمال)، ترسل العلامة هدية مُؤلَّفة باليد يختارها القِوام الرفيع ويُقرّها المؤسس. تَحفُّظية، لا تُذكَر علناً أبداً."
        }
      },
      {
        title: { en: "Saudi Craft First", ar: "الحرفة السعودية أولاً" },
        body: {
          en: "Every commissioned gift comes from a Saudi maker — ceramicist, bookbinder, perfumer, weaver, carpenter. The brand's gift programme becomes a small but loyal patron of the Saudi craft revival.",
          ar: "كل هدية مُكلَّفة تأتي من صانع سعودي — صانع خزف، مُجَلِّد كتب، مُركِّب عطور، حائك، نجّار. يصير برنامج الهدايا في العلامة راعياً صغيراً ووفيّاً لإحياء الحرفة السعودية."
        }
      }
    ],
    operations: {
      en: [
        "A 'Gift Atelier' room in the operations facility, climate-controlled, with the year's inventory of commissioned objects in cream cotton storage.",
        "Annual gift commissioning calendar locked twelve months in advance. Saudi makers receive year-long predictable orders.",
        "Each milestone gift is selected by a 'gift consultation' — a fifteen-minute conversation between the senior custodian and the founder, recorded in a small bound log.",
        "Hand-delivery is the standard. Couriers are used only for international members. Hand-delivery includes the custodian's personally written card.",
        "A gift never carries a price tag, a card with a price, or a receipt. The gift is the message; the message is not a transaction.",
        "Annual review of the gift programme: which gifts produced anecdotal mentions, which were displayed in member homes when visited, which became conversation pieces."
      ],
      ar: [
        "غرفة \"ورشة هدايا\" في منشأة العمليات، بمناخ مُتحكَّم به، فيها مخزون السنة من الأغراض المُكلَّفة في حفظ قطني كريمي.",
        "تقويم تكليف الهدايا السنوي مُغلَق قبل اثني عشر شهراً. الصنّاع السعوديون يتلقّون طلبات منتظمة لسنة كاملة.",
        "كل هدية معلَم تُختار في \"استشارة هدية\" — حوار خمس عشرة دقيقة بين القِوام الرفيع والمؤسس، يُسجَّل في دفتر مجلَّد صغير.",
        "التسليم باليد هو المعيار. لا تُستخدَم شركات الشحن إلا للأعضاء الدوليين. التسليم باليد يشمل بطاقة القِوام المكتوبة شخصياً.",
        "الهدية لا تحمل بطاقة سعر، بطاقة عليها سعر، أو فاتورة. الهدية هي الرسالة؛ والرسالة ليست صفقة.",
        "مراجعة سنوية لبرنامج الهدايا: أي هدايا أنتجت ذكراً شفهياً، أيها عُرضَت في بيوت الأعضاء عند زيارتها، أيها صارت قطع حوار."
      ]
    },
    imageBriefs: [
      {
        slot: { en: "The annual gift plate", ar: "صورة الهدية السنوية" },
        scene: {
          en: "A small cream ceramic bowl with a deep navy interior glaze, resting on a folded cream linen cloth on a polished walnut surface. Inside the bowl, three small dates. Soft warm light.",
          ar: "وعاء خزفي كريمي صغير بطلاء داخلي كحلي عميق، يستريح على قماش كتان كريمي مطوي على سطح جوز مصقول. داخل الوعاء ثلاث تمرات. ضوء دافئ خفيف."
        },
        mood: { en: "A gift that lives on a shelf for years.", ar: "هدية تعيش على رفّ لسنوات." }
      },
      {
        slot: { en: "The milestone gift plate", ar: "صورة هدية المعلَم" },
        scene: {
          en: "A hand-bound cream-linen wrapped book on a deep-navy desk, tied with a single cream ribbon, a handwritten card on the side. No readable text. No address visible.",
          ar: "كتاب مغلَّف بكتان كريمي مجلَّد يدوياً على مكتب كحلي عميق، مربوط بشريط كريمي مفرد، بطاقة بخط اليد على الجانب. لا نص مقروء. لا عنوان ظاهر."
        },
        mood: { en: "The gift that arrives without announcement.", ar: "الهدية التي تصل دون إعلان." }
      }
    ],
    recommendations: [
      {
        title: { en: "Refuse to scale generic gifting", ar: "ارفض توسعة الهدايا العامة" },
        body: {
          en: "Pressure to commission a 'gift in bulk' for cost efficiency will be constant. Resist. The moment the gift programme becomes scalable, it stops working at the luxury tier.",
          ar: "سيكون الضغط لتكليف \"هدايا بالجملة\" لكفاءة التكلفة مستمراً. قاوم. لحظة يصير برنامج الهدايا قابلاً للتوسع بسهولة، يتوقف عن العمل في الطبقة الفاخرة."
        }
      }
    ],
    manifesto: {
      en: "We do not give gifts. We leave the brand on someone's shelf.",
      ar: "نحن لا نقدّم هدايا. نحن نترك العلامة على رفّ أحدهم."
    }
  }
];
