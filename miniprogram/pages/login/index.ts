import { RequestOptions } from "https"
import { login } from "../../api/user"

// pages/login/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },

  onLogin() {
    login({ username: this.data.username, password: this.data.password }).then((res: any) => {
      if (res.statusCode == 200) {
        // wx.showToast({
        //   title: '登录成功',
        //   icon: 'success',
        //   complete: () => wx.navigateBack()
        // })
        // wx.navigateBack({
        //   complete: () => {
        //     wx.showToast({
        //         title: '登录成功',
        //         icon: 'success',
        //       })
        //   }
        // })
        wx.navigateBack()
        wx.showToast({
                  title: '登录成功',
                  icon: 'success',
                })
      } else {
        wx.showToast({
          title: '登录失败',
          icon: 'error'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})