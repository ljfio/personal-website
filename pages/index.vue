<template>
  <div class="mt-8">
    <nav>
      <ul
        class="
          text-4xl
          uppercase
          font-semibold
          leading-none
          space-y-4
          text-gray-400
          dark:text-gray-600
        "
      >
        <li>
          <nuxt-link
            to="/about"
            class="hover:text-gray-900 dark:hover:text-gray-100"
            >About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/resume"
            class="hover:text-gray-900 dark:hover:text-gray-100"
            >Resume</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/blog"
            class="hover:text-gray-900 dark:hover:text-gray-100"
            >Blog</nuxt-link
          >
        </li>
        <li>
          <a
            target="_blank"
            class="hover:text-gray-900 dark:hover:text-gray-100"
            href="https://github.com/ljfio"
            >Code</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="hover:text-gray-900 dark:hover:text-gray-100"
            href="https://linkedin.com/in/ljfio"
            >Connect</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="hover:text-gray-900 dark:hover:text-gray-100"
            href="https://twitter.com/ljf_io"
            >Tweet</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="hover:text-gray-900 dark:hover:text-gray-100"
            href="https://instagram.com/ljfio/"
            >Snap</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="hover:text-gray-900 dark:hover:text-gray-100"
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

