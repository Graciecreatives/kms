<template>
  <footer>
    <div class="container">
      <footer class="py-5">
        <div class="row">
          <!-- Brand / Address -->
          <div class="col-12 col-md-4 mb-4">
            <h5>Kingz Music Studio</h5>
            <address>
              45 Soundwave Avenue,<br />
              Lagos, Nigeria <br />
              Phone: +234 800 123 4567 <br />
              Email: info@kingzmusic.com
            </address>

            <!-- Social Media -->
            <div class="mt-3 d-flex gap-3">
              <a href="#"><i class="bi bi-instagram" style="color:white; font-size:1.3rem;"></i></a>
              <a href="#"><i class="bi bi-youtube" style="color:white; font-size:1.3rem;"></i></a>
              <a href="#"><i class="bi bi-spotify" style="color:white; font-size:1.3rem;"></i></a>
              <a href="#"><i class="bi bi-facebook" style="color:white; font-size:1.3rem;"></i></a>
              <a href="#"><i class="bi bi-whatsapp" style="color:white; font-size:1.3rem;"></i></a>
            </div>
          </div>

          <!-- Navigation -->
          <div class="col-6 col-md-2 mb-4">
            <h5>Navigation</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Services</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Portfolio</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Contact</a></li>
            </ul>
          </div>

          <!-- Quick Links -->
          <div class="col-6 col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Support</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Policies</a></li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="col-12 col-md-4 mb-4">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input
                  id="newsletter1"
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn subscribebtn" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <!-- Bottom copyright -->
        <div class="py-4 my-2 border-top">
          <p class="text-center">
            &copy; 2025 Kingz Music Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: linear-gradient(
    90deg,
    rgba(23, 0, 44, 1) 0%,
    rgba(23, 0, 44, 1) 27%,
    rgba(0, 0, 0, 1) 52%
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Rethink Sans", sans-serif;
}

footer a {
  color: white !important;
  text-decoration: none;
}

.subscribebtn {
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color: black;
  border: none;
}


p {
  color: white;
}

h5 {
  color: white;
}
</style>
