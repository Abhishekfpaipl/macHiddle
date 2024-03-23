<template>
    <div style="padding-top:80px;"> 
        <div class=" d-md-flex d-block container mb-4 w-100">
            <div class="d-md-block d-none  w-25 me-3">
                <div class="d-flex flex-column p-3 bg-light">
                    <b>cloBug</b>
                    <small>cloBug@gmail.com</small>
                    <small class="text-danger">Get Membership Now</small>
                </div>
                <div class="list-group py-2">
                    <p class=" mb-0 list-group-item">Track Order</p>
                    <p class=" mb-0 list-group-item">Gift Vouchers</p>
                    <p class=" mb-0 list-group-item">CB Points</p>
                    <p class=" mb-0 list-group-item">CB Money</p>
                    <p class=" mb-0 list-group-item">Saved card</p>
                    <p class=" mb-0 list-group-item">FAQs</p>
                    <p class=" mb-0 list-group-item">Profile</p>

                </div>

                <button class="btn btn-outline-danger w-100">Logout</button>
            </div>

            <div class="w-100">
                <div v-for="(product, index) in orders" :key="index">
                  <div class="border p-2 mb-2">
                        <div class="bg-light d-flex  justify-content-between p-2 border ">
                            <b>Order ID: {{ product.oid }}</b>
                            <div class="d-flex gap-2">
                                <p class="mb-0">{{ product.date }}</p>
                                <a href="#" class="text-decoration-none text-success">Invoice</a>
                            </div>
                        </div>
                        <div class="d-flex mt-2 ">
                            <img :src="product.img" class="" style="height:155px; width: 125px;object-fit: fill;">

                            <div class="d-flex flex-column justify-content-between w-100">
                                <div class="ms-2 ">
                                    <b class="">{{ product.name }}</b>
                                    <div class="d-flex justify-content-between w-100" @click="showOrderDetail(product)">
                                        <div class="d-flex flex-column">
                                            <b class="text-muted py-2">
                                                <i v-if="product.status !== 'Delivered'"
                                                    class="bi bi-record-circle-fill text-success"></i>
                                                <i v-if="product.status === 'Delivered'"
                                                    class="bi bi-circle-fill text-success"></i>
                                                {{ product.status }}
                                            </b>
                                            <b class="text-muted">Estimated delivery By{{ product.estimate }}</b>
                                            <div v-if="product.status === 'Delivered'" class="my-2 ">
                                                <p class="mb-0 text-success border-bottom"
                                                    @click="showActiveOrder(product)">
                                                    Track
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="product.status === 'Delivered'">
                                        <p class="mb-0">Product Rating</p>
                                        <StarRating :maxStars="5" :initialRating="productRating"
                                            @rated="updateProductRating" />
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <router-link to="/orders/completed">
                        <button class="btn btn-warning w-100">Previous Orders</button>
                    </router-link>
                </div>
            </div>

        </div>

        
       <div v-if="Object.keys(activeOrder).length !== 0">
            <div class="offcanvas offcanvas-bottom show " data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel" style="height: 20vh;">
                <div class="d-flex justify-content-between bg-light px-2 border-bottom align-items-center">
                    <p class="mb-0">Tracking Details</p>
                    <p class="mb-0" @click="hideOrder()"><i class="bi bi-x fs-1"></i></p>
                </div>
                <div class="offcanvas-body p-2">
                    <p>Courier Name : {{ activeOrder.courier }}</p>
                    <p>Track No : {{ activeOrder.trackNo }}</p>
                </div>
            </div>
        </div> 


         <div v-if="Object.keys(activeOrderDetail).length !== 0">
            <div class="offcanvas offcanvas-end show " data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel">
                <div class="d-flex justify-content-between bg-light px-2 border-bottom align-items-center">
                    <i class="bi bi-arrow-left"></i>
                    <p class="mb-0">Order Details</p>
                    <p class="mb-0" @click="hideOrderDetail()"><i class="bi bi-x fs-1"></i></p>
                </div>
                <div class="offcanvas-body p-2">
                    <div class="d-flex justify-content-between border-bottom bg-light p-3">
                        <p class="mb-0">{{ activeOrderDetail.oid }}</p>
                        <p class="mb-0">{{ activeOrderDetail.date }}</p>
                    </div>
                    <div class="d-flex border-bottom py-2">
                        <img :src="activeOrderDetail.img" class="" style="height:155px; width: 125px;object-fit: fill;">

                        <div class="d-flex flex-column ms-2 ">
                            <b class="">{{ activeOrderDetail.name }}</b>
                            <div class="">
                                <span>Size : {{ activeOrderDetail.size }}</span><span class="mx-2">|</span><span>Qty : {{
                                    activeOrderDetail.qty
                                }}</span>
                            </div>
                            <b>₹ {{ activeOrderDetail.price }}</b>
                            <small class="text-muted">Order can't be cancelled once it is shipped.</small>

                        </div>

                    </div>
                    <div class="container mt-2">
                        <h1>Order Status</h1>
                        <OrderStepper :activeIndex="activeStep" />
                        <button class="btn btn-primary mt-3" @click="nextStep">Next Step</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 

    <div class=""></div>
</template>
<script>
// import StarRating from './StarRating.vue';
// import OrderStepper from './OrderStepper.vue';
export default {
    name: 'PendingOrdersPage',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            activeStep: 0,
        }
    },
    computed: {
        orders() {
            return this.$store.getters['LoggedInUserStore/getOrders']
        },
        // activeOrder() {
        //     return this.$store.getters['order/getActiveOrder']
        // },
        // activeOrderDetail() {
        //     return this.$store.getters['order/getActiveOrderDetail']
        // },
    },
    components: {
        // StarRating,
        // OrderStepper
    },
    mounted(){
        this.$store.dispatch('LoggedInUserStore/fetchOrders')

    },
    methods: {
        // updateProductRating(rating) {
        //     this.productRating = rating;
        // },
        // showActiveOrder(product) {
        //     this.$store.dispatch('order/selectActiveOrder', product)
        // },
        // hideOrder() {
        //     this.$store.dispatch('order/hideOrder')
        // },
        // showOrderDetail(product) {
        //     this.$store.dispatch('order/selectOrderDetail', product)
        // },
        // hideOrderDetail() {
        //     this.$store.dispatch('order/hideOrderDetail')
        // },
        // nextStep() {
        //     this.activeStep = Math.min(this.activeStep + 1, 4);
        // },
        // goBack() {
        //     window.history.back()
        // }
    },
}
</script>
<style></style>