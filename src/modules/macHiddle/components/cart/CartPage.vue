<template>
    <div class="accordion mt-2" id="accordionExample" style="padding-bottom:100px">
        <div class="accordion-item py-2 m-2 rounded-0 border" v-for="(product, index) in products" :key="index">
            <h2 class="accordion-header container m-0" style="padding: 0px 8px !important; ">
                <button class="accordion-button p-0 d-flex flex-column" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapseCart' + product.id" aria-expanded="true"
                    :aria-controls="'collapseCart' + product.id">
                    <div class="d-flex ">
                        <img :src="product.img" class="rounded-3"
                            style="height:100px; max-width: 110px; object-fit: cover;">

                        <div class="d-flex flex-column justify-content-between">
                            <div class="ms-2 ">
                                <p class="ss fw-bold mb-0">{{ product.name }}sdfsd dfdfs sdfasd www</p>
                                <div class="d-flex gap-2">
                                    <div class="">
                                        <p class="my-1" style="font-size: 14px">Colour :</p>
                                        <p class="my-1" style="font-size: 14px">Size :</p>
                                        <p class="mt-3 mb-0 fw-bold">₹ {{ product.rate }}</p>
                                    </div>
                                    <div class="">
                                        <p class="my-1" style="font-size: 14px">Black</p>
                                        <p class="my-1" style="font-size: 14px"> Medium</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </button>
            </h2>
            <div :id="'collapseCart' + product.id" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body  rounded-0 border-0" style="padding: 12px 12px 0px 12px !important;">
                    <div class="d-flex gap-2 mt-2">
                        <button class="w-50 btn btn-outline-danger fw-bold" style="font-size: 12px;opacity: 80%;"><i
                                class="bi bi-trash"></i> Remove</button>
                        <button class="w-50 btn btn-outline-danger fw-bold" @click="saveProduct(product)"
                            style="font-size: 12px;opacity: 80%;"><i class="bi bi-plus-lg"></i> Wishlist</button>

                        <RouterLink :to="'/catalog-edit/' + product.id" class="w-50">
                            <button class="w-100 btn btn-outline-danger fw-bold" style="opacity: 80%; font-size: 12px;"><i
                                    class="bi bi-pencil"></i> Edit</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <PriceDetails></PriceDetails>
        <CartBottomNav></CartBottomNav>
    </div>
</template>

<script>
// import CartBottomNav from '@/modules/macHiddle/components/CartBottomNav.vue';
// import PriceDetails from '@/modules/macHiddle/components/PriceDetails.vue';
import FavCatelog from '@/modules/macHiddle/mixins/FavCatelog.js';
export default {
    name: "CartPage",
    mixins: [FavCatelog],
    computed: {
        products() {
            return this.$store.getters['MacStore/getCartProduct'];
        },
    },
    // components: {
    //     CartBottomNav,
    //     PriceDetails,
    // }
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