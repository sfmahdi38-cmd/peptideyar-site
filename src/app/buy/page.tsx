import { BuyPanel } from "@/components/buy-panel";
import { BuySteps } from "@/components/buy-steps";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/buy",
  title: "خرید اشتراک",
  description: "خرید اشتراک آی‌پی‌تی‌وی یار با پیام در تلگرام شروع می‌شود و پس از هماهنگی فعال می‌شود.",
});

export default function BuyPage() {
  return (
    <>
      <section className="border-b border-border py-16 md:py-24">
        <Container className="flex flex-col gap-12">
          <PageIntro kicker="مسیر خرید" title="خرید اشتراک">
            <p>
              پرداخت و ثبت سفارش داخل این سایت نیست. خرید با پیام در تلگرام شروع می‌شود و پس از هماهنگی،
              اشتراک فعال می‌شود.
            </p>
          </PageIntro>
          <BuyPanel />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-medium">سه گام</h2>
          <div className="mt-10">
            <BuySteps />
          </div>
          <p className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            <TextLink href="/channels">شبکه‌ها و محتوا</TextLink>
            <TextLink href="/faq">پرسش‌ها</TextLink>
          </p>
        </Container>
      </section>
    </>
  );
}
