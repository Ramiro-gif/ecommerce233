/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/componentes/**/*.{js,ts,jsx,tsx}",
    "./src/page-section/**/*.{js,ts,jsx,tsx}",
    "node_modules/tw-elements/dist/js/**/*.js", // Agrega esta línea
  ],
  theme: {
    extend: {
      colors: {
        bordo: '#7B1F1F', // Define el color bordo aquí
      },
    },
  },
  plugins: [],
  
};
