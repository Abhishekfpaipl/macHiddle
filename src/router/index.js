import { createRouter, createWebHistory } from "vue-router";
import MacRouter from "@/modules/macHiddle/router/macRouter";
const routes = [
  {
    path: '/:pathMatch(.*)*', // Wildcard route matching any path
    component: () => import("@/views/NotFound.vue")
  },
  {
    path: '/placeholder',
    name: 'LoadingPlaceholder',
    component: () => import('@/modules/macHiddle/components/LoadingPlaceholder.vue')
  },
  ...MacRouter
];

 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
