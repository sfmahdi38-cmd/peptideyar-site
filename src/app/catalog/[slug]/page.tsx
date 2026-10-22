import { CompoundView } from "@/components/compound-view";
import { JsonLdScript } from "@/components/json-ld";
import { compounds, getCompound } from "@/lib/catalog";
import type { Compound } from "@/lib/catalog/types";
import { monographs, monographsReviewed } from "@/lib/catalog/monographs";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return compounds.map((compound) => ({ slug: compound.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const compound = getCompound(slug);
  if (!compound) return {};
  return pageMetadata({
    path: `/catalog/${compound.slug}`,
    title: compound.name,
    description: compound.summary.fa,
  });
}

export default async function CompoundPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const compound = getCompound(slug);
  if (!compound) notFound();
  return (
    <>
      <CompoundView slug={slug} />
      <JsonLdScript data={structuredData(compound)} />
    </>
  );
}

function structuredData(compound: Compound) {
  const url = `${site.url}/catalog/${compound.slug}`;
  const monograph = monographs[compound.slug];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.nameFa, item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "کاتالوگ", item: `${site.url}/catalog` },
          { "@type": "ListItem", position: 3, name: compound.name, item: url },
        ],
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `${compound.name} | ${site.nameFa}`,
        description: compound.summary.fa,
        inLanguage: "fa",
        isPartOf: { "@id": `${site.url}/#website` },
        about: {
          "@type": "MolecularEntity",
          name: compound.name,
          alternateName: [compound.faName, ...compound.aliases],
          ...(compound.cas ? { identifier: `CAS ${compound.cas}` } : {}),
          ...(compound.formula ? { molecularFormula: compound.formula } : {}),
          ...(compound.mw ? { molecularWeight: compound.mw } : {}),
        },
        ...(monograph && monograph.literature.length > 0
          ? {
              lastReviewed: monographsReviewed,
              citation: monograph.literature.map((paper) => ({
                "@type": "ScholarlyArticle",
                name: paper.title,
                datePublished: paper.year,
                isPartOf: { "@type": "Periodical", name: paper.journal },
                sameAs: [`https://pubmed.ncbi.nlm.nih.gov/${paper.pmid}/`, `https://doi.org/${paper.doi}`],
              })),
            }
          : {}),
      },
    ],
  };
}
