/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      container: {
        center: true,
        padding:'2rem'
      },
      colors: {
        'title-gray': '#aaaaaa',
        'footer-gray' :'#555555'
      }
    },
  },
  plugins: [],
}

