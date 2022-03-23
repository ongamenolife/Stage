import VueRouter from "vue-router";
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  undefined;
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: () => import("../view/Main.vue"),
      // children: [
      //   {
      //     path: "/home",
      //     name: "home",
      //     component: () => import("../view/Home"),
      //   },
      //   {
      //     path: "/user",
      //     name: "user",
      //     component: () => import("../view/User"),
      //   },
      //   {
      //     path: "/mall",
      //     name: "mall",
      //     component: () => import("../view/Mall"),
      //   },
      //   {
      //     path: "/page1",
      //     name: "page1",
      //     component: () => import("../view/Other/pageOne.vue"),
      //   },
      //   {
      //     path: "/page2",
      //     name: "page2",
      //     component: () => import("../view/Other/pageTwo.vue"),
      //   },
      // ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../view/Login/login.vue"),
    },
  ],
});
