import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import {routes} from "./routes/route";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
