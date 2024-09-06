/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      base: '1.125rem',
      xl: '1.5rem',
      '2xl': '2.25rem',
      '3xl': '4rem',
      '4xl': '6rem',
    },
    extend: {},
  },
  plugins: [],
}

