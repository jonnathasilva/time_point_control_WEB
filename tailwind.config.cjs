/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sx: ["12px", "16px"],
      sm: ["14px", "18px"],
      base: ["16px", "24px"],
      xl: ["24px", "28px"],
      "2xl": ["32px", "40px"],
      "3xl": ["48px", "56px"],
    },
    extend: {
      colors: {
        grey: "#edf2f4",
        blue: {
          300: "#8d99ae",
          500: "#2b2d42",
        },
      },
    },
  },
  plugins: [],
};
