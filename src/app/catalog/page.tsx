import { CatalogBrowser } from "@/components/catalog-browser";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";

export const metadata = pageMetadata({
  path: "/catalog",
  title: "کاتالوگ",
  description: "جستجو در نام‌های پپتید، قرص، روغن تزریقی و پودر خام. هر نام یک بار، بدون قیمت.",
});

export default function CatalogPage() {
  return (
    <Suspense fallback={<p className="px-4 py-16 text-center text-sm">…</p>}>
      <CatalogBrowser />
    </Suspense>
  );
}
