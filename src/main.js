import Vue from "vue";
import App from "./App.vue";
//引入公共样式
import "./assets/less/index.scss";
//引入elementUi组件库
import ElementUI from "element-ui";
import "element-ui/lib/index.js";
import "element-ui/lib/theme-chalk/index.css";

import store from "./store/index.js";
import router from "./router/index.js";
import VueRouter from "vue-router";

//挂载
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
