<template>
  <div class="home-body">
    <Message class="message center" message="Welcome to this simple todo list."/>
    <router-link class="router" :to="{name: 'todos'}">
      <Button class="button center" :display-icon=false message="Get Started"/>
    </router-link>
  </div>
</template>

<script>
import Message from '../atoms/TextMessage.vue'
import Button from '../atoms/BaseButton.vue'
export default {
  name: 'HomeBody',
  components: {
    Message,
    Button
  }
}
</script>

<style scoped>
.home-body{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.center{
  margin: auto;
  top: 50%;
  left: 50%;
  right: 50%;
  bottom: 50%;
}
.message{
  padding:2%;
  font-size: 4vh;
  text-align: center;
}
.button {
  padding: 10px;
  background: skyblue;
  color:white;
  cursor: pointer;
  font-size: inherit;
}
.router{
  text-decoration: none;
  padding: 2%;
}
</style>
