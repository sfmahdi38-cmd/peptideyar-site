"use client";

import { tx, useLanguage } from "@/components/language";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { safetyQuestions } from "@/lib/safety-faq";

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
      <Accordion multiple hiddenUntilFound defaultValue={["sell"]} className="mt-6 gap-3">
        {safetyQuestions.map((item) => (
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
