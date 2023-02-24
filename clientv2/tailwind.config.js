/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 100: "#66d5fa", 200: "#45c7f2" },
        text: { main: "#ffffff", hover: "#ffffff", dark: "#384347" },
        border: { main: "#e4e4e4" },
        box: { hover: "#f9f9f9" },
      },
    },
  },
  plugins: [],
};
