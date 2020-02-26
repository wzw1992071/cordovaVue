import {getUserInfo} from "@/http/http"
export default {
    // 保存用户信息
    saveUserInfo({ state, commit }) {
        if( Object.keys(state.userInfo)==0){
            getUserInfo().then(res=>{
                commit("SAVE_USER_INFO",res.data)
            })
        }
    }

}