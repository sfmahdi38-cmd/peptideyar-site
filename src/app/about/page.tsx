import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/about",
  title: "درباره",
  description: "آی‌پی‌تی‌وی یار برند اشتراک IPTV برای بیننده فارسی‌زبان است. دامنهٔ سایت iptvyar.com است.",
});

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col gap-14">
        <PageIntro kicker="برند" title="درباره آی‌پی‌تی‌وی یار">
          <p>
            آی‌پی‌تی‌وی یار نام فارسی برند است و{" "}
            <span lang="en">{site.name}</span> صورت لاتین آن. این سایت اشتراک IPTV را برای بیننده
            فارسی‌زبان معرفی می‌کند. دامنه{" "}
            <span lang="en">{site.domain}</span> است.
          </p>
        </PageIntro>

        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium">موضوع اشتراک</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            شبکه‌های فارسی، فیلم و سریال از جمله آثار ایرانی، و دسته‌های کودک، ورزش و سرگرمی. فهرست جاری
            را در تلگرام می‌فرستیم.
          </p>
          <p className="mt-4">
            <TextLink href="/channels">شبکه‌ها و محتوا</TextLink>
          </p>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium">خرید</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            مسیر خرید ساده است: پیام در تلگرام، سپس فعال‌سازی. پرداخت داخل این سایت انجام نمی‌شود.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            <TextLink href="/buy">خرید اشتراک</TextLink>
            <TextLink href="/faq">پرسش‌ها</TextLink>
          </p>
        </div>
      </Container>
    </section>
  );
}
