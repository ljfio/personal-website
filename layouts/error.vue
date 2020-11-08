<template>
  <div class="container mx-auto text-center px-4">
    <div v-if="error.statusCode == 404">
      <div class="py-6">
        <h1 class="text-5xl">Four oh Four</h1>
        <h3 class="text-xl">{{ step.say }}</h3>
      </div>

      <div class="text-lg my-2 flex flex-col space-y-2">
        <div>
          <nuxt-link class="hover:text-brand" :to="{ name: 'home' }"
            >Take me home</nuxt-link
          >
        </div>
        <div>
          <a class="hover:text-brand" href="#" v-on:click.prevent="react">{{
            step.react
          }}</a>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="py-6">
        <h1 class="text-5xl">{{ error.statusCode }}</h1>
        <h3 class="text-xl">{{ error.message }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  head() {
    return {
      title: this.error.statusCode,
    };
  },
  data() {
    return {
      conversation: [
        { say: "Go home. You are drunk!", react: "Stick around" },
        {
          say: "You are not welcome on this page",
          react: "Protest hateful message",
        },
        { say: "No point crying over spilled milk", react: "Wipe tears away" },
        { say: "Do you feel better now?", react: "*Shrug*" },
        {
          say: "You are still in the wrong place",
          react: "Where should I be?",
        },
        {
          say: "Anywhere but here, try the home page",
          react: "Drag yourself home",
        },
      ],
      step: {
        say: "You have stumbled upon the wrong page on the web",
        react: "You are lying",
      },
      counter: 0,
    };
  },
  methods: {
    react() {
      if (this.counter < this.conversation.length) {
        this.step = this.conversation[this.counter++];
      } else {
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style>
</style>