/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['NomeFont', 'sans-serif'],
        playwrite: ['"Playwrite NO"', 'cursive'],
      },
    },
  },
  plugins: [],
};