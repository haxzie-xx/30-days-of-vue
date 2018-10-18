<template>
  <div class="navigation-buttons">
    <router-link :to="{name:'home'}" exact class="container">
      <Button class="button" :display-icon="displayIcon" icon-name="home" message="Home" />
    </router-link>
    <router-link class="container" exact :to="{ name:'todos'}" >
      <Button class="button" :display-icon="displayIcon" icon-name="briefcase" message="To do"/>
    </router-link>
    <router-link :to="{name:'done'}" exact class="container">
      <Button class="button" :display-icon="displayIcon" icon-name="check-double" message="Done" />
    </router-link>
  </div>
</template>

<script>
import Button from '../atoms/BaseButton.vue'

export default {
  name: 'NavigationButton',
  data: function () {
    return {
      displayIcon: true
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped>
.navigation-buttons{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container{
  text-decoration: none;
  flex: 1 1 auto;
}
.button {
  font-size: inherit;
  color:white;
  background: skyblue;
  width: 100%;
}
.router-link-active{
  background: skyblue;
}
</style>
