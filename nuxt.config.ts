import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Camille Hébert",
      link: [{ rel: "icon", href: "/daisy-logo.svg", type: "image/svg" }],
    },
  },

  colorMode: {
    preference: "dark",
  },

  compatibilityDate: "2024-11-01",

  css: ["~/assets/css/main.css"],

  devtools: { enabled: true },

  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en", "fr"],
    defaultLocale: "fr",
  },

  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/icon", "@nuxt/eslint", "@nuxtjs/i18n"],

  ssr: true,

  vite: {
    plugins: [tailwindcss()],
  },
});
