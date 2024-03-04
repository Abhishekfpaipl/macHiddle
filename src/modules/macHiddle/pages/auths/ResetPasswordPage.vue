<!-- <template>
  <HomeTopnav></HomeTopnav>
  <div class="px-4" style="padding-top: 20px;">
    <div class="d-flex flex-column align-items-center text-center">
      <i class="bi bi-person-lock" style="font-size:100px;color: #E35D6A;"></i>
      <h1>Update Password</h1>
    </div>
    <div class="row justify-content-center mt-4">
      <div class="col-md-6">
        <form @submit.prevent="resetPassword">

          <div class="w-100 p-2 form-floating container">
            <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="currentPassword"
              required>
            <label for="floatingInput" class="text-muted">Current Password</label>
          </div>
          <div class="w-100 p-2 form-floating container">
            <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="newPassword" required>
            <label for="floatingInput" class="text-muted">New Password</label>
          </div>
          <div class="w-100 p-2 form-floating container">
            <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="confirmPassword"
              required>
            <label for="floatingInput" class="text-muted">Confirm Password</label>
          </div>

          <div class="d-flex justify-content-center mt-4 p-2">
            <button class="btn top-brand   w-100 fs-5">
              Update Password
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class="container-fluid" style="background: var(--secondary-color)">
    <div class="row g-0 pb-2" style="min-height: 100vh;">
      <div class="pt-2 col-md-6 d-flex flex-column justify-content-center align-items-center">
        <div class=" rounded-circle d-flex justify-content-center"
          style="height: 150px; width: 150px;background: linear-gradient(90deg, rgba(35,31,32,1) 0%, rgba(32,23,25,0.9417016806722689) 100%);">
          <img :src="`${publicPath}${logo}`" style="width: 100%; object-fit: contain;">
        </div>
      </div>
      <div class="container d-flex flex-column justify-content-center col-md-6 bg-light pt-2">
        <p class="text-center fs-5">Forgot Password</p>
        <form @submit.prevent="resetPassword">

          <div class="w-100 p-2 form-floating container">
            <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="currentPassword"
              required>
            <label for="floatingInput" class="text-muted">Current Password</label>
          </div>
          <div class="w-100 p-2 form-floating container">
            <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="newPassword" required>
            <label for="floatingInput" class="text-muted">New Password</label>
          </div>
          <div class="w-100 p-2 form-floating container">
            <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="confirmPassword"
              required>
            <label for="floatingInput" class="text-muted">Confirm Password</label>
          </div>

          <div class="d-flex justify-content-center mt-4 p-2">
            <button type="submit" class="btn text-white py-2 fs-5 w-100"
              style="padding: 10px 12px !important;background-color: var(--secondary-color);">Update</button>
          </div>

        </form>
        <router-link to="/login-page">
          <p class="text-center">Click here for Login..</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      logo: 'img/logo/MacHiddle-nobg.png',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  },
  methods: {
    resetPassword() {
      const data = {
        current_password: this.currentPassword,
        password: this.newPassword,
        password_confirmation: this.confirmPassword
      }
      this.$store.dispatch('MacStore/resetPassword', data)
    }
  }
};
</script>
  

 