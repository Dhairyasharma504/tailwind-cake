/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: ({ theme }) => ({
        brand: '#e5bf4a',
        primary: '#DFDFDF',
        secondary: '',
        darkShade: '#212529',
        lightShade: '#fff',
      }),

      fontFamily: ({ theme }) => ({
        primary: 'Poiret One, cursive',
        secondary: 'Jost, sans-serif',
      }),
    },
  },
  plugins: [],
};
