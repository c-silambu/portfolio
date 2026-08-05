/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Space Grotesk', 'sans-serif'] },
      colors: { ink: '#070b14' },
      boxShadow: { glow: '0 0 60px rgba(34, 211, 238, 0.15)' },
    },
  },
  plugins: [],
};
