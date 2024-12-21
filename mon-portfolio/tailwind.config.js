/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',      // Tous les fichiers dans le dossier "pages"
    './components/**/*.{js,ts,jsx,tsx}', // Tous les fichiers dans le dossier "components"
    './public/**/*.{html}',              // Fichiers HTML statiques dans "public"
  ],
  theme: {
    extend: {
      spacing: {
        'header': '4.5rem', // Correspond à la hauteur du header
      },
    },
  },
  plugins: [],
};

