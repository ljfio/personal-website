<template>
  <nav class="menu">
    <div class="menu-button">
      <a href="#"
         v-on:click="toggleMenu">
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

const toggleMenu = (e: MouseEvent) => {
  open.value = !open.value;
};

const { links } = props;
</script>

<style lang="postcss">
nav.menu {
  @apply relative;

  .menu-button {
    a {
      @apply py-4 px-4 bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col space-y-2;

      span {
        @apply bg-gray-900 dark:bg-gray-100 h-0.5 w-6 block;
      }
    }
  }

  .menu-dropdown {
    @apply absolute right-0 mt-4 rounded-lg bg-gray-200 dark:bg-gray-800;

    .menu-links {
      @apply flex flex-col py-2;

      a {
        @apply block py-2 px-4 underline hover:no-underline;
      }
    }
  }
}
</style>