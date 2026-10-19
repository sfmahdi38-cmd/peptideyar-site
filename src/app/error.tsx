"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <h1 className="text-4xl font-medium">باز کردن این صفحه ممکن نشد</h1>
        <p className="mt-4 max-w-xl leading-8 text-muted-foreground">یک بار دیگر تلاش کنید.</p>
        <Button type="button" className="mt-8 h-11 px-5" onClick={() => reset()}>
          تلاش دوباره
        </Button>
      </div>
    </section>
  );
}
