/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      colors : {
        textPrimary : '#F5EEE6'
      },
      fontFamily : {
        AbrilFatface : ['Abril Fatface', 'serif'],
        TulpenOne : ['Tulpen One', 'sans-serif']
      },
    extend: {},
  },
  plugins: [require("daisyui")],}

