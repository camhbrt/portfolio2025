<script setup lang="ts">
  const { t } = useI18n();
</script>
<template>
  <section class="grid grid-cols-12">
    <div class="col-start-1 -col-end-1 md:col-end-7 md:my-auto flex flex-col gap-y-4 mt-12">
      <p class="text-2xl font-bold">
        {{ t("home.name") }}
      </p>
      <h1 class="text-4xl xxs:text-5xl font-bold text-pretty text-primary">{{ t("home.job") }}</h1>
      <p class="text-pretty">{{ t("home.description") }}</p>
      <div class="flex flex-wrap gap-4">
        <UButton
          :label="t('home.resume')"
          color="neutral"
          variant="outline"
          target="_blank"
          :to="'/camille_hebert.pdf'"
          class="px-12"
        />
        <UButton
          :to="$localePath('/about')"
          :label="t('home.seeMore')"
          icon="i-heroicons:arrow-right"
          color="neutral"
          variant="link"
          trailing
          class="ml-auto transition-all ease-in-out hover:group-last:animate-ping"
        />
      </div>
    </div>
    <NuxtImg
      src="/portrait.svg"
      alt="Portrait de Camille Hébert"
      class="col-start-1 -col-end-1 xs:col-start-3 xs:-col-end-3 md:row-start-1 md:-col-end-1 md:col-start-8 my-4 md:my-auto"
    />
  </section>
</template>
