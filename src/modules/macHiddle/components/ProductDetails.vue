<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item rounded-0">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#productDetails" aria-expanded="false" aria-controls="productDetails">
                    <p class="fw-bold mb-1 fs-5">Product Details</p>
                </button>
            </h2>
            <div id="productDetails" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="d-flex justify-content-between" v-for="(att, index) in product.attributes" :key="index">
                        <h6 class="fw-bold">{{ att.name }}:</h6>
                        <p style="color:grey">{{ att.value }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="accordion my-1" id="accordionExample">
        <div class="accordion-item rounded-0">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#productDescription" aria-expanded="false" aria-controls="productDescription">
                    <p class="fw-bold mb-1 fs-5">Description</p>
                </button>
            </h2>
            <div id="productDescription" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    {{ product.details }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style lang="scss" scoped></style>

