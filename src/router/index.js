import { createRouter, createWebHistory } from "vue-router";
import MacRouter from "@/modules/macHiddle/router/macRouter";
const routes = [
  {
    path: '/:pathMatch(.*)*', // Wildcard route matching any path
    component: () => import("@/views/NotFound.vue")
  }, 
  ...MacRouter
];

 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
