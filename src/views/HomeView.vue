<script setup>
import pageNavbar from '@/components/Layout/pageNavbar.vue';
import heroSection from '@/components/Sections/heroSection.vue';
import homeStats from '@/components/Sections/homeStats.vue';
// import whyChoose from '@/components/Sections/whyChoose.vue';
import thehomeServices from '@/components/Sections/thehomeServices.vue';
import testimonialSection from '@/components/Sections/testimonialSection.vue';
// import somethingAmazing from '@/components/Sections/bookingBanner.vue';
import bookingBanner from '@/components/Sections/bookingBanner.vue';
import pageFooter from '@/components/Layout/pageFooter.vue';
import ourStudio from '@/components/Sections/ourStudio.vue';
</script>

<template>
  <main>
    <pageNavbar/>
    <heroSection/>
    <homeStats/>
    <thehomeServices/>
    <ourStudio/>
    <testimonialSection/>
    <bookingBanner/>
    <pageFooter/>
  </main>
</template>
