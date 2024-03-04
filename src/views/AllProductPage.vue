<template>
    <div class="overflow-x-hidden">
        <div class="py-3 d-flex align-items-center justify-content-center bg-light" style="margin-top: 80px;">
            <transition name="slide-fade" mode="out-in">
                <p class="mb-0 fs-5 bg-warning text-center p-2 rounded" style=" box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)"
                    :key="activeMessageIndex">{{ promotionMessages[activeMessageIndex] }}</p>
            </transition>
        </div>
        <div class="d-lg-none d-block">
            <catalog-filter></catalog-filter>
        </div>
        <div class="px-2  mt-2">
            <!-- <p class="d-md-block d-none mb-0 fs-2 text-center">{{ cleanedPath }}</p> -->
            <p class="d-md-block d-none mb-0 fs-2 text-center">{{ decodedPath }}</p>
            <div class="justify-content-between mb-2 d-none d-md-flex">
                <button class="btn btn-warning d-flex gap-2" @click="showFilterPanel = !showFilterPanel">
                    <i class="bi bi-sliders"></i>
                    <p v-if="!showFilterPanel" class="mb-0">Show Filters</p>
                    <p v-if="showFilterPanel" class="mb-0">Close Filters</p>
                </button>
                <div class="dropdown">
                    <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Sort By
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" @click="sortByPrice('high')">Sort by Price (High to Low)</a>
                        </li>
                        <li><a class="dropdown-item" href="#" @click="sortByPrice('low')">Sort by Price (Low to High)</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-3 border border-1" v-show="showFilterPanel">
                    <CategoryFilter></CategoryFilter>
                    <PriceFilter></PriceFilter>
                    <ColorFilter></ColorFilter>
                    <SizeFilter></SizeFilter>
                    <PatternFilter></PatternFilter>
                    <LengthFilter></LengthFilter>
                    <StyleFilter></StyleFilter>
                </div>
                <div :class="toggleCol">
                    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                        <div class="col " v-for="(product, index) in products" :key="index">
                            <div class="card rounded-0 show-on-hover">
                                <router-link :to="'/product-page/' + product.id" class="text-decoration-none text-dark">
                                    <div :id="'productImages' + index" class="carousel slide">
                                        <div class="carousel-inner">
                                            <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                                :class="{ active: imgIndex === 0 }"
                                                v-for="(image, imgIndex) in product.images" :key="imgIndex">
                                                <img :src="`${publicPath}${image}`" class="card-img-top rounded-0" alt=""
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
                                        <div class="d-flex justify-content-between px-2 my-2">
                                            <p class="fw-bold mb-0">₹ {{ product.price }}</p>
                                            <p class="fw-bold mb-0">{{ product.type }}</p>
                                        </div>
                                    </div>
                                </router-link>
                                <div class=" position-absolute w-100 soh-div">
                                    <div class="d-flex justify-content-end align-items-start p-2">
                                        <i class="bi bi-heart" @click="saveProduct(product.id)"></i>
                                    </div>
                                </div>

                                <div class="p-0 bg-warning rounded-0">
                                    <div class="btn-group w-100  overflow-hidden">
                                        <button class="btn" @click="showActive(product)">
                                            <i class="bi bi-plus-square"></i> <span>Quick Add</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- <div v-if="Object.keys(activeProduct).length !== 0">
            <div class="offcanvas-overlay" @click="hideActive()"></div>
            <div class="offcanvas offcanvas-bottom show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="staticBackdropLabel" style="height: calc(70% - 100px);">
                <div class="d-flex justify-content-center align-items-center border-bottom">
                    <div class=" w-100 d-flex justify-content-center align-items-center">
                        <p class="fw-bold text-center m-0">Product Performance</p>
                    </div>
                    <div class="d-flex justify-content-end w-100">

                        <button type="button" class="btn" @click="hideActive()"><i class="bi bi-x fs-3"></i></button>
                    </div>
                </div>

                <div class="offcanvas-body ">
                    <div class="border-bottom pb-3">
                        <div class="d-flex gap-3 align-item-center">
                            <p class="mb-1">Color : </p>
                            <div v-if="selectedColor">
                                <img :src="`${publicPath}${selectedColor.img}`" class="rounded-circle"
                                    style="width:40px;height:40px; object-fit: fill;">
                            </div>
                        </div>
                        <div class=" d-flex flex-wrap mt-2">
                            <div class="me-2" v-for="(color, index) in activeProduct.colors" :key="index">
                                <input type="radio" name="product-color" class="btn-check"
                                    :id="'selectProductColor' + index" autocomplete="off" :value="color"
                                    v-model="selectedColor" checked>
                                <label class="btn btn-outline-dark border-light rounded-circle p-0"
                                    :for="'selectProductColor' + index">
                                    <img class="rounded-circle" :src="`${publicPath}${color.img}`"
                                        style="width:40px;height:40px; object-fit: fill; margin: 0.05rem;" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="py-3 border-bottom">
                        <div class="d-flex gap-3">
                            <p class="mb-1">Size :</p>
                            <div v-if="selectedSize">
                                {{ selectedSize }}
                            </div>
                        </div>
                        <div class="d-flex">
                            <div v-for="(size, index) in activeProduct.sizes" :key="index" class="">
                                <input type="radio" class="btn-check" name="option" :id="'option' + size.id"
                                    autocomplete="off" :value="size.name" v-model="selectedSize" checked>
                                <label class="btn btn-outline-success m-2" :for="'option' + size.id">{{
                                    size.name }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="my-3">
                        <button class="btn btn-dark w-100" @click="addToCart(activeProduct.id)">Add To
                            Cart</button>
                    </div>
                </div>
            </div>
        </div> -->

        <div v-if="showPopup" class="popup d-flex justify-content-center align-items-center">
            <div class="text-center ">
                Item added to wishlist!
            </div>
        </div>
        <div v-if="showPopupCart" class="popup d-flex justify-content-center align-items-center">
            <div class="text-center ">
                Item added to cart!
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AllProductPage",

    data() {
        return {
            publicPath: process.env.BASE_URL,
            selectedColor: null,
            selectedSize: null,
            showPopup: false,
            showPopupCart: false,
            showFilterPanel: false,
            promotionMessages: [
                "Sale:Up to 50% off on selected items!",
                "Limited Time Offer: Buy one, get one free!",
                "Flash Sale: 24 hours of unbeatable deals!",
            ],
            activeMessageIndex: 0,
            currentPath: '',
            cleanedPath: '',
            decodedPath: ''
        }
    },
    computed: {
        products() {
            return this.$store.getters['MacStore/getProducts']
        },
        // activeProduct() {
        //     return this.$store.getters['catalog/getActiveProduct']
        // },
        toggleCol() {
            return this.showFilterPanel ? 'col-9' : 'col-12';
        },
    },
    mounted() {
        this.startSlideshow();
        this.$store.dispatch('closeMainMenu')
    },
    methods: {
        sortByPrice(order) {
            this.products.sort((a, b) => {
                if (order === 'high') {
                    return b.price - a.price;
                } else {
                    return a.price - b.price;
                }
            });
        },
        cleanPath(path) {
            // Remove '/catalogs/' using splice
            const parts = path.split('/');
            parts.splice(1, 1); // Remove the second part (index 1)
            return parts.join('');
        },
        decodePath(encodedPath) {
            return decodeURIComponent(encodedPath);
        },
        startSlideshow() {
            setInterval(() => {
                this.activeMessageIndex = (this.activeMessageIndex + 1) % this.promotionMessages.length;
            }, 5000); // Change message every 5 seconds
        },
        saveProduct(productId) {
            this.$store.dispatch('catalog/saveProduct', productId);
            this.showPopup = true;
            setTimeout(() => {
                this.showPopup = false;
            }, 2000);
        },
        addToCart() {
            const test = {
                productId: this.activeProduct.id,
                color: this.selectedColor,
                size: this.selectedSize,
            }
            this.$store.dispatch('catalog/AddToCart', test);
            this.showPopupCart = true;
            setTimeout(() => {
                this.showPopupCart = false
            }, 2000);
            this.selectedColor = null;
            this.selectedSize = null;
        },
        // showActive(product) {
        //     this.$store.dispatch('catalog/selectActiveProduct', product)
        // },
        // hideActive() {
        //     this.$store.dispatch('catalog/hideActiveProduct')
        //     this.selectedColor = null
        //     this.selectedSize = null
        // },
        showmore() {
            this.count = Object.keys(this.categoriesD).length
        },
        showless() {
            this.count = 5
        },
        toggleFilterPanel() {
            this.showFilterPanel = !this.showFilterPanel;
        },
    },
    created() {
        // Initialize the currentPath with the initial route path
        this.currentPath = this.$route.path;
        this.cleanedPath = this.cleanPath(this.currentPath);
        this.decodedPath = this.decodePath(this.cleanedPath);
    },
    watch: {
        '$route'(to) {
            // Update the currentPath and cleanedPath whenever the route changes
            this.currentPath = to.path;
            this.cleanedPath = this.cleanPath(this.currentPath);
            this.decodedPath = this.decodePath(this.cleanedPath);
        }
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
