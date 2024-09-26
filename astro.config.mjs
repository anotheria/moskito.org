import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  // site: 'http://moskito.saenq.fun/',
  site: 'http://127.0.0.1:5500/',
  // base: '/dist',
  integrations: [
    vue({
      appEntrypoint: '/src/_app.ts',
    }),
    sitemap(),
    tailwind(),
  ],
  vite: {
    plugins: [
      VueDevTools({
        appendTo: '_app.ts',
      }),
    ],
    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
})
