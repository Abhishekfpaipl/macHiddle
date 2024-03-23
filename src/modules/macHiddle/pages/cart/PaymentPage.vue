<template>
    <div class="container py-5">
        <CartStepper></CartStepper>
        <div class="row">
            <div class="col-12 col-md-8">
                <MiniAddressNav @fullAddress="handleFullAddress" :checkout="checkout" />
                <div class="my-3">
                    <p class="mb-2 fw-bold">Delivery Options</p>
                    <div class="form-check border p-2 d-flex justify-content-between"
                        v-for="(option, index) in deliveryOptions" :key="index">
                        <label class="form-check-label" :for="option.id">
                            {{ option.name }}
                        </label>
                        <input class="form-check-input" type="radio" name="delivery" :id="option.id"
                            :value="option.name" v-model="selectedDelivery" checked>
                    </div>
                </div>
                <p class="mb-2 fw-bold">Payment Options</p>
                <div class="form-check border p-2 d-flex justify-content-between"
                    v-for="(option, index) in paymentOptions" :key="index">
                    <label class="form-check-label" :for="option.id">
                        {{ option.name }}
                    </label>
                    <input class="form-check-input" type="radio" :name="'payment'" :id="option.id" :value="option.value"
                        v-model="selectedPayment">
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div v-if="cartProducts && cartProducts.products && cartProducts.products.length > 0"
                    class="d-none d-md-block list-group rounded-0">
                    <div class="d-flex justify-content-between py-2 list-group-item">
                        <span class="fw-bold">Subtotal:</span>
                        <span>₹ {{ cartProducts.amount }}</span>
                    </div>

                    <div class="d-flex justify-content-between py-2 list-group-item">
                        <span class="fw-bold">GST:</span>
                        <span>₹ {{ cartProducts.tax }}</span>
                    </div>

                    <div class="d-flex justify-content-between py-2 list-group-item">
                        <span class="fw-bold">Grand Total:</span>
                        <span>₹ {{ cartProducts.total }}</span>
                    </div>
                    <router-link to="/payment-page"
                        class="btn btn-danger rounded-0 d-flex align-items-center justify-content-center">Checkout
                    </router-link>

                </div>
                <PriceDetails :cartProducts="cartProducts" />
            </div>
        </div>
        <CartSummary><template v-slot:btn></template></CartSummary>
    </div>
    <div v-if="cartProducts && cartProducts.products && cartProducts.products.length > 0"
        class="btn-group rounded-0 d-md-none w-100 position-fixed"
        style="z-index: 10;height: 63px; bottom: 0; background: #f6f6f6;">
        <div class="btn btn-dark rounded-0 d-flex flex-column" data-bs-toggle="offcanvas" data-bs-target="#priceDetails"
            aria-controls="priceDetails">
            <span class="">₹ {{ cartProducts.total }}</span>
            <div class="d-flex justify-content-center">
                <small>View Detials</small> <i class="ps-1 bi bi-caret-up-fill"></i>
            </div>
        </div>
        <button v-if="checkout.delivery_address" @click="proceedToCheckout()"
            class="btn btn-danger rounded-0 text-decoration-none d-flex align-items-center justify-content-center">Place
            Order
        </button>
        <button v-else @click="proceedToCheckout()"
            class="btn btn-danger rounded-0 text-decoration-none d-flex align-items-center justify-content-center">Check Address</button>
    </div>
</template>

<script>
import CartStepper from './CartStepper.vue';
import MiniAddressNav from './MiniAddressNav.vue';
import CartSummary from './CartSummary.vue';
import PriceDetails from './PriceDetails.vue';

export default {
    name: 'PaymentPage',
    components: {
        CartStepper,
        MiniAddressNav,
        CartSummary,
        PriceDetails
    },
    data() {
        return {
            selectedDelivery: "standard",
            selectedPayment: 'cod',
            fullAddressFromChild: '',
            grandTotal: null,
            deliveryOptions: [
                { id: 'standard', name: 'Standard Delivery', value: 'standard' },
                // { id: 'fast', name: 'Fast Delivery', value: 'fast' }
            ],
            paymentOptions: [ // Define your payment options
                // { id: 'upi', name: 'Pay With UPI', value: 'upi' },
                // { id: 'netbanking', name: 'Netbanking', value: 'netbanking' },
                { id: 'cod', name: 'COD', value: 'cod' }
            ]
        };
    },
    mounted() {
        this.$store.dispatch('LoggedInUserStore/fetchCart')
        this.$store.dispatch('LoggedInUserStore/fetchCheckout')
        // this.$store.dispatch('LoggedInUserStore/fetchAddresses')
    },
    computed: {
        checkout() {
            return this.$store.getters['LoggedInUserStore/getCheckout']
        },
        cartProducts() {
            return this.$store.getters['LoggedInUserStore/getCart']
        },
        // address() {
        //     return this.$store.getters['LoggedInUserStore/getAddresses']
        // }
    },
    methods: {
        proceedToCheckout() {
            const data = {
                delivery_mode: this.selectedDelivery,
                payment_mode: this.selectedPayment,
            };
            this.$store.dispatch('LoggedInUserStore/proceedToCheckout', data)
            this.$router.push('/thank-you')
        }
    }

};
</script>