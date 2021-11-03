<template>
  <div class="mt-8">
    <nav>
      <ul class="text-4xl uppercase font-semibold leading-none space-y-4">
        <li>
          <nav-link to="/about">About</nav-link>
        </li>
        <li>
          <nav-link to="/resume">Resume</nav-link>
        </li>
        <li>
          <nav-link to="/blog">Blog</nav-link>
        </li>
        <li>
          <nav-link href="https://github.com/ljfio">Code</nav-link>
        </li>
        <li>
          <nav-link href="https://linkedin.com/in/ljfio">Connect</nav-link>
        </li>
        <li>
          <nav-link href="https://twitter.com/ljf_io">Tweet</nav-link>
        </li>
        <li>
          <nav-link href="https://instagram.com/ljfio/">Snap</nav-link>
        </li>
        <li>
          <nav-link href="mailto:hello@ljf.io">Mail</nav-link>
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

