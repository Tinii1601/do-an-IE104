/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "#72B01D",
        orange: "#FF7F11",
        red: "#FF0E0E",
        white_pink: "#FFF8F0",
      },
      fontFamily: {
        Roboto1: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
