<template>
    <div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="similarProducts" aria-labelledby="similarProductsLabel">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="similarProductsLabel">Similar Products</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div v-if="Object.keys(products).length > 0" class="row">
                    <div class="col-6" v-for="(product, index) in products" :key="index">
                        <div class="rounded-0">
                            <router-link :to="'/product-page/' + product.slug" class="text-decoration-none text-dark">
                                <div :id="'similarProduct' + index" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                            :class="{ active: imgIndex === 0 }"
                                            v-for="(image, imgIndex) in product.options" :key="imgIndex">
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

                            <div class="card-footer border-0 p-0 bg-white">
                                <p class="m-0 fw-bold">₹{{
                                    product.price }}</p>
                                <p class="m-0 small truncate">{{ product.name
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="placeholder-glow container my-2">
                    <div class="row row-cols-2 g-2">
                        <div class="col" v-for="item in [1, 2, 3, 4]" :key="item">
                            <div class="card rounded-0">
                                <div class="placeholder" style="height:300px;"></div>
                            </div>
                            <div class="d-flex mt-1 px-1" id="scroll" style="overflow-x: scroll;">
                                <button class="placeholder col-4 rounded" style="height: 35px;width:35px;"></button>
                                <button class="placeholder col-4 rounded" style="height: 35px;width:35px;"></button>
                            </div>
                            <div class="my-1 col-12 placeholder" style="height: 20px;"></div>
                            <div class="container">
                                <div class="row">
                                    <div class="my-1 col-4 placeholder" style="height: 20px;"></div>
                                    <div class="my-1 col-4" style="height: 20px;"></div>
                                    <div class="my-1 col-4 placeholder" style="height: 20px;"></div>
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
    name: 'SimilarProductsOffcanvas',
    async mounted() {
        this.loadActiveOrder();
    },
    computed: {
        products() {
            return this.$store.getters['MacStore/getSimilarProducts']
        }
    },
    methods: {
        loadActiveOrder() {
            const similarProducts = document.getElementById('similarProducts')
            if (similarProducts) {
                similarProducts.addEventListener('show.bs.offcanvas', event => {
                    const button = event.relatedTarget
                    const productsid = button.getAttribute('data-bs-productsid');
                    // this.activeOrder = this.orders.find(order => order.sid === productsid);
                    this.$store.dispatch('MacStore/fetchSimilarProducts', productsid)
                });
            }
        },
    }
}
</script>
