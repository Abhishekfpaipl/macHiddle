<template>
    <div class="pt-3" style="color: var(--primary-color); background-color: var(--secondary-color);">
        <div class="d-md-flex flex-column-sm justify-content-evenly py-4 px-3  ">
            <div class="mb-3 text-center">
                <router-link to="/">
                    <img :src="`${publicPath}${img}`" alt="brand logo" style="width: 100px;object-fit: contain;">
                </router-link>
                <p class="mb-2 fw-bold" style="letter-spacing: 6px">MAC HIDDLE</p>
                <p class="mb-2">Specially Crafted For Alpha Males</p>
            </div>
            <div class="d-block d-lg-flex flex-column mb-3">
                <p class="mb-2 fw-bold">Resources</p>
                <router-link to="/aboutUs" style="text-decoration: none; color: var(--primary-color);">
                    <p class="mb-2">About</p>
                </router-link>
                <router-link to="/faqs/customer-service" style="text-decoration: none; color: var(--primary-color);">
                    <p class="mb-2">Support</p>
                </router-link>
                <router-link to="/career" style="text-decoration: none; color: var(--primary-color);">
                    <p class="mb-2">Career</p>
                </router-link>
            </div>
            <div class="d-block d-lg-flex flex-column mb-3">
                <p class="mb-2 fw-bold">Policies</p>
                <router-link to="/privacy-policy" style="text-decoration: none; color: var(--primary-color);">
                    <p class="mb-2">Privacy Policy</p>
                </router-link>
                <router-link to="/terms" style="text-decoration: none; color: var(--primary-color);">
                    <p class="mb-2">Terms & Condition</p>
                </router-link>
                <router-link to="/return-policy" style="text-decoration: none; color: var(--primary-color);">
                    <p class="mb-2">Return & Refund</p>
                </router-link>
            </div>
            <div class="d-block d-lg-flex align-items-center flex-column mb-3">
                <i class="bi bi-envelope fs-1"></i>
                <p>Subscribe To Know Offers & Promotions</p>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="email" aria-label="Recipient's username"
                        aria-describedby="basic-addon2">
                    <span class="input-group-text" style="background-color: var(--primary-color);" id="basic-addon2"><i
                            class="bi bi-arrow-right"></i></span>
                </div>
            </div>

        </div>
        <div class="text-center py-3 d-flex align-items-center justify-content-center"
            style="background-color: var(--primary-color);">
            <p style="color: var(--secondary-color);" class=" mb-0"> Copyright © 2024 machiddle.in All rights reserved</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterBar',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/mac2.png",
        }
    },
}
</script>

<style></style>
