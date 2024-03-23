<template>
    <div class="overflow-x-hidden">
        <div class="py-3 d-flex align-items-center justify-content-center bg-light">
            <transition name="slide-fade" mode="out-in">
                <p class="mb-0 fs-5 bg-dark text-white text-center p-2"
                    style=" box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)" :key="activeMessageIndex">{{
                        promotionMessages[activeMessageIndex] }}</p>
            </transition>
        </div>
        <div class="d-lg-none d-block">
            <!-- <CatelogFilter/> -->
            <div class="d-flex gap-4 overflow-x-scroll px-3 py-2 border-bottom" id="scroll">
                <div class="text-capitalize fw-bold" v-for="(category, categoryIndex) in categories"
                    :key="categoryIndex">
                    {{ category.name }}
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center px-3 mt-2">
                <span>
                    {{ allProducts.length }} Results
                </span>
                <span class="rounded-pill border p-2" data-bs-toggle="offcanvas" data-bs-target="#filterOffcanvas"
                    role="button" aria-expanded="false"> Filter
                    <i class="bi bi-sliders"></i></span>
            </div>
        </div>
        <div class="px-2  mt-2">
            <div class="justify-content-between mb-2 d-none d-md-flex">
                <button class="btn btn-dark rounded-0 d-flex gap-2" @click="showFilterPanel = !showFilterPanel">
                    <i class="bi bi-sliders"></i>
                    <p v-if="!showFilterPanel" class="mb-0">Show Filters</p>
                    <p v-if="showFilterPanel" class="mb-0">Close Filters</p>
                </button>
                <div class="dropdown">
                    <button class="btn btn-dark rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Sort By
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" @click="sortByPrice('high')">Price (High to Low)</a>
                        </li>
                        <li><a class="dropdown-item" href="#" @click="sortByPrice('low')">Price (Low to High)</a>
                        </li>
                        <li><a class="dropdown-item" href="#">Ratings (High to Low)</a>
                        </li>
                        <li><a class="dropdown-item" href="#">Ratings (Low to High)</a>
                        </li>
                        <li><a class="dropdown-item" href="#">Reviews (High to Low)</a>
                        </li>
                        <li><a class="dropdown-item" href="#">Reviews (Low to High)</a>
                        </li>
                        <li><a class="dropdown-item" href="#">Stock Availability (High to Low)</a>
                        </li>
                        <li><a class="dropdown-item" href="#">Stock Availability (Low to High)</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-3 border border-1" v-show="showFilterPanel"> 
                    <CategoryFilter :categories="categories" />
                    <PriceFilter></PriceFilter>
                    <ColorFilter></ColorFilter>
                    <SizeFilter></SizeFilter>
                    <PatternFilter></PatternFilter>
                    <LengthFilter></LengthFilter>
                    <StyleFilter></StyleFilter>
                </div>
                <div :class="toggleCol">
                    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                        <div class="col " v-for="(product, index) in getAllProducts" :key="index">
                            <div class="card rounded-0 show-on-hover">
                                <router-link :to="'/product-page/' + product.slug"
                                    class="text-decoration-none text-dark">
                                    <div :id="'productImages' + index" class="carousel slide">
                                        <div class="carousel-inner">
                                            <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                                :class="{ active: imgIndex === 0 }"
                                                v-for="(image, imgIndex) in product.options" :key="imgIndex">
                                                <img :src="image.primary_image" class="card-img-top rounded-0" alt=""
                                                    style="min-height:100px;">
                                            </div>
                                        </div>
                                        <div class="d-flex mt-2" id="scroll" style="overflow-x: scroll;">
                                            <button type="button" class="rounded-circle p-0 border me-1"
                                                :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                                :class="{ active: imgIndex === 0 }"
                                                :aria-current="imgIndex === 0 ? true : false"
                                                v-for="(image, imgIndex) in product.images" :key="imgIndex">
                                                <img :src="`${publicPath}${image}`" class="rounded-circle" alt=""
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
                                        <i class="bi bi-heart" @click="saveProduct(product.id)"></i>
                                        <i class="bi bi-bookmarks" data-bs-toggle="offcanvas"
                                            data-bs-target="#similarProducts" aria-controls="similarProducts"></i>
                                    </div>
                                </div>

                                <div class="btn-group w-100 rounded-0 overflow-hidden">
                                    <button class="w-50 btn btn-dark rounded-0" data-bs-toggle="modal"
                                        data-bs-target="#quickAddModal" :data-bs-productid="product.id">
                                        <i class="bi bi-plus-square"></i> <span>Quick Add</span>
                                    </button>
                                </div>

                                <SimilarProductsOffcanvas :products="getAllProducts" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <QuickAdd :product="getAllProducts" />

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="filterOffcanvas"
            aria-labelledby="filterOffcanvasLabel" style="height:80vh">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title fw-bold" id="filterOffcanvasLabel">Filters </h5>
                <div class=" bg-white w-100" style="bottom:0px;">
                    <div class="d-flex justify-content-evenly gap-1">
                        <button class="btn btn-outline-dark rounded-0 w-25" data-bs-dismiss="offcanvas">Clear</button>
                        <button class="btn btn-outline-dark  rounded-0 w-25" data-bs-dismiss="offcanvas">Apply</button>
                    </div>
                </div>
            </div>

            <div class="offcanvas-body p-0">
                <div class="accordion accordion-flush p-2" id="accordionFlushExample" style="padding-bottom: 60px;">
                    <CategoryFilter :categories="categories" />
                    <PriceFilter />
                    <ColorFilter />
                    <SizeFilter />
                    <PatternFilter />
                    <LengthFilter />
                    <StyleFilter />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryFilter from '@/modules/macHiddle/components/filters/CategoryFilter.vue';
