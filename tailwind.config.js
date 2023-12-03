/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        phone : {max: "320px"},
        tablet : {max: "768px"}
      }
    },
  },
  plugins: [],
}

