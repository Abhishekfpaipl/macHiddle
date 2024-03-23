<template>
    <ProductTopNav />
    <div class="prod container my-5 py-3 pt-md-2">
        <div class="row bg-light">
            <div class="col-12 d-md-none d-flex prod-img">
                <div class="d-flex flex-column prod-thumb" id="scroll">
                    <img class="" :src="image.primary_image" style="width: 60px"
                        v-for="(image, index) in showProduct.options" :key="index" v-on:click="selectImage(image)" />
                </div>
                <div class="ms-2 main-img">
                    <img :src="selectedImage" class="flex-fill" style="width: 100%;" />
                </div>
            </div>

            <div class="col-md-8 col-12 d-none d-md-flex flex-wrap">
                <div class="row p-0" style="height: fit-content;">
                    <div v-for="(image, index) in showProduct.options" :key="index" class="col-6 p-0">
                        <div v-if="index < imgCount">
                            <img :src="image.primary_image" class="flex-fill" style="width: 100%;height: 100%;"
                                data-bs-toggle="modal" data-bs-target="#imageGalleryModal" />
                        </div>
                        <div v-if="index === imgCount - 1" class="">
                            <p class="text-center mb-0" data-bs-toggle="modal" data-bs-target="#imageGalleryModal">View
                                More
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="modal fade" id="imageGalleryModal" tabindex="-1" aria-labelledby="imageGalleryModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-fullscreen-sm-down">
                    <div class="modal-content">
                        <div class="modal-body p-0">
                            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item" v-for="(image, index) in showProduct.options"
                                        :key="index" :class="{ active: index === selectedImageIndex }">
                                        <img :src="image.primary_image" class="d-block w-100" alt="Image">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExample" role="button"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExample" role="button"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 prod-details">
                <div class="bg-white p-2 mb-2">
                    <p class="mb-0 fw-bold fs-4">{{ showProduct.name }}</p>
                    <div class="d-flex justify-content-between align-items-center border-bottom pb-1">
                        <small v-if="showProduct.category" class="text-muted">{{ showProduct.category.parent }}</small>
                        <small class="bi bi-share text-muted"><span class="ms-2">Share</span></small>
                    </div>
                    <div class="d-flex gap-3 align-items-center fs-4">
                        <span class="fw-bold"> ₹ {{ showProduct.price }}</span>
                        <small>MRP ₹ <del>{{ showProduct.mrp }}</del></small>
                    </div>
                </div>

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
                                <label class="btn btn-outline-dark rounded-pill me-2" :for="'option' + size.sid">
                                    {{ size.name }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <button @click="addToCart(showProduct)"
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
                <button
                    class="d-md-flex d-none btn btn-dark rounded-0 w-100 justify-content-center  align-items-center">
                    <i class="bi bi-cart3 fs-5"></i>
                    <p class="text-center m-0 ms-2">Notify Me</p>
                </button>

                <ProductBadge :badges="showProduct.badges" />
                <ProductDetails :product="showProduct" />

                <SizeChartOffcanvas />
                <!-- <div class=" offcanvas offcanvas-end" tabindex="-1" id="sizeChart"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header border-bottom">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Size Chart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body px-2">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#SizeChart-tab-pane" type="button" role="tab"
                                    aria-controls="SizeChart-tab-pane" aria-selected="true">SizeChart</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Fit-tab" data-bs-toggle="tab"
                                    data-bs-target="#Fit-tab-pane" type="button" role="tab" aria-controls="Fit-tab-pane"
                                    aria-selected="false">Fit
                                    Guide</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Measure-tab" data-bs-toggle="tab"
                                    data-bs-target="#Measure-tab-pane" type="button" role="tab"
                                    aria-controls="Measure-tab-pane" aria-selected="false">How To Measure</button>
                            </li>

                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="SizeChart-tab-pane" role="tabpanel"
                                aria-labelledby="SizeChart-tab" tabindex="0">
                                <SizeChart class="py-2 mt-2"></SizeChart>
                            </div>
                            <div class="tab-pane fade" id="Fit-tab-pane" role="tabpanel" aria-labelledby="Fit-tab"
                                tabindex="0">
                                <div class="mt-2">
                                    <img :src="img" style="width: 100%;">
                                </div>
                            </div>
                            <div class="tab-pane fade" id="Measure-tab-pane" role="tabpanel"
                                aria-labelledby="Measure-tab" tabindex="0">
                                <div class="mt-2">
                                    <img :src="measureImg" style="width: 100%;">
                                </div>
                            </div>

                        </div>
                    </div>
                </div> -->

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
            <!-- <div class="d-md-none w-100 d-flex gap-2 position-sticky p-1"
                style="z-index: 2;bottom: 0; background: #fff;">
                <button
                    class="flex-fill d-flex justify-content-center align-items-center btn btn-danger rounded-0 text-center"
                    @click="addToWishlist(showProduct)">
                    <i class="bi bi-heart fs-3"></i>
                    <p class="text-center m-0 ms-2">Wishlist</p>
                </button>
                <button @click="addToCart(showProduct)"
                    class="flex-fill d-flex justify-content-center align-items-center btn btn-dark rounded-0 text-center">
                    <i class="bi bi-cart3 fs-5"></i>
                    <p class="text-center m-0 ms-2">Add to cart</p>
                </button>
            </div> -->
            <div class="d-md-none w-100 d-flex gap-2 align-items-center position-sticky p-1"
                style="z-index: 2;bottom: 0; background: #fff;">
                <div class="btn-group w-50">
                    <button class="btn btn-dark " @click="decrement" :disabled="quantity <= showProduct.boq">-</button>
                    <input class="text-center form-control w-50" type="number" v-model="quantity" :min="showProduct.boq"
                        :max="showProduct.moq" />
                    <button class="btn btn-dark " @click="increment" :disabled="quantity >= showProduct.moq">+</button>
                </div>
                <div class="btn-group w-50 flex-fill">
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
import ProductBadge from '@/modules/macHiddle/components/ProductBadge.vue';
// import SizeChart from '@/modules/macHiddle/components/SizeChart.vue';
import ProductReviews from '@/modules/macHiddle/components/ProductReviews.vue';
import sweetAlert from '@/modules/macHiddle/mixins/sweet-alert';


export default {
    mixins: [sweetAlert],
    name: 'ProductPage',
    components: {
        // SizeChart,
        ProductDetails,
        ProductBadge,
        ProductReviews,
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
        margin: 1rem 2rem 1rem 2rem;
        overflow: scroll;
    }

    .main-img {
        width: 100%;
        margin-left: 0px !important;
    }

    .prod-details {
        padding: 16px 0;
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
