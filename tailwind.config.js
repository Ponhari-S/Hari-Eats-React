/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-green': '#267919',
          'brand-green-dark': '#1b5613',
          'shimmer-light': '#eeeeee',
          'shimmer-dark': '#dddddd',
        },
        keyframes: {
          shimmer: {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          },
        },
        animation: {
          shimmer: 'shimmer 1.5s infinite linear',
        },
        boxShadow: {
          'header': '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: [],
  }