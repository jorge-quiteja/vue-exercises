import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    filteredTodos: [],
    filterTodos: null,
  },
  getters: {
    todoList(state) {
      if (state.filterTodos === null) {
        return state.todos;
      } else {
        return state.todos.filter(t => t.progress === state.filterTodos);
      }
    }
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setFilter(state, filter) {
      state.filterTodos = filter
    },
  },
  actions: {
    fetchTodos({ commit }) {
      return new Promise((resolve, reject) => {
        var cached = JSON.parse(localStorage.getItem("todos"));
        if (cached) {
          commit("setTodos", cached);
          resolve();
        }
        reject();
      })
    },
    addTodo({ state, commit, dispatch }, todoName) {
      let date = new Date();
      let todosToAdd = state.todos;

      let newTodo = {
        id: date.getTime(),
        title: todoName,
        progress: "Pending",
      };

      todosToAdd.push(newTodo);
      commit('setTodos', todosToAdd);
      dispatch('updateCached');
    },
    updateTodoStatus({ state, commit, dispatch }, todo) {
      let updatedTodos = state.todos.filter(t => {
        if (t.id == todo.id) {
          t.progress = t.progress === "Pending" ? "Done" : "Pending";
        }
        return t;
      });

      commit('setTodos', updatedTodos);
      dispatch('updateCached');
    },
    removeTodo({ state, commit, dispatch }, todoId) {
      let todosToRemove = state.todos.filter(t => t.id !== todoId);

      commit('setTodos', todosToRemove);
      dispatch('updateCached');
    },
    setFilter({ commit }, filter) {
      commit('setFilter', filter);
    },
    updateCached({ state }) {
      localStorage.removeItem("todos");
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});
