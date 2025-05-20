/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            p: {
              lineHeight: '1.5',
            },
            h1: {
              lineHeight: '1.2',
            },
            h2: {
              lineHeight: '1.2',
            },
            h3: {
              lineHeight: '1.2',
            },
          },
        },
      },
    },
  },
  plugins: [],
};