const getNextTaskNumber = todos => {
  return todos.length
}

const isEmptyString = (value) => {
  if (value === '') {
    return true
  } else {
    return false
  }
}

const state = {
  todos: [
    { id: 0,
      description: 'working on css.',
      status: false },
    { id: 1,
      description: 'working on vue',
      status: true },
    { id: 2,
      description: 'working on vuex',
      status: false }
  ],
  todoForm: '',
  alert: {
    displayAlert: false,
    message: 'Invalid input! Please check again.'
  }
}

const getters = {
  taskToDo: state => {
    return state.todos.filter(todo => todo.status === false).length
  },
  taskCompleted: state => {
    return state.todos.filter(todo => todo.status === true).length
  },
  getTodos: state => {
    return state.todos.filter(todo => todo.status === false)
  },
  getDone: state => {
    return state.todos.filter(todo => todo.status === true)
  }
}

const mutations = {
  setStatus (state, taskObject) {
    const status = taskObject.status
    state.todos[taskObject.id].status = !status
  },
  updateTodoForm (state, payload) {
    state.todoForm = payload
  },
  addTodo (state) {
    state.alert.displayAlert = isEmptyString(state.todoForm)
    if (!state.alert.displayAlert) {
      state.todos.push({
        id: getNextTaskNumber(state.todos),
        description: state.todoForm,
        status: false
      })
    }
  },
  clearAlert (state) {
    state.alert.displayAlert = false
  },
  clearTodos (state) {
    state.todos = []
  }
}

const actions = {
  setStatus (context, todo) {
    context.commit('setStatus', todo)
  },
  updateTodoForm (context, payload) {
    context.commit('updateTodoForm', payload)
  },
  addTodo ({ commit }) {
    commit('addTodo')
    setTimeout(() => {
      commit('clearAlert')
    }, 2000)
  },
  clearTodos ({ commit }) {
    commit('clearTodos')
  }
}

const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default store
