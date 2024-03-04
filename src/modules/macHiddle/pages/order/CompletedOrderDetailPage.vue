<template>
    <div style="padding-bottom: 80px;">
        <div class="d-flex flex-column align-items-start bg-light border p-2" style="height: 63px !important;">
            <div class="d-flex align-items-center">
                <router-link to="/orders/completed" class="text-dark">
                    <i class="bi bi-arrow-left fs-3"></i>
                </router-link>
                <p class="m-2 mt-1 fs-5">Completed</p>
                <p class="m-1 ms-0 fs-5">OID: {{ complete.oid }}</p>
            </div>
        </div>
        <div class="px-2">
            <div class="" v-for="(del, index) in complete.orderSummary" :key="index">
                <p class="m-2 fs-3 mt-4">Order Summary</p>
                <div class="mt-2 ">
                    <table class="table ">
                        <tbody>
                            <tr @click="copyData($event)" class="p-2">
                                <th class="w-50">Order ID : </th>
                                <td class="w-50 test">{{ del.oid }}</td>
                                <td class="d-flex align-items-center gap-1">
                                    <i class="bi bi-files"></i><span style="font-size: 10px;">Copy</span>
                                </td>
                            </tr>
                            <tr>
                                <th class="w-50">Order Value : </th>
                                <td colspan="2" class="w-50">₹ {{ del.charges }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Quantity : </th>
                                <td colspan="2" class="w-50">{{ del.qty }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Status : </th>
                                <td colspan="2" class="w-50">{{ del.status }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Shipped To : </th>
                                <td colspan="2" class="w-50">{{ del.address }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="" v-for="(pay, index) in complete.payment" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="m-2 fs-3">Payment Details</p>
                    <button class="btn btn-dark"><small><i class="bi bi-download me-1"></i> Invoice</small></button>
                </div>
                <div class="mt-2">
                    <table class="table ">
                        <tbody>
                            <tr>
                                <th class="w-50">Payment Details : </th>
                                <td class="w-50">{{ pay.details }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payment Status : </th>
                                <td class="w-50">{{ pay.status }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payment Mode : </th>
                                <td class="w-50">{{ pay.mode }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payable Amount : </th>
                                <td class="w-50">₹ {{ pay.amount }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CompletedOrderDetailPage',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        complete() {
            let completeId = this.$route.params.completeId;
            return this.$store.getters['MacStore/getcompleteOrder'](completeId);
        },
    },
    methods: {
        copyData(event) {
            const tdElement = event.currentTarget.querySelector('.test');
            const text = tdElement.textContent;
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert(`Copied: ${text}`);
        }
    }
}
</script>

<style scoped>
th:nth-child(1) {
    background-color: #e6e6e6;
}
</style>