<template>
    <div>
        <strong class="text-muted">Color</strong>
        <div class="border-bottom pb-2">
            <div v-for="(option, index) in filter.options" :key="index">
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" :value="option"
                            :id="'color-' + option + '-' + id" :autocomplete="option" v-model="selectedColors"
                            @change="toggleFilter(option)">
                        <label class="form-check-label text-capitalize" :for="'color-' + option + '-' + id">
                            {{ option }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <strong class="text-muted">Sizes</strong>
        <div class="border-bottom pb-2"> 
            <div v-for="(range, index) in filter.ranges" :key="index">
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" :value="range" :id="'size-' + range + '-' + id"
                            :autocomplete="range" v-model="selectedSizes" @change="toggleFilter(range)">
                        <label class="form-check-label text-capitalize" :for="'size-' + range + '-' + id">
                            {{ range }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <strong class="text-muted">Attributes</strong>
        <div class="border-bottom pb-2">
            <div v-for="(attribute, index) in filter.attributes" :key="index">
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" :value="attribute"
                            :id="'attribute-' + attribute + '-' + id" :autocomplete="attribute"
                            v-model="selectedAttributes" @change="toggleFilter(attribute)">
                        <label class="form-check-label text-capitalize" :for="'attribute-' + attribute + '-' + id">
                            {{ attribute }}
                        </label>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'AllFilters',
    props: {
        filter: Object,
        id: String,
        // categoryId: String,
        // page: Number
    },
    data() {
        return {
            selectedSizes: [],
            selectedAttributes: [],
            selectedColors: []
        }
    },
    mounted() {
        this.toggleFilter()
    },
    methods: {
        toggleFilter() {
            this.$emit('category-filters', {
                ranges: this.selectedSizes,
                options: this.selectedColors,
                attributes: this.selectedAttributes
            })
        }
    }
}
</script>