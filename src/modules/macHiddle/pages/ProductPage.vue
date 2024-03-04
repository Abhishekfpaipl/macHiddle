<template>
    <ProductTopNav />
    <div class="prod container mb-5 pb-2 pt-md-2">
        <div class="row">
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
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="mb-0 fw-bold fs-4">{{ showProduct.name }}</p>
                        <i class="bi bi-share"></i>
                    </div>
                    <small v-if="showProduct.category" class="text-muted">{{ showProduct.category.parent }}</small>
                    <div class="d-flex gap-3 align-items-center fs-4">
                        <span class="fw-bold"> ₹ {{ showProduct.price }}</span>
                        <small>MRP ₹ <del>{{ showProduct.mrp }}</del></small>
                    </div>
                </div>

                <div class="bg-white p-2 my-2">
                    <p class="fw-bold">Color</p>
                    <div class="d-flex flex-wrap ">
                        <div class="me-2" v-for="(color, index) in showProduct.options" :key="index">
                            <input type="radio" name="product-color" class="btn-check"
                                :id="'selectProductColor' + index" autocomplete="off" :value="color.id"
                                v-model="currentColor" checked>
                            <label class="btn btn-outline-dark border-light rounded-circle p-0"
                                :for="'selectProductColor' + index">
                                <img class="rounded-circle" :src="color.primary_image"
                                    style="width:40px;height:40px; object-fit: none; margin: 0.05rem;" />
                            </label>
                        </div>
                    </div>
                </div>


                <div class="d-flex align-items-center p-2">
                    <p class="fw-bold pe-2">Qty:</p>
                    <button class="btn btn-dark rounded-0" @click="decrement" :disabled="quantity <= 1">-</button>
                    <input class="text-center form-control rounded-0 w-25" type="number" v-model.number="quantity"
                        min="1" max="10" />
                    <button class="btn btn-dark rounded-0" @click="increment" :disabled="quantity >= 10">+</button>
                </div>


                <div class="bg-white my-2 p-2">
                    <div class="d-flex justify-content-between">
                        <p class="fw-bold ">Size</p>
                        <p class="mb-0 text-success" data-bs-toggle="offcanvas" data-bs-target="#sizeChart"
                            aria-controls="sizeChart">Size Chart</p>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="d-flex">
                            <div v-for="(size, index) in showProduct.ranges" :key="index" class="">
                                <input type="radio" class="btn-check" name="option" :id="'option' + size.id"
                                    autocomplete="off" :value="size.id" v-model="selectedSize" checked />
                                <label class="btn btn-outline-dark rounded-0 m-2" :for="'option' + size.id">
                                    {{ size.name }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white my-2 p-2 d-md-block d-none">
                    <button @click="addToCart"
                        class="btn btn-dark rounded-0 w-100 d-flex justify-content-center  align-items-center text-center">
                        <i class="bi bi-cart3 fs-5"></i>
                        <p class="text-center m-0 ms-2">Add to cart</p>
                    </button>
                    <button
                        class="btn btn-dark rounded-0 w-100 d-flex justify-content-center  align-items-center text-center">
                        <i class="bi bi-cart3 fs-5"></i>
                        <p class="text-center m-0 ms-2">Notify Me</p>
                    </button>
                </div>

                <ProductBadge :badges="showProduct.badges" />
                <ProductDetails :product="showProduct" />


                <div class=" offcanvas offcanvas-end" tabindex="-1" id="sizeChart"
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
                </div>

                <div class="bg-white p-2 my-2">
                    <div class="d-flex justify-content-between">
                        <p class="fw-bold fs-5">Delivery Info</p>
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
        </div>
    </div>
    <ProductReviews />
    <div class="d-md-none w-100 d-flex position-fixed " style=" z-index: 10; bottom: 0; background: #fff;">
        <button class="btn btn-warning rounded-0 w-25" @click="addToWishlist(showProduct)">
            <i class="bi bi-heart text-danger fs-3"></i>
        </button>
        <button @click="addToCart(showProduct.id)"
            class="w-75 d-flex justify-content-center align-items-center btn btn-dark rounded-0 text-center">
            <i class="bi bi-cart3 fs-5"></i>
            <p class="text-center m-0 ms-2">Add to cart</p>
        </button>
    </div>
</template>

<script>
import ProductDetails from '@/modules/macHiddle/components/ProductDetails.vue';
import ProductBadge from '@/modules/macHiddle/components/ProductBadge.vue';
import SizeChart from '@/modules/macHiddle/components/SizeChart.vue';
import ProductTopNav from '@/modules/macHiddle/components/navbar/ProductTopNav.vue';
import ProductReviews from '@/modules/macHiddle/components/ProductReviews.vue';
import axiosInstance from '../axiosInstance';
import sweetAlert from '@/modules/macHiddle/mixins/sweet-alert';

export default {
    mixins: [sweetAlert],
    name: 'ProductPage',
    components: {
        SizeChart,
        ProductDetails,
        ProductTopNav,
        ProductBadge,
        ProductReviews,
        // ChatButton
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
        // this.selectedImage = this.product.images[0];
        this.$store.dispatch('MacStore/fetchProduct', this.productId).then(() => {
            // setTimeout(() => {
            //     this.selectedImage = this.showProduct.options[0].primary_image;
            //     this.currentColor = this.showProduct.options[0].id
            //     this.selectedSize = this.showProduct.ranges[0].id
            // }, 1000)
        })
    },
    watch: {
        showProduct: {
            handler(newVal) {
                if (newVal && newVal.options && newVal.options.length > 0 && newVal.ranges && newVal.ranges.length > 0) {
                    this.selectedImage = newVal.options[0].primary_image;
                    this.currentColor = newVal.options[0].id;
                    this.selectedSize = newVal.ranges[0].id;
                }
            },
            immediate: true // This will trigger the handler immediately when the component is created
        }
    },

    computed: {
        showProduct() {
            return this.$store.getters['MacStore/getShowProduct']
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
        addToCart(productId) {
            const postData = {
                product_id: productId,
                option_id: this.currentColor,
                range_id: this.selectedSize,
                quantity: this.quantity,
            }
            let token = localStorage.getItem('token')
            axiosInstance.put('carts/5', postData, {
                headers: { "Authorization": `Bearer ${token}` }
            }).then((response) => {
                console.log('added to cart', response)
            })
        },
        addToWishlist(product) {
            const postData = {
                product_id: product.id
            }
            console.log(postData)

            let token = localStorage.getItem('token')
            axiosInstance.post('wishlists', postData, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.success) {
                        sweetAlert.showSweetAlert('Yay!', 'Product Added to Wishlist')
                    }
                    console.log(response)
                })
            // this.$store.dispatch('MacStore/addToWishlist', postData)
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
