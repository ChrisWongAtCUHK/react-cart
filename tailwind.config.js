import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // 直接使用 import 進來的變數
  ],
  daisyui: {
    themes: ['bumblebee'],
  },
}
