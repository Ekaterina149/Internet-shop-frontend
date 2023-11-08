import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ShopView from "../views/ShopView.vue";    
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/PofileView.vue";
import BasketView from "../views/BasketView.vue";
import OrdersView from "../views/OrdersView.vue";
import CardView from "../views/CardView.vue";



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
          component: HomeView,
         
        },
        {
          path: "about",
          name: "about",
          component: AboutView,
        },
        {
          path: "shop",
          name: "shop",
          component: ShopView,
        },
        {
          path: "basket",
          name: "basket",
          component: BasketView,
        },
        {
          path: "orders",
          name:"orders",
          component: OrdersView,

        },
        {
          path: "card/:cardId",
          name:"cards",
          component: CardView,

        },
        // {
        //   path: "profile",
        //   name:"profile",
        //   component: ProfileView,

        // },
      ],
    },
    {
      path: "/",
      component: () => import("../layouts/ProfileLayout.vue"),
      children: [
        {
          path: "signup",
          name: "signup",
          component: RegisterView,
        },
        {
          path: "profile",
          name: "profile",
          component: ProfileView,
        },
       
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
