import { JsonLdScript } from "@/components/json-ld";
import { SafetyView } from "@/components/safety-view";
import { safetyQuestions } from "@/lib/safety-faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/safety",
  title: "ایمنی",
  description: "حدود دانشنامهٔ پپتیدیار: بدون فروش، بدون دوز، و بدون راهنمای تهیه.",
});

export default function SafetyPage() {
  return (
    <>
      <SafetyView />
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "fa",
          mainEntity: safetyQuestions.map((item) => ({
            "@type": "Question",
            name: item.faQ,
            acceptedAnswer: { "@type": "Answer", text: item.faA },
          })),
        }}
      />
    </>
  );
}
