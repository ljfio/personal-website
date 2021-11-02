<template>
  <div class="mt-8 text-gray-800">
    <div class="font-semibold text-4xl uppercase">
      <nuxt-link class="text-gray-400 hover:text-gray-900" to="/">/</nuxt-link>
      <nuxt-link class="text-gray-400 hover:text-gray-900" to="/blog"
        >Blog</nuxt-link
      >
    </div>

    <div class="my-8">
      <div class="flex leading-none flex-col space-y-2">
        <h1 class="text-4xl">{{ page.title }}</h1>
        <h2 class="text-lg">{{ page.description }}</h2>
        <p class="text-gray-400">
          {{ $moment(page.publishedAt).fromNow() }}
        </p>
      </div>
    </div>

    <div class="">
      <nuxt-content :document="page" />

      <div
        class="
          flex flex-row
          w-full
          mt-8
          font-semibold
          text-4xl
          uppercase
          justify-between
        "
      >
        <div>
          <nuxt-link
            :to="{ name: 'post-slug', params: { slug: next.slug } }"
            class="text-gray-400 hover:text-gray-800"
            v-if="next"
          >
            Next
          </nuxt-link>
        </div>

        <div>
          <nuxt-link
            :to="{ name: 'post-slug', params: { slug: prev.slug } }"
            class="text-gray-400 hover:text-gray-800"
            v-if="prev"
          >
            Previous
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: "descripton",
          name: "description",
          content: this.page.description,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const page = await $content("articles", params.slug)
      .where({ published: true })
      .fetch();

    const [next, prev] = await $content("articles")
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

  & a {
    @apply underline;

    &:hover {
      @apply text-gray-400;
    }
  }

  & ul,
  & ol {
    @apply list-inside ml-2;
  }

  & ul {
    @apply list-disc;
  }

  & ol {
    @apply list-decimal;
  }
}
</style>