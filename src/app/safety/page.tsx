import { SafetyView } from "@/components/safety-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/safety",
  title: "ایمنی",
  description: "حدود دانشنامهٔ پپتیدیار: بدون فروش، بدون دوز، و بدون راهنمای تهیه.",
});

export default function SafetyPage() {
  return <SafetyView />;
}
