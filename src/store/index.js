import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app // app一些信息的缓存

  },
  getters
})

export default store
