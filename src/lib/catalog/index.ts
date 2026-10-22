import { oils, rawOnly } from "./oils";
import { orals } from "./orals";
import { peptides } from "./peptides";
import type { Compound, CompoundInput, Section } from "./types";

function allowsBulk(item: CompoundInput): boolean {
  if (item.section === "raw") return false;
  if (item.bulk === false) return false;
  if (item.sameAs) return false;
  if (item.flags.includes("blend") || item.flags.includes("solvent")) return false;
  if (item.flags.includes("severe-hazard")) return false;
  return true;
}

function rawGroup(item: CompoundInput): string {
  if (item.group === "androgen") return "androgen-powder";
  if (item.group === "sarm") return "sarm-powder";
  if (item.section === "peptide") return "peptide-powder";
  return "other-powder";
}

function toRaw(item: CompoundInput): Compound {
  return {
    slug: `raw-${item.slug}`,
    name: item.name,
    faName: `پودر ${item.faName}`,
    aliases: [...(item.aliases ?? []), "raw powder", "bulk", "پودر خام"],
    section: "raw",
    group: rawGroup(item),
    cas: item.cas,
    formula: item.formula,
    mw: item.mw,
    flags: item.flags,
    summary: {
      fa: `شکل پودر خام ${item.faName}. ${item.summary.fa} این مدخل فقط نام مادهٔ فله را ثبت می‌کند و روش ساخت، خالص‌سازی یا تبدیل آن به فراورده را شرح نمی‌دهد.`,
      en: `Bulk powder of ${item.name}. ${item.summary.en} This entry only records the bulk material. It does not describe synthesis, purification, or how to turn it into a finished product.`,
    },
    caution: item.caution,
    related: item.slug,
  };
}

function finish(item: CompoundInput): Compound {
  return {
    slug: item.slug,
    name: item.name,
    faName: item.faName,
    aliases: item.aliases ?? [],
    section: item.section,
    group: item.group,
    cas: item.cas,
    formula: item.formula,
    mw: item.mw,
    flags: item.flags,
    summary: item.summary,
    caution: item.caution,
    related: item.related,
    sameAs: item.sameAs,
  };
}

const primary = [...peptides, ...orals, ...oils];
const generatedRaw = primary.filter(allowsBulk).map(toRaw);

export const compounds: Compound[] = [...primary.map(finish), ...generatedRaw, ...rawOnly.map(finish)];

const bySlug = new Map<string, Compound>();
for (const compound of compounds) {
  if (bySlug.has(compound.slug)) {
    throw new Error(`Duplicate catalog slug: ${compound.slug}`);
  }
  bySlug.set(compound.slug, compound);
}

for (const item of primary) {
  if (item.sameAs && !bySlug.has(item.sameAs)) {
    throw new Error(`Missing sameAs target ${item.sameAs} for ${item.slug}`);
  }
}

export function getCompound(slug: string): Compound | undefined {
  return bySlug.get(slug);
}

export function compoundsBySection(section: Section): Compound[] {
  return compounds.filter((item) => item.section === section);
}

export function sectionCounts(): Record<Section, number> {
  return {
    peptide: compoundsBySection("peptide").length,
    oral: compoundsBySection("oral").length,
    oil: compoundsBySection("oil").length,
    raw: compoundsBySection("raw").length,
  };
}

const sectionOrder: Section[] = ["peptide", "oral", "oil", "raw"];

export function relatedCompounds(compound: Compound, limit = 4): Compound[] {
  return compounds
    .filter(
      (item) =>
        item.slug !== compound.slug &&
        item.section === compound.section &&
        item.group === compound.group,
    )
    .slice(0, limit);
}

export function rawSibling(compound: Compound): Compound | undefined {
  if (compound.section === "raw") return undefined;
  return bySlug.get(`raw-${compound.slug}`);
}

export function parentCompound(compound: Compound): Compound | undefined {
  if (!compound.related) return undefined;
  return bySlug.get(compound.related);
}

export function searchCompounds(query: string, section: Section | "all", group: string | "all"): Compound[] {
  const needle = normalize(query);
  return compounds.filter((item) => {
    if (section !== "all" && item.section !== section) return false;
    if (group !== "all" && item.group !== group) return false;
    if (!needle) return true;
    const hay = normalize(
      [item.name, item.faName, item.slug, item.cas, item.formula, item.group, item.summary.fa, item.summary.en, ...item.aliases].join(" "),
    );
    return hay.includes(needle);
  });
}

export function groupsFor(section: Section | "all"): string[] {
  const pool = section === "all" ? compounds : compounds.filter((item) => item.section === section);
  return [...new Set(pool.map((item) => item.group))];
}

export function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[ي]/g, "ی")
    .replace(/[ك]/g, "ک")
    .replace(/[أإآ]/g, "ا")
    .replace(/\s+/g, " ")
    .trim();
}

export const catalogSections = sectionOrder;

export const featuredSlugs = [
  "bpc-157",
  "tb-500",
  "ghk-cu",
  "epitalon",
  "semax",
  "selank",
  "ipamorelin",
  "cjc-1295",
] as const;
