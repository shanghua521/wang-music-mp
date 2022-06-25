import { getToken } from "./utils/auth"

// app.ts
App({
  globalData: {},
  _isLoginPage(){
    const currentPage = getCurrentPages()
    console.log(currentPage)
    return false
  },
  onLaunch() {
    // if(!getToken()){
    //   wx.navigateTo({
    //     url:'/pages/login/index'
    //   })
    // }
  },
})