<script setup>
import pageNavbar from '@/components/Layout/pageNavbar.vue';
import heroSection from '@/components/Sections/heroSection.vue';
import homeStats from '@/components/Sections/homeStats.vue';
import whyChoose from '@/components/Sections/whyChoose.vue';
import testimonialSection from '@/components/Sections/testimonialSection.vue';
import somethingAmazing from '@/components/Sections/somethingAmazing.vue';
import pageFooter from '@/components/Layout/pageFooter.vue';
</script>

<template>
  <main>
    <pageNavbar/>
    <heroSection/>
    <homeStats/>
    <whyChoose/>
    <testimonialSection/>
    <somethingAmazing/>
    <pageFooter/>
  </main>
</template>
