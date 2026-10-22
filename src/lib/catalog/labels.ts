import type { Flag, LocaleText, Section } from "./types";

export const sectionLabel: Record<Section, LocaleText> = {
  peptide: { fa: "پپتید و تزریقی پژوهشی", en: "Research peptides and injectables" },
  oral: { fa: "قرص و کپسول", en: "Tablets and capsules" },
  oil: { fa: "روغن و سوسپانسیون تزریقی", en: "Injectable oils and suspensions" },
  raw: { fa: "پودر خام", en: "Bulk powders" },
};

export const sectionShort: Record<Section, LocaleText> = {
  peptide: { fa: "پپتید", en: "Peptides" },
  oral: { fa: "خوراکی", en: "Oral" },
  oil: { fa: "روغن تزریقی", en: "Oils" },
  raw: { fa: "مادهٔ خام", en: "Raw" },
};

export const groupLabel: Record<string, LocaleText> = {
  tissue: { fa: "ترمیم بافت", en: "Tissue repair" },
  somatotropic: { fa: "محور هورمون رشد", en: "Growth-hormone axis" },
  incretin: { fa: "اینکرتین", en: "Incretins" },
  neuro: { fa: "نوروپپتید", en: "Neuropeptides" },
  bioregulator: { fa: "بیورگولاتور کوتاه", en: "Short bioregulators" },
  biologic: { fa: "بیولوژیک", en: "Biologics" },
  copper: { fa: "پپتید مس", en: "Copper peptides" },
  cosmetic: { fa: "آرایشی", en: "Cosmetic" },
  solvent: { fa: "حلال آزمایشگاهی", en: "Laboratory solvents" },
  blend: { fa: "مخلوط", en: "Mixtures" },
  mitochondrial: { fa: "میتوکندری", en: "Mitochondria" },
  other: { fa: "سایر", en: "Other" },
  androgen: { fa: "آندروژن آنابولیک", en: "Anabolic androgens" },
  sarm: { fa: "SARM", en: "SARMs" },
  endocrine: { fa: "غدد", en: "Endocrine" },
  metabolic: { fa: "متابولیک", en: "Metabolic" },
  peptide: { fa: "پپتید خوراکی", en: "Oral peptides" },
  sexual: { fa: "سلامت جنسی", en: "Sexual health" },
  thyroid: { fa: "تیروئید", en: "Thyroid" },
  hormone: { fa: "هورمون", en: "Hormones" },
  nutrient: { fa: "ویتامین و مغذی", en: "Vitamins and nutrients" },
  "peptide-powder": { fa: "پودر پپتید", en: "Peptide powder" },
  "androgen-powder": { fa: "پودر آندروژن", en: "Androgen powder" },
  "sarm-powder": { fa: "پودر SARM", en: "SARM powder" },
  "other-powder": { fa: "سایر پودرها", en: "Other powders" },
};

export const flagLabel: Record<Flag, LocaleText> = {
  "research-only": { fa: "فقط پژوهش", en: "Research only" },
  "not-authorised": { fa: "بدون پروانهٔ بریتانیا/اروپا", en: "Not a UK/EU licence" },
  "licensed-product": { fa: "فراوردهٔ مجاز جداگانه دارد", en: "A licensed product exists" },
  "uk-class-c": { fa: "کلاس C بریتانیا", en: "UK Class C" },
  "severe-hazard": { fa: "خطر شدید", en: "Severe hazard" },
  "high-risk": { fa: "پرخطر", en: "High risk" },
  teratogen: { fa: "تراتوژن", en: "Teratogen" },
  hepatotoxic: { fa: "سمیت کبد", en: "Liver toxicity" },
  wada: { fa: "ممنوع در ورزش", en: "Banned in sport" },
  blend: { fa: "مخلوط تأییدنشده", en: "Unverified mixture" },
  solvent: { fa: "حلال", en: "Solvent" },
};

export const flagNote: Record<Flag, LocaleText> = {
  "research-only": {
    fa: "این نام در فهرست‌های پژوهشی آمده و برای مصرف انسانی عرضه نشده است.",
    en: "This name appears on research lists and is not supplied for human consumption.",
  },
  "not-authorised": {
    fa: "ویال یا قرص این فهرست، داروی دارای پروانهٔ MHRA یا EMA نیست. اگر برای خودِ ماده در جایی پروانه وجود داشته باشد، در پرچم جدا گفته شده است.",
    en: "The vial or tablet on this list is not an MHRA or EMA licensed medicine. Where the substance itself has a licence somewhere, a separate flag says so.",
  },
  "licensed-product": {
    fa: "برای این ماده فراوردهٔ پزشکیِ دارای پروانه در دست‌کم یک کشور وجود دارد. جنس فهرست پژوهشی همان فراورده، با همان کیفیت و همان مشاورهٔ دارویی، نیست.",
    en: "A licensed medical product of this substance exists in at least one country. Material on a research list is not that product, and it does not come with the same quality or counselling.",
  },
  "uk-class-c": {
    fa: "استروئیدهای آنابولیک و برخی مواد همراه در بریتانیا داروی کنترل‌شدهٔ کلاس C هستند و عرضه‌شان جرم است. این جمله راه تشخیص استثناهای قانون یا مسیر تهیه نیست.",
    en: "Anabolic steroids and some related substances are Class C controlled drugs in the UK, and supplying them is a crime. This is not a guide to legal exceptions or to obtaining them.",
  },
  "severe-hazard": {
    fa: "خطر جانی یا سمیت بسیار بالا شناخته شده است. دوز، ساخت، آماده‌سازی و مصرف در این دانشنامه نوشته نمی‌شود.",
    en: "A risk of death or extreme toxicity is established. Dose, manufacture, preparation, and use are not described in this encyclopedia.",
  },
  "high-risk": {
    fa: "سوءمصرف انسانی با آسیب جدی همراه بوده است. راهنمای مصرف وجود ندارد.",
    en: "Human misuse has been linked to serious harm. There is no use guidance.",
  },
  teratogen: {
    fa: "در بارداری می‌تواند به جنین آسیب شدید بزند. تماس با قرص خردشده هم برای برخی از این داروها خطرناک است.",
    en: "In pregnancy it can severely harm a fetus. Handling a crushed tablet is also dangerous for some of these drugs.",
  },
  hepatotoxic: {
    fa: "ساختمان ۱۷-آلفا-آلکیله با سمیت کبد، از جمله یرقان، شناخته می‌شود.",
    en: "The 17α-alkylated structure is known for liver toxicity, including jaundice.",
  },
  wada: {
    fa: "در فهرست مواد ممنوعهٔ آژانس جهانی ضددوپینگ، یا در طبقهٔ روشنی از آن فهرست، قرار می‌گیرد.",
    en: "It sits on the World Anti-Doping Agency prohibited list, or in a clear class on that list.",
  },
  blend: {
    fa: "نام بازاری یک مخلوط است. نسبت اجزا را فروشنده ادعا می‌کند و این دانشنامه آن را تأیید یا بازنویسی نمی‌کند.",
    en: "A marketplace name for a mixture. Sellers claim the ratio. This encyclopedia does not certify or reproduce it.",
  },
  solvent: {
    fa: "حلال یا رقیق‌کنندهٔ آزمایشگاهی است، نه مادهٔ مؤثر. روش ساخت محلول تزریقی نوشته نشده است.",
    en: "A laboratory solvent or diluent, not an active substance. No method for making an injectable solution is given.",
  },
};

export function text(lang: "fa" | "en", value: LocaleText): string {
  return value[lang];
}
