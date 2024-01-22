// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  plugins: ['~/plugins/arco-design'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  eslint: {
    lintOnStart: false
  },
  tailwindcss: {
    viewer: false
  }
})
