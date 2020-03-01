import Vue from 'vue'
import App from './App.vue'
import ENV from "@/utils/config"
import router from './router/router'
import store from './vuex/store'
import fastclick from 'fastclick';
import axios from "@/utils/myAxios"
import * as Allhttp from "@/http/http"
// 引入全局混入
import  '@/utils/minixs.js'


import "@/assets/css/normal.scss"
// 引入环境变量
Vue.prototype.$ENV = ENV
Vue.config.productionTip = false

// 引入公共方法
import utils from "@/utils/utils.js"
Vue.prototype.$utils = utils
window.$utils = utils

// 引入UI组件
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入字体
import "@/assets/font/font.css"
Vue.use(Vant);

// 引入复制到剪切板
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 引入封装的请求
Vue.prototype.$http = Allhttp
Vue.prototype.$axios = axios;
// 快速点击
fastclick.prototype.focus = function(targetElement) {
  var length;
  const deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0
  const deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone
  if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month' && targetElement.type !== 'email') {
      length = targetElement.value.length;
      targetElement.setSelectionRange(length, length);
      targetElement.focus();
  } else {
      targetElement.focus();
  }
};
fastclick.attach(document.body);



document.addEventListener("deviceready", ()=>{
	new Vue({
	  router,
	  store,
	  render: h => h(App)
	}).$mount('#app')
}, false);

