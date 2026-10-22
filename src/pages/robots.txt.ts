export const prerender = true;

const site = process.env.SITE_URL ?? "https://pinlaunch.fynxlab.com";
const base = (process.env.BASE_PATH ?? "/").replace(/\/$/, "");

export function GET() {
  const sitemap = new URL(`${base}/sitemap-index.xml`, site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
