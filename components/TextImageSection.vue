<script setup lang="ts">
  withDefaults(
    defineProps<{
      title: string;
      image: string;
      description: string;
      isImageLeft?: boolean;
    }>(),
    {
      isImageLeft: true,
    }
  );
</script>
<template>
  <section class="grid grid-cols-12 my-24">
    <NuxtImg
      :src="image"
      alt=""
      class="col-start-2 -col-end-2 xs:col-start-3 xs:-col-end-3 my-auto aspect-square"
      :class="
        isImageLeft
          ? 'md:col-start-1 md:col-end-6 lg:col-start-2'
          : 'md:-col-end-1 md:col-start-8 md:my-auto lg:-col-end-2'
      "
    />
    <div
      class="col-start-1 -col-end-1 flex flex-col gap-y-10 mt-12"
      :class="
        isImageLeft
          ? 'md:-col-end-1 md:col-start-7 md:my-auto'
          : 'md:row-start-1 md:col-start-1 md:col-end-7'
      "
    >
      <h2 class="title-md text-primary">
        {{ title }}
      </h2>
      <div v-html="description" />
    </div>
  </section>
</template>