import PriceFilter from '@/modules/macHiddle/components/filters/PriceFilter.vue';
import ColorFilter from '@/modules/macHiddle/components/filters/ColorFilter.vue';
import SizeFilter from '@/modules/macHiddle/components/filters/SizeFilter.vue';
import PatternFilter from '@/modules/macHiddle/components/filters/PatternFilter.vue';
import LengthFilter from '@/modules/macHiddle/components/filters/LengthFilter.vue';
import StyleFilter from '@/modules/macHiddle/components/filters/StyleFilter.vue';
import QuickAdd from '@/modules/macHiddle/components/QuickAdd.vue';
import SimilarProductsOffcanvas from '@/modules/macHiddle/components/SimilarProductsOffcanvas.vue';
// import axiosInstance from '../axiosInstance';

import { mapActions, mapGetters } from 'vuex';

export default {
    name: "AllProductPage",
    components: {
        CategoryFilter,
        // CatelogFilter,
        PriceFilter,
        ColorFilter,
        SizeFilter,
        PatternFilter,
        LengthFilter,
        StyleFilter,
        QuickAdd,
        SimilarProductsOffcanvas,
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            showFilterPanel: false,
            promotionMessages: [
                "Sale:Up to 50% off on selected items!",
                "Limited Time Offer: Buy one, get one free!",
                "Flash Sale: 24 hours of unbeatable deals!",
            ],
            activeMessageIndex: 0,
            categories: [],
            page: 1,
            isFetching: false,
            allProducts: [],
            previousScrollTop: 0,
        }
    },
    computed: {
        toggleCol() {
            return this.showFilterPanel ? 'col-9' : 'col-12';
        },
        ...mapGetters('MacStore', ['getAllProducts']),
        // allProducts() {
        //     return this.$store.getters['MacStore/getAllProducts']
        // }
    },
    mounted() {
        this.startSlideshow();
        this.fetchProducts(this.page); // Initial fetch
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll); // Clean up the event listener
    },
    methods: { 
        ...mapActions('MacStore', ['fetchProducts']),
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

            // Update previous scroll position
            this.previousScrollTop = scrollTop;
        },


        sortByPrice(order) {
            this.products.sort((a, b) => {
                if (order === 'high') {
                    return b.price - a.price;
                } else {
                    return a.price - b.price;
                }
            });
        },
        startSlideshow() {
            setInterval(() => {
                this.activeMessageIndex = (this.activeMessageIndex + 1) % this.promotionMessages.length;
            }, 5000); // Change message every 5 seconds
        },
        toggleFilterPanel() {
            this.showFilterPanel = !this.showFilterPanel;
        },
    },
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 1s, transform 1s;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(20px);
}

.accordion-button:focus {
    box-shadow: none;
}

.nav-bottom {
    display: none !important;
}

#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: greenyellow;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    z-index: 1000;
}

.offcanvas-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}
</style>
