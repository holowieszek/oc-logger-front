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
// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some(route => route.meta.requiresAuth);

//     await store.dispatch('checkIfAuthenticated');

//     next();
//     if (requiresAuth && !store.getters.isLoading) {
//       if (store.getters.isLoggedIn) {
//         next();
//       } else {
//         next('/');
//       }
//     } else {
//       next();
//     }
// })
// const authGuard = (to, from, next) => {
//   const authToken = localStorage.getItem('auth_token');
//   const authTokenSecret = localStorage.getItem('auth_token_secret');

//   if (authToken && authTokenSecret) {
//     // return true;
//     axios.post('oc/user').then(result => next()).catch(err => {
//       console.log(err);
//       console.log('nie altorajzd');
//       next('/')
//     })
//   } else {
//     next('/');
//   }
// }

export default router
