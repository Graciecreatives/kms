<template>
  <section class="contact-section">
    <pageNavbar/>
    <div class="container pt-5 pb-5">
      <div class="row g-4 align-items-stretch">
        <!-- Info panel -->
        <div class="col-lg-4" data-aos="fade-right">
          <div class="card-glass info-card h-100 p-3">
            <h2 class="heading-gradient mb-2">Get in Touch</h2>
            <p class="text-dim mb-4">Tell us about your project. We reply within 24 hours.</p>

            <div class="info-item">
              <i class="bi bi-envelope"></i>
              <div>
                <h6>Email</h6>
                <a href="mailto:contact@kingzmusic.studio">contact@kingzmusic.studio</a>
              </div>
            </div>

            <div class="info-item">
              <i class="bi bi-telephone"></i>
              <div>
                <h6>Phone</h6>
                <a href="tel:+1234567890">+1 (234) 567‑890</a>
              </div>
            </div>

            <div class="info-item">
              <i class="bi bi-geo-alt"></i>
              <div>
                <h6>Studio</h6>
                <p class="mb-0 text-dim">12 Kingz Avenue, Lagos, NG</p>
              </div>
            </div>

            <div class="socials mt-4">
              <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
              <a href="#" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="col-lg-8" data-aos="fade-left">
          <div class="card-glass form-card h-100 p-3">
            <h2 class="heading-gradient mb-2">Contact Form</h2>
            <p class="text-dim mb-4">Fields marked with * are required</p>

            <div
              v-if="alert.message"
              class="themed-alert"
              :class="alert.type === 'success' ? 'themed-alert-success' : 'themed-alert-danger'"
              role="alert"
            >
              {{ alert.message }}
            </div>

            <form @submit.prevent="onSubmit" novalidate>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Full Name *</label>
                  <input
                    type="text"
                    class="themed-input"
                    v-model.trim="form.name"
                    :class="invalid('name')"
                    placeholder="Your full name"
                    required
                  />
                  <small v-if="errors.name" class="text-danger">{{ errors.name }}</small>
                </div>

                <div class="col-md-6">
                  <label class="form-label">Email *</label>
                  <input
                    type="email"
                    class="themed-input"
                    v-model.trim="form.email"
                    :class="invalid('email')"
                    placeholder="you@example.com"
                    required
                  />
                  <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
                </div>

                <div class="col-md-6">
                  <label class="form-label">Phone</label>
                  <input
                    type="tel"
                    class="themed-input"
                    v-model.trim="form.phone"
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label">Service *</label>
                  <select
                    class="themed-input"
                    v-model="form.service"
                    :class="invalid('service')"
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Recording</option>
                    <option>Mixing</option>
                    <option>Mastering</option>
                    <option>Beat Production</option>
                    <option>Vocal Coaching</option>
                    <option>Podcast Recording</option>
                  </select>
                  <small v-if="errors.service" class="text-danger">{{ errors.service }}</small>
                </div>

                <div class="col-12">
                  <label class="form-label">Subject *</label>
                  <input
                    type="text"
                    class="themed-input"
                    v-model.trim="form.subject"
                    :class="invalid('subject')"
                    placeholder="How can we help?"
                    required
                  />
                  <small v-if="errors.subject" class="text-danger">{{ errors.subject }}</small>
                </div>

                <div class="col-12">
                  <label class="form-label">Message *</label>
                  <textarea
                    class="themed-input"
                    v-model.trim="form.message"
                    :class="invalid('message')"
                    rows="5"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                  <small v-if="errors.message" class="text-danger">{{ errors.message }}</small>
                </div>

                <div class="col-12">
                  <label class="form-label">Reference (optional)</label>
                  <input
                    type="url"
                    class="themed-input"
                    v-model.trim="form.reference"
                    placeholder="Link to demo/reference (SoundCloud, YouTube, etc.)"
                  />
                </div>

                <div class="col-12 d-flex align-items-center gap-2">
                  <input
                    id="consent"
                    type="checkbox"
                    class="form-check-input themed-check"
                    v-model="form.consent"
                    :class="invalid('consent')"
                    required
                  />
                  <label class="form-check-label text-dim" for="consent">
                    I agree to be contacted about my enquiry *
                  </label>
                </div>
                <small v-if="errors.consent" class="text-danger">{{ errors.consent }}</small>

                <div class="col-12 d-flex gap-3 mt-2">
                  <button type="submit" class="btn-primary-neo" :disabled="submitting">
                    <span v-if="!submitting"><i class="bi bi-send"></i> Send Message</span>
                    <span v-else class="d-inline-flex align-items-center gap-2">
                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Sending...
                    </span>
                  </button>

                  <button type="button" class="btn-ghost" @click="resetForm" :disabled="submitting">
                    Clear
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
    <pageFooter/>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import pageNavbar from '@/components/Layout/pageNavbar.vue'
import pageFooter from '@/components/Layout/pageFooter.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  subject: '',
  message: '',
  reference: '',
  consent: false,
})

