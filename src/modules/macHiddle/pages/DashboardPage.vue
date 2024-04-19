<template>
    <div class="mt-5 pt-3">
        <div v-if="Object.keys(banners).length > 0" id="mobileCarousel" class="carousel slide row-cols-xl"
            data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(banner, index) in banners" :key="index"
                    :class="{ active: index === 0 }" data-bs-interval="2000">
                    <img :src="banner.primary_image" class="" style="height: 400px; width: 100%; object-fit: cover;"
                        :alt="banner.name">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#mobileCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#mobileCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div v-else class="container-fluid placeholder-glow my-1">
            <div class="row">
                <div class="col-12 placeholder" style="height: 400px;"></div>
            </div>
        </div>

        <div v-if="Object.keys(categories).length > 0" class="d-flex overflow-x-scroll my-4" id="scroll">
            <router-link to="/categories"
                class="d-flex flex-column align-items-center px-2 text-decoration-none text-dark"
                v-for="(category, index) in categories" :key="index">
                <img :src="category.primary_image" :alt="category.name" class="rounded-circle"
                    style="width:80px; height: 80px; object-fit: cover;">
                <strong>{{ category.name }}</strong>
            </router-link>
        </div>

        <div v-else class="container-fluid placeholder-glow my-1">
            <div class="row px-2 d-flex">
                <div class="col-4" v-for="item in [1, 2, 3]" :key="item">
                    <div class="d-flex flex-column align-items-center px-2">
                        <div class="rounded-circle placeholder" style="height:80px; width:80px"></div>
                        <div class="col-8 placeholder my-1" style="height:20px;"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <HomeCategory /> -->
        <!-- <SectionCard /> -->
        <Collection />
        <YouMayLike />
        <FooterBar />
    </div>
</template>

<script>

import Collection from '@/components/CollectionPage.vue';
import YouMayLike from '@/modules/macHiddle/components/YouMayLike.vue';
// import SectionCard from '@/modules/macHiddle/components/sections/SectionCard.vue';
// import HomeCategory from '@/modules/macHiddle/components/sections/HomeCategory.vue';
import FooterBar from '@/modules/macHiddle/components/navbar/FooterBar.vue';

export default {
    name: "DashboardPage",
    components: {
        Collection,
        YouMayLike,
        // SectionCard,
        // HomeCategory,
        FooterBar,
    },
    data() {
        return {
            publichPath: process.env.BASE_URL,
            banner: 'img/banner.png'
        }
    },
    mounted() {
        this.$store.dispatch('MacStore/fetchBanners')
        this.$store.dispatch('MacStore/fetchCategories')
        this.subscribeForNotifications()
        this.getNoti()

    },
    computed: {
        banners() {
            return this.$store.getters['MacStore/getBanners']
        },
        categories() {
            return this.$store.getters['MacStore/getCategories'];
        }
    },
    methods: {
        subscribeForNotifications() {
            console.log('sub')
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                navigator.serviceWorker.ready
                    .then((registration) => {
                        const subscribeOptions = {
                            userVisibleOnly: true,
                            applicationServerKey: "BNrsrLs7EnssDmtL_e7ziGy92Hwv5MHc131LYUmoSrWace1fPaqTLoPaZCPeV7Fk8I09qTF_ZjppBFU6ONXSu5g"
                        };
                        // VAPID_PUBLIC_KEY = 'BNrsrLs7EnssDmtL_e7ziGy92Hwv5MHc131LYUmoSrWace1fPaqTLoPaZCPeV7Fk8I09qTF_ZjppBFU6ONXSu5g'
                        // VAPID_PRIVATE_KEY = 'jdWAbgz6aN3jcvdVQUlxpGRYugIBA40WrVBFOfxDkOc'

                        return registration.pushManager.subscribe(subscribeOptions);
                    })
                    .then((pushSubscription) => {
                        console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
                        // You can store the pushSubscription data as needed
                        const { keys, endpoint } = pushSubscription.toJSON();
                        // Store the keys in localStorage
                        localStorage.setItem('p256dhKey', keys.p256dh);
                        localStorage.setItem('authKey', keys.auth);
                        localStorage.setItem('endpoint', endpoint)
                        // console.log('Stored p256dhKey in localStorage:', keys.p256dh);
                        // console.log('Stored authKey in localStorage:', keys.auth);
                        // this.storePushSubscription(pushSubscription);
                    })
                    .catch((error) => {
                        console.error('Error subscribing for notifications:', error);
                    });
            } else {
                alert('Push notifications are not supported in this browser.');
            }
        },
        getNoti() {
            console.log('clicked noti sub')
            const keys = {
                "auth": localStorage.getItem('authKey'),
                "p256dh": localStorage.getItem('p256dhKey')
            };
            const data = {
                endpoint: localStorage.getItem('endpoint'),
                keys
            };
            // const config = {
            //     headers: { "Authorization": `Bearer ${token}` }
            // };
            this.$store.dispatch('LoggedInUserStore/subscribeNotification', data)
            // axiosInstance.post('push_store', data, config)
            //     .then((response) => {
            //         console.log('data sent', response);
            //     })
            //     .catch((error) => {
            //         console.error('error sending data', error);
            //     });
        },
    }
}
</script>

<style lang="scss" scoped></style>