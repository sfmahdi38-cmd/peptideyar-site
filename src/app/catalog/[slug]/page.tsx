import { CompoundView } from "@/components/compound-view";
import { compounds, getCompound } from "@/lib/catalog";
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
  return {
    title: compound.name,
    description: compound.summary.fa,
    alternates: { canonical: `/catalog/${compound.slug}` },
  };
}

export default async function CompoundPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getCompound(slug)) notFound();
  return <CompoundView slug={slug} />;
}
