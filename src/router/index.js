import { createRouter, createWebHistory } from "vue-router";
import MacRouter from "@/modules/macHiddle/router/macRouter";
const routes = [
  // {
  //   path: "/",
  //   name: "Dashboard",
  //   component: () => import("@/views/DashboardPage.vue")
  // },
  // {
  //   path: "/categories",
  //   name: "Category",
  //   component: () => import("@/views/CategoryPage.vue")
  // },
  // {
  //   path: '/product-page/:productId',
  //   name: 'ProductPage',
  //   component: () => import('@/views/ProductPage.vue')
  // },
  ...MacRouter
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
