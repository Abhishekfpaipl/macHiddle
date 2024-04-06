<template>
    <h1 class="text-center mt-4">You May Also Like</h1>
    <div v-if="Object.keys(getAllProducts).length > 0" class="container" style="padding-top:20px;padding-bottom:80px">
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-2">
            <div class="col mt-2" v-for="(product, index) in getAllProducts" :key="index">
                <div class="card rounded-0">
                    <router-link :to="{ name: 'ProductPage', params: { productId: product.sid } }"
                        class="text-decoration-none text-dark">
                        <div :id="'youMakeLike' + index" class="carousel slide">
                            <div class="carousel-inner">
                                <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                    :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in product.options"
                                    :key="imgIndex">
                                    <img :src="image.primary_image" class="card-img-top rounded-0" alt=""
                                        style="min-height:100px;">
                                </div>
                            </div>
                            <div class="d-flex mt-1 px-1" id="scroll" style="overflow-x: scroll;">
                                <button type="button" class="rounded p-0 border me-1"
                                    :data-bs-target="'#youMakeLike' + index" :data-bs-slide-to="imgIndex"
                                    :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                                    v-for="(image, imgIndex) in product.options" :key="imgIndex">
                                    <img :src="image.primary_image" class="rounded" alt=""
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
                                <i class="bi"
                                    :class="{ 'bi-heart-fill text-danger': product.isInWishlist, 'bi-heart': !product.isInWishlist }"
                                    @click="addToWishlist(product)"></i>

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

    <div v-else class="placeholder-glow container my-2">
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-2">
            <div class="col" v-for="item in [1, 2, 3, 4]" :key="item">
                <div class="card rounded-0">
                    <div class="placeholder" style="height:300px;"></div>
                </div>
                <div class="d-flex mt-1 px-1" id="scroll" style="overflow-x: scroll;">
                    <button class="placeholder col-4 rounded" style="height: 35px;width:35px;"></button>
                    <button class="placeholder col-4 rounded" style="height: 35px;width:35px;"></button>
                </div>
                <div class="my-1 col-12 placeholder" style="height: 20px;"></div>
                <div class="container">
                    <div class="row">
                        <div class="my-1 col-4 placeholder" style="height: 20px;"></div>
                        <div class="my-1 col-4" style="height: 20px;"></div>
                        <div class="my-1 col-4 placeholder" style="height: 20px;"></div>
                    </div>
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
        check() {
            return this.$store.getters['MacStore/getCheck']
        },
        wishlist() {
            return this.$store.getters['LoggedInUserStore/getWishlist']
        }
        // ...mapGetters('MacStore', ['getAllProducts']),
    },
    mounted() {
        this.fetchProducts(this.page);
        this.$store.dispatch('LoggedInUserStore/fetchWishlist')
        // .then(() => {
        //     // Check wishlist status for each product in getAllProducts
        //     this.getAllProducts.forEach(product => {
        //         product.isInWishlist = this.isInWishlist(product);
        //     });
        // });
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
            const { scrollTop, scrollHeight } = document.documentElement;

            // Calculate the halfway point of the page
            const halfwayPoint = scrollHeight / 2;

            // Check if scrolling down and reaching halfway
            if (scrollTop > this.previousScrollTop && scrollTop >= halfwayPoint && !this.isFetching) {
                this.isFetching = true;
                if (this.page <= this.check.last_page) {
                    if (this.page === 1) {
                        this.page++;
                    }
                    this.fetchProducts(this.page);
                    this.page++;
                }
                this.isFetching = false;
            }
            this.previousScrollTop = scrollTop;
        },
        // addToWishlist(product) {
        //     const data = {
        //         product_sid: product.sid
        //     }
        //     this.$store.dispatch('LoggedInUserStore/addToWishlist', data)
        //     this.$store.dispatch('LoggedInUserStore/removeFromWishlist', data)
        // },
        addToWishlist(product) {
            const data = {
                product_sid: product.sid
            }
            // if (this.isInWishlist(product)) {
            //     console.log('remove check', product.sid)
            //     this.$store.dispatch('LoggedInUserStore/removeFromWishlist', product.sid)
            // } 
            // else {
            this.$store.dispatch('LoggedInUserStore/addToWishlist', data)
            // }
        },
        isInWishlist(product) {
            return this.wishlist.some(item => item.product.sid === product.sid);
        },
    },
    watch: {
        // Watcher for changes in the wishlist
        wishlist: {
            handler(newVal) {
                // Update isInWishlist property for each product in getAllProducts
                this.getAllProducts.forEach(product => {
                    product.isInWishlist = newVal.some(item => item.product.sid === product.sid);
                });
            },
            deep: true // Watch for changes in nested properties
        }
    }
}
</script>