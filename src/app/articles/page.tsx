import { ArticleCard } from "@/components/article-card";
import { articleSummaries } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import { Rss } from "lucide-react";

export const metadata = pageMetadata({
  path: "/articles",
  title: "راهنماها و مقاله‌های پپتید",
  description: "راهنماهای روزانهٔ پپتیدها دربارهٔ پپتیدها، خرید آگاهانه، وضعیت قانونی و پژوهش‌های تازه. آموزشی، با منبع، و بدون فروش.",
});

export default function ArticlesPage() {
  const articles = articleSummaries();
  return (
    <div dir="rtl" lang="fa" className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">آموزش و راهنمایی</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">راهنماها و مقاله‌ها</h1>
        <a href="/feed.xml" className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 dark:text-teal-300">
          <Rss className="size-4" aria-hidden />
          خوراک RSS
        </a>
      </div>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
        هر روز یک راهنمای تازه: از «پپتید چیست» تا اینکه پیش از خرید چه چیزهایی را بررسی کنید. پپتیدها چیزی نمی‌فروشد و این‌جا فقط آموزش و راهنمایی است.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <li key={article.slug}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}
