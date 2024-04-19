<template>
    <div class="container-fluid d-md-none d-flex justify-content-between align-items-center" ref="topnav"
        :style="`background: rgb(35,31,32, ${backgroundOpacity});`">
        <div class="d-flex align-items-center gap-3">
            <i class="bi bi-arrow-left fs-2 brand-text" @click="goBack" style="color: var(--primary-color);"></i>
            <router-link to="/search" style="color: var(--primary-color);">
                <i class="bi bi-search fs-2 brand-text"></i>
            </router-link>
        </div>
        <router-link to="/" :class="{ 'hide-on-scroll': hideOnScroll }"
            class="text-decoration-none d-flex align-items-center">
            <img :src="`${publicPath}${logo}`" alt="Brand Logo" style="height: 50px;">

        </router-link>
         <div class="d-flex align-items-center gap-3">

            <router-link to="/wishlist" :class="{ 'text-danger': currentRoute === 'SavedProduct' }"
                class="text-decoration-none" style="color: var(--primary-color);">
                <i class="bi bi-heart mt-1 fs-2 brand-text"></i>
            </router-link>

            <router-link to="/cart-page" :class="{ 'text-danger': currentRoute === 'simplestepper' }"
                class="text-decoration-none" style="color: var(--primary-color);">
                <i class="bi bi-cart3 fs-2 pe-1 brand-text"></i>
            </router-link>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ProductTopnav',
    data() {
        return {
            prevScrollPos: 0,
            backgroundOpacity: 0,
            hideOnScroll: true,
            publicPath: process.env.BASE_URL,
            logo: 'img/logo/MacHiddle-nobg.png',
        };
    },
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercentage >= 10 && scrollPercentage <= 15) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = true;
            } else if (scrollPercentage > 10) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
        goBack() {
            window.history.back();
        }

    }
};
</script>
  
<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
} 
.container-fluid {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    z-index: 10;
}
</style>
  