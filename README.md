# PinLaunch landing page

This is the static, multilingual marketing site for PinLaunch. It is an Astro project that renders complete HTML at build time—no browser-side translation service, analytics, web fonts, or remote product assets are used.

## Routes and search indexing

- English (default): `/`
- Simplified Chinese: `/zh-CN/`

Every locale has its own static HTML page, title, description, canonical URL, Open Graph metadata, JSON-LD, and `hreflang` links. The build creates `sitemap-index.xml`, `sitemap-0.xml`, and `robots.txt` in `dist/`, so crawlers can discover both language pages without executing JavaScript.

## Local development

Requires Node.js 24 or a compatible current Node LTS release.

```powershell
npm ci
npm run dev
```

Run a production build and preview its generated files:

```powershell
npm run build
npm run preview
```

## Add a language

1. Add a complete locale entry to `src/content.ts`, including its BCP 47 `code`, URL `path`, metadata, and translated copy.
2. No route file needs to be duplicated: the catch-all Astro page generates every locale in the registry.
3. Run `npm run build`, then inspect the new HTML route, sitemap entry, canonical URL, and `hreflang` links.

English deliberately remains the default root route. Use a BCP 47 path such as `ja` or `de` for each future language.

## GitHub Pages

The included workflow builds the Astro project and deploys only `dist/` through the official GitHub Pages actions. Before the first deployment, set **Settings → Pages → Source** to **GitHub Actions**.

The default production configuration targets the repository project page at `https://fynx-dev.github.io/pinlaunch-web/`. For a custom domain or a differently named project site, set `SITE_URL` and `BASE_PATH` consistently for the local build and deployment, then verify canonical URLs, alternate links, `robots.txt`, and sitemap locations in `dist/` before publishing.

## Product accuracy

Do not add a Store, download, support, price, rating, publisher, analytics, or network-data claim until it exists and has a public URL or policy to support it. The current availability wording intentionally does not imply a public download link.
