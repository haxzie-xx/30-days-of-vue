<template>
  <div class="todos-body">
    <navigation class="navigation-bar"/>
    <router-view name="input"> </router-view>
    <router-view />
    <router-view name="reset"> </router-view>
  </div>
</template>

<script>
import Navigation from '../molecules/NavigationButtons.vue'

export default {
  name: 'MainBody',
  components: {
    Navigation
  }
}
</script>

<style scoped>
.todos-body {
  font-size: 2vh;
}

.navigation-bar{
  margin-top: 1%;
  font-size: 2.5vh;
}
</style>
