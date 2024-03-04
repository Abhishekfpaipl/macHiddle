<template>
    <div class="container d-flex flex-column align-items-center ps-3 justify-content-center mt-5">
        <p class=" fw-bold fs-5 mb-0">Thank you for your oder.</p>
        <p class="text-center mt-1"> Your oder has been placed, but execution will be start only after the confirmation of
            your payment.</p>
    </div>
    <p class="container ps-3 mt-3 text-center fs-5 fw-bold">Your Order ID is 5426308975</p>
    <div class="container d-flex gap-2 justify-content-center">
        <div class="">
            <p class="mb-0">Total Catalogs :</p>
            <p class="mb-0">No. of Pieces :</p>
            <p class="mb-0">Total Amount :</p>
        </div>
        <div class="">
            <p class="mb-0">2 Catalogs</p>
            <p class="mb-0">220 Pcs</p>
            <p class="mb-0">₹ 2,88,000</p>
        </div>
    </div>
    <div class="container d-flex justify-content-between border p-2 mt-5">
        <label for="delivery" class="ms-2">Click here if you want to pay later</label>
        <input type="checkbox" id="delivery" v-model="show" checked>
    </div>
    <div v-if="show">
        <div class="container d-flex flex-column align-items-center ps-3 justify-content-center mt-3">
            <p class=" fw-bold fs-5 mb-0">Recommended</p>
            <p class="text-center mt-1">This option is recommended only if you want to continue for shopping. And payment
                for the order will be make later.</p>
        </div>
        <router-link to="/" class="container text-decoration-none d-flex justify-content-center mt-2">
            <button class="btn w-100 btn-outline-danger w-100" style="opacity: 80%;">Continue For Shopping & Pay
                Later</button>
        </router-link>
    </div>
    <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
        <div class="w-100 d-flex align-items-center justify-content-around position-fixed"
            style="height: 63px; bottom: 0; background: var(--secondary-color); color: var(--primary-color);">
            <router-link to="/orders/pending/1" class="text-decoration-none"
                style="color: var(--primary-color); !important;">
                <div class=" d-flex justify-content-center align-items-center ms-3">
                    <span class="fs-5">Proceed For Payment</span>
                    <i class="bi bi-arrow-right fs-5 ms-3"></i>
                </div>
            </router-link>

        </div>
    </nav>
</template>

<script>
export default {
    name: 'CheckoutConfirm',
    data() {
        return {
            show: false
        }
    }
}
</script>

<style lang="scss" scoped></style>