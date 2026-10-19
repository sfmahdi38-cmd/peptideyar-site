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

function HomeHeading({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="home-kicker">{kicker}</p>
      <h2 className="mt-5 text-3xl leading-tight font-medium text-balance sm:text-[2.6rem]">{title}</h2>
      {children ? <div className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">{children}</div> : null}
    </div>
  );
}

export default function HomePage() {
  const faqs = getFaqs().filter((item) => homeFaqIds.includes(item.id as (typeof homeFaqIds)[number]));

  return (
    <>
      <section className="home-hero overflow-hidden border-b border-border">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-16 lg:py-24">
          <div className="max-w-xl">
            <p className="home-kicker">آی‌پی‌تی‌وی یار</p>
            <h1 className="mt-6 text-[2.7rem] leading-[1.18] font-medium text-balance sm:text-6xl lg:text-[4.15rem] lg:leading-[1.12]">
              تماشای <span className="text-peach">فارسی</span>، در یک اشتراک
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-9 text-muted-foreground sm:text-xl">
              یک اشتراک برای بیننده فارسی‌زبان: شبکه‌های فارسی، فیلم و سریال از جمله آثار ایرانی، و
              دسته‌های کودک، ورزش و سرگرمی.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <BuyCta className="shadow-[0_0_32px_rgb(157_221_229/0.28)] sm:w-auto" />
              <Link
                href="/channels"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 border-cyan/40 bg-transparent px-6 text-base hover:bg-cyan/10",
                )}
              >
                دسته‌های محتوا
              </Link>
            </div>
          </div>
          <figure className="promo-stage home-poster">
            <Image
              src="/images/iptvyar-promo.png"
              alt="پوستر معرفی آی‌پی‌تی‌وی یار، تماشای خانوادگی در اتاق تاریک"
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="h-auto w-full rounded-[1.2rem]"
            />
            <figcaption className="sr-only">پوستر معرفی آی‌پی‌تی‌وی یار</figcaption>
          </figure>
          <ul className="home-notes text-sm leading-7 text-muted-foreground lg:col-span-2">
            <li>
              <span className="home-note-label">خرید</span>
              پیام و هماهنگی در تلگرام
            </li>
            <li>
              <span className="home-note-label">محتوا</span>
              فارسی، فیلم، کودک، ورزش و سرگرمی
            </li>
            <li>
              <span className="home-note-label">فهرست</span>
              نام شبکه‌ها جدا در تلگرام فرستاده می‌شود
            </li>
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="home-screen">
            <HomeHeading kicker="دسته‌های استریم" title="پلتفرم‌ها و استریم‌های محبوب">
              این نام‌ها جنس تماشا را می‌گویند. فهرست کانال جدا است و در تلگرام فرستاده می‌شود.
            </HomeHeading>
            <div className="mt-10">
              <StreamerGrid />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-[#0d1b2c]/55 py-16 md:py-24">
        <Container>
          <HomeHeading kicker="اشتراک" title="داخل اشتراک">
            چهار دسته. فهرست روز جدا است و در تلگرام فرستاده می‌شود.
          </HomeHeading>
          <div className="mt-10">
            <CategoryGrid />
          </div>
          <p className="mt-8">
            <TextLink href="/channels">شبکه‌ها و محتوا</TextLink>
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <HomeHeading kicker="مسیر" title="از پیام تا فعال‌سازی">
            خرید روی سایت انجام نمی‌شود. مسیر، یک گفت‌وگو در تلگرام است.
          </HomeHeading>
          <div className="mt-10">
            <BuySteps />
          </div>
          <p className="mt-8">
            <TextLink href="/buy">صفحهٔ خرید</TextLink>
          </p>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <div>
            <HomeHeading kicker="پرسش‌ها" title="چند پرسش کوتاه">
              اگر جواب اینجا نبود، در تلگرام بپرسید.
            </HomeHeading>
            <p className="mt-6">
              <TextLink href="/faq">همهٔ پرسش‌ها</TextLink>
            </p>
          </div>
          <FaqList items={faqs} />
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="home-close">
            <p className="home-kicker">تلگرام</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-tight font-medium text-balance sm:text-5xl">
              وقتی آماده بودید، از تلگرام شروع کنید
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              پیام، هماهنگی، سپس فعال‌سازی. پرداخت داخل این سایت نیست.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <BuyCta className="shadow-[0_0_32px_rgb(157_221_229/0.28)] sm:w-auto" />
              <TextLink href="/about">دربارهٔ آی‌پی‌تی‌وی یار</TextLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
