<template>
    <div class="container-fluid" style="background: var(--secondary-color)">
        <div class="row g-0 pb-2" style="min-height: 100vh;">
            <div class="pt-2 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <routerLink to="/" class=" rounded-circle d-flex justify-content-center"
                    style="height: 150px; width: 150px;background: linear-gradient(90deg, rgba(35,31,32,1) 0%, rgba(32,23,25,0.9417016806722689) 100%);">
                    <img :src="`${publicPath}${logo}`" alt="user image" style="width: 100%; object-fit: contain;">
                </routerLink>
            </div>
            <div class="container d-flex flex-column justify-content-center col-md-6 bg-light pt-2"
                style="padding-top: 20px;">
                <div class="d-flex flex-column align-items-center text-center">
                    <p class="fs-4">OTP has been sent to your email</p>
                    <p>We've sent an email to <span class="fw-bold">{{ user.email }}</span> to verify your email
                        address, please update
                        OTP in a email
                        verification
                        section and activate your account.
                    </p>
                    <RouterLink to="/registration-page" class="text-decoration-none" style="cursor: pointer;">Click here
                    </RouterLink>
                    <p> If you would like to change the email address you signed up with.</p>
                    <form @submit.prevent="verifyEmail()" class="w-100">
                        <div class="w-100 p-2 form-floating ">
                            <input type="text" class="form-control" id="verifyEmail" placeholder="Enter OTP"
                                v-model="otp" required>
                            <label for="verifyEmail">Enter Otp</label>
                        </div>
                        <p class="text-end" @click="resendOtp()">Resend OTP</p>
                        <div class="p-2 d-flex justify-content-center">
                            <button class="btn btn-dark">Submit</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            displayText: "",
            logo: 'img/logo/MacHiddle-nobg.png',
            publicPath: process.env.BASE_URL,
            otp: null,
        };
    },
    mounted() {
        this.$store.dispatch('LoggedInUserStore/fetchUserDetail')
    },
    computed: {
        user() {
            return this.$store.getters['LoggedInUserStore/getUserDetail']
        }
    },
    methods: {
        showText() {
            this.displayText = "OTP Resent";
        },
        verifyEmail() {
            // Check if OTP has a value
            if (this.otp) {
                const data = {
                    otp: this.otp
                };
                this.$store.dispatch('LoggedInUserStore/verifyEmail', data);
            } else {
                // Handle the case where OTP is empty or undefined
                console.error("OTP is empty or undefined. Cannot verify email.");
            }
        },

        resendOtp() {
            this.$store.dispatch('LoggedInUserStore/resendOtp')
        }
    },
}
</script>
