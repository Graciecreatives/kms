<template>
  <section class="hero-section d-flex align-items-center justify-content-center">
    <div class="px-4 py-5 my-0 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis hero-text">
        Your Sound, <span class="herospan">Our Studio</span>
      </h1>
      <div class="col-lg-8 mx-auto">
        <p class="mb-4" style="color: white">
          Professional recording, mixing, and mastering services in a state-of-the-art facility.
          Bring your musical vision to life with SoundWave Studio.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="" type="button" class="btn btn-primary btn-lg px-4 gap-3 bookbtn me-3">
            Book Your Session <span><i class="bi bi-arrow-right"></i></span>
          </a>
          <a href="" type="button" class="btn btn-primary btn-lg px-4 gap-3 portfoliobtn">
            Listen to Our Work
          </a>
                 </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/Images/Hero-img.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70vh;
   font-family:"Rethink Sans", "Rethink Sans Placeholder", sans-serif;
}
.herospan {
  background: linear-gradient(90deg, #fbbc04, #a65f00); /* yellow → orange */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-text {
  color: white !important;
}
.bookbtn{
  background-color: #D08700;
  color: Black;
  border:none;
}
.bookbtn:hover{
  background-color: #a65f00;
}
.portfoliobtn{
  border:2px solid #fbbc04;
  background:transparent;
  color:#fbbc04;
}
.portfoliobtn:hover{
  background-color:#fbbc04;
  color:black;
  border:none;
}

</style>
<script setup></script>
