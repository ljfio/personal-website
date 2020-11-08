<template>
  <div class="container mx-auto">
    <h1 class="text-5xl">Luke's Life Log</h1>

    <div class="" v-for="page in pages" :key="page.slug">
      <h2 class="text-3xl">
        <nuxt-link
          class="hover:text-brand"
          :to="{ name: 'post-slug', params: { slug: page.slug } }"
        >
          {{ page.title }}
        </nuxt-link>
      </h2>

      <p class="font-light">{{ page.description }}</p>
    </div>

    <div class="" v-if="pages.length"></div>

    <div class="flex flex-row">
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
      .only(["title", "description", "slug"])
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
        .surround(pages[limit - 1], { before: 0, after: 1 })
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