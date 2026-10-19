import type { Metadata, Viewport } from "next";
import { DirectionProvider } from "@/components/ui/direction";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const description =
  "اشتراک IPTV برای بیننده فارسی‌زبان با شبکه‌های فارسی، فیلم و سریال از جمله آثار ایرانی، و دسته‌های کودک، ورزش و سرگرمی. خرید در تلگرام.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nameFa} | اشتراک IPTV برای بیننده فارسی‌زبان`,
    template: `%s | ${site.nameFa}`,
  },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.nameFa,
    title: `${site.nameFa} | اشتراک IPTV برای بیننده فارسی‌زبان`,
    description,
    url: "/",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1727",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <body className="flex min-h-svh flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
        >
          رفتن به محتوا
        </a>
        <DirectionProvider direction="rtl">
          <SiteHeader />
          <main id="content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <SiteFooter />
        </DirectionProvider>
        <JsonLd />
      </body>
    </html>
  );
}
