<template>
    <ProductTopNav />
    <div class="prod container my-5 py-3 pt-md-4">
        <div class="row bg-light">
            <div class="col-lg-5 d-flex prod-img">
                <div class="d-flex flex-column ms-2 ms-md-0 prod-thumb" id="scroll">
                    <img class="" :src="image.primary_image" style="width: 60px; object-fit: cover;"
                        v-for="(image, index) in showProduct.options" :key="index" v-on:click="selectImage(image)" />
                </div>
                <div class="ms-md-2">
                    <img :src="selectedImage" class="flex-fill" style="width: 100%;" />
                </div>
            </div>

            <div class="col-lg-7 p-2">
                <div class="bg-white p-2 mb-2">
                    <p class="mb-0 fw-bold fs-4">{{ showProduct.name }}</p>
                    <div class="d-flex justify-content-between align-items-center border-bottom pb-1">
                        <small v-if="showProduct.category" class="text-muted">{{ showProduct.category.parent }}</small>
                        <small class="bi bi-share text-muted" data-bs-toggle="modal" data-bs-target="#shareModal"><span
                                class="ms-2">Share</span></small>
                    </div>
                    <div class="d-flex gap-3 align-items-center fs-4">
                        <span class="fw-bold"> ₹ {{ showProduct.price }}</span>
                        <small>MRP ₹ <del>{{ showProduct.mrp }}</del></small>
                    </div>
                </div>

                <!-- colors -->
                <div class="bg-white p-2 my-2">
                    <p class="fw-bold">Please select a color.</p>
                    <div class="d-flex flex-wrap ">
                        <div class="me-2 d-flex flex-column align-items-center"
                            v-for="(color, index) in showProduct.options" :key="index">
                            <div class="">

                                <input type="radio" name="product-color" class="btn-check"
                                    :id="'selectProductColor' + index" autocomplete="off" :value="color.sid"
                                    v-model="currentColor">
                                <label class="btn btn-outline-dark border-light rounded-circle p-0"
                                    :for="'selectProductColor' + index">
                                    <img class="rounded-circle" :src="color.primary_image"
                                        style="width:40px;height:40px; object-fit: none; margin: 0.05rem;" />
                                </label>
                            </div>
                            <small class="smaller">{{ color.name }}</small>
                        </div>
                    </div>
                </div>

                <!-- sizes -->
                <div class="bg-white my-2 p-2">
                    <div class="d-flex justify-content-between">
                        <p class="fw-bold ">Please select a size.</p>
                        <p class="mb-0 text-success" data-bs-toggle="offcanvas" data-bs-target="#sizeChart"
                            aria-controls="sizeChart">Size Chart</p>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="d-flex">
                            <div v-for="(size, index) in showProduct.ranges" :key="index" class="text-uppercase">
                                <input type="radio" class="btn-check" name="option" :id="'option' + size.sid"
                                    autocomplete="off" :value="size.sid" v-model="selectedSize" />
                                <label class="btn btn-outline-dark rounded me-2" :for="'option' + size.sid">
                                    {{ size.name }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- quantity -->
                <div class="bg-white d-md-flex d-none align-items-center p-2">
                    <p class="fw-bold pe-2 mb-0">Qty:</p>
                    <button class="btn btn-dark rounded-0" @click="decrement"
                        :disabled="quantity <= showProduct.boq">-</button>
                    <input class="text-center form-control rounded-0 w-25" type="number" v-model="quantity"
                        :min="showProduct.boq" :max="showProduct.moq" />
                    <button class="btn btn-dark rounded-0" @click="increment"
                        :disabled="quantity >= showProduct.moq">+</button>
                </div>

                <div class="my-2 d-md-flex d-none w-100 gap-2">
                    <button v-if="showProduct.stock === 0"
                        class="d-md-flex d-none btn btn-dark rounded-0 w-100 justify-content-center  align-items-center">
                        <i class="bi bi-cart3 fs-5"></i>
                        <p class="text-center m-0 ms-2">Notify Me</p>
                    </button>
                    <button v-if="showProduct.stock > 0" @click="addToCart(showProduct)"
                        class="btn btn-dark rounded-0 w-100 d-flex justify-content-center align-items-center">
                        <i class="bi bi-cart3 fs-5"></i>
                        <p class="text-center m-0 ms-2">Add to cart</p>
                    </button>
                    <button @click="addToWishlist(showProduct)"
                        class="btn btn-danger d-flex justify-content-center align-items-center rounded-0 w-100">
                        <i class="bi bi-heart fs-5"></i>
                        <p class="text-center m-0 ms-2">Wishlist</p>
                    </button>
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

            <div class="d-md-none w-100 d-flex gap-2 align-items-center position-sticky p-1 bg-white"
                style="z-index: 2;bottom: 0;">
                <button v-if="showProduct.stock === 0" class="btn btn-warning rounded w-100">Notify Me</button>
                <div v-if="showProduct.stock > 0" class="btn-group w-50">
                    <button class="btn btn-dark " @click="decrement" :disabled="quantity <= showProduct.boq">-</button>
                    <input class="text-center form-control w-50" type="number" v-model="quantity" :min="showProduct.boq"
                        :max="showProduct.moq" />
                    <button class="btn btn-dark " @click="increment" :disabled="quantity >= showProduct.moq">+</button>
                </div>
                <div v-if="showProduct.stock > 0" class="btn-group w-50 flex-fill">
                    <button @click="addToWishlist(showProduct)" class="py-2 btn btn-dark border">
                        <i class="bi bi-heart "></i>
                    </button>
                    <button @click="addToCart(showProduct)" class="py-2 btn btn-dark border">
                        <i class="bi bi-cart3 "></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <ProductReviews />

</template>

<script>
import ProductDetails from '@/modules/macHiddle/components/ProductDetails.vue';
import SizeChartOffcanvas from '@/modules/macHiddle/components/SizeChartOffcanvas.vue';
import ShareOffcanvas from '@/modules/macHiddle/components/ShareOffcanvas.vue';
import ProductBadge from '@/modules/macHiddle/components/ProductBadge.vue';
import ProductReviews from '@/modules/macHiddle/components/ProductReviews.vue';


export default {
    name: 'ProductPage',
    components: {
        ProductDetails,
        ProductBadge,
        ProductReviews,
        ShareOffcanvas,
        SizeChartOffcanvas,
    },
    data() {
        return {
            productId: this.$route.params.productId,
            selectedImage: {},
            selectedQuantity: 1,
            selectedSize: null,
            currentColor: null,
            quantity: 1,
            publicPath: process.env.BASE_URL,
            img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/sizechart-images/Solids-Rusty-Red-Women-Cropped-Top_FG_WEB_mcnBLsO.jpg?format=webp&w=400&dpr=1.3',
            measureImg: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/sizechart-images/Solids-Rusty-Red-Women-Cropped-Top_FG_WEB_MEASURE_M02UEvv.jpg?format=webp&w=400&dpr=1.3',
            imgCount: 4,
            selectedImageIndex: 0,
        };
    },
    mounted() {
        this.$store.dispatch('MacStore/fetchProduct', this.productId)
        this.$store.dispatch('LoggedInUserStore/fetchCart')
    },
    watch: {
        showProduct: {
            handler(newVal) {
                if (newVal && newVal.options && newVal.options.length > 0 && newVal.ranges && newVal.ranges.length > 0) {
                    this.selectedImage = newVal.options[0].primary_image;
                    this.currentColor = newVal.options[0].sid;
                    this.selectedSize = newVal.ranges[0].sid;
                    this.quantity = this.showProduct.boq;
                }
            },
            immediate: true // This will trigger the handler immediately when the component is created
        }
    },

    computed: {
        showProduct() {
            return this.$store.getters['MacStore/getShowProduct']
        },
        cart() {
            return this.$store.getters['LoggedInUserStore/getCart']
        }
    },
    methods: {
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
        openImageGallery(index) {
            this.selectedImageIndex = index;
        },
        selectImage(image) {
            this.selectedImage = image.primary_image;
        },
        addToCart(product) {
            const data = {
                product_sid: product.sid,
                option_sid: this.currentColor,
                range_sid: this.selectedSize,
                quantity: this.quantity,
                // cartId: this.cart.id
            };
            this.$store.dispatch('LoggedInUserStore/addToCart', data)
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

<style scoped>
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

    /* .prod-details {
        padding: 16px 0;
    } */
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
