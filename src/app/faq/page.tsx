import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/text-link";
import { getFaqs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/faq",
  title: "پرسش‌ها",
  description: "پاسخ کوتاه دربارهٔ اشتراک آی‌پی‌تی‌وی یار، دسته‌های محتوا، قیمت و مسیر خرید در تلگرام.",
});

export default function FaqPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <PageIntro kicker="پاسخ کوتاه" title="پرسش‌ها">
          <p>چند سؤال که پیش از خرید پیش می‌آید. اگر جواب اینجا نبود، در تلگرام بپرسید.</p>
        </PageIntro>
        <h2 className="mt-14 text-2xl font-medium">پاسخ‌ها</h2>
        <div className="mt-6">
          <FaqList items={getFaqs()} />
        </div>
        <p className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          <TextLink href="/buy">خرید اشتراک</TextLink>
          <TextLink href="/channels">شبکه‌ها و محتوا</TextLink>
        </p>
      </Container>
    </section>
  );
}
