/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '10px',
      md: '20px',
      xm: '25px',
      lg: '38px',
      xl: '96px'
    },
    extend: {
      colors: {
        'black': '#000000',
        'succes': '#14F195',
        'blur-pink': '#F087FF4D',
        'blur-purple': '#A962FF',
        'ghost': '#848895',
        'ghost-c': '#C4C4C4',
        'light': '#E6E6E6',
        'white': '#FFFFFF',
        'purple': '#9945FF',
        'dark': '#19161C',
      },
      fontFamily: {
        robotos: ['Roboto', 'sans - serif']
      }
      
// 16 \47 20 38  10 
    },
  },
  plugins: [],
}