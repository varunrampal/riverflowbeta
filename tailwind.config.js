/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/views/**/*.{js,jsx,ts,tsx}",
    "!./src/views/HomePage2.jsx",
  ],
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
