// // Import necessary modules
// const fs = require('fs');

// // import routes from './src/router/index.js'
// // Your routes array
// const routes = [
//         {
//             path: "/",
//             name: "Dashboard",
//             component: () => import("@/modules/macHiddle/pages/DashboardPage.vue")
//         },
//         {
//             path: "/categories",
//             children: [
//                 {
//                     path: "",
//                     name: "CategoryPage",
//                     component: () => import("@/modules/macHiddle/pages/CategoryPage.vue")
//                 },
//                 {
//                     path: ':categoryId',
//                     // path: 'sub-category',
//                     name: 'ShowCategoryPage',
//                     component: () => import('@/modules/macHiddle/pages/ShowCategoryPage.vue')
//                 },
//             ]
//         },
//         {
//             path: '/collection/:collectionId',
//             name: 'ShowCollectionPage',
//             component: () => import('@/modules/macHiddle/pages/ShowCollectionPage.vue')
//         },
//         {
//             path: '/product-page/:productId',
//             name: 'ProductPage',
//             component: () => import('@/modules/macHiddle/pages/ProductPage.vue')
//         },
//         // {
//         //     path: '/allProducts',
//         //     name: 'AllProducts',
//         //     component: () => import('@/modules/macHiddle/pages/AllProductPage.vue')
//         // },
//         {
//             path: '/support',
//             name: 'SupportPage',
//             component: () => import('@/modules/macHiddle/pages/SupportPage.vue')
//         },
//         {
//             path: "/login-page",
//             name: "LoginPage",
//             component: () => import('@/modules/macHiddle/pages/auths/LoginPage.vue')
//         },
//         {
//             path: "/registration-page",
//             name: "RegistrationPage",
//             component: () => import('@/modules/macHiddle/pages/auths/RegistrationPage.vue')
//         },
//         {
//             path: "/forgot-password-page",
//             name: "ForgotPasswordPage",
//             component: () => import('@/modules/macHiddle/pages/auths/ForgotPasswordPage.vue')
//         },
//         {
//             path: "/reset-password-page",
//             name: "ResetPasswordPage",
//             component: () => import('@/modules/macHiddle/pages/auths/ResetPasswordPage.vue')
//         },
//         {
//             path: "/wishlist",
//             name: "WishList",
//             component: () => import('@/modules/macHiddle/pages/WishList.vue'),
//         },
//         {
//             path: "/email-verification-page",
//             name: "EmailVerificationPage",
//             component: () => import('@/modules/macHiddle/pages/auths/EmailVerificationPage.vue')
//         },
//         {
//             path: '/orders',
//             children: [
//                 {
//                     path: 'list',
//                     name: 'OrdersListPage',
//                     component: () => import("@/modules/macHiddle/pages/order/OrdersListPage.vue"),
//                 },
//                 {
//                     path: 'detail/:orderId',
//                     name: 'OrderDetailPage',
//                     component: () => import("@/modules/macHiddle/pages/order/OrderDetailPage.vue"),
//                 },
//             ]
//         },
//         {
//             path: "/myProfile",
//             name: "MyProfile",
//             component: () => import('@/modules/macHiddle/pages/MyProfile.vue')
//         },
//         {
//             path: "/myAccount",
//             name: "MyAccount",
//             component: () => import('@/modules/macHiddle/pages/MyAccount.vue')
//         },
//         {
//             path: "/career",
//             name: "MyCareer",
//             component: () => import('@/modules/macHiddle/pages/resources/CareerPage.vue')
//         },
//         {
//             path: "/privacy-policy",
//             name: "PrivacyPolicy",
//             component: () => import('@/modules/macHiddle/pages/resources/PrivacyPolicy.vue')
//         },
//         {
//             path: "/terms",
//             name: "TermsPage",
//             component: () => import('@/modules/macHiddle/pages/resources/TermsPage.vue')
//         },
//         {
//             path: "/return-policy",
//             name: "ReturnPolicy",
//             component: () => import('@/modules/macHiddle/pages/resources/ReturnPolicy.vue')
//         },
//         {
//             path: "/aboutUs",
//             name: "AboutUs",
//             component: () => import('@/modules/macHiddle/pages/resources/AboutUs.vue')
//         },
//         {
//             path: '/faqs',
//             children: [
//                 {
//                     path: 'customer-service',
//                     name: 'CustomerService',
//                     component: () => import('@/modules/macHiddle/pages/faqs/CustomerService.vue')
//                 },
//                 {
//                     path: 'account',
//                     name: 'Account',
//                     component: () => import('@/modules/macHiddle/pages/faqs/AccountPage.vue')
//                 },
//                 {
//                     path: 'order',
//                     name: 'Order',
//                     component: () => import('@/modules/macHiddle/pages/faqs/OrderPage.vue')
//                 },
//                 {
//                     path: 'payment',
//                     name: 'Payment',
//                     component: () => import('@/modules/macHiddle/pages/faqs/PaymentPage.vue')
//                 },
//                 {
//                     path: 'delivery',
//                     name: 'Delivery',
//                     component: () => import('@/modules/macHiddle/pages/faqs/DeliveryPage.vue')
//                 },
//                 {
//                     path: 'returns',
//                     name: 'Return',
//                     component: () => import('@/modules/macHiddle/pages/faqs/ReturnPage.vue')
//                 },

