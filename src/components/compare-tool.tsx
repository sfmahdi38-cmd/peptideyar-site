"use client";

import { tx, useLanguage } from "@/components/language";
import { compounds, getCompound } from "@/lib/catalog";
import { flagLabel, sectionShort, text } from "@/lib/catalog/labels";
import type { Compound, Section } from "@/lib/catalog/types";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const sections: Section[] = ["peptide", "oral", "oil", "raw"];

export function CompareTool() {
  const { lang } = useLanguage();
  const params = useSearchParams();
  const router = useRouter();
  const left = getCompound(params.get("a") ?? "") ?? compounds[0];
  const right = getCompound(params.get("b") ?? "") ?? compounds[1] ?? compounds[0];

  function setSide(key: "a" | "b", slug: string) {
    const search = new URLSearchParams(params.toString());
    search.set("a", key === "a" ? slug : (params.get("a") ?? left.slug));
    search.set("b", key === "b" ? slug : (params.get("b") ?? right.slug));
    if (key === "a") search.set("a", slug);
    if (key === "b") search.set("b", slug);
    router.replace(`/compare?${search.toString()}`);
  }

  const rows: Array<{ label: string; render: (item: Compound) => string }> = [
    { label: tx(lang, "نام فارسی", "Persian name"), render: (item) => item.faName },
    { label: tx(lang, "دسته", "Section"), render: (item) => text(lang, sectionShort[item.section]) },
    { label: "CAS", render: (item) => item.cas ?? "—" },
    { label: tx(lang, "فرمول", "Formula"), render: (item) => item.formula ?? "—" },
    { label: tx(lang, "پرچم‌ها", "Flags"), render: (item) => item.flags.map((flag) => text(lang, flagLabel[flag])).join(lang === "fa" ? "، " : ", ") || "—" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-black sm:text-4xl">{tx(lang, "مقایسهٔ دو مدخل", "Compare two entries")}</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
        {tx(lang, "فقط شناسه و وضعیت را کنار هم می‌گذارد. برنامهٔ مصرف از این جدول درنمی‌آید.", "This places identity and status side by side. A use plan does not come out of the table.")}
      </p>
      {left.slug === right.slug ? (
        <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:bg-amber-950 dark:text-amber-100">
          {tx(lang, "هر دو ستون یک ماده‌اند.", "Both columns are the same substance.")}
        </p>
      ) : null}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900">
            <tr>
              <th className="p-3 text-start">{tx(lang, "ویژگی", "Field")}</th>
              <th className="p-3 text-start"><Picker value={left.slug} onChange={(slug) => setSide("a", slug)} label={tx(lang, "ستون اول", "First column")} /></th>
              <th className="p-3 text-start"><Picker value={right.slug} onChange={(slug) => setSide("b", slug)} label={tx(lang, "ستون دوم", "Second column")} /></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-slate-200 align-top dark:border-slate-800">
                <th className="p-3 text-start font-semibold text-slate-500">{row.label}</th>
                <td className="p-3" dir="auto">{row.render(left)}</td>
                <td className="p-3" dir="auto">{row.render(right)}</td>
              </tr>
            ))}
            <tr className="border-t border-slate-200 align-top dark:border-slate-800">
              <th className="p-3 text-start font-semibold text-slate-500">{tx(lang, "خلاصه", "Summary")}</th>
              <td className="p-3 leading-7">{left.summary[lang]}</td>
              <td className="p-3 leading-7">{right.summary[lang]}</td>
            </tr>
            <tr className="border-t border-slate-200 dark:border-slate-800">
              <th className="p-3" />
              <td className="p-3"><Link className="font-bold text-teal-700" href={`/catalog/${left.slug}`}>{tx(lang, "مدخل کامل", "Full entry")}</Link></td>
              <td className="p-3"><Link className="font-bold text-teal-700" href={`/catalog/${right.slug}`}>{tx(lang, "مدخل کامل", "Full entry")}</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Picker({ value, onChange, label }: { value: string; onChange: (slug: string) => void; label: string }) {
  const { lang } = useLanguage();
  return (
    <select
      aria-label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-2 text-sm font-semibold dark:border-slate-700 dark:bg-slate-950"
    >
      {sections.map((section) => (
        <optgroup key={section} label={text(lang, sectionShort[section])}>
          {compounds
            .filter((item) => item.section === section)
            .map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
        </optgroup>
      ))}
    </select>
  );
}
