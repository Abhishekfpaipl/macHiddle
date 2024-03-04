<template>
    <div class="container mt-5" style="padding-bottom: 80px;">

        <div class="mt-5 p-3 px-4 border bg-light">
            <div class="">
                <h3 class="text-center">Choose Shipping Options</h3>
                <div class="d-flex w-100 mt-3">
                    <div class="container d-flex justify-content-between  p-2">
                        <input type="radio" class="btn-check" name="shippingMethod" id="LocalTransport" autocomplete="off"
                            v-model="shippingMethod" value="Local Transport" @change="showLocal" checked>
                        <label class="btn btn-outline-danger rounded-0 w-100" style="opacity:80%;"
                            for="LocalTransport">Local Transporter</label>
                    </div>
                    <div class="container d-flex justify-content-between p-2">
                        <input type="radio" class="btn-check" name="shippingMethod" id="ShipRocket" autocomplete="off"
                            v-model="shippingMethod" value="Ship Rocket" @change="showRocket">
                        <label class="btn btn-outline-danger rounded-0 w-100" style="opacity: 80%;" for="ShipRocket">Ship
                            Rocket</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="border p-3 px-4 bg-light mt-5">
            <div v-if="shippingMethod === 'Local Transport'">
                <h3 class="text-center">Fill Up The Details About</h3>
                <h3 class="text-center">Shipping</h3>
                <div class="mt-3">
                    <div class="form-floating ">
                        <textarea class="form-control rounded-0" placeholder="Leave a comment here" id="Other"
                            style="height: 100px"></textarea>
                        <label for="Other">Any Other Details</label>
                    </div>
                    <div class="form-floating my-3 ">
                        <input type="text" class="form-control border" placeholder="Phone Number" id="numberInput1"
                            v-model="number" style="border-radius: 0px;" />
                        <label for="numberInput1">Phone Number</label>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2 w-100">
                    <div class="w-50">
                        <label for="date" class="form-label ms-1">Select Date</label>
                        <input type="date" class="form-control" id="date">
                    </div>
                    <div class="w-50">
                        <label for="time" class="form-label ms-1">Select Time</label>
                        <input type="time" class="form-control" id="time">
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center align-items-center" v-else style="height: 340px;">
                <h1 class="text-center" style="color: gray;">Coming Soon !</h1>
            </div>
        </div>

        <div class="">
            <div class="mt-5 p-3 border bg-light">
                <h3 class="text-center">Choose Pick-Up Option</h3>
                <div class="d-flex w-100 mt-3">
                    <div class="container d-flex justify-content-between p-2">
                        <input type="radio" class="btn-check" name="pickupMethod" id="Self" autocomplete="off"
                            v-model="pickupMethod" value="Self" @change="showSelf" checked>
                        <label class="btn btn-outline-danger rounded-0 w-100" style="opacity: 80%;" for="Self">By
                            Self</label>
                    </div>
                    <div class="container d-flex justify-content-between  p-2">
                        <input type="radio" class="btn-check" name="pickupMethod" id="Transport" autocomplete="off"
                            v-model="pickupMethod" value="Transport" @change="showTransport">
                        <label class="btn btn-outline-danger rounded-0 w-100" style="opacity:80%;" for="Transport">By
                            Transport</label>
                    </div>
                </div>
            </div>


            <div class="mt-5 px-4 p-3 border bg-light">
                <div v-if="pickupMethod === 'Self'">
                    <h3 class="text-center">Fill Up The Details About</h3>
                    <h3 class="text-center">Self Pick-Up</h3>
                    <div class="mt-3">
                        <div class="form-floating ">
                            <textarea class="form-control rounded-0" placeholder="Leave a comment here" id="Other"
                                style="height: 100px"></textarea>
                            <label for="Other">Any Other Details</label>
                        </div>
                        <div class="form-floating my-3 ">
                            <input type="text" class="form-control border" placeholder="Phone Number" id="numberInput1"
                                v-model="number" style="border-radius: 0px;" />
                            <label for="numberInput1">Phone Number</label>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h3 class="text-center">Fill Up The Details About</h3>
                    <h3 class="text-center">Transporter Pick-Up</h3>
                    <div class="mt-3">
                        <div class="form-floating ">
                            <textarea class="form-control rounded-0" placeholder="Leave a comment here"
                                id="floatingTextarea2" style="height: 100px"></textarea>
                            <label for="floatingTextarea2">Transporter Details</label>
                        </div>
                        <div class="form-floating my-3 ">
                            <input type="text" class="form-control border" placeholder="Phone Number" id="numberInput"
                                v-model="number" style="border-radius: 0px;" />
                            <label for="numberInput">Phone Number</label>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center gap-2 w-100">
                    <div class="w-50">
                        <label for="date" class="form-label ms-1">Select Date</label>
                        <input type="date" class="form-control" id="date">
                    </div>
                    <div class="w-50">
                        <label for="time" class="form-label ms-1">Select Time</label>
                        <input type="time" class="form-control" id="time">
                    </div>
                </div>

            </div>
        </div>

        <PriceDetails class="mt-5 border"></PriceDetails>
        <div class="d-flex flex-column bill mt-5">
            <p class="mb-0  text-center">Press Checkout</p>
        </div>
    </div>
</template>

<script>
import PriceDetails from '@/modules/macHiddle/components/cart/PriceDetails.vue';
export default {
    data() {
        return {
            pickupMethod: "Self",
            shippingMethod: "Local Transport"
        };
    },
    components: { PriceDetails },
    methods: {
        showSelf() {
            this.pickupMethod = "Self";
        },
        showTransport() {
            this.pickupMethod = "Transport";
        },
        showLocal() {
            this.shippingMethod = "Local Transport";
        },
        showRocket() {
            this.shippingMethod = "Ship Rocket";
        },
    },
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