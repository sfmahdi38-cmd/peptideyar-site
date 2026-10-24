import { site } from "@/lib/site";
import { Send } from "lucide-react";

export function TelegramCta({ title, body, button }: { title: string; body: string; button: string }) {
  return (
    <aside className="mt-10 flex flex-col gap-4 rounded-2xl border border-teal-200 bg-teal-50 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-teal-900 dark:bg-teal-950/40">
      <div>
        <h2 className="font-black text-teal-900 dark:text-teal-100">{title}</h2>
        <p className="mt-1 text-sm leading-7 text-teal-900/80 dark:text-teal-100/80">{body}</p>
      </div>
      <div className="flex shrink-0 flex-col gap-2">
        {site.telegrams.map((item) => (
          <a
            key={item.handle}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 text-sm font-bold text-white hover:bg-teal-600"
          >
            <Send className="size-4" aria-hidden />
            <bdi dir="ltr">{item.handle}</bdi>
          </a>
        ))}
        <span className="sr-only">{button}</span>
      </div>
    </aside>
  );
}
