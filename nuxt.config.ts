// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  plugins: ['~/plugins/arco-design'],
  modules: ['@nuxt/ui', '@nuxtjs/eslint-module'],
  eslint: { lintOnStart: false }
})
