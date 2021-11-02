<template>
  <div class="mt-8 text-gray-800">
    <div class="font-semibold text-4xl uppercase">
      <nuxt-link class="text-gray-400 hover:text-gray-900" to="/">/</nuxt-link>
      <span>Blog</span>
      <span v-if="number > 1">/ {{ number }}</span>
    </div>

    <div
      class="my-8 leading-none flex flex-col space-y-2"
      v-for="page in pages"
      :key="page.slug"
    >
      <h2 class="text-4xl">
        <nuxt-link
          class="underline hover:text-gray-400"
          :to="{ name: 'post-slug', params: { slug: page.slug } }"
        >
          {{ page.title }}
        </nuxt-link>
      </h2>

      <p class="text-lg">{{ page.description }}</p>

      <p class="text-gray-400">{{ $moment(page.publishedAt).fromNow() }}</p>
    </div>

    <div class="text-center" v-if="pages.length == 0">
      No articles to display
    </div>

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
          :to="{ name: 'blog-number', params: { number: number - 1 } }"
          class="text-gray-400 hover:text-gray-800"
          v-if="number > 1"
        >
          Previous
        </nuxt-link>
      </div>

      <div>
        <nuxt-link
          :to="{ name: 'blog-number', params: { number: number + 1 } }"
          class="text-gray-400 hover:text-gray-800"
          v-if="more"
        >
          Next
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: (this.number > 1 ? `Page ${this.number} - ` : "") + "Blog",
    };
  },
  async asyncData({ $content, params }) {
    const limit = 5;

    const number = params.number ?? 1;

    const skip = number * limit - limit;

    const pages = await $content("articles")
      .where({ published: true })
      .only(["title", "description", "slug", "publishedAt"])
      .sortBy("publishedAt", "desc")
      .limit(limit)
      .skip(skip)
      .fetch();

    var more = false;

    if (pages.length == limit) {
      const [_, next] = await $content("articles")
        .where({ published: true })
        .only(["slug"])
        .sortBy("publishedAt", "desc")
        .surround(pages[limit - 1].slug)
        .fetch();

      if (next) {
        more = true;
      }
    }

    return {
      pages,
      number,
      more,
    };
  },
};
</script>

<style>
</style>