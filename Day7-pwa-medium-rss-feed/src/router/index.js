import Vue from 'vue'
import Router from 'vue-router'
const Post   = () => import(/* webpackChunkName: "post" */ '@/components/Post.vue')
const About  = () => import(/* webpackChunkName: "about" */ '@/components/About.vue')
const Detail = () => import(/* webpackChunkName: "detail" */ '@/components/Detail.vue')
const Category = () => import(/* webpackChunkName: "category" */ '@/components/Category.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Post',
      component: Post
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/post/article-detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/category/post/article-detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/category/:slug',
      name: 'category',
      component: Category,
      props: true
    }
  ]
})
