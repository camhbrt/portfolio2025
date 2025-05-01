<script setup lang="ts">
  const { t } = useI18n();

  const pageContent = {
    career: {
      label: t("career.background"),
      slot: "career",
      content: [t("career.careerChange"), t("career.teachingExperience"), t("career.currentJob")],
    },
    resume: {
      label: t("resume.label"),
      slot: "resume",
      content: [
        {
          type: "work",
          date: t("resume.work.netatmo.date"),
          label: t("resume.work.netatmo.title"),
          content: t("resume.work.netatmo.description"),
        },
        {
          type: "study",
          date: t("resume.education.ada.date"),
          label: t("resume.education.ada.title"),
          content: t("resume.education.ada.description"),
        },
        {
          type: "work",
          date: t("resume.work.chantemerle.date"),
          label: t("resume.work.chantemerle.title"),
          content: t("resume.work.chantemerle.description"),
        },
        {
          type: "study",
          date: t("resume.education.master.date"),
          label: t("resume.education.master.title"),
          content: t("resume.education.master.description"),
        },
        {
          type: "work",
          date: t("resume.work.mcdonalds.date"),
          label: t("resume.work.mcdonalds.title"),
          content: t("resume.work.mcdonalds.description"),
        },
        {
          type: "study",
          date: t("resume.education.licence.date"),
          label: t("resume.education.licence.title"),
          content: t("resume.education.licence.description"),
        },
      ],
    },
    skills: {
      label: t("skills.skills"),
      slot: "skills",
      content: [
        {
          label: t("skills.softSkills"),
          items: [
            { label: t("skills.creativity") },
            { label: t("skills.empathy") },
            { label: t("skills.aestheticSense") },
            { label: t("skills.organization") },
            { label: t("skills.adaptability") },
            { label: t("skills.collaboration") },
            { label: t("skills.workEthic") },
            { label: t("skills.detailOrientation") },
          ],
        },
        {
          label: t("skills.hardSkills"),
          items: [
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
          ],
        },
        {
          label: t("skills.languages"),
          items: [
            {
              label: t("skills.french"),
              description: t("skills.mothersTongue"),
              icon: "i-flagpack-fr",
            },
            {
              label: t("skills.english"),
              description: t("skills.advanced"),
              icon: "i-flagpack-gb-ukm",
            },
            {
              label: t("skills.japanese"),
              description: t("skills.beginner"),
              icon: "i-flagpack-jp",
            },
          ],
        },
      ],
    },
  };

  const tabs = computed(() =>
    Object.entries(pageContent).map(([key, value]) => ({ label: value.label, slot: value.slot }))
  );
</script>

<template>
  <NuxtImg
    src="/undraw_programmer_1tdi.svg"
    alt="Illustration de développeuse informatique"
    class="col-start-1 -col-end-1 xs:col-start-4 xs:-col-end-4 md:col-start-1 md:col-end-5 lg:col-end-6 my-4 md:mt-12 border-8 rounded-full border-gray-700 contrast-150"
  />
  <UTabs
    :items="tabs"
    :default-index="1"
    class="col-start-1 -col-end-1 md:col-start-6 lg:col-start-7 md:mt-12"
  >
    <!-------------- Career section -------------->
    <template #career>
      <div class="my-8">
        <p v-for="text in pageContent.career.content" class="my-8 indent-6" v-html="text" />
      </div>
    </template>

    <!-------------- Resume section -------------->
    <template #resume>
      <UAccordion :items="pageContent.resume.content" :ui="{ wrapper: 'flex flex-col w-full' }">
        <template #default="{ item, index, open }">
          <UButton
            color="gray"
            variant="ghost"
            class="border-b border-gray-200 dark:border-gray-700"
            :ui="{
              rounded: 'rounded-none',
              padding: { sm: 'p-3' },
            }"
          >
            <template #leading>
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center -my-1"
                :class="
                  item.type === 'work'
                    ? 'bg-primary-500 dark:bg-primary-400'
                    : 'border border-primary-500 dark:border-primary-400'
                "
              >
                <UIcon
                  :name="
                    item.type === 'work'
                      ? 'i-material-symbols-work-outline'
                      : 'i-material-symbols-school-outline'
                  "
                  class="w-4 h-4"
                  :class="
                    item.type === 'work'
                      ? 'text-white dark:text-gray-900'
                      : 'text-primary-500 dark:text-primary-400'
                  "
                />
              </div>
            </template>

            <span class="truncate mr-auto"> {{ item.label }}</span>

            <template #trailing>
              <UBadge
                :label="item.date"
                size="xs"
                :variant="item.type === 'work' ? 'subtle' : 'outline'"
              />
              <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 transform transition-transform duration-200"
                :class="[open && 'rotate-90']"
              />
            </template>
          </UButton>
        </template>
      </UAccordion>
    </template>

    <!-------------- Skills section -------------->
    <template #skills>
      <BadgesList
        v-for="domain in pageContent.skills.content"
        :key="domain.label"
        v-bind="domain"
      />

      <div class="flex justify-end">
        <UButton
          :to="$localePath('/projects')"
          :label="t('skills.discoverProjects')"
          icon="i-heroicons:arrow-right"
          color="black"
          variant="link"
          trailing
          class="hover:no-underline transition-all ease-in-out hover:animate-zoom-in-out mt-8"
        />
      </div>
    </template>
  </UTabs>
</template>
