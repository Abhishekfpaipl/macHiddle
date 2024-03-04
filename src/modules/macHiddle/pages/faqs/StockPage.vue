<template>
    <div class="">
        <div class="accordion" id="accordionExample">
            <div v-for="(stock, index) in stockFaq" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#stock' + index" aria-expanded="true" :aria-controls="'stock' + index">
                        {{ stock.id }}. {{ stock.question }}
                    </button>
                </h2>
                <div :id="'stock' + index" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>{{ stock.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'StockPage',
    data() {
        return {
            stockFaq: [
                {
                    id: 1,
                    question: 'Do you restock sold-out items?',
                    answer: "Yes, we always try to restock the items which have been marked as “Sold Out”. Please keep checking out our app or website frequently for restocks. ",
                },
                {
                    id: 2,
                    question: 'How do I choose my size?',
                    answer: "You can get help from our 'Get Size Help' option available on the product page, where you can add your body measurements and you will get the size recommendation accordingly."
                },
                {
                    id: 3,
                    question: "What does 'Out of Stock' mean ?",
                    answer: "When a product is no longer available with us due to discontinuation or stock shortage, its labelled as 'Out of Stock'"
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>