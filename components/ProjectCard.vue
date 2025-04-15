<script setup lang="ts">
  defineProps<{
    title: string;
    tags: string[];
    subtitle: string;
    description: string;
    repository?: string;
    url?: string;
    image?: string;
    alt?: string;
  }>();

  const isModalOpen = ref(false);
</script>
<template>
  <button
    @click="isModalOpen = true"
    class="relative w-full h-64 rounded-xl overflow-hidden bg-cover bg-center"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <!-- Overlay dégradé -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />

    <!-- Contenu -->
    <div class="absolute bottom-0 p-4 text-white">
      <h3 class="text-lg font-bold">{{ title.toUpperCase() }}</h3>
      <p class="text-sm">{{ subtitle }}</p>
      <ul class="flex gap-2 flex-wrap mt-2">
        <li v-for="(tag, index) in tags" :key="index">
          <UBadge :label="tag" variant="solid" color="white" size="sm" />
        </li>
      </ul>
    </div>
  </button>

  <USlideover
    v-model="isModalOpen"
    :ui="{
      padding: 'p-4',
      width: 'overflow-y-auto',
    }"
  >
    <h3 class="text-lg font-bold">{{ title.toUpperCase() }}</h3>
    <p class="text-sm">{{ subtitle }}</p>
    <ul class="flex gap-2 flex-wrap">
      <li v-for="(tag, index) in tags" :key="index">
        <UBadge :label="tag" variant="solid" color="white" size="sm" />
      </li>
    </ul>

    <img :src="image" :alt="alt" class="rounded-xl my-4" />

    <p v-html="description" />
    <UButton :href="repository" :label="'Voir le repository'" />
    <UButton :href="url" :label="'Voir en live'" />
  </USlideover>
</template>
