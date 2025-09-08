<template>
  <section class="aboutus">
    <pageNavbar />
    <aboutHero/>
    <ourStory/>
    <ourAchievement/>
    <ourValue/>
    <somethingAmazing/>
    <pageFooter/>
  </section>

</template>

<style lang="scss" scoped>

</style>

<script setup>
import pageNavbar from '@/components/Layout/pageNavbar.vue'
import ourStory from '@/components/Sections/ourStory.vue'
import aboutHero from '@/components/Sections/aboutHero.vue';
import ourAchievement from '@/components/Sections/ourAchievement.vue';
import ourValue from '@/components/Sections/ourValue.vue';
import somethingAmazing from '@/components/Sections/somethingAmazing.vue';
import pageFooter from '@/components/Layout/pageFooter.vue';
</script>
