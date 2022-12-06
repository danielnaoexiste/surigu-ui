/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["Source Code Pro", "monospace"],
      },
      colors: {
        brand: {
          DEFAULT: "#a3be8c",
          100: "#A3BE8C",
          200: "#98B084",
          300: "#8EA27D",
          400: "#839475",
          500: "#79866D",
          600: "#6E7865",
          700: "#636A5E",
          800: "#595C56",
          900: "#4E4E4E",
        },
      },
      gridTemplateColumns: {
        server: "repeat(auto-fill, minmax(350px, 1fr))",
      },
    },
  },
  plugins: [],
};
