/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-1": "#18212f",
      },
      boxShadow: {
        custom: " 0 0 10px 3px #9e9e9e3d",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
  important: true,
};
