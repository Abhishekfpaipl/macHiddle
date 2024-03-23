<template>
    <div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top px-2 p-0">
            <div class="d-md-none mr-auto">
                <router-link to="/"><i class="bi bi-arrow-left-short fs-2"></i></router-link>
            </div>
            <div class="d-flex gap-2">
                <span class="bi bi-funnel"><small class="ms-2">Filters</small></span>
                <span class="bi bi-arrow-down-up"><small class="ms-2">Sort</small></span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'SubCategoryTopNav',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/mac2.png",
        }
    }
}
</script>