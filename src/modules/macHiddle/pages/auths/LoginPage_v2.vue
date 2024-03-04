<template>
    <div style="min-height: 100vh;padding-bottom:30px; background: rgb(73,44,46);
        background: linear-gradient(137deg, rgba(73,44,46,1) 0%, rgba(119,72,75,1) 33%, rgba(119,72,75,1) 67%, rgba(73,44,46,1) 100%);">
        <DeshiGirlLogo></DeshiGirlLogo>
        <div class="px-4 pb-5 card rounded-5">
            <div class="">
                <div class="mt-4">
                    <div class="text-center ">
                        <p class="fs-5">Please Login Your Account </p>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="Email">
                        <label for="floatingInput" class="text-muted">Enter your Email</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="password" class="form-control" id="floatingInput" placeholder="Password"
                            v-model="Password">
                        <label for="floatingInput" class="text-muted">Password</label>
                    </div>
                    <div class="mt-4 text-center">
                        <button class="w-75 btn btn btn-brand rounded-pill">Submit</button>
                    </div>
                </div>

                <RouterLink to="/forgot-password-page">
                    <div class="text-center mt-2">
                        Forgot Password?
                    </div>
                </RouterLink>
                <div class="text-center container my-3">
                    <p>By proceeding, you agree to <RouterLink :to="{ name: 'TOSPage' }">Terms & Conditions</RouterLink> &
                        <RouterLink :to="{ name: 'PrivacyPolicy' }">Privacy policy</RouterLink>
                    </p>
                </div>
                <div class="d-flex justify-content-center mt-4 p-2">
                    <router-link to="/registration-page" class="w-100 rounded">
                        <button class="btn w-100 fs-5"
                            style="color:white;background: rgb(73,44,46);
                            background: linear-gradient(137deg, rgba(73,44,46,1) 0%, rgba(119,72,75,1) 33%, rgba(119,72,75,1) 67%, rgba(73,44,46,1) 100%);">
                            Click here for Register
                        </button>
                    </router-link>
                </div>

                <div class="text-center mt-2">
                    <p class="login">Or login with</p>
                    <i class="bi bi-envelope fs-1 me-3" style="color:red;"></i>
                    <i class="bi bi-facebook fs-1 " style="color:blue;"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DeshiGirlLogo from './DeshiGirlLogo.vue';
import { RouterLink } from 'vue-router';
export default {
    components: { RouterLink, DeshiGirlLogo },
    data() {
        return {
            img: "img/images/subtle-prism.png",
            logo: "img/images/logo.png",
            publicPath: process.env.BASE_URL,
            phoneNumber: "",
            Email: "",
            Password: "",
            disableButton: true,
            design: 1,
        };
    },
    methods: {
        checkPhoneNumber() {
            const number = /^[0-9]{10}$/;
            if (number.test(this.phoneNumber)) {
                this.disableButton = false;
            }
            else {
                this.disableButton = true;
            }
        },
        goBack() {
            window.history.back();
        },
        getData() {
            console.warn("values :  ", this.Email);
            alert("OTP has been sent to Your Email");
        },
        btnChange() {
            switch (this.design) {
                case 1:
                    this.design = 2;
                    break;
                case 2:
                    this.design = 1;
                    break;
            }
        }
    },
    mounted() {
        // this.$route.name
        console.log(this.$route.name)
    }
}
</script>

<style scoped>
.btn-brand {
    font-weight: 700;
    color: #4C2E30;
    background-color: #ECA1A6;
    border-color: hsl(356, 74%, 70%) !important;
}

.login {
    font-family: sans-serif;
    color: #228B22;
    text-align: center;
    position: relative;
}

.login:before {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: black;
    left: 0;
    top: 50%;
    position: absolute;
}

.login:after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: black;
    right: 0;
    top: 50%;
    position: absolute;
}
</style>