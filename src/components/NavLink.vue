<template>
  <span class="
      text-gray-400
      dark:text-gray-600
      hover:text-gray-900
      dark:hover:text-gray-100
      underline
    ">
    <nuxt-link v-if="to"
               :to="to">
      <slot></slot>
    </nuxt-link>
    <a v-else-if="href"
       :href="href"
       :rel="rel"
       target="_blank">
      <slot></slot>
    </a>
  </span>
</template>

<script>
export default {
  props: ["to", "href", "rel"],
};
</script>