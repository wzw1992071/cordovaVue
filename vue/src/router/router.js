import Vue from 'vue'
import Router from 'vue-router'



import constRouters from "./constRouters.js"

Vue.use(Router)

let router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import( '@/views/index/index.vue'),
      meta: {
        title: '铁航推广平台'
      }
    },{
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
      meta: {
        title: '铁航推广平台'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/register.vue'),
      meta: {
        title: '铁航推广平台'
      }
    },
    {
      path: '/myCode',
      name: 'myCode',
      component: () => import('@/views/myCode/myCode.vue'),
      meta: {
        title: '铁航推广平台'
      }
    },{
      path: '/myWallet',
      name: 'myWallet',
      component: () => import('@/views/myWallet/myWallet.vue'),
      meta: {
        title: '我的钱包'
      }
    },
    // 测试
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test.vue'),
    }
  ]
})


function getStorage(name) {
  var msg = null;
  if (
    typeof localStorage[name] == 'undefined' ||
    localStorage[name] === null ||
    localStorage[name] == 'null'
  ) {
    return null;
  } else {
    msg = JSON.parse(localStorage[name]);
    if (!msg.info || msg.info === null || msg.info.length === 0) return null;
  }
  if (msg.time + msg.livetime * 1000 < new Date().getTime()) return null;
  return msg.info;
}

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.meta.title) {
      document.title = to.meta.title
  }

  if(constRouters.whiteList.indexOf(to.name)>-1){
    // 不需要登录
    next()
  }else{
    let token =getStorage("bw_AccessToken")
    if(token){
      next()
    }else{
      next('/login');
     
    }
    
  }
  
})

export default router
