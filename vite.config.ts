import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://lmsimonneaux.github.io/LMSimonneaux/
export default defineConfig({
  base: '/LMSimonneaux/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
