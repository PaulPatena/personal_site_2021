import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: true
  },
  getters: {
    getDarkMode: state => state.darkMode,
  },
  mutations: {
    invertDarkMode(state) {
      state.darkMode = !state.darkMode
    }
  },
  actions: {
  },
  modules: {
  }
})
