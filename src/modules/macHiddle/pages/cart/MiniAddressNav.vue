<template>
    <div class="d-flex justify-content-between border align-items-center p-2 bg-light mb-3">
        <b class="text-success text-capitalize">Deliver To : {{ checkout.delivery_address }}</b>
        <router-link to="/my-address">
            <b class="text-success">Change</b>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        checkout: Object
    },
    computed: {
        // fullAddress() {
        //     if (this.checkout && this.checkout.delivery_address) {
        //         const address = this.checkout.delivery_address;
        //         return `${address.fname || ''}, ${address.line1 || ''}, ${address.line2 || ''}, ${address.district || ''}, ${address.state || ''}, ${address.country || ''} - ${address.pincode || ''}`;
        //     } else {
        //         return '';
        //     }
        // }
    },
}
</script>
