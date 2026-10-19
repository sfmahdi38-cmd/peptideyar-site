import { BuyCta } from "@/components/buy-cta";
import { CategoryGrid } from "@/components/category-grid";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { StreamerGrid } from "@/components/streamer-grid";
import { TextLink } from "@/components/text-link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/channels",
  title: "شبکه‌ها و محتوا",
  description:
    "دسته‌های فیلم و سریال، کودک، ورزش و سرگرمی در اشتراک آی‌پی‌تی‌وی یار. فهرست جاری از راه تلگرام فرستاده می‌شود.",
});

export default function ChannelsPage() {
  return (
    <>
      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <PageIntro kicker="محتوا" title="شبکه‌ها و محتوا">
            <p>
              اشتراک برای بیننده فارسی‌زبان چیده شده است. شبکه‌های فارسی اینجاست، همراه فیلم و سریال از
              جمله آثار ایرانی. پایین، چهار دسته را جدا نوشته‌ایم.
            </p>
          </PageIntro>
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <Container>
          <h2 className="text-3xl font-medium">دسته‌های استریم</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            همان نام‌هایی که در خانه دیدید: فیلم، سریال، ورزش، کودک، شبکهٔ فارسی و سرگرمی. این‌ها توصیف
            جنس تماشا هستند.
          </p>
          <div className="mt-8">
            <StreamerGrid />
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-medium">دسته‌ها</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            دسته‌ها اینجاست. فهرست روز، با نام شبکه‌ها، در تلگرام فرستاده می‌شود.
          </p>
          <div className="mt-10">
            <CategoryGrid detailed />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Card className="max-w-2xl text-base">
            <CardHeader>
              <h2 className="text-3xl font-medium text-foreground">فهرست جاری</h2>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-6">
              <p className="max-w-xl leading-8 text-muted-foreground">
                فهرست شبکه‌ها را اینجا ثابت نمی‌کنیم. فهرست جاری را پس از پیام، در تلگرام می‌فرستیم.
              </p>
              <BuyCta />
              <p>
                <TextLink href="/buy">رفتن به خرید</TextLink>
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
