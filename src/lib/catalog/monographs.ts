import type { LocaleText } from "./types";

export type LiteratureNote = {
  title: string;
  journal: string;
  year: string;
  model: LocaleText;
  finding: LocaleText;
};

export type Monograph = {
  sequence?: string[];
  sequenceNote?: LocaleText;
  halfLife: LocaleText;
  receptors: LocaleText;
  mechanism: LocaleText;
  studies: LocaleText[];
  literature: LiteratureNote[];
  storage: LocaleText;
};

const storage: LocaleText = {
  fa: "نمونهٔ لیوفیلیزه را در آزمایشگاه خشک، دور از نور و معمولاً در دمای حدود ۲۰- درجه نگه می‌دارند. این جمله دستور رقیق‌سازی برای تزریق نیست.",
  en: "Laboratories keep lyophilized samples dry, away from light, and usually near −20°C. This is not an instruction to dilute anything for injection.",
};

export const monographs: Record<string, Monograph> = {
  "bpc-157": {
    sequence: ["Gly", "Glu", "Pro", "Pro", "Pro", "Gly", "Lys", "Pro", "Ala", "Asp", "Asp", "Ala", "Gly", "Leu", "Val"],
    halfLife: {
      fa: "در پژوهش‌ها پایداری غیرعادی در شیرهٔ معده گزارش شده؛ نیمه‌عمر دقیق انسانیِ دارای پروانه وجود ندارد.",
      en: "Studies report unusual stability in gastric juice. There is no authorised human half-life.",
    },
    receptors: {
      fa: "مسیرهای گزارش‌شده شامل VEGFR2، نیتریک اکسید و چسبندگی کانونی فیبروبلاست است، نه یک گیرندهٔ واحدِ کاملاً پذیرفته‌شده.",
      en: "Reported pathways include VEGFR2, nitric oxide, and fibroblast focal adhesion, not one fully settled receptor.",
    },
    mechanism: {
      fa: "در مدل‌های پیش‌بالینی، BPC-157 با فسفریلاسیون FAK-paxillin و مسیر VEGFR2-Akt-eNOS به مهاجرت سلول تاندون و رگ‌زایی نسبت داده شده است. این توصیف نتیجهٔ کشت سلول و جونده است، نه مجوز درمان انسان.",
      en: "In preclinical models, BPC-157 has been linked to FAK-paxillin phosphorylation and VEGFR2-Akt-eNOS signalling in tendon-cell migration and angiogenesis. That description comes from cell culture and rodents, not a human licence.",
    },
    studies: [
      {
        fa: "مدل بریدگی تاندون آشیل در جونده: گزارش افزایش مهاجرت سلول و سازمان‌دهی کلاژن.",
        en: "Rodent Achilles-tendon transection: reports of faster cell migration and collagen organisation.",
      },
      {
        fa: "مدل آسیب مخاط گوارش با الکل یا NSAID: گزارش حفاظت نسبی مخاط.",
        en: "Alcohol or NSAID gut-mucosa injury models: reports of partial mucosal protection.",
      },
      {
        fa: "کارآزمایی انسانیِ تعیین‌کننده برای مجوز دارو منتشر نشده است.",
        en: "No decisive human trial that would support a marketing authorisation has been published.",
      },
    ],
    literature: [
      {
        title: "The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration",
        journal: "Journal of Applied Physiology",
        year: "2011",
        model: { fa: "کشت سلول تاندون و مدل جونده", en: "Tendon-cell culture and a rodent model" },
        finding: {
          fa: "نویسندگان افزایش رشد و مهاجرت سلول تاندون را از مسیر FAK-paxillin گزارش کردند.",
          en: "The authors reported increased tendon-cell outgrowth and migration through FAK-paxillin.",
        },
      },
    ],
    storage,
  },
  "tb-500": {
    sequence: ["Ser", "Asp", "Lys", "Pro", "Asp", "Met", "Ala", "Glu", "Ile", "Glu", "Lys", "Phe", "Asp", "Lys", "Ser", "Lys", "Leu", "Lys", "Lys", "Thr", "Glu", "Thr", "Gln", "Glu", "Lys", "Asn", "Pro", "Leu", "Pro", "Ser", "Lys", "Glu", "Thr", "Ile", "Glu", "Gln", "Glu", "Lys", "Gln", "Ala", "Gly", "Glu", "Ser"],
    sequenceNote: {
      fa: "این توالی تیموزین بتا-۴ کامل است (۴۳ ریشه). بسیاری از ویال‌های «TB-500» در واقع قطعهٔ ۱۷–۲۳ هستند؛ آن مدخل جداست.",
      en: "This is full thymosin β-4 (43 residues). Many vials labelled TB-500 are actually the 17–23 fragment, which has its own entry.",
    },
    halfLife: {
      fa: "تیموزین بتا-۴ در پلاسما نیمه‌عمر کوتاهی دارد؛ اثر اسکلت سلولی را نباید با ماندن خودِ پپتید در خون یکی گرفت.",
      en: "Thymosin β-4 has a short plasma half-life. Cytoskeletal effects should not be confused with the peptide remaining in blood.",
    },
    receptors: {
      fa: "موتیف LKKTETQ به اکتین کروی متصل می‌شود. مسیر ILK هم در مقالهٔ قلبی Nature مطرح شده است.",
      en: "The LKKTETQ motif binds globular actin. An ILK pathway was described in the Nature cardiac paper.",
    },
    mechanism: {
      fa: "تیموزین بتا-۴ مونومر اکتین را کنار خود نگه می‌دارد و به سلول اجازه می‌دهد برای مهاجرت، رشته‌های اکتین را از نو بچیند. مقالهٔ Nature این را به بقای سلول قلبی پس از انسداد عروق کرونر در موش ربط داد.",
      en: "Thymosin β-4 sequesters actin monomers so cells can rebuild actin filaments for migration. The Nature paper linked this to cardiac-cell survival after coronary ligation in mice.",
    },
    studies: [
      {
        fa: "مدل سکتهٔ قلبی موش: گزارش مهاجرت و بقای سلول پیش‌ساز اپی‌کارد.",
        en: "Mouse heart-attack model: reported epicardial progenitor migration and survival.",
      },
      {
        fa: "قطرهٔ چشمی RGN-259 (تیموزین بتا-۴) در انسان برای قرنیه مطالعه شده و با ویال پژوهشی TB-500 یکی نیست.",
        en: "The RGN-259 eye drop (thymosin β-4) has been studied in people for the cornea and is not the same as a research TB-500 vial.",
      },
    ],
    literature: [
      {
        title: "Thymosin β4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair",
        journal: "Nature",
        year: "2004",
        model: { fa: "انسداد کرونر در موش", en: "Mouse coronary ligation" },
        finding: {
          fa: "تیموزین بتا-۴ با کمپلکس ILK-PINCH و مسیر Akt به بقای سلول قلبی نسبت داده شد.",
          en: "Thymosin β-4 was linked to cardiac-cell survival through an ILK-PINCH complex and Akt.",
        },
      },
    ],
    storage,
  },
  "tb-500-fragment": {
    sequence: ["Ac-Leu", "Lys", "Lys", "Thr", "Glu", "Thr", "Gln"],
    sequenceNote: {
      fa: "ریشه‌های ۱۷ تا ۲۳ تیموزین بتا-۴، معمولاً با استیل در انتهای N. این قطعه پروتئین کامل نیست.",
      en: "Residues 17–23 of thymosin β-4, usually N-acetylated. This fragment is not the full protein.",
    },
    halfLife: {
      fa: "نیمه‌عمر انسانیِ دارای پروانه برای این قطعه منتشر نشده است.",
      en: "No authorised human half-life has been published for this fragment.",
    },
    receptors: {
      fa: "همان موتیف اتصال به اکتین LKKTETQ، بدون بقیهٔ پروتئین تیموزین بتا-۴.",
      en: "The same actin-binding motif, LKKTETQ, without the rest of thymosin β-4.",
    },
    mechanism: {
      fa: "فرض پژوهشی این است که موتیف کوتاه برای بخش بزرگی از اثر اتصال به اکتین کافی است. این فرض، معادل دادهٔ بالینی پروتئین کامل یا یک دارو نیست.",
      en: "The research hypothesis is that the short motif accounts for much of the actin binding. That hypothesis is not clinical data for the full protein, and it is not a medicine.",
    },
    studies: [
      {
        fa: "بیشتر برچسب‌های تجاری «TB-500» این قطعه را می‌فروشند و آن را با مقالهٔ Nature دربارهٔ پروتئین ۴۳ ریشه‌ای یکی می‌گیرند. این یکی گرفتن دقیق نیست.",
        en: "Most commercial “TB-500” labels sell this fragment and equate it with the Nature paper on the 43-residue protein. That equation is not exact.",
      },
    ],
    literature: [],
    storage,
  },
  "ghk-cu": {
    sequence: ["Gly", "His", "Lys"],
    sequenceNote: {
      fa: "یون Cu²⁺ به این تری‌پپتید کئوردینه می‌شود. توالی آمینواسیدی فقط سه ریشه است.",
      en: "A Cu²⁺ ion coordinates this tripeptide. The amino-acid sequence is only three residues.",
    },
    halfLife: {
      fa: "در پلاسما کوتاه است. اثرهای گزارش‌شده بر بیان ژن را نباید با ماندن پپتید در خون اشتباه گرفت.",
      en: "Plasma persistence is short. Reported effects on gene expression should not be confused with the peptide remaining in blood.",
    },
    receptors: {
      fa: "حامل مس برای آنزیم‌های وابسته به مس، از جمله لیزیل اکسیداز در پیوند عرضی کلاژن.",
      en: "A copper carrier for copper-dependent enzymes, including lysyl oxidase in collagen cross-linking.",
    },
    mechanism: {
      fa: "GHK مس را با میل بالا نگه می‌دارد و در کشت فیبروبلاست با افزایش کلاژن و گلیکوزآمینوگلیکان همراه بوده است. تحلیل‌های بیان ژن، از جمله کار گروه Pickart روی Connectivity Map، دامنهٔ وسیعی از ژن‌ها را گزارش کرده‌اند؛ این گزارش درمان پیری نیست.",
      en: "GHK binds copper tightly and, in fibroblast culture, has been associated with more collagen and glycosaminoglycan. Gene-expression analyses, including Pickart’s Connectivity Map work, report a wide set of transcripts. That is not an ageing treatment.",
    },
    studies: [
      {
        fa: "کشت فیبروبلاست انسان: گزارش افزایش سنتز کلاژن در غلظت نانومولار.",
        en: "Human fibroblast culture: reported collagen synthesis at nanomolar concentrations.",
      },
      {
        fa: "دادهٔ ژنومی بیشتر بازتحلیل بانک بیان ژن است، نه کارآزمایی بالینی پوست.",
        en: "The genomic data are mostly a reanalysis of expression banks, not a clinical skin trial.",
      },
    ],
    literature: [
      {
        title: "Stimulation of collagen synthesis in fibroblast cultures by the tripeptide-copper complex glycyl-L-histidyl-L-lysine-Cu2+",
        journal: "FEBS Letters",
        year: "1988",
        model: { fa: "کشت فیبروبلاست", en: "Fibroblast culture" },
        finding: {
          fa: "کمپلکس GHK-Cu در غلظت پایین با افزایش سنتز کلاژن در کشت همراه بود.",
          en: "The GHK-Cu complex was associated with higher collagen synthesis in culture at low concentration.",
        },
      },
    ],
    storage,
  },
  epitalon: {
    sequence: ["Ala", "Glu", "Asp", "Gly"],
    halfLife: {
      fa: "پاک‌سازی پلاسمایی تتراپپتید کوتاه است. ادعاهای تلومر مربوط به اثر هسته‌ای گزارش‌شده است، نه ماندن دارو در خون.",
      en: "Plasma clearance of the tetrapeptide is rapid. Telomere claims refer to a reported nuclear effect, not to the drug staying in blood.",
    },
    receptors: {
      fa: "در مدل این گروه پژوهشی، برهم‌کنش با هیستون لینکر و پروموتر hTERT مطرح شده است.",
      en: "That research group’s model proposes binding to linker histone and the hTERT promoter.",
    },
    mechanism: {
      fa: "اپیتالون به‌خاطر جرم کم وارد بحث اپی‌ژنتیک شده است: اتصال به هیستون و افزایش رونویسی تلومراز در کشت فیبروبلاست انسانی، در مقالات گروه خاوینسون. این یافته مجوز داروی ضدپیری نیست و تکرار مستقلِ گسترده ندارد.",
      en: "Epitalon entered the epigenetic discussion because it is small: histone binding and higher telomerase transcription in human fibroblast culture, in the Khavinson group’s papers. That finding is not an anti-ageing licence and it has not been broadly replicated.",
    },
    studies: [
      {
        fa: "کشت فیبروبلاست سوماتیک: گزارش القای فعالیت تلومراز.",
        en: "Somatic fibroblast culture: a report of induced telomerase activity.",
      },
      {
        fa: "کارآزمایی بزرگ و مستقل که طول عمر انسان را ثابت کند منتشر نشده است.",
        en: "No large independent trial has shown an effect on human lifespan.",
      },
    ],
    literature: [
      {
        title: "Peptide promotes overcoming of the division limit in human somatic cell",
        journal: "Bulletin of Experimental Biology and Medicine",
        year: "2003",
        model: { fa: "کشت فیبروبلاست انسان", en: "Human fibroblast culture" },
        finding: {
          fa: "گروه خاوینسون گزارش کرد که اپیتالون فعالیت تلومراز را در فیبروبلاست القا می‌کند.",
          en: "The Khavinson group reported that Epitalon induced telomerase activity in fibroblasts.",
        },
      },
    ],
    storage,
  },
  semax: {
    sequence: ["Met", "Glu", "His", "Phe", "Pro", "Gly", "Pro"],
    halfLife: {
      fa: "در خون سریع شکسته می‌شود. اثر گزارش‌شده بر BDNF طولانی‌تر از حضور خود پپتید توصیف شده است.",
      en: "It is cleaved quickly in blood. The reported BDNF effect is described as outlasting the peptide itself.",
    },
    receptors: {
      fa: "مسیر BDNF/TrkB و ملانوکورتین در پژوهش‌ها مطرح است. فعالیت استروئید فوق‌کلیوی ACTH را ندارد.",
      en: "BDNF/TrkB and melanocortin pathways are discussed in the studies. It does not have the adrenal-steroid activity of ACTH.",
    },
    mechanism: {
      fa: "سماکس قطعهٔ ACTH(4-7) است که با Pro-Gly-Pro در برابر پپتیداز پایدارتر شده. در موش، افزایش BDNF و TrkB هیپوکامپ گزارش شده است. در روسیه سابقهٔ استفادهٔ پزشکی دارد و در بریتانیا یا از سوی EMA داروی مجاز نیست.",
      en: "Semax is an ACTH(4-7) fragment stabilised with Pro-Gly-Pro. Rat studies report higher hippocampal BDNF and TrkB. It has a history of medical use in Russia and is not a UK or EMA authorised medicine.",
    },
    studies: [
      {
        fa: "هیپوکامپ موش: گزارش افزایش پروتئین BDNF پس از یک نوبت.",
        en: "Rat hippocampus: a report of higher BDNF protein after a single administration.",
      },
      {
        fa: "مدل ایسکمی مغز موش: گزارش تغییر بیان ژن‌های عروقی و ایمنی.",
        en: "Rat brain-ischaemia model: reported changes in vascular and immune gene expression.",
      },
    ],
    literature: [
      {
        title: "Semax, an analog of ACTH(4-10) with cognitive effects, regulates BDNF and trkB expression in the rat hippocampus",
        journal: "Brain Research",
        year: "2006",
        model: { fa: "هیپوکامپ موش", en: "Rat hippocampus" },
        finding: {
          fa: "یک نوبت سماکس با افزایش BDNF و mRNA گیرندهٔ TrkB همراه بود.",
          en: "A single dose of Semax was associated with higher BDNF and TrkB receptor mRNA.",
        },
      },
    ],
    storage,
  },
  selank: {
    sequence: ["Thr", "Lys", "Pro", "Arg", "Pro", "Gly", "Pro"],
    halfLife: {
      fa: "نیمه‌عمر پلاسمایی کوتاه است. اثر گزارش‌شده بر GABA پایدارتر از خود مولکول توصیف شده است.",
      en: "Plasma half-life is short. The reported GABA effect is described as outlasting the molecule.",
    },
    receptors: {
      fa: "تعدیل آلوستریک GABA-A و مهار آنزیم‌های تجزیه‌کنندهٔ انکفالین در پژوهش‌های روسی.",
      en: "Allosteric GABA-A modulation and inhibition of enkephalin-degrading enzymes in the Russian studies.",
    },
    mechanism: {
      fa: "سلانک تافتسین (Thr-Lys-Pro-Arg) را به دنبالهٔ Pro-Gly-Pro وصل می‌کند. در قشر پیشانی موش تغییر بیان ژن‌های گابا گزارش شده، بدون خواب‌آلودگی الگوی بنزودیازپین. داروی اضطرابِ مجاز بریتانیا نیست.",
      en: "Selank joins tuftsin (Thr-Lys-Pro-Arg) to a Pro-Gly-Pro tail. Rat frontal-cortex studies report changes in GABA-related genes without a benzodiazepine pattern of sedation. It is not a UK authorised anxiety medicine.",
    },
    studies: [
      {
        fa: "آرایهٔ PCR قشر پیشانی موش: گزارش تغییر رونویسی مرتبط با GABA.",
        en: "PCR array of rat frontal cortex: reported GABA-related transcription changes.",
      },
      {
        fa: "اثر ضد اضطراب انسانیِ مستقل و بزرگ، خارج از ادبیات محلی، محدود است.",
        en: "Large independent human anxiolytic evidence, outside the local literature, is limited.",
      },
    ],
    literature: [
      {
        title: "Selank administration affects the expression of some genes involved in GABAergic neurotransmission",
        journal: "Frontiers in Pharmacology",
        year: "2016",
        model: { fa: "قشر پیشانی موش", en: "Rat frontal cortex" },
        finding: {
          fa: "پس از تجویز، بیان تعدادی از ژن‌های انتقال گابا تغییر کرد.",
          en: "After administration, expression of a number of GABA-transmission genes changed.",
        },
      },
    ],
    storage,
  },
  ipamorelin: {
    sequence: ["Aib", "His", "D-2-Nal", "D-Phe", "Lys-NH2"],
    halfLife: {
      fa: "در داوطلب سالم، پالس هورمون رشد کوتاه توصیف شده و نیمه‌عمر حدود دو ساعت برای خود پپتید گزارش شده است.",
      en: "In healthy volunteers the growth-hormone pulse was short, and the peptide’s own half-life was reported at about two hours.",
    },
    receptors: {
      fa: "گیرندهٔ سکرتاگوگ هورمون رشد GHS-R1a، همان گیرندهٔ گرلین.",
      en: "The growth-hormone secretagogue receptor GHS-R1a, which is also the ghrelin receptor.",
    },
    mechanism: {
      fa: "ایپامورلین به GHS-R1a روی سلول سوماتوتروپ وصل می‌شود و از مسیر کلسیم ترشح هورمون رشد را بالا می‌برد. مقالهٔ ۱۹۹۸ آن را از GHRP-6 جدا کرد چون در آن مدل کورتیزول و ACTH بالا نرفت. دارو نشد.",
      en: "Ipamorelin binds GHS-R1a on somatotrophs and raises growth-hormone release through a calcium pathway. A 1998 paper separated it from GHRP-6 because cortisol and ACTH did not rise in that model. It did not become a medicine.",
    },
    studies: [
      {
        fa: "کشت هیپوفیز و جانور: ترشح هورمون رشد بدون افزایش ACTH در دوزهای مورد مطالعه.",
        en: "Pituitary culture and animals: growth-hormone release without an ACTH rise at the doses studied.",
      },
      {
        fa: "کارآزمایی حرکتی روده پس از جراحی به فراوردهٔ مجاز نرسید.",
        en: "Postoperative gut-motility trials did not produce an authorised product.",
      },
    ],
    literature: [
      {
        title: "Ipamorelin, the first selective growth hormone secretagogue",
        journal: "European Journal of Endocrinology",
        year: "1998",
        model: { fa: "کشت هیپوفیز و چند گونه", en: "Pituitary culture and several species" },
        finding: {
          fa: "ترشح هورمون رشد دیده شد، بدون افزایش ACTH و کورتیزول که با GHRPهای قدیمی‌تر همراه بود.",
          en: "Growth hormone was released without the ACTH and cortisol rise seen with earlier GHRPs.",
        },
      },
    ],
    storage,
  },
  "cjc-1295": {
    sequence: ["Tyr", "D-Ala", "Asp", "Ala", "Ile", "Phe", "Thr", "Gln", "Ser", "Tyr", "Arg", "Lys", "Val", "Leu", "Ala", "Gln", "Leu", "Ser", "Ala", "Arg", "Lys", "Leu", "Leu", "Gln", "Asp", "Ile", "Leu", "Ser", "Arg"],
    sequenceNote: {
      fa: "Mod GRF(1-29) با چهار جایگزینی نسبت به GHRH(1-29). انتهای C معمولاً آمید است. بخش DAC روی این توالی نیست.",
      en: "Mod GRF(1-29), with four substitutions relative to GHRH(1-29). The C-terminus is usually an amide. The DAC moiety is not on this sequence.",
    },
    halfLife: {
      fa: "اغلب حدود ۳۰ دقیقه گفته می‌شود. نیمه‌عمر چندروزه متعلق به فرم DAC است و نباید به این صفحه نسبت داده شود.",
      en: "Often described as about 30 minutes. The multi-day half-life belongs to the DAC form and should not be assigned to this page.",
    },
    receptors: {
      fa: "گیرندهٔ GHRH روی هیپوفیز قدامی، مسیر cAMP.",
      en: "The GHRH receptor on the anterior pituitary, via cAMP.",
    },
    mechanism: {
      fa: "GHRH طبیعی خیلی زود با آنزیم DPP-4 بریده می‌شود. D-Ala در موقعیت ۲ و سه جایگزینی دیگر این برش را کند می‌کنند. این مولکول پالس کوتاه GHRH می‌سازد و به آلبومین قفل نمی‌شود.",
      en: "Native GHRH is cut quickly by DPP-4. A D-alanine at position 2 and three further substitutions slow that cut. This molecule makes a short GHRH pulse and does not lock onto albumin.",
    },
    studies: [
      {
        fa: "کارآزمایی‌های JCEM در سال ۲۰۰۶ روی CJC-1295 دارای DAC انجام شد، نه روی این فرم کوتاه.",
        en: "The 2006 JCEM trials studied CJC-1295 with DAC, not this short form.",
      },
    ],
    literature: [],
    storage,
  },
  "cjc-1295-dac": {
    halfLife: {
      fa: "در داوطلب سالم، اتصال به آلبومین نیمه‌عمر را به چند روز رساند و IGF-1 را برای حدود یک تا دو هفته بالا نگه داشت.",
      en: "In healthy volunteers, albumin binding extended the half-life to several days and kept IGF-1 elevated for about one to two weeks.",
    },
    receptors: {
      fa: "همان گیرندهٔ GHRH. تفاوت با فرم بدون DAC در ماندن دارو روی آلبومین است، نه در گیرنده.",
      en: "The same GHRH receptor. The difference from the non-DAC form is albumin binding, not the receptor.",
    },
    mechanism: {
      fa: "گروه maleimidopropionyl به یک لیزین اضافه شده و پس از تزریق به سیستئین آزاد آلبومین وصل می‌شود. به همین دلیل یک نوبت، ترشح هورمون رشد را روزها ادامه می‌دهد. دارو مجوز نگرفت.",
      en: "A maleimidopropionyl group on a lysine bonds to free cysteine on albumin after injection. One dose therefore continues growth-hormone secretion for days. It was not authorised.",
    },
    studies: [
      {
        fa: "بزرگسال سالم: افزایش چندبرابری میانگین هورمون رشد و IGF-1 نسبت به دارونما.",
        en: "Healthy adults: a several-fold rise in mean growth hormone and IGF-1 versus placebo.",
      },
      {
        fa: "نمونه‌گیری مکرر نشان داد الگوی ضربانی هورمون رشد حذف نشده بود.",
        en: "Frequent sampling showed that the pulsatile pattern of growth hormone was not abolished.",
      },
    ],
    literature: [
      {
        title: "Prolonged stimulation of growth hormone and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: "2006",
        model: { fa: "کارآزمایی دارونما در بزرگسال سالم", en: "Placebo-controlled trial in healthy adults" },
        finding: {
          fa: "CJC-1295 دارای DAC سطح میانگین هورمون رشد و IGF-1 را به‌صورت وابسته به دوز بالا برد.",
          en: "CJC-1295 with DAC raised mean growth hormone and IGF-1 in a dose-related way.",
        },
      },
      {
        title: "Pulsatile secretion of growth hormone persists during continuous stimulation by CJC-1295",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: "2006",
        model: { fa: "نمونه‌گیری مکرر شبانه‌روزی", en: "Frequent round-the-clock sampling" },
        finding: {
          fa: "حتی با تحریک مداوم گیرنده، ضربان ترشح هورمون رشد حفظ شد.",
          en: "Even with continuous receptor stimulation, growth-hormone pulses remained.",
        },
      },
    ],
    storage,
  },
};
