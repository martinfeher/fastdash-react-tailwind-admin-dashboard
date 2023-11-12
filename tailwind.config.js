/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: () => ({
        brandLight: "#F5F6FF",
        brandDarkPrimary: "#2d3847",
        brandDarkSecondary: "#454f5e",
        'slate': {
          25: '#fcfcfe',
          50: '#f9f9fb',
          150: '#eaeef2',
          250: '#c9e0e4',
          425: '#7587b5',
          450: '#7c8ec0',
          550: '#5c6c85',
          650: '#3b4e59',
          750: '#283649',
        },
        'gray': {
          10: '#fefefe',
          25: '#fcfcfc',
          50: '#fafafa',
          150: '#f1f2f3',
          250: '#dadfe2',
          350: '#c1c5cb',
          450: '#81818a',
          550: '#585e63',
          650: '#454f5e',
          750: '#2d3847',
        },
      })
    },
  },
  plugins: [],
  darkMode: "class",
}

