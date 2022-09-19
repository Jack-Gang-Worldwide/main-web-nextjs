/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#D35050",
        blue: "#77B1E6",
        orange: "#FD965C",
        white: "#FFFFFF",
        green: "#62DB6E",
        pink: "#E6777F",
        darkBlue: "#E6777F",
        black: "#1D1D1D",
      },
      spacing: {
        "9/16": "56.25%",
      },
    },
  },
  plugins: [],
};
