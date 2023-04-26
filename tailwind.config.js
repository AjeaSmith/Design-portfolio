/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./*.html"],
  theme: {
    fontFamily: {
      'body': ['Plus Jakarta Sans']
    },
    fontSize: {
      xs: ['14px', '28px'],
      sm: ['32px', '40px'],
      md: ['40px', '51px'],
      lg: ['56px', '70px'],
    },
    extend: {
      colors:{
        purple: '#755CDE',
        darkOrange: '#EB7565',
        lightOrange: '#F6A560',
        pink: '#F39E9E',
        teal: '#61C4B7',
        violet: "#552049",
        black: "#030303",
        gray: "#7A746E",
        cream: "#FFF7F0"
      },
    },
  },
  plugins: [],
}

