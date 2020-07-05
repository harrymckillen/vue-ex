import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {
        title: "First Item",
        completed: false
      },
      {
        title: "Second Item",
        completed: false
      }
    ]
  },
  mutations: {
    NEW_TODO(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false
      });
    },
    DELETE_TODO(state, todoItem) {
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    },
    TOGGLE_TODO(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    },
    INCREMENT(state) {
      state.count++;
    }
  },
  actions: {
    addNewTodo({ commit }, todoItem) {
      commit("NEW_TODO", todoItem);
    },
    deleteTodo({ commit }, todoItem) {
      commit("DELETE_TODO", todoItem);
    },
    toggleTodoCompletion({ commit }, todoItem) {
      commit("TOGGLE_TODO", todoItem);
    },
    incrementCount({ commit }) {
      commit("INCREMENT");
    }
  },
  modules: {},
  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === true;
      }).length;
    },
    pendingTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === false;
      }).length;
    },
    getCount(state) {
      return state.count;
    }
  }
});
