/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        'background-light': '#fcfaf7',
        'background-dark': '#0f0f0f',
        'accent-orange': '#fb923c',
        'surface-light': '#ffffff',
        'surface-dark': '#1e1e1e',
        text: {
          'main-light': '#1a1a1a',
          'main-dark': '#e5e5e5',
          'muted-light': '#6b7280',
          'muted-dark': '#9ca3af',
        },
        accent: '#F4A261',
      },
      fontFamily: {
        display: ["'Mona Sans'", 'sans-serif'],
        sans: ["'Geom'", 'sans-serif'],
        condensed: ["'Google Sans'", 'sans-serif'],
        serif: ["'Instrument Serif'", 'serif'],
        body: ["'Geom'", 'sans-serif'],
        heading: ["'Mona Sans'", 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        'pill': '50rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at center, rgba(251, 146, 60, 0.25) 0%, rgba(252, 250, 247, 0) 70%)',
        'hero-glow-dark': 'radial-gradient(circle at center, rgba(251, 146, 60, 0.15) 0%, rgba(15, 15, 15, 0) 70%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}