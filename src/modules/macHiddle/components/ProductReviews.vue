<template>
    <div class="mb-5 pb-3">
        <div class="container mb-5">
            <h2 class="text-center">Product Reviews</h2>
            <div class="text-center">
                <div class="fs-4">
                    <span v-for="n in 5" :key="n">
                        <i class="bi bi-star-fill text-warning px-1"></i>
                    </span>
                    <small>5.00 out of 5</small>
                    <p>Based on {{ reviews.length }} reviews</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-3">
                <div v-for="(review, index) in reviews" :key="index" class="col my-2">
                    <div class="border p-2">
                        <div class="d-flex">
                            <div class="border text-center" style="width: 50px; height: 50px;">
                                <i class="bi bi-person fs-3"></i>
                            </div>
                            <div class="">
                                <strong class="ps-2">{{ review.author }}</strong>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-1 my-1">
                            <div class="d-flex align-items-center">
                                <strong>{{ review.title }}</strong>
                                <div class="ms-2  mb-1">
                                    <span v-for="n in 5" :key="n" :class="{ 'filled': n <= review.rating }">
                                        <i v-if="n <= review.rating" class="bi bi-star-fill text-warning px-1"></i>
                                        <i v-else class="bi bi-star text-warning px-1"></i>
                                    </span>
                                </div>
                            </div>
                            <small>{{ review.comment }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviews: [
                { author: 'John Doe', rating: 4, title: 'Good Product', comment: 'Great product, highly recommended!' },
                { author: 'Jane Smith', rating: 5, title: 'Good Product', comment: 'Amazing quality, exceeded my expectations.' },
                { author: 'Chris Johnson', rating: 3, title: 'Good Product', comment: 'Good product, but could be better.' },
                { author: 'John Doe', rating: 4, title: 'Good Product', comment: 'Great product, highly recommended!' },
                { author: 'Jane Smith', rating: 5, title: 'Good Product', comment: 'Amazing quality, exceeded my expectations.' },
                { author: 'Chris Johnson', rating: 3, title: 'Good Product', comment: 'Good product, but could be better.' },
            ]
        };
    },
    computed: {
        averageRating() {
            if (this.reviews.length === 0) return 0;
            const totalRating = this.reviews.reduce((acc, review) => acc + review.rating, 0);
            return Math.round(totalRating / this.reviews.length);
        }
    }
};
</script>

<style scoped></style>