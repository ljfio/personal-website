<template>
  <div class="mt-8 text-gray-800">
    <div class="font-semibold text-4xl uppercase">
      <nuxt-link class="text-gray-400 hover:text-gray-900" to="/">/</nuxt-link>
      <span>About</span>
    </div>

    <nuxt-content :document="content"></nuxt-content>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About",
    };
  },
  async asyncData({ $content }) {
    const content = await $content("splash").fetch();

    return {
      content,
    };
  },
};
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content {
  @apply mt-8 text-gray-800;

  & p {
    @apply my-2;
  }

  & a {
    @apply underline;

    &:hover {
      @apply text-gray-400;
    }
  }
}
</style>