// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  plugins: ['~/plugins/arco-design'],
  modules: ['@nuxtjs/eslint-module'],
  eslint: { lintOnStart: false }
})
