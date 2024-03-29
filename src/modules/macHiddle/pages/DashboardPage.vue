<template>
    <div class="mt-5 pt-3">
        <WebPushNotification />
        <div id="mobileCarousel" class="carousel slide row-cols-xl" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(banner, index) in banners" :key="index"
                    :class="{ active: index === 0 }" data-bs-interval="2000">
                    <img :src="banner.primary_image" class="" style="height: 400px; width: 100%; object-fit: cover;"
                        :alt="banner.alt">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#mobileCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#mobileCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="d-flex overflow-x-scroll my-4" id="scroll">
            <div class="d-flex flex-column align-items-center px-2" v-for="(category, index) in categories"
                :key="index">
                <img :src="category.primary_image" class="rounded-circle"
                    style="width:80px; height: 80px; object-fit: cover;">
                <strong>{{ category.name }}</strong>
            </div>
        </div>
        <!-- <HomeCategory /> -->
        <!-- <SectionCard /> -->
        <Collection />
        <YouMayLike />
        <FooterBar />
    </div>
</template>

<script>

import Collection from '@/components/CollectionPage.vue';
import YouMayLike from '@/modules/macHiddle/components/YouMayLike.vue';
import WebPushNotification from '@/modules/macHiddle/components/WebPushNotification.vue';
// import SectionCard from '@/modules/macHiddle/components/sections/SectionCard.vue';
// import HomeCategory from '@/modules/macHiddle/components/sections/HomeCategory.vue';
import FooterBar from '@/modules/macHiddle/components/navbar/FooterBar.vue';

export default {
    name: "DashboardPage",
    components: {
        Collection,
        YouMayLike,
        // SectionCard,
        // HomeCategory,
        FooterBar,
        WebPushNotification
    },
    data() {
        return {
            publichPath: process.env.BASE_URL,
            banner: 'img/banner.png'
        }
    },
    mounted() {
        this.$store.dispatch('MacStore/fetchBanners')
        this.$store.dispatch('MacStore/fetchCategories')
    },
    computed: {
        banners() {
            return this.$store.getters['MacStore/getBanners']
        },
        categories() {
            return this.$store.getters['MacStore/getCategories'];
        }
    }
}
</script>

<style lang="scss" scoped></style>