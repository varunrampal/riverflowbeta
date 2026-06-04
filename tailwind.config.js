/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B76E79",
        secondary: "#0F2D52",
        accent: "#D4AF37",
        background: "#FFFDF8",
      },
    },
    // you can still use default colors
  },
  plugins: [],
};
