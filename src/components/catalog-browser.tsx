"use client";

import { tx, useLanguage } from "@/components/language";
import { Input } from "@/components/ui/input";
import { sectionColor } from "@/components/vial";
import { claimedSku, groupsFor, searchCompounds, sectionCounts } from "@/lib/catalog";
import { flagLabel, groupLabel, sectionShort, text } from "@/lib/catalog/labels";
import type { Section } from "@/lib/catalog/types";
import { cn } from "cn";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const sections: Array<Section | "all"> = ["all", "peptide", "oral", "oil", "raw"];
const PAGE = 24;

export function CatalogBrowser() {
  const { lang } = useLanguage();
  const params = useSearchParams();
  const router = useRouter();
  const section = (params.get("section") as Section | null) ?? "all";
  const group = params.get("group") ?? "all";
  const initialQuery = params.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const [visible, setVisible] = useState(PAGE);
  const activeSection: Section | "all" = sections.includes(section) ? section : "all";
  const counts = sectionCounts();

  const results = useMemo(
    () => searchCompounds(query, activeSection, group),
    [query, activeSection, group],
  );
  const groups = groupsFor(activeSection).filter((item) => groupLabel[item]);
  const shown = results.slice(0, visible);

  function push(next: { section?: Section | "all"; group?: string; q?: string }) {
    const search = new URLSearchParams(params.toString());
    const nextSection = next.section ?? activeSection;
    const nextGroup = next.group ?? group;
    if (next.q !== undefined) {
      if (next.q) search.set("q", next.q);
      else search.delete("q");
    }
    if (nextSection === "all") search.delete("section");
    else search.set("section", nextSection);
    if (!nextGroup || nextGroup === "all") search.delete("group");
    else search.set("group", nextGroup);
    setVisible(PAGE);
    const queryString = search.toString();
    router.replace(queryString ? `/catalog?${queryString}` : "/catalog");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">{tx(lang, "کاتالوگ مرجع", "Reference catalog")}</p>
      <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
        {tx(lang, "نام‌های شیمیایی، بدون قیمت", "Chemical names, without prices")}
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
        {tx(
          lang,
          `فهرست تجاریِ مبدأ چهار عدد اعلام کرده است: ${claimedSku.peptide.toLocaleString("fa-IR")} پپتید، ${claimedSku.oral.toLocaleString("fa-IR")} قرص، ${claimedSku.oil.toLocaleString("fa-IR")} روغن و ${claimedSku.raw.toLocaleString("fa-IR")} مادهٔ خام. جمع این چهار عدد ${ (claimedSku.peptide + claimedSku.oral + claimedSku.oil + claimedSku.raw).toLocaleString("fa-IR") } است و با رقم ۵۴۷ یکی نیست. اینجا هر نام یک بار آمده، چون بسیاری از آن قلم‌ها فقط اندازهٔ ویال یا بسته‌اند. مادهٔ اعلام‌نشده ساخته نشده است.`,
          `The source trade list claimed ${claimedSku.peptide} peptides, ${claimedSku.oral} tablets, ${claimedSku.oil} oils, and ${claimedSku.raw} raw materials. Those four figures add up to ${claimedSku.peptide + claimedSku.oral + claimedSku.oil + claimedSku.raw}, not 547. Each chemical name is indexed once, because many of those lines are only vial or pack sizes. Unnamed substances were not invented.`,
        )}
      </p>

      <form
        className="mt-6 flex flex-col gap-2 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          push({ q: query });
        }}
      >
        <div className="relative min-w-0 flex-1">
          <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisible(PAGE);
            }}
            placeholder={tx(lang, "نام، نام دیگر، شماره CAS…", "Name, alias, CAS number…")}
            className="ps-10"
            aria-label={tx(lang, "جستجو", "Search")}
          />
        </div>
        {query ? (
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-1 rounded-xl border border-slate-200 px-4 text-sm font-semibold dark:border-slate-700"
            onClick={() => {
              setQuery("");
              push({ q: "" });
            }}
          >
            <X className="size-4" />
            {tx(lang, "پاک کردن", "Clear")}
          </button>
        ) : null}
      </form>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {sections.map((item) => {
          const count = item === "all" ? counts.peptide + counts.oral + counts.oil + counts.raw : counts[item];
          const label = item === "all" ? tx(lang, "همه", "All") : text(lang, sectionShort[item]);
          return (
            <button
              key={item}
              type="button"
              onClick={() => push({ section: item, group: "all" })}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1.5 text-sm font-semibold",
                activeSection === item
                  ? "border-teal-600 bg-teal-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200",
              )}
            >
              {label}{" "}
              <span className="opacity-80">{lang === "fa" ? count.toLocaleString("fa-IR") : count}</span>
            </button>
          );
        })}
      </div>

      {activeSection !== "all" && groups.length > 1 ? (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <FilterChip active={group === "all"} onClick={() => push({ group: "all" })}>
            {tx(lang, "همهٔ زیردسته‌ها", "All groups")}
          </FilterChip>
          {groups.map((item) => (
            <FilterChip key={item} active={group === item} onClick={() => push({ group: item })}>
              {text(lang, groupLabel[item])}
            </FilterChip>
          ))}
        </div>
      ) : null}

      <p className="mt-4 text-sm text-slate-500">
        {tx(lang, "نتیجه", "Results")}: {lang === "fa" ? results.length.toLocaleString("fa-IR") : results.length}
      </p>

      {shown.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
          <p className="font-semibold">{tx(lang, "چیزی با این جستجو پیدا نشد", "Nothing matched this search")}</p>
          <p className="mt-2 text-sm text-slate-500">
            {tx(lang, "نام انگلیسی را کوتاه‌تر بنویسید یا دسته را روی «همه» بگذارید.", "Try a shorter English name, or set the section back to All.")}
          </p>
        </div>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/catalog/${item.slug}`}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-teal-500 dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="mb-3 h-1.5 w-16 rounded-full" style={{ background: sectionColor[item.section] }} />
                <span className="text-xs font-bold text-slate-500">{text(lang, sectionShort[item.section])}</span>
                <span className="mt-1 text-lg font-extrabold leading-6" dir="ltr">{item.name}</span>
                <span className="mt-1 text-sm text-slate-500">{item.faName}</span>
                <span className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.summary[lang]}
                </span>
                <span className="mt-3 flex flex-wrap gap-1">
                  {item.flags.slice(0, 3).map((flag) => (
                    <span key={flag} className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {text(lang, flagLabel[flag])}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {visible < results.length ? (
        <button
          type="button"
          className="mt-6 h-11 rounded-xl bg-teal-700 px-5 text-sm font-bold text-white"
          onClick={() => setVisible((value) => value + PAGE)}
        >
          {tx(lang, "نمایش بیشتر", "Show more")}
        </button>
      ) : null}
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full px-3 py-1 text-xs font-semibold",
        active ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
      )}
    >
      {children}
    </button>
  );
}
