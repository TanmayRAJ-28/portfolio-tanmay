/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent:  '#00d4ff',
        violet:  '#7b2fff',
        dark:    '#0a0a0f',
      },
      animation: {
        'glow-pulse':   'glow-pulse 2.5s ease-in-out infinite',
        'border-spin':  'borderSpin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
