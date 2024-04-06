<template>
    <nav class="d-block d-md-none navbar navbar-expand-lg top-brand p-0 border-top position-fixed bottom-0 w-100"
        style="z-index: 9;background-color: #231F20;">
        <div class="container-fluid">
            <div class="navbar-nav d-flex flex-row w-100 justify-content-around ">
                <div class="nav-item" v-for="(link, linkIndex) in links" :key="linkIndex">
                    <router-link :to="link.path" class="nav-link text-secondary"
                        :class="{ 'active': isLinkActive(link) }">
                        <div class="d-flex flex-column align-items-center fw-bold">
                            <i class="bi" :class="link.icon"></i>
                            <div style="font-size: 0.75rem;">{{ link.name }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'EcomBottomnav',
    data() {
        return {
            links: [
                {
                    path: '/',
                    icon: 'bi-shop-window',
                    name: 'Shop'
                },
                {
                    path: '/categories',
                    icon: 'bi-grid-1x2',
                    name: 'Category'
                },
                {
                    path: '/wishlist',
                    icon: 'bi-heart',
                    name: 'Wishlist'
                },
                {
                    path: '/orders/list',
                    icon: 'bi-journal',
                    name: 'Orders'
                },
                {
                    path: '/myAccount',
                    icon: 'bi-person',
                    name: 'Account'
                },
                // {
                //     path: '/aboutUs',
                //     icon: 'bi-globe',
                //     name: 'About'
                // },
            ]
        }
    }, 
    methods: {
        isLinkActive(link) {
            return this.$route.matched.some((route) => {
                return route.path === link.path || (route.path !== '/' && link.path.startsWith(route.path));
            });
        },
    },
}
</script>
<style>
.router-link-active.router-link-exact-active.nav-link,
.active {
    color: #EDC3AB !important;
}
</style>