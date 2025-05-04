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
  <div>
    <!-- Header -->
    <header
      ref="navbar"
      class="sticky z-10 top-4 flex justify-between gap-4 bg-gray-50/70 dark:bg-gray-800/80 border border-custom general-width mt-4 px-2 rounded-md min-w-max backdrop-blur-lg transition-transform ease-in-out duration-500"
      :class="{ '-translate-y-16': isHeaderHidden }"
    >
      <NuxtLink :to="localePath('/')" aria-label="Home page link" class="flex items-center gap-2">
        <NuxtImg src="/daisy-logo.svg" class="h-8 w-8 xxs:h-12 xxs:w-12" aria-label="logo" />
        <span class="whitespace-nowrap text-sm xxs:text-base">Camille Hébert</span>
      </NuxtLink>
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
        :ui="{
          padding: 'py-2',
          size: 'text-base',
        }"
        @click="isMobileMenuOpen = false"
      />
      <p class="absolute bottom-0 my-4 mr-4 text-sm text-gray-600 dark:text-gray-400">
        {{ t("layout.footer") }} - {{ currentDate.getFullYear() }}
      </p>
    </USlideover>

    <main class="general-width grow grid grid-cols-12">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-custom sm:py-4 text-sm mt-16">
      <p class="hidden sm:block text-center text-gray-600 dark:text-gray-400">
        {{ t("layout.footer") }} - {{ currentDate.getFullYear() }}
      </p>
    </footer>
  </div>
</template>
