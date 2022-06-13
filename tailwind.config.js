/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '450px',
      md: '650px',
      ml: '850px',
      lg: '1150px',
      xl: '2000px',
    },
    extend: {
      fontFamily: {
        base: ["Cormorant Upright", "serif"],
        alt: ["Open Sans", "sans-serif"],
      },
      colors: {
        'burgandy': '#6A040F',
        'cream': '#fff9e5',
        'golden': '#DCCA87',
        'black': '#0C0C0C',
        'crimson': '#F5EFDB',
        'gray': '#545454',
        'grey': '#AAAAAA',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
