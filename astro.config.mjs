import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://pinlaunch.fynxlab.com";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  output: "static",
  site,
  base,
  integrations: [sitemap()],
});
