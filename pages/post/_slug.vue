<template>
  <article class="">
    <div class="bg-dark-two text-white">
      <div class="container mx-auto py-10">
        <h1 class="text-4xl">{{ page.title }}</h1>
      </div>
    </div>
    <div class="container mx-auto py-2">
      <nuxt-content :document="page" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content("articles", params.slug)
      .where({ published: true })
      .fetch();

    return {
      page,
    };
  },
};
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content {
  & h2 {
    @apply text-2xl mt-4;
  }

  & h3 {
    @apply text-xl mt-4;
  }

  & p {
    @apply my-2;
  }

  & ul {
    @apply list-inside list-disc;
  }

  & ol {
    @apply list-inside list-decimal;
  }
}
</style>