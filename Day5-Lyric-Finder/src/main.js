import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import http from './http';

Vue.config.productionTip = false;

Vue.component('icon', require('./components/Icon').default);

Vue.prototype.$http = http;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
