import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const paths = ["", "/channels", "/buy", "/faq", "/about"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: path === "" ? `${site.url}/` : `${site.url}${path}`,
    lastModified: "2026-10-18",
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
