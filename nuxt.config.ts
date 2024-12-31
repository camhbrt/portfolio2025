// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Camille Hébert",
      link: [{ rel: "icon", href: "/daisy-logo.svg", type: "image/svg" }],
    },
  },
  devtools: { enabled: true },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en", "fr"],
    defaultLocale: "fr",
  },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  tailwindcss: {
    configPath: "tailwind.config.ts",
  },
});
