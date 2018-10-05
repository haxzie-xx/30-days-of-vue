<template>
  <div id="app">
    <main>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  beforeMount() {
    this.$store.dispatch('fetchArticle')
  }
}
</script>

<style>
body {
  margin: 0;
  background: #efeded;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #efeded;
}
main {
  text-align: center;
  margin-top: 40px;
}

header {
  position: fixed;
  top:0;
  width: 100%;
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #1f293d;
  color: #ffffff;
  margin-top: 0px;
  text-align: center;
}

ul {
  list-style: none;
  margin-left: -270px;
}
ul li {
  display: inline-block;
}
a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 5px 20px;
  font-size: 14px;
}
a:hover {
  color: #ecf0f1;
}
.brand {
  font-weight: bold;
  color: #ecf0f1;
}
</style>
