<template>
  <div class="container mx-auto">
    <h1 class="text-5xl">Luke's Life Log</h1>

    <div class="mt-2" v-for="page in pages" :key="page.slug">
      <h2 class="text-3xl">
        <nuxt-link
          class="hover:text-brand"
          :to="{ name: 'post-slug', params: { slug: page.slug } }"
        >
          {{ page.title }}
        </nuxt-link>
      </h2>

      <p class="font-light">{{ page.description }}</p>

      <p>{{ $moment(page.publishedAt).format("LLL") }}</p>
    </div>

    <div class="text-center" v-if="pages.length == 0">
      No articles to display
    </div>

    <div class="flex flex-row w-full">
      <div v-if="number > 1">
        <nuxt-link
          :to="{ name: 'blog-number', params: { number: number - 1 } }"
          class="border rounded px-4 py-4"
        >
          Previous
        </nuxt-link>
      </div>
      <div v-if="more" class="border rounded px-4 py-4">
        <nuxt-link
          :to="{ name: 'blog-number', params: { number: number + 1 } }"
        >
          Next
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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