//             ]
//         },



//         {
//             path: '/cart-page',
//             name: 'CartPage',
//             component: () => import('@/modules/macHiddle/pages/cart/CartPage.vue')
//         },
//         {
//             path: '/my-address',
//             name: 'AddressPage',
//             component: () => import('@/modules/macHiddle/pages/cart/AddressPage.vue')
//         },
//         {
//             path: '/edit-address/:addressId',
//             name: 'EditAddress',
//             component: () => import('@/modules/macHiddle/pages/cart/EditAddress.vue')
//         },
//         {
//             path: '/new-address',
//             name: 'NewAddressPage',
//             component: () => import('@/modules/macHiddle/pages/cart/NewAddressPage.vue')
//         },
//         {
//             path: '/payment-page',
//             name: 'Checkout',
//             component: () => import('@/modules/macHiddle/pages/cart/PaymentPage.vue')
//         },
//         {
//             path: '/thank-you',
//             name: 'ThankYou',
//             component: () => import('@/modules/macHiddle/pages/cart/ThankYou.vue')
//         },
//         {
//             path: '/sub-category/:categorySlug',
//             name: 'SubCategory',
//             component: () => import('@/modules/macHiddle/pages/ShowCategoryPage.vue')
//         },
//         {
//             path: '/search-page',
//             name: 'SearchPage',
//             component: () => import('@/modules/macHiddle/pages/SearchPage.vue')
//         },
//         {
//             path: '/notification-page',
//             name: 'NotificationPage',
//             component: () => import('@/modules/macHiddle/pages/notifications/NotificationPage.vue')
//         },  
// ];

// // Function to generate URL entries for dynamic routes
// function generateDynamicUrls(route) {
//     const urls = [];
//     if (route.children) {
//         route.children.forEach(child => {
//             if (child.path.includes(':')) {
//                 // If the path contains dynamic segments
//                 // You may need to provide actual dynamic values here or leave it empty
//                 urls.push(`https://app.machiddle.com/${child.path.replace(/:\w+/g, '')}`);
//             } else {
//                 // If the path is static
//                 urls.push(`https://app.machiddle.com${child.path}`);
//             }
//         });
//     } else {
//         if (route.path.includes(':')) {
//             // If the path contains dynamic segments
//             // You may need to provide actual dynamic values here or leave it empty
//             urls.push(`https://app.machiddle.com/${route.path.replace(/:\w+/g, '')}`);
//         } else {
//             // If the path is static
//             urls.push(`https://app.machiddle.com/${route.path}`);
//         }
//     }
//     return urls;
// }

