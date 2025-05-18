<script setup lang="ts">
  const { t } = useI18n();

  const stepperItems = [
    {
      icon: "i-lucide-music",
      title: t("about.stepper.teaching.title"),
      descriptionHtml: t("about.stepper.teaching.descriptionHtml"),
    },
    {
      icon: "i-pajamas:retry",
      title: t("about.stepper.reconversion.title"),
      descriptionHtml: t("about.stepper.reconversion.descriptionHtml"),
    },
    {
      icon: "i-lucide-code-xml",
      title: t("about.stepper.development.title"),
      descriptionHtml: t("about.stepper.development.descriptionHtml"),
    },
  ];

  const hardSkills = [
    { label: "TypeScript", icon: "i-logos-typescript-icon" },
    { label: "Nuxt", icon: "i-logos-nuxt-icon" },
    { label: "Vue", icon: "i-logos-vue" },
    { label: "Tailwind", icon: "i-logos-tailwindcss-icon" },
    { label: "Pinia", icon: "i-logos-pinia" },
    { label: "Directus", icon: "i-simple-icons-directus" },
    { label: "Storybook", icon: "i-logos-storybook-icon" },
    { label: "GraphQL", icon: "i-logos-graphql" },
    { label: "Shadcn", icon: "i-simple-icons-shadcnui" },
    { label: "Vitest", icon: "i-logos-vitest" },
    { label: "Figma", icon: "i-logos-figma" },
  ];

  const softSkills = {
    title: t("about.softSkills.title"),
    cards: [
      {
        main: t("about.softSkills.empathetic"),
        footer: t("about.softSkills.empatheticFooter"),
      },
      {
        main: t("about.softSkills.flexible"),
        footer: t("about.softSkills.flexibleFooter"),
      },
      {
        main: t("about.softSkills.collaborative"),
        footer: t("about.softSkills.collaborativeFooter"),
      },
      {
        main: t("about.softSkills.curious"),
        footer: t("about.softSkills.curiousFooter"),
      },
      {
        main: t("about.softSkills.responsible"),
        footer: t("about.softSkills.responsibleFooter"),
      },
      {
        main: t("about.softSkills.transparent"),
        footer: t("about.softSkills.transparentFooter"),
      },
    ],
  };
</script>

<template>
  <main>
    <!-- 1. Resume section -->
    <section>
      <h1 class="text-center text-6xl font-bold">About me</h1>
      <UStepper orientation="vertical" :items="stepperItems" size="lg">
        <template #description="{ item }">
          <div v-html="item.descriptionHtml" />
        </template>
      </UStepper>
    </section>

    <!-- 2. Stack section -->
    <section class="my-20">
      <h2 class="text-4xl font-bold mb-10 text-center">Mes outils</h2>
      <ul class="flex flex-wrap gap-12 justify-center bg-muted border border-custom p-6">
        <li v-for="skill in hardSkills" :key="skill.label" class="flex gap-2">
          <UIcon :name="skill.icon" class="size-10 saturate-0" />
          <p class="font-semibold text-2xl">{{ skill.label }}</p>
        </li>
      </ul>
    </section>

    <!-- 3. Soft skills section -->
    <TextCardSection v-bind="softSkills" :is-title-centered="true" />
  </main>
</template>
