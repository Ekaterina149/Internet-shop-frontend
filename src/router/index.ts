import { createRouter, createWebHistory } from "vue-router";
import { authBeforeMiddleware } from "./auth";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/MainLayout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "shop",
          name: "shop",
          component: ()=> import("../views/ShopView.vue"),
        },
        {
          path: "basket",
          name: "basket",
          component: () => import("../views/BasketView.vue"),
        },
        {
          path: "orders",
          name:"orders",
          component: ()=> import("../views/OrdersView.vue"),
          meta: {requiresAuth: true}

        },
        {
          path: "card/:cardId",
          name:"cards",
          component: ()=> import("../views/CardView.vue"),

        },
        // {
        //   path: "profile",
        //   name:"profile",
        //   component: ProfileView,

        // },
        {
          path: "signup",
          name: "signup",
          component: ()=>import("../views/RegisterView.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("../views/PofileView.vue"),
          meta: {requiresAuth: true}
        },
        {
          path: "change-password",
          name: "password",
          component: () => import("../views/ChangePasswordView.vue"),
        },
        {
          path: "delivery",
          name: "delivery",
          component: () => import("../views/DeliveryView.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../layouts/ProfileLayout.vue"),
      children: [
        
       
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});
router.beforeEach(authBeforeMiddleware);
export default router;