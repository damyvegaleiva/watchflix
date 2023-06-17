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
      },
      colors: {
        'clear': 'rgba(255, 255, 255, 0.1)'
      }
    },
  },
  plugins: [],
}