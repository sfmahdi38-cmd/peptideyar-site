import { ArticleCard } from "@/components/article-card";
import { JsonLdScript } from "@/components/json-ld";
import { TelegramCta } from "@/components/telegram-cta";
import { articleSummaries, getArticle, getArticles, type Article } from "@/lib/articles";
import { getCompound } from "@/lib/catalog";
import { monographs } from "@/lib/catalog/monographs";
import { formatDate } from "@/lib/dates";
import { ogImage, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    path: `/articles/${article.slug}`,
    title: article.title,
    description: article.description,
    article: { publishedTime: article.date, modifiedTime: article.updated, keywords: article.keywords },
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = article.related.map((item) => getCompound(item)).filter((item) => item !== undefined);
  const more = articleSummaries().filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <div dir="rtl" lang="fa" className="mx-auto max-w-3xl px-4 py-8">
      <nav aria-label="مسیر صفحه" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-700">پپتیدها</Link>
        <span className="mx-2">›</span>
        <Link href="/articles" className="hover:text-teal-700">راهنماها</Link>
      </nav>
      <article className="mt-4">
        {article.category ? (
          <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-bold text-teal-800 dark:bg-teal-950 dark:text-teal-200">{article.category}</span>
        ) : null}
        <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{article.title}</h1>
        <p className="mt-4 text-lg leading-9 text-slate-600 dark:text-slate-300">{article.description}</p>
        <p className="mt-4 text-xs text-slate-500">
          انتشار: <bdi><time dateTime={article.date}>{formatDate(article.date)}</time></bdi>
          {article.updated && article.updated !== article.date ? (
            <>
              {" · "}به‌روزرسانی: <bdi><time dateTime={article.updated}>{formatDate(article.updated)}</time></bdi>
            </>
          ) : null}
          {" · "}
          <bdi>{article.readingMinutes.toLocaleString("fa-IR")} دقیقه مطالعه</bdi>
        </p>
        <div className="article-body mt-8" dangerouslySetInnerHTML={{ __html: article.html }} />
      </article>

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-black">مدخل‌های مرتبط در دانشنامه</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/catalog/${item.slug}`} className="block rounded-xl border border-slate-200 px-4 py-3 hover:border-teal-500 dark:border-slate-800">
                  <bdi className="font-bold" dir="ltr">{item.name}</bdi>
                  <span className="mt-1 block text-sm text-slate-500">
                    {item.faName}
                    {monographs[item.slug] ? " · مونوگراف کامل" : ""}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <TelegramCta
        title="سؤال بیشتری دارید؟"
        body="برای راهنمایی بیشتر و معرفی داروخانه یا مرکز مجاز، در تلگرام @peptideha یا @peptideyar پیام بدهید. پپتیدها خودش چیزی نمی‌فروشد."
        button="پیام در تلگرام"
      />

      <p className="mt-6 text-xs leading-6 text-slate-500">
        این مطلب آموزشی است و جای تشخیص یا نسخهٔ پزشک را نمی‌گیرد. دوز و روش مصرف در پپتیدها نوشته نمی‌شود.
      </p>

      {more.length > 0 ? (
        <section className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
          <h2 className="text-lg font-black">راهنماهای دیگر</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {more.map((item) => (
              <li key={item.slug}>
                <ArticleCard article={item} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <JsonLdScript data={structuredData(article)} />
    </div>
  );
}

function structuredData(article: Article) {
  const url = `${site.url}/articles/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.nameFa, item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "راهنماها", item: `${site.url}/articles` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        headline: article.title,
        description: article.description,
        inLanguage: "fa",
        datePublished: article.date,
        dateModified: article.updated ?? article.date,
        image: `${site.url}${ogImage.url}`,
        keywords: article.keywords.join(", "),
        author: { "@id": `${site.url}/#organization` },
        publisher: { "@id": `${site.url}/#organization` },
        about: article.related.map((item) => ({ "@id": `${site.url}/catalog/${item}` })),
      },
      ...(article.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              inLanguage: "fa",
              mainEntity: article.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]
        : []),
    ],
  };
}
