/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   
     "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      backgroundColor: {
        'dbdada': '#dbdada',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),

  ],
}

