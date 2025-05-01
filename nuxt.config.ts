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

  modules: ["@nuxtjs/i18n", "@nuxt/ui", "@nuxt/image"],

  tailwindcss: {
    configPath: "tailwind.config.ts",
  },

  ssr: true,
  compatibilityDate: "2025-03-17",
});