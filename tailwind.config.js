/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'new4': 'repeat(4, minmax(100px,100px))',
        }
    },
  },
  plugins: [],
}