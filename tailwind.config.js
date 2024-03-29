/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        itemsGrid: "repeat(auto-fill, minmax(200px, 1fr))",
        itemsGridMobile: "repeat(auto-fill, minmax(120px, 1fr))",
        providersGrid: "repeat(auto-fill, minmax(100px, 1fr))",
        providersGridMobile: "repeat(auto-fill, minmax(70px, 1fr))",
      },
    },
  },
  plugins: [],
};