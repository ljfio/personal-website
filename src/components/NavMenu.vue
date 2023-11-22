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

    <div class="menu-container"
         :class="dropdownClass">

      <div class="menu-overlay">
        <div class="menu-background"
             v-on:click="toggleMenu">
        </div>

        <div class="menu-dropdown">
          <div class="menu-links">
            <a :href="link.url"
               v-for="link in links"
               :key="link.url">{{ link.label }}</a>
          </div>

          <div class="menu-dropdown-close">
            <a href="#"
               v-on:click="toggleMenu">
              &Cross; Exit
            </a>
          </div>
        </div>
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
  e.preventDefault();
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

  .menu-container {
    @apply fixed right-0 top-0 bottom-0 left-0 w-full h-full z-50;
  }

  .menu-overlay {
    @apply flex flex-row w-full h-full;

    .menu-background {
      @apply flex-grow bg-gray-400 dark:bg-gray-600 opacity-80 cursor-pointer;
    }
  }

  .menu-dropdown {
    @apply bg-gray-200 dark:bg-gray-800 text-4xl w-full md:w-96 px-8 flex flex-col;

    .menu-links {
      @apply flex flex-col w-full gap-6 mt-16 flex-grow;

      a {
        @apply block underline hover:no-underline;
      }
    }

    .menu-dropdown-close {
      @apply my-8;
    }
  }
}
</style>