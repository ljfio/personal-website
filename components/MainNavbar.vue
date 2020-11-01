<template>
  <div class="">
    <div class="container mx-auto flex flex-row">
      <div class="flex-grow">
        <div class="p-4 inline-block">
          <nuxt-link class="text-white hover:text-brand font-light" to="/"
            >Home</nuxt-link
          >
        </div>
        <div class="p-4 inline-block">
          <nuxt-link class="text-white hover:text-brand font-light" to="/blog"
            >Blog</nuxt-link
          >
        </div>
        <div class="p-4 inline-block">
          <nuxt-link class="text-white hover:text-brand font-light" to="/projects"
            >Projects</nuxt-link
          >
        </div>
      </div>
      <div class="">
        <div class="p-4 inline-block">
          <nuxt-link class="text-white hover:text-brand font-light" to="/contact">
            Contact
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>