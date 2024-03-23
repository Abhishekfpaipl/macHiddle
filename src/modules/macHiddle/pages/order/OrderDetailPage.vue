<template>
    <div class="container pt-2 py-3 my-5">
        <p class="my-1 fw-bold">View Order Details</p>
        <div class="d-flex justify-content-between my-2 rounded border p-2 my-2">
            <div class="">
                <p class="mb-1">Order Date</p>
                <p class="mb-1">Order #</p>
                <p class="mb-1">Order Total</p>
            </div>
            <div class="">
                <p class="mb-1">{{ formatDate(order.created_at) }}</p>
                <p class="mb-1">{{ order.id }}</p>
                <p class="mb-1">{{ order.amount }}</p>
            </div>
        </div>
        <router-link v-if="order.product" :to="'/product-page/' + order.product.sid" class="d-flex text-decoration-none text-dark">
            <img v-if="order.product && order.product.option" :src="order.product.option.primary_image" class=""
                style="width: 125px;object-fit: fill;">
            <div class="ms-2">
                <p class="fw-bold mb-0" v-if="order.product && order.product.name">{{
                    order.product.name
                }}</p>
                <small v-if="order.product && order.product.category" class="text-muted">{{
                    order.product.category.name }}</small>
                <div class="">
                    <span v-if="order.product && order.product.range" class="text-capitalize">Size :
                        {{ order.product.range.name }}</span>
                    <span class="mx-2">|</span>
                    <span>Qty :{{ order.quantity }}</span>
                </div>
                <b v-if="order.payment">₹ {{ order.payment.amount }}</b>
                <p class="mb-1 text-muted small">Return period for this product has been expired.</p>
                <p class="mb-1 text-danger small">You have initiated request to cancel the order
                    .</p>
            </div>
        </router-link>
        <div v-if="!order.cancelled" class="">
            <textarea class="form-control my-2" v-model="cancelOrderReason"
                placeholder="Enter Reject Reason"></textarea>
            <button v-if="order.status === 'pending'" class="btn btn-danger my-2" @click="cancelOrder(order.sid)">Cancel
                Order</button>
        </div>
        <div class="my-2">
            <p class="mb-1 fw-bold">Order Summary</p>
            <div class="d-flex justify-content-between border rounded p-2">
                <div class="">
                    <p class="mb-1">Items:</p>
                    <p class="mb-1">Postage & Packing:</p>
                    <p class="mb-1">Total before Tax:</p>
                    <p class="mb-1">Tax:</p>
                    <p class="mb-1">Total:</p>
                    <strong>Order Total:</strong>
                </div>
                <div class="">
                    <p class="mb-1">₹ {{ order.price }}</p>
                    <p class="mb-1">₹ 0.00</p>
                    <p class="mb-1">₹ {{ order.price }}</p>
                    <p class="mb-1">₹ {{ order.tax }}</p>
                    <p class="mb-1">₹ {{ order.total }}</p>
                    <strong>₹ {{ order.total }}</strong>
                </div>
            </div>
        </div>
        <div class="my-2">
            <p class="mb-1 fw-bold">Shipping Address</p>
            <div class="rounded border p-2">
                <span v-if="order.delivery">{{ order.delivery.address }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderDetailPage",
    data() {
        return {
            orderId: null,
            cancelOrderReason: '',
        };
    },
    mounted() {
        this.orderId = this.$route.params.orderId
        this.$store.dispatch('LoggedInUserStore/showOrder', this.orderId)
    },
    computed: {
        order() {
            return this.$store.getters['LoggedInUserStore/getOrder']
        }
    },
    methods: {
        formatDate(dateTimeString) {
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            };
            const formattedTime = new Date(dateTimeString).toLocaleDateString('en-US', options);
            return formattedTime;
        },
        cancelOrder(activeOrderId) {
            console.log(activeOrderId)
            const data = {
                reason: this.cancelOrderReason,
                order_sid: activeOrderId
            }
            this.$store.dispatch('LoggedInUserStore/cancelOrder', data)
        }
    }
}
</script>
