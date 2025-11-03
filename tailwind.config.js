/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // indigo-800
        secondary: "#0ea5a4", // teal-500
      }
    },
  },
  plugins: [],
}