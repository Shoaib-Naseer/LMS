import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/index.vue";
import { getAccessToken } from "../helpers";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    redirect: { name: "Home" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = getAccessToken() || false;

//   const nonAuthPagesNames = ["Login"];

//   if (!isAuthenticated && !nonAuthPagesNames.includes(to.name as any)) {
//     router.replace({ name: "Login" });
//   } else if (isAuthenticated && nonAuthPagesNames.includes(to.name as any)) {
//     next({ path: "/home" });
//   } else if (isAuthenticated && to.path === "/") {
//     next({ path: "/home" });
//   } else {
//     next();
//   }
// });

export default router;
