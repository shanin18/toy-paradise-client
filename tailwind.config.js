/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "bangers":['Bangers', 'cursive'],
      "archivo":['Archivo', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

