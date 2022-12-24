<template>
  <div class="my-8">
    <name-banner />

    <div class="mt-8">
      <div class="font-normal text-4xl">
        <nav-link to="/">&lt;</nav-link>
        <span>Resume</span>
      </div>

      <div class="mt-8 space-y-8">
        <div class="">
          <div class="text-4xl font-normal">Profile</div>

          <nuxt-content class="mt-4"
                        :document="profile"></nuxt-content>
        </div>

        <div class="">
          <h2 class="text-4xl font-normal">Experience</h2>
          <div class="my-6"
               v-for="role in experience"
               :key="role.slug">
            <div class="text-2xl">{{ role.title }} at {{ role.company }}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              {{ $moment(role.start).format("MMMM YYYY") }} -
              {{
                  role.finish ? $moment(role.finish).format("MMMM YYYY") : "Present"
              }}
            </div>
            <div>
              <nuxt-content :document="role"></nuxt-content>
            </div>
          </div>
        </div>

        <div class="">
          <h2 class="text-4xl font-normal">Achievements</h2>
          <div class="my-6"
               v-for="achievement in achievements"
               :key="achievement.slug">
            <div class="text-2xl">{{ achievement.title }}</div>
            <div>
              {{ achievement.description }}
            </div>
          </div>
        </div>

        <div class="font-normal text-4xl">
          <nav-link href="mailto:hire@ljf.io">Hire Me</nav-link>
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