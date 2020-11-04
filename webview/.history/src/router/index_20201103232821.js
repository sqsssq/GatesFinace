import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/main.vue'
import Login from '../views/login.vue'
import Logout from '../components/gatesLogout.vue'
import Register from '../views/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isLogin: false
    },
  },
  {
    path: '/logout',
    name: Logout,
    component: Logout
  },
  {
    path: '/register',
    name: Register,
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    //非跳转到登录界面时，判断本地存储userData是否为null或空，为空则跳回到登录界面，反之到相应的界面(此时有数据)。
    let userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData === null || userData === '') {
      next();
    } else {
      next();
    }
  }
});

export default router
