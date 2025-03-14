// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import astroExpressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://darienmc.github.io',
  vite: { plugins: [tailwindcss()], },
  integrations: [icon(), astroExpressiveCode({
    themes: ['vitesse-black', 'everforest-light'],
  })],

  legacy: {
    collections: true
  }
});