<script setup>
import { RouterView } from 'vue-router'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS after app is mounted
AOS.init({
  duration: 800, // Animation duration in ms
  easing: 'ease-in-out', // Animation easing
  once: true, // Animation happens only once
  offset: 100, // Offset from bottom of viewport
  delay: 0, // Delay before animation starts
  anchorPlacement: 'top-bottom' // When animation triggers
})
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  background-color: #000000;
  color: white;
  font-family: "Rethink Sans", "Rethink Sans Placeholder", sans-serif;
}
</style>
