import { Toast } from 'vant';
import * as http from "@/http/http"

Array.prototype.delete = function(dx) {
  if (isNaN(dx) || dx > this.length) {
    return false;
  }
  this.splice(dx, 1);
};
if (!$bw) var $bw = {};
window.$bw = $bw;
$bw.websolitStart = false;
export default {
  // 筛选功能
  createFilter(queryString, type) {
    return restaurant => {
      return (
        restaurant[type].toLowerCase().indexOf(queryString.toLowerCase()) >= 0
      );
    };
  },
  // 函数节流
  /**
   * @description 函数节流
   * @param { Function } fn 需要节流的函数
   * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
   * */
  throttle(fn, t = 1000) {
    if (typeof fn !== 'function') {
      console.log('in throttle,first argument must be Function');
      return;
    }
    let _fn = fn;
    let time = null;
    let first = true;
    return function() {
      let arg = arguments;
      let _this = this;
      if (first) {
        _fn.apply(_this, arg);
        first = false;
        return;
      }
      if (time) return;
      time = setTimeout(function() {
        setTimeout(time);
        time = null;
        _fn.apply(_this, arg);
      }, t);
    };
  },
  /**
   * @description 函数防抖
   * @param { Function } fn 需要防抖的函数
   * @param { Number } t 防抖时间 单位ms
   */
  debounce(fn, t = 1000) {
    if (typeof fn !== 'function') {
      console.log('in debounce,first argument must be Function');
      return;
    }
    let time;

    return function() {
      const arg = arguments;

      if (time) {
        clearTimeout(time);
        time = null;
        return;
      }
      time = setTimeout(() => {
        fn.apply(this, arg);
        time = null;
      }, t);
    };
  },
  /**
   * @description 时间格式化
   * @param { Data } 时间
   * @param { String } 格式，默认'yyyy-MM-dd hh:mm:ss'
   * @return { String } 格式化后的时间
   */
  dateFormat(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    const o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds() //毫秒
    };

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  },
  // 电话验证
  validatePhone(number) {
    if (/^1[345789]\d{9}$/.test(number)) {
      return true;
    } else {
      return false;
    }
  },
  //写入Cookie缓存 时间以秒计算
  addStorage(obj) {
    //如果不规定生命周期 默认一年
    if (!obj.livetime) {
      obj.livetime = 60 * 60 * 24 * 365;
    }
    var msg = {
      info: obj.info,
      time: new Date().getTime(),
      livetime: obj.time
    };
    localStorage[obj.name] = JSON.stringify(msg);
  },
  //取Cookie缓存
  getStorage(name) {
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
  },
  //写入session缓存 时间以秒计算
  addSession(obj) {
    //如果不规定生命周期 默认一年
    if (!obj.livetime) {
      obj.livetime = 60 * 60 * 24 * 365;
    }
    var msg = {
      info: obj.info,
      time: new Date().getTime(),
      livetime: obj.time
    };
    sessionStorage[obj.name] = JSON.stringify(msg);
  },
  //取session缓存
  getSession(name) {
    var msg = null;
    if (
      typeof sessionStorage[name] == 'undefined' ||
      sessionStorage[name] === null ||
      sessionStorage[name] === 'null'
    ) {
      return null;
    } else {
      msg = JSON.parse(sessionStorage[name]);
      if (!msg.info || msg.info === null || msg.info.length === 0) return null;
    }
    if (msg.livetime) {
      if (msg.time + msg.livetime * 1000 < new Date().getTime()) return null;
    }
    return msg.info;
  },

  /**
   * 获取周
   */
  getWeek(week) {
    switch (week) {
      case 0:
        return '周日';
      case 1:
        return '周一';
      case 2:
        return '周二';
      case 3:
        return '周三';
      case 4:
        return '周四';
      case 5:
        return '周五';
      case 6:
        return '周六';
      default:
        break;
    }
  },

  /**
   * AES 加密
   */
  encrypt(word, keyStr) {
    keyStr = keyStr ? keyStr : 'tiehangzhuanxian';
    var key = CryptoJS.enc.Utf8.parse(keyStr); //Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  },
  /**
   * AES 解密
   */
  decrypt(word, keyStr) {
    keyStr = keyStr ? keyStr : 'tiehangzhuanxian';
    var key = CryptoJS.enc.Utf8.parse(keyStr); //Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    var decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  },
  /**
   * 获取 URL 的参数
   */
  getParam(url) {
    let name = url || window.location.hash
    let a = name.split("?")[1]
    let urlObj = {};
    try {
      let b = a.split("&");
      for(let i = 0;i<b.length;i++){
      let c = b[i].split("=");
      urlObj[c[0]]=c[1]
      }
    } catch (error) {
      console.log("传入地址参数错误")
    }
    return urlObj;
  },
  /**
   * 判断是否是微信
   */
  isWeChat() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true
    }
    return false
  },
  /**
   * 将get请求参数变成url路由上
   */
  urlAddParam(url,param) {
    console.log(url)
    let newUrl = url+="?";
    for(let i in param){
      newUrl+=`${i}=${param[i]}&`
    }
    console.log(newUrl)
    return newUrl
  },


  // 判断是否为身份证
  checkIDCard(idcode){
    // 加权因子
    var weight_factor = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
    // 校验码
    var check_code = ['1', '0', 'X' , '9', '8', '7', '6', '5', '4', '3', '2'];
    var code = idcode + "";
    var last = idcode[17];//最后一位
    var seventeen = code.substring(0,17);
    // ISO 7064:1983.MOD 11-2
    // 判断最后一位校验码是否正确
    var arr = seventeen.split("");
    var len = arr.length;
    var num = 0;
    for(var i = 0; i < len; i++){
      num = num + arr[i] * weight_factor[i];
    }
    // 获取余数
    var resisue = num%11;
    var last_no = check_code[resisue];
    var idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
    // 判断格式是否正确
    var format = idcard_patter.test(idcode);
    // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
    return last === last_no && format ? true : false;
  },
    /**
   * 获取微信openID
   */
  indexGetToken() {
    if (this.isWeChat()) {
      var code = this.getParam().code;
      if (code) {
        http.GetToken({wXCode: code}).then(res => {
          console.log(res)
        })
      } else {
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +  window.ENV.appId + "&redirect_uri=" + encodeURIComponent(window.location.href) + "&response_type=code&scope=snsapi_base&state=11#wechat_redirect";
      }
    }
  },
};
