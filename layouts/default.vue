<script setup lang="ts">
  const { t, setLocale, locale } = useI18n();
  import { useLocalePath } from "#i18n";

  const localePath = useLocalePath();
  const colorMode = useColorMode();
  const isMobileMenuOpen = ref(false);

  const menu = computed(() => [
    {
      label: t("layout.home"),
      to: localePath("/"),
    },
    {
      label: t("layout.about"),
      to: localePath("/about"),
    },
    {
      label: t("layout.projects"),
      to: localePath("/projects"),
    },
    {
      label: t("layout.contact"),
      to: localePath("/contact"),
    },
  ]);

  const setTheme = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  };
</script>

<template>
  <!-- Header -->
  <header
    class="sticky z-10 top-4 flex justify-between gap-4 border border-custom bg-gray-50/30 dark:bg-gray-200/5 general-width mt-4 px-2 rounded-md min-w-max backdrop-blur-lg"
  >
    <nuxt-link :to="localePath('/')" aria-label="Home page link" class="flex items-center gap-2">
      <img src="../public/daisy-logo.svg" class="h-8 w-8 xxs:h-12 xxs:w-12" aria-label="logo" />
      <span class="whitespace-nowrap text-sm xxs:text-base">Camille Hébert</span>
    </nuxt-link>
    <UHorizontalNavigation :links="menu" class="hidden sm:block w-fit" />
    <div class="flex">
      <UButton
        :icon="
          colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="gray"
        variant="ghost"
        :aria-label="t('layout.themeSelect')"
        @click="setTheme"
      />
      <UButton
        color="gray"
        variant="ghost"
        :aria-label="t('layout.langSelect')"
        :label="t('layout.lang')"
        @click="setLocale(locale === 'fr' ? 'en' : 'fr')"
      />
      <UButton
        icon="i-heroicons:bars-3-20-solid"
        color="gray"
        variant="ghost"
        :aria-label="t('layout.langSelect')"
        class="sm:hidden"
        @click="isMobileMenuOpen = true"
      />
    </div>
  </header>
  <!-- Mobile menu -->
  <USlideover v-model="isMobileMenuOpen" class="[&>*]:p-4 sm:hidden">
    <UButton
      color="gray"
      variant="ghost"
      icon="i-heroicons-x-mark-20-solid"
      class="ml-auto"
      square
      padded
      @click="isMobileMenuOpen = false"
    />
    <UVerticalNavigation :links="menu" @click="isMobileMenuOpen = false" />
    <p
      class="absolute bottom-0 my-4 mr-4 text-sm text-gray-600 dark:text-gray-400"
      v-html="t('layout.footer')"
    />
  </USlideover>

  <main class="general-width flex-grow grid grid-cols-12">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="border-t border-custom py-4 hidden sm:block text-sm">
    <p class="text-center text-gray-600 dark:text-gray-400" v-html="t('layout.footer')" />
  </footer>
</template>

<style>
  html {
    scrollbar-gutter: stable;
  }
  *::-webkit-scrollbar {
    display: block;
    width: 8px;
  }
  *::-webkit-scrollbar-button {
    display: none;
  }

  *::-webkit-scrollbar-track {
    background-color: #00000000;
  }

  *::-webkit-scrollbar-track-piece {
    background-color: #00000000;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #00000040;
    border: 1px solid #ffffff40;
    border-radius: 4px;
  }
  #__nuxt {
    @apply min-h-screen flex flex-col w-full bg-gradient-to-br from-blue-100 to-neutral-50 dark:to-black dark:from-slate-950;
  }
  .general-width {
    @apply max-w-[960px] mx-8 lg:mx-auto;
    width: -webkit-fill-available;
  }
  .border-custom {
    @apply border-gray-300 dark:border-gray-800;
  }
</style>
