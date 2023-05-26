
import { createRouter, createWebHistory } from "vue-router";
import AllProducts from "../views/AllProducts.vue";

const routes = [
  {
    path: "/",
    name: "AllProducts",
    component: AllProducts,
  },
  {
    path: "/smartphones",
    name: "Smartphones",
    component: () => import("../views/Smartphones.vue"),
  },
  {
    path: "/tablets",
    name: "Tablets",
    component: () => import("../views/Tablets.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/789",
    name: "AddProduct",
    component: () => import("../views/AddProduct.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;