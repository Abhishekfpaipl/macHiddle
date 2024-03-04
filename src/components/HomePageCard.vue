<template>
    <h1 class="text-center mt-4">You May Also Like</h1>
    <div class="container" style="padding-top:20px;padding-bottom:80px">
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
            <div class="col " v-for="(product, index) in allProducts" :key="index">
                <div class="card rounded-0 show-on-hover">
                    <router-link :to="'/product-page/' + product.slug" class="text-decoration-none text-dark">
                        <div :id="'productImages' + index" class="carousel slide">
                            <div class="carousel-inner">
                                <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                    :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in product.options"
                                    :key="imgIndex">
                                    <img :src="image.primary_image" class="card-img-top rounded-0" alt=""
                                        style="min-height:100px;">
                                </div>
                            </div>
                            <div class="d-flex mt-2" id="scroll" style="overflow-x: scroll;">
                                <button type="button" class="rounded-circle p-0 border me-1"
                                    :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                    :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                                    v-for="(image, imgIndex) in product.options" :key="imgIndex">
                                    <img :src="image.primary_image" class="rounded-circle" alt=""
                                        style="width: 35px; height: 35px; object-fit: fill;">
                                </button>
                            </div>
                            <div class="card-body mt-3 px-1" style="padding:3px;font-size:13px;">
                                <p class="m-0 fw-bold truncate">{{ product.name }}</p>

                                <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                                    <p class="m-0">₹{{ product.price }}</p>
                                    <p class="m-0">{{ product.category.parent }}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <div class=" position-absolute w-100">
                        <div class="d-flex justify-content-between align-items-start p-2">
                            <i class="bi bi-heart" @click="addToWishlist(product)"></i>
                            <i class="bi bi-bookmarks" data-bs-toggle="offcanvas" data-bs-target="#similarProducts"
                                aria-controls="similarProducts"></i>
                        </div>
                    </div>

                    <div class="btn-group w-100 rounded-0 overflow-hidden">
                        <button class="w-50 btn btn-dark rounded-0" data-bs-toggle="modal" data-bs-target="#quickAddModal"
                            :data-bs-productid="product.id">
                            <i class="bi bi-plus-square"></i> <span>Quick Add</span>
                        </button>
                    </div>

                    <SimiliarProductsOffcanvas :products="allProducts" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SimiliarProductsOffcanvas from '@/modules/macHiddle/components/SimiliarProductsOffcanvas.vue';
import axiosInstance from '@/modules/macHiddle/axiosInstance';
import sweetAlert from "@/modules/macHiddle/mixins/sweet-alert";
export default {
    mixins: [sweetAlert],
    name: "CardCatelog",
    components: {
        SimiliarProductsOffcanvas
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        products() {
            return this.$store.getters['MacStore/getProducts']
        },
        allProducts() {
            return this.$store.getters['MacStore/getAllProducts']
        }
    },
    mounted() {
        this.$store.dispatch('MacStore/fetchAllProducts')
    },
    methods: {
        showProduct(product) {
            return this.$store.dispatch('selectProduct', product)
        },
        addToWishlist(product) {
            const postData = {
                product_id: product.id
            }
            console.log(postData)

            let token = localStorage.getItem('token')
            axiosInstance.post('wishlists', postData, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    sweetAlert.showSweetAlert('Yay!', 'Product Added to Wishlist')
                    // if (response.data.success) {
                    // }
                    console.log(response)
                })
            // this.$store.dispatch('MacStore/addToWishlist', postData)
        },
    },
}
</script>
<style>
.show-on-hover .soh-div {
    opacity: .75;
}

.show-on-hover:hover .soh-div {
    opacity: 1;
}

.test {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #505050;
}

#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}
</style>
