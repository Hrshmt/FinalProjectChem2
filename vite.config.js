import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // For GitHub Pages deployment, set base to your repo name
  // Change 'hydro-gen' to your actual repository name
  base: '/hydro-gen/',
  build: {
    outDir: 'dist',
  },
})
