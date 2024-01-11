// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@unocss/nuxt', ['@nuxtjs/eslint-module', { lintOnStart: false }]]
})
