<template>
  <div id="app">
    <div class="titleBox">
      <h1>{{title}}</h1>
    </div>
    <div class="searchBox">
      <input type="text" v-model="search"></input>
      <button @click="getRecipes(search)">Search for Recipe</button>
    </div>
    <table class="blueTable">
      <tr>
        <th>Recipe</th>
        <th>Link</th>
      </tr>
      <tr v-for="recipe in food">
        <td>
          {{recipe.title}}
        </td>
        <td>
          <a :href="recipe.source_url" target="_blank">Click here</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  created(){

  },
  data(){
    return{
      title: "Recipe Search App",
      food: [],
      search: "",
      apiKey: "*******"
    }
  },
  methods: {
    getRecipes(searchString){
      axios.get(`https://www.food2fork.com/api/search?key=${this.apiKey}&q=${searchString}`)
      .then(res => {
        this.food = res.data.recipes
      })
      .catch(err => {
        console.log(e)
      })
    }
  },
  computed: {

  }
}
</script>

<style>


</style>
