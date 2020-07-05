import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Welcome from '../components/Welcome'
import UserSpace from '../components/User/UserSpace.vue'
import MsgChange from '../components/User/MsgChange.vue'
import PsdChange from '../components/User/PsdChange.vue'
import UserAdmin from '../components/UserAdmin/UserAdmin.vue'
import RootAdmin from '../components/UserRoot/RootAdmin.vue'
import Dialogtest from '../components/Test/Dialogtest.vue'
import MenuAdmin from '../components/Menu/MenuAdmin'
import DataMenu from '../components/DataMenu/DataMenu'
import DataConfig from '../components/DataConfig/DataConfig'
import Audit from '../components/FinanciAudit/Audit'
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
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        {
          path: '/userspace', component: UserSpace
        },
        { path: '/msgchange', component: MsgChange },
        { path: '/psdchange', component: PsdChange },
        { path: '/useradmin', component: UserAdmin },
        { path: '/userroot', component: RootAdmin },
        { path: '/menu', component: MenuAdmin },
        { path: '/datamenu', component: DataMenu },
        { path: '/config', component: DataConfig },
        { path: '/audit', component: Audit },
        { path: '/dialogtest', component: Dialogtest }
      ]
    },
    {
      path: '/register', component: Register
    }

  ]
})

export default router
