export function formatDate(iso: string, lang: "fa" | "en" = "fa"): string {
  return new Intl.DateTimeFormat(lang === "fa" ? "fa-IR" : "en-GB", { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso));
}
