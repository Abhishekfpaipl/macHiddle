<template>
    <div>
        <OrdinaryLink active="Completed"></OrdinaryLink>
        <CompletedOrderFilter style="padding-top:80px !important;"></CompletedOrderFilter>
        <div class="container py-3" style="padding-bottom:80px">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                <!-- <div class="col" v-for="(complete, index) in completed" :key="index">
                    <div class="card border ">
                        <router-link :to="'/orders/completed-order/' + complete.id">
                            <img :src="complete.img" alt=""
                                style="height: 250px; width: 100%; object-fit: cover; border-top-left-radius:2%; border-top-right-radius:2%;">
                        </router-link>
                        <div class="card-footer p-0">
                            <div class="btn-group w-100 rounded-bottom justify-content-end">
                                <router-link :to="'/catalog-page/' + complete.catelog_id"
                                    class="text-decoration-none border-end w-50 text-dark">
                                    <button class="btn w-100 bg-outline-dark rounded-0 my-2 py-0" style="font-size: 10px; ">
                                        <p class="m-0">Detail Page</p>
                                    </button>
                                </router-link>
                                <router-link :to="'/orders/completed-order/' + complete.id"
                                    class="text-decoration-none w-50 text-dark">
                                    <button class="btn w-100 border-1 bg-outline-dark rounded-0 my-2 py-0"
                                        style="font-size: 10px;">
                                        <p class="m-0">Order Page</p>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div> -->

            </div>
            <div v-for="(order, index) in completed" :key="index" class="">
                <div class="border my-2">
                    <router-link class="text-dark text-decoration-none" :to="'/orders/completed-order/' + order.id">
                        <div class="bg-light d-flex  justify-content-between p-2 py-3 ">
                            <b>Order ID: {{ order.oid }}</b>
                            <div class="d-flex gap-2">
                                <p class="mb-0">{{ order.date }}</p>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </router-link>
                    <div v-for="(product, productIndex) in order.subproduct" :key="productIndex"
                        class="d-flex p-2 border-top">
                        <img :src="product.img" class="rounded-3" style="height:100px; max-width: 110px;object-fit: cover;">
                        <div class="d-flex flex-column justify-content-between w-100">
                            <div class="ms-2 ">
                                <div class="">
                                    <div class="truncate">
                                        <b>{{ product.name }}asd asd ada dsa d asd asd </b>
                                    </div>
                                    <div class="d-flex w-100">
                                        <b class="text-muted  me-2">
                                            <small>Size: Medium </small>
                                        </b>
                                        <b class="text-muted">||</b>
                                        <b class="text-muted  ms-2">
                                            <small>Colour: Black </small>
                                        </b>
                                    </div>
                                    <div class="d-flex w-100">
                                        <b class="text-muted  me-2">
                                            <small>Qty: {{ product.qty }} </small>
                                        </b>
                                    </div>
                                </div>
                                <div class="d-flex align-items-end justify-content-between">
                                    <div v-if="order.status === 'Delivered'" class="d-flex align-items-end">
                                        <small data-bs-toggle="offcanvas" data-bs-target="#Track" aria-controls="Track"
                                            class="border rounded px-1 text-success me-2 text-center"><small>RE-ORDER</small></small>
                                        <small data-bs-toggle="offcanvas" data-bs-target="#Track" aria-controls="Track"
                                            class="border rounded px-1 text-success text-center"><small>REVIEW</small></small>
                                    </div>
                                    <div class="d-flex align-items-center" @click="showOrderDetail(product)">
                                    </div>
                                    <div @click="showReiviewDetail(product)" v-if="order.status === 'Delivered'">
                                        <StarRating :maxStars="5" :initialRating="productRating"
                                            @rated="updateProductRating" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-for="(product, productIndex) in order.subproduct" :key="productIndex"
                        class="d-flex p-2 border-top">
                        <img :src="product.img" class="rounded-3" style="height:100px; max-width: 110px;object-fit: cover;">
                        <div class="d-flex flex-column justify-content-between w-100">
                            <div class="ms-2 ">
                                <div class="">
                                    <div class="truncate">
                                        <b>{{ product.name }}asd asd ada dsa d asd asd </b>
                                    </div>
                                    <div class="d-flex w-100">
                                        <b class="text-muted  me-2">
                                            <small>Size: Medium </small>
                                        </b>
                                        <b class="text-muted">||</b>
                                        <b class="text-muted  ms-2">
                                            <small>Colour: Black </small>
                                        </b>
                                    </div>
                                    <div class="d-flex w-100">
                                        <b class="text-muted  me-2">
                                            <small>Qty: {{ product.qty }} </small>
                                        </b>
                                    </div>
                                </div>
                                <div class="d-flex align-items-end justify-content-between">
                                    <div v-if="order.status === 'Delivered'" class="d-flex align-items-end">
                                        <small data-bs-toggle="offcanvas" data-bs-target="#Track" aria-controls="Track"
                                            class="border rounded px-1 text-success me-2 text-center"><small>RE-ORDER</small></small>
                                        <small data-bs-toggle="offcanvas" data-bs-target="#Track" aria-controls="Track"
                                            class="border rounded px-1 text-success text-center"><small>REVIEW</small></small>
                                    </div>
                                    <div class="d-flex align-items-center" @click="showOrderDetail(product)">
                                    </div>
                                    <div @click="showReiviewDetail(product)" v-if="order.status === 'Delivered'">
                                        <StarRating :maxStars="5" :initialRating="productRating"
                                            @rated="updateProductRating" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-for="(product, productIndex) in order.subproduct" :key="productIndex"
                        class="d-flex p-2 border-top">
                        <img :src="product.img" class="rounded-3" style="height:100px; max-width: 110px;object-fit: cover;">
                        <div class="d-flex flex-column justify-content-between w-100">
                            <div class="ms-2 ">
                                <div class="">
                                    <div class="truncate">
                                        <b>{{ product.name }}asd asd ada dsa d asd asd </b>
                                    </div>
                                    <div class="d-flex w-100">
                                        <b class="text-muted  me-2">
                                            <small>Size: Medium </small>
                                        </b>
                                        <b class="text-muted">||</b>
                                        <b class="text-muted  ms-2">
                                            <small>Colour: Black </small>
                                        </b>
                                    </div>
                                    <div class="d-flex w-100">
                                        <b class="text-muted  me-2">
                                            <small>Qty: {{ product.qty }} </small>
                                        </b>
                                    </div>
                                </div>
                                <div class="d-flex align-items-end justify-content-between">
                                    <div v-if="order.status === 'Delivered'" class="d-flex align-items-end">
                                        <small data-bs-toggle="offcanvas" data-bs-target="#Track" aria-controls="Track"
                                            class="border rounded px-1 text-success me-2 text-center"><small>RE-ORDER</small></small>
                                        <small data-bs-toggle="offcanvas" data-bs-target="#Track" aria-controls="Track"
                                            class="border rounded px-1 text-success text-center"><small>REVIEW</small></small>
                                    </div>
                                    <div class="d-flex align-items-center" @click="showOrderDetail(product)">
                                    </div>
                                    <div @click="showReiviewDetail(product)" v-if="order.status === 'Delivered'">
                                        <StarRating :maxStars="5" :initialRating="productRating"
                                            @rated="updateProductRating" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div v-if="activeReviewDetail && Object.keys(activeReviewDetail).length !== 0">
            <div class="offcanvas offcanvas-end show " data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel">
                <div class="d-flex justify-content-between bg-light px-2 border-bottom align-items-center">
                    <p class="mb-0 fw-bold">Review</p>
                    <p class="mb-0" @click="hideReviewDetail()"><i class="bi bi-x fs-1"></i></p>
                </div>
                <div class="offcanvas-body p-2">
                    <p class=" mb-0 fw-bold text-center">HELP US</p>
                    <p class="fw-bold text-center mb-0">MAKE OUR PRODUCT BETTER</p>
                    <p class="fw-bold text-center px-5 mx-5 border-bottom border-danger border-3"></p>
                    <div class="d-flex border-bottom py-2">
                        <img :src="activeReviewDetail.img" class="rounded-3"
                            style="height:80px; width: 110px;object-fit: cover;">
                        <div class="w-100 ms-3">
                            <div class="truncate">
                                <b>{{ activeReviewDetail.name }}</b>
                            </div>
                            <small class="mb-0">Qty: {{ activeReviewDetail.qty }}</small>

                        </div>
                    </div>
                    <div class="container">
                        <div class="my-3">
                            <p class=" mb-1  fw-bold">Feedback</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Oevrall Product</span>
                                <StarRating :maxStars="5" :initialRating="productRating" @rated="updateProductRating" />
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Fit & Size</span>
                                <StarRating :maxStars="5" :initialRating="productRating" @rated="updateProductRating" />
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Quality & Fabric</span>
                                <StarRating :maxStars="5" :initialRating="productRating" @rated="updateProductRating" />
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Design & Colour</span>
                                <StarRating :maxStars="5" :initialRating="productRating" @rated="updateProductRating" />
                            </div>
                        </div>
                        <div class="my-3">
                            <b class="mb-2">Where will you wear this porduct?</b>
                            <div class="form-check my-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Everywher
                                </label>
                            </div>
                            <div class="form-check my-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Casual Outing/Brunch
                                </label>
                            </div>
                            <div class="form-check my-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Office
                                </label>
                            </div>
                            <div class="form-check my-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Party/Date Night
                                </label>
                            </div>
                            <div class="form-check my-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Lounging At Home
                                </label>
                            </div>
                            <div class="form-check my-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Workout
                                </label>
                            </div>
                        </div>
                        <div class="my-3">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label"><b>Tell Us More</b></label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <button class="btn btn-success d-flex justify-content-center">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CompletedOrderFilter from '@/modules/macHiddle/components/order/CompletedOrderFilter.vue';
import OrdinaryLink from '@/modules/macHiddle/components/order/OrdinaryLink.vue';
// import StarRating from '@/components/StarRating.vue';

export default {
    name: "CompletedOrders",
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    components: {
        OrdinaryLink,
        CompletedOrderFilter,
        // StarRating
    },
    computed: {
        completed() {
            return this.$store.getters['MacStore/getCompletedOrders']
        },
        activeReviewDetail() {
            return this.$store.getters['order/getActiveReviewDetail']
        },
    },
    methods: {
        showReiviewDetail(productName) {
            this.$store.dispatch('order/selectReviewDetail', productName);
        },
        hideReviewDetail() {
            this.$store.dispatch('order/hideReviewDetail')
        },
        updateProductRating(rating) {
            this.productRating = rating;
        },
    }
}
</script>