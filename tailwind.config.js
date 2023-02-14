/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'web': {
        900: '#50C878',
        800: '#00050C',
        700: '#010F21',
        600: '#04162D',
        500: '#103566',
        400: '#2E60A2',
        300: '#6393D2',
        200: '#B9D2F3',
        100: '#EAF2FD',
      }
    },
  },
  plugins: [],
}
