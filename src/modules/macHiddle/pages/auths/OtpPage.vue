<template>
    <div
        style="min-height: 100vh;background: rgb(73,44,46);">
        <MacHiddleLogo></MacHiddleLogo>
        <div class="px-4 pb-5 card rounded-5" style="padding-top: 20px;">
            <div class="d-flex flex-column align-items-center text-center">
                <h4>OTP has been sent to your email</h4>
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

            <div class="mt-4 p-2">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn w-100 text-white fs-5"
                    style="color:white;background: rgb(73,44,46);
                            background: linear-gradient(137deg, rgba(73,44,46,1) 0%, rgba(119,72,75,1) 33%, rgba(119,72,75,1) 67%, rgba(73,44,46,1) 100%);">
                    Submit
                </button>
            </div>
            <!-- -------------Modal----------------- -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Congratulations</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <p class="m-0 mb-4">Your Email verification has been done successfully, Now you can use this app
                                uninterruptedly</p>
                            <router-link to="/login-page">
                                <button class="btn text-white w-100" data-bs-dismiss="modal"
                                    style="color:white;background: rgb(73,44,46);
                            background: linear-gradient(137deg, rgba(73,44,46,1) 0%, rgba(119,72,75,1) 33%, rgba(119,72,75,1) 67%, rgba(73,44,46,1) 100%);">Ok</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import MacHiddleLogo from './MacHiddleLogo.vue';
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
.icon {
    background: -webkit-linear-gradient(#492C2E, #ECA1A6);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>





  