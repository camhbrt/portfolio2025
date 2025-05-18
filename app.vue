<script setup lang="ts">
  import { useLocalePath } from "#i18n";
  import { useScroll } from "@vueuse/core";

  const { t, setLocale, locale } = useI18n();
  const localePath = useLocalePath();
  const isMobileMenuOpen = ref(false);
  const currentDate = new Date();
  const menu = [
    {
      label: t("layout.home"),
      to: localePath("/"),
      onSelect: () => {
        isMobileMenuOpen.value = false;
      },
    },
    {
      label: t("layout.about"),
      to: localePath("/about"),
      onSelect: () => {
        isMobileMenuOpen.value = false;
      },
    },
    {
      label: t("layout.projects"),
      to: localePath("/projects"),
      onSelect: () => {
        isMobileMenuOpen.value = false;
      },
    },
    {
      label: t("layout.contact"),
      to: localePath("/contact"),
      onSelect: () => {
        isMobileMenuOpen.value = false;
      },
    },
  ];

  /**
   * Set the theme based on the current color mode.
   */
  const colorMode = useColorMode();
  const isColorMode = computed({
    get: () => colorMode.value === "dark",
    set: (val) => {
      colorMode.preference = val ? "dark" : "light";
    },
  });

  /**
   * Hide the header when scrolling down and show it when scrolling up.
   */
  const currentWindow = ref<Window | null>(null);
  const { directions, y } = useScroll(currentWindow, { behavior: "smooth" });
  const scrollDirection = ref();
  const isHeaderHidden = computed(() => scrollDirection.value === "bottom" && y.value > 10);
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

  /**
   * Sets the lang attribute in the html tag
   */
  useHead({
    htmlAttrs: {
      lang: locale.value,
    },
  });
</script>

<template>
  <UApp>
    <div class="min-h-[100dvh] flex flex-col">
      <!-- Desktop menu -->
      <header
        ref="navbar"
        class="max-w-[1200px] mx-8 xl:mx-auto w-auto xl:w-full mt-4 px-2 top-4 flex justify-between gap-4 blurry-card sticky z-[1]"
        :class="{ '-translate-y-16': isHeaderHidden }"
      >
        <NuxtLink :to="localePath('/')" aria-label="Home page link" class="flex items-center gap-2">
          <NuxtImg src="/daisy-logo.svg" class="h-8 w-8 xxs:h-12 xxs:w-12" aria-label="logo" />
          <span class="whitespace-nowrap text-sm xxs:text-base">Camille Hébert</span>
        </NuxtLink>
        <!-- Main navigation -->
        <UNavigationMenu
          orientation="horizontal"
          :items="menu"
          class="hidden sm:block w-fit"
          highlight
          variant="link"
          :ui="{ link: 'text-md' }"
        />
        <div class="flex gap-1">
          <!-- Color mode button -->
          <UTooltip :text="t('layout.themeSelect')">
            <USwitch
              v-model="isColorMode"
              :aria-label="t('layout.themeSelect')"
              unchecked-icon="i-heroicons-sun-20-solid"
              checked-icon="i-heroicons-moon-20-solid"
              color="primary"
              size="xl"
              class="my-auto"
              :ui="{
                icon: 'bg-inverted',
                base: 'outline outline-custom cursor-pointer focus-visible:ring-2 focus-visible:ring-primary',
              }"
            />
          </UTooltip>
          <!-- Locale change button -->
          <UTooltip :text="t('layout.langSelect')">
            <UButton
              color="neutral"
              variant="ghost"
              :aria-label="t('layout.langSelect')"
              :label="t('layout.lang')"
              :tooltip="t('layout.langSelect')"
              class="cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
              @click="setLocale(locale === 'fr' ? 'en' : 'fr')"
            />
          </UTooltip>
          <!-- Mobile drawer -->
          <UDrawer
            v-model:open="isMobileMenuOpen"
            direction="right"
            class="sm:hidden"
            :ui="{ content: 'z-20', overlay: 'z-10' }"
            :content="{
              trapfocus: true,
            }"
            title="Menu"
            description="Sélectionnez une page"
          >
            <!-- Button to open the drawer -->
            <UButton
              icon="i-heroicons:bars-3-20-solid"
              color="neutral"
              variant="ghost"
              :aria-label="t('layout.showMenu')"
              class="cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
            />
            <!-- Drawer content -->
            <template #body>
              <div class="flex flex-col h-full p-4">
                <UButton
                  color="neutral"
                  variant="outline"
                  icon="i-heroicons-x-mark-20-solid"
                  class="ml-auto mb-4"
                  square
                  padded
                  @click="isMobileMenuOpen = false"
                />
                <UNavigationMenu orientation="vertical" :items="menu" class="w-72" />
              </div>
            </template>
            <!-- Drawer footer -->
            <template #footer>
              <p class="absolute bottom-0 my-4 mr-4 text-sm text-muted">
                {{ t("layout.footer") }} - {{ currentDate.getFullYear() }}
              </p>
            </template>
          </UDrawer>
        </div>
      </header>

      <!-- Page content -->
      <NuxtPage class="max-w-[1200px] xl:w-[1200px] flex-grow mx-8 xl:mx-auto" />

      <!-- Footer Desktop-->
      <footer class="bottom-0 w-full border-t border-custom mt-16 sm:py-4 text-sm">
        <p class="hidden sm:block text-center text-dimmed dark:text-neutral-400">
          {{ t("layout.footer") }} - {{ currentDate.getFullYear() }}
        </p>
      </footer>
    </div>
  </UApp>
</template>
