<template>
<section class="portfoliosection">
<pageNavbar/>

 <!-- Hero Section -->
    <section class="portfolio-hero d-flex align-items-center justify-content-center">
      <div class="px-4 py-5 my-0 text-center position-relative">
        <!-- Flowing Music Icons -->
        <div class="flowingicons">
          <span><i class="bi bi-music-note-beamed"></i></span>
          <span><i class="bi bi-vinyl-fill"></i></span>
          <span><i class="bi bi-headphones"></i></span>
          <span><i class="bi bi-mic-fill"></i></span>
        </div>

        <h1 class="display-5 fw-bold display-1 text-body-emphasis portfolio-hero-text col-lg-12 col-12">
          Our Portfolio
        </h1>
        <div class="col-lg-8 mx-auto">
          <p class="mb-4 portfolio-hero-paragraph" style="color: white">
            Explore our collection of professionally produced tracks and discover the quality
            that sets Kingz Music Studio apart. From recording to mastering, every project
            showcases our commitment to excellence.
          </p>
        </div>
      </div>
    </section>
<homeStats/>
<theMusicCards/>
<testimonialSection/>
<bookingBanner/>
<pageFooter/>


</section>
</template>



<style lang="scss" scoped>
// Hero Section
.portfolio-hero {
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
  height: 100vh;
  font-family: 'Rethink Sans', 'Rethink Sans Placeholder', sans-serif;
  position: relative;
}

.portfolio-hero-text {
  color: white !important;
  font-size: clamp(2rem, 8vw, 5rem);
  background: #00ffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textgradient 20s ease-in infinite;
}

.portfolio-hero-paragraph {
  font-size: clamp(1rem, 2vw, 1.5rem);
}

// Flowing Icons
.flowingicons {
  z-index: 1;
  pointer-events: none;
}

.flowingicons span {
  position: absolute;
  bottom: -60px;
  font-size: 2rem;
  opacity: 0.6;
  color: #00ffff;
  animation: float 15s linear infinite;
  z-index: 1;
}

.flowingicons span:nth-child(1) {
  left: 6%;
  font-size: 2.6rem;
  animation-duration: 12s;
  animation-delay: -2s;
}

.flowingicons span:nth-child(2) {
  left: 90%;
  font-size: 2.5rem;
  animation-duration: 16s;
  animation-delay: -5s;
  color: #ff00cc;
}

.flowingicons span:nth-child(3) {
  left: 30%;
  font-size: 2.5rem;
  animation-duration: 22s;
  color: #118ab2;
}

.flowingicons span:nth-child(4) {
  left: 60%;
  font-size: 2.5rem;
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

@keyframes textgradient {
  0% {
    background: linear-gradient(45deg, #00ffff, #0099cc);
    -webkit-background-clip: text;
  }
  33% {
    background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
    -webkit-background-clip: text;
  }
  66% {
    background: linear-gradient(270deg,#00ffff,#0066ff,#9900ff);
    -webkit-background-clip: text;
  }
  100%{
    background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
    -webkit-background-clip: text;
  }
}
</style>

<script setup>
import pageNavbar from '@/components/Layout/pageNavbar.vue';
import testimonialSection from '@/components/Sections/testimonialSection.vue';
import homeStats from '@/components/Sections/homeStats.vue';
import pageFooter from '@/components/Layout/pageFooter.vue';
import theMusicCards from '@/components/Music/theMusicCards.vue';
import bookingBanner from '@/components/Sections/bookingBanner.vue';

</script>

