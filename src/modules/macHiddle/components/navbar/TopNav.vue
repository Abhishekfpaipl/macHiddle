<template>
    <div class="w-100 position-fixed top-0" style="z-index: 10;">
        <div class="d-flex justify-content-between align-items-center py-2 px-2"
            style="background-color: var(--secondary-color);">
            <div class="d-flex align-items-center">
                <i data-bs-toggle="offcanvas" data-bs-target="#topSideMenu" aria-controls="topSideMenu"
                    class="bi bi-list fs-4 mx-2" style="color: var(--primary-color);"></i>
                <router-link to="/search-page" class="d-flex">
                    <i class="bi bi-search fs-4 mx-2 " style="color: var(--primary-color);"></i>
                </router-link>
            </div>
            <router-link to="/" class="d-none d-lg-flex align-items-center text-decoration-none">
                <img :src="`${publicPath}${img}`" style="width: 60px;object-fit: contain;">
            </router-link>
            <router-link to="/" class="d-flex d-lg-none align-items-center text-decoration-none">
                <img :src="`${publicPath}${img}`" style="width: 50px;object-fit: contain;">
            </router-link>
            <div class="d-flex">
                <!-- <router-link to="/search-page" class="d-none d-md-block">
                    <i class="bi bi-search fs-4 mx-2" style="color: var(--primary-color);"></i>
                </router-link> -->
                <div class="text-center position-relative">
                    <i class="bi bi-bell fs-4 mx-2" data-bs-toggle="offcanvas" data-bs-target="#notificationOffcanvas"
                        aria-controls="notificationOffcanvas" style="color: var(--primary-color);"></i>
                    <span v-if="Object.keys(unreadNotificationsCount).length > 0"
                        class="badge count"> <span style="margin-left: -3px;">{{ unreadNotificationsCount
                            }}</span></span>

                </div>
                <div class="text-center position-relative">
                    <router-link to="/cart-page">
                        <i class="bi bi-cart fs-4 mx-2" style="color: var(--primary-color);"></i>
                        <span v-if="cart.products && Object.keys(cart.products).length > 0" class="badge count">{{
                            cart.products.length }}</span>

                    </router-link>
                </div>
            </div>
        </div>

        <!-- SideMenu Offcanvas -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="topSideMenu" aria-labelledby="topSideMenuLabel">
            <div class="offcanvas-header border-bottom" style="background-color: var(--secondary-color); ">
                <div class="d-flex align-items-center">
                    <img :src="`${publicPath}${img}`" style="width: 50px;object-fit: contain;">
                    <small class=" mb-0 ms-1 fw-bold" style=" color: var(--primary-color); letter-spacing: 2px">MAC
                        HIDDLE</small>
                </div>

                <button style="color: var(--primary-color);" type="button" class="fs-4 btn bi bi-x-lg"
                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div style="background-color: var(--secondary-color); color: var(--primary-color);"
                class="offcanvas-body position-relative w-100">
                <div v-for="(page, index) in pages" :key="index" class=" border-bottom py-3"
                    data-bs-dismiss="offcanvas">
                    <router-link :to="page.router" class=" d-flex text-start text-decoration-none"
                        style="color: var(--primary-color);">
                        <i :class="page.icon"></i>
                        <p class="m-0 ms-2">{{ page.name }}</p>
                    </router-link>
                </div>
                <router-link v-if="!user.name" to="/login-page"
                    class="border-bottom py-3 d-flex text-start text-decoration-none"
                    style="color: var(--primary-color);">
                    <i class="bi bi-arrow-right"></i>
                    <p class="m-0 ms-2">Login</p>
                </router-link>
            </div>
            <div class="position-absolute bottom-0 w-100 py-3" style="color: var(--primary-color);">
                <p class="text-center my-3 fs-4 ">Reach Us</p>
                <div class="d-flex justify-content-evenly fs-2 w-100">
                    <a href="https://www.instagram.com/" class="text-decoration-none"
                        style="color: var(--primary-color)">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" class="text-decoration-none"
                        style="color: var(--primary-color)">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://in.linkedin.com/" class="text-decoration-none" style="color: var(--primary-color)">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/" class="text-decoration-none" style="color: var(--primary-color)">
                        <i class="bi bi-youtube"></i>
                    </a>
                </div>
            </div>
        </div>


        <!-- Notification Offcanvas -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="notificationOffcanvas"
            aria-labelledby="notificationOffcanvasLabel">
            <div class="offcanvas-header p-2">
                <h5 class="offcanvas-title" id="notificationOffcanvasLabel">Notifications</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <NotificationPage :user="user" :notifications="notifications" />
            </div>
        </div>

    </div>
</template>

<script>
import NotificationPage from '@/modules/macHiddle/pages/notifications/NotificationPage.vue'
export default {
    name: 'TopNav',
    components: {
        NotificationPage
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/mac2.png",
            pages: [
                {
                    name: 'About Us',
                    icon: 'bi bi-arrow-right ',
                    router: '/aboutUs'
                },
                {
                    name: 'Account',
                    icon: 'bi bi-arrow-right ',
                    router: '/myAccount'
                },
                {
                    name: 'Support',
                    icon: 'bi bi-arrow-right ',
                    router: '/faqs/customer-service'
                },
                {
                    name: 'Career',
                    icon: 'bi bi-arrow-right ',
                    router: '/career'
                },
                // {
                //     name: 'Category',
                //     icon: 'bi bi-arrow-right ',
                //     router: '/categories'
                // },
                // {
                //     name: 'Login',
                //     icon: 'bi bi-arrow-right ',
                //     router: '/login-page'
                // },
            ],

        }
    },
    mounted() {
        this.$store.dispatch('LoggedInUserStore/fetchCart')
        this.$store.dispatch('LoggedInUserStore/fetchUserDetail')
        // this.$store.dispatch('LoggedInUserStore/fetchAllNotifications')
        this.$store.dispatch('LoggedInUserStore/fetchIntimationNotifications')
    },
    computed: {
        cart() {
            return this.$store.getters['LoggedInUserStore/getCart']
        },
        user() {
            return this.$store.getters['LoggedInUserStore/getUserDetail']
        },
        // notifications() {
        //     return this.$store.getters['LoggedInUserStore/getAllNotifications']
        // },
        notifications() {
            return this.$store.getters['LoggedInUserStore/getIntimationNotification']
        },
        unreadNotificationsCount() {
            const unreadIntimations = this.notifications.filter(notification => !notification.read_at).length;
            // const unreadOffers = this.notifications.offers.filter(notification => !notification.read_at).length;
            // const unreadPromotions = this.notifications.promotions.filter(notification => !notification.read_at).length;

            // return unreadIntimations + unreadOffers + unreadPromotions;
            return unreadIntimations;
        }

    },
    methods: {}
}
</script>

<style scoped>
.count {
    position: absolute;
    top: -4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #eb3e25;
    right: 0px;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 14px;
}

.pulse-animation {
    animation: pulse 1s infinite alternate;
}

@keyframes pulse {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }
}
</style>