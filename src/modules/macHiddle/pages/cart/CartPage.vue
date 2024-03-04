<!-- <template>
    <SimpleStepper step="1" style="margin-top:10px">
        <CartPage></CartPage>
    </SimpleStepper>
</template>
<script>
import SimpleStepper from '@/modules/macHiddle/components/cart/SimpleStepper.vue';
import CartPage from '@/modules/macHiddle/components/cart/CartPage.vue';

export default {
    name: "CartPage",
    components: {
        SimpleStepper,
        CartPage,
    }
};

</script> -->

<template>
    <div v-if="cartProducts.length === 0"
        class="bg-light w-100 d-flex flex-column justify-content-center align-items-center my-1"
        style="height: 50%; padding: 90px 0px;">
        <i class="bi bi-search fs-1"></i>
        <h3>Hmm, can't find any items.</h3>
        <routerLink to="/categories">Shop Now</routerLink>
    </div>
    <div class="accordion mt-2" id="accordionExample" style="padding-bottom:100px">
        <div class="accordion-item py-2 m-2 rounded-0 border" v-for="(product, index) in cartProducts" :key="index">
            <h2 class="accordion-header container m-0" style="padding: 0px 8px !important; ">
                <button class="accordion-button p-0 d-flex flex-column" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapseCart' + product.id" aria-expanded="true"
                    :aria-controls="'collapseCart' + product.id">
                    <div class="d-flex ">
                        <img v-if="product.option" :src="product.option.primary_image" class="rounded-3"
                            style="height:100px; max-width: 110px; object-fit: cover;">

                        <div class="d-flex flex-column justify-content-between">
                            <div class="ms-2 ">
                                <p class="truncate fw-bold mb-0">{{ product.name }}</p>
                                <div class="d-flex gap-2">
                                    <div class="">
                                        <p class="my-1" style="font-size: 14px">Color :</p>
                                        <p class="my-1" style="font-size: 14px">Size :</p>
                                        <p class="my-1" style="font-size: 14px">Qty :</p>
                                        <p class="mt-3 mb-0 fw-bold">₹ {{ product.price }}</p>
                                    </div>
                                    <div class="">
                                        <p class="my-1" style="font-size: 14px">{{ product.option.name }}</p>
                                        <p class="my-1" style="font-size: 14px"> {{ product.range.name }}</p>
                                        <input type="number" class="form-control-sm" disabled :value="product.quantity"
                                            style="width:25%">
                                    </div>
                                    <div class="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </button>
            </h2>
            <div :id="'collapseCart' + product.id" class="accordion-collapse collapse "
                data-bs-parent="#accordionExample">
                <div class="accordion-body  rounded-0 border-0" style="padding: 12px 12px 0px 12px !important;">
                    <div class="d-flex gap-2 mt-2">
                        <button class="w-50 btn btn-outline-danger fw-bold" @click="removeProduct(product)"
                            style="font-size: 12px;opacity: 80%;"><i class="bi bi-trash"></i> Remove</button>
                        <button class="w-50 btn btn-outline-danger fw-bold" @click="saveProduct(product)"
                            style="font-size: 12px;opacity: 80%;"><i class="bi bi-plus-lg"></i> Wishlist</button>

                        <RouterLink :to="'/product-page/' + product.slug" class="w-50">
                            <i class="bi bi-pencil"></i>
                            Edit
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <PriceDetails></PriceDetails>
        <CartBottomNav></CartBottomNav>
        <CartEditOffcanvas :cart="cartProducts" />
    </div>
</template>

<script>
// import CartBottomNav from '@/modules/macHiddle/components/CartBottomNav.vue';
import PriceDetails from '@/modules/macHiddle/components/PriceDetails.vue';
import FavCatelog from '@/modules/macHiddle/mixins/FavCatelog.js';
import axiosInstance from '../../axiosInstance';
import CartEditOffcanvas from '../../components/cart/CartEditOffcanvas.vue';
export default {
    name: "CartPage",
    mixins: [FavCatelog],
    computed: {
        products() {
            return this.$store.getters['MacStore/getCartProduct'];
        },
        cartProducts() {
            return this.$store.getters['MacStore/getCart']
        }
    },
    mounted() {
        this.$store.dispatch('MacStore/fetchCart')
    },
    components: {
        // CartBottomNav,
        PriceDetails,
        CartEditOffcanvas
    },
    methods: {
        removeProduct(product) {
            let token = localStorage.getItem('token');
            axiosInstance.put('carts/5',
                {
                    product_id: product.id,
                    option_id: product.option.id,
                    range_id: product.range.id,
                    quantity: 0
                },
                { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {
                    console.log('product removed form cart', response)
                })
        }
    }
}
</script>

<style scoped>
.ss {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.accordion-button::after {
    position: absolute;
    bottom: 0;
    right: 0;
}

.accordion {
    --bs-accordion-active-color: none;
    --bs-accordion-active-bg: none;
    --bs-accordion-btn-focus-box-shadow: none;
    --bs-accordion-border-color: transparent !important
}
</style>
