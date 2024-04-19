<template>
  <div class="container-fluid" style="background: var(--secondary-color)">
    <div class="row g-0 pb-2" style="min-height: 100vh;">
      <div class="pt-2 col-md-6 d-flex flex-column justify-content-center align-items-center">
        <router-link to="/" class=" rounded-circle d-flex justify-content-center"
          style="height: 150px; width: 150px;background: linear-gradient(90deg, rgba(35,31,32,1) 0%, rgba(32,23,25,0.9417016806722689) 100%);">
          <img :src="`${publicPath}${logo}`" alt="user" style="width: 100%; object-fit: contain;">
        </router-link>
      </div>
      <div class="container d-flex flex-column justify-content-center col-md-6 bg-light pt-2">
        <p class="text-center fs-5">Reset Password</p>
        <form @submit.prevent="resetPassword" class="d-flex flex-column align-items-center">

          <div class="w-100 p-2 form-floating container btn-group">
            <input type="password" class="form-control" id="currentPasswordInput" placeholder="Email"
              v-model="currentPassword" required>
            <label for="currentPasswordInput" class="text-muted">Current Password</label>
            <i class="bi btn btn-outline-dark  py-3" :class="{ 'bi-eye': !showPassword, 'bi-eye-slash': showPassword }"
              @click="togglePasswordVisibility('currentPasswordInput')"></i>
          </div>
          <div class="w-100 p-2 form-floating container btn-group">
            <input type="password" class="form-control" id="newPasswordInput" placeholder="Email" v-model="newPassword"
              required>
            <label for="newPasswordInput" class="text-muted">New Password</label>
            <i class="bi btn btn-outline-dark  py-3" :class="{ 'bi-eye': !showPassword, 'bi-eye-slash': showPassword }"
              @click="togglePasswordVisibility('newPasswordInput')"></i>
          </div>
          <div class="w-100 p-2 form-floating container btn-group">
            <input type="password" class="form-control" id="confirmPasswordInput" placeholder="Password"
              v-model="confirmPassword" required>
            <label for="confirmPasswordInput" class="text-muted">Confirm Password</label>
            <i class="bi btn btn-outline-dark  py-3" :class="{ 'bi-eye': !showPassword, 'bi-eye-slash': showPassword }"
              @click="togglePasswordVisibility('confirmPasswordInput')"></i>
          </div>
          <button type="submit" class="btn text-white w-50 my-4"
            style="padding: 10px 12px !important;background-color: var(--secondary-color);">Update</button>
        </form>
        <router-link to="/login-page">
          <p class="text-center">Click here for Login..</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<!-- zd1cVbv1EA -->
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      logo: 'img/logo/MacHiddle-nobg.png',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      showPassword: false,
    };
  },
  methods: {
    resetPassword() {
      const data = {
        current_password: this.currentPassword,
        password: this.newPassword,
        password_confirmation: this.confirmPassword
      }
      this.$store.dispatch('LoggedInUserStore/resetPassword', data)
    },
    togglePasswordVisibility(fieldId) {
      this.showPassword = !this.showPassword;
      const inputField = document.getElementById(fieldId);
      inputField.type = this.showPassword ? 'text' : 'password';
    }
  }
};
</script>
