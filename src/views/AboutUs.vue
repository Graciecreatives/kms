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
import pageNavbar from '@/components/pageNavbar.vue'
import ourStory from '@/components/ourStory.vue'
import aboutHero from '@/components/aboutHero.vue';
import ourAchievement from '@/components/ourAchievement.vue';
import ourValue from '@/components/ourValue.vue';
import somethingAmazing from '@/components/somethingAmazing.vue';
import pageFooter from '@/components/pageFooter.vue';
</script>
