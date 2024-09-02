/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pangram: ['Pangram Sans Rounded', 'sans-serif'], // Custom font added
      },
      animation: {
        'spin-fast': 'spin 0.75s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
        'bounce': 'bounce 1.5s infinite',
      },
    },
  },
  plugins: [],
}
