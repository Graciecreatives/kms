<template>
  <main>
    <pageNavbar/>

    <section class="auth-section d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5" data-aos="fade-up">
            <div class="card-glass auth-card">
              <h1 class="heading-gradient mb-2 text-center">Welcome Back</h1>
              <p class="text-dim text-center mb-4">Log in to manage your projects and bookings.</p>

              <div
                v-if="alert.message"
                class="themed-alert mb-3"
                :class="alert.type === 'success' ? 'themed-alert-success' : 'themed-alert-danger'"
              >
                {{ alert.message }}
              </div>

              <form @submit.prevent="onSubmit" novalidate>
                <div class="mb-3">
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

                <div class="mb-2 position-relative">
                  <label class="form-label">Password *</label>
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    class="themed-input pe-5"
                    v-model.trim="form.password"
                    :class="invalid('password')"
                    placeholder="Your password"
                    required
                  />
                  <button type="button" class="toggle-pass" @click="showPassword = !showPassword" :aria-pressed="showPassword">
                    <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                  </button>
                  <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>
                </div>

                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="d-flex align-items-center gap-2">
                    <input id="remember" type="checkbox" class="form-check-input themed-check" v-model="form.remember" />
                    <label for="remember" class="text-dim">Remember me</label>
                  </div>
                  <a href="#" class="link-ghost">Forgot password?</a>
                </div>

                <button type="submit" class="btn-primary-neo w-100 mb-3" :disabled="submitting">
                  <span v-if="!submitting"><i class="bi bi-box-arrow-in-right"></i> Log In</span>
                  <span v-else class="d-inline-flex align-items-center gap-2">
                    <span class="spinner-border spinner-border-sm" role="status"></span> Signing in...
                  </span>
                </button>

                <div class="divider"><span class="text-dim">or continue with</span></div>

                <div class="socials-row">
                  <button type="button" class="btn-ghost w-100" @click="socialLogin('google')">
                    <i class="bi bi-google me-2"></i> Google
                  </button>
                  <button type="button" class="btn-ghost w-100" @click="socialLogin('github')">
                    <i class="bi bi-github me-2"></i> GitHub
                  </button>
                </div>

                <p class="text-center text-dim mt-4">
                  No account? <router-link to="/signup" class="link-ghost">Create one</router-link>
                </p>
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
  email: '',
  password: '',
  remember: false,
})
const showPassword = ref(false)
const submitting = ref(false)
const alert = reactive({ type: '', message: '' })
const errors = reactive({})

const validators = {
  email: v => /^\S+@\S+\.\S+$/.test(v || '') || 'Enter a valid email',
  password: v => (v && v.length >= 6) || 'Password must be at least 6 characters',
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
    // TODO: Replace with real auth call (Supabase/Firebase)
    await new Promise(r => setTimeout(r, 1000))
    alert.type = 'success'
    alert.message = 'Logged in successfully.'
  } catch (e) {
    alert.type = 'danger'
    alert.message = 'Login failed. Please try again.'
  } finally {
    submitting.value = false
  }
}

const socialLogin = async (provider) => {
  // TODO: Wire to provider login
  alert.type = 'danger'
  alert.message = `Social login (${provider}) not configured yet.`
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

.themed-alert{ border: none; border-radius: 12px; padding:.75rem 1rem; }
.themed-alert-success{ background: rgba(0,255,170,.12); color:#00ffbf; }
.themed-alert-danger{ background: rgba(255,107,157,.12); color:#ff6b9d; }

@keyframes gradientShift{
  0%{ background-position: 0% 50%; }
  50%{ background-position: 100% 50%; }
  100%{ background-position: 0% 50%; }
}
</style>
