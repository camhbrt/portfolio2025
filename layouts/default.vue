<script setup lang="ts">
  import { useLocalePath } from "#i18n";
  import { useScroll } from "@vueuse/core";

  const { t, setLocale, locale } = useI18n();
  const localePath = useLocalePath();
  const colorMode = useColorMode();
  const currentWindow = ref<Window | null>(null);
  const { directions, y } = useScroll(currentWindow, { behavior: "smooth" });
  const isMobileMenuOpen = ref(false);
  const scrollDirection = ref();
  const isHeaderHidden = computed(() => scrollDirection.value === "bottom" && y.value > 10);
  const currentDate = new Date();
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

  watch(
    () => directions,
    () => {
      if (directions.bottom) scrollDirection.value = "bottom";
      if (directions.top) scrollDirection.value = "top";
    },
    { immediate: true, deep: true }
  );

  onMounted(() => {
    currentWindow.value = window;
  });
</script>

<template>
  <!-- Header -->
  <header
    ref="navbar"
    class="sticky z-10 top-4 flex justify-between gap-4 bg-gray-50/70 dark:bg-gray-800/80 border border-custom general-width mt-4 px-2 rounded-md min-w-max backdrop-blur-lg transition-transform ease-in-out duration-500"
    :class="{ '-translate-y-16': isHeaderHidden }"
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
        :aria-label="t('layout.showMenu')"
        class="sm:hidden"
        @click="isMobileMenuOpen = true"
      />
    </div>
  </header>
  <!-- Mobile menu -->
  <USlideover
    v-model="isMobileMenuOpen"
    class="sm:hidden"
    :ui="{
      padding: 'p-4',
      width: 'max-w-72',
    }"
  >
    <UButton
      color="gray"
      variant="ghost"
      icon="i-heroicons-x-mark-20-solid"
      class="ml-auto"
      square
      padded
      @click="isMobileMenuOpen = false"
    />
    <UVerticalNavigation
      :links="menu"
      @click="isMobileMenuOpen = false"
      :ui="{
        padding: 'py-2',
        size: 'text-base',
      }"
    />
    <p class="absolute bottom-0 my-4 mr-4 text-sm text-gray-600 dark:text-gray-400">
      {{ t("layout.footer") }} - {{ currentDate.getFullYear() }}
    </p>
  </USlideover>

  <main class="general-width flex-grow grid grid-cols-12">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="border-t border-custom sm:py-4 text-sm mt-16">
    <p class="hidden sm:block text-center text-gray-600 dark:text-gray-400">
      {{ t("layout.footer") }} - {{ currentDate.getFullYear() }}
    </p>
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
    @apply min-h-screen flex flex-col w-full bg-gradient-to-br from-blue-50 to-white dark:to-black dark:from-slate-950;
  }
  .general-width {
    @apply max-w-[960px] mx-8 lg:mx-auto;
    width: -webkit-fill-available;
  }
  .border-custom {
    @apply border-gray-300 dark:border-gray-600;
  }
</style>
