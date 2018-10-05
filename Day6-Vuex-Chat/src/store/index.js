import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    clients: [{ id: 1, active: false }, { id: 2, active: false }],
    messages: []
  },
  mutations: {
    addMessage (state, message) {
      state.messages.push(message)
    },
    setClientState (state, clientState) {
      const { id, isActive } = clientState
      state.clients.find(c => c.id === id).active = isActive
    },
    addClient (state) {
      const ids = state.clients.map(c => c.id)
      const id = Math.max(...ids) + 1
      state.clients.push({ id, active: false })
    },
    deleteClient (state, id) {
      const index = state.clients.findIndex(c => c.id === id)
      state.clients.splice(index, 1)
    }
  },
  actions: {
    setClientActive ({commit}, clientState) {
      commit('setClientState', clientState)
    },
    setMessage ({commit}, messagePayload) {
      commit('addMessage', messagePayload)
    },
    addClient ({commit}) {
      commit('addClient')
    },
    removeClient ({commit}, id) {
      commit('deleteClient', id)
    }
  },
  getters: {
    clients: state => state.clients,
    messages: state => state.messages,
    activeClientCount: state => state.clients.filter(c => c.active).length
  }
})

export default store
