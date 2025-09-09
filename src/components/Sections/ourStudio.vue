<template>
  <section class="ourstudio pt-5 pb-5">
    <div class="container">
      <h1 class="text-center mb-5 studio-heading"   data-aos="fade-down"
             data-aos-delay="100">Our Studio</h1>
      <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12"   data-aos="fade-right"   data-aos-delay="100">
          <img src="/src/assets/Images/IMAGE1.jpg" alt="" class="img-fluid rounded mb-5">
        </div>

        <div class="col-lg-6 col-12 studiofeatures"   data-aos="fade-left"
             data-aos-delay="300">
          <h2>World Class Facilities</h2>
          <p style="line-height:30px">
            Our studio combines vintage warmth with modern precision, featuring industry-leading
            equipment and acoustically perfect environments. <br> <br>

            Every detail has been carefully
            designed to inspire creativity and capture the essence of your musical vision.
          </p>

          <ul class="featureslist">
            <li data-aos="fade-left"
             data-aos-delay="400">Pro Tools HDX System</li>
            <li data-aos="fade-left"
             data-aos-delay="500">SSL G-Series Console</li>
            <li data-aos="fade-left"
             data-aos-delay="600">Vintage Neve Preamps</li>
            <li data-aos="fade-left"
             data-aos-delay="700">Premium Monitoring Systems</li>
            <li data-aos="fade-left"
             data-aos-delay="800">Acoustic Treatment by Primacoustic</li>
            <li data-aos="fade-left"
             data-aos-delay="900">Extensive Microphone Collection</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ourstudio{
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
}
.studio-heading{
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
.featureslist{
  list-style:none;
  padding:0;
  margin:0;
  line-height: 40px;

}

.featureslist li::before{
  content: "\F4A0";
  font-family: "bootstrap-icons";
  font-size: 20px;
  margin-right: 8px;
  color: #00ffff;

}
</style>
<script>

</script>


