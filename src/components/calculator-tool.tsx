"use client";

import { tx, useLanguage } from "@/components/language";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

export function CalculatorTool() {
  const { lang } = useLanguage();
  const [mass, setMass] = useState("5");
  const [volume, setVolume] = useState("2");
  const [sample, setSample] = useState("250");

  const result = useMemo(() => {
    const mg = Number(mass);
    const ml = Number(volume);
    const mcg = Number(sample);
    if (!Number.isFinite(mg) || !Number.isFinite(ml) || !Number.isFinite(mcg)) {
      return { error: "invalid" as const };
    }
    if (mg <= 0 || ml <= 0 || mcg <= 0) {
      return { error: "nonpositive" as const };
    }
    const concentration = (mg * 1000) / ml;
    const draw = mcg / concentration;
    return {
      error: null,
      concentration,
      draw,
      over: draw > ml,
    };
  }, [mass, volume, sample]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-sm font-bold text-teal-700 dark:text-teal-300">{tx(lang, "حساب آزمایشگاهی", "Laboratory arithmetic")}</p>
      <h1 className="mt-2 text-3xl font-black sm:text-4xl">{tx(lang, "غلظت محلول", "Solution concentration")}</h1>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {tx(
          lang,
          "غلظت برابر است با جرم حل‌شده تقسیم بر حجم حلال. عددهای داخل جعبه فقط مثال حساب‌اند، نه مقدار مصرف. این صفحه سرنگ، واحد انسولین و روش تزریق ندارد.",
          "Concentration is dissolved mass divided by solvent volume. The numbers in the boxes are worked examples, not amounts to take. This page has no syringe, insulin-unit scale, or injection method.",
        )}
      </p>
      <div className="mt-6 grid gap-4 rounded-3xl border border-slate-200 p-4 sm:grid-cols-3 dark:border-slate-800">
        <Field label={tx(lang, "جرم نمونه (mg)", "Sample mass (mg)")} value={mass} onChange={setMass} />
        <Field label={tx(lang, "حجم حلال (mL)", "Solvent volume (mL)")} value={volume} onChange={setVolume} />
        <Field label={tx(lang, "جرم مورد محاسبه (mcg)", "Mass to calculate (mcg)")} value={sample} onChange={setSample} />
      </div>
      <div className="mt-4 rounded-3xl bg-slate-950 p-5 text-slate-50" aria-live="polite">
        {result.error ? (
          <p>{tx(lang, "هر سه عدد باید بزرگ‌تر از صفر باشند.", "All three numbers have to be greater than zero.")}</p>
        ) : (
          <>
            <p className="text-sm text-teal-200">{tx(lang, "غلظت", "Concentration")}</p>
            <p className="mt-1 font-mono text-3xl font-bold" dir="ltr">
              {format(result.concentration)} mcg/mL
            </p>
            <p className="mt-4 text-sm text-slate-300">{tx(lang, "حجم متناظر با جرم انتخاب‌شده", "Volume that contains the chosen mass")}</p>
            <p className="mt-1 font-mono text-2xl font-bold" dir="ltr">
              {format(result.draw)} mL
            </p>
            {result.over ? (
              <p className="mt-4 text-sm text-amber-200">
                {tx(lang, "این جرم از کل مادهٔ داخل این حجم بیشتر است.", "That mass is greater than the total amount in this volume.")}
              </p>
            ) : null}
          </>
        )}
      </div>
      <p className="mt-4 text-xs leading-6 text-slate-500">
        {tx(lang, "رابطه: mcg/mL = (mg × ۱۰۰۰) / mL.", "Relation: mcg/mL = (mg × 1000) / mL.")}
      </p>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <Input className="mt-2" inputMode="decimal" value={value} onChange={(event) => onChange(event.target.value)} dir="ltr" />
    </label>
  );
}

function format(value: number): string {
  if (value >= 100) return value.toFixed(0);
  if (value >= 10) return value.toFixed(1);
  return value.toFixed(3);
}
