<template>
  <section class="why-Choose pt-5 pb-5">
    <div class="container">
      <div class="text-center chooose-text">
        <h1>Why Choose Kingz Music Studio?</h1>
        <p>
          We combine cutting-edge technology with years of experience to deliver professional
          results that exceed expectations.
        </p>
      </div>
      <div class="container mt-5">
        <div class="row justify-content-center g-4">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="pt-3 pb-3 choose1 text-center rounded">
              <i class="bi bi-mic fs-2" style="color: #fbbc04"></i>
              <h5 style="color: white">Professional Recording</h5>
              <p style="color: #7d94a0">
                State-of-the-art equipment and acoustically treated rooms for pristine sound
                capture.
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="pt-3 pb-3 choose1 text-center rounded">
              <i class="bi bi-mic fs-2" style="color: #fbbc04"></i>
              <h5 style="color: white">Expert Mixing & Mastering</h5>
              <p style="color: #7d94a0">
                Our skilled engineers bring your tracks to life with professional mixing and
                mastering.
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="pt-3 pb-3 choose1 text-center rounded">
              <i class="bi bi-mic fs-2" style="color: #fbbc04"></i>
              <h5 style="color: white">Beat Production</h5>
              <p style="color: #7d94a0">
                Custom beat creation and music production services for all genres.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-6 col-12 studio_service">
            <h1>Complete Studio Services</h1>
            <p>
              <span><i class="bi bi-check2 me-3"></i></span>Full Song Recording & Production
            </p>
            <p>
              <span><i class="bi bi-check2 me-3"></i></span>Professional Mixing & Mastering
            </p>
            <p>
              <span><i class="bi bi-check2 me-3"></i></span>Podcast Recording & Editing
            </p>
            <p>
              <span><i class="bi bi-check2 me-3"></i></span>Voice Over Services
            </p>
            <p>
              <span><i class="bi bi-check2 me-3"></i></span>Beat Production & Composition
            </p>
            <a href="" type="button" class="btn btn-primary btn px-4 gap-3 servicesbtn me-3">
              View all services <span><i class="bi bi-arrow-right"></i></span>
            </a>
          </div>

          <div class="col-lg-6 col-12 studio_service">
            <img src="/src/assets/Images/serviceimg.png" alt="" class="img-fluid" style="border-radius:10px">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-Choose {
  background-color: #000000;
   font-family:"Rethink Sans", "Rethink Sans Placeholder", sans-serif;
}
.chooose-text {
  color: white !important;
}
.choose1 {
  background-color: #080c14;
  border: 1px solid rgba(255, 255, 255, 0.518);
  cursor: pointer;
}
.choose1:hover {
  border: 1px solid#fbbc04;
}
.studio_service h1 {
  color: white;
}
.studio_service p {
  color: #fbbc04;
}
.servicesbtn{
  background-color:#fbbc04;
  border:none;
  color:black;
}
.servicesbtn:hover{
  background-color:#a65f00;
  border:none;
  color:black;
}
</style>

<script setup></script>
