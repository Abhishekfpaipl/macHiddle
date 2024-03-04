<template>
    <div v-if="activeCartProduct" class="offcanvas offcanvas-end" tabindex="-1" id="cartProductInfoModal"
        aria-labelledby="cartProductInfoModalLabel">
        <div class="offcanvas-header p-2 w-100 d-flex justify-content-between align-items-center bg-light border-bottom">
            <i class="bi bi-chevron-left pe-3" data-bs-dismiss="offcanvas" data-bs-target="#cartProductInfoModal"
                aria-label="Close"></i>
        </div>

        <div class="offcanvas-body p-0">
            <div :id="'quickAdd' + activeCartProduct.id" class="carousel slide">
                <div class="carousel-inner">
                    <div :id="'cardCarousel' + imgIndex" class="carousel-item" :class="{ active: imgIndex === 0 }"
                        v-for="(image, imgIndex) in activeCartProduct.options" :key="imgIndex">
                        <img :src="image.primary_image" class="card-img-top rounded-0" alt="" style="min-height:100px; ">
                    </div>
                </div>
                <div class="d-flex mt-2" id="scroll" style="overflow-x: scroll;">
                    <button type="button" class="rounded-circle p-0 border me-1"
                        :data-bs-target="'#quickAdd' + activeCartProduct.id" :data-bs-slide-to="imgIndex"
                        :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                        v-for="(image, imgIndex) in activeCartProduct.options" :key="imgIndex">
                        <img :src="image.primary_image" class="rounded-circle" alt=""
                            style="width: 35px; height: 35px; object-fit: fill;">
                    </button>
                </div>
                <div class="d-flex justify-content-between px-2 my-2">
                    <p class="fw-bold mb-0">₹ {{ activeCartProduct.price }}</p>
                    <p class="fw-bold mb-0">{{ activeCartProduct.type }}</p>
                </div>
                <div class="d-flex align-items-center">
                    <strong>Size :</strong>
                    <div v-for="(size, index) in activeCartProduct.ranges" :key="index" class="">
                        <input type="radio" class="btn-check" name="option" :id="'option' + size.id" autocomplete="off"
                            :value="size.name" v-model="selectedSize" checked />
                        <label class="btn btn-outline-dark rounded-0 m-2" :for="'option' + size.id">
                            {{ size.name }}
                        </label>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <strong>Color :</strong>
                    <div class="me-2" v-for="(color, index) in activeCartProduct.options" :key="index">
                        <input type="radio" name="product-color" class="btn-check" :id="'selectProductColor' + index"
                            autocomplete="off" :value="color" v-model="selectedColor" checked>
                        <label class="btn btn-outline-dark border-light rounded-circle p-0"
                            :for="'selectProductColor' + index">
                            <img class="rounded-circle" :src="color.img"
                                style="width:40px;height:40px; object-fit: none; margin: 0.05rem;" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "CartEditOffcanvas",
    props: ['cart'],
    data() {
        return {
            activeCartProduct: {},
        };
    },
    async mounted() {
        this.loadactiveCartProduct();
    },
    methods: {
        loadactiveCartProduct() {
            const cartProductInfoModal = document.getElementById('cartProductInfoModal')
            if (cartProductInfoModal) {
                cartProductInfoModal.addEventListener('show.bs.offcanvas', event => {
                    const button = event.relatedTarget
                    const productid = button.getAttribute('data-bs-productid');
                    this.activeCartProduct = this.cart.find(order => order.sid == productid);
                });
            }
        },
    }
}
</script> 
