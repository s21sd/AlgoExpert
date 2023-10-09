/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',
        accent:'#EEF7F9'
      },
      fontFamily: {
        primary: 'Playfair Display',
        secondary: 'Mulish'
      },
      fontWeight: {
        '500': 500,
        '700': 700,
      },
      screens: {
        'sm': '640px',
        'md': '760px',
        'lg': '1024px',
        'xl': '1192px',
      },
    },
  },
  plugins: [],
}

