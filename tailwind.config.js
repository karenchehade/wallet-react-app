const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3A3B37",
        secondary: "#FF9B26",
        "second-dark": "E56717",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
