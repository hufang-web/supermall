import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import('../views/home/home.vue');
const category = () => import('../views/category/category.vue');
const cart = () => import('../views/cart/cart.vue');
const profile = () => import('../views/profile/profile.vue');
const detail = () => import('../views/detail/detail.vue');

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
      path: '/category',
      name: 'category',
      component: category
  },
  {
      path: '/cart',
      name: 'cart',
      component: cart
  },
  {
      path: '/profile',
      name: 'profile',
      component: profile

  },
  {
      path: '/detail/:id',
      name: 'detail',
      component: detail

  }

];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
