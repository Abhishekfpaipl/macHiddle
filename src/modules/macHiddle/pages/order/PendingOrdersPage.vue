<template>
    <OrdinaryLink active="Running"></OrdinaryLink>
    <OrderFilter style="padding-top:80px !important;"></OrderFilter>
    <div style="padding-bottom: 100px;">
        <div v-for="(order, index) in orders" :key="index">
            <router-link :to="'/orders/pending/' + order.id" class="text-decoration-none text-dark">
                <div class="d-flex justify-content-between container align-items-center mb-2">
                    <div class="d-flex align-items-center w-100 border-top p-2" style="padding-bottom: 0px !important;">
                        <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center me-3"
                            style="height:60px; width:60px;">
                            <div style="line-height: 1rem;">{{ order.date }}</div>
                            <small>{{ order.month }}</small>
                        </div>
                        <div class="w-75">
                            <div class="d-flex justify-content-between align-items-center ">
                                <p class="m-0" style="font-size:14px;font-weight:500;">OID: {{ order.oid }} </p>

                                <div v-if="order.statusone === 'Pending'" class="text-dark d-flex rounded">
                                    <i class="bi bi-truck fs-5 px-2"></i>
                                    <i class="bi bi-clock-history fs-5 px-1"></i>
                                </div>

                                <div v-if="order.statusone === 'Shipped'" class="text-primary d-flex rounded">
                                    <i class="bi bi-truck fs-5 px-2"></i>
                                    <i class="bi bi-send fs-5 px-1"></i>
                                </div>

                                <div v-if="order.statusone === 'Delivered'" class="text-success d-flex rounded">
                                    <i class="bi bi-truck fs-5 px-2"></i>
                                    <i class="bi bi-check-circle fs-5 px-1"></i>
                                </div>

                                <div v-if="order.statusone === 'Cancelled'" class="text-danger d-flex rounded">
                                    <i class="bi bi-truck fs-5 px-2"></i>
                                    <i class="bi bi-x-circle fs-5 px-1"></i>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="">
                                    <p class="m-0" style="font-size:14px;">Invoice: {{ order.invoiceno }}
                                    </p>
                                </div>
                                <div class="">

                                    <div v-if="order.status === 'Paid'" class="text-success d-flex  rounded">
                                        <i class="bi bi-wallet2 fs-5 px-2"></i>
                                        <i class="bi bi-check-circle fs-5 px-1"></i>
                                    </div>
                                    <div v-if="order.status === 'Unpaid'" class="text-dark d-flex rounded">
                                        <i class="bi bi-wallet2 fs-5 px-2"></i>
                                        <i class="bi bi-clock-history fs-5 px-1"></i>
                                    </div>
                                    <div v-if="order.status === 'Rejected'" class="text-danger d-flex rounded">
                                        <i class="bi bi-wallet2 fs-5 px-2"></i>
                                        <i class="bi bi-x-circle fs-5 px-1"></i>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import OrderFilter from '@/modules/macHiddle/components/order/OrderFilter.vue';
import OrdinaryLink from '@/modules/macHiddle/components/order/OrdinaryLink.vue';
export default {
    name: 'PendingOrderPage',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        orders() {
            return this.$store.getters['MacStore/getOrders']
        }
    },
    components: {
        OrdinaryLink,
        OrderFilter
    },
}
</script>
<style></style>