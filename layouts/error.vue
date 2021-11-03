<template>
  <div class="mt-8">
    <div class="font-semibold text-4xl uppercase">
      <nav-link to="/">/</nav-link>
      <span>{{ error.statusCode }}</span>
    </div>

    <div
      class="my-32 text-gray-300 dark:text-gray-700 text-6xl font-light italic"
    >
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