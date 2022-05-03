module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Inter',
      'body': 'Inter'
    },
    extend: {
      colors: {
        primary: '#0A1690',
        base: '#17171B'
      }
    },
  },
  plugins: [],
}
