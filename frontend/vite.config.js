import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  preview: {
    port: 8083,
    strictPort: true
  },
  server: {
    port: 8083,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8083"
  },
  plugins: [react()],
})
