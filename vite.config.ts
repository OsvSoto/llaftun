import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base '/' porque el sitio vive en la raíz del dominio.
  // Si alguna vez se sirve desde un subdirectorio, cambiar aquí.
  base: '/',
})
