/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "outlet": "calc(100vh - 100px)"
      },
      flex:{
        "3": "3 1 0%",
        "2": "2 1 0%",
        "10": "10 1 0%"
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}