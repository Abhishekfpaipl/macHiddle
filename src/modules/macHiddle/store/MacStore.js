import axiosInstance from "../axiosInstance";
let token = localStorage.getItem('token');
export default {
    namespaced: true,
    state: {
        // categories: [
        //     {
        //         id: 1,
        //         name: 'Knitwear',
        //         order: '0',
        //         title: 'Explore Now',
        //         img: 'img/banners/Knitwear.webp',
        //         bgColor: '#9CA9BE',
        //     },
        //     {
        //         id: 2,
        //         name: 'Dresses',
        //         order: '1',
        //         title: 'Discover Now',
        //         img: 'img/banners/Dresses.webp',
        //         bgColor: '#F37878',
        //     },
        //     {
        //         id: 3,
        //         name: 'Tops',
        //         order: '0',
        //         title: 'Explore Now',
        //         img: 'img/banners/Tops.webp',
        //         bgColor: '#966C3B',
        //     },
        //     {
        //         id: 4,
        //         name: 'T-Shirts',
        //         order: '1',
        //         title: 'Explore Now',
        //         img: 'img/banners/T-Shirts.webp',
        //         bgColor: '#D7C0AE',
        //     },
        //     {
        //         id: 5,
        //         name: 'Jumpsuits',
        //         order: '0',
        //         title: 'Explore Now',
        //         img: 'img/banners/Jumpsuits.webp',
        //         bgColor: '#DFFFD8',
        //     },
        //     {
        //         id: 6,
        //         name: 'Shirts',
        //         order: '1',
        //         title: 'Explore Now',
        //         img: 'img/banners/Shirts.webp',
        //         bgColor: '#B4E4FF',
        //     },
        //     {
        //         id: 7,
        //         name: 'Co-ords',
        //         order: '0',
        //         title: 'Explore Now',
        //         img: 'img/banners/Co-ords.webp',
        //         bgColor: '#FFACAC',
        //     },
        //     {
        //         id: 8,
        //         name: 'Bottoms',
        //         order: '1',
        //         title: 'Explore Now',
        //         img: 'img/banners/Bottoms.webp',
        //         bgColor: '#F8CBA6',
        //     },
        // ],
        categories:[],
        banners: [],
        product: {},
        collections: [],
        allProducts: [],
        savedProducts: [],
        completedOrders: [
            {
                id: 1,
                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                oid: '4526589182365',
                name: 'Stylish Western Girl Trouser',
                datetime: '10 June, 12:30 pm',
                suboid: '4526589182365',
                sku: '8',
                unit: '200',
                amount: '240000',
                catelog_id: 1,
                status: 'Delivered',
                payment: [
                    {
                        amount: '250500 ',
                        mode: 'UPI',
                        details: 'Uploaded',
                        status: 'Paid'
                    }
                ],
                delivery: [
                    {
                        date: '18-June-23',
                        mode: 'Pickup',
                        status: 'Pending',
                        address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
                    }
                ],
                orderSummary: [
                    {
                        oid: '4526589182365',
                        charges: '2,88,000',
                        catalogs: '2',
                        items: '37',
                        taxes: '28,000',
                        qty: '220',
                        status: 'Deliverd',
                        address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
                    }
                ],
                subproduct: [
                    {
                        id: 1,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                        skuid: '957223654824',
                        size: 'S',
                        color: 'Red',
                        pcs: '20',
                        amount: '72,000',
                    },
                    {
                        id: 2,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                        skuid: '655323654824',
                        size: 'L',
                        color: 'Blue',
                        pcs: '15',
                        amount: '72,000',
                    },
                ]
            },
            {
                id: 2,
                img: 'https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp',
                oid: '4526589182365',
                name: 'Spun Twill 3 Pc',
                datetime: '10 June, 12:30 pm',
                suboid: '4526589182365',
                sku: '8',
                unit: '200',
                amount: '240000',
                catelog_id: 5,
                status: 'Delivered',
                subproduct: [
                    {
                        id: 1,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '25'
                    },
                    {
                        id: 2,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '25'
                    },
                ]
            },
        ],
        orders: [
            {
                id: 1,
                oid: '5426308975',
                date: '14',
                amount: '2,88,000',
                month: 'Jun',
                item: '25',
                qty: '200',
                statusone: 'Pending',
                status: 'Unpaid',
                days: '7',
                dispatch: '2',
                deliver: '2',
                datetime: '10 June, 5.15 PM',
                invoiceno: '152364',
                payment: [
                    {
                        amount: '288000 ',
                        mode: 'UPI',
                        details: 'Uploaded',
                        status: 'Unpaid'
                    }
                ],
                orderSummary: [
                    {
                        status: 'In-Transit',
                        charges: '900',
                        taxes: '28,000',
                        qty: '2',
                        date: '18-June-23',
                        address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
                    }
                ],
                delivery: [
                    {
                        mode: 'Pickup',
                        status: 'Pending',
                        address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
                    }
                ],
                products: [
                    {
                        suboid: '12542630',
                        name: 'Crochet Skirt Two-Piece Outfits pack of 2',
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                        style: "#23567",
                        amount: '1,20,000',
                        rate: '1,200',
                        sku: '25',
                        qty: '1',
                        subproduct: [
                            {
                                id: 1,
                                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                                skuid: '957223654824',
                                size: 'S',
                                color: 'Red',
                                pcs: '20'
                            },
                            {
                                id: 2,
                                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                                skuid: '6453654824',
                                size: 'M',
                                color: 'Blue',
                                pcs: '39'
                            },
                        ]
                    },
                    {
                        suboid: 'PID 542630',
                        name: ' Two-Piece Outfits pack of 2',
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                        style: "#23568",
                        amount: '1,68,000',
                        rate: '840',
                        sku: '30',
                        qty: '2',
                        subproduct: [
                            {
                                id: 1,
                                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                                skuid: '957223654824',
                                size: 'S',
                                color: 'Red',
                                pcs: '20'
                            },
                            {
                                id: 2,
                                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                                skuid: '6453654824',
                                size: 'M',
                                color: 'Blue',
                                pcs: '39'
                            },
                        ]
                    }
                ]
            },
            {
                id: 2,
                date: '15',
                amount: '2,88,000',
                month: 'Jul',
                oid: '54263152365',
                statusone: 'Shipped',
                status: 'Unpaid',
                days: '7',
                dispatch: '2',
                deliver: '2',
                datetime: '09 June, 6.15 PM',
                invoiceno: '152365',
                payment: [
                    {
                        amount: '720000',
                        mode: 'UPI',
                        details: 'Uploaded',
                        status: 'Unpaid'
                    }
                ],
                orderSummary: [
                    {
                        charges: '2,88,000',
                        catalogs: '2',
                        items: '24',
                        date: '18-June-23',
                    }
                ],
                delivery: [
                    {
                        mode: 'Pickup',
                        status: 'Shipped',
                        address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
                    }
                ],
                products: [
                    {
                        suboid: 'PID 542631',
                        name: 'Crochet Skirt Two-Piece Outfits pack of 2',
                        img: 'img/icons/pd1.png',
                        amount: '2000',
                        sku: '562',
                        unit: '15'
                    },
                    {
                        suboid: 'PID 542631',
                        name: 'Crochet Skirt Two-Piece Outfits pack of 2',
                        img: 'img/icons/pd2.png',
                        amount: '2000',
                        sku: '562',
                        unit: '15'
                    }
                ]
            },
            {
                id: 3,
                date: '14',
                amount: '298000',
                month: 'Aug',
                oid: '5426326574',
                item: '25',
                qty: '200',
                statusone: 'Delivered',
                status: 'Rejected',
                days: '7',
                dispatch: '2',
                deliver: '2',
                datetime: '09 June, 6.15 PM',
                invoiceno: '152365',
                payment: [
                    {
                        amount: '720000',
                        mode: 'UPI',
                        details: 'Uploaded',
                        status: 'Unpaid'
                    }
                ],
                orderSummary: [
                    {
                        charges: '30000',
                        suborder: '3',
                        items: '24',
                        date: '18-June-23',
                    }
                ],
                delivery: [
                    {
                        mode: 'Pickup',
                        status: 'Shipped',
                        address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
                    }
                ],
                products: [
                    {
                        suboid: 'PID 542631',
                        name: 'Crochet Skirt Two-Piece Outfits pack of 2',
                        img: 'img/icons/pd1.png',
                        amount: '2000',
                        sku: '562',
                        unit: '15'
                    },
                    {
                        suboid: 'PID 542631',
                        name: 'Crochet Skirt Two-Piece Outfits pack of 2',
                        img: 'img/icons/pd2.png',
                        amount: '2000',
                        sku: '562',
                        unit: '15'
                    }
                ]
            },
        ],
        cartProduct: [
            {
                id: 1,
                img: 'https://img101.urbanic.com/v1/goods-pic/30c3cd67c87e406ea4bf97dd98602a18UR_w1440_q90.webp',
                name: 'Ruffle A-Line Dress',
                style: "#23567",
                rate: '1,200',
                sku: 25,
                qty: '100',
                amount: '1,20,000',
            },
            {
                img: 'https://img101.urbanic.com/v1/goods-pic/636e7f21f26842a28f1a6190ac294862UR_w1440_q90.webp',
                id: 2,
                name: 'Texture Shorts Co-ords pack of 2',
                style: "#23568",
                rate: '840',
                sku: 30,
                qty: '200',
                amount: '1,68,000',
            },
        ],
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
        cart: [],
        wishlist: [],
        action: false,
    },
    getters: {
        getProducts: state => state.products,
        getProduct: (state) => (productId) => {
            let index = state.products.findIndex(product => product.id == productId);
            return state.products[index];
        },
        getBanners: state => state.banners,
        getCollections: state => state.collections,
        getShowProduct: state => state.product,
        getAllProducts: state => state.allProducts,
        getSavedProducts: state => state.savedProducts,
        getCategories: state => state.categories,
        getCompletedOrders: state => state.completedOrders,
        getOrders: state => state.orders,
        getOrder: (state) => (orderId) => {
            let index = state.orders.findIndex(order => order.id == orderId);
            return state.orders[index];
        },
        getcompleteOrder: (state) => (completeId) => {
            let index = state.completedOrders.findIndex(complete => complete.id == completeId);
            return state.completedOrders[index];
        },
        getCartProduct: state => state.cartProduct,
        getReviews: state => state.reviews,
        getCart: state => state.cart,
        getWishlist: state => state.wishlist,

    },
    mutations: {
        setBanners(data, state) {
            state.banners = data
        },
        setCollections(data, state) {
            state.collections = data
        },
        setProduct(state, data) {
            state.product = data
        },
        setAllproducts(state, data) {
            state.allProducts = data
        },
        setWishlist(state, data) {
            state.wishlist = data
        },
        setCategories(state, data) {
            state.categories = data
        },
        toggleReview(state, review) {
            let index = state.reviews.indexOf(review);
            state.reviews.forEach(user_review => {
                user_review.show = false
            });
            state.reviews[index].show = true
        },
        setCart(state, data) {
            state.cart = data
        },
        actionDone(state) {
            state.action = true;
        },
    },
    actions: {
        loginUser({ commit }, data) {
            axiosInstance.post('login', data)
                .then((response) => {
                    commit('actionDone', response.data);
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    console.log('Login successful. Token stored:', token);
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        },
        registerUser({ commit }, data) {
            axiosInstance.post('register', data)
                .then((response) => {
                    commit('actionDone')
                    console.log('data sent', response)
                }).catch((error) => {
                    console.log('error', error)
                })
        },
        forgotPassword({ commit }, data) {
            axiosInstance.post('forgot-password', data)
                .then((response) => {
                    commit('actionDone')
                    console.log(response)
                })
        },
        resetPassword({ commit }, data) {
            axiosInstance.put('user/password', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                })
        },
        fetchBanners({ commit }) {
            axiosInstance.get('banners').then(response => {
                console.log('store', response.data.data)
                commit('setBanners', response.data.data)
            })
                .catch((error) => { console.error('fetchBanners:', error) })
        },
        fetchCollections({ commit }) {
            axiosInstance.get('collections').then(response => {
                commit('setCollections', response.data.data)
            })
        },
        fetchProduct({ commit }, data) {
            axiosInstance.get('products/' + data).then(response => {
                commit('setProduct', response.data.data)
            })
        },
        fetchAllProducts({ commit }) {
            axiosInstance.get('products').then(response => {
                commit('setAllproducts', response.data.data)
            })
        },
        fetchCart({ commit }) {
            axiosInstance.get('carts', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('setCart', response.data.data)
                })
        },
        fetchWishlist({ commit }) {
            axiosInstance.get('wishlists', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    if (response.status === 'ok') {
                        commit('setWishlist', response.data.data)
                    }
                })
                .catch((error) => {
                    console.error('fetchCategories:', error);
                })
        },
        addToWishlist({ commit, data }) {
            console.log('store')
            axiosInstance.post('wishlists', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    console.log(response)
                    commit('actionDone', response)
                })
        },
        fetchCategories({ commit }) {
            axiosInstance.get('categories')
                .then((response) => {
                    // if (response.status === 'ok') {
                        commit('setCategories', response.data.data)
                    // }
                })
                .catch((error) => {
                    console.error('fetchCategories:', error);
                })
        },
        toggleReview({ commit }, review) {
            commit("toggleReview", review);
        },
    }
}