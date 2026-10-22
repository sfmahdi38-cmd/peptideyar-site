export type LocaleText = { fa: string; en: string };

export type Section = "peptide" | "oral" | "oil" | "raw";

export type Flag =
  | "research-only"
  | "not-authorised"
  | "licensed-product"
  | "uk-class-c"
  | "severe-hazard"
  | "high-risk"
  | "teratogen"
  | "hepatotoxic"
  | "wada"
  | "blend"
  | "solvent";

export type Compound = {
  slug: string;
  name: string;
  faName: string;
  aliases: string[];
  section: Section;
  group: string;
  cas?: string;
  formula?: string;
  mw?: string;
  flags: Flag[];
  summary: LocaleText;
  caution?: LocaleText;
  related?: string;
  sameAs?: string;
};

export type CompoundInput = Omit<Compound, "aliases" | "related"> & {
  aliases?: string[];
  related?: string;
  /** When false, no bulk-powder card is generated. */
  bulk?: boolean;
  /** Canonical compound that already covers the bulk powder. */
  sameAs?: string;
};

export function entry(
  section: Section,
  data: {
    slug: string;
    name: string;
    faName: string;
    aliases?: string[];
    group: string;
    cas?: string;
    formula?: string;
    mw?: string;
    flags?: Flag[];
    bulk?: boolean;
    sameAs?: string;
    related?: string;
    fa: string;
    en: string;
    cautionFa?: string;
    cautionEn?: string;
  },
): CompoundInput {
  const { fa, en, cautionFa, cautionEn, flags, aliases, ...rest } = data;
  return {
    ...rest,
    section,
    aliases: aliases ?? [],
    flags: flags ?? [],
    summary: { fa, en },
    caution: cautionFa && cautionEn ? { fa: cautionFa, en: cautionEn } : undefined,
  };
}
