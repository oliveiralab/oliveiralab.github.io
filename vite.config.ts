import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      plugins: [react()],
      
      // Set base path - for user/org pages, always use root
      base: '/',
      
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Generate source maps for debugging
        sourcemap: false,
        // Optimize chunks
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              router: ['react-router-dom']
            }
          }
        }
      }
    };
});
