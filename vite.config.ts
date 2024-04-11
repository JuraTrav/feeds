import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@features': path.resolve('./src/features'),
      '@components': path.resolve('./src/components'),
      '@utils': path.resolve('./src/utils'),
      '@contexts': path.resolve('./src/contexts'),
    },
  },
});
