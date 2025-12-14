/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f4f6ff',
          100: '#e9edff',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3',
        },
        surface: '#0f172a',
      },
      boxShadow: {
        mobile: '0 10px 30px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
};
