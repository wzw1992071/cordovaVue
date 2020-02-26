/*
 * @ Author: yxs 
 * @ 注册
 */
 <template>
    <div id="register_wrap">
      <div class="title"><span class="fs_24 bold">注册推广员</span><span class="bold" v-if="RecommendCode">（上级推广员：{{RecommendCode}}）</span></div>
      <div class="flex center mb_16">
        <input v-model="phone" class="input" type="text" placeholder="输入手机号">
      </div>
      <div class="flex center mb_16">
        <input v-model="code" class="input" type="text" placeholder="输入验证码">
        <div class="button bg_red fs_14 col_6 ml_11" @click="getCode">{{getCodeStr}}</div>
      </div>
      <div class="flex center mb_16">
        <input v-model="name" class="input" type="text" placeholder="输入真实姓名">
      </div>
      <div class="flex center mb_16">
        <input v-model="idcard" class="input" type="text" placeholder="输入身份证号">
      </div>
      <div class="button bg_red fs_16 mt_25" :class="{disabled: !disabled}" @click="register">注册</div>
      <img v-if="showBottomImg" class="bottom_img" src="../../assets/img/register_bottom_img.png" alt="">
   </div>
 </template>
 
 <script>
 export default {
   name: 'register',
   data() {
     return {
       phone: '', // 电话号码
       code: '', // 验证码
       name: '', // 姓名
       idcard: '', // 身份证号
       isClickGetCode: false, // 是否点击了获取验证码
       getCodeStr: '获取验证码',
       myInterVal: 0,
       RecommendCode:"",
       domHeight: document.documentElement.clientHeight,  //默认屏幕高度
       showHeight: document.documentElement.clientHeight   //实时屏幕高度
     }
   },
   
   computed: {
     disabled() {
       if (this.phone && this.code && this.name && this.idcard) {
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
   created(){
    if(this.$utils.getParam()){
      this.RecommendCode = this.$utils.getParam().idCode
    }
   }, 
   methods: {
     verifyParam() {
       if (!this.$utils.validatePhone(this.phone)) {
         return {show: true, msg: '请输入正确的手机号！'}
       }
       if (/^[\u4E00-\u9FA5]*$/.test(this.name) === false) {
         return {show: true, msg: '姓名只能输入中文'}
       }
       if (!this.$utils.checkIDCard(this.idcard)) {
         return {show: true, msg: '请输入正确的身份证号'}
       }
       return {show: false, msg: ''}
     },
     // 获取验证码
     getCode() {
       if (!this.$utils.validatePhone(this.phone)) {
         this.$toast('请输入正确的手机号！')
         return
       }
       this.isClickGetCode = true
       if (this.getCodeStr !== '获取验证码') return
       this.$http.getCode({phone: this.phone}).then(res => {
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
     register() {
       let verifyParam = this.verifyParam()
       if (verifyParam.show) {
         this.$toast(verifyParam.msg)
         return
       }
       this.$http.register({phone: this.phone, captcha: this.code, real_name: this.name, id_card: this.idcard, parent_number: this.RecommendCode}).then(res => {
         if (res.status === 1) {
           this.$toast('注册成功！')
           this.$router.replace('/login')
         } else {
           this.$toast(res.message)
         }
       })
     }
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
  #register_wrap{
    padding: 0.26rem 0.29rem;
    .title {
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
    .mb_16 {
      margin-bottom: 0.16rem;
    }
    .ml_11 {
      margin-left: 0.11rem;
    }
    .mt_25 {
      margin-top: 0.25rem;
    }
    .bottom_img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 1.51rem;
      z-index: -1;
    }
    .disabled {
      background: $main_color_bg_disabled;
    }
  }
 </style>