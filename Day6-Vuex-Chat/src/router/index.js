import Vue from 'vue'
import Router from 'vue-router'
import VueChat from '@/components/VueChat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueChat',
      component: VueChat
    }
  ]
})
