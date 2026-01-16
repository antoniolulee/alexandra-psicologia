/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js}',
    './_layouts/**/*.{html,js}',
    './_posts/**/*.{html,md}',
    './blog/**/*.{html,md}',
    './*.{html,md}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'primary': '#5d6b5b',        // Verde Salvia (autoridad, calma)
        'primary-hover': '#4a5649',
        'secondary': '#f9f8f4',      // Crema cálido (fondo)
        'secondary-alt': '#f0efe8',  // Crema más oscuro
        'accent': '#b8860b',         // Dorado mate
        'accent-hover': '#9a7209',
        'text': '#2d2d2d',           // Texto principal
        'text-muted': '#555555',     // Texto secundario (mejor contraste WCAG AA)
        'border': '#e5e5e5',
        // Dark mode colors (with prefix)
        'dark-primary': '#8a9a87',        // Verde más claro para dark
        'dark-primary-hover': '#9dab9a',
        'dark-secondary': '#1a1a1a',      // Fondo oscuro
        'dark-secondary-alt': '#252525',
        'dark-accent': '#d4a853',         // Dorado más brillante
        'dark-accent-hover': '#e0b865',
        'dark-text': '#f0f0f0',           // Texto claro
        'dark-text-muted': '#b0b0b0', // Mejor contraste WCAG AA
        'dark-border': '#374151',
      },
      fontFamily: {
        'heading': ["'Playfair Display'", 'Georgia', 'serif'],
        'body': ["'Lato'", "'Helvetica Neue'", 'sans-serif'],
        'accent': ["'Allura'", 'cursive'],
      },
      letterSpacing: {
        'heading': '0.02em',
        'body': '0.01em',
      },
      lineHeight: {
        'heading': '1.3',
        'body': '1.7',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
