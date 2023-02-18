<template>
  <nav class="bg-gray-200 dark:bg-gray-800 h-fit min-w-fit lg:sticky top-4 flex flex-col">
    <a class="px-4 py-2 block hover:bg-gray-300 hover:dark:bg-gray-700"
       v-for="heading in headings"
       :key="heading.slug"
       :href="`#${heading.slug}`">
      {{ heading.text }}
    </a>
  </nav>
</template>

<script lang="ts" setup>
import type { MarkdownHeading } from 'astro';

interface Props {
  headings: MarkdownHeading[];
}

const props = defineProps<Props>();

const { headings } = props;
</script>