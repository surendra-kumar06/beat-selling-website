/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lufga: ['Lufga', 'sans-serif'],
      lufgaBold: ['LufgaBold', 'sans-serif'],
    },
    extend: {
      colors: {
        lightBrown: '#F5E6D3',
        darkBrown: '#4A3728',
        electricBlue: '#00A4E4',
        cream: '#E8D6C0',
        sageGreen: '#8DAA91',
        coral: '#FF6B5B',
      },
    },
  },
  plugins: [],
}

