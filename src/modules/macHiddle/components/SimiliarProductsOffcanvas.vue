<template>
    <div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="similarProducts" aria-labelledby="similarProductsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="similarProductsLabel">Similar Products</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="row">
                    <div class="col-6" v-for="(product, index) in products" :key="index">
                        <div class="rounded-0">
                            <router-link :to="'/product-page/' + product.slug" class="text-decoration-none text-dark">
                                <div :id="'similarProduct' + index" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                            :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in product.options"
                                            :key="imgIndex">
                                            <img :src="image.primary_image" class="card-img-top rounded-0" alt=""
                                                style="min-height:50px;">
                                        </div>
                                    </div>
                                    <div class="d-flex mt-1" id="scroll" style="overflow-x: scroll;">
                                        <button type="button" class="rounded-circle p-0 border me-1"
                                            :data-bs-target="'#similarProduct' + index" :data-bs-slide-to="imgIndex"
                                            :class="{ active: imgIndex === 0 }"
                                            :aria-current="imgIndex === 0 ? true : false"
                                            v-for="(image, imgIndex) in product.images" :key="imgIndex">
                                            <img :src="image" class="rounded-circle" alt=""
                                                style="width: 35px; height: 35px; object-fit: fill;">
                                        </button>
                                    </div>
                                </div>
                            </router-link>

                            <div class="" style="padding:3px">
                                <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                                    <p class="m-0 fw-bold" style="font-size:13px;">₹{{
                                        product.price }}</p>
                                    <p class="m-0 fw-bold" style="font-size:13px;">{{ product.info
                                    }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SimiliarProductsOffcanvas',
    props:['products']
}
</script>

<style lang="scss" scoped></style>