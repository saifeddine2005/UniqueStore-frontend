import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Utiliser la racine du projet, si ton app est à la racine du serveur
  build: {
    outDir: '../public/assets', // Sortir les fichiers compilés dans le répertoire 'public/assets'
    assetsDir: 'assets', // Définir le répertoire où Vite place les assets
    emptyOutDir: true, // Nettoyer le répertoire de sortie avant chaque build
  },
  server: {
    proxy: {
      // Si tu as besoin de configurer un proxy pour l'API Laravel
      '/api': 'http://localhost:8000', // Assure-toi que ton backend Laravel fonctionne à cet emplacement
    },
  },
})
