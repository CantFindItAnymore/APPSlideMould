import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slideDerection: '',
    data: {}
  },
  mutations: {
    changeSlide (state, derection) {
      state.slideDerection = derection
    },
    changeData (state, data) {
      state.data = data
    }
  }
})
