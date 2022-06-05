const baseUrl = 'https://wang-music-1987127-1312313356.ap-shanghai.run.tcloudbase.com/'

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

// const handleError = (response: WechatMiniprogram.RequestSuccessCallbackResult<string | Record<string, any> | ArrayBuffer>, reject: (reason?: any) => void) => {
//   if (response.statusCode !== 200) {
//     reject("请异常")
//   }
// }