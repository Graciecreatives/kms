<template>
  <main>
    <pageNavbar/>

    <section class="auth-section d-flex align-items-center pt-5 pb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6" data-aos="fade-up">
            <div class="card-glass auth-card">
              <h1 class="heading-gradient mb-2 text-center">Create Your Account</h1>
              <p class="text-dim text-center mb-4">Join Kingz Music Studio and start your journey.</p>

              <div
                v-if="alert.message"
                class="themed-alert mb-3"
                :class="alert.type === 'success' ? 'themed-alert-success' : 'themed-alert-danger'"
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
                    <label class="form-label">Artist Name (optional)</label>
                    <input
                      type="text"
                      class="themed-input"
                      v-model.trim="form.artistName"
                      placeholder="Stage/Artist name"
                    />
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

                  <div class="col-md-6 position-relative">
                    <label class="form-label">Password *</label>
                    <input
                      :type="showPass ? 'text' : 'password'"
                      class="themed-input pe-5"
                      v-model.trim="form.password"
                      :class="invalid('password')"
                      placeholder="At least 6 characters"
                      required
                    />
                    <button type="button" class="toggle-pass" @click="showPass = !showPass">
                      <i :class="showPass ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                    </button>
                    <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>
                  </div>

                  <div class="col-md-6 position-relative">
                    <label class="form-label">Confirm Password *</label>
                    <input
                      :type="showConfirm ? 'text' : 'password'"
                      class="themed-input pe-5"
                      v-model.trim="form.confirm"
                      :class="invalid('confirm')"
                      placeholder="Re-enter password"
                      required
                    />
                    <button type="button" class="toggle-pass" @click="showConfirm = !showConfirm">
                      <i :class="showConfirm ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                    </button>
                    <small v-if="errors.confirm" class="text-danger">{{ errors.confirm }}</small>
                  </div>

                  <div class="col-12 d-flex align-items-center gap-2">
                    <input id="terms" type="checkbox" class="form-check-input themed-check" v-model="form.terms" :class="invalid('terms')" />
                    <label for="terms" class="text-dim">I agree to the Terms & Privacy *</label>
                  </div>
                  <small v-if="errors.terms" class="text-danger">{{ errors.terms }}</small>

                  <div class="col-12">
                    <button type="submit" class="btn-primary-neo w-100" :disabled="submitting">
                      <span v-if="!submitting"><i class="bi bi-person-plus"></i> Create Account</span>
                      <span v-else class="d-inline-flex align-items-center gap-2">
                        <span class="spinner-border spinner-border-sm" role="status"></span> Creating...
                      </span>
                    </button>
                  </div>

                 <p class="text-center text-dim mt-3">
                    Already have an account? <router-link to="/login" class="link-ghost">Log in</router-link>
                  </p>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>

    <pageFooter/>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import pageNavbar from '@/components/Layout/pageNavbar.vue'
import pageFooter from '@/components/Layout/pageFooter.vue'

const form = reactive({
  name: '',
  artistName: '',
  email: '',
  phone: '',
  password: '',
  confirm: '',
  terms: false,
})
const showPass = ref(false)
const showConfirm = ref(false)
const submitting = ref(false)
const alert = reactive({ type: '', message: '' })
const errors = reactive({})

const validators = {
  name: v => v?.length >= 2 || 'Please enter your full name',
  email: v => /^\S+@\S+\.\S+$/.test(v || '') || 'Enter a valid email',
  password: v => (v && v.length >= 6) || 'Password must be at least 6 characters',
  confirm: v => v === form.password || 'Passwords do not match',
  terms: v => v === true || 'You must agree to continue',
}
const validate = () => {
  let ok = true
  Object.entries(validators).forEach(([k, rule]) => {
    const res = rule(form[k])
    if (res !== true) { errors[k] = res; ok = false } else { delete errors[k] }
  })
  return ok
}
const invalid = k => (errors[k] ? 'is-invalid' : '')

const onSubmit = async () => {
  alert.type = ''; alert.message = ''
  if (!validate()) return
  submitting.value = true
  try {
    // TODO: Replace with real signup (Supabase/Firebase)
    await new Promise(r => setTimeout(r, 1100))
    alert.type = 'success'
    alert.message = 'Account created successfully. You can now log in.'
  } catch (e) {
    alert.type = 'danger'
    alert.message = 'Signup failed. Please try again.'
  } finally {
    submitting.value = false
  }
}

const socialSignUp = async (provider) => {
  // TODO: Wire to provider signup
  alert.type = 'danger'
  alert.message = `Social signup (${provider}) not configured yet.`
}
</script>

<style lang="scss" scoped>
.auth-section{
  min-height: calc(100vh - 120px);
  background: linear-gradient(90deg, rgba(23,0,44,1) 0%, rgba(23,0,44,1) 27%, rgba(0,0,0,1) 52%);
  font-family: "Rethink Sans", "Rethink Sans Placeholder", sans-serif;
}
.text-dim{ color: rgba(255,255,255,.82); }

.card-glass{
  background: rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.28);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,255,255,.18);
}
.auth-card{ padding: 2rem; }

.heading-gradient{
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  animation: gradientShift 6s ease infinite; font-weight: 800;
  font-size: clamp(1.8rem, 5vw, 2.4rem);
}

.form-label{ color:#fff; }
.themed-input{
  width: 100%; background: rgba(0,0,0,.35);
  border:1px solid rgba(255,255,255,.2); color:#fff; border-radius: 10px;
  padding:.65rem .9rem; outline: none; transition: border-color .2s, box-shadow .2s, background .2s;
}
.themed-input::placeholder{ color: rgba(255,255,255,.5); }
.themed-input:focus{ border-color:#00ffff; box-shadow: 0 0 0 .18rem rgba(0,255,255,.15); background: rgba(0,0,0,.45); }
.is-invalid{ border-color:#ff6b9d !important; }

.toggle-pass{
  position: absolute; right: .5rem; top: 36px;
  background: transparent; border: none; color: #8c898e; font-size: 1.1rem;
}

.btn-primary-neo{
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color:#000; border:none; border-radius: 32px; padding:.75rem 1.5rem;
  font-weight: 700; box-shadow: 0 10px 28px rgba(0,255,255,.25);
  transition: transform .2s, box-shadow .2s;
}
.btn-primary-neo:hover{ transform: translateY(-2px); box-shadow: 0 14px 36px rgba(0,255,255,.35); }

.btn-ghost{
  background: transparent; color:#fff; border:2px solid #00ffff;
  border-radius: 32px; padding:.6rem 1rem;
}
.socials-row{ display: grid; grid-template-columns: 1fr 1fr; gap: .8rem; }

.link-ghost{ color:#00ffff; text-decoration: none; }
.link-ghost:hover{ text-decoration: underline; }

.divider{ display:flex; align-items:center; gap:.6rem; justify-content:center; margin: 1rem 0; }
.divider::before, .divider::after{
  content:''; height:1px; flex:1; background: rgba(255,255,255,.25);
}

.themed-alert{ border: none; border-radius: 12px; padding:.75rem 1rem; text-align:center; }
.themed-alert-success{ background: rgba(0,255,170,.12); color:#00ffbf; }
.themed-alert-danger{ background: rgba(255,107,157,.12); color:#ff6b9d; }

@keyframes gradientShift{
  0%{ background-position: 0% 50%; }
  50%{ background-position: 100% 50%; }
  100%{ background-position: 0% 50%; }
}
</style>
