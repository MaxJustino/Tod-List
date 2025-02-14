module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Certifique-se de que todos os arquivos JSX/TSX estão incluídos
  ],
  theme: {
    extend: {
      transitionProperty: {
        colors: 'background-color, border-color, color', // Adiciona suporte para transição de cores
      },
    },
  },
  plugins: [],
};