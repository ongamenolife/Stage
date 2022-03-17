import VueRouter from "vue-router";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../view/Main.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../view/Home"),
        },
        {
          path: "/user",
          name: "user",
          component: () => import("../view/User"),
        },
      ],
    },
  ],
});
