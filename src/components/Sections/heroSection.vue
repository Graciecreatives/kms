<template>
  <section class="hero-section d-flex align-items-center justify-content-center">
       <div class="px-4 py-5 my-0 text-center position-relative">
        <!-- Flowing Music Icons -->
        <div class="flowingicons">
          <span><i class="bi bi-music-note"></i></span>
          <span><i class="bi bi-music-note-beamed"></i></span>
          <span><i class="bi bi-headset"></i></span>
          <span><i class="bi bi-mic"></i></span>
        </div>

      <h1 class="display-5 fw-bold display-1 text-body-emphasis hero-text col-lg-12 col-12" >
        Create. Record. Inspire.
      </h1>
      <div class="col-lg-8 mx-auto">
        <p class="mb-4 heroparagraph" style="color: white">
          Professional music production that brings your vision to life with cutting-edge technology and artistic expertise.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="" type="button" class="btn btn-primary btn-lg bookbtn me-3 mb-4">
            Book Your Session <span><i class="bi bi-arrow-right"></i></span>
          </a>
          <a href="" type="button" class="btn btn-primary btn-lg explorebtn me-3 mb-4">
            Explore Portfolio <span><i class="bi bi-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  background: #17002c;
  background: linear-gradient(
    90deg,
    rgba(23, 0, 44, 1) 0%,
    rgba(23, 0, 44, 1) 27%,
    rgba(0, 0, 0, 1) 52%,
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  font-family: 'Rethink Sans', 'Rethink Sans Placeholder', sans-serif;
  position:relative;
}
.hero-text,
.heroparagraph,
.bookbtn,
.explorebtn {
  position: relative;
  z-index: 5;   // force hero content above icons
}

.hero-text {
  color: white !important;
  font-size: clamp(2rem, 8vw, 5rem);
}
.heroparagraph{
  font-size: clamp(1rem, 2vw, 1.5rem);
}
.bookbtn {
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color: Black;
  border: none;
  border-radius: 50px;
  box-shadow: 1px 2px 10px 0px #00ffff;
  // font-size: 1rem;
  padding: 20px 30px;
}
.explorebtn {
  background: black;
  color: white;
  border: 2px solid #00ffff;
  border-radius: 50px;
  padding: 20px 30px;
  font-size: 1rem;
  // box-shadow: 1px 2px 10px 0px #00ffff;
}

.explorebtn:hover {
  background: black;
  color: white;
  border: 2px solid #00ffff;
  border-radius: 50px;
  padding: 20px 30px;
  font-size: 1rem;
  box-shadow: 1px 2px 10px 0px #00ffff;
}

.portfoliobtn {
  border: 2px solid #fbbc04;
  background: transparent;
  color: #fbbc04;
}
.portfoliobtn:hover {
  background-color: #fbbc04;
  color: black;
  border: none;
}

//Flowing Icon Animation
.flowingicons{
  z-index:1;
  pointer-events: none;
}
.flowingicons span{
  position: absolute;
  bottom:-60px;
  font-size: 2rem;
  opacity: 0.6;
  color: #00ffff;
  animation: float 15s linear infinite;
  // bottom: -50px;
   z-index: 1;
}

.flowingicons span:nth-child(1) {
  left:6%;
  font-size: 2.6rem;
  animation-duration: 12s;
  animation-delay: -2s;
}

.flowingicons span:nth-child(2) {
  left: 90%;
  font-size:2.5rem;
  animation-duration: 16s;
  animation-delay: -5s;
  color: #ff00cc;
}

.flowingicons span:nth-child(3){
  left: 30%;
  font-size:2.5rem;
  animation-duration: 22s;
   color: #118ab2;
}

.flowingicons span:nth-child(4){
    left: 60%;
  font-size:2.5rem;
  animation-duration: 20s;
   color: #ff00cc;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-110vh) rotate(360deg);
    opacity: 0;
  }
}

</style>
<script setup></script>
