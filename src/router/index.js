import VueRouter from "vue-router";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../components/Home/Home.vue"),
    },
    {
      path: "/btn",
      component: () => import("../components/Btn/loadBtn.vue"),
    },
  ],
});
