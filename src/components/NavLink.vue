<template>
  <a :href="location"
     :rel="rel"
     :target="target"
     :data-astro-prefetch="prefetch ? '' : undefined"
     class="
     text-gray-600
     dark:text-gray-400
     underline
     hover:no-underline
    ">
    <slot></slot>
  </a>
</template>

<script lang="ts">
export default {
  props: {
    to: String,
    href: String,
    rel: String,
    prefetch: Boolean
  },
  computed: {
    location() {
      return this.$props.to ?? this.$props.href;
    },
    target() {
      return this.$props.to !== undefined ? undefined : "_blank";
    }
  }
};
</script>