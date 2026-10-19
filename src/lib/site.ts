export const site = {
  name: "IPTVYAR",
  nameFa: "آی‌پی‌تی‌وی یار",
  domain: "iptvyar.com",
  url: "https://iptvyar.com",
  locale: "fa_IR",
  /**
   * Username only, without @.
   * A valid value becomes https://t.me/USERNAME
   */
  telegramUsername: "iptvyar",
} as const;

/** Text-only stream labels. No logos and no third-party marks. */
export const streamerNames = [
  "استریم فیلم",
  "سریال",
  "ورزش زنده",
  "کودک و خانواده",
  "شبکه‌های فارسی",
  "پلتفرم‌های داخلی",
  "سرگرمی",
  "مستند",
] as const;

export const nav = [
  { href: "/", label: "خانه" },
  { href: "/channels", label: "شبکه‌ها" },
  { href: "/buy", label: "خرید" },
  { href: "/faq", label: "پرسش‌ها" },
  { href: "/about", label: "درباره" },
] as const;

const TELEGRAM_USERNAME = /^[A-Za-z][A-Za-z0-9_]{3,31}$/;

export function telegramUrl(username: string = site.telegramUsername): string | null {
  const id = username.trim().replace(/^@/, "");
  if (!TELEGRAM_USERNAME.test(id)) {
    return null;
  }
  return `https://t.me/${id}`;
}
