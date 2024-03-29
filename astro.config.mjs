import { defineConfig } from 'astro/config';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file'
  },
  site: 'https://ljf.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed'
    }
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
    vue(),
    tailwind(),
    prefetch(),
    compress({
      html: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        keepClosingSlash: true,
        removeComments: true
      }
    })
  ]
});