/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        accent: '#0ea5e9',
        surface: '#0f172a',
      },
      boxShadow: {
        'soft-card': '0 10px 40px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
