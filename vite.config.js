import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  appType: 'mpa',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services/index.html'),
        pricing: resolve(__dirname, 'pricing/index.html'),
        resourcesCaseStudies: resolve(__dirname, 'resources/case-studies/index.html'),
        contact: resolve(__dirname, 'contact/index.html')
      }
    }
  }
});
