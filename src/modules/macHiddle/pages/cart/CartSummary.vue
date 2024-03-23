<template>
    <div class="row">
        <div class="col-12 col-md-8">
            <slot></slot>
        </div>
        <div class="col-12 col-md-4">
            <!-- <PriceDetails  /> -->
                <slot name="btn"></slot>
        </div>
    </div>
</template>

<script>
// import PriceDetails from './PriceDetails.vue';
export default { 
    // components: {
    //     PriceDetails
    // },
}
</script>

<style lang="scss" scoped></style>