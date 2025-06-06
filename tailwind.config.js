/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-color' : '#1A1A1A',
        'secondary-theme' : '#FE7F0F',
        'primary-theme' : '#F2F2F2',
        'blue-theme' : '#4B607F',
      }
    },
  },
  plugins: [],
}