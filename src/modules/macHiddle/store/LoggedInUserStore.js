import axiosInstance from "../axiosInstance";
import router from '@/router';
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
        filteredOrders: []
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
    },
    mutations: {
        actionDone(state) {
            state.action = true;
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
        }
    },
    actions: {
        loginUser({ commit }, data) {
            axiosInstance.post('login', data)
                .then((response) => {
                    commit('actionDone', response.data);
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    console.log('Login successful. Token stored:', token);
                    router.push('/')
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        },
        resetPassword({ commit }, data) {
            axiosInstance.put('user/password', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
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
                        // Redirect the user to the login page
                        router.push('/login-page');
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
                        sweetAlert.showSweetAlert('Yay!', 'Added to Wishlist')
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
        addToCart({ dispatch }, data) {
            axiosInstance.post('carts', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
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
                        // Redirect the user to the login page
                        router.push('/login-page');
                    } else {
                        console.error('Error:', error);
                        sweetAlert.showSweetError('Oops!', 'Something went wrong')
                    }
                });
        },
        removeCartProduct({ dispatch }, data) {
            console.log('store', data)
            axiosInstance.put(`carts/${data.cartId}`, data, { headers: { "Authorization": `Bearer ${token}` } })
                .then(() => {
                    dispatch('fetchCart')
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
        proceedToCheckout({ commit }, data) {
            axiosInstance.post('checkout', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                })
        },

        fetchAddresses({ commit }) {
            axiosInstance.get('addresses', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.status === 200) {
                        // if (response.status === 'ok') {
                        commit('setAddresses', response.data.data)
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
                })
        },
        updateAddress({ commit }, data) {
            axiosInstance.put(`addresses/${data.address_sid}`, data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                })
        },
        deleteAddress({ commit }, data) {
            axiosInstance.delete(`addresses/${data}`, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                })
        },
        setDefaultAddress({ commit }, data) {
            axiosInstance.put(`make_default/${data.addressId}`, {}, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
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
            axiosInstance.put(`orderproducts/${data.order_sid}`, { status: 'cancelled', reason: data.reason }, { headers: { "Authorization": `Bearer ${token}` } })
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
        verifyEmail({ commit }, data) {
            axiosInstance.post('email/verify', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                })
        },
        resendOtp({ commit }) {
            axiosInstance.post('email/verification-resend', {}, { headers: { "Authorization": `Bearer ${token}` } })
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
                        // } else if (response.data.status === 'error') {
                        //     alert(response.data.message);
                        // } else {
                        //     alert('Something went wrong! Please try again');
                        // } 
                    }
                    else {
                        // Handle non-200 responses here
                        alert('Failed to fetch cart. Please try again later.');
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        logout({ commit }) {
            axiosInstance.post('logout', {}, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('actionDone');
                        localStorage.removeItem('token');
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        alert('Something went wrong! Please try again');
                    }
                })
        },
    }
}