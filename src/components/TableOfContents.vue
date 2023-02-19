<template>
  <nav class="bg-gray-200 dark:bg-gray-800 h-fit min-w-fit rounded-md lg:sticky top-8 flex flex-col mb-8 py-2">
    <p class="px-4 py-2 font-bold text-lg">
      Contents
    </p>

    <a class="px-4 py-2 block underline hover:no-underline"
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