import Link from "next/link";
import { Container } from "@/components/container";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-cyan/20 bg-[#0b1727]">
      <Container className="grid gap-10 py-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="max-w-md">
          <p className="text-lg font-medium">{site.nameFa}</p>
          <p className="mt-3 leading-8 text-muted-foreground">
            اشتراک IPTV برای بیننده فارسی‌زبان. خرید و فهرست جاری در تلگرام.
          </p>
        </div>
        <nav aria-label="پاورقی">
          <ul className="grid grid-cols-2 gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="pb-8">
        <p className="text-sm text-muted-foreground" lang="en">
          {site.domain}
        </p>
      </Container>
    </footer>
  );
}
