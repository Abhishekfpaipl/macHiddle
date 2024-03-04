<template>
    <div class="" v-for="(del, index) in order.orderSummary" :key="index">
        <div class="d-flex justify-content-between align-items-center">
            <p class="ms-2 m-0 fs-3">Order Summary </p>
            <div class="d-flex">
                <button class="btn btn-sm btn-light py-0 me-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><small>TRACK</small></button>
                <button class="btn btn-sm btn-light py-0"><small>CANCEL</small></button>
            </div>
        </div>
        <div class="mt-2 ">
            <table class="table table-borderless">
                <tbody>
                    <tr>
                        <th class="w-50">Status : </th>
                        <td class="w-50">{{ del.status }}</td>
                    </tr>
                    <tr>
                        <th class="w-50">Value : </th>
                        <td class="w-50">{{ del.charges }}</td>
                    </tr>

                    <tr>
                        <th class="w-50">Quantity : </th>
                        <td class="w-50">{{ del.qty }}</td>
                    </tr>
                    <tr>
                        <th class="w-50">Shipped To : </th>
                        <td class="w-50">{{ del.address }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Track Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="container mt-2">
                    <h1>Order Status</h1>
                    <OrderStepper :activeIndex="activeStep" />
                    <button class="btn btn-primary mt-3" @click="nextStep">Next Step</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import OrderStepper from '@/modules/macHiddle/components/OrderStepper.vue';
export default {
    components: {
        OrderStepper
    },
    props: ['order'],
    data() {
        return {
            activeStep: 0,
        }
    },
    methods: {
        nextStep() {
            this.activeStep = Math.min(this.activeStep + 1, 4);
        },
    }
}
</script>

<style scoped>
th:nth-child(1) {
    background-color: #e6e6e6;
}
</style>