const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    'src/**/*.vue',
    'src/**/*.astro',
    'src/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#050505',
          ...colors.neutral
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
