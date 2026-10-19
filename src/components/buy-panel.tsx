import { BuyCta } from "@/components/buy-cta";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { telegramUrl } from "@/lib/site";

export function BuyPanel() {
  const ready = telegramUrl() !== null;

  return (
    <Card className="max-w-2xl text-base">
      <CardHeader>
        <p className="text-sm text-peach">{ready ? "تلگرام" : "وضعیت خرید"}</p>
        <h2 className="text-3xl leading-tight font-medium text-foreground">
          {ready ? "خرید در تلگرام" : "تلگرام"}
        </h2>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-6">
        <p className="max-w-xl leading-8 text-muted-foreground">
          {ready
            ? "پیام را در تلگرام بفرستید. پس از هماهنگی، اشتراک فعال می‌شود."
            : "آیدی تلگرام هنوز روی سایت قرار نگرفته است. تا آن زمان دکمهٔ خرید لینک ندارد."}
        </p>
        <BuyCta />
      </CardContent>
    </Card>
  );
}
