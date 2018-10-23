<template>
  <div id="app">
    <table class="blueTable">
      <tr>
        <th>Recipe</th>
        <th>Link</th>
      </tr>
      <tr v-for="recipe in food">
        <td>
          {{recipe.item}}
        </td>
        <td>
          <a :href="recipe.source_url" target="_blank">Click here</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      food: [
        {
          "item"        : "Pizza",
          "source_url"  : "http://pizzahut.com"
        },
        {
          "item"        : "Taco",
          "source_url"  : "http://tacobell.com"
        },
        {
          "item"        : "Burgers",
          "source_url"  : "http://fiveguys.com"
        },
        {
          "item"        : "Subs",
          "source_url"  : "http://subway.com"
        }
      ]
    }
  },
}
</script>

<style>

</style>
