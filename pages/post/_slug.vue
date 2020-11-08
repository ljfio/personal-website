<template>
  <article class="">
    <div class="bg-dark-two text-white">
      <div class="container mx-auto py-10 px-4">
        <h1 class="text-5xl">{{ page.title }}</h1>
        <h2 class="text-2xl">{{ page.description }}</h2>
        <h3 class="mt-2">{{ $moment(page.publishedAt).format("LLL") }}</h3>
      </div>
    </div>
    <div class="container mx-auto py-4 px-4">
      <nuxt-content :document="page" />

      <div class="mt-10 mb-6 flex flex-row">
        <div class="flex-grow">
          <nuxt-link
            :to="{ name: 'post-slug', params: { slug: prev.slug } }"
            class="text-dark-two hover:text-brand"
            v-if="prev"
          >
            &larr; {{ prev.title }}
          </nuxt-link>
        </div>
        <div class="">
          <nuxt-link
            :to="{ name: 'post-slug', params: { slug: next.slug } }"
            class="text-dark-two hover:text-brand"
            v-if="next"
          >
            {{ next.title }} &rarr;
          </nuxt-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: this.page.title,
    };
  },
  async asyncData({ $content, params }) {
    const page = await $content("articles", params.slug)
      .where({ published: true })
      .fetch();

    const [prev, next] = await $content("articles")
      .where({ published: true })
      .sortBy("publishedAt", "desc")
      .only(["title", "slug"])
      .surround(page.slug)
      .fetch();

    return {
      page,
      prev,
      next,
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