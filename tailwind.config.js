/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        75: '75%',
      },
      width: {
        '30': '30%',
      }
    },
  },
  plugins: [],
}