const submitting = ref(false)
const alert = reactive({ type: '', message: '' })
const errors = reactive({})

const validators = {
  name: v => v?.length >= 2 || 'Please enter your full name',
  email: v => /^\S+@\S+\.\S+$/.test(v || '') || 'Enter a valid email',
  service: v => !!v || 'Please select a service',
  subject: v => (v && v.length >= 3) || 'Please add a subject',
  message: v => (v && v.length >= 10) || 'Message must be at least 10 characters',
  consent: v => v === true || 'You must agree to be contacted',
}

const validate = () => {
  let ok = true
  Object.entries(validators).forEach(([key, rule]) => {
    const res = rule(form[key])
    if (res !== true) { errors[key] = res; ok = false } else { delete errors[key] }
  })
  return ok
}

const invalid = key => (errors[key] ? 'is-invalid' : '')

const resetForm = () => {
  Object.assign(form, {
    name: '', email: '', phone: '', service: '',
    subject: '', message: '', reference: '', consent: false,
  })
  Object.keys(errors).forEach(k => delete errors[k])
  alert.type = ''; alert.message = ''
}

const fakeSend = () => new Promise(resolve => setTimeout(resolve, 1200))

const onSubmit = async () => {
  alert.type = ''; alert.message = ''
  if (!validate()) return
  submitting.value = true
  try {
    await fakeSend() // replace with real API later
    alert.type = 'success'
    alert.message = 'Thanks! Your message has been sent. We’ll reply within 24 hours.'
    resetForm()
  } catch (e) {
    alert.type = 'danger'
    alert.message = 'Something went wrong. Please try again.'
  } finally {
    submitting.value = false
  }
}

onMounted(() => {
  // If you use AOS globally, it will pick up data-aos attributes automatically.
})
</script>

<style lang="scss" scoped>
.contact-section{
  background: linear-gradient(90deg, rgba(23,0,44,1) 0%, rgba(23,0,44,1) 27%, rgba(0,0,0,1) 52%);
  font-family: "Rethink Sans", "Rethink Sans Placeholder", sans-serif;
}
.text-dim{ color: rgba(255,255,255,.82); }

/* Glass card + border */
.card-glass{
  background: rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.28);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,255,255,.18);
}

/* Heading gradient */
.heading-gradient{
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 6s ease infinite;
  font-weight: 800;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
}

/* Info list */
.info-item{
  display: flex; gap: .9rem; align-items: flex-start; margin-top: 1.2rem;
}
.info-item i{ color:#00ffff; font-size:1.3rem; margin-top:.2rem; }
.info-item h6{ color:#fff; margin-bottom:.2rem; }
.info-item a, .info-item p{ color: rgba(255,255,255,.82); margin:0; }

/* Socials */
.socials a{
  color:#fff; font-size:1.2rem; margin-right:.8rem; transition: transform .2s ease, color .2s ease;
}
.socials a:hover{ transform: scale(1.12); color:#00ffff; }

/* Inputs */
.form-label{ color:#fff; }
.themed-input{
  width: 100%;
  background: rgba(0,0,0,.35);
  border:1px solid rgba(255,255,255,.2);
  color:#fff; border-radius: 10px;
  padding:.65rem .9rem;
  outline: none;
  transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
}
.themed-input::placeholder{ color: rgba(255,255,255,.5); }
.themed-input:focus{
  border-color:#00ffff;
  box-shadow: 0 0 0 .18rem rgba(0,255,255,.15);
  background: rgba(0,0,0,.45);
}
.is-invalid{ border-color:#ff6b9d !important; }

/* Checkbox */
.themed-check:focus{ box-shadow: 0 0 0 .18rem rgba(0,255,255,.15); }

/* Buttons */
.btn-primary-neo{
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color:#000; border:none; border-radius: 32px; padding:.75rem 1.5rem;
  font-weight: 700; box-shadow: 0 10px 28px rgba(0,255,255,.25);
  transition: transform .2s ease, box-shadow .2s ease;
}
.btn-primary-neo:hover{ transform: translateY(-2px); box-shadow: 0 14px 36px rgba(0,255,255,.35); }

.btn-ghost{
  background: transparent; color:#fff; border:2px solid #00ffff;
  border-radius: 32px; padding:.7rem 1.4rem; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.btn-ghost:hover{ transform: translateY(-1px); box-shadow: 0 10px 22px rgba(0,255,255,.2); }

/* Alerts */
.themed-alert{
  border: none; border-radius: 12px; padding:.75rem 1rem; margin-bottom: .5rem;
}
.themed-alert-success{ background: rgba(0,255,170,.12); color:#00ffbf; }
.themed-alert-danger{ background: rgba(255,107,157,.12); color:#ff6b9d; }

/* Keyframes */
@keyframes gradientShift{
  0%{ background-position: 0% 50%; }
  50%{ background-position: 100% 50%; }
  100%{ background-position: 0% 50%; }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce){
  *{ animation: none !important; transition: none !important; }
}
</style>
