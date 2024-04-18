<template>
    <div class="container py-5">

        <router-link to="/new-address" class="my-4 d-flex flex-column align-items-center justify-content-center text-dark">
            <i class="bi bi-plus-circle-fill fs-1"></i>
            <p class="mb-0">Add New Address</p>
        </router-link>


        <div v-if="Object.keys(addresses).length > 0" class="row row-cols-1 row-cols-md-2">
            <div v-for="(address, index) in addresses" :key="index" class="col my-2">
                <div class="w-100">
                    <div class="border bg-white p-2 position-relative">
                        <div class="d-flex justify-content-between">
                            <label :for="'BillingAddress' + index" class="pe-5">{{ address.print }}</label>
                            <input name="BillingAddress" :id="'BillingAddress' + index" type="radio"
                                @change="selectAddress(address)"
                                :checked="address.print === checkout.delivery_address" />
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap">
                            <p class="m-0 mt-2 fw-boldb" @click="deleteAddress(address)">
                                Delete
                            </p>
                            <router-link :to="'/edit-address/' + address.sid"
                                class="mt-2 fw-bold text-decoration-none text-dark"> Edit </router-link>
                        </div>
                        <span v-if="address.print === checkout.delivery_address"
                            class="position-absolute top-0 start-100  translate-middle p-2 border border-light rounded-circle triangle-right" style="background-color: var(--primary-color);">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- <router-link v-else to="/" class="d-flex justify-content-center align-items-center">Do it later</router-link> -->
    </div>
</template>


<script>

export default {
    name: "AddressPage",
    methods: {
        deleteAddress(address) {
            const data = address.sid
            this.$store.dispatch('LoggedInUserStore/deleteAddress', data)
        },
        selectAddress(address) {
            const data = {
                addressId: address.sid
            }
            this.$store.dispatch('LoggedInUserStore/setDefaultAddress', data)
        },
    },
    mounted() {
        this.$store.dispatch('LoggedInUserStore/fetchAddresses');
        this.$store.dispatch('LoggedInUserStore/fetchCheckout')
    },
    computed: {
        addresses() {
            return this.$store.getters['LoggedInUserStore/getAddresses']
        },
        checkout() {
            return this.$store.getters['LoggedInUserStore/getCheckout']
        },
    },
};
</script>

<style>
.triangle-right {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 10px solid #555;
    border-bottom: 5px solid transparent;
}
</style>