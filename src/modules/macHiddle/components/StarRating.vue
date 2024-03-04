<template>
    <div class="star-rating m-0 p-0">
        <!-- Loop through stars to display them with appropriate class -->
        <i v-for="star in maxStars" :key="star"
            :class="{ 'bi': true, 'bi-star-fill': star <= rating, 'bi-star': star > rating }" class="me-1"
            @click="rate(star)">
        </i>
    </div>
</template>
  
<script>
export default {
    name: 'StarRating',
    props: {
        maxStars: {
            type: Number,
            default: 5, // Set the maximum number of stars (default is 5)
        },
        initialRating: {
            type: Number,
            default: 0, // Set the initial rating (default is 0)
        },
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
    },
};
</script>
  
<style>
.star-rating i {
    cursor: pointer;
    font-size: 15px;
    color: goldenrod;
}
</style>
  