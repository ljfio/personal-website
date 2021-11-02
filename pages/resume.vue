<template>
  <div class="mt-8 text-gray-800 dark:text-gray-200">
    <div class="font-semibold text-4xl uppercase">
      <nuxt-link
        class="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        to="/"
        >/</nuxt-link
      >
      <span>Resume</span>
    </div>

    <div class="mt-8 space-y-8">
      <div class="">
        <div class="text-4xl semibold">Profile</div>

        <nuxt-content class="mt-4" :document="profile"></nuxt-content>
      </div>

      <div class="">
        <h2 class="text-4xl semibold">Experience</h2>
        <div
          class="my-4 text-xl leading-none"
          v-for="role in experience"
          :key="role.slug"
        >
          {{ role.title }} at {{ role.company }}
          <div class="pt-2 text-sm text-gray-500">
            {{ $moment(role.start).format("MMMM YYYY") }} -
            {{
              role.finish ? $moment(role.finish).format("MMMM YYYY") : "Present"
            }}
          </div>
        </div>
      </div>

      <div class="">
        <h2 class="text-4xl semibold">Achievements</h2>
        <div
          class="my-4 text-xl leading-none"
          v-for="achievement in achievements"
          :key="achievement.slug"
        >
          {{ achievement.title }}
          <div class="pt-2 text-sm text-gray-500">
            {{ achievement.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Resume",
    };
  },
  async asyncData({ $content }) {
    const profile = await $content("resume/profile").fetch();

    const experience = await $content("resume/experience")
      .sortBy("start", "desc")
      .fetch();

    const achievements = await $content("resume/achievements").fetch();

    return {
      profile,
      experience,
      achievements,
    };
  },
};
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content {
  @apply text-gray-800 dark:text-gray-200;

  & p {
    @apply my-2;
  }

  & a {
    @apply underline;

    &:hover {
      @apply text-gray-400;
    }
  }
}
</style>