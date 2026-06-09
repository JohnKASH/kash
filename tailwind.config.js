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
        // Unified KASH navy ramp — anchored at 600 = #204499 (brand blue)
        kashBlue: {
          50: '#EEF3FC',
          100: '#D9E2F7',
          200: '#B7C8EE',
          300: '#8AA3E0',
          400: '#5675C9',
          500: '#345AB0',
          600: '#204499', // Brand blue
          700: '#1B387D',
          800: '#182F66',
          900: '#152852',
          950: '#0E1A38',
        },
        // Single restrained accent — a muted, professional gold (not festive amber)
        kashGold: {
          50: '#FBF6EC',
          100: '#F5E9CE',
          200: '#EBD49E',
          300: '#E0C079',
          400: '#D2A64F',
          500: '#C2912E',
          600: '#A87A22',
          700: '#8A631C',
        },
        kashBlack: {
          100: '#2E3031',
          200: '#252627',
          300: '#1C1D1E',
          400: '#141516',
          500: '#0B0C0D',
          600: '#050708', // Original kashBlack
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
