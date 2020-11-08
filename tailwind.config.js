module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  theme: {
    extend: {
      colors: {
        brand: "#70d73e",
        dark: {
          one: "#505050",
          two: "#868686"
        }
      },
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"]
      }
    },
  },
  variants: {},
  plugins: [],
}
