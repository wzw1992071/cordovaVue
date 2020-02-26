
 <template>
    <div id="main_box">
      <div class="top_box">
        <img src="../../assets/img/promoters_top_img.png" alt="">
        <div class="white fs_24 bold">{{userInfo.real_name}}</div>
        <div class="white fs-17 mt_14">
          推广号：{{userInfo.promote_code}}
         
        </div>
         <div class="qr_code" @click="goUrl('myCode')" >
            <i class="iconfont iconerweima"></i>
            二维码
            <i class="iconfont iconjiantou"></i> 
          </div>
      </div>
      <div class="box no_top_box_shadew">
        <div class="fs_14 default_color">总金额</div>
        <div class="price_box main_color bold" @click="goUrl('myWallet')"><span class="price fs_28">{{userInfo.balance|tofixed}}</span><span class="fs_12">元 <i class="iconfont iconjiantou fs_12"></i> </span></div>
        <div class="button bg_red fs_12">提现</div>
      </div>
      <div class="box">
        <div class="fs_14 default_color title">推广统计</div>
        <div class="content_box flex space_around align_center">
          <div class="flex_grow flex center column">
            <div class="number fs_24 default_color">{{userInfo.offline_number||0}}</div>
            <div class="fs_10">下级推广员</div>
          </div>
          <div class="line"></div>
          <div class="flex_grow flex center column">
            <div class="number fs_24 default_color">{{userInfo.passenger_number}}</div>
            <div class="fs_10">乘客</div>
          </div>
        </div>
      </div>
    </div>
 </template>
 
 <script>
 import {mapActions,mapGetters} from "vuex"

 export default {
   data(){
     return{
       
     }
   },
   filters:{
    
    tofixed(number){
      number = number*1;
      number=number.toFixed(2)
      return number
    },
    
  },
   computed:{
     ...mapGetters(['userInfo']),
   },
   methods: {
     ...mapActions(["saveUserInfo"]),
    

   },
   mounted() {
      this.saveUserInfo()
     
   }
 }
 </script>
 
 <style lang="scss" scoped>
    #main_box {
      width: 100%;
      height: 100%;
      .top_box {
        position: relative;
        padding: 0.48rem 0.29rem 0;
        clear: both;
        img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 2.21rem;
          z-index: -1;
        }
        .white {
          color: #ffffff;
        }
        .mt_14 {
          margin-top: 0.14rem;
        }
        .ml_18 {
          margin-left: 0.18rem;
        }
        .qr_code {
          color: #ffffff;
          margin-top: 0.15rem;
          display: inline-block;
          padding: 0 0.05rem;
          line-height: 0.21rem;
          border: 1px #ffffff solid;
          border-radius: 0.05rem;
          font-size: 0.12rem;
          .iconfont {
            font-size: 0.12rem;
          }
        }
      }

      .box {
        width: 3.23rem;
        margin: 0rem 0.26rem 0.25rem;
        background: #ffffff;
        border-radius: 0.06rem;
        box-shadow: 0 0 0.1rem #E9E9E9;
      }
      .no_top_box_shadew {
        text-align: center;
        padding: 0.24rem 0;
        margin-top: 0.5rem;
        box-shadow: -0.01rem 0.05rem 0.1rem -0.07rem #E9E9E9, 0.01rem 0.01rem 0.1rem -0.07rem #E9E9E9;
      }
      .price_box {
        margin-top: 0.16rem;
      }
      .price {
        font-family: "DINAlternateBold";
        margin-right: 0.07rem;
      }
      .button {
        margin: 0 auto;
        margin-top: 0.18rem;
        width: 0.88rem;
        border-radius: 0.14rem;
        line-height: 0.27rem;
      }
      .title {
        padding-left:0.14rem;
        line-height: 0.43rem;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: -200%;
          right: 0;
          bottom: 0;
          border-bottom: 1px solid #E5E6E9;
          width: 500%;
          transform: scale(.2);
        }
        // border-bottom: 0.005rem solid #E5E6E9;
      }
      .content_box {
        display: flex;
        height: 1.15rem;
        font-size: 0.24rem;
      }
      .line {
        height: 0.26rem;
        width: 0.01rem;
        background: #D8D8D8;
      }
      .number {
        font-family: "DINAlternateBold";
      }
    }
 </style>