<template>
    <div class="w-100">
        <div class="" style="background-color: var(--primary-color); color: var(--secondary-color);">
            <p sty class="fs-1 text-center fw-bold py-5">Return & Refund Policy</p>
        </div>
        <div class="d-flex  justify-content-center w-100 flex-fill px-3 my-5">
            <div class="w-100" style="text-align: justify;">
                <p>We put on a lot of love and care into every product that is crafted for you. We assure you that lot of
                    care goes into every product that is shipped by us.</p>

                <p>Before shipping, all products are carefully checked and finally packed and dispatched from our own
                    warehouse. As our products are purely made for every women who love western and this is what makes our
                    product unique.</p>

                <p>Before shipping, all products are carefully checked and finally packed and dispatched from our own
                    warehouse. As our products are purely made for every women who love western and this is what makes our
                    product unique.</p>
                <h3>INITIATING RETURN/EXCHANGE</h3>
                <p>To initiate the return or refund visit our website goto your account section and product section, select
                    that product and click on return to initiate the return or you can drop an email to
                    <strong>customer@{{ BrandName }}.com</strong> within 24 hour of product delivery with stating clearly:
                </p>
                <ul>
                    <li>Order Number</li>
                    <li>Product name</li>
                    <li>Reason for the return/exchange</li>
                    <li>Image of the product if the return/exchange is due to any defect</li>
                    <li>Contact number</li>
                </ul>
                <p>Wait for 1-2 working days to take action against your report.&nbsp;After the approval, an confirmation
                    email along with shipping guidelines will be sent to you.</p>
                <p>While returning the product please ensure that the product should be in the original conditions. Only the
                    products which are unused, unwashed, unworn, undamaged, with all its labels and tags completely intact,
                    in original packaging will be qualified for exchange.</p>
                <p>If we found wrong product (receiving return) amount will not return as per our compliance standard.</p>
                <h3>REFUND</h3>
                <p>In all events of cancellation prior to the dispatch of the purchased Products, {{ BrandName }} shall
                    initiate
                    refunds within15(Fifteen) working business days from the date on which it received the request from the
                    User.<br>
                    When a User cancels an order prior to the Products being dispatched, {{ BrandName }} will reimburse the
                    User’s
                    request within 15 (fifteen) working days from the day it received the request. In all cases, the refund
                    will be provided to you through the original payment method. Bank costs and other applicable charges may
                    be deducted from refunds by the User’s bank.</p>
                <h3>CANCELLATION</h3>
                <p>If you wish to cancel your order, please write to us within 24 hours of placing the order at same email
                    (<strong>customer@{{ BrandName }}.com</strong>)</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'ReturnPolicy',
    data() {
        return {
            BrandName: 'Mac Hiddle'
        }
    },
}
</script>

<style lang="scss" scoped>
h3 {
    color: var(--primary-color);
}
</style>