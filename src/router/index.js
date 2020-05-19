import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/main/login'
import manager_home from '@/components/manager/home'
import machine from '@/components/manager/machine'
import pinpai from '@/components/manager/pinpai'
import pingtai from '@/components/manager/pingtai'
import pinpai_home from '@/components/pinpai/home'

Vue.use(Router)

var router = new Router({
  routes: [
    { path: '/', component: login},
    { path: '/manager/home', component: manager_home},
    { path: '/machine', component: machine},
    {path:'/pinpai',component:pinpai},
    {path:'/pingtai',component:pingtai},
    {path:'/pinpai/home',component:pinpai_home}
  ]
})
// router.beforeEach((to, from, next) => {
//   // 请求"login"就直接通过
//   if (to.path === '/'||to.path === '/checkmachine') {
//     return next()
//   }
//   // 请求"非login"，就判断token
//   var token = window.sessionStorage.getItem('token')
//   if (!token) {
//     return next('/')
//   }

//   next() // 请继续你的旅行
// })
export default router
