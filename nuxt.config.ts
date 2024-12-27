// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", href: "/daisy-logo.svg", type: "image/svg" }],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en", "fr"], // used in URL path prefix
    defaultLocale: "fr", // default locale of your project for Nuxt pages and routings
  },
});
