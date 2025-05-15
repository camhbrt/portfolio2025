<script setup lang="ts">
  defineProps<{
    title: string;
    cards: {
      header?: string;
      main: string;
      footer?: string;
      icon?: string;
    }[]; //array of 3
  }>();
</script>
<template>
  <section class="grid grid-cols-12 my-24">
    <h2 class="row-start-1 col-span-full text-4xl font-bold my-12">{{ title }}</h2>
    <ul
      class="w-full col-start-1 -col-end-1 lg:col-start-2 lg:-col-end-2 grid xs:grid-cols-2 md:grid-cols-3 gap-12"
    >
      <UCard
        v-for="card in cards"
        :key="card.main"
        as="li"
        variant="subtle"
        class="text-center w-full shadow-2xl shadow-neutral-200 dark:shadow-neutral-900 [&>div]:h-full [&>div]:flex [&>div]:flex-col [&>div]:justify-center"
      >
        <p class="text-lg font-semibold">{{ card.header }}</p>
        <p class="text-4xl text-primary font-bold">{{ card.main }}</p>
        <p class="text-lg font-semibold">{{ card.footer }}</p>
      </UCard>
    </ul>
  </section>
</template>
