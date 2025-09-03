<template>
  <section class="theNav">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-dark">
        <a href="/" class="navbar-brand" style="padding:0; margin:0">
          <img src="../assets/Images/Logo.png" alt="Logo" class="w-50" />
        </a>

        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapsible menu -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link px-2">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link px-2">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link px-2">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio" class="nav-link px-2">Portfolio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link px-2">Contact</router-link>
            </li>
          </ul>

          <div class="d-flex">
            <button type="button" class="btn btn-outline-primary me-2 signinbtn">Sign In</button>
            <button type="button" class="btn btn-primary signupbtn">Sign Up</button>
          </div>
        </div>
      </nav>
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
