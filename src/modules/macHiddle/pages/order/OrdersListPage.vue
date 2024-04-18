<template>
    <div class="mt-5 pt-3">
        <OrdersTopNav />
        <div class=" d-md-flex d-block container mb-4 w-100">
            <div class="d-md-block d-none  w-25 me-3">
                <div class="d-flex flex-column p-3 bg-light">
                    <strong class="text-capitalize">{{ user.name }}</strong>
                    <small class="text-muted">{{ user.email }}</small>
                    <small class="text-danger">Get Membership Now</small>
                </div>
                <div class="form-group">
                    <label for="statusSelect">Filter by Status:</label>
                    <select class="form-control" id="statusSelect" v-model="selectedStatus"
                        @change="changeStatus(selectedStatus)">
                        <option value="Processing">Processing</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Completed">Completed</option>
                        <option value="">All</option>
                    </select>
                </div>
                <!-- <div class="form-group">
                    <label for="statusSelect">Group By:</label>
                    <select class="form-control" id="statusSelect" v-model="queryParams"
                        @change="changeGroupBy(groupBy)">
                        <option value="order_id">Order Id</option>
                    </select>
                </div> -->
                <div class="list-group py-2">
                    <router-link :to="link.path" class=" mb-0 list-group-item" v-for="(link, index) in links"
                        :key="index">{{ link.name }}</router-link>
                </div>

                <button class="btn btn-outline-danger w-100" @click="logOut()">Logout</button>
            </div>
            <div v-if="orderStatus.length > 0" class="">
                <button class="btn btn-dark d-flex d-md-none gap-2 rounded-pill my-2" data-bs-toggle="collapse"
                    href="#orderSort" role="button" aria-expanded="false" aria-controls="orderSort">
                    <i class="bi bi-sliders"></i>
                    <p class="mb-0">Filter By</p>
                </button>
                <div class="collapse" id="orderSort">
                    <div class="p-2 border-top" style="background-color: #00000020;">
                        <div v-for="(order, index) in orderStatus" :key="index" class="btn-group m-1" role="group"
                            aria-label="Basic checkbox toggle button group">
                            <input type="checkbox" class="btn-check" :id="order.id"
                                @click="changeStatus(order.value)" />
                            <label class=" btn btn-outline-dark rounded-0" :for="order.id">
                                {{ order.name }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="Object.keys(filteredOrders).length > 0" class="w-100">
                <div class="text-uppercase text-muted fw-bold my-3">My Orders</div>
                <div v-for="(order, index) in filteredOrders" :key="index">
                    <div class="border p-1 mb-2">
                        <router-link :to="'/orders/detail/' + order.sid" class="d-flex text-decoration-none text-dark">
                            <img :src="order.product.option.primary_image" class=""
                                style="height:135px; width: auto;object-fit: fill;">

                            <div class="d-flex flex-column justify-content-between w-100">
                                <div class="ms-2 ">
                                    <p class="truncate small mb-0">{{ order.product.name }}</p>
                                    <div class="d-flex justify-content-between w-100">
                                        <div class="d-flex flex-column">
                                            <b class="text-muted small pt-2">Order ID : {{ order.sid }}</b>
                                            <div class="text-muted py-1 d-flex gap-2 align-items-center">
                                                <span class="fw-bold text-capitalize small">Status :</span>
                                                <span class="fw-bold text-capitalize small">{{ order.status
                                                    }}</span>
                                                <i class="bi" :class="getStatusClass(order)"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ms-2 dlex justify-content-between">
                                    <StarRating :maxStars="5" :order="order" />
                                </div>
                            </div>
                            <div class="d-flex align-items-start">
                                <i class="bi bi-chevron-right"></i>
                            </div>

                        </router-link>
                    </div>
                </div>
            </div>
            <div v-else class="flex-fill d-flex justify-content-center aling-items-center">
                <NoData />
            </div>
        </div>
        <!-- <OrderDetailCard :orders="getOrdersByStatus" /> -->
    </div>
</template>

<script>
// import OrderDetailCard from '@/modules/macHiddle/pages/order/OrderDetailCard.vue';
import OrdersTopNav from '@/modules/macHiddle/components/navbar/OrdersTopNav.vue';
import StarRating from '@/modules/macHiddle/pages/order/StarRating.vue';
import NoData from '../../components/NoData.vue';
// import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'OrdersPage',
    components: {
        // OrderDetailCard,
        OrdersTopNav,
        StarRating,
        NoData
    },
    data() {
        return {
            selectedStatus: '',
            page: 1,
            isFetching: false,
            previousScrollTop: 0,
            queryParams: null,
            orderStatus: [
                { id: 'Processing', name: 'Processing', value: 'Processing' },
                { id: 'Pending', name: 'Pending', value: 'Pending' },
                { id: 'Cancelled', name: 'Cancelled', value: 'Cancelled' },
                { id: 'Completed', name: 'Completed', value: 'Completed' },
                { id: 'All', name: 'All', value: '' },
            ],
            links:[
                {id:1, name:'Track Order', path:''},
                {id:2, name:'Saved card', path:''},
                {id:3, name:'Return Policy', path:'/return-policy'},
                {id:4, name:'Profile', path:'/myAccount'},
            ]
        };
    },
    mounted() {
        const queryParams = this.$route.query;

        if (Object.keys(queryParams).length > 0) {
            this.queryParams = queryParams;

            // Check if queryParams has either order_sid or suborder_sid
            if (Object.prototype.hasOwnProperty.call(queryParams, 'order_sid') || Object.prototype.hasOwnProperty.call(queryParams, 'suborder_sid')) {
                const data = {
                    // page: this.page,
                    // status: this.selectedStatus,
                    // filter: queryParams.order_sid || queryParams.suborder_sid
                    filter: queryParams.order_sid
                };

                this.$store.dispatch('LoggedInUserStore/fetchCancelledOrderProducts', data)
                // this.fetchOrders(data);
            } else {
                const data = {
                    page: this.page,
                    status: this.selectedStatus
                };
                console.log('status', data)
                this.fetchOrders(data);
            }
        } else {
            const data = {
                page: this.page,
                status: this.selectedStatus
            };
            console.log('status', data)
            this.fetchOrders(data);
        }
        this.$store.dispatch('LoggedInUserStore/fetchUserDetail')
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        getOrdersByStatus() {
            return this.$store.getters['LoggedInUserStore/getOrdersByStatus']
        },
        filteredOrders() {
            return this.$store.getters['LoggedInUserStore/getFilteredOrders']
        },
        user() {
            return this.$store.getters['LoggedInUserStore/getUserDetail']
        }
    },
    methods: {
        fetchOrders(data) {
            console.log(data)
            this.$store.dispatch('LoggedInUserStore/fetchOrders', data)
            // .catch(error => {
            //     if (error.response && err or.response.status === 401) {
            //         router.push('/login-page');
            //     } else {
            //         console.error('Error:', error);
            //         alert('Something went wrong! Please try again');
            //     }
            // });
        },
        // fetchOrderWithQueryParams(queryParams) {
        //     console.log(queryParams)
        //     const data = {
        //         page: this.page,
        //         filter: queryParams.order_sid
        //     }
        //     this.$store.dispatch('LoggedInUserStore/fetchFilteredOrders', data)
        // },
        // fetchOrdersByStatus() { 
        //     const data = {
        //         page: this.page,
        //         status: this.selectedStatus
        //     }
        //     this.$store.dispatch('LoggedInUserStore/fetchOrdersByStatus', data)
        // },
        getStatusClass(order) {
            switch (order.status) {
                case 'pending': return 'bi-hourglass-split';
                case 'cancelled': return 'bi-x-circle text-danger';
                case 'delivered': return 'bi-circle-fill text-success';
                default: return ''
            }
        },
        formatDate(dateTimeString) {
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            };
            const formattedTime = new Date(dateTimeString).toLocaleDateString('en-US', options);
            return formattedTime;
        },
        changeStatus(status) {
            this.selectedStatus = status;
            const data = {
                page: this.page,
                status: this.selectedStatus
            };
            this.fetchOrders(data);
        },
        changeGroupBy(groupBy) {
            this.groupBy = groupBy
        },
        handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop > this.previousScrollTop && clientHeight + scrollTop >= scrollHeight - 5 && !this.isFetching) {
                this.isFetching = true;
                if (this.page === 1) {
                    this.page++;
                }
                const data = {
                    page: this.page,
                    status: this.selectedStatus,
                    filter: this.queryParams ? (this.queryParams.order_sid || this.queryParams.suborder_sid) : null
                };
                console.log('inside method', data)
                this.fetchOrders(data);
                this.page++;
                this.isFetching = false;
            }
            this.previousScrollTop = scrollTop;
        },
        logOut() {
            this.$store.dispatch('LoggedInUserStore/logout')
        }
    }
}
</script>

<style lang="scss" scoped></style>