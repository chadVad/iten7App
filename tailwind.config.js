/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
  theme: {
      extend: {
          serif: ["Playfair Display", ...defaultTheme.fontFamily.sans],
          cursive: ["Lobster", "cursive", ...defaultTheme.fontFamily.sans],
          sansserif: ["Varela Round", ...defaultTheme.fontFamily.sans],
          damion: ["'Damion', cursive", ...defaultTheme.fontFamily.sans],
          sono: ["'Sono', sans-serif", ...defaultTheme.fontFamily.sans],
        },
  },
  plugins: [],
}

