/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C71585", // Rose vif/magenta
        "primary-dark": "#8B008B", // Violet foncé
        secondary: "#2E8B57", // Vert émeraude
        accent: "#CD853F", // Bois/brique
        dark: "#121212", // Noir profond
        "wood": "#A0522D", // Brique plus foncée
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
};
