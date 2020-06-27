import Vue from "vue";
import router from './router/index.js';
import store from './store/index.js';
import App from './App.vue'
import "core-js";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      text: 222,
    }
  },
  router,
  store,
  components: {
    App
  },
  el: "#app",
  render: c => c("App")
});
