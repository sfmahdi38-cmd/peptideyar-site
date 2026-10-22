"use client";

import { tx, useLanguage } from "@/components/language";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const modules = [
  {
    id: "peptide",
    faTitle: "پپتید چیست؟",
    enTitle: "What is a peptide?",
    fa: [
      "پپتید زنجیرهٔ کوتاهی از آمینواسیدهاست که با پیوند آمیدی به هم وصل شده‌اند. از پایانهٔ N به پایانهٔ C نوشته می‌شود.",
      "مرز رایج با پروتئین حدود ۵۰ آمینواسید است، ولی هورمون‌هایی مثل انسولین را هم گاهی پپتید می‌نامند. نام تجاری فهرست پژوهشی این مرز را عوض نمی‌کند.",
      "بسیاری از نام‌های همین کاتالوگ اصلاً پپتید نیستند: استروئید، SARM، ویتامین، کوآنزیم یا حلال‌اند و فقط چون در همان فهرست بوده‌اند این‌جا آمده‌اند.",
    ],
    en: [
      "A peptide is a short chain of amino acids joined by amide bonds. It is written from the N-terminus to the C-terminus.",
      "A common boundary with proteins is about 50 amino acids, though hormones such as insulin are sometimes still called peptides. A trade name does not move that boundary.",
      "Many names in this catalog are not peptides at all: steroids, SARMs, vitamins, cofactors, or solvents are here only because they were on the same list.",
    ],
  },
  {
    id: "lyo",
    faTitle: "چرا پودر لیوفیلیزه است؟",
    enTitle: "Why a lyophilized powder?",
    fa: [
      "پیوند پپتیدی در آب و دمای اتاق کم‌کم هیدرولیز می‌شود. خشک‌کردن انجمادی، آب را با تصعید برمی‌دارد تا نمونه برای حمل پایدار بماند.",
      "در آزمایشگاه، حلال را آهسته به دیوارهٔ شیشه اضافه می‌کنند و ویال را می‌چرخانند، نه اینکه تکان شدید بدهند. این نکتهٔ نگهداری نمونه است، نه دستور تزریق.",
    ],
    en: [
      "Peptide bonds slowly hydrolyse in water at room temperature. Freeze-drying removes water by sublimation so a sample survives transport.",
      "In a laboratory the solvent is run gently down the glass and the vial is swirled, not shaken hard. That is sample handling, not an injection instruction.",
    ],
  },
  {
    id: "coa",
    faTitle: "HPLC خلوص است، طیف جرمی هویت",
    enTitle: "HPLC is purity, mass spectrometry is identity",
    fa: [
      "کروماتوگرافی فاز معکوس با جذب حدود ۲۱۴ نانومتر مساحت پیک اصلی را نسبت به پیک‌های دیگر می‌سنجد. این عدد خلوص است، نه اثبات اینکه پیک اصلی همان پپتید ادعاشده است.",
      "طیف‌سنجی جرمی نسبت جرم به بار را با جرم نظری مقایسه می‌کند. بدون هر دو برگه، برچسب ویال فقط یک ادعا است. پپتیدیار خلوص هیچ سری ساختی را تأیید نمی‌کند و روی برچسب ویال درصد ساختگی نمی‌گذارد.",
    ],
    en: [
      "Reversed-phase chromatography, read near 214 nm, compares the main peak area with the other peaks. That number is purity. It does not prove the main peak is the peptide named on the label.",
      "Mass spectrometry compares mass-to-charge with the theoretical mass. Without both documents, a vial label is only a claim. PeptideYar does not certify any batch and does not print a made-up purity on the vial.",
    ],
  },
  {
    id: "sku",
    faTitle: "قلم کالا با ماده یکی نیست",
    enTitle: "A SKU is not a substance",
    fa: [
      "فهرست تجاری اغلب یک ماده را در ویال ۲، ۵ و ۱۰ میلی‌گرمی سه بار می‌شمارد. دانشنامه ماده را یک بار نگه می‌دارد.",
      "مخلوط‌هایی مثل GLOW یا Blend 300 نام بازاری‌اند. نسبت‌شان را فروشنده می‌نویسد و اینجا بازنویسی نشده است.",
    ],
    en: [
      "A trade list often counts one substance three times, as 2 mg, 5 mg, and 10 mg vials. The encyclopedia keeps the substance once.",
      "Mixtures such as GLOW or Blend 300 are marketplace names. The seller writes the ratio, and it is not copied here.",
    ],
  },
  {
    id: "law",
    faTitle: "داروی مجاز، مادهٔ پژوهشی، داروی کنترل‌شده",
    enTitle: "Licensed medicine, research chemical, controlled drug",
    fa: [
      "سماگلوتاید قلم دارای پروانه است. ویال پژوهشی سماگلوتاید آن قلم نیست.",
      "BPC-157 در بریتانیا و اتحادیه اروپا داروی مجاز نیست.",
      "استروئید آنابولیک در بریتانیا کلاس C است و عرضهٔ آن جرم است. این آکادمی استثناهای قانونی و راه تهیه را شرح نمی‌دهد.",
    ],
    en: [
      "Semaglutide has a licensed pen. A research vial of semaglutide is not that pen.",
      "BPC-157 is not an authorised medicine in the UK or the European Union.",
      "Anabolic steroids are Class C in the UK and supplying them is a crime. This academy does not explain legal exceptions or how to obtain them.",
    ],
  },
];

export function AcademyView() {
  const { lang } = useLanguage();
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-black sm:text-4xl">{tx(lang, "آکادمی", "Academy")}</h1>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {tx(lang, "پنج درس کوتاه برای خواندن همین کاتالوگ. هیچ‌کدام دستور کار آزمایش روی انسان نیست.", "Five short lessons for reading this catalog. None of them is a protocol for experimenting on a person.")}
      </p>
      <Accordion multiple hiddenUntilFound defaultValue={["peptide"]} className="mt-6 gap-3">
        {modules.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="rounded-2xl border border-slate-200 px-4 dark:border-slate-800">
            <AccordionTrigger className="text-base font-bold">{tx(lang, item.faTitle, item.enTitle)}</AccordionTrigger>
            <AccordionContent>
              {(lang === "fa" ? item.fa : item.en).map((paragraph) => (
                <p key={paragraph} className="leading-8 text-slate-700 dark:text-slate-200">{paragraph}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
