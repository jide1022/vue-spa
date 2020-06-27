import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js';
import store from './store/index.js';
import App from './App.vue'
import "core-js";

Vue.config.productionTip = false;
Vue.use(ElementUI);

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
