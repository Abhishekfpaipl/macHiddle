<template>
    <div class="accordion" id="accordionExample">
        <div v-for="(ord, index) in orderFaq" :key="index" class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#ord' + index" aria-expanded="true" :aria-controls="'ord' + index">
                    {{ ord.id }}. {{ ord.question }}
                </button>
            </h2>
            <div :id="'ord' + index" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ ord.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default { 
    data() {
        return {
            orderFaq: [
                {
                    id: 1,
                    question: 'How do I know my order has been confirmed?',
                    answer: 'Once you have successfully placed your order, we will notify you via Whatsapp/SMS and an email will be sent out to you with the order number. We will also notify you when the order is shipped. Email and SMS/Whatsapp notifications will be sent with the tracking information. You can track your order by clicking '
                },
                {
                    id: 2,
                    question: 'Can i cancel my order?',
                    answer: '. From this page, just select the order you want to cancel and proceed further.'
                },
                {
                    id: 3,
                    question: 'How much do you charge for the shipping?',
                    answer: 'There is a very nominal charge of ₹99 as a shipping fee for the orders below ₹990. All orders above ₹990 will be free of shipping charges.'
                },
                {
                    id: 4,
                    question: 'When will I receive my order?',
                    answer: 'We aim to deliver your order between 8-13 business days in case of standard delivery. '
                },
                {
                    id: 5,
                    question: 'How can I track my order?',
                    answer: 'Please select the order you want to track from the list and click on view details.  You can see the current status of the order and if it is shipped, it will show you the tracking number to track the order.'
                },
            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>