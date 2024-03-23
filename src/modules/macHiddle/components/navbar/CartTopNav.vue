<template>
    <div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-md navbar-light fixed-top px-2 p-0" style="background-color: var(--secondary-color);">
            <!-- Back Arrow (Shown on Mobile) -->
            <div class="d-md-none mr-auto">
                <router-link to="/" style="color: var(--primary-color);"><i class="bi bi-chevron-left fs-2"></i></router-link>
            </div>

            <!-- Brand Logo -->
            <div class="mx-auto d-block d-md-none">
                <router-link to="/">
                    <img :src="`${publicPath}${img}`" style="width: 50px;object-fit: contain;" alt="Brand Logo"
                        class="navbar-brand">
                </router-link>
            </div>

            <!-- Brand Logo (Shown on Desktop) -->
            <div class="d-none d-md-block ml-auto">
                <router-link to="/">
                    <img :src="`${publicPath}${img}`" style="width: 60px;object-fit: contain;" alt="Brand Logo"
                        class="navbar-brand">
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'CartTopNav',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/mac2.png",
        }
    }
}
</script>