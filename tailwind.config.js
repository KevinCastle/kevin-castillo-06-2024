/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/*.{vue,js,ts}', './src/**/*.{vue,js,ts}'],
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      }
    }
  },
  plugins: []
}
