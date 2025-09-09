<template>
  <section class="ourstudio pt-5 pb-5">
    <div class="container">
      <h1 class="text-center mb-5">Our Studio</h1>
      <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12">
          <img src="/src/assets/Images/IMAGE1.jpg" alt="" class="img-fluid rounded mb-5">
        </div>

        <div class="col-lg-6 col-12 studiofeatures">
          <h2>World Class Facilities</h2>
          <p style="line-height:30px">
            Our studio combines vintage warmth with modern precision, featuring industry-leading
            equipment and acoustically perfect environments. <br> <br>

            Every detail has been carefully
            designed to inspire creativity and capture the essence of your musical vision.
          </p>

          <ul class="featureslist">
            <li>Pro Tools HDX System</li>
            <li>SSL G-Series Console</li>
            <li>Vintage Neve Preamps</li>
            <li>Premium Monitoring Systems</li>
            <li>Acoustic Treatment by Primacoustic</li>
            <li>Extensive Microphone Collection</li>
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


