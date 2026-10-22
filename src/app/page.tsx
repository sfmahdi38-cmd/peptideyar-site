import { HomeView } from "@/components/home-view";
import { articleSummaries } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  title: "خانه",
  description:
    "پپتیدیار، دانشنامه و راهنمای فارسی پپتید: پپتید چیست، مکانیسم و مطالعات هر ماده با منبع PubMed، وضعیت قانونی و راهنمای خرید آگاهانه. آموزشی و بدون فروش.",
});

export default function HomePage() {
  return <HomeView latest={articleSummaries(3)} />;
}
