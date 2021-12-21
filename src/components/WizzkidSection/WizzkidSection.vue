<template>
  <section id="wizzkids" class="bg-light p-5">
    <div class="container">
      <h2 class="text-center">WE ARE THE WIZKIDS</h2>
      <p class="paragraph lead mb-5 text-center pt-3 pb-5 mx-auto">
        OWOW is a family of wizkids, that all go for the best only. We work
        hard, play hard and make fun of ourselves while doing so. We are a
        family, we stick together, but never stay away from being truthful.
        Together we’ll reach the stars, but we’re only able to do so with a big
        dose of humour.
      </p>
      <WizzkidSectionList />
    </div>
  </section>
</template>
<script>
import WizzkidSectionList from "./WizzkidSectionList.vue";
export default {
  components: {
    WizzkidSectionList,
  },
};
</script>
<style>
</style>