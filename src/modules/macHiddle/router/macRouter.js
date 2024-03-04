export default [
    // {
    //     path: "/",
    //     name: "Dashboard",
    //     component: () => import("@/modules/macHiddle/pages/DashboardPage.vue")
    // },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/modules/macHiddle/pages/DashboardPage.vue")
    },
    {
        path: "/categories",
        name: "Category",
        component: () => import("@/modules/macHiddle/pages/CategoryPage.vue")
    },
    {
        path: '/product-page/:productId',
        name: 'ProductPage',
        component: () => import('@/modules/macHiddle/pages/ProductPage.vue')
    },
    {
        path: '/allProducts',
        name: 'AllProducts',
        component: () => import('@/modules/macHiddle/pages/AllProductPage.vue')
    },
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
    // {
    //   path: "/otp-page",
    //   name: "OTPPage",
    //   component: () => import('@/modules/macHiddle/pages/auths/OtpPage.vue')
    // },
    // {
    //     path: "/email-verification-page",
    //     name: "EmailVerificationPage",
    //     component: () => import('@/modules/macHiddle/pages/auths/EmailVerificationPage.vue')
    // }, 
    {
        path: "/orders",
        children: [
            {
                path: 'pending',
                name: 'PendingOrdersPage',
                component: () => import("@/modules/macHiddle/pages/order/PendingOrdersPage.vue"),
            },
            {
                path: 'completed',
                name: 'CompletedOrdersPage',
                component: () => import("@/modules/macHiddle/pages/order/CompletedOrderPage.vue"),
            },
            {
                path: "pending/:orderId",
                name: "PendingOrderDetailPage",
                component: () => import('@/modules/macHiddle/pages/order/PendingOrderDetailPage.vue'),
            },
            {
                path: "completed-order/:completeId",
                name: "CompletedOrderDetailPage",
                component: () => import('@/modules/macHiddle/pages/order/CompletedOrderDetailPage.vue')
            },
        ]
    },
    {
        path: "/checkout",
        children: [
            {
                path: 'cart',
                name: "CartPage",
                component: () => import("@/modules/macHiddle/pages/cart/CartPage.vue"),
            },
            {
                path: 'billing_address',
                name: "BillingAddress",
                component: () => import("@/modules/macHiddle/pages/cart/BillingAddress.vue"),
            },
            // {
            //     path: 'delivery_address',
            //     name: "DeliveryAddress",
            //     component: () => import("@/modules/macHiddle/pages/cart/DeliveryAddress.vue"),
            // },
            {
                path: 'confirm',
                name: "OrderConfirm",
                component: () => import("@/modules/macHiddle/pages/cart/OrderConfirm.vue"),
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
]
