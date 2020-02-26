import axios from "@/utils/myAxios";
import utils from "@/utils/utils";

function getToken(){
    let token = utils.getStorage('bw_AccessToken') || '';   
    let headerObj = {
        "Authorization": 'Bearer ' + token,
        "systemType":utils.isWeChat?"WECHAT":"H5"
    };
    return headerObj
}


// 请求模板（如果后面接口通了可以直接写请求不在需要mocker可以删掉打开http里面走代理）
export function test(sendParam) {
    return new Promise((resolve, reject) => {
        axios.defaults.headers = getToken()
        axios.post("/Api/Sms/SendCaptcha", sendParam).then(res => {
            resolve(res)
        })
    })
}
// 获取验证码
export function getCode(sendParam) {
    return new Promise((resolve, reject) => {
        axios.post("/Api/Sms/SendCaptcha", sendParam).then(res => {
            resolve(res)
        })
    }) 
}
// 注册
export function register(sendParam) {
    return new Promise((resolve, reject) => {
        axios.post('/Api/PromoteUser/Register', sendParam).then(res => {
            resolve(res)
        })
    })
}
// 登录
export function LoginWithSms(sendParam) {
    return new Promise((resolve, reject) => {
        axios.post('/Api/PromoteUser/LoginWithSms', sendParam).then(res => {
            resolve(res)
        })
    })   
}
// 获取用户信息
export function getUserInfo(sendParam) {
    return new Promise((resolve, reject) => {
        axios.defaults.headers = getToken()

        axios.post("/Api/PromoteUser/Info", sendParam).then(res => {
            resolve(res)
        })
    })
}

/**
 * 获取微信 sign
 */
export function GetSignature() {
    return new Promise((resolve, reject) => {
        axios.get('/Api/WX/getSignature',{ params: {url: encodeURIComponent(window.location.href.split('#')[0])}}).then((res) => {
            resolve(res)
        })
    })
}

// 获取openID
export function GetToken(sendParam) {
    return new Promise((resolve, reject) => {
        axios.get('/Api/WX/weXinLogin', {params: sendParam}).then(res => {
            resolve(res)
        })
    })
}
// 查询个人收益列表
export function GetPersonalIncome(sendParam) {
    return new Promise((resolve, reject) => {
        axios.defaults.headers = getToken()

        axios.post("/Api/IncomeDetails/GetPersonalIncome", sendParam).then(res => {
            resolve(res)
        })
    })
}



