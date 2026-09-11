import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base '/' porque el sitio vive en la raíz del dominio.
  // Si alguna vez se sirve desde un subdirectorio, cambiar aquí.
  base: '/',
  preview: {
    // Sin esto, "vite preview" rechaza cualquier request que no venga con
    // Host "localhost": necesario para mostrar el sitio a través de un
    // túnel (cloudflared, ngrok) con un dominio temporal distinto.
    allowedHosts: true,
  },
})
