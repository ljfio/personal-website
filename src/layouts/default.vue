<template>
  <div class="container mx-auto px-4 py-6">
    <nuxt />

    <div class="mt-16 text-gray-300 dark:text-gray-700 font-light">
      &copy; {{ year }} &bull;
      <a target="_blank"
         :href="commit_url">{{ commit_ref }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      commit_ref: process.env.COMMIT_SHA?.substring(0, 7) || "dev",
      commit_url: `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/commit/${process.env.COMMIT_SHA}`,
    };
  },
};
</script>