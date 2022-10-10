/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
    'button-green': '#087534',
    'fav-red': '#EB5757',
    'button-blue': '#1974B1',
    'background-white': '#ebeffd9',
    },
    fontFamily :{
      'jsouls-font': [''],
      'praise': ['Praise'],
      'Manrope': ['Manrope','sans-serif'],
    }
  },
  plugins: [],
}
}
//customize tailwindcss