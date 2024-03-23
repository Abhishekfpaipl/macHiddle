<template>
    <div class="mt-3">
        <div v-for="(banner, bannerIndex) in banners" :key="bannerIndex" class="container">
            <div class="row g-0">
                <div class="col-6 col-lg-8 d-flex align-items-center px-2" :class="'order-' + banner.order">
                    <div class="flex-fill" :class="{ 'text-end': banner.order === 1, 'text-start': banner.order === 0 }">
                        <h1>{{ banner.name }}</h1>
                        <p>{{ banner.slug }}</p>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <img :src="banner.primary_image" :class="{ 'float-end': banner.order === 0 }" class="img-fluid" width="250" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axiosInstance from '@/modules/macHiddle/axiosInstance';

export default {
    name: 'SectionCard',
    data() {
        return {
            banners: []
        };
    },
    mounted() {
        axiosInstance.get('banners').then(response => {
            this.banners = response.data.data;
        });
    }
};
</script>
  
<style lang="scss" scoped></style>
  