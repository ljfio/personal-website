const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
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
        gray: {
          950: '#050505',
          ...colors.trueGray
        },
      },
      fontFamily: {
        sans: ["Muli", "sans-serif"]
      }
    },
  },
  variants: {},
  plugins: [],
}
