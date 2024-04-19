<template>
    <div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Attributes
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div class="row">
                            <div v-for="(attribute, index) in product.attributes" :key="index" class="py-2"
                                :class="['col-6', 'border-bottom', { 'border-end': index % 2 === 0 }]">
                                <span class="small d-block fw-bold ls-1 op-6 text-capitalize">{{ attribute.name
                                    }}</span>
                                <span class="small d-block text-dark text-capitalize text-muted">{{ attribute.value
                                    }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Discription
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">{{ product.details }} Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. A doloribus vitae ipsam distinctio, vel maxime! Beatae praesentium alias illo repudiandae,
                        eligendi mollitia corrupti incidunt perspiciatis, unde, laudantium ipsam inventore explicabo?
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Artist Details
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div v-if="product.designer" class="">
                            <img :src="product.designer.image" :alt="product.designer.name" style="height: 50px;width: 50px; object-fit: cover;">
                            <span class="ms-3 fw-bold text-capitalize">{{ product.designer.name }}</span>
                            <div class="my-2">{{ product.designer.details }} Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Tenetur sit accusantium magnam doloremque. Omnis obcaecati quod ut cupiditate quo
                                eum.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
}
</script>
