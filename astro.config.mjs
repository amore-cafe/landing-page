// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: [
        'bits-ui',
        'embla-carousel-svelte',
        '@lucide/svelte',
        'phosphor-svelte',
        'tailwind-variants',
        'runed',
        '@internationalized/date'
      ]
    }
  },

  integrations: [svelte()],
});
