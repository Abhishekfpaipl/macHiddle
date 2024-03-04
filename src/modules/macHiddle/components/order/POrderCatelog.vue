<template>
    <div class="container p-0 mb-4">
        <div v-for="(product, index) in order.products" :key="index" class="border p-2 mb-2" @click="showProduct(product)">
            <div class="d-flex ">
                <img :src="product.img" class="rounded-3" style="height:100px; width: 110px;object-fit: cover;">

                <div class="d-flex flex-column justify-content-between">
                    <div class="ms-2 ">
                        <p class="truncate fw-bold mb-0">{{ product.name }}sdfsd dfdfs sdfasd www</p>
                        <div class="d-flex w-100">
                            <b class="text-muted  me-2">
                                <small>Size: Medium </small>
                            </b>
                            <b class="text-muted">||</b>
                            <b class="text-muted ms-2">
                                <small>Colour: Black</small>
                            </b>
                        </div>
                        <div class="d-flex align-items-center w-100 me-2 mt-2">
                            <p class="fw-bold me-2 mb-0">
                                ₹ 899
                            </p>
                            <small class="text-muted fw-bold ms-2">
                                ({{ product.qty }} units)
                            </small>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: ['order'],
    computed: {
        activeOrder() {
            return this.$store.getters['order/getActiveOrderProduct'];
        },
    },
    methods: {
        showProduct(product) {
            return this.$store.dispatch("order/selectOrderProduct", product);
        },
        hideProduct() {
            return this.$store.dispatch("order/hideOrderProduct");
        },
    }
}
</script>
