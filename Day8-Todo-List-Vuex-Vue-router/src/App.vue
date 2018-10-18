<template>
    <div class="app">
        <Header class="header" />
        <router-view class="body"/>
    </div>
</template>

<script>
import Header from './components/views/AppHeader.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
.app {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 1%;
  margin-right: 1%;
  max-width: 1000px;
  margin: auto;
}
.header {
  position:sticky;
  top:1%;
  font-size: 4vh;
  color: #ffffff;
  background-color: skyblue;
}
.body{
  margin-top: 2%;
  font-size:2.5vh;
}
</style>
