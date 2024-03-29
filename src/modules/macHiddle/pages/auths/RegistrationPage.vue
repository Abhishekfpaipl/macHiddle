<template>
    <div class="container-fluid" style="background: var(--secondary-color)">
        <div class="row g-0 pb-2" style="min-height: 100vh;">
            <div class="pt-2 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <router-link to="/" class=" rounded-circle d-flex justify-content-center"
                    style="height: 150px; width: 150px;background: linear-gradient(90deg, rgba(35,31,32,1) 0%, rgba(32,23,25,0.9417016806722689) 100%);">
                    <img :src="`${publicPath}${logo}`" style="width: 100%; object-fit: contain;">
                </router-link>
            </div>
            <div class="container d-flex flex-column justify-content-center col-md-6 bg-light pt-2">
                <p class="text-center fs-5">Register Your Account</p>
                <form @submit.prevent="registerAccount()">
                    <div class="w-100 p-2 form-floating">
                        <input type="text" class="form-control" placeholder="Name" v-model="name" required>
                        <label class="text-muted">Name</label>
                    </div>
                    <div class="w-100 p-2 form-floating">
                        <input type="email" class="form-control" placeholder="Email" v-model="email" required>
                        <label class="text-muted">Email Id.</label>
                    </div>
                    <div class="w-100 p-2 form-floating">
                        <input type="password" class="form-control" id="floatingInput2" placeholder="Password"
                            v-model="password" required>
                        <label for="floatingInput2" class="text-muted">Password</label>
                    </div>
                    <div class="w-100 p-2 form-floating">
                        <input type="password" class="form-control" id="floatingInput2" placeholder="Confirm Password"
                            v-model="confirmPassword" required>
                        <label for="floatingInput2" class="text-muted">Confirm Password</label>
                    </div>
                    <div class="d-flex justify-content-center align-items-center w-100 px-2 mt-2">
                        <button type="submit" class="btn text-white py-2 fs-5 w-100"
                            style="padding: 10px 12px !important;background-color: var(--secondary-color);">Submit</button>
                    </div>
                </form>
                <div class="text-center container my-3">
                    <p>By proceeding, you agree to <RouterLink to="/">Terms & Conditions</RouterLink> & <RouterLink
                            to="/">
                            Privacy policy</RouterLink>
                    </p>
                </div>
                <router-link to="/login-page">
                    <p class="text-center">Already have an account ? Login</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegistrationPage',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            logo: 'img/logo/MacHiddle-nobg.png',
            name: '',
            email: '',
            confirmPassword: '',
            password: "",
        };
    },
    methods: {
        registerAccount() {
            let data = {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.confirmPassword
            }
            this.$store.dispatch('MacStore/registerUser', data)
                .then(() => {
                    // If login successful, navigate to dashboard
                    // this.$router.push('/login-page'); 
                    this.name = '',
                        this.email = '',
                        this.confirmPassword = '',
                        this.password = ''
                })
        }
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