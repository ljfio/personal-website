<template>
  <div class="mt-16 lg:my-40">
    <div class="flex flex-col md:flex-row-reverse gap-x-16 gap-y-12 md:items-center">
      <div class="flex-grow">
        <img src="//s.gravatar.com/avatar/8bf98d1d6ea81a5e467b030a5a0b4798?s=400"
             alt=""
             class="
            rounded-full
            w-32
            border-4 border-gray-800
            dark:border-gray-200
          ">
      </div>

      <div class="flex flex-col flex-shrink justify-center gap-y-2 font-light">
        <h2 class="text-3xl lg:text-4xl text-gray-400 dark:text-gray-600">
          Hello, I am&hellip;
        </h2>

        <h1 class="text-7xl lg:text-8xl font-semibold">
          Luke Fisher
        </h1>

        <h3 class="text-3xl lg:text-4xl text-gray-400 dark:text-gray-600 italic">
          Software Engineer
        </h3>
      </div>
    </div>

    <nav class="mt-24 md:mt-40">
      <ul class="text-4xl flex flex-col lg:flex-row flex-wrap leading-none gap-x-10 gap-y-4">
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
          <nav-link href="https://dotnet.social/@ljfio" rel="me">Toot</nav-link>
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

