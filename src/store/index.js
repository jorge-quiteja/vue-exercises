import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filterTodos: null,
    todos: [
      { id: 1661889443161, title: "Exemplo 1", progress: "Pending" },
      { id: 1661890676842, title: "Exemplo 2", progress: "Pending" },
      { id: 1661890677909, title: "Exemplo 3", progress: "Done" },
      { id: 1661891050039, title: "Exemplo 4", progress: "Done" }
    ],
    filteredTodos: []
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
    addTodo({ state, commit }, todoName) {
      let todosToAdd = state.todos;
      let date = new Date();

      let newTodo = {
        id: date.getTime(),
        title: todoName,
        progress: "Pending",
      };
      todosToAdd.push(newTodo);

      commit('setTodos', todosToAdd);
    },
    updateTodoStatus({ state, commit }, todo) {
      let updatedTodos = state.todos.filter(t => {
        if (t.id == todo.id) {
          t.progress = t.progress === "Pending" ? "Done" : "Pending";
        }
        return t;
      });

      commit('setTodos', updatedTodos);
    },
    removeTodo({ state, commit }, todoId) {
      let todosToRemove = state.todos.filter(t => t.id !== todoId);

      commit('setTodos', todosToRemove);
    },
    setFilter({ commit }, filter) {
      commit('setFilter', filter);
    },
    // fetchTodos({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     var cached = JSON.parse(localStorage.getItem("todos"));
    //     if (cached) {
    //       commit("setProducts", cached);
    //       resolve();
    //     }
    //     reject();
    //   })
    // },
  },
});
