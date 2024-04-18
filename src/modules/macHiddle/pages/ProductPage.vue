<template>
    <div v-if="Object.keys(showProduct).length > 0" class="prod container my-5 py-3 pt-md-4">
        <div class="row bg-light">
            <div class="col-lg-5 d-flex prod-img p-2">
                <div class="d-flex flex-column ms-2 ms-md-0 prod-thumb" id="scroll">
                    <img class="" :src="image.primary_image" style="width: 60px; object-fit: cover;"
                        v-for="(image, index) in showProduct.options" :key="index" v-on:click="selectImage(image)" />
                </div>
                <div class="ms-md-2 flex-fill">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" v-for="(image, index) in selectedImage" :key="index"
                                data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index"
                                :class="{ active: index === 0 }" aria-current="true" aria-label="Slide 1"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item" v-for="(image, index) in selectedImage" :key="index"
                                :class="{ active: index === 0 }" data-bs-interval="2000">
                                <img :src="image" class="" style="height: 500px; width: 400px; object-fit: cover;"
                                    :alt="image.alt">
                            </div>
                        </div>
                    </div>
                    <!-- <img :src="selectedImage" class="" style="width: 100%; " /> -->
                </div>
            </div>


            <div class="col-lg-7 p-2">
                <div class="bg-white p-2 mb-2">
                    <p class="fs-5 my-2">{{ showProduct.name }}</p>
                    <div class="d-flex justify-content-between align-items-center border-bottom pb-1">
                        <small v-if="showProduct.category" class="text-muted">{{ showProduct.category.parent }}</small>
                        <div class="d-flex gap-2">
                            <i class="bi fs-4 d-md-block d-none" @click="addToWishlist(showProduct)"
                                @transitionend="removeRotatedClass"
                                :class="[{ 'bi heart rotated': isHeartRotated }, { 'bi-heart-fill text-danger': showProduct.isInWishlist, 'bi-heart': !showProduct.isInWishlist }]"></i>

                            <span class="bi bi-share text-muted fs-4" data-bs-toggle="modal"
                                data-bs-target="#shareModal"></span>
                        </div>
                    </div>
                    <div class="">
                        <small v-if="showProduct.mrp && showProduct.price" class="text-danger fw-bold fs-5">
                            - {{ calculateDiscountPercentage(showProduct.mrp, showProduct.price) }}%
                        </small>
                        <span class="fw-bold fs-5"> ₹ {{ showProduct.price }}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="text-decoration-line-through text-muted">MRP ₹{{ showProduct.mrp }}</div>
                        <div class="d-flex justify-content-center align-items-center">
                            <i class="bi fs-5 ts-sm bi-star-fill text-danger"></i>
                            <i class="bi fs-5 ts-sm bi-star-fill text-danger"></i>
                            <i class="bi fs-5 ts-sm bi-star-fill text-danger"></i>
                            <i class="bi fs-5 ts-sm bi-star-fill text-danger"></i>
                            <i class="bi fs-5 ts-sm bi-star-half text-danger"></i>
                        </div>
                    </div>

                </div>
                <!-- colors -->
                <div class="bg-white p-2 my-2">
                    <p class="fw-bold">Color: <span class="text-capitalize text-danger">{{ currentColor
                            }}</span></p>
                    <div class="d-flex flex-wrap ">
                        <div class="me-2 d-flex flex-column align-items-center"
                            v-for="(color, index) in showProduct.options" :key="index">
                            <div class="">
                                <input type="radio" name="product-color" class="btn-check"
                                    :id="'selectProductColor' + index" autocomplete="off" :value="color.sid"
                                    v-model="currentColor" :disabled="!color.active">
                                <label class="btn btn-outline-dark border-light rounded p-0 position-relative"
                                    :class="{ 'text-decoration-line-through': !color.active }"
                                    :for="'selectProductColor' + index">
                                    <img class="rounded" :src="color.primary_image"
                                        style="width:40px;height:40px; object-fit: none; margin: 0.05rem;" />
                                </label>
                            </div>
                            <small class="smaller" :class="{ 'text-decoration-line-through': !color.active }">{{
                                color.name }}</small>
                        </div>
                    </div>
                </div>
                <!-- <div class="alert alert-danger" v-if="showSelectColorWarning && !currentColor">Please select a color.</div> -->
                <!-- sizes -->
                <div class="bg-white my-2 p-2">
                    <div class="d-flex justify-content-between">
                        <p class="fw-bold ">Size: <span class="text-capitalize text-danger">{{
                            selectedSize }}</span></p>
                        <p class="mb-0 text-success" data-bs-toggle="offcanvas" data-bs-target="#sizeChart"
                            aria-controls="sizeChart">Size Chart</p>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="d-flex flex-wrap">
                            <div v-for="(size, index) in showProduct.ranges" :key="index"
                                class="text-uppercase position-relative">
                                <input type="radio" class="btn-check" name="option" :id="'option' + size.sid"
                                    autocomplete="off" :value="size.sid" v-model="selectedSize"
                                    :disabled="!size.active" />
                                <label class="btn btn-outline-dark rounded m-1 position-relative"
                                    :class="{ 'strikethrough': !size.active }" :for="'option' + size.sid">
                                    <span>{{ size.name }}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="alert alert-danger" v-if="showSelectSizeWarning && !selectedSize">Please select a size.</div> -->

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="p-2 my-2">
                                    <p class="fw-bold">Color: <span class="text-capitalize text-danger">{{ currentColor
                                            }}</span></p>
                                    <div class="d-flex flex-wrap ">
                                        <div class="me-2 d-flex flex-column align-items-center"
                                            v-for="(color, index) in showProduct.options" :key="index">
                                            <div class="">
                                                <input type="radio" name="product-color" class="btn-check"
                                                    :id="'selectProductColor' + index" autocomplete="off"
                                                    :value="color.sid" v-model="currentColor" :disabled="!color.active">
                                                <label
                                                    class="btn btn-outline-dark border-light rounded p-0 position-relative"
                                                    :class="{ 'text-decoration-line-through': !color.active }"
                                                    :for="'selectProductColor' + index">
                                                    <img class="rounded" :src="color.primary_image"
                                                        style="width:40px;height:40px; object-fit: none; margin: 0.05rem;" />
                                                </label>
                                            </div>
                                            <small class="smaller"
                                                :class="{ 'text-decoration-line-through': !color.active }">{{
                                                    color.name }}</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="my-2 p-2">
                                    <div class="d-flex justify-content-between">
                                        <p class="fw-bold ">Size: <span class="text-capitalize text-danger">{{
                                            selectedSize }}</span></p>
                                    </div>
                                    <div class="d-flex flex-column">
                                        <div class="d-flex flex-wrap">
                                            <div v-for="(size, index) in showProduct.ranges" :key="index"
                                                class="text-uppercase position-relative">
                                                <input type="radio" class="btn-check" name="option"
                                                    :id="'option' + size.sid" autocomplete="off" :value="size.sid"
                                                    v-model="selectedSize" :disabled="!size.active" />
                                                <label class="btn btn-outline-dark rounded m-1 position-relative"
                                                    :class="{ 'strikethrough': !size.active }"
                                                    :for="'option' + size.sid">
                                                    <span>{{ size.name }}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                    @click="addToCart(showProduct)">Add To
                                    Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- quantity desktop-->
                <div class="d-flex w-100">
                    <div v-if="showAtc" class="bg-white d-md-flex d-none align-items-center p-2 w-50">
                        <p class="fw-bold pe-2 mb-0">Qty:</p>
                        <button class="btn btn-dark rounded-0" @click="decrement(); decreaseCartQuantity(showProduct)"
                            :disabled="quantity <= showProduct.boq">-</button>
                        <input class="text-center form-control rounded-0 w-25" type="number" v-model="quantity"
                            :min="showProduct.boq" :max="showProduct.moq" />
                        <button class="btn btn-dark rounded-0" @click="increment(); increaseCartQuantity(showProduct)"
                            :disabled="quantity >= showProduct.moq">+</button>
                    </div>

                    <div class="my-2 d-md-flex d-none  gap-2 w-50">
                        <button v-if="showProduct.stock === 0"
                            class="d-md-flex d-none btn btn-dark rounded-0 w-100 justify-content-center align-items-center">
                            <i class="bi bi-cart3 fs-5"></i>
                            <p class="text-center m-0 ms-2">Notify Me</p>
                        </button>
                        <button v-if="showProduct.stock > 0 && !showAtc" @click="addToCart(showProduct)"
                            class="btn btn-dark rounded-0 d-flex justify-content-center align-items-center">
                            <i class="bi bi-cart3 fs-5"></i>
                            <p class="text-center m-0 ms-2">Add to cart</p>
                        </button>
                        <!-- <button @click="addToWishlist(showProduct)"
                            class="btn btn-danger d-flex justify-content-center align-items-center rounded-0">
                            <i class="bi bi-heart fs-5"></i>
                            <p class="text-center m-0 ms-2">Wishlist</p>
                        </button> -->
                    </div>
                </div>

                <ProductBadge :badges="showProduct.badges" />
                <ProductDetails :product="showProduct" />
                <SizeChartOffcanvas />
                <ShareOffcanvas />
                <div class="bg-white p-2 my-2">
                    <div class="d-flex justify-content-between">
                        <p class="fw-bold">Delivery Info</p>
                        <i class="bi bi-question-circle"></i>
                    </div>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" placeholder="Enter a pincode"
                            aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn bg-dark text-white" type="button" id="button-addon2">Check</button>
                    </div>
                    <p class="m-0">Delivery date: Enter pincode to check</p>
                    <p class="m-0">Fast Delivery might be available on this product!</p>
                </div>
            </div>

            <!-- quantity mobile & ATC button-->
            <div class="d-md-none d-flex gap-2 align-items-center position-sticky p-1 bg-white"
                style="z-index: 2;bottom: 0;">
                <button v-if="showProduct.stock === 0" class="btn btn-warning rounded w-100">Notify Me</button>
                <div v-if="showProduct.stock > 0 && showAtc" class="btn-group w-50">
                    <button class="btn btn-dark " @click="decrement(); decreaseCartQuantity(showProduct)"
                        :disabled="quantity <= showProduct.boq">-</button>
                    <input class="text-center form-control w-50" type="number" v-model="quantity" :min="showProduct.boq"
                        :max="showProduct.moq" />
                    <button class="btn btn-dark " @click="increment(); increaseCartQuantity(showProduct)"
                        :disabled="quantity >= showProduct.moq">+</button>
                </div>
                <div v-if="showProduct.stock > 0" class="btn-group w-50 flex-fill">
                    <button @click="addToWishlist(showProduct)" class="py-2 btn btn-light border">
                        <i class="bi" @transitionend="removeRotatedClass"
                            :class="[{ 'bi heart rotated': isHeartRotated }, { 'bi-heart-fill text-danger': showProduct.isInWishlist, 'bi-heart': !showProduct.isInWishlist }]"></i>
                    </button>
                    <button v-if="!selectedSize || !currentColor && !showAtc" class="py-2 btn btn-dark border"
                        data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="bi bi-cart3 "></i>
                    </button>
                    <button v-else @click="addToCart(showProduct)" class="py-2 btn btn-dark border">
                        <i class="bi bi-cart3 "></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="placeholder-glow">
        <div class="w-100 placeholder" style="height:700px;"></div>
        <div class="container my-3">
            <div class="row g-2 mb-2">
                <div class="col-12 placeholder" style="height:60px;"></div>
            </div>
            <div class="row g-2 mb-2">
                <div class="col-4 placeholder" style="height:25px;"></div>
                <div class="col-4" style="height:25px;"></div>
                <div class="col-4 placeholder" style="height:25px;"></div>
            </div>
            <div class="row g-2 mb-2">
                <div class="col-6 placeholder" style="height:30px;"></div>
                <div class="col-6" style="height:30px;"></div>
            </div>
            <div class="row g-2 mb-2">
                <div class="col-12 placeholder" style="height:120px;"></div>
                <div class="col-12 placeholder" style="height:120px;"></div>
            </div>
            <div class="row g-2 mb-2">
                <div class="col-4 placeholder" style="height:40px;"></div>
                <div class="col-12 placeholder mt-2" style="height:170px;"></div>
                <div class="col-12 placeholder mt-2" style="height:170px;"></div>
            </div>
            <div class="row g-2 mb-2">
                <div class="col-4 placeholder" style="height:40px;"></div>
                <div class="col-12 placeholder" style="height:100px;"></div>
            </div>
        </div>
    </div>
    <!-- <ProductReviews /> -->
    <YouMayLike />
