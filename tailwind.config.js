/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#2c2e83', 2: '#244b92' },
        accent: '#fbb040',
        teal: { DEFAULT: '#009fc3', 2: '#128FC5' },
        ink: { DEFAULT: '#3a3a3c', light: '#666666' },
        surface: '#f5f7fa',
        line: '#e8eaf0',
        'line-strong': '#dcdfe8',
      },
      boxShadow: {
        card: '0 2px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 32px rgba(44,46,131,0.14)',
      },
      borderRadius: { card: '16px' },
      transitionTimingFunction: { reveal: 'cubic-bezier(.22,.61,.36,1)' },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      maxWidth: { content: '1200px', prose: '46rem' },
    },
  },
  plugins: [],
}
