/*
 * @ Author: yxs 
 * @ 登录
 */
 <template>
  <div id="login_wrap" class="flex column">
   <div class="title">登录推广号</div>
    <div class="flex center mb_24">
      <input v-model="phone" class="input" type="text" placeholder="输入手机号">
    </div>
    <div class="flex center">
      <input v-model="code" class="input" type="text" placeholder="输入验证码">
      <div class="button bg_red fs_14 col_6 ml_11" @click="getCode">{{getCodeStr}}</div>
    </div>
    <div class="button bg_red fs_16 mt_50" :class="{disabled: !disabled}" @click="login">登录</div>
	<div class="button bg_red fs_16 mt_50"  @click="gotest">登录1</div>

    <img v-if="showBottomImg" class="bottom_img" src="../../assets/img/login_bottom_img.png" alt="">
	
  </div>
 </template>
 
 <script>
 export default {
   name: 'login',
   data () {
     return {
       phone: '',
       code: '',
       getCodeStr: '获取验证码',
       isClickGetCode: false, // 是否点击了获取验证码
       myInterVal: 0,
       domHeight: document.documentElement.clientHeight,  //默认屏幕高度
       showHeight: document.documentElement.clientHeight   //实时屏幕高度
     }
   },
   computed: {
     disabled() {
       if (this.phone && this.code) {
         return true
       }
       return false
     },
     showBottomImg() {
      if(this.domHeight > this.showHeight){
        return false
      } else {
        return true
      }
    }
   },
   methods: {
     verifyParam() {
       if (!this.$utils.validatePhone(this.phone)) {
         return {show: true, msg: '请输入正确的手机号！'}
       }
       return {show: false, msg: ''}
     },
     // 获取验证码
     getCode() {
       let verifyParam = this.verifyParam()
       if (verifyParam.show) {
         this.$toast(verifyParam.msg)
         return
       }
       this.isClickGetCode = true
       if (this.getCodeStr !== '获取验证码') return
       this.$http.getCode({phone: this.phone}).then(res => {
         console.log(res)
         if (res) {
           var time = 60
           this.getCodeStr = `${time}秒重新获取`
           this.myInterVal = setInterval(() => {
             time--;
             if (time) {
               this.getCodeStr = `${time}秒重新获取`
             } else {
                time = 60
                this.getCodeStr = `获取验证码`;
                clearInterval(this.myInterVal)
             }
           }, 1000)
         } else {
           this.$toast(res.Message)
         }
       })
     },
     // 登录
     login() {
       if (!this.isClickGetCode) {
         this.$toast("您还未获取验证码")
         return
       }
       this.$http.LoginWithSms({phone: this.phone, captcha: this.code}).then(res => {
          let token = res.data.token
          this.$utils.addStorage({
            name: 'bw_AccessToken',
            info: token
          })
          this.$router.replace('/')
       })
     },
	 gotest(){
		this.$router.replace('/test') 
	 }
   },
   created(){
      // this.$utils.indexGetToken()
   },
   mounted() {
     let that = this
     document.body.addEventListener('focusout', function () { 
          window.scrollTo(0,0);
      });
      
     window.onresize = () => {
      return (() => {
        that.showHeight = document.documentElement.clientHeight;//这里需要注意一下可视区高度。
      })();
    };
   }
 }
 </script>
 
 <style lang='scss' scoped>
  #login_wrap{
    padding: 0.26rem 0.29rem;
    .title {
      font-size: 0.24rem;
      font-weight: bold;
      margin-bottom: 0.24rem;
      color: $important_text_color;
    }
    .input {
      width: 100%;
      flex: 1;
      border: none;
      background: $input_bg_color;
      height: 0.48rem;
      padding: 0 0.13rem;
      border-radius: 0.06rem;
    }
    .mb_24 {
      margin-bottom: 0.24rem;
    }
    .ml_11 {
      margin-left: 0.11rem;
    }
    .mt_50 {
      margin-top: 0.5rem;
    }
    .bottom_img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 2.15rem;
    }
    .disabled {
      background: $main_color_bg_disabled;
    }
  }
 </style>