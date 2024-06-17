<<<<<<< HEAD
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit(), imagetools()],
  build: {
      rollupOptions: {
        external: ['@npmcli/config', '@mapbox/node-pre-gyp']
      }
  }
=======
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
>>>>>>> 7259bfdf (init: initial commit)
});
