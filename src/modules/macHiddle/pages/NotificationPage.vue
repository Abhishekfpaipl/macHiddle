<template>
    <div class="container">
        <div v-for="(noti, index) in notifications" :key="index" class="border-bottom py-2 container">
            <div class="d-flex align-items-center w-100">
                <div class="">
                    <div class="rounded-circle d-flex justify-content-center align-items-center "
                        style="  width: 50px; height: 50px; object-fit:cover; object-position: top;"
                        :style="{ backgroundColor: noti.bg1 }"><i style="font-size: 20px;" :style="{ color: noti.bg }"
                            class="d-flex justify-content-center align-items-center" :class="noti.icon"></i>

                    </div>
                    <div class=" text-center">

                    </div>
                </div>
                <div class="ms-2">
                    <div class="d-flex justify-content-between">
                        <b class="ss">{{ noti.title }}</b>
                        <i class="bi bi-x"></i>
                    </div>
                    <p class="mb-0 vv">{{ noti.description }}</p>
                </div>
            </div>
        </div>
        <div class=" my-2 btn-group">
            <div class="d-flex align-items-center justify-content-center btn bg-primary w-25">
                <i class="bi bi-cart2 fs-1"></i>
            </div>
            <div class="btn w-75 bg-success">
                <strong class="d-block">Your package is out for delivery</strong>
                <small>Your package is expected to be delivered today. Clcik here for more details.</small>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificationPage',
    data() {
        return {
            notifications: [
                {
                    bg1: '#fcf4db',
                    bg: 'black',
                    icon: 'bi bi-hourglass',
                    title: 'Order payment is still pending.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#e2f5ea',
                    bg: 'black',
                    icon: 'bi bi-currency-rupee',
                    title: 'Order payment is confirmed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fbdddd',
                    bg: 'black',
                    icon: 'bi bi-x',
                    title: 'Order payment is cancelled.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fcf4db',
                    bg: 'black',
                    icon: 'bi bi-cart',
                    title: 'Your order has been placed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#e2f5ea',
                    bg: 'black',
                    icon: 'bi bi-cart-check',
                    title: 'Your order has been confirmed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#e2f5ea',
                    bg: 'black',
                    icon: 'bi bi-send-check',
                    title: 'Your oder has been dispatched.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fbdddd',
                    bg: 'black',
                    icon: 'bi bi-cart-x',
                    title: 'Your order has been cancelled.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fcf4db',
                    bg: 'black',
                    icon: 'bi bi-box',
                    title: 'Your order has been delivered.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fcf4db',
                    bg: 'black',
                    icon: 'bi bi-clock',
                    title: 'Your order is delayed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },


            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>