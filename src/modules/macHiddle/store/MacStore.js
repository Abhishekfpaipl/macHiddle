import axiosInstance from "../axiosInstance";
import router from '@/router/index.js';
import sweetAlert from "../mixins/sweet-alert";
export default {
    namespaced: true,
    state: {
        category: [
            {
                id: 1,
                name: 'Knitwear',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Knitwear.webp',
                bgColor: '#9CA9BE',
            },
            {
                id: 2,
                name: 'Dresses',
                order: '1',
                title: 'Discover Now',
                img: 'img/banners/Dresses.webp',
                bgColor: '#F37878',
            },
            {
                id: 3,
                name: 'Tops',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Tops.webp',
                bgColor: '#966C3B',
            },
            {
                id: 4,
                name: 'T-Shirts',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/T-Shirts.webp',
                bgColor: '#D7C0AE',
            },
            {
                id: 5,
                name: 'Jumpsuits',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Jumpsuits.webp',
                bgColor: '#DFFFD8',
            },
            {
                id: 6,
                name: 'Shirts',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/Shirts.webp',
                bgColor: '#B4E4FF',
            },
            {
                id: 7,
                name: 'Co-ords',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Co-ords.webp',
                bgColor: '#FFACAC',
            },
            {
                id: 8,
                name: 'Bottoms',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/Bottoms.webp',
                bgColor: '#F8CBA6',
            },
        ],
        categories: [],
        showCategory: [],
        showCategoryFilter: {},
        banners: [],
        product: {},
        collections: [],
        allProducts: [],
        savedProducts: [],
        reviews: [
            {
                id: 1,
                show: false,
                imgr: 'img/users/1.png',
                name: 'Doja',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Using machiddle.com has given me the opportunity to sell more products, and my customers have increased greatly over the period I joined as a Retailer."'
            },
            {
                id: 2,
                show: false,
                imgr: 'img/users/2.png',
                name: 'Kanye',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
            },
            {
                id: 3,
                show: false,
                imgr: 'img/users/3.png',
                name: 'Travis Scott',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
            },
            {
                id: 4,
                show: false,
                imgr: 'img/users/4.png',
                name: 'Lil pump',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
            },
            {
                id: 5,
                show: false,
                imgr: 'img/users/5.png',
                name: 'Post Malone',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
            },
            {
                id: 6,
                show: false,
                imgr: 'img/users/6.png',
                name: 'Travis Scott',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
            },
            {
                id: 7,
                show: false,
                imgr: 'img/users/7.png',
                name: '21 Savage',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
            },
            {
                id: 8,
                show: false,
                imgr: 'img/users/8.png',
                name: 'J.Cole',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
            },
            {
                id: 9,
                show: false,
                imgr: 'img/users/9.png',
                name: 'Lil Wayne',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
            },
            {
                id: 10,
                show: false,
                imgr: 'img/users/4.png',
                name: 'Lil pump',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
            },
            {
                id: 11,
                show: false,
                imgr: 'img/users/1.png',
                name: 'Drake',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
            },
            {
                id: 12,
                show: false,
                imgr: 'img/users/10.png',
                name: 'Don Toliver',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
            },
            {
                id: 13,
                show: false,
                imgr: 'img/users/8.png',
                name: 'Pop Smoke',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
            },
            {
                id: 14,
                show: false,
                imgr: 'img/users/6.png',
                name: 'Jack',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
            },
        ],
        action: false,
        searchProducts: [],
        showCollection: [],
        showCollectionFilter: {},
        searchFilters: [],
        check: {},
        similarProducts: [],
        lastLevelCategory: [],
    },
    getters: {
        getProducts: state => state.products,
        getBanners: state => state.banners,
        getCollections: state => state.collections,
        getShowCollection: state => state.showCollection,
        getShowProduct: state => state.product,
        getAllProducts: state => state.allProducts,
        getSavedProducts: state => state.savedProducts,
        getCategories: state => state.categories,
        getShowCategory: state => state.showCategory,
        getCategory: state => state.category,
        getCompletedOrders: state => state.completedOrders,
        getOrders: state => state.orders,
        getReviews: state => state.reviews,
        getSearchProducts: state => state.searchProducts,
        getShowCategoryFilter: state => state.showCategoryFilter,
        getShowCollectionFilter: state => state.showCollectionFilter,
        getSearchFilters: state => state.searchFilters,
        getCheck: state => state.check,
        getSimilarProducts: state => state.similarProducts,
        getLastLevelCategory: state => state.lastLevelCategory,
    },
    mutations: {
        setBanners(state, data) {
            state.banners = data
        },
        setProduct(state, data) {
            state.product = data
        },
        setAllproducts(state, products) {
            state.allProducts = [...state.allProducts, ...products];
            // state.allProducts.push(...products);
        },
        // setAllproducts(state, products) {
        //     products.forEach(product => {
        //         // Check if the product with the same slug already exists in allProducts
        //         const existingProductIndex = state.allProducts.findIndex(existingProduct => existingProduct.slug === product.slug);

        //         // If the product does not exist, add it to the allProducts array
        //         if (existingProductIndex === -1) {
        //             state.allProducts.push(product);
        //         }
        //     });
        // },

        setCollections(state, data) {
            state.collections = data
        },
        setShowCollection(state, data) {
            state.showCollection = [...state.showCollection, ...data]
        },
        setShowCollectionFilter(state, data) {
            state.showCollectionFilter = { ...state.showCollectionFilter, ...data };
        },
        setFilteredCollection(state, data) {
            state.showCollection = { ...state.showCollection, ...data }
        },
        setWishlist(state, data) {
            state.wishlist = data
        },
        setCategories(state, data) {
            state.categories = data
        },
        setShowCategory(state, data) {
            state.showCategory = data
        },
        // setFilteredCategory(state, data) {
        //     state.showCategory = data
        // },
        setShowCategoryFilter(state, data) {
            state.showCategoryFilter = { ...state.showCategoryFilter, ...data };
        },
        toggleReview(state, review) {
            let index = state.reviews.indexOf(review);
            state.reviews.forEach(user_review => {
                user_review.show = false
            });
            state.reviews[index].show = true
        },
        actionDone(state) {
            state.action = true;
        },
        searchProducts(state, data) {
            state.searchProducts = data
        },
        setSearchFilters(state, data) {
            state.searchFilters = data
        },
        setFilteredSearch(state, data) {
            state.searchFilters = data
        },
        setCheck(state, data) {
            state.check = { ...state.check, ...data }
        },
        setSimilarProducts(state, data) {
            state.similarProducts = data
        },
        setLastLevelCategory(state, data) {
            state.lastLevelCategory = data
        }
    },
    actions: {
        registerUser({ commit }, data) {
            axiosInstance.post('register', data)
                .then((response) => {
                    commit('actionDone')
                    // sweetAlert.showSweetAlert('', 'You have been registered successfully')
                    // console.log('data sent', response)
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    console.log('Registered successfully. Token stored:', token);
                    router.push('/email-verification-page')
                }).catch((error) => {
                    console.log('error', error)
                    sweetAlert.showSweetError('', error.response.data.message)
                })
        },
        forgotPassword({ commit }, data) {
            axiosInstance.post('forgot-password', data)
                .then((response) => {
                    commit('actionDone',)
                    sweetAlert.showSweetAlert('', response.data.message);
                    console.log(response);
                })
                .catch((error) => {
                    console.error(error);
                    sweetAlert.showSweetError('', error.response.data.message)
                });
        },

        fetchBanners({ commit }) {
            axiosInstance.get('banners').then(response => {
                // console.log('store', response.data.data)
                commit('setBanners', response.data.data)
            })
                .catch((error) => { console.error('fetchBanners:', error) })
        },
        fetchCollections({ commit }) {
            axiosInstance.get('collections').then(response => {
                console.log('collections', response.data.data)
                commit('setCollections', response.data.data)
            })
        },
        fetchShowCollection({ commit, dispatch }, { collectionId, page }) {
            axiosInstance.get('collections/' + collectionId + '?page=' + page)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setShowCollection', response.data.data.data)
                        dispatch('fetchShowCollectionFilter', { collectionId, page })
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCollection');
                });
        },
        fetchShowCollectionFilter({ commit }, { collectionId, page }) {
            console.log('showcatFilter', collectionId, page)
            axiosInstance.get('collections/' + collectionId + '?page=' + page)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setShowCollectionFilter', response.data.data.extraData)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        fetchProduct({ commit }, data) {
            axiosInstance.get('products/' + data).then(response => {
                commit('setProduct', response.data.data)
            })
        },
        fetchProducts({ commit, dispatch }, page) {
            axiosInstance.get(`products?page=${page}`).then((response) => {
                if (response.data.status === 'ok') {
                    const products = response.data.data.data;
                    if (products.length > 0) {
                        commit('setAllproducts', products);
                        dispatch('fetchProductsCheck', page)
                    } else {
                        console.warn('No products found in response.');
                    }
                } else if (response.data.status === 'error') {
                    alert(response.data.message);
                } else {
                    alert('Something went wrong! Please try again');
                }
            });
        },
        fetchProductsCheck({ commit }, page) {
            axiosInstance.get(`products?page=${page}`).then((response) => {
                if (response.data.status === 'ok') {
                    commit('setCheck', response.data.data);
                } else if (response.data.status === 'error') {
                    alert(response.data.message);
                } else {
                    alert('Something went wrong! Please try again');
                }
            });
        },

        // fetchProducts({ commit }, data) {
        //     axiosInstance.get('products', {
        //         params: {
        //             page: data.page,
        //             search: data.search
        //         },
        //         headers: { "Authorization": `Bearer ${token}` }
        //     })
        //         .then((response) => {
        //             if (response.data.status === 'ok') {
        //                 commit('setAllproducts', response.data.data.data);
        //             } else if (response.data.status === 'error') {
        //                 alert(response.data.message);
        //             } else {
        //                 console.error('Unexpected response status:', response.data.status);
        //                 alert('Unexpected response from the server! Please try again later.');
        //             }
        //         })
        //         .catch(error => {
        //             console.error('Error:', error);
        //             alert('Something went wrong! Please try again');
        //         });
        // },

        fetchCategories({ commit }) {
            axiosInstance.get('categories')
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setCategories', response.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        alert('Something went wrong! Please try again');
                    }
                })
                .catch((error) => {
                    console.error('fetchCategories:', error);
                })
        },
        fetchShowCategory({ commit, dispatch }, { categoryId, page }) {
            axiosInstance.get('categories/' + categoryId + '?page=' + page)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setShowCategory', response.data.data.data)
                        dispatch('fetchShowCategoryFilter', { categoryId, page })
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategory');
                });
        },
        fetchShowCategoryFilter({ commit }, { categoryId, page }) {
            axiosInstance.get('categories/' + categoryId + '?page=' + page)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setShowCategoryFilter', response.data.data.extraData)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        applyFilters({ commit }, data) {
            axiosInstance.get('categories/' + data.categoryId + '?page=' + data.page + '&options=' + data.colors + '&ranges=' + data.sizes + '&attributes=' + data.attributes + '&categories=' + data.category)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        // commit('setFilteredCategory', response.data.data.data)
                        commit('setShowCategory', response.data.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        applyCollectionFilters({ commit }, data) {
            axiosInstance.get('collections/' + data.collectionId + '?page=' + data.page + '&options=' + data.colors + '&ranges=' + data.sizes + '&attributes=' + data.attributes)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setFilteredCollection', response.data.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        applyCollectionSort({ commit }, { data, orderBy, direction }) {
            const queryParams = new URLSearchParams({
                page: data.page,
                order_by: orderBy,
                direction: direction
            });

            axiosInstance.get(`collections/${data.collectionId}?${queryParams}`)
                .then((response) => {
                    const responseData = response.data;
                    if (responseData.status === 'ok') {
                        commit('setFilteredCollection', responseData.data);
                    } else if (responseData.status === 'error') {
                        // Handle error response
                        console.error('Error:', responseData.message);
                        // Show error message in UI or log to console
                    } else {
                        console.error('Unexpected response status:', responseData.status);
                        // Show unexpected response message in UI or log to console
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle network request errors
                    // Show error message in UI or log to console
                });
        },
        applyCategorySort({ commit }, { data, orderBy, direction }) {
            const queryParams = new URLSearchParams({
                page: data.page,
                order_by: orderBy,
                direction: direction
            });

            axiosInstance.get(`categories/${data.categoryId}?${queryParams}`)
                .then((response) => {
                    const responseData = response.data;
                    if (responseData.status === 'ok') {
                        commit('setShowCategoryFilter', responseData.data);
                    } else if (responseData.status === 'error') {
                        // Handle error response
                        console.error('Error:', responseData.message);
                        // Show error message in UI or log to console
                    } else {
                        console.error('Unexpected response status:', responseData.status);
                        // Show unexpected response message in UI or log to console
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle network request errors
                    // Show error message in UI or log to console
                });
        },

        clearShowCategory({ commit }) {
            commit('setShowCategory', []);
        },
        toggleReview({ commit }, review) {
            commit("toggleReview", review);
        },
        fetchSearchProducts({ commit, dispatch }, data) {
            axiosInstance.get(`product/search?search=${data.search}&page=${data.page}`)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('searchProducts', response.data.data.data)
                        dispatch('fetchSearchProductsFilter', data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message)
                    } else {
                        alert('Something went wrong! Please try again')
                    }
                })
        },
        fetchSearchProductsFilter({ commit }, data) {
            axiosInstance.get(`product/search?search=${data.search}&page=${data.page}`)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setSearchFilters', response.data.data.extraData)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        applySearchFilters({ commit }, data) {
            axiosInstance.get('product/search?search=' + data.search + '&page=' + data.page + '&options=' + data.colors + '&ranges=' + data.sizes + '&attributes=' + data.attributes)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setFilteredSearch', response.data.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        applySearchSort({ commit }, { data, orderBy, direction }) {
            const queryParams = new URLSearchParams({
                search: data.search,
                page: data.page,
                order_by: orderBy,
                direction: direction
            });

            axiosInstance.get(`product/search?${queryParams}`)
                .then((response) => {
                    const responseData = response.data;
                    if (responseData.status === 'ok') {
                        commit('setFilteredCollection', responseData.data);
                    } else if (responseData.status === 'error') {
                        // Handle error response
                        console.error('Error:', responseData.message);
                        // Show error message in UI or log to console
                    } else {
                        console.error('Unexpected response status:', responseData.status);
                        // Show unexpected response message in UI or log to console
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle network request errors
                    // Show error message in UI or log to console
                });
        },
        fetchSimilarProducts({ commit }, data) {
            axiosInstance.get('categories/similarproducts/' + data)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setSimilarProducts', response.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again fetchSimilarProducts');
                });
        },
        fetchLastLevelCategory({ commit }) {
            axiosInstance.get('categories/lastlevel/categories')
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setLastLevelCategory', response.data.data)
                    } else if (response.data.status === 'errror') {
                        alert(response.data.message)
                    } else {
                        console.error('Unexpected response from lastLevelCategory', response.data.status);
                    }
                }).catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again fetchLastLevelCategory');
                })
        }
    }
}