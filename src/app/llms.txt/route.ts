import { getArticles } from "@/lib/articles";
import { compounds } from "@/lib/catalog";
import { monographs } from "@/lib/catalog/monographs";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/** A plain-text map of the site for AI assistants and answer engines (llmstxt.org). */
export function GET() {
  const withMonograph = compounds.filter((item) => monographs[item.slug]);
  const lines = [
    `# ${site.name} (${site.nameFa})`,
    "",
    "> Persian and English educational encyclopedia of peptides and related research compounds. It sells nothing, lists no prices, and gives no doses. Every paper on a monograph page has a PubMed ID and DOI checked against PubMed. Legal status is given for the UK/EU, with a note to check Iran FDA registration.",
    "",
    `Contact and referrals to licensed pharmacies: ${site.telegram}`,
    "",
    "## Guides (Persian, updated daily)",
    "",
    ...getArticles().map((article) => `- [${article.title}](${site.url}/articles/${article.slug}): ${article.description}`),
    "",
    "## Full monographs",
    "",
    ...withMonograph.map((item) => `- [${item.name} (${item.faName})](${site.url}/catalog/${item.slug}): ${item.summary.en}`),
    "",
    "## Other pages",
    "",
    `- [Catalog of all ${compounds.length} entries](${site.url}/catalog)`,
    `- [Safety and limits](${site.url}/safety)`,
    `- [Academy](${site.url}/academy)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
