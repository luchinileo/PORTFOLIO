import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' genera rutas relativas: el mismo build funciona en GitHub Pages
// (luchinileo.github.io/PORTFOLIO/), Netlify o cualquier hosting estático.
export default defineConfig({
  plugins: [react()],
  base: './',
})
