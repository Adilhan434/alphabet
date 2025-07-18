/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
      inter: ['Inter', 'sans-serif'],
      noto: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        primary: '#6366F1',
        background: '#F5F4EF',
        green: '#1AFF00',
        header: '#F7FAFF',
        text: '#ffff'
      }
    },
  },
  plugins: [],
}