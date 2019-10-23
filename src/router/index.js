import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import asyncWrapper from '../utils/asyncWrapper';
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "about" */ '../components/Signin/Signin'),
  },
  {
    path: '/signin-redirect',
    name: 'signin-callback',
    component: () => import(/* webpackChunkName: "about" */ '../components/Signin/Redirect'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../components/Dashboard'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  store.dispatch('checkIfAuthenticated');
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
