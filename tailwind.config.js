/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "content-xs": "92vw",
        "content-sm": "92vw",
        "content-md": "90vw",
        "content-lg": "85vw",
        "content-xl": "75vw",
        "content-xxl": "75vw",
      },
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
      },
      colors: {
        body: "#1A1A1A",
        "primary": {
          DEFAULT: "#50235C",
          50: "#F0E1F4",
          100: "#E2C8EA",
          200: "#C690D5",
          300: "#A959C0",
          400: "#803894",
          500: "#50235C",
          600: "#401C4A",
          700: "#301537",
          800: "#200E25",
          900: "#100712"
        }
      }
    },
  },
  plugins: [],
};
