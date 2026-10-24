export const telegrams = [
  { name: "PeptideHa", nameFa: "پپتیدها", handle: "@peptideha", url: "https://t.me/peptideha" },
  { name: "PeptideYar", nameFa: "پپتیدیار", handle: "@peptideyar", url: "https://t.me/peptideyar" },
] as const;

export const site = {
  name: "PeptideHa",
  nameFa: "پپتیدها",
  url: "https://peptideha.com",
  locale: "fa_IR",
  telegram: telegrams[0].url,
  telegramHandle: telegrams.map((item) => item.handle).join(" و "),
  telegrams,
} as const;
