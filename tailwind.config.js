/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const container = function ({ addComponents }) {
  addComponents({
    ".container": {
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      maxWidth: "100%",
      width: "100%",
      "@screen sm": {
        maxWidth: "34rem",
      },
      "@screen md": {
        maxWidth: "45rem",
      },
      "@screen lg": {
        maxWidth: "60rem",
      },
      "@screen xl": {
        maxWidth: "72rem",
      },
      "@screen 2xl": {
        maxWidth: "85rem",
      },
      "@screen 3xl": {
        maxWidth: "98rem",
      },
    },
  });
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
      smmax: { max: "575.98px" },
      mdmax: { max: "767.98px" },
      lgmax: { max: "991.98px" },
      xlmax: { max: "1199.98px" },
      "2xlmax": { max: "1399.98px" },
      "3xlmax": { max: "1599.98px" },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        icon: "var(--iconfont-name)",
      },
      flex: {
        narrow: "0 0 auto",
        wide: "1 0 0%",
      },
      height: {
        100: "25rem",
        120: "30rem",
      },
    },
  },
  plugins: [container],
};