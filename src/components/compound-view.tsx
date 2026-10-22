"use client";

import { tx, useLanguage } from "@/components/language";
import { sectionColor, Vial } from "@/components/vial";
import { getCompound, parentCompound, rawSibling, relatedCompounds } from "@/lib/catalog";
import { flagLabel, flagNote, groupLabel, sectionLabel, text } from "@/lib/catalog/labels";
import { monographs } from "@/lib/catalog/monographs";
import { ArrowLeft, ArrowRight, Calculator, GitCompare } from "lucide-react";
import Link from "next/link";

export function CompoundView({ slug }: { slug: string }) {
  const { lang, dark } = useLanguage();
  const compound = getCompound(slug);
  if (!compound) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-black">{tx(lang, "این مدخل نیست", "This entry is not in the index")}</h1>
        <Link className="mt-4 inline-block font-semibold text-teal-700" href="/catalog">
          {tx(lang, "بازگشت به کاتالوگ", "Back to the catalog")}
        </Link>
      </div>
    );
  }

  const monograph = monographs[compound.slug];
  const parent = parentCompound(compound);
  const raw = rawSibling(compound.sameAs ? { ...compound, slug: compound.sameAs } : compound);
  const related = relatedCompounds(compound);
  const Back = lang === "fa" ? ArrowRight : ArrowLeft;
  const severe = compound.flags.includes("severe-hazard");

  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      <Link href="/catalog" className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 dark:text-teal-300">
        <Back className="size-4" />
        {tx(lang, "کاتالوگ", "Catalog")}
      </Link>
      <p className="mt-4 text-xs font-bold tracking-wide text-slate-500">
        {text(lang, sectionLabel[compound.section])}
        {groupLabel[compound.group] ? ` · ${text(lang, groupLabel[compound.group])}` : ""}
      </p>
      <div className="mt-3 grid gap-8 lg:grid-cols-[280px_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
          <Vial
            name={compound.name}
            formula={compound.formula}
            capColor={sectionColor[compound.section] ?? "#0d9488"}
            dark={dark}
            large
          />
          <p className="mt-2 text-center text-xs font-bold text-teal-700 dark:text-teal-300">
            {tx(lang, "فقط پژوهش، نه مصرف انسانی", "Research only, not for human use")}
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl" dir="ltr">{compound.name}</h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">{compound.faName}</p>
          {compound.aliases.length > 0 ? (
            <p className="mt-2 text-sm text-slate-500" dir="ltr">
              {compound.aliases.join(" · ")}
            </p>
          ) : null}
          {severe ? (
            <div className="mt-4 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm leading-7 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-100">
              {text(lang, flagNote["severe-hazard"])}
            </div>
          ) : null}
          {compound.caution ? (
            <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-7 text-amber-950 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100">
              {compound.caution[lang]}
            </div>
          ) : null}
          <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-200">{compound.summary[lang]}</p>
          <dl className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
            {compound.cas ? <Row label="CAS" value={compound.cas} /> : null}
            {compound.formula ? <Row label={tx(lang, "فرمول", "Formula")} value={compound.formula} /> : null}
            {compound.mw ? <Row label={tx(lang, "جرم مولی", "Molar mass")} value={compound.mw} /> : null}
            <Row label={tx(lang, "دسته", "Section")} value={text(lang, sectionLabel[compound.section])} ltr={false} />
          </dl>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href={`/compare?a=${compound.slug}`} className="inline-flex h-10 items-center gap-2 rounded-xl bg-teal-700 px-4 text-sm font-bold text-white">
              <GitCompare className="size-4" />
              {tx(lang, "مقایسه", "Compare")}
            </Link>
            <Link href="/calculator" className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-300 px-4 text-sm font-bold dark:border-slate-700">
              <Calculator className="size-4" />
              {tx(lang, "حساب غلظت آزمایشگاهی", "Laboratory concentration")}
            </Link>
            {raw ? (
              <Link href={`/catalog/${raw.slug}`} className="inline-flex h-10 items-center rounded-xl border border-slate-300 px-4 text-sm font-bold dark:border-slate-700">
                {tx(lang, "پودر خام همین نام", "Bulk powder of this name")}
              </Link>
            ) : null}
            {parent ? (
              <Link href={`/catalog/${parent.slug}`} className="inline-flex h-10 items-center rounded-xl border border-slate-300 px-4 text-sm font-bold dark:border-slate-700">
                {tx(lang, "مدخل اصلی", "Main entry")}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <section className="mt-8 space-y-3">
        <h2 className="text-lg font-black">{tx(lang, "این پرچم‌ها چه می‌گویند", "What the flags mean")}</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {compound.flags.map((flag) => (
            <li key={flag} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
              <p className="text-sm font-bold text-teal-800 dark:text-teal-300">{text(lang, flagLabel[flag])}</p>
              <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{text(lang, flagNote[flag])}</p>
            </li>
          ))}
        </ul>
        {compound.flags.length === 0 ? (
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
            {tx(lang, "این مورد پرچم دارویی خاصی ندارد. باز هم فروش یا توصیهٔ مصرف نیست.", "This item has no extra drug flag. It is still not a sale or a recommendation to use it.")}
          </p>
        ) : null}
      </section>

      {monograph ? (
        <section className="mt-10 space-y-8">
          {monograph.sequence ? (
            <div>
              <h2 className="text-lg font-black">{tx(lang, "توالی", "Sequence")}</h2>
              {monograph.sequenceNote ? <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{monograph.sequenceNote[lang]}</p> : null}
              <div dir="ltr" className="mt-3 flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <span className="rounded-lg bg-teal-100 px-2 py-1 font-mono text-xs font-bold text-teal-800">H₂N</span>
                {monograph.sequence.map((residue, index) => (
                  <span key={`${residue}-${index}`} className="rounded-lg border border-slate-200 bg-white px-2 py-1 font-mono text-xs font-bold dark:border-slate-700 dark:bg-slate-950">
                    <span className="me-1 text-[10px] text-slate-400">{index + 1}</span>
                    {residue}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          <Spec title={tx(lang, "نیمه‌عمر در پژوهش", "Half-life in research")} body={monograph.halfLife[lang]} />
          <Spec title={tx(lang, "هدف گزارش‌شده", "Reported target")} body={monograph.receptors[lang]} />
          <Spec title={tx(lang, "مکانیسم، در حد مقاله", "Mechanism, as far as the papers go")} body={monograph.mechanism[lang]} />
          <div>
            <h2 className="text-lg font-black">{tx(lang, "چه چیزی واقعاً مطالعه شده", "What was actually studied")}</h2>
            <ul className="mt-3 list-disc space-y-2 ps-5 text-sm leading-7 text-slate-700 dark:text-slate-200">
              {monograph.studies.map((study) => (
                <li key={study.en}>{study[lang]}</li>
              ))}
            </ul>
          </div>
          {monograph.literature.length > 0 ? (
            <div>
              <h2 className="text-lg font-black">{tx(lang, "مقاله", "Papers")}</h2>
              <div className="mt-3 space-y-3">
                {monograph.literature.map((paper) => (
                  <article key={paper.title} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <h3 className="font-bold leading-6" dir="ltr">{paper.title}</h3>
                    <p className="mt-1 text-xs text-slate-500" dir="ltr">{paper.journal} · {paper.year}</p>
                    <p className="mt-2 text-sm leading-7">{paper.finding[lang]}</p>
                    <p className="mt-1 text-xs text-slate-500">{paper.model[lang]}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
          <Spec title={tx(lang, "نگهداری نمونهٔ آزمایشگاهی", "Laboratory sample storage")} body={monograph.storage[lang]} />
        </section>
      ) : (
        <p className="mt-8 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          {tx(
            lang,
            "برای این نام مونوگراف بلند با توالی و مقاله ساخته نشده، تا دادهٔ شیمیاییِ نادرست اختراع نشود. شناسه، طبقه و وضعیت قانونیِ بالا همان محتوای قابل اتکا است.",
            "This name does not have a long monograph with a sequence and papers, so that invented chemistry would not be published. The identity, class, and legal status above are the reliable content.",
          )}
        </p>
      )}

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-black">{tx(lang, "هم‌گروه", "Same group")}</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/catalog/${item.slug}`} className="block rounded-xl border border-slate-200 px-4 py-3 hover:border-teal-500 dark:border-slate-800">
                  <span className="font-bold" dir="ltr">{item.name}</span>
                  <span className="mt-1 block text-sm text-slate-500">{item.faName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}

function Row({ label, value, ltr = true }: { label: string; value: string; ltr?: boolean }) {
  return (
    <div className="grid grid-cols-3 gap-3 px-4 py-3 text-sm">
      <dt className="text-slate-500">{label}</dt>
      <dd className="col-span-2 font-semibold" dir={ltr ? "ltr" : undefined}>{value}</dd>
    </div>
  );
}

function Spec({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="text-lg font-black">{title}</h2>
      <p className="mt-2 text-sm leading-8 text-slate-700 dark:text-slate-200">{body}</p>
    </div>
  );
}
