<template>
    <!-- <div class="container my-2"> -->
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-1">
            <div class="col" v-for="(product, index) in products" :key="index">
                <div class="card rounded-0 show-on-hover">
                    <router-link :to="'/product-page/' + product.sid" class="text-decoration-none text-dark">
                        <div :id="'productImages' + index" class="carousel slide">
                            <div class="carousel-inner">
                                <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                    :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in product.options"
                                    :key="imgIndex">
                                    <img :src="image.primary_image" class="card-img-top rounded-0" alt=""
                                        style="min-height:100px;">
                                </div>
                            </div>
                            <div v-if="options" class="d-flex mt-2" id="scroll" style="overflow-x: scroll;">
                                <button type="button" class="rounded-circle p-0 border me-1"
                                    :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                    :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                                    v-for="(image, imgIndex) in product.options" :key="imgIndex">
                                    <img :src="image.primary_image" class="rounded-circle" alt=""
                                        style="width: 35px; height: 35px; object-fit: fill;">
                                </button>
                            </div>
                            <div class="card-body mt-1 px-1" style="padding:3px;font-size:13px;">
                                <p class="m-0 fw-bold truncate">{{ product.name }}</p>

                                <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                                    <p class="m-0">₹{{ product.price }}</p>
                                    <p v-if="product.category" class="m-0">{{ product.category.parent }}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <div class=" position-absolute w-100 d-flex justify-content-between align-items-start p-2">
                        <div class="wh-40 bg-light rounded-circle px-1">
                            <i class="bi bi-heart" v-if="!product.inWishlist" @click="addToWishlist(product)"></i>
                            <i class="bi bi-heart-fill text-danger" v-else></i>
                        </div>
                        <div v-if="similar" class="wh-40 bg-light  rounded-circle px-1">
                            <i class="bi bi-bookmarks" data-bs-toggle="offcanvas" data-bs-target="#similarProducts"
                                aria-controls="similarProducts"></i>
                        </div>
                    </div>

                    <!-- <div class="btn-group w-100 rounded-0 overflow-hidden">
                        <button class="w-50 btn btn-dark rounded-0" data-bs-toggle="modal"
                            data-bs-target="#quickAddModal" :data-bs-productid="product.id">
                            <i class="bi bi-plus-square"></i> <span>Quick Add</span>
                        </button>
                    </div> -->
                    <div v-if="quickAdd" class="btn bg-light border-top  rounded-0 p-0" data-bs-toggle="modal"
                        data-bs-target="#quickAddModal" :data-bs-productid="product.id">
                        <input type="checkbox" class="btn-check" name="cart" :id="'cart' + product.id"
                            autocomplete="off">
                        <label :for="'cart' + product.id" style="padding:0px  !important">
                            <i class="bi bi-cart-plus fs-5"></i> <span>Quick Add</span>
                        </label>
                    </div>

                    <SimilarProductsOffcanvas :products="products" />
                    <QuickAdd :product="products" />
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import SimilarProductsOffcanvas from '@/modules/macHiddle/components/SimilarProductsOffcanvas.vue';
import QuickAdd from '@/modules/macHiddle/components/QuickAdd.vue';

export default {
    name: 'ProductCard',
    props: ['products', 'quickAdd', 'options', 'similar'],
    components: {
        QuickAdd,
        SimilarProductsOffcanvas,
    },
    methods: {
        addToWishlist(product) {
            const data = {
                product_sid: product.sid
            }
            this.$store.dispatch('LoggedInUserStore/addToWishlist', data) 
        },

    }
}
</script>

<style lang="scss" scoped></style>