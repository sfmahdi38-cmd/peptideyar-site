import { HomeView } from "@/components/home-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  title: "خانه",
  description:
    "دانشنامهٔ آموزشی پپتیدیار برای پپتید، قرص، روغن تزریقی و پودر خام. بدون فروش و بدون راهنمای مصرف.",
});

export default function HomePage() {
  return <HomeView />;
}
