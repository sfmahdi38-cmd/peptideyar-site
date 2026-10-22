import type { LocaleText } from "./types";

export type LiteratureNote = {
  title: string;
  journal: string;
  year: string;
  /** PubMed ID, checked against PubMed. */
  pmid: string;
  doi: string;
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

/** Date the papers on every monograph were last checked against PubMed. */
export const monographsReviewed = "2026-10-22";

const storage: LocaleText = {
  fa: "نمونهٔ لیوفیلیزه را در آزمایشگاه خشک، دور از نور و معمولاً در دمای حدود ۲۰- درجه نگه می‌دارند. این جمله دستور رقیق‌سازی برای تزریق نیست.",
  en: "Laboratories keep lyophilized samples dry, away from light, and usually near −20°C. This is not an instruction to dilute anything for injection.",
};

const licensedStorage: LocaleText = {
  fa: "فراوردهٔ مجاز طبق برگهٔ راهنمای خودش نگهداری می‌شود. ویال پژوهشی همان زنجیرهٔ نگهداری و کنترل کیفیت را ندارد.",
  en: "The licensed product is stored as its own leaflet says. A research vial does not come with that storage chain or quality control.",
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
        pmid: "21030672",
        doi: "10.1152/japplphysiol.00945.2010",
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
        title: "Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair",
        journal: "Nature",
        year: "2004",
        pmid: "15565145",
        doi: "10.1038/nature03000",
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
        pmid: "3169264",
        doi: "10.1016/0014-5793(88)80509-x",
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
        title: "Epithalon peptide induces telomerase activity and telomere elongation in human somatic cells",
        journal: "Bulletin of Experimental Biology and Medicine",
        year: "2003",
        pmid: "12937682",
        doi: "10.1023/a:1025493705728",
        model: { fa: "کشت فیبروبلاست جنینی انسان", en: "Human fetal fibroblast culture" },
        finding: {
          fa: "گروه خاوینسون گزارش کرد که اپیتالون در سلول‌های فاقد تلومراز، بیان زیرواحد کاتالیتیک و فعالیت تلومراز را القا می‌کند.",
          en: "The Khavinson group reported that Epitalon induced expression of the catalytic subunit and telomerase activity in telomerase-negative cells.",
        },
      },
      {
        title: "Peptide promotes overcoming of the division limit in human somatic cell",
        journal: "Bulletin of Experimental Biology and Medicine",
        year: "2004",
        pmid: "15455129",
        doi: "10.1023/b:bebm.0000038164.49947.8c",
        model: { fa: "کشت فیبروبلاست ریهٔ جنین انسان", en: "Human fetal lung fibroblast culture" },
        finding: {
          fa: "همان گروه گزارش کرد که سلول‌های تیمارشده تلومر بلندتر داشتند و ۱۰ تقسیم بیشتر از سلول شاهد انجام دادند. این نتیجهٔ کشت سلول است، نه طول عمر انسان.",
          en: "The same group reported longer telomeres and 10 extra divisions compared with control cells. That is a cell-culture result, not human lifespan.",
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
        pmid: "16996037",
        doi: "10.1016/j.brainres.2006.07.108",
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
        title: "Selank Administration Affects the Expression of Some Genes Involved in GABAergic Neurotransmission",
        journal: "Frontiers in Pharmacology",
        year: "2016",
        pmid: "26924987",
        doi: "10.3389/fphar.2016.00031",
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
        pmid: "9849822",
        doi: "10.1530/eje.0.1390552",
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
        title: "Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: "2006",
        pmid: "16352683",
        doi: "10.1210/jc.2005-1536",
        model: { fa: "کارآزمایی دارونما در بزرگسال سالم", en: "Placebo-controlled trial in healthy adults" },
        finding: {
          fa: "CJC-1295 دارای DAC سطح میانگین هورمون رشد و IGF-1 را به‌صورت وابسته به دوز بالا برد.",
          en: "CJC-1295 with DAC raised mean growth hormone and IGF-1 in a dose-related way.",
        },
      },
      {
        title: "Pulsatile secretion of growth hormone (GH) persists during continuous stimulation by CJC-1295, a long-acting GH-releasing hormone analog",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: "2006",
        pmid: "17018654",
        doi: "10.1210/jc.2006-1702",
        model: { fa: "نمونه‌گیری مکرر شبانه‌روزی", en: "Frequent round-the-clock sampling" },
        finding: {
          fa: "حتی با تحریک مداوم گیرنده، ضربان ترشح هورمون رشد حفظ شد.",
          en: "Even with continuous receptor stimulation, growth-hormone pulses remained.",
        },
      },
    ],
    storage,
  },
  semaglutide: {
    sequence: ["His", "Aib", "Glu", "Gly", "Thr", "Phe", "Thr", "Ser", "Asp", "Val", "Ser", "Ser", "Tyr", "Leu", "Glu", "Gly", "Gln", "Ala", "Ala", "Lys(C18)", "Glu", "Phe", "Ile", "Ala", "Trp", "Leu", "Val", "Arg", "Gly", "Arg", "Gly"],
    sequenceNote: {
      fa: "۳۱ ریشه بر پایهٔ GLP-1(7-37) انسان. Aib در جایگاه ۲ آن را در برابر آنزیم DPP-4 مقاوم می‌کند، Arg جای Lys را در جایگاه ۲۸ گرفته و روی لیزین جایگاه ۲۰ یک اسید چرب C18 با رابط وصل است که به آلبومین می‌چسبد.",
      en: "31 residues built on human GLP-1(7-37). Aib at position 2 resists DPP-4, Arg replaces Lys at position 28, and the lysine at position 20 carries a C18 fatty diacid on a linker that binds albumin.",
    },
    halfLife: {
      fa: "حدود یک هفته، به‌خاطر اتصال به آلبومین و مقاومت در برابر DPP-4. به همین دلیل قلم مجاز آن هفتگی است.",
      en: "About one week, because of albumin binding and DPP-4 resistance. That is why the licensed pen is weekly.",
    },
    receptors: {
      fa: "گیرندهٔ GLP-1 (GLP-1R) در پانکراس، مغز و دستگاه گوارش.",
      en: "The GLP-1 receptor (GLP-1R) in the pancreas, brain, and gut.",
    },
    mechanism: {
      fa: "سماگلوتاید گیرندهٔ GLP-1 را فعال می‌کند: ترشح انسولین را وابسته به قند خون بالا می‌برد، ترشح گلوکاگون را کم می‌کند، تخلیهٔ معده را کند می‌کند و از راه مغز اشتها را پایین می‌آورد. بیشتر کاهش وزن نتیجهٔ کم شدن دریافت غذاست.",
      en: "Semaglutide activates the GLP-1 receptor: it raises glucose-dependent insulin release, lowers glucagon, slows gastric emptying, and reduces appetite through the brain. Most of the weight loss comes from eating less.",
    },
    studies: [
      {
        fa: "STEP 1 (۱۹۶۱ بزرگسال بدون دیابت، ۶۸ هفته): میانگین کاهش وزن ۱۴٫۹٪ در برابر ۲٫۴٪ با دارونما.",
        en: "STEP 1 (1,961 adults without diabetes, 68 weeks): mean weight change −14.9% versus −2.4% with placebo.",
      },
      {
        fa: "SUSTAIN-6 (۳۲۹۷ بیمار دیابت نوع ۲ با خطر قلبی بالا): رویداد قلبی‌عروقی اصلی ۶٫۶٪ در برابر ۸٫۹٪. عوارض رتینوپاتی در گروه دارو بیشتر بود.",
        en: "SUSTAIN-6 (3,297 type 2 diabetes patients at high cardiovascular risk): major cardiovascular events 6.6% versus 8.9%. Retinopathy complications were more frequent on the drug.",
      },
      {
        fa: "عارضه‌های شایع گوارشی‌اند و بیشترین دلیل قطع دارو بودند. این داده‌ها مال قلم مجاز با نظارت پزشک است، نه ویال پژوهشی.",
        en: "Gastrointestinal effects are common and were the main reason for stopping. These data belong to the licensed pen under medical supervision, not to a research vial.",
      },
    ],
    literature: [
      {
        title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity",
        journal: "New England Journal of Medicine",
        year: "2021",
        pmid: "33567185",
        doi: "10.1056/NEJMoa2032183",
        model: { fa: "کارآزمایی تصادفی دوسوکور، بزرگسال دارای چاقی یا اضافه‌وزن", en: "Randomised double-blind trial in adults with obesity or overweight" },
        finding: {
          fa: "در ۶۸ هفته، میانگین کاهش وزن ۱۴٫۹٪ در برابر ۲٫۴٪ با دارونما بود.",
          en: "Over 68 weeks, mean weight loss was 14.9% versus 2.4% with placebo.",
        },
      },
      {
        title: "Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes",
        journal: "New England Journal of Medicine",
        year: "2016",
        pmid: "27633186",
        doi: "10.1056/NEJMoa1607141",
        model: { fa: "کارآزمایی تصادفی در دیابت نوع ۲ با خطر قلبی بالا", en: "Randomised trial in type 2 diabetes at high cardiovascular risk" },
        finding: {
          fa: "خطر مرگ قلبی، سکتهٔ قلبی یا مغزی غیرکشنده کمتر بود (نسبت خطر ۰٫۷۴)، ولی عوارض رتینوپاتی بیشتر بود.",
          en: "Cardiovascular death, non-fatal heart attack, or non-fatal stroke was lower (hazard ratio 0.74), but retinopathy complications were higher.",
        },
      },
    ],
    storage: licensedStorage,
  },
  tirzepatide: {
    sequence: ["Tyr", "Aib", "Glu", "Gly", "Thr", "Phe", "Thr", "Ser", "Asp", "Tyr", "Ser", "Ile", "Aib", "Leu", "Asp", "Lys", "Ile", "Ala", "Gln", "Lys(C20)", "Ala", "Phe", "Val", "Gln", "Trp", "Leu", "Ile", "Ala", "Gly", "Gly", "Pro", "Ser", "Ser", "Gly", "Ala", "Pro", "Pro", "Pro", "Ser-NH2"],
    sequenceNote: {
      fa: "۳۹ ریشه بر پایهٔ توالی GIP، با دو Aib و انتهای C آمیدی. لیزین جایگاه ۲۰ یک اسید چرب C20 دارد که به آلبومین می‌چسبد.",
      en: "39 residues built on the GIP sequence, with two Aib residues and an amidated C-terminus. The lysine at position 20 carries a C20 fatty diacid that binds albumin.",
    },
    halfLife: {
      fa: "حدود پنج روز. از ابتدا برای تزریق هفتگی طراحی شد.",
      en: "About five days. It was designed from the start for once-weekly injection.",
    },
    receptors: {
      fa: "گیرندهٔ GIP و گیرندهٔ GLP-1، با اثر قوی‌تر روی گیرندهٔ GIP.",
      en: "The GIP and GLP-1 receptors, with stronger activity at the GIP receptor.",
    },
    mechanism: {
      fa: "تیرزپاتاید گیرندهٔ هر دو هورمون اینکرتین را فعال می‌کند. در موش، کاهش وزن و دریافت غذا بیشتر از یک آگونیست انتخابی GLP-1 بود. سهم دقیق گیرندهٔ GIP در انسان هنوز محل بحث است.",
      en: "Tirzepatide activates the receptors of both incretin hormones. In mice it cut body weight and food intake more than a selective GLP-1 agonist. The exact share of the GIP receptor in humans is still debated.",
    },
    studies: [
      {
        fa: "SURMOUNT-1 (۲۵۳۹ بزرگسال بدون دیابت، ۷۲ هفته): میانگین کاهش وزن از ۱۵٪ تا ۲۰٫۹٪ در سه سطح دوز، در برابر ۳٫۱٪ با دارونما.",
        en: "SURMOUNT-1 (2,539 adults without diabetes, 72 weeks): mean weight change from −15% to −20.9% across three dose levels, versus −3.1% with placebo.",
      },
      {
        fa: "SURMOUNT-5 (۷۵۱ بزرگسال بدون دیابت، مقایسهٔ مستقیم، ۷۲ هفته): میانگین کاهش وزن ۲۰٫۲٪ با تیرزپاتاید در برابر ۱۳٫۷٪ با سماگلوتاید.",
        en: "SURMOUNT-5 (751 adults without diabetes, head to head, 72 weeks): mean weight loss 20.2% with tirzepatide versus 13.7% with semaglutide.",
      },
      {
        fa: "فاز ۱: عارضه‌های اصلی گوارشی (تهوع، استفراغ، اسهال) و وابسته به دوز بودند.",
        en: "Phase 1: the main side effects were gastrointestinal (nausea, vomiting, diarrhoea) and dose-dependent.",
      },
    ],
    literature: [
      {
        title: "Tirzepatide Once Weekly for the Treatment of Obesity",
        journal: "New England Journal of Medicine",
        year: "2022",
        pmid: "35658024",
        doi: "10.1056/NEJMoa2206038",
        model: { fa: "کارآزمایی فاز ۳ تصادفی دوسوکور در چاقی", en: "Phase 3 randomised double-blind obesity trial" },
        finding: {
          fa: "در ۷۲ هفته، هر سه سطح دوز کاهش وزنی بسیار بیشتر از دارونما داشتند.",
          en: "Over 72 weeks, all three dose levels produced far more weight loss than placebo.",
        },
      },
      {
        title: "Tirzepatide as Compared with Semaglutide for the Treatment of Obesity",
        journal: "New England Journal of Medicine",
        year: "2025",
        pmid: "40353578",
        doi: "10.1056/NEJMoa2416394",
        model: { fa: "کارآزمایی فاز ۳b، مقایسهٔ مستقیم با سماگلوتاید", en: "Phase 3b head-to-head trial against semaglutide" },
        finding: {
          fa: "در ۷۲ هفته، کاهش وزن و دور کمر با تیرزپاتاید بیشتر از سماگلوتاید بود.",
          en: "Over 72 weeks, tirzepatide reduced weight and waist circumference more than semaglutide.",
        },
      },
      {
        title: "LY3298176, a novel dual GIP and GLP-1 receptor agonist for the treatment of type 2 diabetes mellitus: From discovery to clinical proof of concept",
        journal: "Molecular Metabolism",
        year: "2018",
        pmid: "30473097",
        doi: "10.1016/j.molmet.2018.09.009",
        model: { fa: "سلول، موش و فاز ۱ انسانی", en: "Cells, mice, and human phase 1" },
        finding: {
          fa: "مقالهٔ کشف دارو: فعال شدن هر دو گیرنده در سلول، کاهش وزن در موش و پروفایل مناسب برای تزریق هفتگی در انسان.",
          en: "The discovery paper: both receptors activated in cells, weight loss in mice, and a profile suited to weekly injection in people.",
        },
      },
    ],
    storage: licensedStorage,
  },
  retatrutide: {
    halfLife: {
      fa: "برای تزریق هفتگی طراحی شده و کارآزمایی فاز ۲ هم با تزریق هفتگی انجام شد.",
      en: "Designed for once-weekly injection, and the phase 2 trial used weekly injections.",
    },
    receptors: {
      fa: "سه گیرنده: GIP، GLP-1 و گلوکاگون.",
      en: "Three receptors: GIP, GLP-1, and glucagon.",
    },
    mechanism: {
      fa: "افزودن اثر گلوکاگون به دو گیرندهٔ اینکرتین با این فرض طراحی شد که مصرف انرژی و سوخت چربی کبد هم بالا برود. این صفحه فقط کارآزمایی فاز ۲ منتشرشده در NEJM را خلاصه می‌کند. نتیجه و وضعیت مجوز پس از فاز ۳ را باید از مرجع دارویی دید.",
      en: "Adding glucagon activity to the two incretin receptors was meant to raise energy expenditure and liver fat burning as well. This page only summarises the phase 2 trial published in NEJM. Phase 3 results and licensing status have to be checked with a medicines regulator.",
    },
    studies: [
      {
        fa: "فاز ۲ (۳۳۸ بزرگسال، ۴۸ هفته): در هفتهٔ ۲۴، میانگین کاهش وزن در بالاترین سطح دوز ۱۷٫۵٪ بود، در برابر ۱٫۶٪ با دارونما.",
        en: "Phase 2 (338 adults, 48 weeks): at week 24, mean weight change at the highest dose level was −17.5%, versus −1.6% with placebo.",
      },
      {
        fa: "عارضه‌های شایع گوارشی بودند و با دوز بالاتر بیشتر شدند. افزایش ضربان قلب وابسته به دوز هم گزارش شد.",
        en: "Common side effects were gastrointestinal and rose with dose. A dose-related rise in heart rate was also reported.",
      },
    ],
    literature: [
      {
        title: "Triple-Hormone-Receptor Agonist Retatrutide for Obesity - A Phase 2 Trial",
        journal: "New England Journal of Medicine",
        year: "2023",
        pmid: "37366315",
        doi: "10.1056/NEJMoa2301972",
        model: { fa: "کارآزمایی فاز ۲ تصادفی دوسوکور در چاقی", en: "Phase 2 randomised double-blind obesity trial" },
        finding: {
          fa: "کاهش وزن وابسته به دوز بود و در ۲۴ هفته در بالاترین سطح دوز به ۱۷٫۵٪ رسید.",
          en: "Weight loss was dose-dependent and reached 17.5% at the highest dose level by week 24.",
        },
      },
    ],
    storage,
  },
  "pt-141": {
    sequence: ["Ac-Nle", "Asp", "His", "D-Phe", "Arg", "Trp", "Lys-OH"],
    sequenceNote: {
      fa: "هفت ریشهٔ حلقوی: پیوند لاکتام بین Asp و Lys حلقه را می‌بندد. اسکلت آن همان ملانوتان ۲ است، با این تفاوت که انتهای C اسید آزاد است نه آمید.",
      en: "Seven cyclic residues: a lactam bond between Asp and Lys closes the ring. The scaffold is that of Melanotan II, except that the C-terminus is a free acid rather than an amide.",
    },
    halfLife: {
      fa: "در برگهٔ فراوردهٔ آمریکایی، نیمه‌عمر پلاسمایی چندساعته ذکر شده است.",
      en: "The US product label gives a plasma half-life of a few hours.",
    },
    receptors: {
      fa: "گیرنده‌های ملانوکورتین، به‌ویژه MC4R در مغز. فعالیت روی MC1R هم دارد.",
      en: "Melanocortin receptors, chiefly MC4R in the brain. It also acts at MC1R.",
    },
    mechanism: {
      fa: "برملانوتید با فعال کردن MC4R در مسیرهای مغزیِ میل جنسی کار می‌کند، نه با گشاد کردن عروق مثل سیلدنافیل. فعالیت روی MC1R توضیح می‌دهد چرا تیره شدن موضعی پوست در برگهٔ فراورده آمده است.",
      en: "Bremelanotide works by activating MC4R in brain pathways of sexual desire, not by widening blood vessels like sildenafil. Its MC1R activity explains why focal skin darkening appears on the label.",
    },
    studies: [
      {
        fa: "RECONNECT (دو کارآزمایی فاز ۳، ۱۲۶۷ زن پیش از یائسگی، ۲۴ هفته): افزایش معنادار امتیاز میل جنسی و کاهش پریشانی مرتبط با آن نسبت به دارونما.",
        en: "RECONNECT (two phase 3 trials, 1,267 premenopausal women, 24 weeks): significant gains in desire scores and less related distress versus placebo.",
      },
      {
        fa: "تهوع شایع‌ترین عارضه بود. افزایش گذرای فشار خون هم در برگهٔ فراورده هشدار داده شده است.",
        en: "Nausea was the commonest side effect. A transient rise in blood pressure is also a label warning.",
      },
      {
        fa: "با نام Vyleesi در آمریکا مجوز دارد. داروی مجاز بریتانیا یا EMA نیست.",
        en: "Licensed in the United States as Vyleesi. It is not a UK or EMA authorised medicine.",
      },
    ],
    literature: [
      {
        title: "Bremelanotide for the Treatment of Hypoactive Sexual Desire Disorder: Two Randomized Phase 3 Trials",
        journal: "Obstetrics & Gynecology",
        year: "2019",
        pmid: "31599840",
        doi: "10.1097/AOG.0000000000003500",
        model: { fa: "دو کارآزمایی فاز ۳ تصادفی دوسوکور", en: "Two randomised double-blind phase 3 trials" },
        finding: {
          fa: "در هر دو کارآزمایی، میل جنسی بیشتر و پریشانی کمتر از گروه دارونما بود.",
          en: "In both trials, desire rose and distress fell more than with placebo.",
        },
      },
    ],
    storage: licensedStorage,
  },
  "melanotan-ii": {
    sequence: ["Ac-Nle", "Asp", "His", "D-Phe", "Arg", "Trp", "Lys-NH2"],
    sequenceNote: {
      fa: "قطعهٔ ۴ تا ۱۰ α-MSH با نورلوسین و D-Phe، حلقوی با پل لاکتام بین Asp و Lys و انتهای C آمیدی.",
      en: "The α-MSH 4–10 fragment with norleucine and D-Phe, cyclised by an Asp–Lys lactam bridge, with an amidated C-terminus.",
    },
    halfLife: {
      fa: "نیمه‌عمر انسانیِ دارای پروانه ندارد. فقط یک مطالعهٔ کوچک فاز ۱ منتشر شده است.",
      en: "There is no authorised human half-life. Only a small phase 1 study has been published.",
    },
    receptors: {
      fa: "غیرانتخابی روی گیرنده‌های ملانوکورتین: MC1R (رنگدانه) و MC3R/MC4R (اشتها و رفتار جنسی).",
      en: "Non-selective at melanocortin receptors: MC1R (pigment) and MC3R/MC4R (appetite and sexual behaviour).",
    },
    mechanism: {
      fa: "ملانوتان ۲ مثل α-MSH ولی قوی‌تر و پایدارتر عمل می‌کند. فعال شدن MC1R ملانین پوست را بالا می‌برد و فعال شدن MC4R نعوظ خودبه‌خود و کاهش اشتها را توضیح می‌دهد. همین غیرانتخابی بودن، طیف عارضه‌ها را هم توضیح می‌دهد.",
      en: "Melanotan II acts like α-MSH, only stronger and longer-lasting. MC1R activation raises skin melanin, and MC4R activation explains spontaneous erections and reduced appetite. The same lack of selectivity explains its range of side effects.",
    },
    studies: [
      {
        fa: "فاز ۱ آزمایشی (۳ مرد): تیره شدن پوست، تهوع خفیف، خواب‌آلودگی و نعوظ خودبه‌خود گزارش شد.",
        en: "Pilot phase 1 (3 men): skin darkening, mild nausea, drowsiness, and spontaneous erections were reported.",
      },
      {
        fa: "پس از مصرف غیرمجاز، گزارش‌های موردی تغییر خال و ملانوم منتشر شده است. رابطهٔ علّی ثابت نشده، ولی همین گزارش‌ها دلیل پرچم «پرخطر» است.",
        en: "Case reports of changing moles and melanoma have followed unlicensed use. Causation is not established, but those reports are why it carries a high-risk flag.",
      },
    ],
    literature: [
      {
        title: "Evaluation of melanotan-II, a superpotent cyclic melanotropic peptide in a pilot phase-I clinical study",
        journal: "Life Sciences",
        year: "1996",
        pmid: "8637402",
        doi: "10.1016/0024-3205(96)00160-9",
        model: { fa: "مطالعهٔ آزمایشی فاز ۱ در ۳ داوطلب", en: "Pilot phase 1 study in 3 volunteers" },
        finding: {
          fa: "تیره شدن پوست در انسان نشان داده شد، همراه با تهوع، خستگی و نعوظ خودبه‌خود.",
          en: "Showed tanning in humans, along with nausea, fatigue, and spontaneous erections.",
        },
      },
    ],
    storage,
  },
  "mots-c": {
    sequence: ["Met", "Arg", "Trp", "Gln", "Glu", "Met", "Gly", "Tyr", "Ile", "Phe", "Tyr", "Pro", "Arg", "Lys", "Leu", "Arg"],
    sequenceNote: {
      fa: "۱۶ ریشه که در ژن 12S rRNA میتوکندری رمز شده است.",
      en: "16 residues encoded within the mitochondrial 12S rRNA gene.",
    },
    halfLife: {
      fa: "دادهٔ فارماکوکینتیک انسانیِ منتشرشده و قابل اتکا ندارد.",
      en: "There are no reliable published human pharmacokinetic data.",
    },
    receptors: {
      fa: "گیرندهٔ کلاسیکِ شناخته‌شده ندارد. در مقالهٔ اصلی، مهار چرخهٔ فولات و فعال شدن AMPK در عضلهٔ اسکلتی گزارش شد.",
      en: "No classical receptor is known. The original paper reported folate-cycle inhibition and AMPK activation in skeletal muscle.",
    },
    mechanism: {
      fa: "MOTS-c از DNA میتوکندری ساخته می‌شود. در موش، با مهار چرخهٔ فولات و ساخت پورین، AMPK را فعال کرد و عضلهٔ اسکلتی هدف اصلی به نظر رسید. این یافته‌ها از موش است، نه کارآزمایی انسانی.",
      en: "MOTS-c is made from mitochondrial DNA. In mice it inhibited the folate cycle and purine synthesis, activated AMPK, and skeletal muscle appeared to be the main target. These findings are from mice, not human trials.",
    },
    studies: [
      {
        fa: "موش با رژیم پرچرب: پیشگیری از مقاومت به انسولین و چاقی ناشی از رژیم.",
        en: "Mice on a high-fat diet: prevention of diet-induced insulin resistance and obesity.",
      },
      {
        fa: "موش مسن: پیشگیری از مقاومت به انسولینِ وابسته به سن.",
        en: "Older mice: prevention of age-related insulin resistance.",
      },
      {
        fa: "کارآزمایی انسانیِ منتشرشده‌ای که برای مجوز دارو کافی باشد وجود ندارد.",
        en: "No published human trial is sufficient for a medicine licence.",
      },
    ],
    literature: [
      {
        title: "The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance",
        journal: "Cell Metabolism",
        year: "2015",
        pmid: "25738459",
        doi: "10.1016/j.cmet.2015.02.009",
        model: { fa: "سلول و موش", en: "Cells and mice" },
        finding: {
          fa: "MOTS-c معرفی شد و در موش از مقاومت به انسولین و چاقی ناشی از رژیم پرچرب پیشگیری کرد.",
          en: "Introduced MOTS-c and showed it prevented insulin resistance and diet-induced obesity in mice.",
        },
      },
    ],
    storage,
  },
  "ss-31": {
    sequence: ["D-Arg", "Dmt", "Lys", "Phe-NH2"],
    sequenceNote: {
      fa: "Dmt یعنی ۲′،۶′-دی‌متیل‌تیروزین. تتراپپتید کوچک با بار مثبت که به غشای داخلی میتوکندری می‌رسد.",
      en: "Dmt is 2′,6′-dimethyltyrosine. A small, positively charged tetrapeptide that reaches the inner mitochondrial membrane.",
    },
    halfLife: {
      fa: "دادهٔ فارماکوکینتیک انسانی از کارآزمایی‌های بیماری میتوکندریایی می‌آید و محدود است.",
      en: "Human pharmacokinetic data come from mitochondrial-disease trials and are limited.",
    },
    receptors: {
      fa: "کاردیولیپین در غشای داخلی میتوکندری. گیرندهٔ سطح سلولی ندارد.",
      en: "Cardiolipin in the inner mitochondrial membrane. It has no cell-surface receptor.",
    },
    mechanism: {
      fa: "SS-31 به کاردیولیپین می‌چسبد، فسفولیپیدی که برای چیدمان زنجیرهٔ تنفسی لازم است. فرض این است که با پایدار کردن کاردیولیپین، تولید انرژی بهتر و تولید رادیکال آزاد کمتر شود. سندرم بارت دقیقاً نقص در ساخت کاردیولیپین است.",
      en: "SS-31 binds cardiolipin, a phospholipid the respiratory chain needs to stay organised. The idea is that stabilising cardiolipin improves energy production and reduces free-radical output. Barth syndrome is precisely a defect in cardiolipin synthesis.",
    },
    studies: [
      {
        fa: "TAZPOWER (۱۲ بیمار سندرم بارت): در بخش تصادفی متقاطع، دو پیامد اصلی به هدف نرسید. در ادامهٔ باز تا ۳۶ هفته، آزمون راه رفتن ۶ دقیقه و نشانه‌ها بهتر شد.",
        en: "TAZPOWER (12 Barth syndrome patients): in the randomised crossover part, neither primary endpoint was met. In the open-label extension to 36 weeks, the 6-minute walk test and symptoms improved.",
      },
      {
        fa: "FDA در سپتامبر ۲۰۲۵ با نام Forzinity برای سندرم بارت «مجوز سریع» داد. این مجوز بر پایهٔ یک نشانگر جانشین (قدرت عضلهٔ بازکنندهٔ زانو) است و کارآزمایی تأییدی لازم دارد.",
        en: "In September 2025 the FDA granted accelerated approval as Forzinity for Barth syndrome. The approval rests on a surrogate marker (knee-extensor strength) and requires a confirmatory trial.",
      },
    ],
    literature: [
      {
        title: "A phase 2/3 randomized clinical trial followed by an open-label extension to evaluate the effectiveness of elamipretide in Barth syndrome, a genetic disorder of mitochondrial cardiolipin metabolism",
        journal: "Genetics in Medicine",
        year: "2021",
        pmid: "33077895",
        doi: "10.1038/s41436-020-01006-8",
        model: { fa: "کارآزمایی متقاطع تصادفی و ادامهٔ باز", en: "Randomised crossover trial and open-label extension" },
        finding: {
          fa: "بخش تصادفی به هدف اصلی نرسید؛ در ادامهٔ باز، راه رفتن و نشانه‌ها بهتر شد.",
          en: "The randomised part missed its primary endpoints; walking and symptoms improved in the open-label extension.",
        },
      },
    ],
    storage,
  },
  "thymosin-alpha-1": {
    sequence: ["Ac-Ser", "Asp", "Ala", "Ala", "Val", "Asp", "Thr", "Ser", "Ser", "Glu", "Ile", "Thr", "Thr", "Lys", "Asp", "Leu", "Lys", "Glu", "Lys", "Lys", "Glu", "Val", "Val", "Glu", "Glu", "Ala", "Glu", "Asn"],
    sequenceNote: {
      fa: "۲۸ ریشه با استیل در انتهای N. نخستین بار از تیموس گوساله جدا و توالی‌یابی شد.",
      en: "28 residues with an N-terminal acetyl group. It was first isolated from calf thymus and sequenced.",
    },
    halfLife: {
      fa: "نیمه‌عمر پلاسمایی حدود دو ساعت گزارش شده است.",
      en: "A plasma half-life of about two hours has been reported.",
    },
    receptors: {
      fa: "در پژوهش‌ها، گیرنده‌های شبه Toll (TLR) روی سلول‌های دندریتیک مطرح شده‌اند.",
      en: "Studies point to Toll-like receptors (TLRs) on dendritic cells.",
    },
    mechanism: {
      fa: "تیموزین آلفا-۱ بیشتر تعدیل‌کنندهٔ ایمنی توصیف می‌شود: در پژوهش‌ها با بلوغ سلول T و فعال شدن سلول دندریتیک همراه بوده است. یک محرک عمومی ایمنی نیست و اثرش به وضعیت ایمنی بیمار بستگی دارد.",
      en: "Thymosin alpha-1 is mostly described as an immune modulator: studies link it to T-cell maturation and dendritic-cell activation. It is not a general immune booster, and its effect depends on the patient’s immune state.",
    },
    studies: [
      {
        fa: "با نام Zadaxin (تیمالفاسین) در برخی کشورها برای هپاتیت B مزمن و به‌عنوان کمک ایمنی مجوز دارد. FDA آن را تأیید نکرده و مجوز مرکزی EMA ندارد.",
        en: "Licensed in some countries as Zadaxin (thymalfasin) for chronic hepatitis B and as an immune adjuvant. It is not FDA approved and has no central EMA authorisation.",
      },
      {
        fa: "مقالهٔ ۱۹۷۷ در PNAS ترکیب و توالی آن را گزارش کرد.",
        en: "A 1977 PNAS paper reported its composition and sequence.",
      },
    ],
    literature: [
      {
        title: "Thymosin alpha1: isolation and sequence analysis of an immunologically active thymic polypeptide",
        journal: "Proceedings of the National Academy of Sciences",
        year: "1977",
        pmid: "265536",
        doi: "10.1073/pnas.74.2.725",
        model: { fa: "جداسازی از تیموس گوساله", en: "Isolation from calf thymus" },
        finding: {
          fa: "پلی‌پپتیدی اسیدی و مقاوم به حرارت با ۲۸ ریشه معرفی شد که ممکن است در تمایز سلول T نقش داشته باشد.",
          en: "Described a heat-stable, acidic 28-residue polypeptide that may take part in T-cell differentiation.",
        },
      },
    ],
    storage: licensedStorage,
  },
  kpv: {
    sequence: ["Lys", "Pro", "Val"],
    sequenceNote: {
      fa: "سه ریشهٔ انتهایی α-MSH (جایگاه ۱۱ تا ۱۳).",
      en: "The last three residues of α-MSH (positions 11–13).",
    },
    halfLife: {
      fa: "دادهٔ فارماکوکینتیک انسانی منتشر نشده است.",
      en: "No human pharmacokinetic data have been published.",
    },
    receptors: {
      fa: "در مقالهٔ Gastroenterology، KPV از راه ناقل پپتید PepT1 وارد سلول‌های روده و ایمنی شد و اثر ضدالتهابی‌اش به همین ناقل نسبت داده شد.",
      en: "In the Gastroenterology paper, KPV entered gut and immune cells through the PepT1 peptide transporter, and its anti-inflammatory effect was attributed to that transporter.",
    },
    mechanism: {
      fa: "در غلظت نانومولار، مسیرهای التهابی NF-κB و MAP کیناز را مهار کرد و ترشح سیتوکین‌های التهابی را کم کرد. PepT1 در التهاب روده در کولون بیشتر بیان می‌شود و همین، KPV را به یک ایدهٔ پژوهشی برای بیماری التهابی روده تبدیل کرده است.",
      en: "At nanomolar concentrations it inhibited NF-κB and MAP-kinase inflammatory signalling and reduced inflammatory cytokine release. PepT1 is induced in the colon during gut inflammation, which is why KPV became a research idea for inflammatory bowel disease.",
    },
    studies: [
      {
        fa: "کشت سلول اپی‌تلیال روده و سلول T انسانی: کاهش سیگنال NF-κB.",
        en: "Human intestinal epithelial and T-cell cultures: reduced NF-κB signalling.",
      },
      {
        fa: "مدل کولیت موش (DSS و TNBS): KPV خوراکی در آب آشامیدنی شدت کولیت را کم کرد.",
        en: "Mouse colitis models (DSS and TNBS): oral KPV in drinking water reduced colitis.",
      },
      {
        fa: "کارآزمایی انسانی منتشرشده برای مجوز دارو وجود ندارد.",
        en: "No published human trial supports a medicine licence.",
      },
    ],
    literature: [
      {
        title: "PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation",
        journal: "Gastroenterology",
        year: "2008",
        pmid: "18061177",
        doi: "10.1053/j.gastro.2007.10.026",
        model: { fa: "کشت سلول انسانی و دو مدل کولیت موش", en: "Human cell culture and two mouse colitis models" },
        finding: {
          fa: "KPV از راه PepT1 جذب شد و التهاب سلولی و کولیت موش را کم کرد.",
          en: "KPV was taken up through PepT1 and reduced cellular inflammation and colitis in mice.",
        },
      },
    ],
    storage,
  },
  "kisspeptin-10": {
    sequence: ["Tyr", "Asn", "Trp", "Asn", "Gly", "Phe", "Gly", "Leu", "Arg", "Phe-NH2"],
    sequenceNote: {
      fa: "ده ریشهٔ انتهای C کیسپپتین-۵۴، با انتهای آمیدی. کوتاه‌ترین قطعه با فعالیت کامل روی گیرنده.",
      en: "The ten C-terminal residues of kisspeptin-54, amidated. The shortest fragment with full activity at the receptor.",
    },
    halfLife: {
      fa: "در پلاسما بسیار کوتاه (چند دقیقه) است. به همین دلیل در مطالعات انسانی از انفوزیون پیوسته هم استفاده شده است.",
      en: "Very short in plasma (minutes). That is why human studies have also used continuous infusion.",
    },
    receptors: {
      fa: "گیرندهٔ KISS1R (GPR54) روی نورون‌های GnRH هیپوتالاموس.",
      en: "KISS1R (GPR54) on hypothalamic GnRH neurons.",
    },
    mechanism: {
      fa: "کیسپپتین بالادست GnRH قرار دارد: با فعال کردن KISS1R، ترشح GnRH و در پی آن LH و FSH را بالا می‌برد. ژن KISS1 نخست به‌عنوان مهارکنندهٔ متاستاز شناخته شد و نام «متاستین» از همین‌جاست.",
      en: "Kisspeptin sits upstream of GnRH: by activating KISS1R it raises GnRH release and, after it, LH and FSH. The KISS1 gene was first known as a metastasis suppressor, which is where the name metastin comes from.",
    },
    studies: [
      {
        fa: "مردان سالم: تزریق وریدی یک‌باره LH را سریع و وابسته به دوز بالا برد. انفوزیون پیوسته تستوسترون و فراوانی پالس LH را افزایش داد.",
        en: "Healthy men: a single intravenous bolus raised LH quickly and dose-dependently. Continuous infusion raised testosterone and LH pulse frequency.",
      },
      {
        fa: "مقالهٔ Nature در ۲۰۰۱ کیسپپتین را لیگاند گیرندهٔ یتیمِ GPR54 معرفی کرد.",
        en: "A 2001 Nature paper identified kisspeptin as the ligand of the orphan receptor GPR54.",
      },
    ],
    literature: [
      {
        title: "Kisspeptin-10 is a potent stimulator of LH and increases pulse frequency in men",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: "2011",
        pmid: "21632807",
        doi: "10.1210/jc.2011-0089",
        model: { fa: "مطالعهٔ بالینی در مردان سالم", en: "Clinical study in healthy men" },
        finding: {
          fa: "کیسپپتین-۱۰ محرک قوی LH بود و فراوانی و اندازهٔ پالس LH را بالا برد.",
          en: "Kisspeptin-10 was a potent LH stimulator and increased LH pulse frequency and size.",
        },
      },
      {
        title: "Metastasis suppressor gene KiSS-1 encodes peptide ligand of a G-protein-coupled receptor",
        journal: "Nature",
        year: "2001",
        pmid: "11385580",
        doi: "10.1038/35079135",
        model: { fa: "جداسازی از جفت انسان و سلول", en: "Isolation from human placenta, cell studies" },
        finding: {
          fa: "محصول ژن KiSS-1 (متاستین، ۵۴ ریشه) لیگاند درونی یک گیرندهٔ جفت‌شده با پروتئین G معرفی شد.",
          en: "The KiSS-1 gene product (metastin, 54 residues) was identified as the endogenous ligand of a G-protein-coupled receptor.",
        },
      },
    ],
    storage,
  },
  tesamorelin: {
    sequence: ["Hex-Tyr", "Ala", "Asp", "Ala", "Ile", "Phe", "Thr", "Asn", "Ser", "Tyr", "Arg", "Lys", "Val", "Leu", "Gly", "Gln", "Leu", "Ser", "Ala", "Arg", "Lys", "Leu", "Leu", "Gln", "Asp", "Ile", "Met", "Ser", "Arg", "Gln", "Gln", "Gly", "Glu", "Ser", "Asn", "Gln", "Glu", "Arg", "Gly", "Ala", "Arg", "Ala", "Arg", "Leu-NH2"],
    sequenceNote: {
      fa: "توالی کامل ۴۴ ریشه‌ای GHRH انسان با گروه trans-3-hexenoyl روی انتهای N که برش با DPP-4 را کند می‌کند.",
      en: "The full 44-residue human GHRH sequence with a trans-3-hexenoyl group on the N-terminus, which slows cleavage by DPP-4.",
    },
    halfLife: {
      fa: "در برگهٔ فراوردهٔ آمریکایی حدود نیم ساعت ذکر شده است.",
      en: "The US product label gives about half an hour.",
    },
    receptors: {
      fa: "گیرندهٔ GHRH روی هیپوفیز قدامی.",
      en: "The GHRH receptor on the anterior pituitary.",
    },
    mechanism: {
      fa: "تسامورلین ترشح هورمون رشد از خود هیپوفیز را بالا می‌برد؛ هورمون رشد تزریقی نیست. بالا رفتن هورمون رشد و IGF-1 با کاهش چربی احشایی همراه بود.",
      en: "Tesamorelin raises growth-hormone release from the pituitary itself; it is not injected growth hormone. Higher growth hormone and IGF-1 went with less visceral fat.",
    },
    studies: [
      {
        fa: "۴۱۲ بیمار HIV با تجمع چربی شکمی، ۲۶ هفته: چربی احشایی ۱۵٫۲٪ کم شد، در برابر ۵٪ افزایش با دارونما. تری‌گلیسرید هم پایین آمد.",
        en: "412 HIV patients with abdominal fat accumulation, 26 weeks: visceral fat fell 15.2%, versus a 5% rise with placebo. Triglycerides also fell.",
      },
      {
        fa: "IGF-1 در گروه دارو ۸۱٪ بالا رفت. در برگهٔ فراورده دربارهٔ IGF-1 و قند خون هشدار آمده است.",
        en: "IGF-1 rose 81% on the drug. The label carries warnings about IGF-1 and blood glucose.",
      },
      {
        fa: "با نام Egrifta در آمریکا مجوز دارد و در فهرست ممنوعهٔ ورزشی است.",
        en: "Licensed in the United States as Egrifta, and on the sports prohibited list.",
      },
    ],
    literature: [
      {
        title: "Metabolic effects of a growth hormone-releasing factor in patients with HIV",
        journal: "New England Journal of Medicine",
        year: "2007",
        pmid: "18057338",
        doi: "10.1056/NEJMoa072375",
        model: { fa: "کارآزمایی تصادفی چندمرکزی", en: "Multicentre randomised trial" },
        finding: {
          fa: "در ۲۶ هفته چربی احشایی و تری‌گلیسرید کاهش یافت و IGF-1 بالا رفت.",
          en: "Over 26 weeks, visceral fat and triglycerides fell and IGF-1 rose.",
        },
      },
    ],
    storage: licensedStorage,
  },
  "aod-9604": {
    sequence: ["Tyr", "Leu", "Arg", "Ile", "Val", "Gln", "Cys", "Arg", "Ser", "Val", "Glu", "Gly", "Ser", "Cys", "Gly", "Phe"],
    sequenceNote: {
      fa: "ریشه‌های ۱۷۷ تا ۱۹۱ هورمون رشد انسان با یک Tyr اضافه در انتهای N (در هورمون طبیعی جایگاه ۱۷۶ فنیل‌آلانین است). دو سیستئین پل دی‌سولفید می‌سازند.",
      en: "Residues 177–191 of human growth hormone with an extra N-terminal Tyr (the natural hormone has phenylalanine at 176). The two cysteines form a disulfide bridge.",
    },
    halfLife: {
      fa: "نیمه‌عمر انسانیِ دارای پروانه ندارد.",
      en: "There is no authorised human half-life.",
    },
    receptors: {
      fa: "گیرندهٔ هورمون رشد را مثل هورمون کامل فعال نمی‌کند. مسیر چربی‌سوزی آن در موش بررسی شده است.",
      en: "It does not activate the growth-hormone receptor like the full hormone. Its fat-burning pathway was studied in mice.",
    },
    mechanism: {
      fa: "ایدهٔ این قطعه جدا کردن اثر چربی‌سوزی هورمون رشد از اثر رشد و قند خون بود. در موش چاق، وزن و چربی بدن کم شد و بیان گیرندهٔ β3-آدرنرژیک بالا رفت، ولی اثر چربی‌سوزی مستقیماً از راه همین گیرنده نبود.",
      en: "The idea was to separate growth hormone’s fat-burning effect from its growth and blood-sugar effects. In obese mice, body weight and fat fell and β3-adrenergic receptor expression rose, but the fat-burning effect did not run directly through that receptor.",
    },
    studies: [
      {
        fa: "موش چاق: کاهش وزن و چربی بدن پس از ۱۴ روز.",
        en: "Obese mice: lower body weight and fat after 14 days.",
      },
      {
        fa: "توسعهٔ بالینی آن برای چاقی به داروی مجاز نرسید.",
        en: "Clinical development for obesity did not lead to a licensed medicine.",
      },
    ],
    literature: [
      {
        title: "The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta(3)-AR knock-out mice",
        journal: "Endocrinology",
        year: "2001",
        pmid: "11713213",
        doi: "10.1210/endo.142.12.8522",
        model: { fa: "موش چاق و موش فاقد گیرندهٔ β3", en: "Obese mice and β3-receptor knockout mice" },
        finding: {
          fa: "هورمون رشد و AOD9604 وزن و چربی موش چاق را کم کردند؛ اثر چربی‌سوزی مستقیماً از گیرندهٔ β3 نبود.",
          en: "Growth hormone and AOD9604 cut weight and fat in obese mice; the fat-burning effect was not directly through the β3 receptor.",
        },
      },
    ],
    storage,
  },
  sermorelin: {
    sequence: ["Tyr", "Ala", "Asp", "Ala", "Ile", "Phe", "Thr", "Asn", "Ser", "Tyr", "Arg", "Lys", "Val", "Leu", "Gly", "Gln", "Leu", "Ser", "Ala", "Arg", "Lys", "Leu", "Leu", "Gln", "Asp", "Ile", "Met", "Ser", "Arg-NH2"],
    sequenceNote: {
      fa: "۲۹ ریشهٔ اول GHRH انسان با انتهای C آمیدی؛ کوتاه‌ترین پپتید مصنوعی که فعالیت کامل GHRH را دارد.",
      en: "The first 29 residues of human GHRH with an amidated C-terminus; the shortest synthetic peptide with full GHRH activity.",
    },
    halfLife: {
      fa: "در پلاسما چند دقیقه است. در کاربرد تشخیصی، پاسخ هورمون رشد کمی پس از تزریق وریدی سنجیده می‌شد.",
      en: "Minutes in plasma. In diagnostic use, the growth-hormone response was measured shortly after an intravenous injection.",
    },
    receptors: {
      fa: "گیرندهٔ GHRH روی هیپوفیز قدامی.",
      en: "The GHRH receptor on the anterior pituitary.",
    },
    mechanism: {
      fa: "مثل GHRH طبیعی، گیرندهٔ GHRH را فعال می‌کند و ترشح هورمون رشد را به‌طور اختصاصی از هیپوفیز قدامی بالا می‌برد. چون فقط به هیپوفیز سالم نیاز دارد، پاسخ طبیعی به آن کمبود هورمون رشدِ ناشی از نقص هیپوتالاموس را رد نمی‌کند.",
      en: "Like native GHRH, it activates the GHRH receptor and specifically raises growth-hormone release from the anterior pituitary. Because it only needs a working pituitary, a normal response does not rule out growth-hormone deficiency caused by a hypothalamic defect.",
    },
    studies: [
      {
        fa: "آزمون تشخیصی: پاسخ هورمون رشد پس از تزریق وریدی، آزمونی سریع و نسبتاً اختصاصی برای کمبود هورمون رشد کودکان بود.",
        en: "Diagnostic test: the growth-hormone response after an intravenous injection was a quick, fairly specific test for growth-hormone deficiency in children.",
      },
      {
        fa: "درمان: در برخی کودکان پیش از بلوغ با کمبود ایدیوپاتیک، سرعت رشد قد بالا رفت، ولی کمتر از هورمون رشد تزریقی.",
        en: "Treatment: height velocity rose in some prepubertal children with idiopathic deficiency, but less than with injected growth hormone.",
      },
      {
        fa: "شایع‌ترین عارضه‌ها گرگرفتگی گذرای صورت و درد محل تزریق بود.",
        en: "The commonest side effects were transient facial flushing and injection-site pain.",
      },
    ],
    literature: [
      {
        title: "Sermorelin: a review of its use in the diagnosis and treatment of children with idiopathic growth hormone deficiency",
        journal: "BioDrugs",
        year: "1999",
        pmid: "18031173",
        doi: "10.2165/00063030-199912020-00007",
        model: { fa: "مرور مطالعات بالینی کودکان", en: "Review of paediatric clinical studies" },
        finding: {
          fa: "سرمورلین برای آزمون تشخیصی مناسب بود و در برخی کودکان رشد را بهتر کرد؛ اثرش با هورمون رشد مستقیم مقایسه نشده بود.",
          en: "Sermorelin suited diagnostic testing and improved growth in some children; it had not been compared head to head with growth hormone.",
        },
      },
    ],
    storage,
  },
  "ghrp-6": {
    sequence: ["His", "D-Trp", "Ala", "Trp", "D-Phe", "Lys-NH2"],
    sequenceNote: {
      fa: "هگزاپپتید با دو اسید آمینهٔ D. از نخستین سکرتاگوگ‌های مصنوعی هورمون رشد، سال‌ها پیش از کشف گرلین.",
      en: "A hexapeptide with two D-amino acids. One of the first synthetic growth-hormone secretagogues, years before ghrelin was discovered.",
    },
    halfLife: {
      fa: "نیمه‌عمر انسانیِ دارای پروانه ندارد. در موش، هورمون رشد ۲ دقیقه پس از تزریق وریدی بالا رفت، در ۱۰ تا ۲۰ دقیقه به اوج رسید و تا ۲ ساعت به پایه برگشت.",
      en: "There is no authorised human half-life. In rats, growth hormone rose 2 minutes after intravenous injection, peaked at 10–20 minutes, and was back to baseline by 2 hours.",
    },
    receptors: {
      fa: "گیرندهٔ GHS-R1a در هیپوفیز و هیپوتالاموس، همان گیرنده‌ای که بعدها معلوم شد لیگاند طبیعی‌اش گرلین است.",
      en: "GHS-R1a in the pituitary and hypothalamus, the receptor later shown to have ghrelin as its natural ligand.",
    },
    mechanism: {
      fa: "مقالهٔ ۱۹۸۴ در موش ترشح اختصاصی هورمون رشد را گزارش کرد. کارهای بعدی نشان داد GHRP-6 و GHRP-2 ACTH و کورتیزول را هم بالا می‌برند. افزایش اشتها هم اثر شناخته‌شدهٔ فعال شدن گیرندهٔ گرلین است.",
      en: "The 1984 paper reported specific growth-hormone release in rats. Later work showed that GHRP-6 and GHRP-2 also raise ACTH and cortisol. Increased appetite is a known effect of activating the ghrelin receptor.",
    },
    studies: [
      {
        fa: "موش، میمون، بره و گوساله: ترشح هورمون رشد وابسته به دوز در همهٔ گونه‌ها.",
        en: "Rats, monkeys, lambs, and calves: dose-related growth-hormone release in every species.",
      },
      {
        fa: "مقایسه در خوک: برخلاف ایپامورلین، GHRP-6 سطح ACTH و کورتیزول را بالا برد.",
        en: "Comparison in pigs: unlike ipamorelin, GHRP-6 raised ACTH and cortisol.",
      },
    ],
    literature: [
      {
        title: "On the in vitro and in vivo activity of a new synthetic hexapeptide that acts on the pituitary to specifically release growth hormone",
        journal: "Endocrinology",
        year: "1984",
        pmid: "6714155",
        doi: "10.1210/endo-114-5-1537",
        model: { fa: "کشت هیپوفیز و چند گونهٔ جانوری", en: "Pituitary culture and several animal species" },
        finding: {
          fa: "هگزاپپتید جدید در کشت و در جانور، هورمون رشد را به‌صورت وابسته به دوز آزاد کرد.",
          en: "The new hexapeptide released growth hormone in a dose-related way in culture and in animals.",
        },
      },
      {
        title: "Ipamorelin, the first selective growth hormone secretagogue",
        journal: "European Journal of Endocrinology",
        year: "1998",
        pmid: "9849822",
        doi: "10.1530/eje.0.1390552",
        model: { fa: "مقایسه در خوک", en: "Comparison in pigs" },
        finding: {
          fa: "GHRP-6 و GHRP-2 برخلاف ایپامورلین ACTH و کورتیزول را بالا بردند.",
          en: "Unlike ipamorelin, GHRP-6 and GHRP-2 raised ACTH and cortisol.",
        },
      },
    ],
    storage,
  },
  "ghrp-2": {
    sequence: ["D-Ala", "D-2-Nal", "Ala", "Trp", "D-Phe", "Lys-NH2"],
    sequenceNote: {
      fa: "D-2-Nal یعنی D-β-نفتیل‌آلانین. نام دارویی آن پرالمورلین است.",
      en: "D-2-Nal is D-β-naphthylalanine. Its drug name is pralmorelin.",
    },
    halfLife: {
      fa: "نیمه‌عمر انسانیِ دارای پروانه در اینجا نیامده است. خود پپتید و متابولیت سه‌ریشه‌ای‌اش پس از تزریق وریدی در ادرار قابل ردیابی‌اند و آزمایشگاه‌های ضددوپینگ همین را جست‌وجو می‌کنند.",
      en: "No authorised human half-life is given here. The peptide and its three-residue metabolite can be traced in urine after intravenous injection, and anti-doping laboratories look for exactly that.",
    },
    receptors: {
      fa: "گیرندهٔ گرلین (GHS-R1a).",
      en: "The ghrelin receptor (GHS-R1a).",
    },
    mechanism: {
      fa: "مثل GHRP-6 گیرندهٔ گرلین را فعال می‌کند. در ژاپن، آزمون تزریق وریدی GHRP-2 برای تشخیص کمبود شدید هورمون رشد در بزرگسالان به کار می‌رود.",
      en: "Like GHRP-6, it activates the ghrelin receptor. In Japan, an intravenous GHRP-2 test is used to diagnose severe adult growth-hormone deficiency.",
    },
    studies: [
      {
        fa: "ژاپن: آزمون GHRP-2 جایگزین ساده‌تر و ایمن‌تر آزمون تحمل انسولین برای تشخیص کمبود هورمون رشد بزرگسالان معرفی شده است.",
        en: "Japan: the GHRP-2 test is offered as a simpler, safer alternative to the insulin tolerance test for adult growth-hormone deficiency.",
      },
      {
        fa: "در فهرست ممنوعهٔ WADA است و روش آزمایش ادرار برای کشف آن طراحی شده است.",
        en: "It is on the WADA prohibited list, and a urine test was designed to detect it.",
      },
      {
        fa: "در خوک، ACTH و کورتیزول را بالا برد.",
        en: "In pigs it raised ACTH and cortisol.",
      },
    ],
    literature: [
      {
        title: "Adult growth hormone deficiency: current concepts",
        journal: "Neurologia medico-chirurgica",
        year: "2014",
        pmid: "25070016",
        doi: "10.2176/nmc.ra.2014-0088",
        model: { fa: "مرور بالینی", en: "Clinical review" },
        finding: {
          fa: "آزمون GHRP-2 در ژاپن برای تشخیص کمبود شدید هورمون رشد بزرگسالان در دسترس و توصیه‌شده است.",
          en: "The GHRP-2 test is available and recommended in Japan for diagnosing severe adult growth-hormone deficiency.",
        },
      },
      {
        title: "Determination of growth hormone secretagogue pralmorelin (GHRP-2) and its metabolite in human urine by liquid chromatography/electrospray ionization tandem mass spectrometry",
        journal: "Rapid Communications in Mass Spectrometry",
        year: "2010",
        pmid: "20552695",
        doi: "10.1002/rcm.4619",
        model: { fa: "ده داوطلب مرد، آزمایش ضددوپینگ", en: "Ten male volunteers, anti-doping assay" },
        finding: {
          fa: "GHRP-2 و متابولیت اختصاصی‌اش در ادرار هر ده نفر پیدا شد.",
          en: "GHRP-2 and its specific metabolite were found in the urine of all ten volunteers.",
        },
      },
    ],
    storage,
  },
  hexarelin: {
    sequence: ["His", "D-2-Me-Trp", "Ala", "Trp", "D-Phe", "Lys-NH2"],
    sequenceNote: {
      fa: "اسکلت GHRP-6 با D-2-متیل-تریپتوفان در جایگاه ۲.",
      en: "The GHRP-6 scaffold with D-2-methyl-tryptophan at position 2.",
    },
    halfLife: {
      fa: "نیمه‌عمر انسانیِ دارای پروانه ندارد. زیست‌دسترس‌پذیری زیرجلدی حدود ۷۷٪ و خوراکی کمتر از ۱٪ گزارش شد.",
      en: "There is no authorised human half-life. Subcutaneous bioavailability was reported at about 77% and oral at under 1%.",
    },
    receptors: {
      fa: "گیرندهٔ گرلین (GHS-R1a).",
      en: "The ghrelin receptor (GHS-R1a).",
    },
    mechanism: {
      fa: "در انسان، تزریق وریدی هگزارلین تقریباً دو برابر GHRH هورمون رشد آزاد کرد. پاسخ در سالمندان کمتر از جوانان بود.",
      en: "In people, intravenous hexarelin released about twice as much growth hormone as GHRH. The response was smaller in older than in young adults.",
    },
    studies: [
      {
        fa: "۱۲ داوطلب جوان: پاسخ هورمون رشد وابسته به دوز بود و از راه وریدی، زیرجلدی، بینی و خوراکی دیده شد.",
        en: "12 young volunteers: the growth-hormone response was dose-related and seen by intravenous, subcutaneous, nasal, and oral routes.",
      },
      {
        fa: "سالمندان: پاسخ کمتر از جوانان بود و آرژنین آن را فقط در سالمندان تقویت کرد.",
        en: "Older adults: the response was smaller than in young adults, and arginine boosted it only in the older group.",
      },
    ],
    literature: [
      {
        title: "Growth hormone-releasing activity of hexarelin, a new synthetic hexapeptide, after intravenous, subcutaneous, intranasal, and oral administration in man",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: "1994",
        pmid: "8126144",
        doi: "10.1210/jcem.78.3.8126144",
        model: { fa: "۱۲ داوطلب سالم", en: "12 healthy volunteers" },
        finding: {
          fa: "پاسخ هورمون رشد به هگزارلین وریدی حدود دو برابر GHRH و تکرارپذیر بود.",
          en: "The growth-hormone response to intravenous hexarelin was about twice that to GHRH and reproducible.",
        },
      },
      {
        title: "Arginine and growth hormone-releasing hormone restore the blunted growth hormone-releasing activity of hexarelin in elderly subjects",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: "1994",
        pmid: "7962341",
        doi: "10.1210/jcem.79.5.7962341",
        model: { fa: "مردان جوان و سالمند", en: "Young and older men" },
        finding: {
          fa: "اثر هگزارلین به سن وابسته بود و در سالمندان کمتر بود.",
          en: "Hexarelin’s effect depended on age and was smaller in older men.",
        },
      },
    ],
    storage,
  },
  dsip: {
    sequence: ["Trp", "Ala", "Gly", "Gly", "Asp", "Ala", "Ser", "Gly", "Glu"],
    sequenceNote: {
      fa: "نُه ریشه که نخستین بار از خرگوش جدا شد.",
      en: "Nine residues, first isolated from rabbits.",
    },
    halfLife: {
      fa: "دادهٔ دارویی انسانیِ قابل اتکا ندارد.",
      en: "There are no reliable human pharmacological data.",
    },
    receptors: {
      fa: "گیرندهٔ اختصاصیِ شناخته‌شده‌ای برایش پیدا نشده است.",
      en: "No specific receptor has been identified.",
    },
    mechanism: {
      fa: "تزریق مستقیم DSIP به بطن مغز خرگوش، امواج دلتا و دوک‌های خواب را در نوار مغزی بیشتر کرد. ژن سازنده و گیرنده‌اش هنوز روشن نیست و نقش آن در خواب طبیعی انسان ثابت نشده است.",
      en: "Infusing DSIP straight into the brain ventricles of rabbits increased delta waves and sleep spindles on the EEG. Its gene and receptor are still unclear, and a role in normal human sleep has not been shown.",
    },
    studies: [
      {
        fa: "۵۸ خرگوش، تزریق داخل بطنی دوسوکور: فقط DSIP سنتتیک امواج دلتا را به‌طور اختصاصی بیشتر کرد، نه قطعه‌ها و آنالوگ‌هایش.",
        en: "58 rabbits, double-blind intraventricular infusion: only synthetic DSIP specifically increased delta activity, not its fragments or analogues.",
      },
      {
        fa: "مطالعات انسانی کوچک و ناهمگون‌اند و اثر پایدار بر خواب نشان نداده‌اند.",
        en: "Human studies are small and inconsistent and have not shown a reliable effect on sleep.",
      },
    ],
    literature: [
      {
        title: "Characterization of a delta-electroencephalogram (-sleep)-inducing peptide",
        journal: "Proceedings of the National Academy of Sciences",
        year: "1977",
        pmid: "265572",
        doi: "10.1073/pnas.74.3.1282",
        model: { fa: "تزریق داخل بطنی در خرگوش", en: "Intraventricular infusion in rabbits" },
        finding: {
          fa: "توالی نُه‌ریشه‌ای تعیین شد و نسخهٔ سنتتیک امواج دلتای نوار مغزی را القا کرد.",
          en: "The nine-residue sequence was determined, and the synthetic peptide induced delta EEG activity.",
        },
      },
    ],
    storage,
  },
  "ll-37": {
    sequence: ["Leu", "Leu", "Gly", "Asp", "Phe", "Phe", "Arg", "Lys", "Ser", "Lys", "Glu", "Lys", "Ile", "Gly", "Lys", "Glu", "Phe", "Lys", "Arg", "Ile", "Val", "Gln", "Arg", "Ile", "Lys", "Asp", "Phe", "Leu", "Arg", "Asn", "Leu", "Val", "Pro", "Arg", "Thr", "Glu", "Ser"],
    sequenceNote: {
      fa: "۳۷ ریشه که با دو لوسین شروع می‌شود (نام LL-37 از همین‌جاست). از پیش‌سازی به نام hCAP18 بریده می‌شود.",
      en: "37 residues starting with two leucines, hence the name LL-37. It is cut from a precursor called hCAP18.",
    },
    halfLife: {
      fa: "پپتید درونی بدن است که در نوتروفیل‌ها ذخیره و هنگام التهاب آزاد می‌شود. دادهٔ فارماکوکینتیک دارویی ندارد.",
      en: "An endogenous peptide stored in neutrophils and released during inflammation. There are no drug pharmacokinetic data.",
    },
    receptors: {
      fa: "بیشتر با برهم‌کنش مستقیم با غشای باکتری کار می‌کند. روی سلول‌های انسان هم گیرنده‌هایی مثل FPR2 مطرح شده‌اند.",
      en: "It works mostly by direct interaction with bacterial membranes. Receptors such as FPR2 on human cells have also been proposed.",
    },
    mechanism: {
      fa: "LL-37 پپتید کاتیونی و مارپیچی است که غشای باکتری را برهم می‌زند. ژن آن (CAMP، پیش‌تر FALL39) تنها عضو خانوادهٔ کاتلیسیدین در ژنوم انسان است. در کنار اثر ضدمیکروبی، در التهاب و ترمیم زخم هم نقش دارد.",
      en: "LL-37 is a cationic, helical peptide that disrupts bacterial membranes. Its gene (CAMP, formerly FALL39) is the only cathelicidin in the human genome. Besides killing microbes, it takes part in inflammation and wound repair.",
    },
    studies: [
      {
        fa: "گرانولوسیت انسان: پپتید بالغ LL-37 جدا شد و اثر ضدباکتری قوی داشت.",
        en: "Human granulocytes: mature LL-37 was isolated and was strongly antibacterial.",
      },
      {
        fa: "در زخم پوستی مطالعات بالینی کوچک انجام شده، ولی فراوردهٔ دارویی مجاز ندارد.",
        en: "Small clinical studies have been run in skin ulcers, but there is no authorised medicine.",
      },
    ],
    literature: [
      {
        title: "The human gene FALL39 and processing of the cathelin precursor to the antibacterial peptide LL-37 in granulocytes",
        journal: "European Journal of Biochemistry",
        year: "1996",
        pmid: "8681941",
        doi: "10.1111/j.1432-1033.1996.0325z.x",
        model: { fa: "ژن انسانی و گرانولوسیت", en: "Human gene and granulocytes" },
        finding: {
          fa: "ژن FALL39 توالی‌یابی شد، تنها کاتلیسیدین انسانی معرفی شد و LL-37 بالغ از گرانولوسیت جدا شد.",
          en: "The FALL39 gene was sequenced, shown to be the only human cathelicidin, and mature LL-37 was isolated from granulocytes.",
        },
      },
    ],
    storage,
  },
  liraglutide: {
    sequence: ["His", "Ala", "Glu", "Gly", "Thr", "Phe", "Thr", "Ser", "Asp", "Val", "Ser", "Ser", "Tyr", "Leu", "Glu", "Gly", "Gln", "Ala", "Ala", "Lys(C16)", "Glu", "Phe", "Ile", "Ala", "Trp", "Leu", "Val", "Arg", "Gly", "Arg", "Gly"],
    sequenceNote: {
      fa: "۳۱ ریشه، ۹۷٪ هم‌سان با GLP-1(7-37) انسان: Arg به جای Lys در جایگاه ۲۸ و یک اسید پالمیتیک (C16) با رابط گلوتامیک روی لیزین جایگاه ۲۰.",
      en: "31 residues, 97% identical to human GLP-1(7-37): Arg replaces Lys at position 28, and a palmitic acid (C16) on a glutamic linker sits on the lysine at position 20.",
    },
    halfLife: {
      fa: "حدود ۱۳ ساعت؛ به همین دلیل قلم مجاز آن روزانه است.",
      en: "About 13 hours, which is why the licensed pen is daily.",
    },
    receptors: {
      fa: "گیرندهٔ GLP-1 (GLP-1R).",
      en: "The GLP-1 receptor (GLP-1R).",
    },
    mechanism: {
      fa: "مثل سماگلوتاید گیرندهٔ GLP-1 را فعال می‌کند. Aib ندارد و زنجیرهٔ چربش کوتاه‌تر است، پس اثرش کوتاه‌تر است. اسید چرب باعث اتصال به آلبومین و کند شدن جذب از زیر پوست می‌شود.",
      en: "Like semaglutide, it activates the GLP-1 receptor. It has no Aib and a shorter fatty chain, so it acts for less time. The fatty acid makes it bind albumin and slows absorption from under the skin.",
    },
    studies: [
      {
        fa: "SCALE (۳۷۳۱ بزرگسال بدون دیابت، ۵۶ هفته): میانگین کاهش وزن ۸٫۴ کیلوگرم در برابر ۲٫۸ کیلوگرم با دارونما.",
        en: "SCALE (3,731 adults without diabetes, 56 weeks): mean weight loss 8.4 kg versus 2.8 kg with placebo.",
      },
      {
        fa: "LEADER (۹۳۴۰ بیمار دیابت نوع ۲ پرخطر، میانهٔ ۳٫۸ سال): رویداد قلبی‌عروقی اصلی ۱۳٪ در برابر ۱۴٫۹٪، و مرگ قلبی ۴٫۷٪ در برابر ۶٪.",
        en: "LEADER (9,340 high-risk type 2 diabetes patients, median 3.8 years): major cardiovascular events 13% versus 14.9%, and cardiovascular death 4.7% versus 6%.",
      },
      {
        fa: "شایع‌ترین عارضه‌ها تهوع و اسهال بودند.",
        en: "The commonest side effects were nausea and diarrhoea.",
      },
    ],
    literature: [
      {
        title: "A Randomized, Controlled Trial of 3.0 mg of Liraglutide in Weight Management",
        journal: "New England Journal of Medicine",
        year: "2015",
        pmid: "26132939",
        doi: "10.1056/NEJMoa1411892",
        model: { fa: "کارآزمایی تصادفی دوسوکور، ۵۶ هفته", en: "Randomised double-blind trial, 56 weeks" },
        finding: {
          fa: "کاهش وزن و بهبود کنترل متابولیک نسبت به دارونما.",
          en: "Weight loss and better metabolic control than placebo.",
        },
      },
      {
        title: "Liraglutide and Cardiovascular Outcomes in Type 2 Diabetes",
        journal: "New England Journal of Medicine",
        year: "2016",
        pmid: "27295427",
        doi: "10.1056/NEJMoa1603827",
        model: { fa: "کارآزمایی پیامد قلبی‌عروقی", en: "Cardiovascular outcomes trial" },
        finding: {
          fa: "رویداد قلبی‌عروقی اصلی کمتر بود (نسبت خطر ۰٫۸۷).",
          en: "Major cardiovascular events were lower (hazard ratio 0.87).",
        },
      },
    ],
    storage: licensedStorage,
  },
  oxytocin: {
    sequence: ["Cys", "Tyr", "Ile", "Gln", "Asn", "Cys", "Pro", "Leu", "Gly-NH2"],
    sequenceNote: {
      fa: "نُه ریشه با پل دی‌سولفید بین سیستئین ۱ و ۶ و انتهای C آمیدی. با وازوپرسین فقط در جایگاه ۳ و ۸ فرق دارد.",
      en: "Nine residues with a disulfide bridge between Cys 1 and Cys 6 and an amidated C-terminus. It differs from vasopressin only at positions 3 and 8.",
    },
    halfLife: {
      fa: "نیمه‌عمر پلاسمایی چند دقیقه است.",
      en: "Plasma half-life is a few minutes.",
    },
    receptors: {
      fa: "گیرندهٔ اکسی‌توسین (OXTR)، جفت‌شده با پروتئین G، در رحم، پستان و مغز.",
      en: "The oxytocin receptor (OXTR), a G-protein-coupled receptor in the uterus, breast, and brain.",
    },
    mechanism: {
      fa: "اکسی‌توسین انقباض رحم و جاری شدن شیر را تحریک می‌کند. در مغز در رفتار اجتماعی و پیوند نقش دارد و همین باعث شد اکسی‌توسین بینی برای اوتیسم آزمایش شود.",
      en: "Oxytocin triggers uterine contraction and milk let-down. In the brain it takes part in social behaviour and bonding, which is why intranasal oxytocin was tested in autism.",
    },
    studies: [
      {
        fa: "کارآزمایی ۲۴ هفته‌ای ۲۹۰ کودک و نوجوان مبتلا به اوتیسم: اکسی‌توسین بینی در رفتار اجتماعی یا شناختی تفاوتی با دارونما نداشت.",
        en: "24-week trial in 290 children and adolescents with autism: intranasal oxytocin did not differ from placebo on social or cognitive measures.",
      },
      {
        fa: "کاربرد مجاز آن بیمارستانی و زیر نظر تیم زایمان است.",
        en: "Its authorised use is in hospital, under an obstetric team.",
      },
    ],
    literature: [
      {
        title: "Intranasal Oxytocin in Children and Adolescents with Autism Spectrum Disorder",
        journal: "New England Journal of Medicine",
        year: "2021",
        pmid: "34644471",
        doi: "10.1056/NEJMoa2103583",
        model: { fa: "کارآزمایی فاز ۲ تصادفی با دارونما", en: "Placebo-controlled randomised phase 2 trial" },
        finding: {
          fa: "تفاوت معناداری در کناره‌گیری اجتماعی یا سایر پیامدها دیده نشد.",
          en: "No significant difference in social withdrawal or other outcomes.",
        },
      },
    ],
    storage: licensedStorage,
  },
  humanin: {
    sequence: ["Met", "Ala", "Pro", "Arg", "Gly", "Phe", "Ser", "Cys", "Leu", "Leu", "Leu", "Leu", "Thr", "Ser", "Glu", "Ile", "Asp", "Leu", "Pro", "Val", "Lys", "Arg", "Arg", "Ala"],
    sequenceNote: {
      fa: "۲۴ ریشه که چارچوب خوانش کوتاهی در ژن 16S rRNA میتوکندری آن را رمز می‌کند.",
      en: "24 residues encoded by a short open reading frame in the mitochondrial 16S rRNA gene.",
    },
    halfLife: {
      fa: "دادهٔ فارماکوکینتیک انسانی ندارد.",
      en: "There are no human pharmacokinetic data.",
    },
    receptors: {
      fa: "گیرنده‌هایی مثل FPRL1 و یک کمپلکس سه‌جزئی مرتبط با gp130 در پژوهش‌ها مطرح شده‌اند.",
      en: "Receptors such as FPRL1 and a gp130-related three-part complex have been proposed.",
    },
    mechanism: {
      fa: "هیومنین با غربالگری بیانی در سلول‌های عصبی کشف شد: مرگ نورون ناشی از ژن‌های جهش‌یافتهٔ آلزایمر خانوادگی و آمیلوئید بتا را در کشت سلول متوقف کرد. بعدها اثرهای متابولیک هم برایش گزارش شد. این‌ها یافته‌های آزمایشگاهی‌اند.",
      en: "Humanin was found by expression screening in nerve cells: it stopped neuronal death caused by familial Alzheimer’s mutant genes and amyloid beta in culture. Metabolic effects were reported later. These are laboratory findings.",
    },
    studies: [
      {
        fa: "کشت سلول عصبی: محافظت در برابر مرگ ناشی از چند ژن آلزایمر خانوادگی و Aβ، ولی نه در برابر جهش‌های SOD1 یا Q79.",
        en: "Nerve-cell culture: protection against death from several familial Alzheimer’s genes and Aβ, but not from SOD1 or Q79 mutants.",
      },
      {
        fa: "کارآزمایی انسانیِ منتشرشده برای مجوز دارو وجود ندارد.",
        en: "No published human trial supports a medicine licence.",
      },
    ],
    literature: [
      {
        title: "A rescue factor abolishing neuronal cell death by a wide spectrum of familial Alzheimer's disease genes and Abeta",
        journal: "Proceedings of the National Academy of Sciences",
        year: "2001",
        pmid: "11371646",
        doi: "10.1073/pnas.101133498",
        model: { fa: "کشت سلول عصبی", en: "Nerve-cell culture" },
        finding: {
          fa: "ژن هیومنین شناسایی شد و پپتید ترشح‌شده‌اش سلول‌های عصبی را از مرگ ناشی از ژن‌های آلزایمر نجات داد.",
          en: "The humanin gene was identified, and its secreted peptide rescued nerve cells from death caused by Alzheimer’s genes.",
        },
      },
    ],
    storage,
  },
  cagrilintide: {
    halfLife: {
      fa: "طولانی‌اثر و برای تزریق هفتگی طراحی شده است.",
      en: "Long-acting and designed for weekly injection.",
    },
    receptors: {
      fa: "گیرنده‌های آمیلین و کلسی‌تونین.",
      en: "Amylin and calcitonin receptors.",
    },
    mechanism: {
      fa: "آمیلین هورمونی است که همراه انسولین از پانکراس ترشح می‌شود و احساس سیری می‌دهد. کاگریلینتاید آنالوگ طولانی‌اثر آن است و در ترکیب با سماگلوتاید (CagriSema) هم بررسی شده است.",
      en: "Amylin is a hormone released from the pancreas with insulin, and it signals fullness. Cagrilintide is a long-acting analogue and has also been studied combined with semaglutide (CagriSema).",
    },
    studies: [
      {
        fa: "فاز ۲ (۲۶ هفته): کاهش وزن از ۶٪ تا ۱۰٫۸٪ بسته به سطح دوز، در برابر ۳٪ با دارونما. بالاترین سطح از لیراگلوتاید (۹٪) بیشتر بود.",
        en: "Phase 2 (26 weeks): weight loss from 6% to 10.8% by dose level, versus 3% with placebo. The top level beat liraglutide (9%).",
      },
      {
        fa: "عارضه‌های شایع گوارشی (تهوع، یبوست، اسهال) و واکنش محل تزریق بودند.",
        en: "Common side effects were gastrointestinal (nausea, constipation, diarrhoea) and injection-site reactions.",
      },
    ],
    literature: [
      {
        title: "Once-weekly cagrilintide for weight management in people with overweight and obesity: a multicentre, randomised, double-blind, placebo-controlled and active-controlled, dose-finding phase 2 trial",
        journal: "The Lancet",
        year: "2021",
        pmid: "34798060",
        doi: "10.1016/S0140-6736(21)01751-7",
        model: { fa: "کارآزمایی فاز ۲ چندمرکزی", en: "Multicentre phase 2 trial" },
        finding: {
          fa: "همهٔ سطوح دوز وزن را بیشتر از دارونما کم کردند.",
          en: "Every dose level reduced weight more than placebo.",
        },
      },
    ],
    storage,
  },
  teriparatide: {
    sequence: ["Ser", "Val", "Ser", "Glu", "Ile", "Gln", "Leu", "Met", "His", "Asn", "Leu", "Gly", "Lys", "His", "Leu", "Asn", "Ser", "Met", "Glu", "Arg", "Val", "Glu", "Trp", "Leu", "Arg", "Lys", "Lys", "Leu", "Gln", "Asp", "Val", "His", "Asn", "Phe"],
    sequenceNote: {
      fa: "۳۴ ریشهٔ اول هورمون پاراتیروئید انسان؛ بخشی که برای فعال کردن گیرنده کافی است.",
      en: "The first 34 residues of human parathyroid hormone, the part that is enough to activate its receptor.",
    },
    halfLife: {
      fa: "حدود یک ساعت پس از تزریق زیرجلدی.",
      en: "About one hour after subcutaneous injection.",
    },
    receptors: {
      fa: "گیرندهٔ PTH1R روی استئوبلاست‌ها و کلیه.",
      en: "PTH1R on osteoblasts and in the kidney.",
    },
    mechanism: {
      fa: "تزریق متناوب PTH، برخلاف بالا بودن مداوم آن، ساخت استخوان را بیشتر از برداشت آن تحریک می‌کند. به همین دلیل تری‌پاراتاید داروی «سازندهٔ استخوان» است، نه فقط مهارکنندهٔ تحلیل.",
      en: "Intermittent PTH, unlike a constantly high level, stimulates bone formation more than resorption. That makes teriparatide a bone-building drug rather than just an anti-resorptive.",
    },
    studies: [
      {
        fa: "۱۶۳۷ زن یائسه با شکستگی قبلی مهره: شکستگی جدید مهره ۵٪ و ۴٪ در دو سطح دوز، در برابر ۱۴٪ با دارونما.",
        en: "1,637 postmenopausal women with a previous vertebral fracture: new vertebral fractures in 5% and 4% at two dose levels, versus 14% with placebo.",
      },
      {
        fa: "تراکم استخوان ستون فقرات ۹ تا ۱۳ واحد درصد بیشتر از دارونما بالا رفت.",
        en: "Spinal bone density rose 9 to 13 percentage points more than with placebo.",
      },
    ],
    literature: [
      {
        title: "Effect of parathyroid hormone (1-34) on fractures and bone mineral density in postmenopausal women with osteoporosis",
        journal: "New England Journal of Medicine",
        year: "2001",
        pmid: "11346808",
        doi: "10.1056/NEJM200105103441904",
        model: { fa: "کارآزمایی تصادفی با دارونما", en: "Placebo-controlled randomised trial" },
        finding: {
          fa: "خطر شکستگی مهره‌ای و غیرمهره‌ای کم شد و تراکم استخوان بالا رفت.",
          en: "Vertebral and non-vertebral fracture risk fell and bone density rose.",
        },
      },
    ],
    storage: licensedStorage,
  },
  gonadorelin: {
    sequence: ["pGlu", "His", "Trp", "Ser", "Tyr", "Gly", "Leu", "Arg", "Pro", "Gly-NH2"],
    sequenceNote: {
      fa: "ده ریشه با پیروگلوتامات در انتهای N و گلیسین‌آمید در انتهای C. توالی آن در ۱۹۷۱ از هیپوتالاموس خوک تعیین شد.",
      en: "Ten residues with pyroglutamate at the N-terminus and glycinamide at the C-terminus. Its sequence was determined in 1971 from pig hypothalamus.",
    },
    halfLife: {
      fa: "چند دقیقه در پلاسما.",
      en: "A few minutes in plasma.",
    },
    receptors: {
      fa: "گیرندهٔ GnRH روی گنادوتروپ‌های هیپوفیز.",
      en: "The GnRH receptor on pituitary gonadotrophs.",
    },
    mechanism: {
      fa: "ترشح ضربانی GnRH ترشح LH و FSH را تحریک می‌کند، ولی تحریک مداوم گیرنده آن را حساسیت‌زدایی می‌کند و تولید هورمون جنسی را پایین می‌آورد. آگونیست‌های طولانی‌اثر GnRH، مثل لوپرولین، بر همین اساس کار می‌کنند.",
      en: "Pulsed GnRH stimulates LH and FSH release, but continuous stimulation desensitises the receptor and lowers sex-hormone output. Long-acting GnRH agonists such as leuprorelin rely on that.",
    },
    studies: [
      {
        fa: "۱۹۷۱: تعیین توالی هورمون آزادکنندهٔ LH و FSH از هیپوتالاموس خوک.",
        en: "1971: sequencing of the LH- and FSH-releasing hormone from pig hypothalamus.",
      },
      {
        fa: "کاربرد بالینی: آزمون تحریک هیپوفیز و درمان ضربانی در برخی ناباروری‌های هیپوتالاموسی.",
        en: "Clinical use: pituitary stimulation testing and pulsed treatment in some hypothalamic infertility.",
      },
    ],
    literature: [
      {
        title: "Structure of the porcine LH- and FSH-releasing hormone. I. The proposed amino acid sequence",
        journal: "Biochemical and Biophysical Research Communications",
        year: "1971",
        pmid: "4936338",
        doi: "10.1016/s0006-291x(71)80019-0",
        model: { fa: "استخراج از هیپوتالاموس خوک", en: "Extraction from pig hypothalamus" },
        finding: {
          fa: "توالی ده‌ریشه‌ای هورمون آزادکنندهٔ گنادوتروپین پیشنهاد شد.",
          en: "The ten-residue sequence of gonadotropin-releasing hormone was proposed.",
        },
      },
    ],
    storage: licensedStorage,
  },
  "igf-1-lr3": {
    sequence: ["Met", "Phe", "Pro", "Ala", "Met", "Pro", "Leu", "Ser", "Ser", "Leu", "Phe", "Val", "Asn", "Gly", "Pro", "Arg", "Thr", "Leu", "Cys", "Gly", "Ala", "Glu", "Leu", "Val", "Asp", "Ala", "Leu", "Gln", "Phe", "Val", "Cys", "Gly", "Asp", "Arg", "Gly", "Phe", "Tyr", "Phe", "Asn", "Lys", "Pro", "Thr", "Gly", "Tyr", "Gly", "Ser", "Ser", "Ser", "Arg", "Arg", "Ala", "Pro", "Gln", "Thr", "Gly", "Ile", "Val", "Asp", "Glu", "Cys", "Cys", "Phe", "Arg", "Ser", "Cys", "Asp", "Leu", "Arg", "Arg", "Leu", "Glu", "Met", "Tyr", "Cys", "Ala", "Pro", "Leu", "Lys", "Pro", "Ala", "Lys", "Ser", "Ala"],
    sequenceNote: {
      fa: "۸۳ ریشه: دنبالهٔ ۱۳ ریشه‌ای از هورمون رشد خوک (Met-pGH 1–11 و Val-Asn) در انتهای N، و IGF-1 انسان با Arg به جای Glu در جایگاه ۳.",
      en: "83 residues: a 13-residue extension from pig growth hormone (Met-pGH 1–11 plus Val-Asn) at the N-terminus, and human IGF-1 with Arg in place of Glu at position 3.",
    },
    halfLife: {
      fa: "دادهٔ فارماکوکینتیک انسانی ندارد. برای محیط کشت سلول ساخته شد.",
      en: "There are no human pharmacokinetic data. It was made for cell-culture media.",
    },
    receptors: {
      fa: "گیرندهٔ IGF-1 (IGF-1R). اتصالش به پروتئین‌های حامل IGF (IGFBP) بسیار کم است.",
      en: "The IGF-1 receptor (IGF-1R). It binds IGF-binding proteins (IGFBPs) very poorly.",
    },
    mechanism: {
      fa: "IGF-1 در بدن بیشتر به IGFBPها چسبیده است. تغییر جایگاه ۳ و دنبالهٔ N اتصال به IGFBP را کم می‌کنند، پس بخش آزاد و فعال بیشتر می‌شود. در سلول‌هایی که IGFBP ترشح می‌کنند، از IGF-1 طبیعی قوی‌تر بود.",
      en: "In the body, IGF-1 is mostly held by IGFBPs. The position-3 change and the N-terminal extension reduce IGFBP binding, leaving more free, active peptide. In cells that secrete IGFBPs it was more potent than native IGF-1.",
    },
    studies: [
      {
        fa: "میوبلاست L6: تحریک قوی‌تر ساخت پروتئین و DNA نسبت به IGF-1.",
        en: "L6 myoblasts: stronger stimulation of protein and DNA synthesis than IGF-1.",
      },
      {
        fa: "در سلول بدون IGFBP، از IGF-1 ضعیف‌تر بود؛ یعنی برتری‌اش از فرار از IGFBP است، نه گیرندهٔ قوی‌تر.",
        en: "In cells without IGFBPs it was weaker than IGF-1, so its advantage comes from escaping IGFBPs, not a stronger receptor fit.",
      },
      {
        fa: "افت قند خون عارضهٔ شناخته‌شدهٔ IGF-1 دارویی است و این ماده در ورزش ممنوع است؛ دلیل پرچم‌های این مدخل همین است.",
        en: "Low blood sugar is a known effect of medicinal IGF-1, and this substance is banned in sport; those are the reasons for this entry’s flags.",
      },
    ],
    literature: [
      {
        title: "Novel recombinant fusion protein analogues of insulin-like growth factor (IGF)-I indicate the relative importance of IGF-binding protein and receptor binding for enhanced biological potency",
        journal: "Journal of Molecular Endocrinology",
        year: "1992",
        pmid: "1378742",
        doi: "10.1677/jme.0.0080213",
        model: { fa: "کشت سلول", en: "Cell culture" },
        finding: {
          fa: "Long [Arg3]-IGF-I قوی‌ترین آنالوگ در سلول‌های ترشح‌کنندهٔ IGFBP بود.",
          en: "Long [Arg3]-IGF-I was the most potent analogue in IGFBP-secreting cells.",
        },
      },
    ],
    storage,
  },
};
