#!/usr/bin/env node
/**
 * Upload static assets to Cloudflare Pages (Direct Upload) and print manifest JSON.
 * Requires CF_PAGES_UPLOAD_JWT (from GET .../pages/projects/{name}/upload-token).
 */
import fs from "node:fs";
import path from "node:path";
import { hash as blake3Hash } from "blake3-wasm";

const API = "https://api.cloudflare.com/client/v4";
const directory = process.argv[2] ?? "out";
const jwt = process.env.CF_PAGES_UPLOAD_JWT;

if (!jwt) {
  console.error("CF_PAGES_UPLOAD_JWT is required");
  process.exit(1);
}

function hashFile(filepath) {
  const contents = fs.readFileSync(filepath);
  const base64Contents = contents.toString("base64");
  const extension = path.extname(filepath).substring(1);
  return blake3Hash(base64Contents + extension).toString("hex").slice(0, 32);
}

function walk(dir, base = dir) {
  const entries = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) entries.push(...walk(full, base));
    else entries.push(full);
  }
  return entries;
}

function deployPath(filepath, base) {
  let rel = path.relative(base, filepath).split(path.sep).join("/");
  if (rel.endsWith("/index.html")) rel = rel.slice(0, -"/index.html".length) + ".html";
  else if (rel === "index.html") rel = "index.html";
  return rel;
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".woff2": "font/woff2",
  };
  return map[ext] ?? "application/octet-stream";
}

async function cf(pathname, init = {}) {
  const res = await fetch(`${API}${pathname}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${jwt}`,
      ...(init.headers ?? {}),
    },
  });
  const data = await res.json();
  if (!data.success) {
    throw new Error(JSON.stringify(data.errors ?? data));
  }
  return data.result;
}

const absDir = path.resolve(directory);
const files = walk(absDir);
const fileMap = files.map((filepath) => ({
  filepath,
  hash: hashFile(filepath),
  deployPath: deployPath(filepath, absDir),
  sizeInBytes: fs.statSync(filepath).size,
  contentType: contentType(filepath),
}));

const missing = await cf("/pages/assets/check-missing", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ hashes: fileMap.map((f) => f.hash) }),
});

const toUpload = fileMap.filter((f) => missing.includes(f.hash));
for (const file of toUpload) {
  const payload = [
    {
      key: file.hash,
      value: fs.readFileSync(file.filepath).toString("base64"),
      metadata: { contentType: file.contentType },
      base64: true,
    },
  ];
  await cf("/pages/assets/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

await cf("/pages/assets/upsert-hashes", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ hashes: fileMap.map((f) => f.hash) }),
});

const manifest = Object.fromEntries(
  fileMap.map((f) => [f.deployPath, f.hash]),
);
process.stdout.write(JSON.stringify(manifest));
