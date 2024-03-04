<template>
    <!-- <DeliveryTopnav></DeliveryTopnav> -->
    <div style="margin-top: 20px;">
        <SimpleStepper step="3">
            <DeliveryDetails></DeliveryDetails>
            <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
                <div class="w-100 d-flex align-items-center justify-content-around position-fixed"
                    style="height: 63px; bottom: 0; background: #f6f6f6;">
                    <div style="font-size:12px">
                        <p class="m-0 text-center fw-bold">2 Catalogs</p>
                        <div class="d-flex gap-2">
                            <p class="mb-0 text-center">Sku 37 </p>
                            <span>|</span>
                            <p class="mb-0 text-center">Qty 220</p>
                        </div>
                    </div>
                    <div class="d=flex"></div>
                    <p class="m-0 text-center fw-bold">₹ 2,88,000</p> <i class="bi bi-arrow-right fs-3"></i>
                    <div class="">
                        <router-link to="/checkout/confirm" class="text-decoration-none text-dark">
                            <button class="btn top-brand text-white">Checkout</button>
                        </router-link>
                    </div>

                </div>
            </nav>
        </SimpleStepper>
    </div>
</template>
<script> 
import SimpleStepper from '@/modules/macHiddle/components/cart/SimpleStepper.vue';
import DeliveryDetails from '@/modules/macHiddle/components/cart/DeliveryDetails.vue';

export default {
    name: "DeliveryAddress",
    components: {
        SimpleStepper,
        DeliveryDetails, 
    }
};
</script>
  
  