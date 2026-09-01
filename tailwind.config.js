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
        primary: "#8B6558",
        secondary: "#20342D",
        accent: "#B29A72",
        background: "#F5F1E9",
      },
    },
    // you can still use default colors
  },
  plugins: [],
};
