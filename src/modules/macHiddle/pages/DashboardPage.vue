<template>
    <div>
        <div id="mobileCarousel" class="carousel slide row-cols-xl" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(banner, index) in banners" :key="index" :class="{ active: index === 0 }"
                    data-bs-interval="2000">
                    <img :src="banner.primary_image" class="" style="height: 80vh;" :alt="banner.alt">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#mobileCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next d-md-none" type="button" data-bs-target="#mobileCarousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <HomeCategory />
        <!-- <SectionCard /> -->
        <CollectionPage />
        <HomePageCard />
    </div>
</template>

<script>

import CollectionPage from '@/components/CollectionPage.vue';
import HomePageCard from '@/components/HomePageCard.vue';
import axiosInstance from '@/modules/macHiddle/axiosInstance';
// import SectionCard from '@/modules/macHiddle/components/sections/SectionCard.vue';
import HomeCategory from '@/modules/macHiddle/components/sections/HomeCategory.vue';

export default {
    name: "DashboardPage",
    components: {
        CollectionPage,
        HomePageCard,
        // SectionCard,
        HomeCategory
    },
    data() {
        return {
            carouselItems: [
                {
                    id: 1,
                    src: 'https://media.boohoo.com/i/boohooamplience/240219_Mobile_40NewSeason_UK',
                    alt: 'First slide',
                    interval: 2000,
                    isActive: true // This item will be active initially
                },
                {
                    id: 2,
                    src: 'https://media.boohoo.com/i/boohooamplience/MOB_6',
                    alt: 'Second slide',
                    interval: 2000,
                    isActive: false
                }
            ],
            banners: [],
        }
    },
    mounted() {
        // this.$store.dispatch('MacStore/fetchBanners')
        axiosInstance.get('banners').then(response => {
            this.banners = response.data.data
        })
    },
    computed: {
        // banners() {
        //     return this.$store.getters['MacStore/getBanners']
        // }
    }
}
</script>

<style lang="scss" scoped></style>