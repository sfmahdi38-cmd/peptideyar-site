import { site } from "@/lib/site";

export function JsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            name: site.name,
            alternateName: site.nameFa,
            url: site.url,
            inLanguage: ["fa", "en"],
            description: "Educational research encyclopedia of peptide, oral, oil, and bulk-powder names. No sales.",
            publisher: { "@id": `${site.url}/#organization` },
          },
          {
            "@type": "Organization",
            "@id": `${site.url}/#organization`,
            name: site.name,
            alternateName: site.nameFa,
            url: site.url,
            logo: `${site.url}/icon.svg`,
            sameAs: [site.telegram],
          },
        ],
      }}
    />
  );
}

export function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
