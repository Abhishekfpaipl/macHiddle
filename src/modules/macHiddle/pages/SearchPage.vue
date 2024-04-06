<template>
    <div class="mt-5 pt-3">
        <div class="d-flex align-items-center shadow p-2">
            <router-link to="/" class="text-dark">
                <i class="bi bi-arrow-left-short fs-3"></i>
            </router-link>
            <input type="search" placeholder="Search for Products?" v-model="searchTerm"
                class="form-control border-0" ref="searchInput" @keyup.enter="search">
            <!-- <div class="">
                <span class="bi bi-mic-fill"></span>
            </div> -->
            <div class="">
                <i class="bi bi-search" @click="search"></i>
            </div>
        </div>

        <div v-if="Object.keys(searchFilters).length > 0" class="container-fluid mt-2">
            <div class="justify-content-between mb-2 d-flex">
                <button class="btn btn-dark btn-sm my-2 d-none d-md-block" @click="applyFilters">Apply Filters</button>
                <button class="d-flex d-md-none gap-2 btn btn-dark rounded-pill" data-bs-toggle="offcanvas"
                    data-bs-target="#categoryFilter" aria-controls="categoryFilter">
                    <i class="bi bi-sliders"></i>
                    <span>Filters</span>
                </button>
                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="categoryFilter"
                    aria-labelledby="categoryFilterLabel" style="height: 80%;">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="categoryFilterLabel">Filters</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <AllFilters id="searchfilterMobile" :filter="searchFilters"
                            @category-filters="filtersChanged" />
                    </div>
                    <div class="offcanvas-footer btn-group">
                        <button class="btn btn-warning rounded-0">Close</button>
                        <button class="btn btn-dark rounded-0" @click="applyFilters">Apply</button>
                    </div>
                </div>
                <div class="">
                    <select class="form-select" id="sortSelect" v-model="selectedSort" @change="applySort()">
                        <option default selected>Select sorting options</option>
                        <option value="priceHighToLow">Price High to Low</option>
                        <option value="priceLowToHigh">Price Low to High</option>
                        <option value="stockAvailability">Stock Availability</option>
                        <option value="rating">Popularity</option>
                        <option value="reviews">Newest</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-2 border border-1 d-none d-md-block">
                    <AllFilters :filter="searchFilters" id="searchfilterDesktop" @category-filters="filtersChanged" />
                </div>
                <div class="col-md-10 col-12">
                    <ProductCard :products="products" :quickAdd="true" :options="true" :similar="true" />
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import ProductCard from '@/modules/macHiddle/components/ProductCard.vue';
import AllFilters from '@/modules/macHiddle/components/filters/AllFilters.vue';
export default {
    name: 'SearchPage',
    components: {
        ProductCard,
        AllFilters,
    },
    data() {
        return {
            searchTerm: '',
            page: 1,
            isFetching: false,
            previousScrollTop: 0,
            selectedSort: '',
            filters: []
        };
    },
    mounted() {
        this.$refs.searchInput.focus();
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        products() {
            return this.$store.getters['MacStore/getSearchProducts']
        },
        searchFilters() {
            return this.$store.getters['MacStore/getSearchFilters']
        }
    },
    methods: {
        handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop > this.previousScrollTop && clientHeight + scrollTop >= scrollHeight - 5 && !this.isFetching) {
                this.isFetching = true;
                if (this.page === 1) {
                    this.page++;
                }
                if (this.filters) {
                    this.applyFilters()
                } else if (this.selectedSort) {
                    this.applySort()
                }
                this.search(this.searchTerm, this.page);
                this.page++;
                this.isFetching = false;
            }
            this.previousScrollTop = scrollTop;
        },
        search() {
            const data = {
                search: this.searchTerm,
                page: this.page
            }
            this.$store.dispatch('MacStore/fetchSearchProducts', data)
        },
        addToWishlist(product) {
            const data = {
                product_id: product.id
            }
            this.$store.dispatch('LoggedInUserStore/addToWishlist', data)
        },
        filtersChanged(filters) {
            this.filters = filters
        },
        applyFilters() {
            let data = {
                colors: this.filters.options,
                sizes: this.filters.ranges,
                attributes: this.filters.attributes,
                page: this.page,
                search: this.searchTerm

            }
            console.log('filters', data)
            this.$store.dispatch('MacStore/applySearchFilters', data)
        },
        applySort() {
            let orderBy, direction;
            if (this.selectedSort === 'priceHighToLow') {
                orderBy = 'price';
                direction = 'desc';
            } else if (this.selectedSort === 'priceLowToHigh') {
                orderBy = 'price';
                direction = 'asc';
            }
            const data = {
                search: this.searchTerm,
                page: this.page
            }

            console.log('Sort by:', orderBy, direction);
            this.$store.dispatch('MacStore/applySearchSort', { orderBy, direction, data })
        }
    },
    watch: {
        selectedSort() {
            this.applySort();
        }
    }
};
</script>

<style>
.form-control:focus {
    box-shadow: none !important;
}
</style>