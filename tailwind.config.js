/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#6B7280',
        dark: '#312E81'
      },
      screens: {
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}

