<template>
  <div class="mt-8">
    <nav>
      <ul class="text-4xl uppercase font-semibold leading-none space-y-4">
        <li>
          <nuxt-link to="/about" class="text-gray-400 hover:text-gray-900"
            >About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/resume" class="text-gray-400 hover:text-gray-900"
            >Resume</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/blog" class="text-gray-400 hover:text-gray-900"
            >Blog</nuxt-link
          >
        </li>
        <li>
          <a
            target="_blank"
            class="text-gray-400 hover:text-gray-900"
            href="https://github.com/ljfio"
            >Code</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="text-gray-400 hover:text-gray-900"
            href="https://linkedin.com/in/ljfio"
            >Connect</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="text-gray-400 hover:text-gray-900"
            href="https://twitter.com/ljf_io"
            >Tweets</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="text-gray-400 hover:text-gray-900"
            href="https://instagram.com/ljfio/"
            >Snaps</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="text-gray-400 hover:text-gray-900"
            href="mailto:hello@ljf.io"
            >Mail</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: "descripton",
          name: "description",
          content:
            "Luke Fisher is a software engineer living and working in Scotland",
        },
      ],
    };
  },
};
</script>

