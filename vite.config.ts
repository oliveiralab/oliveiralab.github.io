import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // For GitHub Pages deployment (root domain)
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
