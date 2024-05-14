/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px",
      xxl:"1600px",
    },
    extend: {
      colors:{
        skyBlue: "#0099FF",
        mainBlack: "#131313",
        text: "#999999",
        contentBlack: "#252525",
        white:"#FFFFFF",
        hoverColor: "#363636",
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

