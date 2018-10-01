import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('./views/Home.vue').default
        },
        {
            path: '/lyrics/track/:id',
            component: require('./views/Lyrics.vue').default
        }
    ]
});
