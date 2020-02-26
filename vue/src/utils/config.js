if (process.env.NODE_ENV == 'development') {
    window.ENV = {
        "version": "1.0.0",
        "isTest": true,
        "url": "http://testtg.jichangzhuanxian.com",
        "url2": " http://testwechat.jichangzhuanxian.com/publicView/index.html",      
        "img_url": "http://test.jichangzhuanxian.com/",
        "api": "http://testtg.jichangzhuanxian.com/Sales/", //测试接口
        // "api": "https://test.jichangzhuanxian.com/api/", //测试接口
        "appId": "wx6d432ff2d26c9720", //微信测试公众号
        // "sorket": "https://test.jichangzhuanxian.com/", //websorket 地址  后台推送消息给微信页面 三方公用界面也使用这个链接*/
        "sorket": "https://test.jichangzhuanxian.com/", //websorket 地址  后台推送消息给微信页面 三方公用界面也使用这个链接*/
        
    }

} else if (process.env.NODE_ENV == 'pre') {
    window.ENV = {
        "version": "1.0.0",
        "isTest": true,
        "img_url": "https://pre.jichangzhuanxian.com/",
        "url": "http://pretg.jichangzhuanxian.com",
        // "url": "https://h5.jichangzhuanxian.com",
        "url2": " http://prewechat.jichangzhuanxian.com/publicView/index.html",    
        "api": "http://pretg.jichangzhuanxian.com/Sales/", //测试接口
        // "api": "https://test.jichangzhuanxian.com/api/", //测试接口
        "appId": "wx6d432ff2d26c9720", //微信测试公众号
        // "sorket": "https://test.jichangzhuanxian.com/", //websorket 地址  后台推送消息给微信页面 三方公用界面也使用这个链接*/
     

    }
} else if (process.env.NODE_ENV == 'production') {
    window.ENV = {
        "version": "1.0.0",
        "isTest": false,
        "url2": " https://wechat.jichangzhuanxian.com/publicView/index.html",
        "url": "https://tg.jichangzhuanxian.com",
        "api": "https://tg.jichangzhuanxian.com/Sales/", //接口
        "img_url": "https://test.jichangzhuanxian.com/",
        "appId": "wx4521059bd1734294", //微信测试公众号
        
    }
}

export default window.ENV