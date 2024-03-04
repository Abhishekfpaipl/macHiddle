<template> 
    <div class="accordion" id="accordionExample">
        <div v-for="(faq,index) in accountFaq" :key="index" class="accordion-item" >
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#faq' + index"
                    aria-expanded="true" :aria-controls="'faq' + index">
                    {{faq.id}}. {{faq.question}}
                </button>
            </h2>
            <div :id="'faq' + index" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>{{ faq.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script> 
export default {
    name:'AccountPage',
    data() {
        return {
            accountFaq: [
                {
                    id: 1,
                    question: 'Is it necessary to have an account to shop on CloBug?',
                    answer: 'Yes, it is necessary to log into your Urbanic account to shop, it is fast and convenient and provides extra security. You will have access to a personalized shopping experience including notifications, promotions, recommendations in emails etc'
                },
                {
                    id: 2,
                    question: 'Do you save my personal information?',
                    answer: 'We respect your privacy and keep your personal information confidential. When you visit our site, the information collected is stored by your browsers, such as your name, phone number, postal code, and address. Cookies can be used to recognize your IP address and provide faster access to our site. You can restrict the use of cookies by changing the settings in your browser, which may limit your access to our site'
                },
                {
                    id: 3,
                    question: 'Can I change my email address or login details?',
                    answer: 'No, we cannot change or update the email address or login details as of now. If you want to change your account for any reason, please reach out to the Customer Experience team via mail at support@urbanic.com or the chat option on the Urbanic app/website.'
                },
                {
                    id: 4,
                    question: 'Can I change my personal information?',
                    answer: 'Updating your personal details is easy! Simply go to the My Profile option in the Me section to change your name, gender, and category preferences.'
                },
                {
                    id: 5,
                    question: 'Can I change my mobile number',
                    answer: 'Yes, you now have the option to update your mobile number in the My Profile section. Kindly note that once you change your number, you will no longer be able to log in with the previous one. Only the new number will be valid for logging in, and all future communications will be directed to the updated number. We kindly request you to proceed with the change only if you intend to utilize the new number moving forward. To change the mobile number, please click '
                },
            ]
        }
    }, 
}
</script>

<style lang="scss" scoped></style>