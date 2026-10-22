import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const documentTitle = path === "/" ? `${site.nameFa} | دانشنامهٔ پژوهشی پپتید` : title;
  return {
    title: path === "/" ? { absolute: documentTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: documentTitle,
      description,
      url: path,
      locale: site.locale,
      type: "website",
      siteName: site.nameFa,
    },
  };
}
