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
    class="sticky top-0 flex gap-2 justify-between border border-custom bg-gray-200/20 dark:bg-gray-800/20 general-width mt-4 px-2 rounded-md min-w-max"
  >
    <nuxt-link :to="localePath('/')" aria-label="Home page link">
      <img src="../public/daisy-logo.svg" class="h-12 w-12" aria-label="logo" />
    </nuxt-link>
    <UHorizontalNavigation :links="menu" class="hidden sm:block" />
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
  </USlideover>

  <main class="general-width flex-grow">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="border-t border-custom py-4">
    <p class="text-center">Copyright © 2025 - Camille Hébert</p>
  </footer>
</template>

<style>
  #__nuxt {
    @apply min-h-screen flex flex-col w-full;
  }
  .general-width {
    @apply max-w-[960px] mx-8 lg:mx-auto;
    width: -webkit-fill-available;
  }
  .border-custom {
    @apply border-gray-200 dark:border-gray-800;
  }
</style>
