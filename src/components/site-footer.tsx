"use client";

import { tx, useLanguage } from "@/components/language";
import { site } from "@/lib/site";
import { Send } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  const { lang } = useLanguage();
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-sm font-bold text-teal-800 dark:text-teal-300">
            {tx(lang, "سلب مسئولیت", "Disclaimer")}
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {tx(
              lang,
              "پپتیدیار دانشنامهٔ آموزشی است و فروشنده، داروخانه یا مشاور درمان نیست. هیچ ماده‌ای در این فهرست برای مصرف انسانی توصیه نمی‌شود. بسیاری از نام‌ها در بریتانیا و اتحادیه اروپا داروی مجاز نیستند و برخی استروئیدهای آنابولیک داروی کنترل‌شده‌اند. اطلاعات اینجا تشخیص یا تجویز نیست.",
              "PeptideYar is an educational encyclopedia. It is not a seller, a pharmacy, or a treatment adviser. Nothing in this index is recommended for human use. Many names are not authorised medicines in the UK or the EU, and some anabolic steroids are controlled drugs. This is not diagnosis or a prescription.",
            )}
          </p>
        </div>
        <div className="text-sm leading-7">
          <p className="font-bold text-slate-800 dark:text-slate-100">{tx(lang, "صفحه‌ها", "Pages")}</p>
          <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
            <li><Link className="hover:text-teal-700" href="/catalog">{tx(lang, "کاتالوگ", "Catalog")}</Link></li>
            <li><Link className="hover:text-teal-700" href="/safety">{tx(lang, "ایمنی و حدود کار", "Safety and limits")}</Link></li>
            <li><Link className="hover:text-teal-700" href="/academy">{tx(lang, "آکادمی", "Academy")}</Link></li>
          </ul>
          <p className="mt-5 font-bold text-slate-800 dark:text-slate-100">{tx(lang, "ارتباط", "Contact")}</p>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            {tx(lang, "راهنمایی بیشتر و معرفی داروخانه یا مرکز مجاز:", "Further guidance and referral to a licensed pharmacy or centre:")}
          </p>
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-bold text-teal-700 hover:text-teal-600 dark:text-teal-300"
          >
            <Send className="size-4" aria-hidden />
            <bdi dir="ltr">{site.telegramHandle}</bdi>
          </a>
        </div>
      </div>
      <p className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500 dark:border-slate-800">
        © ۲۰۲۶ PeptideYar
      </p>
    </footer>
  );
}
