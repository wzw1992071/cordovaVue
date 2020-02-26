<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-steps :active="1">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    
    getDate(){
      this.$http.test().then(res=>{
        console.log(res)
      })
    }
  },
  created(){
    this.getDate()
  }
}
</script>
