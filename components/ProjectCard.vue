<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
  defineProps<{
    title: string;
    tags: string[];
    subtitle: string;
    description: string;
    repository?: {
      link: string;
      icon: string;
    };
    url?: string;
    image?: string;
    alt?: string;
  }>();

  const isDrawerOpen = ref(false);
</script>
<template>
  <UDrawer
    v-model:open="isDrawerOpen"
    direction="right"
    :ui="{ content: 'w-96 xl:w-[500px] pr-4' }"
  >
    <button
      class="relative w-full h-64 rounded-xl overflow-hidden bg-cover bg-center border border-custom group"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <!-- Overlay dégradé -->
      <div
        class="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/10 group-hover:backdrop-blur-xs group-focus:backdrop-blur-xs transition-transform duration-500 ease-in-out"
      />

      <!-- Card content -->
      <div class="absolute bottom-0 p-4 w-full text-white">
        <h3 class="text-lg font-bold">{{ title.toUpperCase() }}</h3>
        <p class="text-sm">{{ subtitle }}</p>
        <ul class="flex gap-2 flex-wrap mt-2">
          <li v-for="(tag, index) in tags" :key="index">
            <UBadge :label="tag" variant="subtle" color="neutral" size="sm" />
          </li>
        </ul>
      </div>
    </button>

    <!-- Drawer content -->
    <template #body>
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold">{{ title.toUpperCase() }}</h2>
        <UButton
          icon="i-material-symbols:close"
          variant="ghost"
          color="neutral"
          @click="isDrawerOpen = false"
        />
      </div>
      <p class="text-sm my-2">{{ subtitle }}</p>
      <ul class="flex gap-x-2 flex-wrap">
        <span class="text-xs self-center">Tags :</span>
        <li v-for="(tag, index) in tags" :key="index">
          <UBadge :label="tag" variant="subtle" color="primary" size="sm" />
        </li>
      </ul>

      <NuxtImg :src="image" :alt="alt" class="rounded-xl my-8 border border-custom" />

      <p v-html="description" />

      <div v-if="repository || url" class="flex my-8 flex-wrap justify-center gap-8">
        <UButton
          v-if="repository"
          :label="'Voir le repository'"
          class="w-fit"
          variant="outline"
          color="neutral"
          :trailing-icon="repository.icon"
          :to="repository.link"
          target="_blank"
          rel="noopener noreferrer"
        />
        <UButton
          v-if="url"
          :label="'Voir en live'"
          class="w-fit"
          variant="outline"
          color="neutral"
          :to="url"
          target="_blank"
          rel="noopener noreferrer"
          trailing-icon="i-mdi:open-in-new"
        />
      </div>
    </template>
  </UDrawer>
</template>
