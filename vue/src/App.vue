<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  methods:{
    setRem() {
      var windowWidth = document.body.offsetWidth;
      var RootFontSize = windowWidth / 375 * 100;
      document.getElementsByTagName("html")[0].style.fontSize = RootFontSize + "px";
    }
  },
  created(){
    // console.log(Paho)
    this.setRem();
    window.onresize = ()=> {
      this.setRem();
    }
  }
}
</script>
<style lang="scss">
#app{
  font-size: 0.15rem;
  color: $important_text_color;
}

</style>
