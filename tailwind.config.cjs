/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      textColor: {
        'brand': '#6922a2',
      },
      backgroundColor: {
        'brand': '#6922a2',
      },
      borderColor: {
        'brand': '#6922a2',
      },
      gradientColorStops: {
        'brand': '#6922a2',
      },
      placeholderColor: {
        'brand': '#6922a2',
      },
      ringColor: {
        'brand': '#6922a2',
      },
      fill: {
        'brand': '#6922a2',
      },
      colors: {
        brand: '#6922a2',
      },
      brand: {
        pink: '#a50b89',
        blue: '#13169B',
        purple: '#6922a2',
        green: '#23ae22',
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
