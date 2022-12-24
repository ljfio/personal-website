<template>
  <div class="mt-8">
    <div class="font-normal text-4xl">
      <nav-link to="/">&lt;</nav-link>
      <span>Blog</span>
      <span v-if="number > 1"> &bull; {{ number }}</span>
    </div>

    <div class="my-8 leading-none flex flex-col space-y-2"
         v-for="page in pages"
         :key="page.slug">
      <h2 class="text-4xl">
        <nuxt-link class="underline hover:text-gray-400"
                   :to="{ name: 'post-slug', params: { slug: page.slug } }">
          {{ page.title }}
        </nuxt-link>
      </h2>

      <p class="text-lg italic">{{ page.description }}</p>

      <p class="text-gray-400 dark:text-gray-600">
        {{ $moment(page.published).fromNow() }}
      </p>
    </div>

    <div class="text-center"
         v-if="pages.length == 0">
      No articles to display
    </div>

    <div class="
        flex flex-row
        w-full
        mt-8
        font-normal
        text-4xl
        justify-between
      ">
      <div>
        <nav-link :to="{ name: 'blog-number', params: { number: number - 1 } }"
                  v-if="number > 1">
          Previous
        </nav-link>
      </div>

      <div>
        <nav-link :to="{ name: 'blog-number', params: { number: number + 1 } }"
                  v-if="more">
          Next
        </nav-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
  head() {
    return {
      title: (this.number > 1 ? `Page ${this.number} - ` : "") + "Blog",
    };
  },
  async asyncData({ $content, params }) {
    const limit = 5;

    const number = params.number ? Number.parseInt(params.number) : 1;

    const skip = number * limit - limit;

    const pages = await $content("articles")
      .only(["title", "description", "slug", "published"])
      .sortBy("published", "desc")
      .limit(limit)
      .skip(skip)
      .fetch();

    var more = false;

    if (pages.length == limit) {
      const [_, next] = await $content("articles")
        .only(["slug"])
        .sortBy("published", "desc")
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