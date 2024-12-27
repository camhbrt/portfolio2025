// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", href: "/daisy-logo.svg", type: "image/svg" }],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
});
