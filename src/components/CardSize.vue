<template>
    <div class="d-flex flex-column justify-content-around align-items-end">
        <div v-for="(size, index) in sizes" :key="index">
            <div class="bg-light shadow fw-bold d-flex align-items-center justify-content-center rounded"
                style="width: 20px; height: 20px;font-size: 7px; padding:0.5rem; margin:0.08rem">
                {{ size.name }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardSize",
    props: ['sizes']
}
</script>
<style lang="">
    
</style>