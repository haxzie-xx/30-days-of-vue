import Vue from 'vue'
import Vuex from 'vuex'
import todoStore from './todoStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todoStore
  }
})
