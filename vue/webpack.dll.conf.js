const path = require("path");
const webpack = require("webpack");
module.exports = {
 entry: {
 vendor: [
  "vue-router/dist/vue-router.esm.js",
  "vuex/dist/vuex.esm.js",
  "vue/dist/vue.esm.js",
  "axios",
  "lodash",
  "vant",
  'vue-qr'
 ]
 },
 output: {
  path: path.join(__dirname, "public/vendor"),
  filename: "[name].dll.js",
  library: "[name]_[hash]" // vendor.dll.js中暴露出的全局变量名
 },
 plugins: [
   new webpack.DllPlugin({
   path: path.join(__dirname, "public/vendor", "[name]-manifest.json"),
   name: "[name]_[hash]",
   context: process.cwd()
   })
 ]
};