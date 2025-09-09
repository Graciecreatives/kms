<template>
  <section class="testimonial pt-5 pb-5">
    <div class="container">
      <div class="text-center chooose-text">
        <h1 class="testimonialHeading" data-aos="fade-down"
             data-aos-delay="100">What Our Artistes Say</h1>
        <p data-aos="fade-up"
             data-aos-delay="200">Don't just take our word for it - hear from the artists we've worked with.</p>
      </div>
      <div class="container mt-5">
        <div class="row justify-content-center g-4">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4" data-aos="fade-up"    data-aos-delay="300">
            <div class="p-5 testimonial1 text-left rounded">
              <p>⭐⭐⭐⭐⭐</p>
               <p> <i>
                Kingz Music Studio transformed my sound completely. The attention to detail and professional quality exceeded all my expectations. This is where magic happens!"</i>
              </p>
              <div class="d-flex align-items-center">
                <!-- <img src="..." class="rounded me-3" alt="..."> -->
                <p>Sarah Johnson <br>
                <span style="color:white">Artiste</span></p>
              </div>
            </div>
          </div>

           <div class="col-12 col-sm-12 col-md-6 col-lg-4" data-aos="fade-up"         data-aos-delay="400">
            <div class="p-5 testimonial1 text-left rounded">
              <p>⭐⭐⭐⭐⭐</p>
               <p> <i>
                Kingz Music Studio transformed my sound completely. The attention to detail and professional quality exceeded all my expectations. This is where magic happens!"</i>
              </p>
              <div class="d-flex align-items-center">
                <!-- <img src="..." class="rounded me-3" alt="..."> -->
                <p>Sarah Johnson <br>
                <span style="color:white">Artiste</span></p>
              </div>
            </div>
          </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4" data-aos="fade-up"     data-aos-delay="500">
            <div class="p-5 testimonial1 text-left rounded">
              <p>⭐⭐⭐⭐⭐</p>
               <p> <i>
                Kingz Music Studio transformed my sound completely. The attention to detail and professional quality exceeded all my expectations. This is where magic happens!"</i>
              </p>
              <div class="d-flex align-items-center">
                <!-- <img src="..." class="rounded me-3" alt="..."> -->
                <p>Sarah Johnson <br>
                <span style="color:white">Artiste</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonial {
  background: #17002c;
  background: linear-gradient(
    90deg,
    rgba(23, 0, 44, 1) 0%,
    rgba(23, 0, 44, 1) 27%,
    rgba(0, 0, 0, 1) 52%
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
   font-family:"Rethink Sans", "Rethink Sans Placeholder", sans-serif;
}
.chooose-text {
  color: white !important;
}
.testimonialHeading{
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  background-size: 300% 300%; /* Make it wider so animation moves smoothly */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 5s ease infinite;
  text-align: center;
  font-size: clamp(2rem, 8vw, 4rem);
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.testimonial1 {
  position: relative;
  background: #0f0f23;
  border: 1px solid rgba(255, 255, 255, 0.731);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  z-index:0;
  color: #00ffff;

}

.testimonial1::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #ff6b9d, #c471ed);
  opacity: 0;
  transition: opacity 2s ease; /* controls fade speed */
  z-index: 0;
  border-radius: inherit;
}

.testimonial1:hover::before {
  opacity: 1;
 }


.testimonial1 * {
  position: relative;
  z-index: 2;
}
.studio_service h1 {
  color: white;
}
.studio_service p {
  color: #fbbc04;
}
.servicesbtn {
  background-color: #fbbc04;
  border: none;
  color: black;
}
.servicesbtn:hover {
  background-color: #a65f00;
  border: none;
  color: black;
}
</style>

<script setup></script>
