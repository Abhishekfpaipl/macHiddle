<template>
    <div class="">
        <div class="accordion" id="accordionExample">
            <div v-for="(ret, index) in returnFaq" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#ret' + index" aria-expanded="true" :aria-controls="'ret' + index">
                        {{ ret.id }}. {{ ret.question }}
                    </button>
                </h2>
                <div :id="'ret' + index" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>{{ ret.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ReturnPage',
    data() {
        return {
            returnFaq: [
                {
                    id: 1,
                    question: 'How can I return items?',
                    answer: 'Please follow the simple steps mentioned below to submit your return request within 10 days from the order is delivered – ',
                },
                {
                    id: 2,
                    question: 'How to get refund for cash on delivery to the bank account?',
                    answer: "You can also reach out to our Customer Experience team for more clarity via mail at support@urbanic.com or chat option on the Urbanic app/website. "
                },
                {
                    id: 3,
                    question: 'What items are not eligible for returns?',
                    answer: "The following items cannot be returned or exchanged: bodysuits, lingerie & sleepwear, swimwear, jewellery, and accessories. For more info on return, please check our Return Policy by clicking "
                },
                {
                    id: 4,
                    question: 'Do I have to return the free gifts I received with the order when I return a product?',
                    answer: "Yes, the free products were given as part of the products you have ordered, so they need to be returned along with the product."
                },
                {
                    id: 5,
                    question: 'Can I exchange the item I have ordered?',
                    answer: "We may have this facility in future and when we do, you'll be the first to know. If you want to change your product, you can apply for return and refund and place a new order for the bigger/smaller size or different colour depending on the reason you want to exchange the item for. "
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>