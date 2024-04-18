<template>
    <div>
        <div class="card mb-3 rounded-0">
            <div class="card-header fw-bold">Attributes</div>
            <div class="card-body border smaller py-2">
                <div class="row">
                    <div v-for="(attribute, index) in product.attributes" :key="index" class="py-2"
                        :class="['col-6', 'border-bottom', { 'border-end': index % 2 === 0 }]">
                        <span class="d-block fw-bold ls-1 op-6 text-capitalize">{{ attribute.name }}</span>
                        <span class="d-block text-dark text-capitalize text-muted">{{ attribute.value }}</span>
                    </div>
                </div>
                <button @click="toggleView"
                    class="btn text-muted pt-3 px-0 border-0 d-flex justify-content-between w-100">
                    <span class="smaller">{{ viewMoreText }}</span>
                    <i :class="[showAll ? 'bi bi-chevron-up' : 'bi bi-chevron-down']"></i>
                </button>
            </div>
        </div>
        <div class="card rounded-0">
            <div class="card-header fw-bold">
                Product Description
            </div>
            <div class="card-body">
                <p>{{ truncatedDescription }} 
                    <span class="btn btn-link p-0" @click="toggleDescription">{{ showFullDescription ? 'View Less' : 'View More' }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
    data() {
        return {
            showAll: false,
            initialDetailsToShow: 2,
            showFullDescription: false,
            maxDescriptionLength: 10,
            para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure sit labore iusto! Voluptate nostrum beatae totam unde enim eaque necessitatibus qui ut.Sapiente, porro reiciendis et obcaecati itaque libero, explicabo necessitatibus consectetur facilis aperiam non animi fugiat tenetur.Ab cum iste quasi nobis expedita vero porro? Harum, facilis itaque."
        }
    },
    computed: {
        detailsToShow() {
            return this.showAll ? this.product.attributes : this.product.attributes.slice(0, this.initialDetailsToShow);
        },
        viewMoreText() {
            return this.showAll ? 'View Less' : 'View More';
        },
        truncatedDescription() {
            if (this.showFullDescription) {
                return this.para;
                // return this.product.details;
            } else {
                return this.para.split(' ').slice(0, this.maxDescriptionLength).join(' ') + (this.para.split(' ').length > this.maxDescriptionLength ? '...' : '');
                // return this.product.details.split(' ').slice(0, this.maxDescriptionLength).join(' ') + (this.product.details.split(' ').length > this.maxDescriptionLength ? '...' : '');

            }
        }
    },
    methods: {
        toggleView() {
            this.showAll = !this.showAll;
        },
        toggleDescription() {
            this.showFullDescription = !this.showFullDescription;
        }
    }
}
</script>
