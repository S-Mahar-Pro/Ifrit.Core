/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#ffd700',
        amber: '#ff9500',
        purple: {
          900: '#4c0080',
          800: '#5a0099',
          700: '#6b00b3',
        },
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #4c0080 0%, #2d0052 100%)',
      },
    },
  },
  plugins: [],
};
