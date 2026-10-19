# آی‌پی‌تی‌وی یار

سایت معرفی اشتراک IPTV برای بیننده فارسی‌زبان. دامنهٔ هدف `iptvyar.com` است. خرید روی خود سایت انجام نمی‌شود و از راه تلگرام است.

## اجرا

Node.js لازم است.

```bash
npm install
npm run dev
```

سرور توسعه روی `0.0.0.0:43123` بالا می‌آید: [http://127.0.0.1:43123](http://127.0.0.1:43123)

نسخهٔ تولید:

```bash
npm run build
npm start
```

## Cloudflare Pages

خروجی استاتیک (`out/`) با `output: "export"` ساخته می‌شود. پروژهٔ Pages روی حساب Cloudflare با نام `iptvyar` و آدرس پیش‌فرض `https://iptvyar-21e.pages.dev` است.

برای انتشار مستقیم (Direct Upload):

1. `npm run build`
2. توکن آپلود را از API Pages بگیرید (`.../pages/projects/iptvyar/upload-token`) و در `CF_PAGES_UPLOAD_JWT` بگذارید.
3. `npm run pages:upload-manifest` — manifest را روی stdout چاپ می‌کند.
4. با API یا Cloudflare MCP یک deployment production با همان manifest بسازید (شاخه `main`).

فایل `wrangler.toml` مسیر خروجی (`pages_build_output_dir = "out"`) را برای Wrangler/Pages ثبت می‌کند. برای `wrangler pages deploy out --project-name=iptvyar` به `CLOUDFLARE_API_TOKEN` نیاز است.

## تلگرام

آیدی تلگرام در `src/lib/site.ts` با مقدار `telegramUsername` است و الان `iptvyar` است. دکمه‌های خرید به `https://t.me/iptvyar` می‌روند.