</template>

<script>
import ProductDetails from '@/modules/macHiddle/components/ProductDetails.vue';
import SizeChartOffcanvas from '@/modules/macHiddle/components/SizeChartOffcanvas.vue';
import ShareOffcanvas from '@/modules/macHiddle/components/ShareOffcanvas.vue';
import ProductBadge from '@/modules/macHiddle/components/ProductBadge.vue';
// import ProductReviews from '@/modules/macHiddle/components/ProductReviews.vue';
import YouMayLike from '@/modules/macHiddle/components/YouMayLike.vue';


export default {
    name: 'ProductPage',
    components: {
        ProductDetails,
        ProductBadge,
        // ProductReviews,
        ShareOffcanvas,
        SizeChartOffcanvas,
        YouMayLike,
    },
    data() {
        return {
            productId: this.$route.params.productId,
            selectedImage: {},
            selectedSize: null,
            currentColor: null,
            quantity: 1,
            isHeartRotated: false,
            isAddedToCart: false,
            showSelectSizeWarning: false,
            showSelectColorWarning: false
        };
    },
    mounted() {
        this.$store.dispatch('MacStore/fetchProduct', this.productId)
        this.$store.dispatch('LoggedInUserStore/fetchCart');
        this.$store.dispatch('LoggedInUserStore/fetchWishlist');

    },
    watch: {
        showProduct: {
            handler(newVal) {
                if (newVal && newVal.options && newVal.options.length > 0 && newVal.ranges && newVal.ranges.length > 0) {
                    // // Find the first active color
                    // const activeColor = newVal.options.find(color => color.active);
                    // // Find the first active size
                    // const activeSize = newVal.ranges.find(size => size.active);

                    // if (activeColor) {
                    //     this.currentColor = activeColor.sid;
                    // }

                    // if (activeSize) {
                    //     this.selectedSize = activeSize.sid;
                    // }

                    // this.currentColor = activeColor.sid;
                    // this.selectedSize = activeSize.sid;
                    // this.quantity = this.showProduct.boq;
                    // this.selectedImage = newVal.options[0].primary_image;
                    this.selectedImage = newVal.options[0].secondary_images;
                }
            },
            immediate: true
        },
        wishlist: {
            handler(newVal) {
                if (Array.isArray(newVal)) {
                    // Check if the current product is in the wishlist
                    const isInWishlist = newVal.some(item => item.product.sid === this.showProduct.sid);

                    // Update the isInWishlist property within showProduct
                    this.showProduct.isInWishlist = isInWishlist;
                }
            },
            deep: true // Watch for changes in nested properties
        },
        '$route.params.productId': {
            handler(newProductId) {
                // Update productId when route parameter changes
                this.productId = newProductId;
                this.$store.dispatch('MacStore/fetchProduct', newProductId);
            },
            immediate: true // Trigger handler immediately
        }
    },

    computed: {
        showProduct() {
            return this.$store.getters['MacStore/getShowProduct']
        },
        cart() {
            return this.$store.getters['LoggedInUserStore/getCart']
        },
        wishlist() {
            return this.$store.getters['LoggedInUserStore/getWishlist']
        },
        showAtc() {
            return this.$store.getters['LoggedInUserStore/getShowAtcButton']
        },
    },
    methods: {
        calculateDiscountPercentage(mrp, price) {
            if (!mrp || !price || mrp <= price) {
                return 0;
            }
            const discountPercentage = ((mrp - price) / mrp) * 100;
            return discountPercentage.toFixed(2);
        },
        increment() {
            if (this.quantity < 10) {
                this.quantity++;
            }
        },
        decrement() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
        selectImage(image) {
            // this.selectedImage = image.primary_image;
            this.selectedImage = image.secondary_images;
        },
        addToCart(product) {
            // if (!this.selectedSize) {
            //     this.showSelectSizeWarning = true;
            // }
            // if (!this.currentColor) {
            //     this.showSelectColorWarning = true;
            // }
            const data = {
                product_sid: product.sid,
                option_sid: this.currentColor,
                range_sid: this.selectedSize,
                quantity: this.quantity,
                // cartId: this.cart.id
            };
            localStorage.setItem('product_sid', data.product_sid)
            localStorage.setItem('option_sid', data.option_sid)
            localStorage.setItem('range_sid', data.range_sid)
            localStorage.setItem('quantity', data.quantity)
            this.$store.dispatch('LoggedInUserStore/addToCart', data)
            this.isAddedToCart = true
        },
        increaseCartQuantity(product) {
            const data = {
                product_sid: product.sid,
                option_sid: this.currentColor,
                range_sid: this.selectedSize,
                quantity: 1,
            };
            this.$store.dispatch('LoggedInUserStore/addToCart', data)
        },
        decreaseCartQuantity(product) {
            const data = {
                product_sid: product.sid,
                option_sid: this.currentColor,
                range_sid: this.selectedSize,
                quantity: this.quantity,
                cartId: this.cart.sid
            };
            this.$store.dispatch('LoggedInUserStore/removeCartProduct', data)
        },
        addToWishlist(product) {
            this.isHeartRotated = !this.isHeartRotated;
            const data = {
                product_sid: product.sid
            }
            this.$store.dispatch('LoggedInUserStore/addToWishlist', data)
        },
        toggleHeartIcon() {
            this.isHeartRotated = !this.isHeartRotated;
        },
        isInWishlist(product) {
            return this.wishlist.some(item => item.product.sid === product.sid);
        },
        removeRotatedClass() {
            this.isHeartRotated = false;
        },
    },
}
</script>

<style scoped>
.bi-heart::before {
    transition: transform 1s ease;
}

.bi-heart.rotated::before {
    transform: rotateY(180deg);
}

@media (max-width:999px) {
    .prod-img {
        display: flex;
        flex-direction: column-reverse;
        padding: 0px !important;
    }

    .prod-thumb {
        flex-direction: row !important;
        gap: 1rem;
        /* margin: 1rem; */
        overflow: scroll;
    }

    .main-img {
        width: 100%;
        margin-left: 0px !important;
    }
}

@media (min-width:1000px) {
    .main-img img {
        position: sticky;
        top: 70px;
    }
}

#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

.count {
    position: absolute;
    top: -4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #eb3e25;
    right: -8px;
    color: #fff;
    font-size: 11px;
    text-align: center;
    line-height: 12px;
}
</style>
