(function(e){function t(t){for(var o,r,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-00940064":"84183fd8","chunk-03c15ee8":"3fc490ac","chunk-33fab722":"14bf7e91","chunk-750c48c9":"4ea2ff22","chunk-88ce4fd4":"d3611903","chunk-a68b415a":"1823a449"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-00940064":1,"chunk-03c15ee8":1,"chunk-33fab722":1,"chunk-750c48c9":1,"chunk-88ce4fd4":1,"chunk-a68b415a":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-00940064":"52708e73","chunk-03c15ee8":"faab6980","chunk-33fab722":"62671ead","chunk-750c48c9":"582c9c20","chunk-88ce4fd4":"d3dcc27b","chunk-a68b415a":"58b2efc4"}[e]+".css",i=c.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===i))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===o||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3394:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"test",(function(){return j})),n.d(o,"getCode",(function(){return N})),n.d(o,"register",(function(){return I})),n.d(o,"LoginWithSms",(function(){return J})),n.d(o,"getUserInfo",(function(){return $})),n.d(o,"GetSignature",(function(){return R})),n.d(o,"GetToken",(function(){return U})),n.d(o,"GetPersonalIncome",(function(){return L}));n("e44b"),n("6648"),n("5f54"),n("f0e6");var r=n("0261"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view")],1)},a=[],u={methods:{setRem:function(){var e=document.body.offsetWidth,t=e/375*100;document.getElementsByTagName("html")[0].style.fontSize=t+"px"}},created:function(){var e=this;this.setRem(),window.onresize=function(){e.setRem()}}},c=u,s=(n("5c0b"),n("623f")),l=Object(s["a"])(c,i,a,!1,null,null,null),f=l.exports;window.ENV={version:"1.0.0",isTest:!1,url2:" https://wechat.jichangzhuanxian.com/publicView/index.html",url:"https://tg.jichangzhuanxian.com",api:"https://tg.jichangzhuanxian.com/Sales/",img_url:"https://test.jichangzhuanxian.com/",appId:"wx4521059bd1734294"};var d=window.ENV,p=(n("cc57"),n("9bfb")),h={whiteList:["login","register","test"]};r["a"].use(p["a"]);var m=new p["a"]({base:"",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-750c48c9").then(n.bind(null,"37f9"))},meta:{title:"铁航推广平台"}},{path:"/login",name:"login",component:function(){return n.e("chunk-33fab722").then(n.bind(null,"dc3f"))},meta:{title:"铁航推广平台"}},{path:"/register",name:"register",component:function(){return n.e("chunk-a68b415a").then(n.bind(null,"0c99"))},meta:{title:"铁航推广平台"}},{path:"/myCode",name:"myCode",component:function(){return n.e("chunk-88ce4fd4").then(n.bind(null,"f333"))},meta:{title:"铁航推广平台"}},{path:"/myWallet",name:"myWallet",component:function(){return n.e("chunk-00940064").then(n.bind(null,"e956"))},meta:{title:"我的钱包"}},{path:"/test",name:"test",component:function(){return n.e("chunk-03c15ee8").then(n.bind(null,"2762"))}}]});function g(e){var t=null;return"undefined"==typeof localStorage[e]||null===localStorage[e]||"null"==localStorage[e]?null:(t=JSON.parse(localStorage[e]),t.info&&null!==t.info&&0!==t.info.length?t.time+1e3*t.livetime<(new Date).getTime()?null:t.info:null)}m.beforeEach((function(e,t,n){if(e.meta.title&&(document.title=e.meta.title),h.whiteList.indexOf(e.name)>-1)n();else{var o=g("bw_AccessToken");o?n():n("/login")}}));var v=m,y=n("08c1"),w={userInfo:function(e){return e.userInfo}},b=w,S=(n("6d57"),n("e10e"),n("9a33"),n("ad86")),k=n("82ae"),C=n.n(k),P="";P=window.ENV.api;var E,x=C.a.create({baseURL:P,timeout:3e4});x.interceptors.request.use((function(e){return E=S["a"].loading({duration:0,forbidClick:!0,icon:"http://wechat.jichangzhuanxian.com/imgs/load.gif",className:"loadToast"}),e}),(function(e){return E.clear(),Promise.reject(e)})),x.interceptors.response.use((function(e){return E.clear(),1==e.data.status?e.data:(Object(S["a"])("".concat(e.data.message)),Promise.reject("请求失败:".concat(JSON.stringify(e))))}),(function(e){if(E.clear(),console.log(e),401!=e.response.status)return Object(S["a"])("请求失败:".concat(e)),Promise.reject("请求失败:".concat(e));window.location.href="/#/login"}));var A=x;n("9e76"),n("2b45"),n("9dd9"),n("f548");if(Array.prototype.delete=function(e){if(isNaN(e)||e>this.length)return!1;this.splice(e,1)},!O)var O={};window.$bw=O,O.websolitStart=!1;var T={createFilter:function(e,t){return function(n){return n[t].toLowerCase().indexOf(e.toLowerCase())>=0}},throttle:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if("function"===typeof e){var n=e,o=null,r=!0;return function(){var e=arguments,i=this;if(r)return n.apply(i,e),void(r=!1);o||(o=setTimeout((function(){setTimeout(o),o=null,n.apply(i,e)}),t))}}console.log("in throttle,first argument must be Function")},debounce:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if("function"===typeof e)return function(){var o=this,r=arguments;if(t)return clearTimeout(t),void(t=null);t=setTimeout((function(){e.apply(o,r),t=null}),n)};console.log("in debounce,first argument must be Function")},dateFormat:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t},validatePhone:function(e){return!!/^1[345789]\d{9}$/.test(e)},addStorage:function(e){e.livetime||(e.livetime=31536e3);var t={info:e.info,time:(new Date).getTime(),livetime:e.time};localStorage[e.name]=JSON.stringify(t)},getStorage:function(e){var t=null;return"undefined"==typeof localStorage[e]||null===localStorage[e]||"null"==localStorage[e]?null:(t=JSON.parse(localStorage[e]),t.info&&null!==t.info&&0!==t.info.length?t.time+1e3*t.livetime<(new Date).getTime()?null:t.info:null)},addSession:function(e){e.livetime||(e.livetime=31536e3);var t={info:e.info,time:(new Date).getTime(),livetime:e.time};sessionStorage[e.name]=JSON.stringify(t)},getSession:function(e){var t=null;return"undefined"==typeof sessionStorage[e]||null===sessionStorage[e]||"null"===sessionStorage[e]?null:(t=JSON.parse(sessionStorage[e]),t.info&&null!==t.info&&0!==t.info.length?t.livetime&&t.time+1e3*t.livetime<(new Date).getTime()?null:t.info:null)},getWeek:function(e){switch(e){case 0:return"周日";case 1:return"周一";case 2:return"周二";case 3:return"周三";case 4:return"周四";case 5:return"周五";case 6:return"周六";default:break}},encrypt:function(e,t){t=t||"tiehangzhuanxian";var n=CryptoJS.enc.Utf8.parse(t),o=CryptoJS.enc.Utf8.parse(e),r=CryptoJS.AES.encrypt(o,n,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});return r.toString()},decrypt:function(e,t){t=t||"tiehangzhuanxian";var n=CryptoJS.enc.Utf8.parse(t),o=CryptoJS.AES.decrypt(e,n,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});return CryptoJS.enc.Utf8.stringify(o).toString()},getParam:function(e){var t=e||window.location.hash,n=t.split("?")[1],o={};try{for(var r=n.split("&"),i=0;i<r.length;i++){var a=r[i].split("=");o[a[0]]=a[1]}}catch(u){console.log("传入地址参数错误")}return o},isWeChat:function(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)},urlAddParam:function(e,t){console.log(e);var n=e+="?";for(var o in t)n+="".concat(o,"=").concat(t[o],"&");return console.log(n),n},checkIDCard:function(e){for(var t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=["1","0","X","9","8","7","6","5","4","3","2"],o=e+"",r=e[17],i=o.substring(0,17),a=i.split(""),u=a.length,c=0,s=0;s<u;s++)c+=a[s]*t[s];var l=c%11,f=n[l],d=/^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/,p=d.test(e);return!(r!==f||!p)},indexGetToken:function(){if(this.isWeChat()){var e=this.getParam().code;e?U({wXCode:e}).then((function(e){console.log(e)})):window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+window.ENV.appId+"&redirect_uri="+encodeURIComponent(window.location.href)+"&response_type=code&scope=snsapi_base&state=11#wechat_redirect"}}};function _(){var e=T.getStorage("bw_AccessToken")||"",t={Authorization:"Bearer "+e,systemType:T.isWeChat?"WECHAT":"H5"};return t}function j(e){return new Promise((function(t,n){A.defaults.headers=_(),A.post("/Api/Sms/SendCaptcha",e).then((function(e){t(e)}))}))}function N(e){return new Promise((function(t,n){A.post("/Api/Sms/SendCaptcha",e).then((function(e){t(e)}))}))}function I(e){return new Promise((function(t,n){A.post("/Api/PromoteUser/Register",e).then((function(e){t(e)}))}))}function J(e){return new Promise((function(t,n){A.post("/Api/PromoteUser/LoginWithSms",e).then((function(e){t(e)}))}))}function $(e){return new Promise((function(t,n){A.defaults.headers=_(),A.post("/Api/PromoteUser/Info",e).then((function(e){t(e)}))}))}function R(){return new Promise((function(e,t){A.get("/Api/WX/getSignature",{params:{url:encodeURIComponent(window.location.href.split("#")[0])}}).then((function(t){e(t)}))}))}function U(e){return new Promise((function(t,n){A.get("/Api/WX/weXinLogin",{params:e}).then((function(e){t(e)}))}))}function L(e){return new Promise((function(t,n){A.defaults.headers=_(),A.post("/Api/IncomeDetails/GetPersonalIncome",e).then((function(e){t(e)}))}))}var M={saveUserInfo:function(e){var t=e.state,n=e.commit;0==Object.keys(t.userInfo)&&$().then((function(e){n("SAVE_USER_INFO",e.data)}))}},W={SAVE_USER_INFO:function(e,t){e.userInfo=t}},z={userInfo:{}};r["a"].use(y["a"]);var D=new y["a"].Store({getters:b,actions:M,mutations:W,state:z}),F=n("816c"),V=n.n(F);r["a"].mixin({methods:{goUrl:function(e){this.$router.push({path:e})}}});n("ca3e");var B=n("120e"),q=(n("3cc1"),n("3394"),n("9306")),X=n.n(q);r["a"].prototype.$ENV=d,r["a"].config.productionTip=!1,r["a"].prototype.$utils=T,window.$utils=T,r["a"].use(B["a"]),r["a"].use(X.a),r["a"].prototype.$http=o,r["a"].prototype.$axios=A,V.a.prototype.focus=function(e){var t,n=navigator.userAgent.indexOf("Windows Phone")>=0,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!n;o&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type&&"email"!==e.type?(t=e.value.length,e.setSelectionRange(t,t),e.focus()):e.focus()},V.a.attach(document.body),document.addEventListener("deviceready",(function(){new r["a"]({router:v,store:D,render:function(e){return e(f)}}).$mount("#app")}),!1)},"5c0b":function(e,t,n){"use strict";var o=n("735e"),r=n.n(o);r.a},"735e":function(e,t,n){},ca3e:function(e,t,n){}});
//# sourceMappingURL=app.ee47d8e8.js.map