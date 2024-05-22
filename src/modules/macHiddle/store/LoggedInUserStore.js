import axiosInstance from "../axiosInstance";
import router from '@/router/index.js';
let token = localStorage.getItem('token');
import sweetAlert from "../mixins/sweet-alert";
export default {
    namespaced: true,
    state: {
        action: false,
        cart: [],
        checkout: {},
        wishlist: [],
        addresses: [],
        showAddress: {},
        // orders: [],
        // ordersByStatus: [],
        order: {},
        userDetail: {},
        filteredOrders: [],
        // showLogoutButton: false,
        allNotifications: [],
        showAtcButton: false,
        intimationNotification: [],
    },
    getters: {
        getCart: state => state.cart,
        getCheckout: state => state.checkout,
        getWishlist: state => state.wishlist,
        getAddresses: state => state.addresses,
        getShowAddress: state => state.showAddress,
        // getOrders: state => state.orders,
        // getOrdersByStatus: state => state.ordersByStatus,
        getFilteredOrders: state => state.filteredOrders,
        getOrder: state => state.order,
        getUserDetail: state => state.userDetail,
        // showLogoutButton: state => state.showLogoutButton
        getAllNotifications: state => state.allNotifications,
        getShowAtcButton: state => state.showAtcButton,
        getIntimationNotification: state => state.intimationNotification
    },
    mutations: {
        actionDone(state) {
            state.action = true
        },
        showAtcButton(state) {
            state.showAtcButton = true
        },
        setCart(state, data) {
            state.cart = data
        },
        setCheckout(state, data) {
            state.checkout = data
        },
        setWishlist(state, data) {
            state.wishlist = data
        },
        setAddresses(state, data) {
            state.addresses = data
        },
        showAddress(state, data) {
            state.showAddress = data
        },
        // setOrders(state, data) {
        //     state.orders = data
        // },
        setOrder(state, data) {
            state.order = data
        },
        setUser(state, data) {
            state.userDetail = data
        },
        // setOrdersByStatus(state, data) {
        //     state.ordersByStatus = [...state.ordersByStatus, ...data]
        // },
        setFilteredOrders(state, data) {
            state.filteredOrders = [...state.filteredOrders, ...data]
        },
        setAllNotification(state, data) {
            state.allNotifications = data
        },
        setIntimationNotifications(state, data) {
            state.intimationNotification = data
        }
    },
    actions: {
        loginUser({ commit }, data) {
            axiosInstance.post('login', data)
                .then((response) => {
                    commit('showLogoutBtn', response.data);
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    console.log('Login successful. Token stored:', token);
                    router.push('/')
                })
                .catch((error) => {
                    console.log('Error:', error);
                    sweetAlert.showSweetError('', error.response.data.message)
                });
        },
        verifyEmail({ commit }, data) {
            axiosInstance.post('email/verify', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 200) {
                        commit('actionDone', response)
                        sweetAlert.showSweetAlert('Yay!', 'Your email has been verified successfully')
                        router.push('/my-address')
                    } else if (response.data.status === 422) {
                        sweetAlert.showSweetError('', response.data.message)
                    } else {
                        alert('Something went wring verifyEmail')
                    }
                }).catch((error) => {
                    console.log(error)
                    sweetAlert.showSweetError('', error.response.data.message)
                })
        },
        resendOtp({ commit }) {
            axiosInstance.post('email/verification-resend', {}, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 200) {
                        commit('actionDone', response)
                    } else if (response.data.status === 422) {
                        sweetAlert.showSweetError('', response.data.message)
                    }
                }).catch((error) => {
                    console.log(error)
                })
        },
        resetPassword({ commit }, data) {
            axiosInstance.put('user/password', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 200) {
                        commit('actionDone', response)
                        sweetAlert.showSweetAlert('', 'Your Password has been changed successfully')
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        alert('Something went wrong! Please try again');
                        sweetAlert.showSweetError('', response.data.message)
                    }
                    // mdk1QbfzAP
                })
                .catch((error) => {
                    console.error(error);
                    sweetAlert.showSweetError('', error.response.data.message)
                })
        },
        fetchAllNotifications({ commit }) {
            axiosInstance.get('notifications', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setAllNotification', response.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        alert('Something went wrong! Please try again');
                        sweetAlert.showSweetError('', response.data.message)
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
        },
        markAsRead({ commit, dispatch }, data) {
            axiosInstance.put(`notifications/${data}`, {}, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('actionDone')
                        dispatch('fetchAllNotifications')
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        alert('Something went wrong! Please try again');
                        sweetAlert.showSweetError('', response.data.message)
                    }
                })
                .catch((error) => {
                    console.error(error);
                    sweetAlert.showSweetError('', error.response.data.message)
                })
        },
        fetchWishlist({ commit }) {
            axiosInstance.get('wishlists', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setWishlist', response.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        alert('Something went wrong! Please try again');
                    }
                })
                .catch(error => {
                    if (error.response && error.response.status === 401) {
                        // router.push('/login-page');
                        console.log('unauthe')
                    } else {
                        console.error('Error:', error);
                        alert('Something went wrong! Please try again');
                    }
                });
        },
        addToWishlist({ dispatch }, data) {
            axiosInstance.post('wishlists', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        sweetAlert.showSweetAlert('Yay!', 'Wishlist Updated')
                        dispatch('fetchWishlist')
                    } else if (response.data.status === 'error') {
                        alert(response.data.message)
                    } else {
                        alert('Something went wrong! Please try again')
                    }
                }).catch(error => {
                    if (error.response && error.response.status === 401) {
                        // Redirect the user to the login page
                        router.push('/login-page');
                    } else {
                        console.error('Error:', error);
                        alert('Something went wrong! Please try again');
                    }
                });
        },
        removeFromWishlist({ dispatch }, data) {
            axiosInstance.delete(`wishlists/${data}`, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        dispatch('fetchWishlist')
                        sweetAlert.showSweetAlert('', 'Removed from wishlist')
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        alert('Something went wrong! Please try again');
                    }
                })
        },
        fetchCart({ commit }) {
            axiosInstance.get('carts', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.status === 200) {
                        if (response.data.status === 'ok') {
                            commit('setCart', response.data.data)
                        } else if (response.data.status === 'error') {
                            alert(response.data.message);
                        } else {
                            alert('Something went wrong! Please try again');
                        }
                    } else {
                        alert('Failed to fetch cart. Please try again later.');
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        addToCart({ commit, dispatch }, data) {
            // const data = {
            //     product_sid: localStorage.getItem('product_sid'),
            //     option_sid: localStorage.getItem('option_sid'),
            //     range_sid: localStorage.getItem('range_sid'),
            //     quantity: localStorage.getItem('quantity'),
            // }
            // console.log('atc', data)
            if (data.option_sid && data.product_sid && data.quantity && data.range_sid) {
                axiosInstance.post('carts', data, { headers: { "Authorization": `Bearer ${token}` } })
                    .then((response) => {
                        if (response.data.status === 'ok') {
                            commit('showAtcButton')
                            dispatch('fetchCart');
                            sweetAlert.showSweetAlert('Yay!', 'Product Added to Cart')
                            console.log(response)
                        } else if (response.data.status === 'error') {
                            alert(response.data.message);
                            sweetAlert.showSweetError('Oops!', 'Something went wrong')
                        } else {
                            alert('Something went wrong! Please try again');
                        }

                    })
                    .catch(error => {
                        if (error.response && error.response.status === 401) {
                            router.push('/login-page');
                        } else {
                            console.error('Error:', error);
                            sweetAlert.showSweetError('Oops!', 'Something went wrong')
                        }
                    });
            } else {
                sweetAlert.showSweetError('Oh!', 'Please select color & size')
            }
        },
        removeCartProduct({ dispatch }, data) {
            console.log('store', data)
            axiosInstance.put(`carts/${data.cartId}`, data, { headers: { "Authorization": `Bearer ${token}` } })
                .then(() => {
                    dispatch('fetchCart')
                }).catch(error => {
                    console.log(error);
                })
        },
        removeFromCartSaveToWishlist({ dispatch }, data) {
            axiosInstance.post('wishlists', { product_sid: data.product_sid }, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    // commit('actionDone', response)
                    if (response.data.status === 'ok') {
                        axiosInstance.put(`carts/${data.cartId}`, data, { headers: { "Authorization": `Bearer ${token}` } })
                            .then(() => {
                                dispatch('fetchCart')
                            })
                    } else if (response.data.status === 'error') {
                        alert(response.data.message)
                    } else {
                        alert('Something went wrong! Please try again')
                    }
                })
                .catch(error => {
                    if (error.response && error.response.status === 401) {
                        // Redirect the user to the login page
                        router.push('/login-page');
                    } else {
                        console.error('Error:', error);
                        alert('Something went wrong! Please try again');
                    }
                });

        },

        fetchCheckout({ commit }) {
            axiosInstance.get('checkout', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.status === 200) {
                        if (response.data.status === 'ok') {
                            commit('setCheckout', response.data.data)
                        } else if (response.data.status === 'error') {
                            alert(response.data.message);
                        } else {
                            alert('Something went wrong! Please try again tetet');
                        }
                    }
                }).catch(error => {
                    if (error.response && error.response.status === 403) {
                        console.log(error.response.data.message)
                        alert(error.response.data.message)
                        sweetAlert.showEmailError('Oops', 'Your email address is not verified')
                    }
                })
        },
        proceedToCheckout({ dispatch }, data) {
            axiosInstance.post('checkout', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        dispatch('fetchCart')
                    } else if (response.data.error === 'error') {
                        alert(response.data.message)
                    } else {
                        alert('Something went wrong! Please try again');
                    }
                }).catch(error => {
                    console.log(error);
                })
        },

        fetchAddresses({ commit, dispatch }) {
            axiosInstance.get('addresses', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.status === 200) {
                        // if (response.status === 'ok') {
                        commit('setAddresses', response.data.data)
                        dispatch('fetchCheckout')
                        // } else if (response.data.status === 'error') {
                        //     alert(response.data.message);
                        // } else {
                        //     alert('Something went wrong! Please try again');
                        // }
                    } else {
                        alert('Failed to fetch cart. Please try again later.');
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        showAddress({ commit }, data) {
            axiosInstance.get(`addresses/${data}`, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    // if (response.status === 'ok') {
                    commit('showAddress', response.data)
                    // } else if (response.data.status === 'error') {
                    //     alert(response.data.message);
                    // } else {
                    //     alert('Something went wrong! Please try again');
                    // }
                })
        },
        createAddress({ commit }, data) {
            axiosInstance.post('addresses', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                    sweetAlert.showSweetAlert('Yay!', 'You have added a new address');
                    // router.push('/my-address')
                    router.go(-1);
                }).catch((error) => {
                    console.log(error)
                    sweetAlert.showSweetError('', error.response.data.message)
                })
        },
        updateAddress({ commit }, data) {
            axiosInstance.put(`addresses/${data.address_sid}`, data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                })
        },
        deleteAddress({ commit, dispatch }, data) {
            axiosInstance.delete(`addresses/${data}`, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                    dispatch('fetchAddresses')
                })
        },
        setDefaultAddress({ commit, dispatch }, data) {
            axiosInstance.put(`make_default/${data.addressId}`, {}, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                    dispatch('fetchAddresses')
                })
        },
        // fetchOrders({ commit }) {
        //     axiosInstance.get('orderproducts', { headers: { "Authorization": `Bearer ${token}` } })
        //         .then((response) => {
        //             if (response.data.status === 'ok') {
        //                 commit('setOrders', response.data.data)
        //             } else if (response.data.status === 'error') {
        //                 alert(response.data.message);
        //             } else {
        //                 alert('Something went wrong! Please try again');
        //             }
        //         }).catch(error => {
        //             if (error.response && error.response.status === 401) {
        //                 router.push('/login-page');
        //             } else {
        //                 console.error('Error:', error);
        //                 alert('Something went wrong! Please try again');
        //             }
        //         })
        // },
        cancelOrder({ commit }, data) {
            axiosInstance.put(`orderproducts/${data.order_sid}`, { status: data.status, reason: data.reason }, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                })
        },
        // fetchOrdersByStatus({ commit }, data) {
        //     axiosInstance.get('orderproducts?page=' + data.page + '&status=' + data.status, { headers: { "Authorization": `Bearer ${token}` } })
        //         .then((response) => {
        //             if (response.data.status === 'ok') {
        //                 commit('setOrdersByStatus', response.data.data.data)
        //             } else if (response.data.status === 'error') {
        //                 alert(response.data.message);
        //             } else {
        //                 alert('Something went wrong! Please try again');
        //             }
        //         })
        //         .catch(error => {
        //             if (error.response && error.response.status === 401) {
        //                 router.push('/login-page');
        //             } else {
        //                 console.error('Error:', error);
        //                 alert('Something went wrong! Please try again');
        //             }
        //         })
        // },
        // fetchFilteredOrders({ commit }, data) {
        //     axiosInstance.get('orderproducts?page=' + data.page + '&filter=' + data.filter, { headers: { "Authorization": `Bearer ${token}` } })
        //         .then((response) => {
        //             if (response.data.status === 'ok') {
        //                 commit('setFilteredOrders', response.data.data.data)
        //             } else if (response.data.status === 'error') {
        //                 alert(response.data.message);
        //             } else {
        //                 alert('Something went wrong! Please try again');
        //             }
        //         })
        // },

        fetchCancelledOrderProducts({ commit }, data) {
            axiosInstance.get('orders/' + data.filter, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('setFilteredOrders', response.data.data.order_products)
                })
        },
        fetchOrders({ commit }, data) {
            axiosInstance.get('orderproducts', {
                params: {
                    page: data.page,
                    status: data.status,
                    filter: data.filter
                },
                headers: { "Authorization": `Bearer ${token}` }
            })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setFilteredOrders', response.data.data.data);
                        // if (data.filter) {
                        // } else {
                        //     commit('setOrdersByStatus', response.data.data.data);
                        // }
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        alert('Something went wrong! Please try again');
                    }
                })
                .catch(error => {
                    if (error.response && error.response.status === 401) {
                        router.push('/login-page');
                    } else {
                        console.error('Error:', error);
                        alert('Something went wrong! Please try again');
                    }
                });
        },
        showOrder({ commit }, data) {
            axiosInstance.get(`orderproducts/${data}`, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setOrder', response.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        alert('Something went wrong! Please try again');
                    }
                }).catch(error => {
                    if (error.response && error.response.status === 401) {
                        router.push('/login-page');
                    } else {
                        console.error('Error:', error);
                        alert('Something went wrong! Please try again');
                    }
                })
        },
        updateCartProductQuantity({ commit }, data) {
            axiosInstance.put(`carts/${data.cartId}`, data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                })
        },

        fetchUserDetail({ commit }) {
            axiosInstance.get('user', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.status === 200) {
                        // if (response.status === 'ok') {
                        commit('setUser', response.data)
                    } else if (response.data.status === 'error') {
                        //     alert(response.data.message);
                        // } else {
                        //     alert('Something went wrong! Please try again');
                        // }
                    }
                    else {
                        // Handle non-200 responses here
                        alert('Failed to fetchUserDetail. Please try again later.');
                    }
                })
                .catch(error => {
                    console.log(error);
                    // sweetAlert.showSweetError('', error.reponse.data.message)
                })
        },
        logout({ commit, dispatch }) {
            axiosInstance.post('logout', {}, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('showLogoutBtn');
                        dispatch('fetchUserDetail')
                        localStorage.removeItem('token');
                        sweetAlert.showSweetAlert('', 'Logged out successfully')
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        alert('Something went wrong! Please try again');
                    }
                })
        },
        subscribeNotification({ commit }, data) {
            axiosInstance.post('push_store', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                })
                .catch((error) => {
                    console.log(error)
                    // sweetAlert.showSweetError('', error.response.data.message)
                })
        },
        fetchIntimationNotifications({ commit }) {
            axiosInstance.get('intimations/notifications', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setIntimationNotifications', response.data.data)
                    } else if (response.data.error === 'error') {
                        alert(response.data.message)
                    } else {
                        console.log('', response.data.error)
                        alert('Somthing went wrong while fetching fetchIntimationNotifications')
                    }
                }).catch((error) => {
                    console.log(error)
                })
        }
    }
}