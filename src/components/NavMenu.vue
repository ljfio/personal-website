<template>
  <nav class="menu">
    <div class="menu-button">
      <a href="#"
         :on-click="openMenu">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div class="menu-dropdown"
         :class="dropdownClass">
      <div class="menu-links">
        <a :href="link.url"
           v-for="link in links"
           :key="link.url">{{ link.label }}</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  links: Link[];
}

interface Link {
  label: string;
  url: string;
}

const props = defineProps<Props>();

const open = ref<boolean>(false);

const dropdownClass = computed(() =>
  open.value ? 'block' : 'hidden'
);

const openMenu = (e: MouseEvent) => {
  open.value = !open.value;
}

const { links } = props;
</script>

<style lang="postcss">
nav.menu {
  .menu-button {
    a {
      @apply py-4 px-4 bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col space-y-2;

      span {
        @apply bg-gray-900 dark:bg-gray-100 h-0.5 w-8 block;
      }
    }
  }

  .menu-dropdown {
    @apply absolute right-0 top-0 left-0;

    .menu-links {
      @apply flex flex-col;

      a {
        @apply block w-24 py-2 px-4 bg-gray-200 dark:bg-gray-800;
      }
    }
  }
}
</style>