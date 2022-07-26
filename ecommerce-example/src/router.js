import { createWebHistory, createRouter } from "vue-router";
import ProductListPage from "./pages/ProductsListPgae.vue";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
import ShoppingCartPage from "./pages/ShoppingCart.vue";
import UserInfoPage from "./pages/UserInfoPage.vue";
import EmployeeOfTheMonthPage from "./pages/EmployeeOfTheMonth.vue";
const routes = [
  { path: "/", component: ProductListPage },
  { path: "/products/:id", component: ProductDetailPage },
  { path: "/cart", component: ShoppingCartPage },
  { path: "/user-info", component: UserInfoPage },
  { path: "/employee", component: EmployeeOfTheMonthPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
