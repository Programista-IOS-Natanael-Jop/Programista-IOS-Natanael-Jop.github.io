/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        LexendDeca: ['Lexend Deca', 'serif'],
       },
      colors: {
        primary: '#26D9D6',
        secondary: '#0FC2BF',
        tertiary: '#C8DEDE',
        background: '#DDF1F1',
        accent: '#F03C3F',
        text: '#003838',
        primaryD: '#0FC2BF',
        secondaryD: '#0DF2EE',
        tertiaryD: '#162B2B',
        backgroundD: '#0D2121',
        textD: '#DDF0F0'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

