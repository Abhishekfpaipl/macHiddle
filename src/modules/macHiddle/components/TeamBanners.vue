<template>
    <div class="pb-5 mb-5">
        <div class="w-100 overflow-auto d-flex align-items-center hide-scroll" ref="slider">
            <div v-for="(review, index) in infiniteReviews" :key="index" @click="showUser(review, index)"
                class="btn rounded-circle m-2 mx-3 d-flex" :class="{ selectedDiv: isSelected(review.id) }">
                <img :src="review.imgr" alt="User Image">
            </div>
        </div>

        <div class="shadow container w-100 py-4">
            <p class="text-center fw-bold fs-2 mb-0" style="letter-spacing:6px; text-transform: uppercase;">
                {{ getSelectedReviewInfo.name }}</p>
            <p class="text-center fs-4 mb-0" style="letter-spacing:2px;">Post</p>
            <div class="d-flex justify-content-center text-center">
                <p class="w-75 fs-4">{{ getSelectedReviewInfo.text }}</p>
            </div>
            <a class="d-flex justify-content-center w-100 text-decoration-none" :href="getSelectedReviewInfo.url" target="_blank">
                <button class="btn btn-warning my-3 w-50">{{ getSelectedReviewInfo.btnName }}</button>
            </a>
             
        </div>
    </div>
</template>
  
<script>
export default {
    name:'TeamBanners',
    data() {
        return {
            selectedReview: 1,
        };
    },
    computed: {
        reviews() {
            return this.$store.getters['MacStore/getReviews'];
        },
        infiniteReviews() {
            const reviews = this.reviews.slice();
            return reviews.concat(reviews);
        },
        getSelectedReviewInfo() {
            const selectedReview = this.infiniteReviews[this.selectedReview];
            return {
                text: selectedReview.text,
                name: selectedReview.name,
                btnName: selectedReview.btnName,
                url: selectedReview.url
            };
        }
    },
    mounted() {
        this.reviews[this.selectedReview].show = true;
        this.scrollToCenter();
    },
    methods: {
        isSelected(clickedReviewId) {
            return clickedReviewId === this.infiniteReviews[this.selectedReview].id;
        },
        showUser(review, index) {
            this.selectedReview = index;
            this.$store.dispatch('MacStore/toggleReview', review);
            this.scrollToCenter();
        },
        scrollToCenter() {
            const slider = this.$refs.slider;
            const selectedElement = slider.children[this.selectedReview];
            const scrollLeft =
                selectedElement.offsetLeft - (slider.offsetWidth - selectedElement.offsetWidth) / 1.8;
            slider.scrollLeft = scrollLeft;
        },
    },
};
</script>
  
<style lang="scss" scoped>
.btn.selectedDiv {
    border: 2px solid #FFCA2C;
}

img {
    width: 80px;
    height: 80px;
}

.btn.selectedDiv img {
    width: 120px !important;
    height: 120px !important;
}

.btn {
    --bs-btn-padding-x: 5px;
    --bs-btn-padding-y: 5px;
}

#style-4 {
    scroll-behavior: smooth; // Add smooth scrolling
    overflow-x: scroll;
}

#style-4::-webkit-scrollbar {
    display: none;
}

.hide-scroll {
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #ffffff;
}

::-webkit-scrollbar-thumb {
    background: rgb(134, 132, 132)4f4;
    border-radius: 5px;
    width: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #f5e5e5;
    width: 10px;
}
</style>
  