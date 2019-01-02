import {
  Http
} from '../http.js'

import store from '@/store'

class CommonModel extends Http {
  // 注意這裡的方法都要用箭頭函數，否則里面的this將指向vue
  getUserInfo = () => {}
  getData = (id) => {
    const cache = store.state.data
    cache || this.request({
      url: 'https://music.niubishanshan.top/api/music/recommend',
      success: res => {
        store.commit('changeData', res.data)
      }
    })
  }
}

export {
  CommonModel
}
