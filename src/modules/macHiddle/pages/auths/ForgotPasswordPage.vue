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
                <form @submit.prevent="forgotPassword()">
                    <div class="w-100 p-2 form-floating">
                        <input type="email" class="form-control" placeholder="Email" v-model="email">
                        <label for="floatingInput" class="text-muted">Email Id.</label>
                    </div>
                    <div class="d-flex justify-content-center align-items-center w-100 px-2 mt-2">
                        <button type="submit" class="btn text-white py-2 fs-5 w-100"
                            style="padding: 10px 12px !important;background-color: var(--secondary-color);">Submit</button>
                    </div>
                </form>
                <div class="text-center container my-3">
                    <p>If you submit your email here, Will send you a One Time Password at your registered email
                        address
                    </p>
                </div>
                <router-link to="/login-page">
                    <p class="text-center">Click here for Login..</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForgotPasswordPage',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            logo: 'img/logo/MacHiddle-nobg.png',
            email: "",
        };
    },
    methods: {
        forgotPassword() {
            const data = {
                email: this.email
            }
            this.$store.dispatch('MacStore/forgotPassword', data)
        }
    },
}
</script>

<style scoped>
.icon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 2rem;
    background: -webkit-linear-gradient(#273990, #24aae3);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

p,
a {
    color: black;
}

.btn-brand {
    font-weight: 700;
    color: #4C2E30;
    background-color: #ECA1A6;
    border-color: #eb7a81 !important;
}
</style>
