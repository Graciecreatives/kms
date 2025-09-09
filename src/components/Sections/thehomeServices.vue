<template>
  <section class="homeServices">
    <div class="container pt-5">
      <h1 class="text-center mb-5">Services</h1>

      <div class="container mb-4">
        <div class="row g-4">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="p-3 pb-5 text-center service1">
              <i class="bi bi-mic-fill services-icon"></i>
              <h4>Recording</h4>
              <p>
                State-of-the-art recording facilities with premium microphones, preamps, and
                acoustically treated rooms for pristine sound capture
              </p>
              <a href="" class="btn viewmorebtn">View More</a>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="p-3 pb-5 text-center service1">
              <i class="bi bi-headset services-icon"></i>
              <h4>Mixing</h4>
              <p>
                Professional mixing services using industry-standard tools and techniques to bring
                balance, clarity, and power to your tracks.
              </p>
              <a href="" class="btn viewmorebtn">View More</a>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="p-4 pb-4 text-center service1">
              <i class="bi bi-activity services-icon"></i>
              <h4>Mastering</h4>
              <p>
                Final polish for your music with precision mastering that ensures your tracks sound
                amazing on any playback system
              </p>
              <a href="" class="btn viewmorebtn mb-3">View More</a>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row g-4">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="p-3 pb-5 text-center service1">
              <i class="bi bi-vinyl-fill services-icon"></i>
              <h4>Production</h4>
              <p>
               Complete music production services from concept to completion, including arrangement, instrumentation, and creative direction
              </p>
              <a href="" class="btn viewmorebtn ">View More</a>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="p-3 pb-5 text-center service1">
              <i class="bi bi-music-note-beamed services-icon"></i>
              <h4>Composition</h4>
              <p>
              Original music composition for artists, films, commercials, and multimedia projects tailored to your specific vision
              </p>
              <a href="" class="btn viewmorebtn mt-4 mb-2">View More</a>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="p-4 pb-4 text-center service1">
              <i class="bi bi-mic-fill services-icon"></i>
              <h4>Vocal Coaching</h4>
              <p>
               Professional vocal coaching and performance training to help you develop your unique voice and stage presence
              </p>
              <a href="" class="btn viewmorebtn mb-3">View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.homeServices {
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
  // height: 100vh;
  padding-bottom: 50px;
  font-family: 'Rethink Sans', 'Rethink Sans Placeholder', sans-serif;
}
.service1 {
  background: #0f0f23;
  border: 1px solid rgba(255, 255, 255, 0.731);
  border-radius: 10px;
}
.service1:hover{
  box-shadow: 2px 2px 7px 0px #00ffff
}
.services-icon {
  font-size: clamp(2rem, 8vw, 4rem);
  color: #7b61ff;
}
.service1 p {
  line-height: 30px;
  color: #8c898e;
}
.viewmorebtn {
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color: white;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 5px;
  box-shadow: 1px 2px 10px 0px #00ffff;
  // font-size: 1rem;
  padding: 10px 30px;
}
</style>

<script setup></script>
