import { CompareTool } from "@/components/compare-tool";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";

export const metadata = pageMetadata({
  path: "/compare",
  title: "مقایسه",
  description: "مقایسهٔ شناسه و وضعیت دو نام شیمیایی، بدون برنامهٔ مصرف.",
});

export default function ComparePage() {
  return (
    <Suspense fallback={<p className="px-4 py-16 text-center text-sm">…</p>}>
      <CompareTool />
    </Suspense>
  );
}
