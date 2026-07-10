import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served as a GitHub Pages project site at https://pixeledonion.github.io/IrishTrees/
export default defineConfig({
  base: '/IrishTrees/',
  plugins: [react()],
});
