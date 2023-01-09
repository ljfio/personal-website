<template>
  <div class="flex flex-row gap-x-2 font-light text-sm">
    <a class="px-2 py-1 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 hover:dark:bg-gray-700 rounded"
       v-for="tag in tags"
       :key="tag"
       :href="`/tag/${tag}`">
      {{ tag }}
    </a>
  </div>
</template>

<script lang="ts" setup>
interface TagsProps {
  tags: string[];
};

defineProps<TagsProps>();
</script>