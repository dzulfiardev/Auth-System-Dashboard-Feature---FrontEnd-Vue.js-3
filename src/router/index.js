import store from "../store/index";
import auth from "../middleware/auth";
import admin from "../middleware/admin";
import guest from "../middleware/guest";
import middlewarePipeline from "./middlewarePipeline";

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import ForgotPassword from "../views/Auth/ForgotPassword.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Users from "../views/Dashboard/Users.vue";
import NotFound from "../views/Web/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { middleware: [guest] },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { middleware: [guest] },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { middleware: [guest] },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: { middleware: [guest] },
  },
  {
    path: "/about",
    name: "About",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: { middleware: [auth] },
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: { middleware: [auth, admin] },
    // meta: { requiresAuth: true },
    // beforeEnter: (to, from, next) => {
    //   if (store.getters["auth/isAdmin"]) next();
    //   else next();
    // },
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, store };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});
// router.beforeEach((to, from, next) => {
//   const authUser = store.getters["auth/authUser"];
//   const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const loginQuery = { path: "/login", query: { redirect: to.fullPath } };

//   if (reqAuth && !authUser) {
//     store.dispatch("auth/getAuthUser").then(() => {
//       if (!store.getters["auth/authUser"]) next(loginQuery);
//       else next();
//     });
//   } else {
//     next();
//   }
// });

export default router;
