"use client";

import { tx, useLanguage } from "@/components/language";
import { cn } from "cn";
import { site } from "@/lib/site";
import { Atom, BookOpen, Calculator, FlaskConical, GitCompare, Menu, Moon, Send, ShieldAlert, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/catalog", fa: "کاتالوگ", en: "Catalog", icon: FlaskConical },
  { href: "/calculator", fa: "محاسبهٔ غلظت", en: "Concentration", icon: Calculator },
  { href: "/compare", fa: "مقایسه", en: "Compare", icon: GitCompare },
  { href: "/academy", fa: "آکادمی", en: "Academy", icon: BookOpen },
  { href: "/safety", fa: "ایمنی", en: "Safety", icon: ShieldAlert },
];

export function SiteHeader() {
  const { lang, setLang, dark, setDark } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40">
      <div className="bg-teal-800 text-white">
        <p className="mx-auto flex max-w-6xl items-start gap-2 px-4 py-2 text-xs leading-5 sm:items-center sm:text-sm">
          <ShieldAlert className="mt-0.5 size-4 shrink-0 sm:mt-0" aria-hidden />
          <span>
            {tx(
              lang,
              "فقط برای آموزش و پژوهش آزمایشگاهی. مصرف انسانی نیست. این سایت فروش، قیمت و راهنمای مصرف ندارد.",
              "Educational laboratory reference only. Not for human use. This site has no sales, prices, or instructions for use.",
            )}
          </span>
        </p>
      </div>
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="flex size-10 items-center justify-center rounded-xl bg-teal-600 text-white">
              <Atom className="size-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-lg font-extrabold tracking-tight text-teal-700 dark:text-teal-300">
                {tx(lang, "پپتیدیار", "PeptideYar")}
              </span>
              <span className="hidden truncate text-[11px] text-slate-500 sm:block dark:text-slate-400">
                {tx(lang, "دانشنامهٔ پژوهشی، بدون فروش", "Research encyclopedia, no sales")}
              </span>
            </span>
          </Link>
          <nav className="ms-auto hidden items-center gap-1 lg:flex" aria-label={tx(lang, "اصلی", "Primary")}>
            {links.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold",
                    active
                      ? "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900",
                  )}
                >
                  <Icon className="size-4" aria-hidden />
                  {tx(lang, item.fa, item.en)}
                </Link>
              );
            })}
          </nav>
          <div className="ms-auto flex items-center gap-2 lg:ms-0">
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 p-2 text-teal-700 dark:border-slate-700 dark:text-teal-300"
              aria-label={tx(lang, "تلگرام پپتیدیار", "PeptideYar on Telegram")}
              title={tx(lang, "تلگرام پپتیدیار", "PeptideYar on Telegram")}
            >
              <Send className="size-4" aria-hidden />
            </a>
            <button
              type="button"
              className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-teal-800 dark:border-slate-700 dark:text-teal-200"
              onClick={() => setLang(lang === "fa" ? "en" : "fa")}
            >
              {lang === "fa" ? "EN" : "فا"}
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-amber-200"
              onClick={() => setDark(!dark)}
              aria-label={tx(lang, "تغییر زمینه", "Toggle theme")}
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-200 p-2 lg:hidden dark:border-slate-700"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={tx(lang, "منو", "Menu")}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="space-y-1 border-t border-slate-200 px-4 py-3 lg:hidden dark:border-slate-800" aria-label={tx(lang, "موبایل", "Mobile")}>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                {tx(lang, item.fa, item.en)}
              </Link>
            ))}
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-teal-700 hover:bg-slate-100 dark:text-teal-300 dark:hover:bg-slate-900"
            >
              <Send className="size-4" aria-hidden />
              {tx(lang, "راهنمایی در تلگرام", "Ask on Telegram")}
            </a>
          </nav>
        ) : null}
      </header>
    </div>
  );
}
