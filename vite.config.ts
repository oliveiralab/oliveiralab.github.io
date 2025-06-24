import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    // Determine if we're building for GitHub Pages
    const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
    
    return {
      plugins: [react()],
      
      // Set base path for GitHub Pages deployment
      base: isGitHubPages ? '/oliveiralab.github.io/' : '/',
      
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
