<template>
  <div class="home">
	<button id = "cameraTakePicture" @click="getPicture">打开相机</button>
	<div>
		<img  id = "myImage" :src="src1"></img>
	</div>
	
  </div>
</template>

<script>


export default {
  name: 'home',
  data(){
	return {
		src1:"",
		base64:"这是Base64",
	}  
  },
  components: {
    
  },
  methods: {
	onDeviceReady(){
	  console.log(navigator.camera);
	},
    getPicture(){
		var that = this;
		navigator.camera.getPicture((imageData)=>{
			// 成功后回调
	
			that.src1 = "data:image/png;base64," + imageData;
			
		}, ()=>{
			// 失败后回调
			console.log(3333333)
			alert('Failed because: ' + message);
		}, { 
		  quality: 50,
		  destinationType: Camera.DestinationType.DATA_URL
	   });
	}
  },
  created(){
    
  },
  mounted() {
  	document.addEventListener("deviceready", this.onDeviceReady, false);
  }
}
</script>

<style lang="scss" scoped>
	#myImage{
		width: 1rem;
	}
</style>
