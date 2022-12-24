export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: "text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-950",
    },
    titleTemplate: (chunk) => {
      return chunk ? `${chunk} - Luke Fisher` : 'Luke Fisher';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  //
  env: {
    COMMIT_SHA: process.env.GITHUB_SHA || process.env.CF_PAGES_COMMIT_SHA,
    GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY,
    GITHUB_SERVER_URL: process.env.GITHUB_SERVER_URL,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/moment.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // https://github.com/nuxt-community/sitemap-module#readme
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module#readme
    '@nuxtjs/robots',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: 'prismjs/themes/prism-tomorrow.css'
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  },

  generate: {
    fallback: true,
    async routes() {
      const limit = 5;

      const { $content } = require('@nuxt/content');

      const articles = await $content("articles")
        .only(['slug'])
        .fetch();

      const pageCount = Math.ceil(articles / limit);

      const blogPages = ['/blog'];

      for (let pageNumber = 1; pageNumber < pageCount; pageNumber++) {
        blogPages.push(`/blog/${pageNumber}`);
      }

      return articles
        .map(article => `/post/${article.slug}`)
        .concat(blogPages);
    }
  },

  sitemap: {
    hostname: "https://ljf.io",
    defaults: {
      changefreq: 'monthly',
      priority: 1,
      lastmod: new Date()
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://ljf.io/sitemap.xml'
  },

  // Webfontloader (https://github.com/Developmint/nuxt-webfontloader)
  webfontloader: {
    // google: {
    //   families: ['Inter:200,300,400,500,600,700']
    // },
    custom: {
      families: ['Muli:200,300,400,600,700'],
      urls: [
        'https://use.typekit.net/thw4hkd.css'
      ]
    }
  },

  moment: {
    defaultTimezone: 'Europe/London',
    defaultLocale: 'en-gb',
    locales: ['en-gb']
  },
}
