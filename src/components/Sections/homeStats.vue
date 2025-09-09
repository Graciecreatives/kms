<template>
  <section class="stats pt-5">
    <div class="container">
      <div class="row d-lg-flex text-center">
        <div class="col-lg-3 col-6 statsnumber"   data-aos="fade-up"    data-aos-delay="100">
          <h2>500+</h2>
          <p>Songs Recorded</p>
        </div>

         <div class="col-lg-3 col-6 statsnumber"   data-aos="fade-up"  data-aos-delay="200">
          <h2>200+</h2>
          <p>Happy Artist</p>
        </div>

         <div class="col-lg-3 col-6 statsnumber"   data-aos="fade-up"   data-aos-delay="300">
          <h2>15+</h2>
          <p>Year Experience</p>
        </div>

         <div class="col-lg-3 col-6 statsnumber"   data-aos="fade-up"     data-aos-delay="400">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.stats{
  background-color: #17002C;
  height: 40vh;
   font-family:"Rethink Sans", "Rethink Sans Placeholder", sans-serif;
}
.statsnumber{
  color: #00ffff;
  cursor:pointer;
  .statsnumber {
   cursor: pointer;
  margin-bottom: 1.5rem; /* adds spacing between rows on small screens */
}
}

.statsnumber h2 {
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  font-weight: bold;
}
.statsnumber p {
  font-size: clamp(0.9rem, 3vw, 1.1rem);
}

</style>

<script setup>


</script>


