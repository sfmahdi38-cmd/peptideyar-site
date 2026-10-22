import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";
import { compounds } from "@/lib/catalog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/catalog", "/calculator", "/compare", "/academy", "/safety", ...compounds.map((item) => `/catalog/${item.slug}`)];
  const pages: MetadataRoute.Sitemap = paths.map((path) => ({
    url: path === "" ? `${site.url}/` : `${site.url}${path}`,
    lastModified: "2026-10-22",
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/catalog/") ? 0.5 : 0.7,
  }));
  const articles = getArticles();
  return [
    ...pages,
    {
      url: `${site.url}/articles`,
      lastModified: articles[0]?.updated ?? articles[0]?.date ?? "2026-10-22",
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `${site.url}/articles/${article.slug}`,
      lastModified: article.updated ?? article.date,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
