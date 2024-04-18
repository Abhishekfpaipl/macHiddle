<template>
    <div class="container my-2">
        <div class="row bg-white">
            <div v-for="(badge, index) in badges" :key="index" class="col-4 col-md-6 col-lg-4 mb-3">
                <div class="text-center">
                    <div style="min-height: 35px;">
                        <img :src="badge.image" style="height: 80px;object-fit: cover;" class="rounded">
                    </div>
                    <p class="text-muted smaller mb-0">{{ badge.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductBadge',
    props: {
        badges: Array
    },
    data() {
        return {
            // badges: [
            //     {
            //         id: 1,
            //         image: 'https://staticin.sadhguru.org/in/pub/media/wysiwyg/Shipping-Block-New.png',
            //         details: 'Free shipping above Rs 950'
            //     },
            //     {
            //         id: 2,
            //         image: 'https://staticin.sadhguru.org/in/pub/media/wysiwyg/Dispatch-Block-New.png',
            //         details: 'Within 24-48 hours Fast Dispatches'
            //     },
            //     {
            //         id: 3,
            //         image: 'https://staticin.sadhguru.org/in/pub/media/wysiwyg/Secure-Block-New.png',
            //         details: 'Secure Payments'
            //     },
            //     {
            //         id: 4,
            //         image: 'https://staticin.sadhguru.org/in/pub/media/wysiwyg/Make-In-India-Block-New-1.png',
            //         details: 'Produce of India'
            //     },
            //     {
            //         id: 5,
            //         image: 'https://staticin.sadhguru.org/in/pub/media/wysiwyg/Hollistic-Block-New.png',
            //         details: 'Holistic Well-being'
            //     },
            // ]
        }
    },
}
</script>

<style lang="scss" scoped>
/* Add custom styles if needed */
</style>
