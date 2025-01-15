/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_primary: 'var(--primary-color)',
        text_primary: 'var(--text-primary)',
        text_secondary: 'var(--text-secondary)',
      },
      fontSize: {
        custom_sm: '13px',
      }
    },
  },
  plugins: [],
}