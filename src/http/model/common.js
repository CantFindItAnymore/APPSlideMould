import {
  Http
} from '../http.js'

class CommonModel extends Http {
  // 注意這裡的方法都要用箭頭函數，否則this將指向vue
  getUserInfo = () => {
  }
  getData = (callBack) => {
    this.request({
      url: 'https://music.niubishanshan.top/api/music/recommend',
      success: res => {
        callBack(res)
      }
    })
  }
}

export {
  CommonModel
}
