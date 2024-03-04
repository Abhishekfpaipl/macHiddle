<template>
    <div class="mt-4">
        <div class="d-md-none d-flex px-2" v-for="(cat, index) in categories" :key="index">
            <router-link :to="'/catalogs/' + cat.name" class="d-flex text-decoration-none text-dark">
                <div class="w-50 d-flex flex-column align-items-center justify-content-center"
                    :style="'background-color:' + cat.bgColor" :class="'order-' + cat.order">
                    <p class="mb-0 fs-3 text-uppercase">{{ cat.name }}</p>
                    <p class="mb-0 text-uppercase">{{ cat.title }}</p>
                </div>
                <div class="w-50">
                    <img :src="`${publicPath}${cat.img}`" style="width: 100%;">
                </div>
            </router-link>
        </div>
    </div>
    <div class="position-relative" @mouseover="showIcons = true" @mouseleave="showIcons = false">
        <div class="overflow-container">
            <div class="d-none d-md-flex px-2 gap-2 overflow-scroll" id="scroll" ref="gallery">
                <div v-for="(cat, index) in categories" :key="index">
                    <router-link :to="'/catalogs/' + cat.name" class="text-decoration-none text-dark">
                        <div style="width: 400px;">
                            <img :src="`${publicPath}${cat.img}`" style="width: 100%; object-fit: cover;">
                            <p class="text-center fs-2" :style="'background-color:' + cat.bgColor">{{ cat.name }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="prev-icon" v-if="showIcons && showPrevious" @click="scrollGallery(-1)">
            <i class="bi bi-chevron-left"></i>
        </div>
        <div class="next-icon" v-if="showIcons && showNext" @click="scrollGallery(1)">
            <i class="bi bi-chevron-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            showIcons: false
        }
    },
    computed: {
        categories() {
            return this.$store.getters['MacStore/getCategories']
        },
        showPrevious() {
            const gallery = this.$refs.gallery;
            return gallery.scrollLeft + gallery.offsetWidth < gallery.scrollWidth;
        },
        showNext() {
            const gallery = this.$refs.gallery;
            return gallery.scrollLeft + gallery.offsetWidth < gallery.scrollWidth;
        },
    },
    methods: {
        scrollGallery(direction) {
            const gallery = this.$refs.gallery;
            const scrollAmount = direction * 400;
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        },
    },
}
</script>

<style scoped>
.prev-icon,
.next-icon {
    position: absolute;
    top: 40%;
    background-color: #F4B700;
    padding: 8px;
    display: flex;
    cursor: pointer;
}

.prev-icon {
    left: 0;
}

.next-icon {
    right: 0;
}

.position-relative:hover .prev-icon,
.position-relative:hover .next-icon {
    display: flex;
}
</style>