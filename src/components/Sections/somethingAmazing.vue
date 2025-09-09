<template>
  <section class="booking-banner pt-5 pb-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Text Section -->
        <div class="col-lg-8 col-12 text-center text-lg-start">
          <h1 class="banner-heading">Ready to Create Your Next Hit?</h1>
          <p class="banner-subtext">
            Book your studio session today and experience the difference professional production makes.
            Limited slots available this month!
          </p>
          <a href="" type="button" class="btn btn-primary btn-lg bookbtn me-3 mb-4">
            Book Your Session <span><i class="bi bi-arrow-right"></i></span>
          </a>
        </div>

        <!-- Visual Animation -->
        <div class="col-lg-4 col-12 d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0">
          <div class="banner-visual">
            <div class="pulse-circle"></div>
            <div class="pulse-circle delay-1"></div>
            <div class="pulse-circle delay-2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.booking-banner {
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
  border: 1px solid rgba(0, 255, 255, 0.3);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Rethink Sans", "Rethink Sans Placeholder", sans-serif;
}

.banner-heading {
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 900;
  line-height: 1.2;
 background: #00ffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textgradient 20s ease-in infinite;
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

.banner-subtext {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
}

.banner-visual {
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
}

.pulse-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border: 2px solid #00ffff;
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.pulse-circle.delay-1 {
  width: 140px;
  height: 140px;
  border-color: #ff00ff;
  animation-delay: 1s;
}

.pulse-circle.delay-2 {
  width: 180px;
  height: 180px;
  border-color: #ffff00;
  animation-delay: 2s;
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.3;
  }
}

.bookbtn {
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color: black;
  border: none;
  border-radius: 50px;
  box-shadow: 1px 2px 10px 0px #00ffff;
  padding: 20px 30px;
}
</style>
