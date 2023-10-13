/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,md}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "100ms",
      },
      fontFamily: {
        noto: ["'Noto Sans'", "sans-serif"],
        leo: ["'LeoHandLight'","serif"],

      },
      colors: {
        overlay: "#00000088",
        // theme background light
        light: "#eaedf0", // primary
        "light-secondary": "#f8fafbf8", // secondary
        "light-reverse": "#bebebe", // reverse

        // theme background dark
        dark: "#15232e",
        "dark-secondary": "#1f2935",
        "dark-reverse": "#44566c",
      },
      transitionProperty: {
        filter: "filter",
      },
      backgroundImage: {
        'basket-pattern': "url('./src/assets/grey-wicker-bars.png')"
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
