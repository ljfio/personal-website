<template>
  <div class="container mx-auto py-16 px-4">
    <nuxt-link to="/">
      <div
        class="
          text-gray-800
          dark:text-gray-200
          space-x-4
          flex flex-row
          items-center
        "
      >
        <img
          src="//s.gravatar.com/avatar/8bf98d1d6ea81a5e467b030a5a0b4798?s=400"
          alt=""
          class="
            rounded-full
            w-16
            border-4 border-gray-800
            dark:border-gray-200
          "
        />
        <h1 class="text-4xl font-semibold">Luke Fisher</h1>
      </div>
    </nuxt-link>

    <nuxt />

    <div class="mt-16 text-gray-300 dark:text-gray-700 font-light">
      &copy; {{ year }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  head: {
    bodyAttrs: {
      class: "bg-gray-50 dark:bg-gray-900",
    },
  },
};
</script>