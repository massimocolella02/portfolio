/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': {
          '50': '#eafeff',
          '100': '#cbf9ff',
          '200': '#9ef2ff',
          'lighter': '#5be6ff',
          'DEFAULT': '#34d6ff',
          'darker': '#00b2e5',
          '600': '#008dc0',
          '700': '#036f9b',
          '800': '#0d5a7d',
          '900': '#104b69',
          '950': '#033049',
        },
        'secondary': '#10131a'
      }
    },
  },
  plugins: [],
}

