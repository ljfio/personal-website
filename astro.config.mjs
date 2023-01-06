import { defineConfig } from 'astro/config';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file'
  },
  experimental: {
    contentCollections: true
  },
  site: 'https://ljf.io',
  integrations: [sitemap(), vue(), tailwind(), prefetch()]
});