/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#16243d',
      'white': '#fff',
      'blue': '#01c8f8',
      'red': '#FF0000',
      'muted': '#97a2b7',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Sans', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        2: '2.2rem',
        3: '3.3rem',
        4: '4.4rem',
        5: '5.5rem',
        6: '6.6rem',
        7: '7.7rem',
        8: '8.8rem',
        9: '9.9rem',
        // 10: '10.10rem',
      },
      padding: {
        // 10: '10.10rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
