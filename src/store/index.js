import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    filter: null,
  },
  getters: {},
  mutations: {
    setFilters(state, payload) {
      state.filter = payload      
    }
  },
  actions: {
    setFilters(context, payload) {
      context.commit('setFilters', payload);
    }
  },
  modules: {},
});
