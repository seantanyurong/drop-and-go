/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 100: "#66d5fa", 200: "#45c7f2", 300: "#1DA7D4" },
        text: { main: "#ffffff", hover: "#ffffff", dark: "#384347" },
        border: { main: "#e4e4e4" },
        box: { gray: "#f2f2f2", hover: "#f9f9f9" },
      },
    },
  },
  plugins: [],
};
