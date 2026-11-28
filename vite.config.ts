import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/',
    build: {
      rollupOptions: {
        input: {
          home: path.resolve(__dirname, 'index.html'),
          openmarkdown: path.resolve(__dirname, 'openmarkdown/index.html'),
          products: path.resolve(__dirname, 'products/index.html'),
          studio: path.resolve(__dirname, 'products/atm-content-studio/index.html'),
          koonj: path.resolve(__dirname, 'koonj/index.html'),
          work: path.resolve(__dirname, 'work/index.html'),
        },
      },
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Allow development environments to disable hot reload and file watching.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
