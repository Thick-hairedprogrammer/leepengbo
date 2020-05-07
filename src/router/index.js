import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import { setTitle, setToken, getToken } from '@/lib/util'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/', redirect: '/login'
      // 路由重定向，当打开APP.vue时。页面直接跳转到login
    },
    {
      path: '/login', component: Login
    },
    {
      path: '/home', component: Home
    }
  ]
})

// 全局前置守卫
/*
to: Route: 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由
next: Function: 一定要调用该方法来 resolve 这个钩子
 */
// 模拟登陆验证逻辑:当跳转页面为登陆页面且已经登陆时，直接跳转到home页面，如果跳转页面不为登录页且已经登陆，则继续执行，否则直接跳转到登录页
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  debugger
  const token = getToken()
  if (token) {
      .dispatch('authorization', token)
      .then(() => {
        if (to.name === 'login') {
          next({ name: 'home' })
        } else {
          next()
        }
      })
      .catch(() => {
        setToken('')
        next({ name: 'login' })
      })
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
})

export default router
