<template>
    <div id="MyCode">
        <!-- <div class="title">我的推广码</div> -->
        <!-- <div class="title">
            <div>推广码</div>
            <div>乘客码</div>
        </div> -->
        <van-tabs type="card" swipeable animated :lazy-render="false">
            <van-tab title="推广码" >
                <div class="box">
                    <div class="text">扫描此二维码注册推广员</div>
                    <!-- <div id="qrcode"></div> -->
                    <vue-qr  :text="shareUrl" :size="240" :dotScale="1" :correctLevel="1"  :logoScale="50" :logoSrc="imgUrl"></vue-qr>
                    <!-- <div class="share" @click="shadow=true">邀请成为推广员</div> -->
                    <div class="tag" >长按保存图片</div>
                    <div class="share" @click="copyUrl(0)">邀请成为推广员</div>
                </div>
                
            </van-tab>
            <van-tab title="乘客码" >
                <div class="box">
                    <div class="text">保存二维码，分享给乘客进行注册</div>
                    <vue-qr  :text="shareUrl2" :size="240" :dotScale="1" :correctLevel="1" :logoScale="50" :logoSrc="imgUrl"></vue-qr>
                    <!-- <div class="share" @click="shadow=true">邀请成为推广员</div> -->
                    <div class="tag" >长按保存图片</div>
                    <div class="share" @click="copyUrl(1)">邀请乘客注册</div>
                </div>
                
            </van-tab>
        </van-tabs>
      
        <!-- <div v-if="shadow&&$utils.getIsWxClient()" class="shadow" @click="shadow=false">
            <img src="../../assets/img/share.png" alt="">
        </div> -->
        <!-- <div v-if="shadow" class="shadow" @click="shadow=false">
            <img src="../../assets/img/share.png" alt="">
        </div> -->
    </div>

</template>

<script>

import QRCode from 'qrcodejs2' 
import VueQr from 'vue-qr'
 import {mapGetters,mapActions} from "vuex"
export default {
    name:"MyCode",
    data(){
        return {
            shadow:false,
            imgUrl:require("@/assets/img/logo.png"),
            
        
        }
    },
    computed:{
        ...mapGetters(["userInfo"]),
        shareUrl(){
            return `${this.$ENV.url}/#/register?idCode=${this.userInfo.promote_code}`
        },
        shareUrl2(){
            return `${this.$ENV.url2}#/receiveCouponCM?activityId=${this.userInfo.activity_Id}&code=${this.userInfo.promote_code}`
        }
    },
    components: {VueQr},
    methods: {
        ...mapActions(["saveUserInfo"]),
        
        copyUrl(type){
            let shareUrl = "";
            if(type==0){
                shareUrl =  this.shareUrl
            }else if(type==1){
                shareUrl =  this.shareUrl2
            }
            this.$copyText(shareUrl).then( (e)=> {
                this.$toast('链接已复制，快去邀请注册吧')
            }, function (err) {
                this.$toast('链接复制失败')
            })
        }
    },
    created(){
    },
    mounted(){
        this.saveUserInfo()
        setTimeout(()=>{
            let qrcode = new QRCode('qrcode', {
                width: 210,  
                height:210,
                text: this.shareUrl, // 二维码地址
                colorDark : "#000",
                colorLight : "#fff",
            })
        },300)
        setTimeout(()=>{
            let qrcode = new QRCode('qrcode2', {
                width: 210,  
                height:210,
                text: this.shareUrl2, // 二维码地址
                colorDark : "#000",
                colorLight : "#fff",
            })
        },300)
        console.log(this.shareUrl2)
        
    }

}
</script>

<style lang="scss" scoped>
    #MyCode /deep/ .van-tabs__wrap{
        height: 0.36rem;
    }
    #MyCode /deep/ .van-tabs__nav--card{
        height: 0.36rem;
        border:1px solid #EDEDED;
        border-radius: 0.18rem;
        margin:0 calc(50% - 0.82rem);
        .van-tab{
            border-right:0;
            line-height: 0.36rem;
        }
        .van-tab--active{
            border-radius: 0.18rem;
            border: 0;
        }
    }
    .box{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size:0.15rem;
        height: 100%;
        margin-top: 0.3rem;
        .title{
           
            margin: 0.3rem 0 0.2rem;
          
            display: flex
        }
        .text{
            color:$info_text_color;
            margin-bottom: 0.58rem;
        }
        .tag{
            color: #74747A;
            margin-top: 0.22rem;
        }
        .share{
            margin-top: 0.9rem;
            font-size: 0.14rem;
            color: $main_color;
            background: #FEF3F4;
            width: 1.38rem;
            height: 0.42rem;
             line-height: 0.42rem;
            text-align: center;
            border-radius: 0.21rem;
            margin-bottom: 0.6rem;
        }
        .shadow{
            position: absolute;
            left: 0;
            right: 0;
            top:0;
            bottom: 0;
            background: rgba($color: #000000, $alpha: 0.4);
            img{
                position: absolute;
                width: 2rem;
                height: 1.5rem;
                right: 0.2rem;
                top:0.2rem;
            }
        }
    }
</style>
    
