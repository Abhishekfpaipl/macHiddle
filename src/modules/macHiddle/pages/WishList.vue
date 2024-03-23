<template>
    <div class="mt-5 pt-3" style="padding-top:60px;padding-bottom:80px">
        <!-- Mobile version -->
        <div class="d-block d-md-none">
            <div class="d-flex justify-content-center align-items-center">
                <div class="d-flex gap-2">
                    <i v-if="wishlists.length < 1" class="bi bi-heart"></i>
                    <i v-if="wishlists.length > 0" class="bi bi-heart-fill text-danger"></i>
                    <p> My Wishlist ({{ wishlists.length }})</p>
                </div>
            </div>

            <div v-if="wishlists.length === 0"
                class="bg-light w-100 d-flex flex-column justify-content-center align-items-center my-1"
                style="height: 50%; padding: 90px 0px;">
                <i class="bi bi-search fs-1"></i>
                <h3>Hmm, can't find any items.</h3>
            </div>

            <div class="container">
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-3">
                    <div class="col " v-for="(wishlist, index) in wishlists" :key="index">
                        <div class="card rounded-0">
                            <router-link :to="'/product-page/' + wishlist.product.slug"
                                class="text-decoration-none text-dark">
                                <div :id="'productImages' + index" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                            :class="{ active: imgIndex === 0 }"
                                            v-for="(image, imgIndex) in wishlist.product.options" :key="imgIndex">
                                            <img :src="image.primary_image" class="card-img-top rounded-0" alt=""
                                                style="min-height:100px;">
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2" id="scroll" style="overflow-x: scroll;">
                                        <button type="button" class="rounded-circle p-0 border me-1"
                                            :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                            :class="{ active: imgIndex === 0 }"
                                            :aria-current="imgIndex === 0 ? true : false"
                                            v-for="(image, imgIndex) in wishlist.product.options" :key="imgIndex">
                                            <img :src="image.primary_image" class="rounded-circle" alt=""
                                                style="width: 35px; height: 35px; object-fit: fill;">
                                        </button>
                                    </div>
                                    <div class="card-body mt-3 px-1" style="padding:3px;font-size:13px;">
                                        <p class="m-0 fw-bold truncate">{{ wishlist.product.name }}</p>
                                        <p class="m-0">₹{{ wishlist.product.price }}</p>
                                    </div>
                                </div>
                            </router-link>
                            <div class=" position-absolute w-100 d-flex justify-content-end align-items-start p-2">
                                <div class="wh-40 bg-light rounded-circle px-1" @click="removeWishlist(wishlist)"><i
                                        class="bi bi-x-lg"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Deskrop version -->
        <div class="container d-md-block d-none my-4">
            <div class="row">

                <div class="col-8">

                    <div class="d-flex align-items-center">
                        <div class="d-flex gap-2">
                            <i v-if="wishlists.length < 1" class="bi bi-heart"></i>
                            <i v-if="wishlists.length > 0" class="bi bi-heart-fill text-danger"></i>
                            <p> My Wishlist ({{ wishlists.length }})</p>
                        </div>
                    </div>
                    <div v-if="wishlists.length === 0"
                        class="bg-light w-100 d-flex flex-column justify-content-center align-items-center my-1"
                        style="height: 50%; padding: 90px 0px;">
                        <i class="bi bi-search fs-1"></i>
                        <h3>Hmm, can't find any items.</h3>
                    </div>

                    <div class="container">
                        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-3">
                            <div class="col " v-for="(wishlist, index) in wishlists" :key="index">
                                <div class="card rounded-0">
                                    <router-link :to="'/product-page/' + wishlist.product.slug"
                                        class="text-decoration-none text-dark">
                                        <div :id="'productImages' + index" class="carousel slide">
                                            <div class="carousel-inner">
                                                <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                                    :class="{ active: imgIndex === 0 }"
                                                    v-for="(image, imgIndex) in wishlist.product.options"
                                                    :key="imgIndex">
                                                    <img :src="image.primary_image" class="card-img-top rounded-0"
                                                        alt="" style="min-height:100px;">
                                                </div>
                                            </div>
                                            <div class="d-flex mt-2" id="scroll" style="overflow-x: scroll;">
                                                <button type="button" class="rounded-circle p-0 border me-1"
                                                    :data-bs-target="'#productImages' + index"
                                                    :data-bs-slide-to="imgIndex" :class="{ active: imgIndex === 0 }"
                                                    :aria-current="imgIndex === 0 ? true : false"
                                                    v-for="(image, imgIndex) in wishlist.product.options"
                                                    :key="imgIndex">
                                                    <img :src="image.primary_image" class="rounded-circle" alt=""
                                                        style="width: 35px; height: 35px; object-fit: fill;">
                                                </button>
                                            </div>
                                            <div class="card-body mt-3 px-1" style="padding:3px;font-size:13px;">
                                                <p class="m-0 fw-bold truncate">{{ wishlist.product.name }}</p>
                                                <p class="m-0">₹{{ wishlist.product.price }}</p>
                                            </div>
                                        </div>
                                    </router-link>
                                    <div class=" position-absolute w-100">
                                        <div class="d-flex justify-content-end align-items-start p-2">
                                            <p class="m-0" @click="removeWishlist(wishlist)"><i class="bi bi-x-lg"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="col-4 bg-light position-sticky" style="height: calc(100% - 100px); top:62px">
                    <div class="d-flex gap-2">
                        <i class="bi bi-truck"></i>
                        <p>Free Shipping for orders 990</p>
                    </div>
                    <div class="d-flex gap-2">
                        <i class="bi bi-cash"></i>
                        <p>Secure Payment & Checkout</p>
                    </div>
                    <div class="d-flex gap-2">
                        <i class="bi bi-arrow-repeat"></i>
                        <p>Easy Return, Free Pick Up</p>
                    </div>
                </div>

            </div>
        </div>
        <YouMayLike />

    </div>
</template>
<script>
import YouMayLike from '@/modules/macHiddle/components/YouMayLike.vue';
export default {
    name: "SavedProudct",
    components: {
        YouMayLike
    },
    computed: {
        wishlists() {
            return this.$store.getters['LoggedInUserStore/getWishlist']
        }
    },
    methods: {
        removeWishlist(wishlist) {
            this.$store.dispatch('LoggedInUserStore/removeFromWishlist', wishlist.sid)
        }
    },
    mounted() {
        this.$store.dispatch('LoggedInUserStore/fetchWishlist')
    }
}
</script>
