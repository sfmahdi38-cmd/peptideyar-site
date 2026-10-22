import { getArticles } from "@/lib/articles";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const items = getArticles()
    .map((article) => {
      const url = `${site.url}/articles/${article.slug}`;
      return `    <item>
      <title>${escape(article.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description>${escape(article.description)}</description>
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${site.nameFa} | راهنماها</title>
    <link>${site.url}/articles</link>
    <description>راهنماهای آموزشی روزانهٔ پپتیدیار. بدون فروش.</description>
    <language>fa</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

function escape(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
