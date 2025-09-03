<template>
  <section class="theNav">
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-0"
    >
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="text-decoration-none">
          <img src="" alt=""> <span style="color:white;">Kingz Music Studio</span>
        </a>
      </div>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link to="/" class="nav-link px-2">Home</router-link></li>
        <li><router-link to="/services" class="nav-link px-2">Services</router-link></li>
        <li><router-link to="/about" class="nav-link px-2">About</router-link></li>
        <li><router-link to="/portfolio" class="nav-link px-2">Portfolio</router-link></li>
        <li><router-link to="#" class="nav-link px-2">Contact</router-link></li>
      </ul>
      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2 signinbtn">Sign In</button>
        <button type="button" class="btn btn-primary signupbtn">Sign Up</button>
      </div>
    </header>
  </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.theNav{
  background-color: #000000;
  font-family:"Rethink Sans", "Rethink Sans Placeholder", sans-serif;
}

.nav-link{
  color:white !important;
}
.nav-link:hover{
  color:#D08700 !important;
}
.nav-link:active{
  color: #D08700 !important;
}
.signupbtn{
  background-color: #D08700 !important;
  border:none;
  color: black;
}
.signupbtn:hover{
  background-color: #a65f00 !important;
}
.signinbtn{
  color: white !important;
  background:none;
  border:none;
}
.signinbtn:hover{
  color: white !important;
  background-color:#D08700 !important;
}
</style>
