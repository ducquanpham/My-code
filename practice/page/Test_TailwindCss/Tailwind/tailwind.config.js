module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./**/*.{js,jsx, ts,tsx, vue}"],
  content: [],
  darkMode: false,
  theme: {
    extend: {
      spacing: {},
      colors: {
        green: "#01996D",
        textGray: "#484848",
        bgFooter: "#245852",
        green33: "#ccebe2",
        textSilver: "#bdc3c7",
        gradient: "linear-gradient(90deg, #ee6352, purple, #ee6352)",
      },
    },
    screens: {
      "1sm": { min: "280px", max: "414px" },
      // => @media (min-width: 280px and max-width: 414) { ... }

      sm: { min: "415px", max: "767px" },
      // => @media (min-width: 280px and max-width: 414) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1920px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
