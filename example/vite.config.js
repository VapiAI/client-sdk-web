import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    commonjsOptions: {
      include: [/client-sdk-web/, /node_modules/]
    }
  },
  optimizeDeps: {
    include: ['@daily-co/daily-js', 'events']
  }
});
