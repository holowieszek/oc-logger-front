import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import asyncWrapper from '../utils/asyncWrapper';
import store from '../store';
import UserService from '../services/user.service';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { public: true, onlyWhenLoggedOut: true }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "signin" */ '../components/Signin/Signin'),
    meta: { public: true, onlyWhenLoggedOut: true }
  },
  {
    path: '/signin-redirect',
    name: 'signin-callback',
    component: () => import(/* webpackChunkName: "redirect" */ '../components/Signin/Redirect'),
    meta: { public: true, onlyWhenLoggedOut: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../components/Dashboard'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach(async (to, from, next) => {
  await store.dispatch('checkIfAuthenticated');
  
  const isPublic = to.matched.some(route => route.meta.public);
  const onlyWhenLoggedOut = to.matched.some(route => route.meta.onlyWhenLoggedOut);
  const isLoggedIn = store.getters.isLoggedIn;

  if (!isLoggedIn && !isPublic) {
    next({ path: '/' });
  }

  if (isLoggedIn && onlyWhenLoggedOut) {
    next('/dashboard');
  }

  next();
});

export default router
