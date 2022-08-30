import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    filter: null,
    todos: [],
    filteredTodos: []
  },
  getters: {},
  mutations: {
    setFilters(state, payload) {
      state.filter = payload
    },
    updateItemStatus(state, item) {
      state.todos.map(t => {
        if (t.id === item.id) {
          t.progress = !t.progress
        }
      })
    },
    removeItem(state, itemId) {
      state.todos.map(t => {
        if (t.id !== itemId) {
          return t
        }
      })
    }

  },
  actions: {
    setFilters({ commit }, payload) {
      commit('setFilters', payload);
    },
    updateStatus({ commit }, item) {
      commit('updateItemStatus', item);
    },
    removeItem({ commit }, itemId) {
      commit('removeItem', itemId);
    }
  },
});
