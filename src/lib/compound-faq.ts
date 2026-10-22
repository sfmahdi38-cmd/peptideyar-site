import { flagNote } from "@/lib/catalog/labels";
import type { Monograph } from "@/lib/catalog/monographs";
import type { Compound, Flag, LocaleText } from "@/lib/catalog/types";
import { site } from "@/lib/site";

export type FaqItem = { q: LocaleText; a: LocaleText };

const legalFlags: Flag[] = ["licensed-product", "not-authorised", "uk-class-c", "wada"];

/**
 * Questions people search for about a substance, answered only from the
 * entry's own data. Shown on the entry page and emitted as FAQPage data.
 */
export function compoundFaq(compound: Compound, monograph?: Monograph): FaqItem[] {
  const items: FaqItem[] = [
    {
      q: { fa: `${compound.name} (${compound.faName}) چیست؟`, en: `What is ${compound.name}?` },
      a: compound.summary,
    },
  ];

  if (monograph) {
    items.push({
      q: { fa: `${compound.faName} چطور کار می‌کند؟`, en: `How does ${compound.name} work?` },
      a: monograph.mechanism,
    });
  }

  const legal = legalFlags.filter((flag) => compound.flags.includes(flag)).map((flag) => flagNote[flag]);
  legal.push({
    fa: "وضعیت ثبت آن در ایران را باید از سازمان غذا و دارو پرسید.",
    en: "Its registration status in Iran has to be checked with the Iran Food and Drug Administration.",
  });
  items.push({
    q: { fa: `آیا ${compound.faName} داروی مجاز است؟`, en: `Is ${compound.name} an authorised medicine?` },
    a: join(legal),
  });

  items.push({
    q: { fa: `خرید ${compound.name}؛ آیا پپتیدیار آن را می‌فروشد؟`, en: `Buying ${compound.name}: does PeptideYar sell it?` },
    a: compound.flags.includes("severe-hazard")
      ? {
          fa: "نه. پپتیدیار هیچ ماده‌ای نمی‌فروشد و برای این ماده، به‌خاطر خطر شدیدش، به هیچ منبعی هم ارجاع نمی‌دهد.",
          en: "No. PeptideYar sells nothing, and because of its severe hazard it does not refer anyone to a source for this substance.",
        }
      : {
          fa: `نه. پپتیدیار فروشنده نیست و قیمت یا لینک خرید ندارد. برای راهنمایی و معرفی داروخانه یا مرکز مجاز، در تلگرام ${site.telegramHandle} پیام بدهید.`,
          en: `No. PeptideYar is not a seller and has no prices or shop links. For guidance and a referral to a licensed pharmacy or centre, message ${site.telegramHandle} on Telegram.`,
        },
  });

  return items;
}

function join(parts: LocaleText[]): LocaleText {
  return { fa: parts.map((part) => part.fa).join(" "), en: parts.map((part) => part.en).join(" ") };
}
