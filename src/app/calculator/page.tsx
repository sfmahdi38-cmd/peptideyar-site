import { CalculatorTool } from "@/components/calculator-tool";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/calculator",
  title: "محاسبهٔ غلظت",
  description: "تبدیل جرم و حجم یک نمونهٔ آزمایشگاهی به غلظت. مقدار پیشنهادی برای مصرف نیست.",
});

export default function CalculatorPage() {
  return <CalculatorTool />;
}
