import { defineConfig } from "vite";
import sveltePreprocess from "svelte-preprocess";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [vitePreprocess(), sveltePreprocess({ postcss: true })],
    }),
  ],
});
