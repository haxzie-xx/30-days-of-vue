import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
        article: ''
    },
    getters: {
      allArticles: state => {
        return state.article.items
      },
      articleCategory: (state, getters) => (slug) => {
        return getters.allArticles.filter(val => val.categories.includes(slug))
      }
    },
    mutations: {
      setArticle (state, data) {
        state.article = data
      }
    },
    actions: {
      async fetchArticle({ commit }) {
        let { data } = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
        commit('setArticle', data)
      }
    }
  })
}
export default store