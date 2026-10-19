import Link from "next/link";
import { cn } from "cn";

export function TextLink({
  href,
  children,
  className,
}: {
  href: "/" | "/channels" | "/buy" | "/faq" | "/about";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-cyan underline decoration-cyan/40 underline-offset-4 hover:decoration-cyan",
        className,
      )}
    >
      {children}
    </Link>
  );
}
