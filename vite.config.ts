import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/blogr-landing-page",
  plugins: [react()],
  server: {
    port: 3000,         // Set the port to 3000
    host: true          // Make it accessible over the network
  }
})
