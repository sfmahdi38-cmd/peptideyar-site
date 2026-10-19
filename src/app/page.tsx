import { BuyCta } from "@/components/buy-cta";
import { BuySteps } from "@/components/buy-steps";
import { CategoryGrid } from "@/components/category-grid";
import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { StreamerGrid } from "@/components/streamer-grid";
import { TextLink } from "@/components/text-link";
import { buttonVariants } from "@/components/ui/button";
import { getFaqs, homeFaqIds } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  path: "/",
  title: "خانه",
  description:
    "اشتراک IPTV برای بیننده فارسی‌زبان با شبکه‌های فارسی، فیلم و سریال از جمله آثار ایرانی، و دسته‌های کودک، ورزش و سرگرمی. خرید در تلگرام.",
});

export default function HomePage() {
  const faqs = getFaqs().filter((item) => homeFaqIds.includes(item.id as (typeof homeFaqIds)[number]));

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:py-20">
          <div className="max-w-xl">
            <p className="text-sm text-peach">آی‌پی‌تی‌وی یار</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.22] font-medium text-balance sm:text-6xl">
              تماشای فارسی، در یک اشتراک
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              اشتراک IPTV برای بیننده فارسی‌زبان. شبکه‌های فارسی، سریال و فیلم از جمله آثار ایرانی، و
              دسته‌هایی مثل فیلم و سریال، کودک، ورزش و سرگرمی.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <BuyCta className="sm:w-auto" />
              <Link
                href="/channels"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6 text-base")}
              >
                دسته‌های محتوا
              </Link>
            </div>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              خرید با پیام در تلگرام شروع می‌شود و پس از هماهنگی، اشتراک فعال می‌شود.
            </p>
          </div>
          <figure className="promo-stage">
            <Image
              src="/images/iptvyar-promo.png"
              alt="پوستر معرفی آی‌پی‌تی‌وی یار، تماشای خانوادگی در اتاق تاریک"
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="h-auto w-full rounded-[1.2rem]"
            />
            <figcaption className="px-2 pt-3 pb-1 text-sm text-muted-foreground">پوستر معرفی</figcaption>
          </figure>
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm text-cyan">دسته‌های استریم</p>
            <h2 className="mt-3 text-3xl font-medium sm:text-4xl">پلتفرم‌ها و استریم‌های محبوب</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              این نام‌ها جنس تماشا را می‌گویند. فهرست کانال جدا است و در تلگرام فرستاده می‌شود.
            </p>
          </div>
          <div className="mt-10">
            <StreamerGrid />
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium sm:text-4xl">داخل اشتراک</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              چهار دسته. فهرست روز جدا است و در تلگرام فرستاده می‌شود.
            </p>
          </div>
          <div className="mt-10">
            <CategoryGrid />
          </div>
          <p className="mt-8">
            <TextLink href="/channels">شبکه‌ها و محتوا</TextLink>
          </p>
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium sm:text-4xl">از پیام تا فعال‌سازی</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              خرید روی سایت انجام نمی‌شود. مسیر، یک گفت‌وگو در تلگرام است.
            </p>
          </div>
          <div className="mt-10">
            <BuySteps />
          </div>
          <p className="mt-10">
            <TextLink href="/buy">صفحهٔ خرید</TextLink>
          </p>
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-medium sm:text-4xl">چند پرسش کوتاه</h2>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
          <p className="mt-8">
            <TextLink href="/faq">همهٔ پرسش‌ها</TextLink>
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-28">
        <Container>
          <p className="text-sm text-peach">تلگرام</p>
          <h2 className="mt-3 max-w-3xl text-4xl leading-tight font-medium text-balance sm:text-5xl">
            وقتی آماده بودید، از تلگرام شروع کنید
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            پیام، هماهنگی، سپس فعال‌سازی. پرداخت داخل این سایت نیست.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <BuyCta />
            <TextLink href="/about">دربارهٔ آی‌پی‌تی‌وی یار</TextLink>
          </div>
        </Container>
      </section>
    </>
  );
}
