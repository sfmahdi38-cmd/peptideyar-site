export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path.length > 1 && path.endsWith("/")) {
      url.pathname = path.slice(0, -1);
      return Response.redirect(url.toString(), 308);
    }

    const fetchAsset = async (pathname) => {
      const next = new URL(request.url);
      next.pathname = pathname;
      return env.ASSETS.fetch(new Request(next.toString(), request));
    };

    if (path === "/") {
      const index = await fetchAsset("/index.html");
      if (index.ok || index.status === 304) return index;
    }

    const last = path.split("/").pop() ?? "";
    if (path !== "/" && !last.includes(".")) {
      const html = await fetchAsset(`${path}.html`);
      if (html.ok || html.status === 304) return html;
    }

    const direct = await fetchAsset(path);
    if (direct.ok || direct.status === 304) return direct;

    const notFound = await fetchAsset("/404.html");
    if (notFound.ok) {
      return new Response(notFound.body, {
        status: 404,
        headers: notFound.headers,
      });
    }
    return new Response("Not found", { status: 404 });
  },
};
