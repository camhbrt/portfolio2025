<script setup lang="ts">
  const { t } = useI18n();

  const cardsSection = {
    title: t("home.highlights"),
    cards: [
      {
        main: t("home.twoYears"),
        footer: t("home.experience"),
      },
      {
        header: t("home.master"),
        main: t("home.vue"),
        footer: t("home.vueTools"),
      },
      {
        main: t("home.a11y"),
        footer: t("home.accessibility"),
      },
    ],
  };
</script>
<template>
  <main>
    <!--  -->
    <section class="grid grid-cols-12 my-20">
      <NuxtImg
        src="/portrait.svg"
        alt="Portrait de Camille Hébert"
        class="col-start-1 -col-end-1 xs:col-start-3 xs:-col-end-3 md:row-start-1 md:col-start-1 md:col-end-6 my-4 md:my-auto"
      />
      <div
        class="col-start-1 -col-end-1 md:-col-end-1 md:col-start-7 md:my-auto flex flex-col gap-y-10 mt-12"
      >
        <p class="text-2xl font-bold">
          {{ t("home.name") }}
        </p>
        <h1 class="text-4xl xxs:text-5xl font-bold text-pretty text-primary">
          {{ t("home.job") }}
        </h1>
        <p class="text-pretty text-lg/relaxed">{{ t("home.description") }}</p>

        <UButton
          :label="t('home.resume')"
          color="neutral"
          variant="outline"
          size="xl"
          target="_blank"
          :to="'/camille_hebert.pdf'"
          class="px-12 w-fit self-center"
        />
      </div>
    </section>

    <!-- Highlights Section -->
    <TextCardSection v-bind="cardsSection" />

    <UButton
      :to="$localePath('/about')"
      :label="t('home.seeMore')"
      icon="i-heroicons:arrow-right"
      color="neutral"
      variant="link"
      trailing
      class="flex justify-end"
    />
  </main>
</template>
