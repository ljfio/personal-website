<template>
  <div class="mt-8">
    <div class="font-semibold text-4xl uppercase">
      <nuxt-link class="text-gray-400 hover:text-gray-900" to="/">/</nuxt-link>
      <span>{{ error.statusCode }}</span>
    </div>

    <div class="mt-32 text-gray-300 text-6xl font-light italic">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  head() {
    return {
      title: this.error.statusCode,
    };
  },
};
</script>