/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        text: "#9b9b9b",
        orange: "#FB644B",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

