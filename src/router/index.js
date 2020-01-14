import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import about from "../views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: about
  }
];

const router = new VueRouter({
  routes
});

export default router;
