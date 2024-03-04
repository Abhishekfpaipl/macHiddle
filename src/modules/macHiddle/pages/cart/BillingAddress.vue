<template>
    <SimpleStepper step="2" style="margin-top:20px">
        <BillingDetails></BillingDetails>
    </SimpleStepper>
</template>
<script>
import SimpleStepper from '@/modules/macHiddle/components/cart/SimpleStepper.vue';
import BillingDetails from '@/modules/macHiddle/components/cart/BillingDetails.vue';

export default {
    name: "BillingAddress",
    components: {
        SimpleStepper,
        BillingDetails,
    }
};
</script>
    