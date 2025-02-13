// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  server: {
    port: process.env.PORT || 3000, // Используем PORT из окружения или 3000 по умолчанию
    host: '0.0.0.0', // Хост должен быть 0.0.0.0, чтобы Railway мог подключиться
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

}