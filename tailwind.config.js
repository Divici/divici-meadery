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
      xl: '2750px',
    },
    extend: {
      fontFamily: {
        base: ["Cormorant Upright", "serif"],
        alt: ["Open Sans", "sans-serif"],
      },
      colors: {
        'burgandy': '#6A040F',
        'cream': '#fff9e5',
        'cream-dk': '#dad3c1',
        'cream-br': '#f0dfbd',
        'cream-md': '#f9f4e5',
        'red-dk': '#781e1e',
        'red-br': '#d41313',
        'red-md': '#af2323',
        'orange-dk': '#783f1e',
        'orange-br': '#de5b10',
        'orange-md': '#af5623',
        'golden': '#DCCA87',
        'black': '#0C0C0C',
        'crimson': '#F5EFDB',
        'gray': '#545454',
        'grey': '#AAAAAA',
        'white': '#FFFFFF',
      },
      backgroundImage: {
        'split-cream-white': "linear-gradient(to top, #f0dfbd 60% , white 40%);"
      },
    },
  },
  plugins: [],
}
