"use client";

import { ArticleCard } from "@/components/article-card";
import { tx, useLanguage } from "@/components/language";
import { Input } from "@/components/ui/input";
import { sectionColor, Vial } from "@/components/vial";
import { compounds, featuredSlugs, getCompound, sectionCounts } from "@/lib/catalog";
import type { ArticleSummary } from "@/lib/articles";
import { sectionShort, text } from "@/lib/catalog/labels";
import { monographs } from "@/lib/catalog/monographs";
import { ArrowLeft, ArrowRight, Bandage, BookCheck, Brain, Dna, Newspaper, Scale, Search, TrendingUp, Zap, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const popular = ["bpc-157", "semaglutide", "tirzepatide", "tb-500", "ghk-cu", "mots-c"];

const topics: Array<{ group: string; icon: LucideIcon; fa: string; en: string; color: string }> = [
  { group: "incretin", icon: Scale, fa: "کاهش وزن و اینکرتین‌ها", en: "Weight and incretins", color: "#0d9488" },
  { group: "somatotropic", icon: TrendingUp, fa: "محور هورمون رشد", en: "Growth-hormone axis", color: "#d97706" },
  { group: "tissue", icon: Bandage, fa: "ترمیم بافت", en: "Tissue repair", color: "#e11d48" },
  { group: "mitochondrial", icon: Zap, fa: "میتوکندری و انرژی", en: "Mitochondria and energy", color: "#7c3aed" },
  { group: "neuro", icon: Brain, fa: "مغز و اعصاب", en: "Brain and nerves", color: "#2563eb" },
  { group: "bioregulator", icon: Dna, fa: "بیورگولاتورهای کوتاه", en: "Short bioregulators", color: "#0891b2" },
];

export function HomeView({ latest }: { latest: ArticleSummary[] }) {
  const { lang, dark } = useLanguage();
  const [query, setQuery] = useState("");
  const counts = sectionCounts();
  const Arrow = lang === "fa" ? ArrowLeft : ArrowRight;
  const sections = ["peptide", "oral", "oil", "raw"] as const;
  const monographCount = Object.keys(monographs).length;

  return (
    <div>
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <div>
            <p className="text-sm font-bold text-teal-700 dark:text-teal-300">
              {tx(lang, "دانشنامهٔ دوزبانه", "Bilingual encyclopedia")}
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              {tx(lang, "شناسنامهٔ شیمیایی، نه ویترین فروش", "A chemical index, not a shop window")}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {tx(
                lang,
                "نام‌های پپتید، قرص، روغن تزریقی و پودر خام از یک فهرست پژوهشی اینجا طبقه‌بندی شده‌اند. کنار هر نام، وضعیت پروانه و خطر آمده است. دوز، روش تزریق، قیمت و مسیر خرید نیست.",
                "Peptide, tablet, injectable-oil, and bulk-powder names from a research list are classified here. Each name carries licence status and risk. There is no dose, injection method, price, or way to buy.",
              )}
            </p>
            <form action="/catalog" className="mt-6 flex flex-col gap-2 sm:flex-row">
              <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input
                  name="q"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={tx(lang, "مثلاً BPC-157 یا تستوسترون", "For example BPC-157 or testosterone")}
                  className="ps-10"
                  aria-label={tx(lang, "جستجو در کاتالوگ", "Search the catalog")}
                />
              </div>
              <button type="submit" className="h-11 rounded-xl bg-teal-700 px-5 text-sm font-bold text-white">
                {tx(lang, "جستجو", "Search")}
              </button>
            </form>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-slate-500">{tx(lang, "پرجست‌وجو:", "Popular:")}</span>
              {popular.map((slug) => {
                const item = getCompound(slug);
                if (!item) return null;
                return (
                  <Link
                    key={slug}
                    href={`/catalog/${slug}`}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {lang === "fa" ? item.faName : item.name}
                  </Link>
                );
              })}
            </div>
            <dl className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              <Stat value={lang === "fa" ? compounds.length.toLocaleString("fa-IR") : String(compounds.length)} label={tx(lang, "مدخل", "entries")} />
              <Stat value={lang === "fa" ? monographCount.toLocaleString("fa-IR") : String(monographCount)} label={tx(lang, "مونوگراف با منبع PubMed", "PubMed-sourced monographs")} />
              <Stat value={tx(lang, "روزانه", "Daily")} label={tx(lang, "راهنمای تازه", "new guides")} />
            </dl>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
            <div aria-hidden className="pointer-events-none absolute -top-24 -end-24 size-64 rounded-full bg-teal-400/20 blur-3xl" />
            <Vial name="BPC-157" formula="C62H98N16O22" capColor="#243f86" dark={dark} large />
            <div className="relative mt-4 flex flex-wrap justify-center gap-2 text-xs font-bold">
              <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-3 py-1 text-teal-800 dark:bg-teal-950 dark:text-teal-200">
                <BookCheck className="size-3.5" aria-hidden />
                {tx(lang, "منبع تطبیق‌داده‌شده با PubMed", "Sources checked on PubMed")}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {tx(lang, "بدون فروش، بدون دوز", "No sales, no doses")}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12">
        <h2 className="text-2xl font-black">{tx(lang, "بر اساس موضوع", "Browse by topic")}</h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;
            const count = compounds.filter((item) => item.section === "peptide" && item.group === topic.group).length;
            return (
              <li key={topic.group}>
                <Link
                  href={`/catalog?section=peptide&group=${topic.group}`}
                  className="flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-teal-500 dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: topic.color }}>
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold leading-6">{tx(lang, topic.fa, topic.en)}</span>
                    <span className="block text-xs text-slate-500">
                      {lang === "fa" ? `${count.toLocaleString("fa-IR")} مدخل` : `${count} entries`}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {latest.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pt-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-black">
              <Newspaper className="size-6 text-teal-600" aria-hidden />
              {tx(lang, "تازه‌ترین راهنماها", "Latest guides")}
            </h2>
            <Link href="/articles" className="inline-flex items-center gap-1 text-sm font-bold text-teal-700 dark:text-teal-300">
              {tx(lang, "همهٔ راهنماها", "All guides")}
              <Arrow className="size-4" />
            </Link>
          </div>
          <ul dir="rtl" lang="fa" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-black">{tx(lang, "چهار دسته", "Four sections")}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          {tx(
            lang,
            "هر عدد، شمار نام‌هایی است که در همان دسته شناسنامه دارند. هر نام شیمیایی فقط یک بار آمده است.",
            "Each number is how many names in that section have an entry. Each chemical name appears only once.",
          )}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((id) => (
            <li key={id}>
              <Link href={`/catalog?section=${id}`} className="block h-full rounded-2xl border border-slate-200 bg-white p-4 hover:border-teal-500 dark:border-slate-800 dark:bg-slate-900">
                <span className="mb-4 block h-1.5 w-12 rounded-full" style={{ background: sectionColor[id] }} />
                <span className="text-3xl font-black">{lang === "fa" ? counts[id].toLocaleString("fa-IR") : counts[id]}</span>
                <span className="mt-1 block font-bold">{text(lang, sectionShort[id])}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          {tx(lang, "جمع مدخل‌های این دانشنامه", "Entries in this encyclopedia")}:{" "}
          {lang === "fa" ? compounds.length.toLocaleString("fa-IR") : compounds.length}
        </p>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-black">{tx(lang, "مونوگراف‌های بلند", "Long monographs")}</h2>
            <Link href="/catalog?full=1" className="inline-flex items-center gap-1 text-sm font-bold text-teal-700 dark:text-teal-300">
              {tx(lang, `همهٔ ${monographCount.toLocaleString("fa-IR")} مونوگراف`, `All ${monographCount} monographs`)}
              <Arrow className="size-4" />
            </Link>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSlugs.map((slug) => {
              const item = getCompound(slug);
              if (!item) return null;
              return (
                <li key={slug}>
                  <Link href={`/catalog/${slug}`} className="block h-full rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                    <span className="font-extrabold" dir="ltr">{item.name}</span>
                    <span className="mt-2 line-clamp-4 block text-sm leading-6 text-slate-600 dark:text-slate-300">{item.summary[lang]}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-3">
        <Info
          title={tx(lang, "پژوهش، نه درمان", "Research, not treatment")}
          body={tx(lang, "حتی وقتی یک ماده در کشوری دارو است، ویال این فهرست همان داروی دارای پروانه نیست.", "Even when a substance is a medicine in some country, a vial from this list is not that licensed product.")}
        />
        <Info
          title={tx(lang, "بدون دوز", "No doses")}
          body={tx(lang, "محاسبه‌گر فقط غلظت یک محلول آزمایشگاهی را از روی جرم و حجم حساب می‌کند.", "The calculator only turns a laboratory mass and volume into a concentration.")}
        />
        <Info
          title={tx(lang, "قانون بریتانیا", "UK law")}
          body={tx(lang, "عرضهٔ استروئید آنابولیک در بریتانیا جرم است. این سایت مسیر تهیه را نمی‌نویسد.", "Supplying anabolic steroids is a crime in the UK. This site does not describe how to obtain them.")}
        />
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 px-3 py-3 dark:border-slate-800 dark:bg-slate-900/70">
      <dt className="sr-only">{label}</dt>
      <dd className="text-2xl font-black text-teal-700 dark:text-teal-300">{value}</dd>
      <dd className="mt-1 text-xs leading-5 text-slate-500">{label}</dd>
    </div>
  );
}

function Info({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
      <h3 className="font-black">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{body}</p>
    </div>
  );
}
