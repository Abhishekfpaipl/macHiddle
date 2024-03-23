<template>
    <div class="mt-5 pt-3">
        <div class="d-md-none">
            <img :src="banner" style="width: 100%;">
        </div>
        <div class="d-none d-md-block">
            <img :src="bannerDesk" style="width: 100%;">
        </div>

        <div class="container-fluid mt-2">
            <div class="justify-content-between mb-2 d-flex">
                <button class="btn btn-dark btn-sm my-2 d-none d-md-block" @click="applyFilters">Apply Filters</button>
                <!-- <button class="d-none d-md-flex btn btn-dark rounded-pill gap-2"
                    @click="showFilterPanel = !showFilterPanel">
                    <i class="bi bi-sliders"></i>
                    <p v-if="!showFilterPanel" class="mb-0">Show Filters</p>
                    <p v-if="showFilterPanel" class="mb-0">Close Filters</p>
                </button> -->
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
                        <AllFilters id="collectionfilterMobile" :filter="categoryFilter"
                            @category-filters="filtersChanged" />
                    </div>
                    <div class="offcanvas-footer btn-group">
                        <button class="btn btn-warning rounded-0">Close</button>
                        <button class="btn btn-dark rounded-0" @click="applyFilters">Apply</button>
                    </div>
                </div>
                <div class="">
                    <select class="form-select" id="sortSelect" v-model="selectedSort" @change="applySort()">
                        <option value="priceHighToLow" selected>Select sorting options</option>
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

                    <AllFilters :filter="categoryFilter" id="collectionfilterDesktop"
                        @category-filters="filtersChanged" />
                </div>
                <div class="col-md-10 col-12">
                    <ProductCard :products="category" :quickAdd="true" :options="true" :similar="true" />
                </div>
            </div>

        </div>
        <p v-if="category.length === 0">Oops! No results found..</p>
    </div>
</template>

<script>
import ProductCard from '@/modules/macHiddle/components/ProductCard.vue';
import AllFilters from '@/modules/macHiddle/components/filters/AllFilters.vue';
export default {
    name: 'ShowCollectionPage',
    components: {
        ProductCard,
        AllFilters
    },
    data() {
        return {
            banner: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catbanmob-120230715120318.jpg?format=webp&w=768&dpr=2.0',
            bannerDesk: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-120230715120318.jpg?format=webp&w=1500&dpr=1.3',
            page: 1,
            isFetching: false,
            previousScrollTop: 0,
            collectionId: null,
            selectedSort: 'priceHighToLow',
            filters: []
        }
    },
    computed: {
        // wishlists() {
        //     return this.$store.getters['LoggedInUserStore/getWishlist']
        // },
        category() {
            return this.$store.getters['MacStore/getShowCollection']
        },
        categoryFilter() {
            return this.$store.getters['MacStore/getShowCollectionFilter']
        },

    },
    mounted() {
        this.collectionId = this.$route.params.collectionId;
        console.log('collectionId', this.collectionId)
        this.fetchShowCollection(this.collectionId, this.page);
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        console.log('unmounted')
        this.$store.dispatch('MacStore/clearShowCategory');
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        fetchShowCollection(collectionId, page) {
            this.$store.dispatch('MacStore/fetchShowCollection', { collectionId, page });
        },
        handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop > this.previousScrollTop && clientHeight + scrollTop >= scrollHeight - 5 && !this.isFetching) {
                this.isFetching = true;
                if (this.page === 1) {
                    this.page++;
                }
                this.fetchShowCollection(this.collectionId, this.page);
                this.page++;
                this.isFetching = false;
            }
            this.previousScrollTop = scrollTop;
        },
        // addToWishlist(product) {
        //     const data = {
        //         product_id: product.id
        //     }
        //     this.$store.dispatch('LoggedInUserStore/addToWishlist', data)
        // }, 
        filtersChanged(filters) {
            this.filters = filters
        },
        applyFilters() {
            let data = {
                colors: this.filters.options,
                sizes: this.filters.ranges,
                attributes: this.filters.attributes,
                collectionId: this.collectionId,
                page: this.page

            }
            console.log('filters', data)
            this.$store.dispatch('MacStore/applyCollectionFilters', data)
            // .then(() => {
            //     // Fetch category data with applied filters
            //     this.fetchShowCategory(this.categoryId, this.page);
            // }).catch(error => {
            //     console.error('Error applying filters:', error);
            // });
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
                collectionId: this.collectionId,
                page: this.page
            }
            console.log('Sort by:', orderBy, direction);
            this.$store.dispatch('MacStore/applyCollectionSort', { orderBy, direction, data })
        }

    },
    watch: {
        selectedSort() {
            this.applySort();
        }
    }
}
</script>