<template>
  <div class="">
    <div class="head py-12">
      <main-navbar />

      <div class="container mx-auto">
        <div class="flex flex-row items-center">
          <img src="~/assets/images/ljf-page.svg" class="h-32 px-4 flex-grow" />
        </div>
      </div>
    </div>
    <div class="profile">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col space-y-6 sm:flex-row sm:space-x-6">
          <div class="xs:w-1/4">
            <img
              src="//s.gravatar.com/avatar/8bf98d1d6ea81a5e467b030a5a0b4798?s=600"
              alt=""
              class="grayscale rounded-md"
            />
          </div>
          <div class="xs:w-3/4">
            <h1 class="text-4xl leading-none mb-2">Luke Fisher</h1>
            <h2 class="text-2xl leading-none mb-2">Applications Developer</h2>
            <p>Forward thinking Software Engineer and Designer.</p>
            <p>
              Working in an agile team of problem solvers, supporting bespoke
              .NET software solutions.
            </p>
            <p>
              Graduated from The Robert Gordon University (RGU) in Aberdeen with
              a First Class BSc (Hons) in Computer Science.
            </p>
            <p>
              Elected President of the
              <a target="_blank" href="//rgucs.com">RGU Computing Society</a>
              for the 2016-17 and 2017-18 terms. Since 2015 I have been a
              Student member of the
              <a target="_blank" href="//ieee.org">IEEE</a> and
              <a target="_blank" href="//computer.org">IEEE Computer Society</a
              >.
            </p>
            <p>
              Strong advocate for digital privacy and data security. Member of
              both the <a target="_blank" href="//eff.org">EFF</a> and
              <a target="_blank" href="//openrightsgroup.org">ORG</a>, two
              organisations standing up to protect your digital rights.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="attainment bg-black text-white">
      <div class="container mx-auto px-4 py-2">
        <div class="flex flex-col space-y-6 sm:space-x-0 sm:flex-row sm:space-x-6">
          <div class="sm:w-1/2">
            <h2 class="text-2xl text-center">Experience</h2>
            <div class="py-2 font-light text-xl leading-none">
              Applications Developer at Hydrasun
              <div class="pt-2 text-sm text-gray-500">August 2018 - Present</div>
            </div>
            <div class="py-2 font-light text-xl leading-none">
              Software Engineer at Codify
              <div class="pt-2 text-sm text-gray-500">June 2015 - August 2018</div>
            </div>
            <div class="py-2 font-light text-xl leading-none">
              Software Developer (Temporary) at University of Aberdeen
              <div class="pt-2 text-sm text-gray-500">May 2015 - June 2015</div>
            </div>
            <div class="py-2 font-light text-xl leading-none">
              Developer (Student Placement) at Hydrasun
              <div class="pt-2 text-sm text-gray-500">July 2014 - August 2014</div>
            </div>
          </div>
          <div class="sm:w-1/2">
            <h2 class="text-2xl text-center">Achievements</h2>
            <div class="py-2 font-light text-xl leading-none">
              ConocoPhillips Award for Academic Excellence
              <div class="pt-2 text-sm text-gray-500">Attained at RGU for both Year 1 &amp; 2</div>
            </div>
            <div class="py-2 font-light text-xl leading-none">
              Award for Innovation at STEM in the Pipeline
              <div class="pt-2 text-sm text-gray-500">
                Built working three-phase separator model in 2013 as part of
                Rock Raiders
              </div>
            </div>
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
      title: "Luke Fisher",
    };
  },
};
</script>

<style lang="postcss" scoped>
.head {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)),
    url("~@/assets/images/header-image.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.grayscale {
  -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}

p {
  @apply font-light text-xl leading-tight py-1;
}

.attainment {

}

a {
  @apply text-brand;

  &:hover {
    @apply text-gray-500;
  }
}
</style>