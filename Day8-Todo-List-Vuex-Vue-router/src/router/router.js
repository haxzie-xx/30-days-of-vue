import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/HomeBody.vue'
import Main from '../components/views/MainBody.vue'
import Todos from '../components/pages/TodosPage.vue'
import Done from '../components/pages/DonePage.vue'
import TodoItemView from '../components/pages/TodoItemPage.vue'
import Input from '../components/organisms/Input.vue'
import Reset from '../components/molecules/ResetButton.vue'

Vue.use(Router)

const routes = [
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/todoList/',
        name: 'todos',
        components: {
          default: Todos,
          input: Input,
          reset: Reset
        }
      },
      {
        path: '/done',
        name: 'done',
        components: {
          default: Done,
          input: Input,
          reset: Reset
        }
      },
      {
        path: '/:name/:id',
        name: 'todoItem',
        component: TodoItemView,
        props: true
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

export default new Router({
  mode: 'history',
  routes
})
