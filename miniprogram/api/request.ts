import { getToken, removeToken, setToken } from "../utils/auth"

const baseUrl = 'https://wang-music-1987127-1312313356.ap-shanghai.run.tcloudbase.com'

export const get = (uri: string) => {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + uri,
      method: 'GET',
      success: (res) => {
        // handleError(res, reject)
        resolve(res.data)
      },
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

export const post = (uri: string, data: object) => {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + uri,
      method: 'POST',
      data: data,
      success: (res) => {
        if (res.statusCode === 401) {
          removeToken()
          const currentPages = getCurrentPages()
          const currentRoute = currentPages[currentPages.length - 1].route
          if (currentRoute !== 'pages/login/index') {
            wx.navigateTo({
              url: `/pages/login/index`
            })
          }
          wx.showToast({
            title: '用户未登录',
            icon: 'error'
          })
        }
        _handleToken(res.header)
        resolve(res)
      },
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

const _handleToken = (header: any) => {
  const token = header['authorization'] || null
  if (token && getToken() !== token) {
    setToken(token)
  }
}

// const handleError = (response: WechatMiniprogram.RequestSuccessCallbackResult<string | Record<string, any> | ArrayBuffer>, reject: (reason?: any) => void) => {
//   if (response.statusCode !== 200) {
//     reject("请异常")
//   }
// }