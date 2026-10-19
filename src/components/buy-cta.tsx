import { buttonVariants } from "@/components/ui/button";
import { telegramUrl } from "@/lib/site";
import { cn } from "cn";

export function BuyCta({ className }: { className?: string }) {
  const href = telegramUrl();
  const classNames = cn(buttonVariants({ size: "lg" }), "h-11 px-6 text-base", className);

  if (!href) {
    return null;
  }

  return (
    <a href={href} className={classNames} rel="noopener noreferrer" target="_blank">
      خرید در تلگرام
    </a>
  );
}
