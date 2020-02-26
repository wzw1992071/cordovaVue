
 <template>
    <div id="my_wallet_wrap">
      <div class="top_wrap">
        <div class="price_wrap">
          <div class="fs_12">总金额</div>
          <div class="price">{{totalPrice|tofixed}}</div>
        </div>
        <div class="line"></div>
        <div class="price_wrap">
          <div class="fs_12">累计收益</div>
          <div class="price">{{allPrice|tofixed}}</div>
        </div>
      </div>
      <van-sticky>
        <div class="detail_title_box">
          <div class="detail_title_wrap flex space_between">
            <div class="fs_14 bold">账单明细</div>
            <van-dropdown-menu>
              <van-dropdown-item v-model="value1" :options="option1" @change="typeChange"/>
            </van-dropdown-menu>
          </div>
        </div>
      </van-sticky>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="loadMore"
      van-clearfix
      >
        <ul class="detail_list_wrap">
          <li class="flex space_between align_center" v-for="(item,index) in walletList" :key="index">
            <div>
              <div class="fs_14 bold_400">{{item.operation_detail|operationType}}</div>
              <div class="fs_10 bold_400 minor_text_color">{{item.create_time | getDate}}</div>
            </div>
            <div class="price" :class="{'negative':(item.amount*1<0)}">{{item.amount|tofixed}}</div>
          </li>
          
        </ul>
      </van-list>
    </div>
 </template>
 
 <script>
 import { Sticky, DropdownMenu, DropdownItem } from 'vant';
 export default {
   components: {Sticky, DropdownMenu, DropdownItem},
   data() {
     return {
      value1: "",
      totalPrice:"",//总金额
      allPrice:"",//累计收益
      page_num:0,//当前页数
      nextPage:1,//下一个页数
      page_size:8,//每页条数
      loading:false,
      finished:false,
      // 下拉框选择
      option1: [
        { text: '全部', value: "" },
        { text: '收益', value: "1" },
        { text: '提现', value: "2" }
      ],
      // 数据列表
      walletList:[
        
      ]
     }
   },
  filters:{
    getDate(timestamp) {
        timestamp = timestamp.replace(/-/g, "/");
      
        let date = new Date(timestamp)
        let dateStr = window.$utils.dateFormat(date, 'yyyy-MM-dd hh:mm')
        return dateStr
    },
    tofixed(number){
      number = number*1;
      number=number.toFixed(2)
      return number
    },
    operationType(value){
      let name="";
      switch(value){
        case 101 : name="返利收益" 
          break;
        case 201 : name="提取" 
          break;
        default :name="其他" 
          break;
      }
      return name
    }
  },
  methods: {

      typeChange(value){
        this.page_num = 0
        this.walletList=[]
        this.finished = false;
        // this.initData()
        document.querySelector("#my_wallet_wrap").scrollTo(0,0);
        
      },
      initData(){
        
        this.$http.GetPersonalIncome({
         page_num:1,
         page_size:this.page_size,
         operation_type:this.value1
       }).then(res=>{
          this.walletList=[]
          this.totalPrice= res.data.balance
          this.allPrice= res.data.total_revenue
          this.walletList = this.walletList.concat(res.data.records)
          this.page = this.nextPage
          this.loading = false;
          if (res.data.records.length < this.page_size) {   
            this.finished = true;
          }
       })
     },
     loadMore(){
      
      this.nextPage = this.page_num+1
      this.$http.GetPersonalIncome({
         page_num:this.nextPage,
         page_size:this.page_size,
         operation_type:this.value1
       }).then(res=>{
        this.totalPrice= res.data.balance
        this.allPrice= res.data.total_revenue
        this.walletList = this.walletList.concat(res.data.records)
        this.page_num = this.nextPage
        this.loading = false;
        if (res.data.records.length < this.page_size) {   
          this.finished = true;
        }
       })
     }
  },
  mounted(){
      // this.initData()
  }
 }
 </script>
 
 <style lang="scss" scoped>
    #my_wallet_wrap {
      height: 100%;
      margin-bottom: 0.1rem;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      .top_wrap {
        display: flex;
        margin: 0.13rem 0.15rem 0;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background: $main_color;
        height: 1.39rem;
        border-radius: 0.08rem;
        .price_wrap {
          text-align: center;
          color: #ffffff;
          .price {
            font-size: 0.3rem;
            font-family: 'DINAlternateBold';
            margin-top: 0.11rem;
          }
        }
        .line {
          height: 0.32rem;
          width: 0.01rem;
          background: #ffffff;
        }
      }
      .detail_title_box {
        margin: 0 0.15rem;
        background: #ffffff;
        padding-top: 0.17rem;
      }
      .detail_title_wrap {
        margin-bottom: 0.06rem;
        line-height: 0.48rem;
        background: $input_bg_color;
        border-radius: 0.06rem;
        padding: 0 0.16rem;
      }
      .detail_list_wrap {
        padding: 0 0.15rem;
        li {
          height: 0.61rem;
          border-bottom: 1px solid $border_color;
          padding: 0 0.15rem;
        }
        .price {
          font-family: 'DINAlternateBold';
          font-size: 0.16rem;
          color: $main_color;
          &.negative{
            color: #03BB2B
          }
        }
      }
      .bold_400 {
        font-weight: 400
      }
    }
    #my_wallet_wrap /deep/ .van-dropdown-menu {
      background: $input_bg_color;
      font-size: 0.14rem;
      font-weight: 500;
      .van-dropdown-menu__title {
        color: #333333;
        font-weight: bold;
      }
    }
    #my_wallet_wrap /deep/ .van-cell {
      padding: 0.1rem 0.3rem;
      color: #747480;
    }
    #my_wallet_wrap /deep/ .van-cell:not(:last-child)::after {
      border-bottom: 1px solid $border_color;
    }
    #my_wallet_wrap /deep/ .van-dropdown-item__option--active, .van-dropdown-item__option--active .van-dropdown-item__icon {
      color: $main_color;
    }
    #my_wallet_wrap /deep/ .van-icon {
      color: $main_color;
    }
    

 </style>