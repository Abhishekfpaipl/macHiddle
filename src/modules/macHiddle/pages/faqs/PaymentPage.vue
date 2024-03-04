<template>
    <div class=""> 
        <div class="accordion" id="accordionExample">
            <div v-for="(pay, index) in paymentFaq" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#pay' + index" aria-expanded="true" :aria-controls="'pay' + index">
                        {{ pay.id }}. {{ pay.question }}
                    </button>
                </h2>
                <div :id="'pay' + index" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>{{ pay.answer }}</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script> 
export default {
    name:'PaymentPage',
    data() {
        return {
            paymentFaq: [
                {
                    id: 1,
                    question: 'Do you offer Cash on Delivery?',
                    answer: 'Yes, we do offer Cash on Delivery on every product depending on the availability of our logistic partners in your delivery location. Generally, this covers most of the locations across India.',
                },
                {
                    id: 2,
                    question: 'Does COD have a service fee?',
                    answer: 'No, its free, we dont charge any amount for it.'
                },
                {
                    id: 3,
                    question: 'What payment methods do you accept?',
                    answer: 'There are different payment options which you can choose to pay while placing your order. Credit/Debit Card, PayTM Wallet, Net Banking, UPI, EMI, Cash on Delivery. '
                },
                {
                    id: 4,
                    question: 'Do you accept payment with international cards?',
                    answer: 'We do not accept payments from international cards yet. We will update you when we start accepting the international cards.'
                },
                {
                    id: 5,
                    question: 'Why is my payment declined?',
                    answer: 'Please confirm if the information youve provided is correct i.e. account details, billing address, and password (for Net Banking); and that your internet connection wasnt disrupted during the process.'
                },
            ]
        }
    }, 
}
</script>

<style lang="scss" scoped></style>