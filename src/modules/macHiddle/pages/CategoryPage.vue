<template>
    <div class="w-100 d-flex" style="height: 80%;">
        <div :class="{ 'w-25': isSidebar, 'd-none': !isSidebar }" class="position-fixed test-scroll "
            style="height: 100vh; overflow-y: scroll; padding-bottom: 150px;">
            <div id="list-example" class=" list-group text-center">
                <a v-for="(category, index) in categories" :key="index" :category="category"
                    class="list-group-item list-group-item-action py-2 px-0" :href="'#' + category.slug"
                    style="height: 80px">
                    <p class="m-0">{{ category.name }}</p>
                </a>
            </div>
        </div>
        <div :class="{ 'w-75': isSidebar, 'w-100': !isSidebar }" class="position-absolute"
            style="right:0px;padding-bottom:150px;">
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"
                class="scrollspy-example" tabindex="0">
                <div class="container d-flex flex-column gap-2" v-for="(category, index) in categories" :key="index"
                    :id="category.slug">
                    <div class="d-flex justify-content-between align-items-center my-2">
                        <h5 v-if="Object.keys(category.childs).length" class="ps-2 text-success fw-bold mb-0">
                            {{ category.name }}
                        </h5>
                        <router-link to="/allproducts" class="text-decoration-none text-dark"
                            v-if="Object.keys(category.childs).length > 6">
                            <span>View All <i class="bi bi-arrow-right"></i></span>
                        </router-link>
                    </div>
                    <div :class="{ 'row-cols-2 row-cols-lg-4': isSidebar, 'row-cols-3 row-cols-lg-6': !isSidebar }"
                        class="row g-3">
                        <div class="col" v-for="(item, index) in category.childs" :key="index">
                            <router-link v-if="index < 6" to="/product-page/lot-so-jhoot-teddy-print-round-neck-t-shirt"
                                class="card-header text-decoration-none text-dark ">
                                <img :src="item.primary_image" alt="" style="height:150px;width:100%;object-fit:cover;">
                            </router-link>
                            {{ item.name }}
                        </div>
                        <!-- <div class=" col text-center py-2" v-for="(a, key) in item" :key="key">
                            <router-link to="/product-page/lot-so-jhoot-teddy-print-round-neck-t-shirt" class="card-header text-decoration-none text-dark ">
                                <img :src="a.img" alt="" style="width:100%;object-fit:cover;">
                            </router-link>
                            <span class="card-footer" style="font-size: 14px;">{{ a.name }}</span>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="container">
        <div class="row row-cols-2 g-3">
            <div v-for="(category, index) in categories" :key="index" class="">
                <div class=" col text-center py-2">
                    <router-link :to="'/product-page/' + category.id" class="card-header text-decoration-none text-dark ">
                        <img :src="category.primary_image" alt="" style="width:100%;object-fit:cover;">
                    </router-link>
                    <span class="card-footer" style="font-size: 14px;">{{ category.name }}</span>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
// import axiosInstance from '../axiosInstance';

export default {
    name: 'CategoryNew',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            isSidebar: false,
            // categories: []
        }
    },
    computed: {
        categories() {
            return this.$store.getters['MacStore/getCategories'];
        }
    },
    mounted() {
        this.$store.dispatch('MacStore/fetchCategories')
        // axiosInstance.get('categories').then(response => {
        //     this.categories = response.data.data
        // })
    }
}
</script>

<style>
.list-group-item.active {
    background-color: pink !important;
    color: black !important;
    border-color: pink !important;
}

.test-scroll::-webkit-scrollbar {
    display: none !important;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>