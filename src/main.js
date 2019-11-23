import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes/route";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);
Vue.directive("highlight", {
  bind(el) {
    el.style.backgroundColor = "green";
  }
});
Vue.directive("highcolor", {
  bind(el, binding) {
    el.style.backgroundColor = binding.value;
  }
});
Vue.directive("highifcolor", {
  bind(el, binding) {
    if (binding.arg == "background") {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
});

Vue.filter('lowerconv',
  function(value) {
      return value.toLowerCase();
    }
);

Vue.mixin(
  {
    created(){
      console.log('Test Global mixins')
    }
  }
)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
