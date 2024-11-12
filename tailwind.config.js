/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        xanh: "#72B01D",
        cam: "#FF7F11",
        do: "#FF0E0E",
        trang: "#FFF8F0",
      },
      fontFamily: {
        Roboto1: ['"Roboto"', "sans-serif"],
      },
      width: {
        w1022: "1022px",
      },
    },
  },
  plugins: [],
};
