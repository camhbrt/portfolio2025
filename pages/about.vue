<script setup lang="ts">
  const { t } = useI18n();

  const resume = [
    {
      icon: "i-lucide-music",
      title: t("about.stepper.teaching.title"),
      descriptionHtml: t("about.stepper.teaching.descriptionHtml"),
      image: "/Ola_standing.svg",
    },
    {
      icon: "i-pajamas:retry",
      title: t("about.stepper.reconversion.title"),
      descriptionHtml: t("about.stepper.reconversion.descriptionHtml"),
      image: "/Ola_relaxing.svg",
    },
    {
      icon: "i-lucide-code-xml",
      title: t("about.stepper.development.title"),
      descriptionHtml: t("about.stepper.development.descriptionHtml"),
      image: "/Ola_home_office.svg",
    },
  ];

  const hardSkills = [
    { label: "TypeScript", icon: "i-mdi-language-typescript" },
    { label: "Nuxt", icon: "i-mdi-nuxt" },
    { label: "Vue", icon: "i-mdi-vuejs" },
    { label: "Tailwind", icon: "i-mdi-tailwind" },
    { label: "Pinia", icon: "i-logos-pinia" },
    { label: "Directus", icon: "i-simple-icons-directus" },
    { label: "Storybook", icon: "i-cib-storybook" },
    { label: "GraphQL", icon: "i-mdi-graphql" },
    { label: "Shadcn", icon: "i-simple-icons-shadcnui" },
    { label: "Vitest", icon: "i-simple-icons-vitest" },
    { label: "Figma", icon: "i-simple-icons-figma" },
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
    <!-- Resume section -->
    <TextImageSection
      v-for="(item, index) in resume"
      :key="index"
      :title="item.title"
      :image="item.image"
      :description="item.descriptionHtml"
      :is-image-left="index % 2 === 0"
    />

    <!-- Stack section -->
    <section class="my-20">
      <h2 class="text-4xl font-bold mb-10 text-center">Mes outils</h2>
      <ul class="flex flex-wrap gap-6 xs:gap-12 justify-center bg-muted border border-custom p-6">
        <li v-for="skill in hardSkills" :key="skill.label" class="flex gap-2">
          <UIcon :name="skill.icon" class="size-8 xs:size-10 saturate-0" />
          <p class="font-semibold text-xl xs:text-2xl">{{ skill.label }}</p>
        </li>
      </ul>
    </section>

    <!-- Soft skills section -->
    <TextCardSection v-bind="softSkills" :is-title-centered="true" />
  </main>
</template>
