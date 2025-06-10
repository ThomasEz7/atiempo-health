/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f8',
          100: '#dcf1ee',
          200: '#bae3dd',
          300: '#8ecdc4',
          400: '#5db3a7',
          500: '#3d9a8c',
          600: '#2d7c71',
          700: '#26635b',
          800: '#22504a',
          900: '#1f433e',
          950: '#0e2522',
        },
      },
    },
  },
  plugins: [],
} 