/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        kashBlue: {
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#204499',  // Original color
          700: '#3730A3',
          800: '#312E81',
          900: '#1E3A8A',
        },
        kashBlack: {
          100: '#2E3031',
          200: '#252627',
          300: '#1C1D1E',
          400: '#141516',
          500: '#0B0C0D',
          600: '#050708',  // Original kashBlack
          700: '#040506',
          800: '#030404',
          900: '#020303',
        },
        kashRed: '#EC2028',
      },
    },
  },
  plugins: [],
};
