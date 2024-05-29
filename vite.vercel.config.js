import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // ... existing build options
    rollupOptions: {
      external: ['@mapbox/node-pre-gyp'], // Exclude the package
    },
  },
});
