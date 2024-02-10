import { defineConfig } from 'vite';
import sveltePreprocess from 'svelte-preprocess';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [sveltePreprocess({ postcss: true })],
    }),
  ],
  resolve: {
    alias: {
      '$app/environment': path.resolve('src/mocks/app-environment.js'),
    },
  },
  optimizeDeps: {
    exclude: ['@friendofsvelte/tipex'],
  },
  build: {
    rollupOptions: {
      external: ['$app/environment']
    }
  },
});