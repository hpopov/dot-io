import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      // Add any path aliases you need
      '@': path.resolve(__dirname, './src'),
    },
  },

  css: {
    postcss: './postcss.config.js',
  },

  build: {
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          vendor: ['react', 'react-dom', 'react-router', 'react-router-dom'],
          charts: ['apexcharts', 'react-apexcharts', 'chart.js', 'react-chartjs-2'],
        },
      },
    },
  },

  server: {
    port: 8080,
    open: true,
  },

});
