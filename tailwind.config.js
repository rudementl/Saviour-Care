/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '480px',
        md: '640px',
        lg: '768px',
        xl: '1168px',
        '2xl': '1200px',
      },
    },
    extend: {
      margin: {
        auto: '0 auto',
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
