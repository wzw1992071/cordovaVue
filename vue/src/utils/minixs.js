// export default {
//     data(){
//         return {

//         }
//     },
//     methods: {
//         goUrl(urlPath){
//             this.$router.push({path: urlPath})
//         }
//     },
// }
import Vue from 'vue'
Vue.mixin({
    methods: {
        goUrl(urlPath){
            this.$router.push({path: urlPath})
        }
    },
}) 