<template>
    <div class="container py-5">

        <router-link to="/new-address"
            class="col my-3 d-flex flex-column align-items-center justify-content-center text-dark">
            <i class="bi bi-plus-circle-fill fs-1" ></i>
            <p class="mb-0">Add New Address</p>
        </router-link>


        <div class="row row-cols-1 row-cols-md-2">
            <div v-for="(address, index) in addresses" :key="index" class="col my-2">
                <div class="w-100">
                    <div class="border bg-white p-2">
                        <div class="d-flex justify-content-between">
                            <label :for="'BillingAddress' + index" class="pe-5">{{ address.print }}</label>
                            <input name="BillingAddress" :id="'BillingAddress' + index" type="radio"
                                v-model="selectedAddressIndex" @change="selectAddress(address)" />
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap">
                            <p class="m-0 mt-2 fw-bold" @click="deleteAddress(address)">
                                Delete
                            </p>
                            <router-link :to="'/edit-address/' + address.sid" class="mt-2 fw-bold text-decoration-none text-dark"> Edit </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: "AddressPage",
    data() {
        return {
            selectedAddressIndex: null,
        };
    },
    methods: {
        isSelected(index) {
            return this.selectedAddressIndex === index;
        },
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
        this.$store.dispatch('LoggedInUserStore/fetchAddresses')
    },
    computed: {
        addresses() {
            return this.$store.getters['LoggedInUserStore/getAddresses']
        }
    },
};
</script>