<template>
    <div class="modal fade" id="quickAddModal" tabindex="-1" aria-labelledby="quickAddModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- <div class="modal-header">
                    <h1 class="modal-title fs-5" id="quickAddModal">Quick Add to Cart</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> -->
                <div class="modal-body p-0">
                    <div :id="'quickAdd' + activeProduct.sid" class="carousel slide">
                        <div class="carousel-inner">
                            <div :id="'cardCarousel' + imgIndex" class="carousel-item" data-bs-dismiss="modal"
                                :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in activeProduct.options"
                                :key="imgIndex">
                                <img :src="image.primary_image" class="card-img-top rounded-0" alt=""
                                    style="max-height:300px;object-fit: contain; ">
                            </div>
                        </div>
                        <div class="d-flex mt-2 px-2" id="scroll" style="overflow-x: scroll;">
                            <button type="button" class="rounded-circle p-0 border me-1"
                                :data-bs-target="'#quickAdd' + activeProduct.sid" :data-bs-slide-to="imgIndex"
                                :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                                v-for="(image, imgIndex) in activeProduct.options" :key="imgIndex">
                                <img :src="image.primary_image" class="rounded-circle" alt=""
                                    style="width: 35px; height: 35px; object-fit: fill;">
                            </button>
                        </div>
                        <div class="d-flex justify-content-between px-2 my-2">
                            <p class="fw-bold mb-0">₹ {{ activeProduct.price }}</p>
                            <p class="fw-bold mb-0">{{ activeProduct.type }}</p>
                        </div>
                        <div class="d-flex align-items-center px-2">
                            <strong>Size :</strong>
                            <div v-for="(size, index) in activeProduct.ranges" :key="index" class="">
                                <input type="radio" class="btn-check" name="option" :id="'option' + size.sid"
                                    autocomplete="off" :value="size.sid" v-model="selectedSize" />
                                <label class="btn btn-outline-dark rounded-0 m-2" :for="'option' + size.sid">
                                    {{ size.sid }}
                                </label>
                            </div>
                        </div>
                        <div class="d-flex align-items-center px-2">
                            <strong>Color :</strong>
                            <div class="d-flex flex-column justify-content-center me-2"
                                v-for="(color, index) in activeProduct.options" :key="index">
                                <input type="radio" name="product-color" class="btn-check"
                                    :id="'selectProductColor' + index" autocomplete="off" :value="color.sid"
                                    v-model="currentColor" checked>
                                <label class="btn btn-outline-dark border-light rounded-circle p-0"
                                    :for="'selectProductColor' + index">
                                    <img class="rounded-circle" :src="color.primary_image"
                                        style="width:40px;height:40px; object-fit: none; margin: 0.05rem;" />
                                </label>
                                <small>{{ color.name }}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning rounded-0" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-dark rounded-0" data-bs-dismiss="modal"
                        @click="addToCart(activeProduct)">Add To
                        Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sweetAlert from "@/modules/macHiddle/mixins/sweet-alert";

export default {
    name: "QuickAdd",
    mixins: [sweetAlert],
    props: ['product'],
    data() {
        return {
            activeProduct: {},
            publicPath: process.env.BASE_URL,
            content: '',
            selectedSize: null,
            currentColor: null,
            quantity: 1,
        };
    },
    async mounted() {
        this.loadactiveProduct();
    },
    watch: {
        showProduct: {
            handler(newVal) {
                if (newVal) {
                    this.quantity = this.showProduct.boq;
                }
            },
            immediate: true // This will trigger the handler immediately when the component is created
        }
    },
    methods: {
        loadactiveProduct() {
            const quickAddModal = document.getElementById('quickAddModal')
            if (quickAddModal) {
                quickAddModal.addEventListener('shown.bs.modal', event => {
                    const button = event.relatedTarget
                    const productsid = button.getAttribute('data-bs-productsid');
                    this.activeProduct = this.product.find(product => product.sid === productsid);
                });
            }
        },
        addToCart(product) {
            const data = {
                product_sid: product.sid,
                option_sid: this.currentColor,
                range_sid: this.selectedSize,
                quantity: this.quantity,
                // cartId: this.cart.id
            };
            // console.log('atc quick', data)
            this.$store.dispatch('LoggedInUserStore/addToCart', data)
        },
        // addToWishlist(product) {
        //     const data = {
        //         product_sid: product.sid
        //     }
        //     this.$store.dispatch('LoggedInUserStore/addToWishlist', data)
        // },
    }
}
</script>
