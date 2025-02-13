// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    '~/js': fileURLToPath(new URL('./assets/js', import.meta.url))
  }
});
