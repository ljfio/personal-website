<template>
  <a :href="location"
     :rel="rel"
     :target="target"
     class="
      text-gray-500
      hover:text-gray-900
      dark:hover:text-gray-100
      underline
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
  },
  computed: {
    location() {
      return this.$props.to ?? this.$props.href;
    },
    target() {
      return this.$props.to !== undefined ? "_self" : "_blank";
    }
  }
};
</script>