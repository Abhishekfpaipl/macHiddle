<template>
    <div class="container">
        <!-- <div class="row">
            <div class="col-6 col-md-3">
                <div class="d-flex align-items-center mb-4">
                    <img :src="profile" class="rounded-circle border" style="width:80px ; height: 80px;" alt="">
                    <div class="ps-2 text-center">
                        <strong class="">User</strong>
                        <p class="mb-1">+91 2233556644</p>
                    </div>
                </div>
                <button class="btn btn-dark w-100"><i class="bi bi-person"></i> My Account</button>
                <router-link :to="link.path" class="d-flex align-items-center text-decoration-none text-dark m-1 p-1"
                    v-for="(link, index) in links" :key="index">
                    <i class="bi" :class="link.icon"></i>
                    <p class="ps-2 mb-1">{{ link.name }}</p>
                </router-link>
            </div>
            <div class="col-md-9 col-6">
                <h1>Hello, User!</h1>
                <div class="">
                    <div class="d-flex gap-3">
                        <p class="fs-5 text-capitalize">Personal Information</p>
                        <i class="bi bi-pencil"></i>
                        <span class="text-muted">Edit</span>
                    </div>
                    <div class="card">
                        <h5 class="card-header">Featured</h5>
                        <div class="d-flex gap-3 card-body">
                            <div class="d-flex flex-column">
                                <h5 class="card-title">Name</h5>
                                <p>User</p>
                            </div>
                            <div class="d-flex flex-column">
                                <h5 class="card-title">Gender</h5>
                                <p>Nikhil</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->



        <div class="container my-2">
            <div class="d-flex flex-column justify-content-center align-items-center mb-4 border-bottom">
                <img :src="profile" class="rounded-circle border" style="width:80px ; height: 80px;" alt="">
                <div class="ps-2 text-center">
                    <strong class="">User</strong>
                    <p class="mb-1">+91 2233556644</p>
                </div>
            </div>
            <div class="row row-cols-3 row-cols-md-6">
                <router-link :to="link.path"
                    class="col d-flex flex-column align-items-center text-decoration-none text-dark"
                    v-for="(link, index) in links" :key="index">
                    <div class="d-flex justify-content-center align-items-center rounded-circle border"
                        style="width: 50px;height: 50px;">
                        <i class="bi " :class="link.icon"></i>
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
            links: [
                {
                    icon: 'bi-person',
                    name: 'My Account',
                    path: '/info',
                },
                {
                    icon: 'bi-file-text',
                    name: 'My Orders',
                    path: '/my-orders',
                },
                {
                    icon: 'bi-cash',
                    name: 'My Credits',
                    path: '',
                },
                {
                    icon: 'bi-gift',
                    name: 'Loyalty Points',
                    path: '',
                },
                {
                    icon: 'bi-book',
                    name: 'Address Book',
                    path: '/my-address',
                },
                {
                    icon: 'bi-credit-card',
                    name: 'Saved Cards',
                    path: '',
                },
                {
                    icon: 'bi-hearts',
                    name: 'Wishlist',
                    path: '/wishlist',
                },
                {
                    icon: 'bi-stars',
                    name: 'My Preferences',
                    path: '',
                },
                {
                    icon: 'bi-stars',
                    name: 'My Reviews',
                    path: '/my-reviews',
                },
                {
                    icon: 'bi-box-arrow-right',
                    name: 'Log Out',
                    path: '',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>