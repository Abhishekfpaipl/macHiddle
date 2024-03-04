<template>
    <div style="min-height: 100vh;background: #F4B700;">
        <MacHiddleLogo/>
        <div class="px-4 pb-5" style="padding-top: 20px;">
            <div class="d-flex flex-column align-items-center text-center">
                <p class="fs-4">OTP has been sent to your email</p>
                <p>We've sent an email to user@gmail.com to verify your email address, please update OTP in a email
                    verification
                    section and activate your account.
                </p>
                <RouterLink to="/registration-page" class="text-decoration-none" style="cursor: pointer;">Click here
                </RouterLink>
                <p> If you would like to change the email address you signed up with.</p>
                <div class="w-100 p-2 form-floating container">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Enter OTP">
                    <label for="floatingInput">Enter Otp</label>
                </div>
            </div>
            <div class="d-flex justify-content-between container">
                <div class="">
                    <p v-if="displayText">{{ displayText }}</p>
                </div>
                <RouterLink to="" class="text-decoration-none" @click="showText">Resend OTP</RouterLink>
            </div>

            <div class="mt-4 p-2 d-flex justify-content-center">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning w-25 border fs-5">
                    Submit
                </button>
            </div>
            <!-- -------------Modal----------------- -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" style="background-color: #F4B700;">
                        <div class="modal-header">
                            <p class="modal-title fs-5" id="exampleModalLabel">Congratulations</p>
                            <i class="bi bi-x fs-1" data-bs-dismiss="modal" style="color: #fddee0 !important;"></i>
                        </div>
                        <div class="modal-body text-center">
                            <p class="m-0 mb-4">Your Email verification has been done successfully, Now you can use this app
                                uninterruptedly</p>
                            <router-link to="/login-page">
                                <button class="btn btn-warning border w-100" data-bs-dismiss="modal">Ok</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import MacHiddleLogo from '@/modules/macHiddle/pages/auths/MacHiddleLogo.vue';
export default {
    data() {
        return {
            displayText: ""
        };
    },
    methods: {
        showText() {
            this.displayText = "OTP Resent";
        }
    },
    components: { MacHiddleLogo }
}
</script>

<style  scoped>
p,
a {
    color: black;
}

.btn-brand {
    font-weight: 700;
    color: #4C2E30;
    background-color: #ECA1A6;
    border-color: hsl(356, 74%, 70%) !important;
}

.icon {
    background: -webkit-linear-gradient(#492C2E, #ECA1A6);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>





  