<template>
    <div class="">
        <div class="">
            <p class="bill my-5">Bill Summary</p>
            <div class="d-flex justify-content-between border p-2 py-3" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottomPrice" aria-controls="offcanvasBottomPrice">
                <div class="">
                    <p class="m-0" style="font-size: 18px;">Sub Total</p>
                    <p class="m-0" style="font-size: 10px;">Know More <i class="bi bi-arrow-return-left"></i></p>
                </div>
                <p class="m-0" style="font-size: 18px;">₹ 1,942.85</p>
            </div>
            <div class="d-flex justify-content-between border-bottom p-2 py-3" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottomDiscount" aria-controls="offcanvasBottomDiscount">
                <div class="">
                    <p class="m-0 " style="font-size: 18px;">Taxes</p>
                    <p class="m-0" style="font-size: 10px;">Know More <i class="bi bi-arrow-return-left"></i></p>
                </div>
                <p class="m-0 " style="font-size: 18px;">₹ 97.15</p>
            </div>
            <div class="d-flex justify-content-between border-bottom p-2 py-3 ">
                <p class="m-0 " style="font-size: 18px;">Round Off</p>
                <p class="m-0 " style="font-size: 18px;">-</p>
            </div>
            <div class="d-flex justify-content-between border-bottom p-2 py-3 ">
                <p class="m-0 " style="font-size: 18px;">Payable Amount</p>
                <p class="m-0 " style="font-size: 18px;">₹ 2040</p>
            </div>
        </div>
        <!-- Total Price -->
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottomPrice"
            aria-labelledby="offcanvasBottomLabel" style=" height: auto; max-height: calc(100vh - 200px);">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Total Product Price</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex justify-content-between">
                    <p class="m-0">Product Price</p>
                    <p class="m-0">₹ 2,55,000</p>
                </div>
                <div class="d-flex justify-content-between pb-2 border-bottom">
                    <p class="m-0 ">Easy Returns</p>
                    <p class="m-0 ">₹ 500</p>
                </div>
                <div class="d-flex justify-content-between pt-2 " style="font-weight: 600;">
                    <p class="m-0">Total</p>
                    <p class="m-0">₹ 2,66,00</p>
                </div>
            </div>
        </div>

        <!--Taxes & GST -->
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottomDiscount"
            aria-labelledby="offcanvasBottomLabel" style=" height: auto; max-height: calc(100vh - 200px);">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Total Taxes</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="border bg-light mb-2 " v-for="(gst, index) in gsts" :key="index">
                    <div v-if="gst.type === 'interstate'" class="d-flex justify-content-between p-2 ">
                        <p class="m-0 w-50">CGST {{ gst.rate / 2 }}%</p>
                        <p class="text-center w-50 m-0">
                            ₹ {{ (subtotal * (gst.rate / 2) / 100).toLocaleString('hi-in') }}
                        </p>
                    </div>
                    <div v-if="gst.type === 'interstate'" class="d-flex justify-content-between p-2">
                        <p class="m-0 w-50">SGST {{ gst.rate / 2 }}%</p>
                        <p class="text-center w-50 m-0">₹ {{ (subtotal * (gst.rate / 2) / 100).toLocaleString('hi-in') }}
                        </p>
                    </div>
                    <div v-if="gst.type === 'intrastate'" class="d-flex justify-content-between p-2">
                        <p class="m-0 w-50">IGST {{ gst.rate }}%</p>
                        <p class="text-center w-50 m-0">₹ {{ (subtotal * gst.rate / 100).toLocaleString('hi-in') }}</p>
                    </div>
                    <div class="d-flex justify-content-between p-2 border-top">
                        <b>GST</b>
                        <b class="w-50 ms-5">{{ gst.rate }}%</b>
                        <b>₹ {{ (subtotal * gst.rate / 100).toLocaleString('hi-in') }}</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'PriceDetails',
    data() {
        return {
            subtotal: 260000,
            gsts: [
                {
                    type: 'interstate',
                    rate: 5,
                },
                {
                    type: 'interstate',
                    rate: 12,
                },
                {
                    type: 'intrastate',
                    rate: 5,
                },
                {
                    type: 'intrastate',
                    rate: 12,
                }
            ]
        }
    }
}
</script>

<style scoped>
th {
    width: 20% !important;
}

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
    height: 2px;
    background: gray;
    left: 0;
    top: 50%;
    position: absolute;
}

.bill:after {
    content: "";
    display: block;
    width: 30%;
    height: 2px;
    background: gray;
    right: 0;
    top: 50%;
    position: absolute;
}
</style>