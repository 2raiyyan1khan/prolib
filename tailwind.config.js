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
        // bgPrimary: "#1c2025",
        bgPrimary: "#212936",
        // bgSecondary: "#202934",
        bgSecondary: "#283037",
        // mainPrimary: "#01dbc4",
        mainPrimary: "#a38cf3",
        mainOffPrimary: "#283037",
        textPrimary: "#f3f4f6",
        // textPrimary: "#cbd2d9",
        textSecondary: "#9ca3af",
        textBlack: "#00140e",
      },
    },
  },
  plugins: [],
};
