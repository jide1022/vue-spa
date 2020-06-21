import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'root',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  }, {
    path: '/hello',
    name: 'hello',
    component: () => import('@/pages/Hello.vue'),
  }]
});

// 路由守卫
router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {
});

// 路由独享守卫
// beforeEnter  beforeRouteUpdate   beforeRouteLeave 

export default router;