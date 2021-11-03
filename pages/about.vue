<template>
  <div class="mt-8">
    <div class="font-semibold text-4xl uppercase">
      <nav-link to="/">/</nav-link>
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