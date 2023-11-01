/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#EC6A52",
        secondary: "#00f6ff",
        gray: '#766767',
        graylight: '#F7F7F8',
        red:'#EC6A52',
        olive:'#9DBDBA',
        lightred:'#F3B7AD',
        faintgray:'#93AEC1',
        whitesh:'#D0E8FF',
        yellow:'#F8B042',
        redlight:'#EE9484',
        faintgreen:'#9FC2BF',
        yellowlight:'#F9BF67',
        black:'#212121',
        red3:'#F08F7D',
        whitef:'#FFFFFF',
        white2:'#f2e2df',
        gray2:'#b0c8d9',
        
        
      },
      lineHeight: {
        '20': '20px', // You can adjust this value as needed
      },
      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
    minHeight: {
      'screen': '100vh',
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "768px",
      lg: "1060px",
      xl: "1286px",
      xxl: "1700px",

    },
  },
  plugins: [],
};