// // Function to generate sitemap XML content
// function generateSitemap() {
//     let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

//     // Add static routes
//     routes.forEach(route => {
//         if (Array.isArray(route)) {
//             route.forEach(staticRoute => {
//                 sitemap += `
//   <url>
//     <loc>https://app.machiddle.com${staticRoute.path}</loc>
//     <changefreq>daily</changefreq>
//     <priority>1.0</priority>
//   </url>`;
//             });
//         } else {
//             sitemap += `
//   <url>
//     <loc>https://app.machiddle.com${route.path}</loc>
//     <changefreq>daily</changefreq>
//     <priority>1.0</priority>
//   </url>`;
//         }

//         // Add dynamic routes
//         const dynamicUrls = generateDynamicUrls(route);
//         dynamicUrls.forEach(url => {
//             sitemap += `
//   <url>
//     <loc>${url}</loc>
//     <changefreq>daily</changefreq>
//     <priority>0.8</priority>
//   </url>`;
//         });
//     });

//     // Close the urlset tag
//     sitemap += `
// </urlset>`;

//     return sitemap;
// }

// // Generate sitemap content
// const sitemapContent = generateSitemap();

// // Write sitemap content to sitemap.xml file
// fs.writeFile('sitemap.xml', sitemapContent, err => {
//     if (err) {
//         console.error('Error writing sitemap.xml:', err);
//     } else {
//         console.log('Sitemap generated successfully!');
//     }
// });

// Import necessary modules
const fs = require('fs');
const axios = require('axios');

const routes = [
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
];


// Function to fetch products from the API
async function fetchProducts() {
    try {
        const response = await axios.get('https://server.machiddle.com/api/products');
        return response.data.data.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to generate sitemap XML content
async function generateProductSitemap() {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Fetch products
    const products = await fetchProducts();

    // Generate URLs for products
    products.forEach(product => {
        const productUrl = `https://app.machiddle.com/product-page/${product.sid}`; // Replace with your actual base URL
        sitemap += `
  <url>
    <loc>${productUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    // Close the urlset tag
    sitemap += `
</urlset>`;

    return sitemap;
}

// // Function to generate and write sitemap content to sitemap.xml file
// async function generateAndWriteSitemap() {
//     try {
//         const sitemapContent = await generateSitemap();
//         fs.writeFile('sitemap.xml', sitemapContent, err => {
//             if (err) {
//                 console.error('Error writing sitemap.xml:', err);
//             } else {
//                 console.log('Sitemap generated successfully!');
//             }
//         });
//     } catch (error) {
//         console.error('Error generating sitemap:', error);
//     }
// }

// // Call the function to generate and write the sitemap
// generateAndWriteSitemap();

// Function to generate sitemap XML content for other routes
function generateRouteSitemap() {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Define other routes
    const otherRoutes = [
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

    ];

    // Generate URLs for other routes
    otherRoutes.forEach(route => {
        const routeUrl = `https://example.com${route.path}`; // Replace with your actual base URL
        sitemap += `
  <url>
    <loc>${routeUrl}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    });

    // Close the urlset tag
    sitemap += `
</urlset>`;

    return sitemap;
}

// Function to generate and write sitemap content to sitemap.xml file
async function generateAndWriteSitemap() {
    try {
        const productSitemapContent = await generateProductSitemap();
        const routeSitemapContent = generateRouteSitemap();
        const combinedSitemapContent = productSitemapContent + routeSitemapContent;

        fs.writeFile('sitemap.xml', combinedSitemapContent, err => {
            if (err) {
                console.error('Error writing sitemap.xml:', err);
            } else {
                console.log('Sitemap generated successfully!');
            }
        });
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

// Call the function to generate and write the sitemap
generateAndWriteSitemap();

