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
                <p class="text-center fs-5">Login Your Account </p>
                <form @submit.prevent="loginAccount()">
                    <div class="w-100 p-2 form-floating">
                        <input type="tel" class="form-control" placeholder="Mobile" v-model="mobile">
                        <label for="floatingInput" class="text-muted">Mobile No.</label>
                    </div>
                    <p class="text-center mb-1">OR</p>
                    <div class="w-100 p-2 form-floating">
                        <input type="email" class="form-control" placeholder="Email" v-model="email">
                        <label for="floatingInput" class="text-muted">Email Id.</label>
                    </div>
                    <div class="w-100 p-2 form-floating">
                        <input type="password" class="form-control" id="floatingInput2" placeholder="Password"
                            v-model="password" required>
                        <label for="floatingInput2" class="text-muted">Password</label>
                    </div>
                    <router-link to="/forgot-password-page" class="float-end">
                        <p class="text-center">Forgot Password?</p>
                    </router-link>
                    <div class="d-flex justify-content-center align-items-center w-100 px-2 mt-2">
                        <button type="submit" class="btn text-white py-2 fs-5 w-100"
                            style="padding: 10px 12px !important;background-color: var(--secondary-color);">Submit</button>
                    </div>
                    <router-link to="/registration-page">
                        <p class="text-center">Don't have an account ? Register</p>
                    </router-link>
                </form>
                <div class="text-center container my-3">
                    <p>By proceeding, you agree to <RouterLink to="/">Terms & Conditions</RouterLink> & <RouterLink to="/">
                            Privacy policy</RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axiosInstance from '@/modules/macHiddle/axiosInstance'
export default {
    name: 'LoginPage',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            logo: 'img/logo/MacHiddle-nobg.png',
            email: 'abhi@gmail.com',
            // mobile: null,
            password: "123456789",
        };
    },
    methods: {
        loginAccount() {
            const postData = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('MacStore/loginUser', postData)
                .then(() => {
                    // If login successful, navigate to dashboard
                    this.$router.push('/dashboard');
                })
        },

    },
}
</script>

<style scoped>
p,
a {
    color: black;
}

.btn-brand {
    font-weight: 700;
    background-color: #ECA1A6;
    color: rgb(73, 44, 46);
}
</style>