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
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "reverse-loop-scroll": "reverse-loop-scroll 50s linear infinite",
      }
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    
      "reverse-loop-scroll": {
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0)" }, 
      }
    }
  },
  plugins: [],
}

