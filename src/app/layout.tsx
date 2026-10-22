import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/json-ld";
import { LanguageProvider } from "@/components/language";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ogImage } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const description =
  "دانشنامهٔ آموزشی پپتیدیار: شناسنامهٔ پپتیدها، قرص‌ها، روغن‌های تزریقی و پودرهای خام. بدون فروش، بدون قیمت و بدون راهنمای مصرف انسانی.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nameFa} | دانشنامهٔ پژوهشی پپتید`,
    template: `%s | ${site.nameFa}`,
  },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.nameFa,
    title: `${site.nameFa} | دانشنامهٔ پژوهشی پپتید`,
    description,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nameFa} | دانشنامهٔ پژوهشی پپتید`,
    description,
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#042f2e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-svh flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-teal-700 focus:px-4 focus:py-3 focus:text-white"
        >
          رفتن به محتوا
        </a>
        <LanguageProvider>
          <SiteHeader />
          <main id="content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <SiteFooter />
        </LanguageProvider>
        <JsonLd />
      </body>
    </html>
  );
}
