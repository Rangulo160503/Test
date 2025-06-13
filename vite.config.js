import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Necesario para rutas absolutas (ES Modules)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  base: './', // importante para Azure Static Web Apps (sirve desde la raíz del sitio)
  plugins: [react()],
  build: {
    outDir: 'build', // Azure tomará esta carpeta como contenido estático
    rollupOptions: {
      input: path.join(__dirname, 'index.html') // entrada explícita
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001' // redirige en desarrollo
    }
  }
})
