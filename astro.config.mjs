import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mosuzo.com",
  base: process.env.PAGES_BASE || "/",
  output: "static",
  trailingSlash: "always",
  i18n: {
    locales: ["zh-cn", "en"],
    defaultLocale: "zh-cn",
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      serialize(item) {
        // The canonical domain always serves from /, even when Pages uses a preview subpath.
        return {
          ...item,
          url: item.url.replace(
            /^https:\/\/mosuzo\.com\/Mosuzo-site(?=\/)/,
            "https://mosuzo.com",
          ),
        };
      },
    }),
  ],
});
