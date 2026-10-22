import { AcademyView } from "@/components/academy-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/academy",
  title: "آکادمی",
  description: "درس کوتاه دربارهٔ پپتید، خلوص، تفاوت قلم کالا با ماده، و مرز داروی مجاز.",
});

export default function AcademyPage() {
  return <AcademyView />;
}
