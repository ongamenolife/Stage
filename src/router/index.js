import VueRouter from "vue-router";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../view/Main.vue"),
      children: [
        {
          path: "/",
          alias: "/home",
          name: "home",
          component: () => import("../view/Home"),
        },
        {
          path: "/user",
          name: "user",
          component: () => import("../view/User"),
        },
        {
          path: "/mall",
          name: "mall",
          component: () => import("../view/Mall"),
        },
        {
          path: "/page1",
          name: "page1",
          component: () => import("../view/Other/pageOne.vue"),
        },
        {
          path: "/page2",
          name: "page2",
          component: () => import("../view/Other/pageTwo.vue"),
        },
      ],
    },
  ],
});
