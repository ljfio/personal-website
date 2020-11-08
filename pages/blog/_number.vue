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

    <div class="" v-if="pages.length == 5">
      <nuxt-link
        :to="{ name: 'blog-number', params: { number: number + 1 } }"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const number = params.number ?? 1;

    const skip = number * 5 - 5;

    const pages = await $content("articles")
      .only(["title", "description", "slug"])
      .sortBy("updatedAt", "desc")
      .limit(5)
      .skip(skip)
      .fetch();

    return {
      pages,
      number,
    };
  },
};
</script>

<style>
</style>