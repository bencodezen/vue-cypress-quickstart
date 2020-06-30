import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numbers: [1, 2, 3, 4, 5]
  },
  mutations: {
    updateNumbers(state, payload) {
      state.numbers.push(payload)
    }
  },
  actions: {
    addNumber (context, payload) {
      context.commit('updateNumbers', payload)
    }
  },
  modules: {
  }
})
