import type { Metadata } from "next";
import { site } from "@/lib/site";

type Path = "/" | "/channels" | "/buy" | "/faq" | "/about";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: Path;
}): Metadata {
  const documentTitle =
    path === "/" ? `${site.nameFa} | اشتراک IPTV برای بیننده فارسی‌زبان` : `${title} | ${site.nameFa}`;

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
      images: [
        {
          url: "/images/iptvyar-promo.png",
          alt: "پوستر معرفی آی‌پی‌تی‌وی یار",
        },
      ],
    },
  };
}
