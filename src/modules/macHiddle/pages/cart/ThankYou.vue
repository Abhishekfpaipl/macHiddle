<template>
    <div class="my-5 py-3">
        <h1 class="text-center">THANK YOU!</h1>
        <div class="container px-5 d-flex justify-content-center">
            <p class="mb-0 text-center fs-5">We Are getting started on your order right away, and you will receive
                an
                order
                confirmation email shortly to
                'user email' in the meantime, explore the latest fashion and get inspired by new trends, just head over
                to
                Machiddle.com</p>
        </div>
        <div class="d-flex justify-content-center">
            <router-link to="/orders/list" class="btn btn-dark my-4 rounded-0">
                view orders
            </router-link>
        </div>
        <p class="text-center">read about our return policy</p>

        <div class="row w-100 g-2">
            <div v-for="(policy, index) in policies" :key="index" class="col-md-3 col-6 text-center">
                <i :class="policy.icon"></i>
                <p>{{ policy.name }}</p>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            policies: [
                {
                    name: "DELIVERY",
                    icon: 'bi bi-box fs-1',
                    route: ''
                },
                {
                    name: "PAYMENT",
                    icon: 'bi bi-currency-rupee fs-1',
                    route: ''
                },
                {
                    name: "RETURN",
                    icon: 'bi bi-arrow-return-left fs-1',
                    route: ''
                },
                {
                    name: "CUSTOMER SERVICE",
                    icon: 'bi bi-chat-square-dots fs-1',
                    route: ''
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped></style>