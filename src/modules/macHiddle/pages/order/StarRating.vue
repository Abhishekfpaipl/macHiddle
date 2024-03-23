<template>
    <div class="star-rating fs-5 d-flex align-items-end justify-content-between">
        <!-- Loop through stars to display them with appropriate class -->
        <div class="">
            <i v-for="star in maxStars" :key="star"
                :class="{ 'bi': true, 'bi-star-fill': star <= rating, 'bi-star': star > rating }" class="me-1"
                @click="rate(star)">
            </i>
        </div>
        <small class="float-end smaller">{{ formatDate(order.created_at) }}</small>
    </div>
</template>

<script>
export default {
    props: {
        maxStars: {
            type: Number,
            default: 5, // Set the maximum number of stars (default is 5)
        },
        initialRating: {
            type: Number,
            default: 0, // Set the initial rating (default is 0)
        },
        order: Object
    },
    data() {
        return {
            rating: this.initialRating,
        };
    },
    methods: {
        rate(star) {
            // Update the rating when a star is clicked
            this.rating = star;
            this.$emit('rated', this.rating); // Emit an event to inform the parent component of the updated rating
        },
        formatDate(dateTimeString) {
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            };
            const formattedTime = new Date(dateTimeString).toLocaleDateString('en-US', options);
            return formattedTime;
        },
    },
};
</script>

<style>
.star-rating i {
    cursor: pointer;
    /* font-size: 24px; */
    color: goldenrod;
}
</style>