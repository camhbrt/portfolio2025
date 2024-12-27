<script setup lang="ts">
  const { t, setLocale, locale } = useI18n();
  import { useLocalePath } from "#i18n";

  const localePath = useLocalePath();
  const colorMode = useColorMode();

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
  <header class="flex border border-gray-200 dark:border-gray-800">
    <UHorizontalNavigation :links="menu" />
    <UButton
      :icon="colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
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
  </header>

  <slot />

  <!-- Footer -->
  <footer>
    <p>Footer</p>
  </footer>
</template>
