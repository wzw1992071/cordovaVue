(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b30b7"],{2762:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("button",{attrs:{id:"cameraTakePicture"},on:{click:e.getPicture}},[e._v("打开相机")]),n("img",{attrs:{id:"myImage",src:e.src1}})])},c=[],i={name:"home",data:function(){return{src1:""}},components:{},methods:{onDeviceReady:function(){console.log(navigator.camera)},getPicture:function(){var e=this;navigator.camera.getPicture((function(t){e.src="data:image/jpeg;base64,"+t}),(function(){alert("Failed because: "+message)}),{quality:50,destinationType:Camera.DestinationType.DATA_URL})}},created:function(){},mounted:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)}},o=i,r=n("623f"),s=Object(r["a"])(o,a,c,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0b30b7.890a18f2.js.map