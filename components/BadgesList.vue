<script setup lang="ts">
  defineProps<{
    label: string;
    items: {
      label: string;
      icon?: string | undefined;
      description?: string | undefined;
    }[];
  }>();
</script>
<template>
  <section>
    <UDivider :label class="mt-10 mb-4" />
    <ul
      class="flex"
      :class="
        items.some((item) => item.description)
          ? ' flex-row gap-2 justify-evenly'
          : 'flex-wrap gap-3'
      "
    >
      <li
        v-for="skill in items"
        :key="skill.label"
        :class="skill.description ? 'flex flex-col flex-1 gap-2 place-items-center' : 'leading-6'"
      >
        <UBadge
          :label="skill.label"
          variant="solid"
          color="white"
          :icon="skill.icon"
          :trailing="!skill.description"
          size="sm"
        />
        <span v-if="skill.description" class="text-center text-sm">
          {{ skill.description }}
        </span>
      </li>
    </ul>
  </section>
</template>
