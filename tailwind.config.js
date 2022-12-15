/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '16px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '32px',
      }
    },
    screens: {
      'sm': "360px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1366px"
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
     },
     boxShadow: {
       '2sm': '0 6px rgb(250, 250, 250)',
       '2sm': '0 6px rgb(250, 250, 250)',
     }
    },
    colors: {
      black: '#000000',
      'white': "#ffffff",
      blue: {
        dark: {
          element: '#2b3945',
          background: '#202c37'
        },
        light: {
          element: '#111517',
        }
      },
      gray: {
        light: {
          element: '#858585',
          background: '#fafafa'
        }
      }
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'light-blue': '#6448fe',
      'metallic-violet': '#600594'
    })
  },
  plugins: [],
}
