import Vue from 'vue'
import App from './App.vue'
import markdown from '@/directives/markdown';

Vue.config.productionTip = false
Vue.directive('markdown', markdown);

new Vue({
  render: h => h(App)
}).$mount('#app')
