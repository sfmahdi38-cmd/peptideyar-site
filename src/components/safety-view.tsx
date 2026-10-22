"use client";

import { tx, useLanguage } from "@/components/language";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    id: "sell",
    faQ: "آیا پپتیدیار می‌فروشد؟",
    enQ: "Does PeptideYar sell anything?",
    faA: "نه. قیمت، سبد خرید، موجودی و لینک فروشنده ندارد. چیدمان کاتالوگ فقط برای پیدا کردن نام شیمیایی است.",
    enA: "No. There is no price, basket, stock count, or seller link. The catalog layout exists so a chemical name can be found.",
  },
  {
    id: "human",
    faQ: "می‌شود این مواد را مصرف کرد؟",
    enQ: "Can these substances be taken?",
    faA: "این دانشنامه مصرف انسانی را توصیه نمی‌کند و روش آن را هم نمی‌نویسد. برچسب پژوهشی «نه برای مصرف انسان» ادعای خودِ فهرست تجاری است، نه یک مجوز.",
    enA: "This encyclopedia does not recommend human use and does not describe a method. A “not for human consumption” label is the trade list’s own claim, not a licence.",
  },
  {
    id: "dose",
    faQ: "دوزها کجا هستند؟",
    enQ: "Where are the doses?",
    faA: "هیچ‌جا. محاسبه‌گر فقط رابطهٔ جرم و حجم را حساب می‌کند و عدد داخل آن مقدار پیشنهادی نیست.",
    enA: "Nowhere. The calculator only computes the mass-volume relation, and the number you type is not a suggested amount.",
  },
  {
    id: "uk",
    faQ: "وضعیت بریتانیا و اروپا چیست؟",
    enQ: "What about the UK and Europe?",
    faA: "بسیاری از پپتیدهای این فهرست داروی مجاز MHRA یا EMA نیستند. استروئیدهای آنابولیک در بریتانیا کلاس C هستند و عرضهٔ آن‌ها جرم است. این صفحه استثناهای قانون و روش واردات را شرح نمی‌دهد.",
    enA: "Many peptides on this list are not MHRA or EMA authorised medicines. Anabolic steroids are Class C in the UK and supplying them is a crime. This page does not explain legal exceptions or how to import them.",
  },
  {
    id: "dnp",
    faQ: "چرا دی‌نیتروفنول این‌قدر کوتاه توضیح داده شده؟",
    enQ: "Why is dinitrophenol described so briefly?",
    faA: "چون مادهٔ صنعتی است و سوءمصرفش برای لاغری بارها کشنده بوده. شناسایی خطر کافی است. دوز، تهیه و کنترل تب نوشته نمی‌شود.",
    enA: "Because it is an industrial chemical and misuse for weight loss has repeatedly been fatal. Identifying the hazard is enough. Dose, preparation, and temperature control are not written.",
  },
  {
    id: "licensed",
    faQ: "اگر دارو جای دیگری مجاز است، ویال پژوهشی همان است؟",
    enQ: "If a drug is licensed elsewhere, is the research vial the same thing?",
    faA: "نه. سماگلوتاید، تستوسترون، ایزوترتینوئین و مانند این‌ها فراوردهٔ دارای پروانه و زنجیرهٔ تأمین جدا دارند. جنس بدون پروانه همان قرص یا قلم نیست و جای نسخه را نمی‌گیرد.",
    enA: "No. Semaglutide, testosterone, isotretinoin, and similar drugs have a licensed product and a separate supply chain. Unlicensed material is not that tablet or pen, and it does not replace a prescription.",
  },
  {
    id: "count",
    faQ: "پس ۵۴۷ محصول کجاست؟",
    enQ: "So where are the 547 products?",
    faA: "آن عدد شمار قلم کالا بوده، نه شمار ماده. چهار دستهٔ اعلام‌شده ۱۷۹، ۷۹، ۶۷ و ۲۰۴ بودند که جمعشان ۵۲۹ است. پپتیدیار هر نام شیمیایی را یک بار آورده و برای رساندن شمارش به ۵۴۷ نام نساخته است.",
    enA: "That figure counted product lines, not substances. The four stated sections were 179, 79, 67, and 204, which add up to 529. PeptideYar lists each chemical name once and did not invent names to reach 547.",
  },
];

export function SafetyView() {
  const { lang } = useLanguage();
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-black sm:text-4xl">{tx(lang, "ایمنی و حدود این دانشنامه", "Safety and the limits of this encyclopedia")}</h1>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {tx(
          lang,
          "اگر در حال مصرف داروی نسخه‌ای هستید یا باردارید، سؤال را به پزشک یا داروساز بدهید، نه به یک صفحهٔ وب.",
          "If you are taking a prescription medicine or you are pregnant, take the question to a doctor or pharmacist, not to a web page.",
        )}
      </p>
      <Accordion multiple defaultValue={["sell"]} className="mt-6 gap-3">
        {questions.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="rounded-2xl border border-slate-200 px-4 dark:border-slate-800">
            <AccordionTrigger className="text-start text-base font-bold">{tx(lang, item.faQ, item.enQ)}</AccordionTrigger>
            <AccordionContent>
              <p className="leading-8 text-slate-700 dark:text-slate-200">{tx(lang, item.faA, item.enA)}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
