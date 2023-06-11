/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['RozhaOne-Regular', ...defaultTheme.fontFamily.sans],
     },
    },
    screens: {
      'xs': '425px',

      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '1000px',
      // => @media (min-width: 768px) { ... }

      'lg': '1300px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1500px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1700px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

