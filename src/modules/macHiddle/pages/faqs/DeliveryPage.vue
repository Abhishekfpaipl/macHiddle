<template>
    <div class="">
        <div class="accordion" id="accordionExample">
            <div v-for="(del, index) in deliveryFaq" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#del' + index" aria-expanded="true" :aria-controls="'del' + index">
                        {{ del.id }}. {{ del.question }}
                    </button>
                </h2>
                <div :id="'del' + index" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>{{ del.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DeliveryPage',
    data() {
        return {
            deliveryFaq: [
                {
                    id: 1,
                    question: 'How long does it take to get the order delivered?',
                    answer: 'We aim to deliver your complete order within 8-13 business days. It may vary slightly depending on the location. You can check the delivery timelines on the product page while selecting the item.',
                },
                {
                    id: 2,
                    question: 'I still havent received my order.Where is it?',
                    answer: 'Our standard delivery timeline is between 8-13 business days, The fast delivery timeline is 3-5 business days. It may vary slightly depending on the location.'
                },
                {
                    id: 3,
                    question: 'What does Fast Delivery mean?',
                    answer: "Fast delivery refers to an express shipping wherein your order gets delivered in 3-5 business days. It may vary slightly depending on the location. You can check the delivery timelines on the product page while selecting the item."
                },
                {
                    id: 4,
                    question: 'How can I find the contact details of the delivery/pickup executive?',
                    answer: "Currently, we do not have our own courier partners, it's a third-party courier service due to which we are unable to share the contact details . However, the field executive will call you before the delivery or pickup."
                },
                {
                    id: 5,
                    question: 'Why is my delment declined?',
                    answer: "When your order contains some products under 'Fast Delivery' and some under 'Standard Delivery', the order will be split into 2 parts and delivered as per the fast and standard delivery timelines."
                },
            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>