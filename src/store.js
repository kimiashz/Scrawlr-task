import { createStore } from 'vuex'

const store = createStore({
  state: {
    items: [
      { count: 1, selected: true },
      { count: 1, selected: false },
      { count: 1, selected: false },
    ]
  },
  mutations: {
    toggle (state, key) {
      state.items[key].selected = !state.items[key].selected;
    },
    add (state, key) {
      ++state.items[key].count;
    }
  },
  actions: {
    toggle ({ commit }, key) {
      commit('toggle', key)
    },
    add ({ commit }, key) {
      commit('add', key)
    }
  }
})

export default store;