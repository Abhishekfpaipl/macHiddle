<template>
    <div class="" style="padding-bottom: 100px;">
        <div class="d-flex align-items-center  bg-light border p-2" style="height: 63px !important;">
            <i class="bi bi-arrow-left fs-3" @click="goBack()"></i>
            <p class="m-2 mt-1 fs-5">Pending</p>
            <p class="m-1 ms-0 fs-5">OID: {{ order.oid }}</p>
        </div>
        <div class="container">
            <div class="" v-for="(pay, index) in order.payment" :key="index">
                <div class="d-flex align-items-center justify-content-between my-2">
                    <p class="ms-2 m-0 fs-3">Amount Payable</p>
                    <p class="mb-0 fs-3">₹ {{ formattedNumber }}</p>
                </div>
                <div class="d-flex justify-content-between gap-3">
                    <div class="w-100 d-flex justify-content-between  mt-2">
                        <input type="radio" class="btn-check" name="paymentMethod" id="Upi" autocomplete="off"
                            v-model="selectedMethod" value="Upi" @change="showUpiDetails">
                        <label class="btn btn-outline-success rounded-0 w-100" style="opacity: 80%;" for="Upi">Upi</label>
                    </div>
                    <div class="w-100 d-flex justify-content-between mt-2">
                        <input type="radio" class="btn-check" name="paymentMethod" id="Bank" autocomplete="off"
                            v-model="selectedMethod" value="Bank" @change="showBankDetails">
                        <label class="btn btn-outline-success  rounded-0 w-100 " style="opacity: 80%;"
                            for="Bank">Bank</label>
                    </div>
                </div>
                <div class="d-flex justify-content-between py-1 mt-2" v-if="selectedMethod === 'Bank'">
                    <table class="table table-border border bg-light mb-1">
                        <tbody>
                            <tr v-for="(bank, index) in bankDetial" :key="index" @click="copyData($event)" class="">
                                <th class="w-50" style="padding: 4px;">{{ bank.name }}: </th>
                                <td class="w-50 test" id="hh" style="padding: 4px;">{{ bank.value }}</td>
                                <td class="d-flex align-items-center gap-1" style="padding: 4px;">
                                    <i :class="bank.icon"></i><span style="font-size: 10px;">{{ bank.copy }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-flex gap-1 align-items-center py-2 border bg-light my-3" v-if="selectedMethod === 'Upi'">
                    <div class="">
                        <a :href="`${publicPath}${qrCode}`" download="QRcode" class="text-decoration-none">
                            <img :src="`${publicPath}${qrCode}`" alt="QR Code"
                                style="height: 120px; width: 120px;object-fit:contain">
                        </a>
                    </div>
                    <div class="">
                        <p class="mb-2 border p-1">Dheeraj Sardar</p>
                        <table class="table table-border border mb-2">
                            <tbody>
                                <tr @click="copyData($event)">
                                    <td class="w-50 test" style="padding: 4px;">9555924440@paytm</td>
                                    <td class="d-flex align-items-center gap-1" style="padding: 4px;">
                                        <i class="bi bi-files"></i>
                                        <span style="font-size: 10px;">Copy</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <a class="d-flex justify-content-between border p-1 text-decoration-none text-dark"
                            href="https://www.google.com/">
                            <p class="m-0">Payment Link</p>
                            <p class="m-0 d-flex gap-1 align-items-center"><i class="bi bi-arrow-left-circle"></i> <span
                                    style="font-size: 10px;">Click</span></p>
                        </a>
                    </div>
                </div>
            </div>
            <ImageUploadBox></ImageUploadBox>
            <button class="btn top-brand w-100 mt-2" @click="showPaymentDetails">Submit</button>
            <div class="" v-for="(pay, index) in order.payment" :key="index">
                <p class="ms-2 m-0 fs-3 mt-4">Payment Details</p>
                <div class="mt-2">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <th class="w-50">Payment Details : </th>
                                <td class="w-50">{{ checkPayment }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payment Status : </th>
                                <td class="w-50">{{ pay.status }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payment Mode : </th>
                                <td class="w-50">{{ selectedMethod }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payable Amount : </th>
                                <td class="w-50">₹ {{ formattedNumber }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <POrderSummary :order="order" />
            <POrderCatelog :order="order" />
        </div>
    </div>
</template>

<script>
import POrderCatelog from '@/modules/macHiddle/components/order/POrderCatelog.vue';
import POrderSummary from '@/modules/macHiddle/components/order/POrderSummary.vue';
import ImageUploadBox from '@/modules/macHiddle/components/ImageUploadBox.vue';
export default {
    name: "PendingOrderDetailPage",
    data() {
        return {
            publicPath: process.env.BASE_URL,
            selectedMethod: 'Upi',
            qrCode: 'img/QRcode.jpg',
            checkPayment: 'Pending',
            bankDetial: [
                {
                    id: 1,
                    name: 'Account Name',
                    value: 'Metro Fashion',
                    icon: 'bi bi-files',
                    copy: 'copy',
                },
                {
                    id: 2,
                    name: 'Bank Name',
                    value: 'ICICI Bank',
                    icon: 'bi bi-files',
                    copy: 'copy',
                },
                {
                    id: 3,
                    name: 'IFSC',
                    value: 'ICIC0001129',
                    icon: 'bi bi-files',
                    copy: 'copy',
                },
                {
                    id: 4,
                    name: 'Account No',
                    value: '112905500201',
                    icon: 'bi bi-files',
                    copy: 'copy',
                },
                {
                    id: 5,
                    name: 'Account Type',
                    value: 'Current Account',
                    icon: 'bi bi-files',
                    copy: 'copy',
                }
            ]
        };
    },
    components: {
        ImageUploadBox,
        POrderCatelog,
        POrderSummary
    },
    computed: {
        order() {
            let orderId = this.$route.params.orderId;
            return this.$store.getters['MacStore/getOrder'](orderId);
        },
        formattedNumber() {
            let qty = this.order.amount + ""
            return qty.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    },
    methods: {
        goBack() {
            window.history.back();
        },
        showBankDetails() {
            this.selectedMethod = 'Bank';
        },
        showUpiDetails() {
            this.selectedMethod = 'Upi';
        },
        showPaymentDetails() {
            this.checkPayment = 'Uploaded';
        },
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

    },
}
</script>
<style scoped>
th:nth-child(1) {
    background-color: #e6e6e6;
}

.ss {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>