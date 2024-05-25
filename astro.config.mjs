import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

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
  prefetch: true,
  integrations: [
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
    vue(),
    tailwind(),
  ]
});