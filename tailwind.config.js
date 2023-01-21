/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        bgPrimary: "#1c2025",
        bgSecondary: "#202934",
        mainPrimary: "#01dbc4",
        mainOffPrimary: "#283037",
        textPrimary: "#cbd2d9",
        textSecondary: "#e4e7eb",
        textBlack: "#00140e",
      },
    },
  },
  plugins: [],
};
