<template>
    <h1 class="text-center mt-4">You May Also Like</h1>
    <!-- <ProductCard :products="getAllProducts" :quickAdd="true" :options="true" :similar="true" /> -->
    <div class="container" style="padding-top:20px;padding-bottom:80px">
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
            <div class="col " v-for="(product, index) in getAllProducts" :key="index">
                <div class="card rounded-0 ">
                    <router-link :to="'/product-page/' + product.sid" class="text-decoration-none text-dark">
                        <div :id="'youMakeLike' + index" class="carousel slide">
                            <div class="carousel-inner">
                                <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                    :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in product.options"
                                    :key="imgIndex">
                                    <img :src="image.primary_image" class="card-img-top rounded-0" alt=""
                                        style="min-height:100px;">
                                </div>
                            </div>
                            <div class="d-flex mt-1" id="scroll" style="overflow-x: scroll;">
                                <button type="button" class="rounded-circle p-0 border me-1"
                                    :data-bs-target="'#youMakeLike' + index" :data-bs-slide-to="imgIndex"
                                    :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                                    v-for="(image, imgIndex) in product.options" :key="imgIndex">
                                    <img :src="image.primary_image" class="rounded-circle" alt=""
                                        style="width: 35px; height: 35px; object-fit: fill;">
                                </button>
                            </div>
                        </div>
                        <div class="card-body mt-1 px-1" style="padding:3px;font-size:13px;">
                            <p class="m-0 fw-bold text-truncate">{{ product.name }}</p>

                            <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                                <p class="m-0">₹{{ product.price }}</p>
                                <p class="m-0">{{ product.category.parent }}</p>
                            </div>
                        </div>
                    </router-link>
                    <div class=" position-absolute w-100">
                        <div class="d-flex justify-content-between align-items-start p-2">
                            <div class="wh-40 bg-light rounded-circle px-1">
                                <i class="bi bi-heart" @click="addToWishlist(product)"></i>
                            </div>
                            <div class="wh-40 bg-light rounded-circle px-1">
                                <i class="bi bi-bookmarks" data-bs-toggle="offcanvas" data-bs-target="#similarProducts"
                                    aria-controls="similarProducts"></i>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="btn-group w-100 rounded-0 overflow-hidden">
                        <button class="w-50 btn btn-dark rounded-0" data-bs-toggle="modal"
                            data-bs-target="#quickAddModal" :data-bs-productid="product.id" @mouseover="startPulse"
                            @mouseleave="stopPulse" :class="{ 'pulse-animation': isPulsing }">
                            <i class="bi bi-plus-square"></i> <span>Quick Add</span>
                        </button>
                    </div> -->

                    <!-- <div class="btn bg-light border-top  rounded-0 p-0" data-bs-toggle="modal"
                        data-bs-target="#quickAddModal" :data-bs-productsid="product.sid">
                        <input type="checkbox" class="btn-check" name="cart" :id="'cart' + product.sid"
                            autocomplete="off">
                        <label :for="'cart' + product.sid" style="padding:0px  !important">
                            <i class="bi bi-cart-plus fs-5"></i> <span>Quick Add</span>
                        </label>
                    </div> -->

                    <SimilarProductsOffcanvas :products="getAllProducts" />
                    <QuickAdd :product="getAllProducts" />
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import SimilarProductsOffcanvas from '@/modules/macHiddle/components/SimilarProductsOffcanvas.vue';
import QuickAdd from '@/modules/macHiddle/components/QuickAdd.vue';
import sweetAlert from "@/modules/macHiddle/mixins/sweet-alert";
// import { mapActions, mapGetters } from 'vuex';
// import ProductCard from '@/modules/macHiddle/components/ProductCard.vue';
export default {
    name: "YouMayLike",
    mixins: [sweetAlert],
    components: {
        // ProductCard,
        QuickAdd,
        SimilarProductsOffcanvas,
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            page: 1,
            isFetching: false,
            previousScrollTop: 0,
            // isPulsing: false
        }
    },
    computed: {
        products() {
            return this.$store.getters['MacStore/getProducts']
        },
        getAllProducts() {
            return this.$store.getters['MacStore/getAllProducts']
        },
        // ...mapGetters('MacStore', ['getAllProducts']),
    },
    mounted() {
        this.fetchProducts(this.page);
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        // ...mapActions('MacStore', ['fetchProducts']),
        fetchProducts() {
            this.$store.dispatch('MacStore/fetchProducts', this.page)
        },
        handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

            // Check if scrolling down
            if (scrollTop > this.previousScrollTop && clientHeight + scrollTop >= scrollHeight - 5 && !this.isFetching) {
                this.isFetching = true;
                if (this.page === 1) {
                    this.page++; // Increment page only for the first scroll
                }

                this.fetchProducts(this.page); // Dispatch action to fetch products
                this.page++; // Increment page for the next fetch
                this.isFetching = false;
            }
            this.previousScrollTop = scrollTop;
        },
        addToWishlist(product) {
            const data = {
                product_sid: product.sid
            }
            this.$store.dispatch('LoggedInUserStore/addToWishlist', data)
        },
    },
}
</script>