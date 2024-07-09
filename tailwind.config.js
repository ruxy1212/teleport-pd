/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'pd-white': '#FFFFFF',
      'pd-gray': '#F3F4F6',
      'pd-black': '#0C0A00',
      'pd-red': '#DF1406',
      'pd-mid-gray': '#9A9A9A',
      'pd-blue': '#0177FC',
      'pd-green': '#AFE638'
    },
    fontFamily: {
      prompt: ['"Prompt"'],
      montserrat: ['"Montserrat"']
    },
    extend: {},
  },
  plugins: [],
}

