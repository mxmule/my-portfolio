/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#455CE9', 
        secondary: '#334BD3',
        text: '#1c1d20',
      },
      fontFamily: {
        primary: ['DM Sans', 'sans-serif'],
        secondary: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

