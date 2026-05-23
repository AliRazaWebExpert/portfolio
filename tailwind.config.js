/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7ff',
          100: '#dbe7ff',
          200: '#b7ceff',
          300: '#83acff',
          400: '#4e83ff',
          500: '#285fff',
          600: '#123fe5',
          700: '#1233b6',
          800: '#162f8f',
          900: '#192d71',
        },
      },
      boxShadow: {
        glow: '0 20px 80px rgba(37, 99, 235, 0.18)',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-dark':
          'radial-gradient(circle at top, rgba(37, 99, 235, 0.25), transparent 32%), radial-gradient(circle at 85% 20%, rgba(59, 130, 246, 0.18), transparent 22%), linear-gradient(180deg, rgba(8, 11, 20, 0.96), rgba(8, 11, 20, 1))',
        'mesh-light':
          'radial-gradient(circle at top, rgba(37, 99, 235, 0.18), transparent 32%), radial-gradient(circle at 85% 20%, rgba(59, 130, 246, 0.14), transparent 22%), linear-gradient(180deg, rgba(247, 250, 255, 0.96), rgba(238, 242, 255, 1))',
      },
    },
  },
  plugins: [],
};
