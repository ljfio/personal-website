<template>
  <div class="mt-8 text-gray-800">
    <div class="font-semibold text-4xl uppercase">
      <nuxt-link class="text-gray-400 hover:text-gray-900" to="/">/</nuxt-link>
      <span>About</span>
    </div>

    <nuxt-content class="mt-8" :document="content"></nuxt-content>
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
    const content = await $content("about").fetch();

    return {
      content,
    };
  },
};
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content {
  @apply text-gray-800;

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