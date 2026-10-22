import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Shared preview card for link shares (Telegram, WhatsApp, X). Generated as a static file in public/. */
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${site.nameFa} | دانشنامهٔ پژوهشی پپتید`,
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const documentTitle = path === "/" ? `${site.nameFa} | دانشنامهٔ پژوهشی پپتید` : `${title} | ${site.nameFa}`;
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
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description,
      images: [ogImage.url],
    },
  };
}
