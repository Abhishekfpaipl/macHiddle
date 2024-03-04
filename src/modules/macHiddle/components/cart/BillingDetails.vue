<template>
    <div class="container mt-5" style="padding-bottom: 80px;">
        <div class=" mb-3">
            <BillingAddress></BillingAddress>
        </div>
        <div class="">

            <PriceDetails class="mt-5 bg-light border"></PriceDetails>

            <div class="bill mt-5">
                <p class="mb-0">Press Checkout</p>
            </div>

        </div>
    </div>
    <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
        <div class="w-100 d-flex align-items-center justify-content-around position-fixed"
            style="height: 63px; bottom: 0; background: var(--secondary-color); color: var(--primary-color);">
            <router-link to="/checkout/cart" class="text-decoration-none" style="color: var(--primary-color); !important;">
                <div class="ms-3">
                    <i class="bi bi-cart fs-2"></i>
                </div>
            </router-link>
            <div>
                <div class="text-center">
                    <p class="m-0 fw-bold">₹ 2040</p>
                    <p class="mb-0" style="font-size:12px">Quantity : 2</p>
                </div>
            </div>
            <div class="me-3">
                <router-link to="/checkout/confirm" class="text-decoration-none">
                    <div class="d-flex align-items-center">
                        <button class="btn py-2 d-flex" style="color: var(--primary-color);">
                            <p class="text-center m-0 fw-bold">Checkout</p>
                            <i class="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import PriceDetails from '@/modules/macHiddle/components/cart/PriceDetails.vue';
import BillingAddress from '@/modules/macHiddle/components/cart/BillingAddress.vue';
export default {
    name: "BillingDetails",
    components: {
        BillingAddress,
        PriceDetails
    },
    data() {
        return {
            selectedMethod: 'delivery'
        };
    },
    methods: {
        showPickup() {
            this.selectedMethod = 'pickUp';
        },
        showDelivery() {
            this.selectedMethod = 'delivery';
        },
    }
}
</script>
<style scoped>
.bill {
    text-align: center;
    position: relative;
    font-weight: 600;
    color: gray;
    text-transform: uppercase;
}

.bill:before {
    content: "";
    display: block;
    width: 30%;
    height: 1px;
    background: gray;
    left: 0;
    top: 50%;
    position: absolute;
}

.bill:after {
    content: "";
    display: block;
    width: 30%;
    height: 1px;
    background: gray;
    right: 0;
    top: 50%;
    position: absolute;
}
</style>