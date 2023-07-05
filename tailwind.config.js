/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nova': ['Nova Oval', 'sans-serif'],
        'zloop': ['Zen Loop', 'sans-serif'],
        'sans': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

