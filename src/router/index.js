import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

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

export default router
