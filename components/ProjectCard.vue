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
    class="relative w-full h-64 rounded-xl overflow-hidden bg-cover bg-center border border-custom group"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <!-- Overlay dégradé -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10 group-hover:backdrop-blur-sm group-focus:backdrop-blur-sm transition-transform duration-500 ease-in-out"
    />

    <!-- Card content -->
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

  <!-- Drawer detail -->
  <USlideover
    v-model="isModalOpen"
    :ui="{
      padding: 'p-4',
      width: 'overflow-y-auto',
    }"
  >
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">{{ title.toUpperCase() }}</h2>
      <UButton
        icon="i-material-symbols:close"
        @click="isModalOpen = false"
        variant="ghost"
        color="neutral"
      />
    </div>
    <p class="text-sm my-2">{{ subtitle }}</p>
    <ul class="flex gap-x-2 flex-wrap">
      <span class="text-xs self-center">Tags :</span>
      <li v-for="(tag, index) in tags" :key="index">
        <UBadge :label="tag" variant="subtle" color="primary" size="xs" />
      </li>
    </ul>

    <img :src="image" :alt="alt" class="rounded-xl my-8 border border-custom" />

    <p v-html="description" />

    <div v-if="repository || url" class="flex my-8 flex-wrap justify-center gap-8">
      <UButton
        v-if="repository"
        :label="'Voir le repository'"
        class="w-fit"
        variant="outline"
        color="neutral"
        :to="repository"
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
      />
    </div>
  </USlideover>
</template>
