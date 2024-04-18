
export default [
    {
        path: "/",
        name: "Dashboard",
        component: () => import("@/modules/macHiddle/pages/DashboardPage.vue")
    },
    {
        path: "/categories",
        children: [
            {
                path: "",
                name: "CategoryPage",
                component: () => import("@/modules/macHiddle/pages/CategoryPage.vue")
            },
            {
                path: ':categoryId',
                // path: 'sub-category',
                name: 'ShowCategoryPage',
                component: () => import('@/modules/macHiddle/pages/ShowCategoryPage.vue')
            },
        ]
    },
    {
        path: '/collection/:collectionId',
        name: 'ShowCollectionPage',
        component: () => import('@/modules/macHiddle/pages/ShowCollectionPage.vue')
    },
    {
        path: '/product-page/:productId',
        name: 'ProductPage',
        component: () => import('@/modules/macHiddle/pages/ProductPage.vue')
    },
    // {
    //     path: '/allProducts',
    //     name: 'AllProducts',
    //     component: () => import('@/modules/macHiddle/pages/AllProductPage.vue')
    // },
    {
        path: '/support',
        name: 'SupportPage',
        component: () => import('@/modules/macHiddle/pages/SupportPage.vue')
    },
    {
        path: "/login-page",
        name: "LoginPage",
        component: () => import('@/modules/macHiddle/pages/auths/LoginPage.vue')
    },
    {
        path: "/registration-page",
        name: "RegistrationPage",
        component: () => import('@/modules/macHiddle/pages/auths/RegistrationPage.vue')
    },
    {
        path: "/forgot-password-page",
        name: "ForgotPasswordPage",
        component: () => import('@/modules/macHiddle/pages/auths/ForgotPasswordPage.vue')
    },
    {
        path: "/reset-password-page",
        name: "ResetPasswordPage",
        component: () => import('@/modules/macHiddle/pages/auths/ResetPasswordPage.vue')
    },
    {
        path: "/wishlist",
        name: "WishList",
        component: () => import('@/modules/macHiddle/pages/WishList.vue'),
    },
    {
        path: "/email-verification-page",
        name: "EmailVerificationPage",
        component: () => import('@/modules/macHiddle/pages/auths/EmailVerificationPage.vue')
    },
    {
        path: '/orders',
        children: [
            {
                path: 'list',
                name: 'OrdersListPage',
                component: () => import("@/modules/macHiddle/pages/order/OrdersListPage.vue"),
            },
            {
                path: 'detail/:orderId',
                name: 'OrderDetailPage',
                component: () => import("@/modules/macHiddle/pages/order/OrderDetailPage.vue"),
            },
        ]
    },
    {
        path: "/myProfile",
        name: "MyProfile",
        component: () => import('@/modules/macHiddle/pages/MyProfile.vue')
    },
    {
        path: "/myAccount",
        name: "MyAccount",
        component: () => import('@/modules/macHiddle/pages/MyAccount.vue')
    },
    {
        path: "/career",
        name: "MyCareer",
        component: () => import('@/modules/macHiddle/pages/resources/CareerPage.vue')
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: () => import('@/modules/macHiddle/pages/resources/PrivacyPolicy.vue')
    },
    {
        path: "/terms",
        name: "TermsPage",
        component: () => import('@/modules/macHiddle/pages/resources/TermsPage.vue')
    },
    {
        path: "/return-policy",
        name: "ReturnPolicy",
        component: () => import('@/modules/macHiddle/pages/resources/ReturnPolicy.vue')
    },
    {
        path: "/aboutUs",
        name: "AboutUs",
        component: () => import('@/modules/macHiddle/pages/resources/AboutUs.vue')
    },
    {
        path: '/faqs',
        children: [
            {
                path: 'customer-service',
                name: 'CustomerService',
                component: () => import('@/modules/macHiddle/pages/faqs/CustomerService.vue')
            },
            {
                path: 'account',
                name: 'Account',
                component: () => import('@/modules/macHiddle/pages/faqs/AccountPage.vue')
            },
            {
                path: 'order',
                name: 'Order',
                component: () => import('@/modules/macHiddle/pages/faqs/OrderPage.vue')
            },
            {
                path: 'payment',
                name: 'Payment',
                component: () => import('@/modules/macHiddle/pages/faqs/PaymentPage.vue')
            },
            {
                path: 'delivery',
                name: 'Delivery',
                component: () => import('@/modules/macHiddle/pages/faqs/DeliveryPage.vue')
            },
            {
                path: 'returns',
                name: 'Return',
                component: () => import('@/modules/macHiddle/pages/faqs/ReturnPage.vue')
            },

        ]
    },



    {
        path: '/cart-page',
        name: 'CartPage',
        component: () => import('@/modules/macHiddle/pages/cart/CartPage.vue')
    },
    {
        path: '/my-address',
        name: 'AddressPage',
        component: () => import('@/modules/macHiddle/pages/cart/AddressPage.vue')
    },
    {
        path: '/edit-address/:addressId',
        name: 'EditAddress',
        component: () => import('@/modules/macHiddle/pages/cart/EditAddress.vue')
    },
    {
        path: '/new-address',
        name: 'NewAddressPage',
        component: () => import('@/modules/macHiddle/pages/cart/NewAddressPage.vue')
    },
    {
        path: '/payment-page',
        name: 'Checkout',
        component: () => import('@/modules/macHiddle/pages/cart/PaymentPage.vue')
    },
    {
        path: '/thank-you',
        name: 'ThankYou',
        component: () => import('@/modules/macHiddle/pages/cart/ThankYou.vue')
    },
    {
        path: '/sub-category/:categorySlug',
        name: 'SubCategory',
        component: () => import('@/modules/macHiddle/pages/ShowCategoryPage.vue')
    },
    {
        path: '/search-page',
        name: 'SearchPage',
        component: () => import('@/modules/macHiddle/pages/SearchPage.vue')
    },
    {
        path: '/notification-page',
        name: 'NotificationPage',
        component: () => import('@/modules/macHiddle/pages/notifications/NotificationPage.vue')
    },

    // {
    //     path: '/notifications',
    //     children: [
    //         {
    //             path: 'promotions',
    //             name: 'NotificationPromotionPage',
    //             component: () => import('@/modules/macHiddle/pages/notifications/NotificationPromotionPage.vue')
    //         },
    //     ]
    // }

]

