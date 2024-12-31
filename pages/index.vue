<script setup lang="ts">
  const { t } = useI18n();
</script>
<template>
  <div class="col-start-1 -col-end-1 md:col-end-7 md:my-auto flex flex-col gap-y-4 mt-12">
    <p class="text-2xl font-bold">
      {{ t("home.name") }}
    </p>
    <h1 class="text-4xl xxs:text-5xl font-bold text-pretty">{{ t("home.job") }}</h1>
    <p class="text-pretty">{{ t("home.description") }}</p>
    <div class="flex flex-wrap gap-4">
      <UButton
        :label="t('home.resume')"
        color="black"
        variant="solid"
        target="_blank"
        :to="'/camille_hebert.pdf'"
      />
      <UButton
        :to="$localePath('/about')"
        :label="t('home.seeMore')"
        icon="i-heroicons:arrow-right"
        color="black"
        variant="link"
        trailing
        class="hover:no-underline transition-all ease-in-out hover:animate-zoom-in-out ml-auto"
      />
    </div>
  </div>
  <img
    src="../public/portrait.svg"
    alt="Portrait de Camille Hébert"
    class="col-start-1 -col-end-1 xs:col-start-3 xs:-col-end-3 md:row-start-1 md:-col-end-1 md:col-start-8 my-4 md:my-auto"
  />
</template>
