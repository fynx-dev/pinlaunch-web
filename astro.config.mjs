import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://fynx-dev.github.io";
const base = process.env.BASE_PATH ?? "/pinlaunch-web";

export default defineConfig({
  output: "static",
  site,
  base,
  integrations: [sitemap()],
});
