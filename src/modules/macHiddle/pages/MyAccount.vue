<template>
    <div class="container mt-5 pt-3">
        <div class="container my-2">
            <div class="d-flex flex-column justify-content-center align-items-center mb-4 border-bottom">
                <img :src="profile" class="rounded-circle border" style="width:80px ; height: 80px;" alt="">
                <div class="ps-2 text-center">
                    <strong class="text-capitalize">{{ user.name }}</strong>
                    <p class="mb-1">{{ user.email }}</p>
                    <p class="mb-1">{{ user.mobile }}</p>
                </div>
                <div v-if="user.name" class="d-flex flex-column align-items-center">
                    <div v-if="checkVerify" class="d-flex flex-column align-items-center">
                        <p>Please Verfiy Your Email to continue shopping</p>
                        <router-link to="/email-verification-page" class="bi bi-envelope-check btn btn-dark"> Verify
                            Now</router-link>
                    </div>
                    <button  class="btn btn-danger rounded-pill my-2" @click="logOut()">Log
                        Out</button>
                </div>
                <router-link to="/login-page" v-else class="btn btn-success rounded-pill my-2">Log
                    In</router-link>
            </div>
            <div class="row row-cols-3 row-cols-md-6">
                <router-link :to="link.path"
                    class="col d-flex flex-column align-items-center text-decoration-none text-dark"
                    v-for="(link, index) in links" :key="index">
                    <div class="d-flex justify-content-center align-items-center rounded border"
                        style="width: 50px;height: 50px;">
                        <i class="bi fs-3" :class="link.icon"></i>
                    </div>
                    <p class="text-center smaller">{{ link.name }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyAccount',
    data() {
        return {
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aNRVLwfw1U28A7a4uf57VPdpzlHNA4WARw&usqp=CAU',
            verify: false,
            links: [
                // {
                //     icon: 'bi-person',
                //     name: 'My Account',
                //     path: '/myAccount',
                // },
                {
                    icon: 'bi-file-text',
                    name: 'My Orders',
                    path: '/orders/list',
                },
                {
                    icon: 'bi-book',
                    name: 'Address Book',
                    path: '/my-address',
                },
                {
                    icon: 'bi-hearts',
                    name: 'Wishlist',
                    path: '/wishlist',
                },
                {
                    icon: 'bi-shield-lock',
                    name: 'Update Password',
                    path: '/reset-password-page',
                },
                {
                    icon: 'bi-shield-exclamation',
                    name: 'Forgot Password',
                    path: '/forgot-password-page',
                },
                // {
                //     icon: 'bi-envelope-check',
                //     name: 'Verify Email',
                //     path: '/email-verification-page',
                // },
                // {
                //     icon: 'bi-stars',
                //     name: 'My Reviews',
                //     path: '/my-reviews',
                // },
            ]
        }
    },
    mounted() {
        this.$store.dispatch('LoggedInUserStore/fetchUserDetail')
    },
    computed: {
        user() {
            return this.$store.getters['LoggedInUserStore/getUserDetail']
        },
        checkVerify() {
            return !this.user.email_verified_at
        }, 
    },
    methods: {
        logOut() {
            this.$store.dispatch('LoggedInUserStore/logout')
        },
    }
}
</script>

<style lang="scss" scoped></style>