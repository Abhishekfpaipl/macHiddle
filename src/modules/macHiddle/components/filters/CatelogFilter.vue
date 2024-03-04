<template>
    <div class="">
        <div class="d-flex w-100 justify-content-between bg-light align-items-center position-fixed px-2 border-bottom"
            style="z-index:10;top:0px;height:66px">
            <div class="d-flex">
                <i class="bi bi-arrow-left fs-4 brand-text" @click="goBack()"></i>
                <p class="m-0 ms-2 fs-5  brand-text"> {{ decodedPath }}</p>
            </div>

            <div class="d-flex gap-4">
                <router-link to="/search-page" class="text-dark">
                    <i class="bi bi-search fs-4 brand-text"></i>
                </router-link>
                <i class="bi bi-arrow-down-up fs-4 brand-text" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExampleOne" aria-controls="offcanvasExampleOne"></i>
                <i class="bi bi-funnel fs-4 brand-text" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                    role="button" aria-expanded="false"></i>
            </div>
        </div>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExampleOne"
            aria-labelledby="offcanvasExampleLabel" style="height: 60vh;">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sort</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <div class="w-100">
                        <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
                            <div class="d-flex justify-content-between" v-for="(sort, index) in sorts" :key="index">
                                <p :style="{ color: sortColor(sort) }" @click="changeColorAndCheck(sort)">
                                    {{ sort.text }}
                                </p>
                                <p v-if="sort.selected" class="tick-mark"><i class="bi bi-check2"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="">
            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                aria-labelledby="offcanvasBottomLabel" style="height:100vh">
                <div class="offcanvas-header border-bottom">
                    <h5 class="offcanvas-title fw-bold" id="offcanvasBottomLabel">Filters </h5>
                    <div class=" bg-white w-100" style="bottom:0px;">
                        <div class="d-flex justify-content-evenly gap-1">
                            <button class="btn btn-outline-dark rounded-0 w-25" data-bs-dismiss="offcanvas">Clear</button>
                            <button class="btn btn-outline-dark  rounded-0 w-25" data-bs-dismiss="offcanvas">Apply</button>
                        </div>
                    </div>
                </div>

                <div class="offcanvas-body p-0">
                    <div class="accordion accordion-flush p-2" id="accordionFlushExample" style="padding-bottom: 60px;">
                        <CategoryFilter />
                        <PriceFilter />
                        <ColorFilter />
                        <SizeFilter />
                        <AttributesFilter/>
                        <!-- <PatternFilter />
                        <LengthFilter />
                        <StyleFilter /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryFilter from '@/modules/macHiddle/components/filters/CategoryFilter.vue';
import PriceFilter from '@/modules/macHiddle/components/filters/PriceFilter.vue';
import ColorFilter from '@/modules/macHiddle/components/filters/ColorFilter.vue';
import SizeFilter from '@/modules/macHiddle/components/filters/SizeFilter.vue';
// import PatternFilter from '@/modules/macHiddle/components/filters/PatternFilter.vue';
// import LengthFilter from '@/modules/macHiddle/components/filters/LengthFilter.vue';
// import StyleFilter from '@/modules/macHiddle/components/filters/StyleFilter.vue';
import AttributesFilter from './AttributesFilter.vue';

export default {
    name: 'CatelogFilter',
    data() {
        return {
            sorts: [
                { text: 'By Latest Date', selected: false },
                { text: 'By Oldest Date', selected: false },
                { text: 'By Lowest Amount', selected: false },
                { text: 'By Highest Amount', selected: false }
            ],
            currentPath: '',
            cleanedPath: '',
            decodedPath: ''
        };
    },
    methods: {
        selectColor(index) {
            this.selectedIndex = index;
        },
        sortColor(sort) {
            return sort.selected ? 'black' : 'gray';
        },
        changeColorAndCheck(clickedsort) {
            for (const sort of this.sorts) {
                if (sort === clickedsort) {
                    sort.selected = true;
                }
                else {
                    sort.selected = false;
                }
            }
        },
        goBack() {
            window.history.back();
        },
        cleanPath(path) {
            // Remove '/catalogs/' using splice
            const parts = path.split('/');
            parts.splice(1, 1); // Remove the second part (index 1)
            return parts.join('');
        },
        decodePath(encodedPath) {
            return decodeURIComponent(encodedPath);
        },
    },
    computed: {
        selectedColorName() {
            if (this.selectedIndex !== null) {
                return this.colors[this.selectedIndex];
            }
            else {
                return "No color selected";
            }
        }
    },
    created() {
        // Initialize the currentPath with the initial route path
        this.currentPath = this.$route.path;
        this.cleanedPath = this.cleanPath(this.currentPath);
        this.decodedPath = this.decodePath(this.cleanedPath);
    },
    watch: {
        '$route'(to) {
            // Update the currentPath and cleanedPath whenever the route changes
            this.currentPath = to.path;
            this.cleanedPath = this.cleanPath(this.currentPath);
            this.decodedPath = this.decodePath(this.cleanedPath);
        }
    },
    components: {
    CategoryFilter,
    PriceFilter,
    ColorFilter,
    SizeFilter,
    // PatternFilter,
    // LengthFilter,
    // StyleFilter,
    AttributesFilter
}
}
</script>

<style lang="scss" scoped>
.selected-color {
    border: 2px solid black;
}
</style>