<template>
  <section class="amazing">
    <div class="d-flex align-items-center justify-content-center text-center" style="min-height: 50vh">
      <div class="container">
        <h1>Ready to create Something Amazing</h1>
        <p>Book your studio session today and take your music to the next level.</p>
        <a href="" type="button" class="btn btn-primary btn-lg px-4 gap-3 bookbtn me-3">
          Book Now <span><i class="bi bi-arrow-right"></i></span>
        </a>
        <a href="" type="button" class="btn btn-primary btn-lg px-4 gap-3 contactbtn">
          Contact Us
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.amazing {
  background: linear-gradient(90deg, #fbbc04, #a65f00);
  height: 50vh;
}
.bookbtn {
  background-color: black;
  color: white;
  border: none;
}
.bookbtn:hover {
  background-color: white;
  color: black;
}
.contactbtn {
  background-color: black;
  color: white;
  border: none;
}
.contactbtn:hover {
  background-color: white;
  color: black;
}
</style>
<script setup></script>
