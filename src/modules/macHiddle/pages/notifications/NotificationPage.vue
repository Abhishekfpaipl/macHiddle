<template>
    <!-- <div class="container">
        <div v-for="(notification, index) in notifications" :key="index" class="border-bottom py-2 container">
            {{ notification }}
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
                        <b class="ss">{{ notification.title }}</b>
                        <i class="bi bi-x"></i>
                    </div>
                    <p class="mb-0 vv">{{ notification.description }}</p>
                </div>
            </div>
        </div>
        <div class=" my-2 btn-group shadow">
            <div class="d-flex align-items-center justify-content-center btn bg-primary w-25">
                <i class="bi bi-cart2 fs-1"></i>
            </div>
            <div class="btn w-75 bg-success">
                <strong class="d-block">Your package is out for delivery</strong>
                <small>Your package is expected to be delivered today. Clcik here for more details.</small>

            </div>
        </div>
    </div> -->

    <nav>
        <div class="nav nav-tabs d-flex justify-content-start pt-1" id="nav-tab" role="tablist"
            style="background-color: var(--secondary-color);">
            <button class="nav-link active" id="Activity-tab" data-bs-toggle="tab" data-bs-target="#Activity"
                type="button" role="tab" aria-controls="Activity" aria-selected="true">Activity</button>

            <!-- <button class="nav-link" id="Offers-tab" data-bs-toggle="tab" data-bs-target="#Offers" type="button"
                role="tab" aria-controls="Offers" aria-selected="false">Offers</button>

            <button class="nav-link" id="Promotions-tab" data-bs-toggle="tab" data-bs-target="#Promotions" type="button"
                role="tab" aria-controls="Promotions" aria-selected="false">Promotions</button>

            <button class="nav-link" id="All-tab" data-bs-toggle="tab" data-bs-target="#All" type="button" role="tab"
                aria-controls="All" aria-selected="false">All</button> -->
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">

        <!-- Activity Tab -->
        <div class="tab-pane fade show active px-2" id="Activity" role="tabpanel" aria-labelledby="Activity-tab"
            tabindex="0">
            <div v-for="(notification, index) in notifications" :key="index" class="">
                <div v-if="notification.data && !notification.read_at"
                    class="d-flex justify-content-between my-2 border p-2" data-bs-dismiss="offcanvas">
                    <router-Link
                        v-if="notification.data.subject === 'order-update' || notification.data.subject === 'delivery-update'"
                        :to="'/orders/list/?order_sid=' + notification.data.body.sid"
                        class="d-flex flex-column text-decoration-none text-dark">
                        <div class="">
                            <strong
                                v-if="notification.data.subject === 'order-update' && notification.data.body && notification.data.body.status === 'cancelled'"
                                class="mb-0 text-capitalize">
                                Order Cancelled
                            </strong>
                            <strong v-else class="mb-0 text-capitalize">
                                {{ notification.data.title }}
                            </strong>
                            <p class="mb-1 small">{{ formatDate(notification.created_at) }}</p>
                        </div>



                        <div v-if="notification.data.subject === 'order-create' || notification.data.subject === 'order-product-cancel-req'"
                            class="">
                            <p class="small mb-0">Hi, <span class="text-capitalize">{{ user ? user.name : 'Unknown'
                                    }}</span> your order for
                                <span
                                    v-if="notification && notification.data && notification.data.body && notification.data.body.product">
                                    {{ notification.data.body.product.name }}
                                </span>
                                <span> amount </span>
                                <strong
                                    v-if="notification && notification.data && notification.data.body && notification.data.body.product">
                                    {{ notification.data.body.total }}
                                </strong> has been confirmed.
                            </p>
                        </div>
                        <div v-if="notification.data.subject === 'order-update' && notification.data.body && notification.data.body.status === 'cancelled'"
                            class="mb-0 small">
                            Hi, <span class="text-capitalize">{{ user.name }}</span>, due to some issues, we had to
                            cancel your order. Sorry for the inconvenience.
                        </div>



                        <div v-if="notification.data.subject === 'delivery-update' &&
                            notification.data.body && notification.data.body.delivery &&
                            notification.data.body.delivery.status === 'completed'" class="">
                            <p class="small mb-0">Hi, <span class="text-capitalize">{{ user ? user.name : 'Unknown'
                                    }}</span> your order has
                                been delivered.
                            </p>
                        </div>

                    </router-Link>
                    <router-Link v-else :to="'/orders/detail/' + notification.data.body.sid"
                        class="d-flex flex-column text-decoration-none text-dark">
                        <div class="">
                            <strong
                                v-if="notification.data.subject === 'order-update' && notification.data.body && notification.data.body.status === 'cancelled'"
                                class="mb-0 text-capitalize">
                                Order Cancelled
                            </strong>
                            <strong v-else class="mb-0 text-capitalize">
                                {{ notification.data.title }}
                            </strong>
                            <p class="mb-1 small">{{ formatDate(notification.created_at) }}</p>
                        </div>

                        <div v-if="notification.data.subject === 'order-create' || notification.data.subject === 'order-product-cancel-req'"
                            class="">
                            <p class="small mb-0">Hi, <span class="text-capitalize">{{ user ? user.name : 'Unknown'
                                    }}</span> your order for
                                <span
                                    v-if="notification && notification.data && notification.data.body && notification.data.body.product">
                                    {{ notification.data.body.product.name }}
                                </span>
                                <span> amount </span>
                                <strong
                                    v-if="notification && notification.data && notification.data.body && notification.data.body.product">
                                    {{ notification.data.body.total }}
                                </strong> has been confirmed.
                            </p>
                        </div>
                        <div v-if="notification.data.subject === 'order-update' && notification.data.body && notification.data.body.status === 'cancelled'"
                            class="mb-0 small">
                            Hi, <span class="text-capitalize">{{ user.name }}</span>, due to some issues, we had to
                            cancel your order. Sorry for the inconvenience.
                        </div>

                        <div v-if="notification.data.subject === 'withdraw-cancel-req'" class="mb-0 small">
                            Hi, <span class="text-capitalize">{{ user.name }}</span>, You have withdrawn the request to
                            cancel <span
                                v-if="notification.data && notification.data.body && notification.data.body.product">{{
                                    notification.data.body.product.name }}</span>.
                        </div>


                        <div v-if="notification.data.subject === 'delivery-update' &&
                            notification.data.body && notification.data.body.delivery &&
                            notification.data.body.delivery.status === 'completed'" class="">
                            <p class="small mb-0">Hi, <span class="text-capitalize">{{ user ? user.name : 'Unknown'
                                    }}</span> your order has
                                been delivered.
                            </p>
                        </div>

                    </router-Link>

                    <i class="bi bi-check2-circle" @click="markAsReady(notification)"></i>
                </div>
            </div>

        </div>

        <!-- Offers Tab -->
        <!-- <div class="tab-pane fade px-2" id="Offers" role="tabpanel" aria-labelledby="Offers-tab" tabindex="0">
            <div v-for="(notification, index) in notifications.offers" :key="index" class="">
                <div v-if="notification.data && !notification.read_at">
                    <div class=" d-flex justify-content-between my-2 border p-2 text-dark">
                        <div class="d-flex flex-column">
                            <div class="d-flex">
                                <img :src="`${publicPath}${logo}`" class="me-2 rounded"
                                    style="height:40px; width:40px;object-fit: contain; background-color: var(--secondary-color);">
                                <div class="">
                                    <b class="mb-0 text-capitalize" style="font-size: 18px;">Hi, {{ user.name }},</b>
                                    <p class="mb-1 small">{{ formatDate(notification.created_at) }}</p>
                                </div>
                            </div>

                            <div v-if="notification.data && notification.data.body && notification.data.body.offer"
                                class="">
                                <p class="small mb-0">Hi, <span class="text-capitalize">{{ user.name }}</span>
                                    {{ notification.data.body.offer.detail }} and get
                                    {{ notification.data.body.offer.amount }} % OFF.
                                </p>
                            </div>
                        </div>
                        <i class="bi bi-check2-circle" @click="markAsReady(notification)" style="font-size: 20px;"></i>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- Promotions Tab -->
        <!-- <div class="tab-pane fade px-2" id="Promotions" role="tabpanel" aria-labelledby="Promotions-tab" tabindex="0">
            <div v-for="(notification, index) in notifications.promotions" :key="index" class="">
                <div v-if="notification.data && !notification.read_at">
                    <div class=" d-flex justify-content-between my-2 border p-2 text-dark">
                        <div class="d-flex flex-column">
                            <div class="d-flex">
                                <img :src="`${publicPath}${logo}`" class="me-2 rounded"
                                    style="height:40px; width:40px;object-fit: contain; background-color: var(--secondary-color);">
                                <div class="">
                                    <b class="mb-0 text-capitalize" style="font-size: 18px;">Hi, {{ user.name }},</b>
                                    <p class="mb-1 small">{{ formatDate(notification.created_at) }}</p>
                                </div>
                            </div>

                            <div v-if="notification.data && notification.data.body" class="">
                                <p class="small mb-0">Hi, <span class="text-capitalize">{{ user.name }}</span>
                                    {{ notification.data.body.detail }} and get
                                    {{ notification.data.body.amount }} % OFF.
                                </p>
                            </div>
                        </div>
                        <i class="bi bi-check2-circle" @click="markAsReady(notification)" style="font-size: 20px;"></i>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- All Read Tab -->
        <!-- <div class="tab-pane fade px-2" id="All" role="tabpanel" aria-labelledby="All-tab" tabindex="0">

            <div v-for="(notification, index) in notifications.intimations" :key="index" class="">
                <div v-if="notification.data && notification.read_at"
                    class="d-flex justify-content-between my-2 border p-2" data-bs-dismiss="offcanvas">
                    <router-Link :to="'/orders/detail/' + notification.data.body.sid"
                        class="d-flex flex-column text-decoration-none text-dark">
                        <div class="d-flex">
                            <div class="">
                                <b class="mb-0 text-capitalize" style="font-size: 18px;">{{ notification.data.title
                                    }}</b>
                                <p class="mb-1 small">{{ formatDate(notification.created_at) }}</p>
                            </div>
                        </div>

                        <div v-if="notification.data.subject === 'order-create' || notification.data.subject === 'order-product-cancel-req'"
                            class="">
                            <p class="small mb-0">Hi, <span>{{ user ? user.name : 'Unknown' }}</span> your order for
                                <span
                                    v-if="notification && notification.data && notification.data.body && notification.data.body.product">
                                    {{ notification.data.body.product.name }}
                                </span>
                                <span> amount </span>
                                <strong
                                    v-if="notification && notification.data && notification.data.body && notification.data.body.product">
                                    {{ notification.data.body.total }}
                                </strong> has been confirmed.
                            </p>
                        </div>

                        <div v-if="notification.data.subject === 'delivery-update'" class="">
                            <p class="small mb-0">Hi, <span>{{ user ? user.name : 'Unknown' }}</span> your order has
                                been delivered.
                            </p>
                        </div>

                    </router-Link>
                    <i class="bi bi-check-circle-fill text-success" style="font-size: 20px;"></i>
                </div>
            </div>

            <div v-for="(notification, index) in notifications.offers" :key="index" class="">
                <div v-if="notification.data && notification.read_at">
                    <div class=" d-flex justify-content-between my-2 border p-2 text-dark">
                        <div class="d-flex flex-column">
                            <div class="d-flex">
                                <img :src="`${publicPath}${logo}`" class="me-2 rounded"
                                    style="height:40px; width:40px;object-fit: contain; background-color: var(--secondary-color);">
                                <div class="">
                                    <b class="mb-0 text-capitalize" style="font-size: 18px;">Hi, {{ user.name }},</b>
                                    <p class="mb-1 small">{{ formatDate(notification.created_at) }}</p>
                                </div>
                            </div>

                            <div v-if="notification.data && notification.data.body && notification.data.body.offer"
                                class="">
                                <p class="small mb-0">Hi, <span class="text-capitalize">{{ user.name }}</span>
                                    {{ notification.data.body.offer.detail }} and get
                                    {{ notification.data.body.offer.amount }} % OFF.
                                </p>
                            </div>
                        </div>
                        <i class="bi bi-check-circle-fill text-success" style="font-size: 20px;"></i>
                    </div>
                </div>
            </div>

            <div v-for="(notification, index) in notifications.promotions" :key="index" class="">
                <div v-if="notification.data && notification.read_at">
                    <div class=" d-flex justify-content-between my-2 border p-2 text-dark">
                        <div class="d-flex flex-column">
                            <div class="d-flex">
                                <img :src="`${publicPath}${logo}`" class="me-2 rounded"
                                    style="height:40px; width:40px;object-fit: contain; background-color: var(--secondary-color);">
                                <div class="">
                                    <b class="mb-0 text-capitalize" style="font-size: 18px;">Hi, {{ user.name }},</b>
                                    <p class="mb-1 small">{{ formatDate(notification.created_at) }}</p>
                                </div>
                            </div>

                            <div v-if="notification.data && notification.data.body" class="">
                                <p class="small mb-0">Hi, <span class="text-capitalize">{{ user.name }}</span>
                                    {{ notification.data.body.detail }} and get
                                    {{ notification.data.body.amount }} % OFF.
                                </p>
                            </div>
                        </div>
                        <i class="bi bi-check-circle-fill text-success" style="font-size: 20px;"></i>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
    <!-- <NoData  /> -->


</template>

<script>
// import NoData from '../../components/NoData.vue'; 
export default {
    name: 'NotificationPage',
    // components:{
    //     NoData
    // },
    props: ['user', 'notifications'],
    data() {
        return {
            logo: 'img/logo/MacHiddle-nobg.png',
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        formatDate(dateTimeString) {
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            };
            const formattedTime = new Date(dateTimeString).toLocaleDateString('en-US', options);
            return formattedTime;
        },
        markAsReady(notification) {
            this.$store.dispatch('LoggedInUserStore/markAsRead', notification.sid)
        },
    }
}
</script>

<style scoped>
.nav-link.active {
    background-color: var(--primary-color) !important;
    color: var(--secondary-color) !important;
}

.nav-link {
    color: white !important;
}
</style>