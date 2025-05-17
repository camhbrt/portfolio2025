<script setup lang="ts">
  const { t } = useI18n();
</script>
<template>
  <section class="col-span-full flex flex-col gap-y-6 items-center justify-center">
    <h1 class="text-4xl xxs:text-5xl font-bold text-pretty text-center">
      {{ t("contact.title") }}
      <span class="text-primary">{{ t("contact.highlight") }}</span
      >.
    </h1>
    <UButton
      :label="t('contact.messageMe')"
      color="neutral"
      variant="outline"
      size="xl"
      to="mailto:camille.hebert22@gmail.com"
      trailing-icon="i-bx:bxs-paper-plane"
      class="px-12 w-fit mx-auto border-1"
    />
    <p class="text-center">
      {{ t("contact.socials") }}
    </p>
    <div class="flex flex-row justify-center gap-x-4">
      <UButton
        alt="linkedin"
        color="neutral"
        variant="outline"
        size="xs"
        target="_blank"
        no-opener
        no-referrer
        to="https://www.linkedin.com/in/camille-hebert-dev/"
        icon="i-basil:linkedin-solid"
      />
      <UButton
        alt="github"
        color="neutral"
        variant="outline"
        size="xs"
        target="_blank"
        no-opener
        no-referrer
        to="https://github.com/camhbrt"
        icon="i-mdi:github"
      />
    </div>
  </section>
</template>
