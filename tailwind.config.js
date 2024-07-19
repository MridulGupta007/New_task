/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'swirl' : 'url(/src/assets/swirly-image.png)'
      },
      lineHeight: {
        'custom' : '60px',
        'custom-30' : '30px'
      },
      fontFamily: {
        'outfit': ["Outfit", "sans-serif"]
      },
      blur: {
        'highlight': '80px'
      }
    },
  },
  plugins: [],
}