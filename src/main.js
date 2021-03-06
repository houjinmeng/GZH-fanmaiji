// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 引入全局样式控制文件
import './assets/css/index.css'
import './assets/js/rem.js'
// 引入vant-ui
import Vant from 'vant'
import 'vant/lib/index.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import qs from 'qs'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.echarts = echarts;


Vue.use(Vant)
Vue.use(Element)
// axios请求根地址
//axios.defaults.baseURL = 'http://192.168.1.144:9999/api/'
//axios.defaults.baseURL='http://liujunfeng.imwork.net:28246/api/'
axios.defaults.baseURL = 'http://blind.goldenbrother.cn/api/'
Vue.prototype.$http = axios
Vue.prototype.$qs = qs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
