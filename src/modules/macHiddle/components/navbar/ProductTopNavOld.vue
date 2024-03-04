<template>
    <div class="container d-md-none" ref="topnav" style="z-index:11;height:59px ;top:0px;"
        :style="`background-color:rgb(35,31,32)  ${backgroundOpacity});`">
        <div class="d-flex justify-content-between position-fixed px-2 w-100 align-items-center">
            <div class="d-flex gap-3">
                <div class=""><i class="bi bi-arrow-left fs-1" @click="goBack()"></i></div>
                <router-link to="/search-page" class="text-decoration-none text-dark">
                    <div class=""><i class="bi bi-search fs-1"></i></div>
                </router-link>
            </div>
            <router-link to="/" :class="{ 'hide-on-scroll': hideOnScroll }">
                <img :src="`${publicPath}${logo}`" style="width: 80px;">
            </router-link>

            <div class="d-flex gap-3 pe-2">
                <router-link to="/wishlist" class="text-dark">
                    <div class="position-relative">
                        <i class="bi bi-heart fs-1"></i>
                        <!-- <span class="badge count">{{ savedProducts.length }}</span> -->
                    </div>
                </router-link>
                <router-link to="/cart-page" class="text-dark">
                    <div class="position-relative">
                        <i class="bi bi-cart fs-1"></i>
                        <!-- <span class="badge count">{{ cart.length }}</span> -->
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logo: 'img/logo/MacHiddle-nobg.png',
            publicPath: process.env.BASE_URL,
            prevScrollPos: 0,
            backgroundOpacity: 0,
            hideOnScroll: true,
        }
    },
    computed: {
        // savedProducts() {
        //     return this.$store.getters['catalog/getSavedProducts']
        // },
        // cart() {
        //     return this.$store.getters['catalog/getCart']
        // },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        goBack() {
            window.history.back()
        },
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
    }
}
</script>

<style scoped>
.count {
    position: absolute;
    top: -4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #eb3e25;
    right: -8px;
    color: #fff;
    font-size: 11px;
    text-align: center;
    line-height: 12px;
}

.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.container {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--secondary-color);
    padding: 10px;
    z-index: 10;
}
</style>