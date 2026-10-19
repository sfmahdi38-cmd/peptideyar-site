"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn } from "cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-cyan/25 bg-[#0b1727]/88 shadow-[0_12px_40px_rgb(0_0_0/0.28)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3 rounded-md">
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-md border border-cyan/50 bg-card"
          >
            <span className="h-0.5 w-3.5 rounded-full bg-peach" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-medium">{site.nameFa}</span>
            <span className="block text-xs text-muted-foreground" lang="en">
              {site.name}
            </span>
          </span>
        </Link>

        <nav aria-label="اصلی" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-11 items-center text-base",
                      active
                        ? "text-foreground underline decoration-peach decoration-2 underline-offset-8"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button
          type="button"
          className="h-11 px-4 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "بستن" : "منو"}
        </Button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="موبایل"
        className={cn("border-t border-border lg:hidden", !open && "hidden")}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col px-3 py-2">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-12 items-center rounded-md px-2 text-lg",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
