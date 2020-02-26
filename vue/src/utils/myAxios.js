

import {Toast} from 'vant'
import Axios from 'axios'


let BaseUrl = "";
// if(process.env.NODE_ENV=='development'){
//   BaseUrl = "/api"
// }else if((process.env.NODE_ENV=='production')){
BaseUrl = window.ENV.api
//     }

let axios = Axios.create({
    baseURL: BaseUrl,
    timeout: 30000
});

let LoadToast

//添加一个请求拦截器
axios.interceptors.request.use(function(config) {
    //在请求发出之前进行一些操作
    LoadToast = Toast.loading({
        duration: 0,       // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        icon: 'http://wechat.jichangzhuanxian.com/imgs/load.gif',
        className:"loadToast"
      });
    return config;
}, function(err) {
    //Do something with request error

    LoadToast.clear();
    // Toast("请求超时")
    return Promise.reject(err);
});
//添加一个响应拦截器
axios.interceptors.response.use(function(res) {
    LoadToast.clear();
    if (res.data.status == 1) {
        return res.data;
    }else{
        Toast(`${res.data.message}`)
        return Promise.reject(`请求失败:${JSON.stringify(res)}`);
    }
    
}, function(err) {
    LoadToast.clear();
    console.log(err)
    if(err.response.status==401){
        window.location.href="/#/login"
    }else{
        Toast(`请求失败:${err}`)
        return Promise.reject(`请求失败:${err}`);
    }
    
    
})

export default axios



