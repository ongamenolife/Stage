import Vue from "vue";
import App from "./App.vue";
//引入elementUi组件库
import ElementUI from "element-ui";
import "element-ui/lib/index.js";
import "element-ui/lib/theme-chalk/index.css";

import router from "./router/index.js";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//挂载组件库
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
