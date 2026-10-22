import type { ArticleSummary } from "@/lib/articles";
import { formatDate } from "@/lib/dates";
import Link from "next/link";

export function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-teal-500 dark:border-slate-800 dark:bg-slate-900"
    >
      {article.category ? (
        <span className="w-fit rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-bold text-teal-800 dark:bg-teal-950 dark:text-teal-200">
          {article.category}
        </span>
      ) : null}
      <span className="mt-3 text-lg font-extrabold leading-8">{article.title}</span>
      <span className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{article.description}</span>
      <span className="mt-auto pt-4 text-xs text-slate-500">
        <bdi><time dateTime={article.date}>{formatDate(article.date)}</time></bdi> · <bdi>{article.readingMinutes.toLocaleString("fa-IR")} دقیقه مطالعه</bdi>
      </span>
    </Link>
  );
}
