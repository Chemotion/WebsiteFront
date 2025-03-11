/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: colors.neutral[50],
        foreground: colors.gray[800],
        darkBackground: '#3c3c3c',
        darkForeground: '#dedee2'
      },
      screens: {
        'custom-lg': '1150px'
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'sans-serif']
      },
      keyframes: {
        heroWordAnimation: {
          '0%': { color: 'inherit', transform: 'scale(1)' },
          '40%': { color: '#008ab8', transform: 'scale(1.1)' },
          '60%': { color: '#008ab8', transform: 'scale(1.1)' },
          '100%': { color: 'inherit', transform: 'scale(1)' }
        }
      },
      animation: {
        'hero-word': 'heroWordAnimation 2.5s ease-in-out'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
