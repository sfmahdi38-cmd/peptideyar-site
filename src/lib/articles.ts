import fs from "node:fs";
import path from "node:path";
import { getCompound } from "@/lib/catalog";
import { marked, type Tokens } from "marked";

export type ArticleFaq = { q: string; a: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category?: string;
  keywords: string[];
  related: string[];
  html: string;
  faq: ArticleFaq[];
  readingMinutes: number;
};

export type ArticleSummary = Pick<Article, "slug" | "title" | "description" | "date" | "category" | "readingMinutes">;

const dir = path.join(process.cwd(), "content", "articles");
const faqHeading = "سؤال‌های رایج";

let cache: Article[] | null = null;

/** Articles are Markdown files in content/articles. Files starting with "_" are templates and are skipped. */
export function getArticles(): Article[] {
  if (cache) return cache;
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((file) => file.endsWith(".md") && !file.startsWith("_")) : [];
  cache = files
    .map((file) => parseArticle(file.replace(/\.md$/, ""), fs.readFileSync(path.join(dir, file), "utf8")))
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  return cache;
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((article) => article.slug === slug);
}

export function articleSummaries(limit?: number): ArticleSummary[] {
  return getArticles()
    .slice(0, limit)
    .map(({ slug, title, description, date, category, readingMinutes }) => ({ slug, title, description, date, category, readingMinutes }));
}

function parseArticle(slug: string, source: string): Article {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Article ${slug} has no frontmatter`);
  const meta = parseFrontmatter(match[1]);
  const body = match[2].trim();

  for (const key of ["title", "description", "date"]) {
    if (!meta[key]) throw new Error(`Article ${slug} is missing "${key}"`);
  }
  for (const key of ["date", "updated"]) {
    if (meta[key] && !/^\d{4}-\d{2}-\d{2}$/.test(meta[key])) throw new Error(`Article ${slug} has a bad ${key}: ${meta[key]}`);
  }
  const related = list(meta.related);
  for (const item of related) {
    if (!getCompound(item)) throw new Error(`Article ${slug} links to unknown catalog entry "${item}"`);
  }

  const tokens = marked.lexer(body);
  return {
    slug,
    title: meta.title,
    description: meta.description,
    date: meta.date,
    updated: meta.updated || undefined,
    category: meta.category || undefined,
    keywords: list(meta.keywords),
    related,
    html: externalLinks(marked.parser(tokens)),
    faq: extractFaq(tokens),
    readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 200)),
  };
}

function parseFrontmatter(block: string): Record<string, string> {
  const meta: Record<string, string> = {};
  for (const line of block.split("\n")) {
    const index = line.indexOf(":");
    if (index === -1) continue;
    meta[line.slice(0, index).trim()] = line.slice(index + 1).trim();
  }
  return meta;
}

function list(value?: string): string[] {
  return value ? value.split(",").map((item) => item.trim()).filter(Boolean) : [];
}

/** Questions are the H3 headings under a "سؤال‌های رایج" H2; answers are the text until the next heading. */
function extractFaq(tokens: ReturnType<typeof marked.lexer>): ArticleFaq[] {
  const faq: ArticleFaq[] = [];
  let inFaq = false;
  let current: ArticleFaq | null = null;
  for (const token of tokens) {
    if (token.type === "heading") {
      const heading = token as Tokens.Heading;
      if (heading.depth <= 2) {
        inFaq = heading.text.trim() === faqHeading;
        current = null;
        continue;
      }
      if (inFaq && heading.depth === 3) {
        current = { q: heading.text.trim(), a: "" };
        faq.push(current);
        continue;
      }
    }
    if (inFaq && current && "text" in token && token.type !== "space") {
      current.a = `${current.a} ${plain(String(token.text))}`.trim();
    }
  }
  return faq.filter((item) => item.a);
}

function plain(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "");
}

function externalLinks(html: string): string {
  return html.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
}
