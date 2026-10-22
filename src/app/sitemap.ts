import type { MetadataRoute } from "next";
import { compounds } from "@/lib/catalog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/catalog", "/calculator", "/compare", "/academy", "/safety", ...compounds.map((item) => `/catalog/${item.slug}`)];
  return paths.map((path) => ({
    url: path === "" ? `${site.url}/` : `${site.url}${path}`,
    lastModified: "2026-10-22",
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/catalog/") ? 0.5 : 0.7,
  }));
}
