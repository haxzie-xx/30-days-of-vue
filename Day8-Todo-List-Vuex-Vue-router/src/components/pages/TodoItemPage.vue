<template>
  <div>
    <p>
      <Todo :message="getMessage"/>
    </p>
    <Button class="button" :displayIcon=true icon-name="backward" message="back" @clicked="goBack"/>
  </div>
</template>

<script>
import Todo from '../atoms/TextMessage.vue'
import Button from '../atoms/BaseButton.vue'
import { mapState } from 'vuex'

export default {
  name: 'TodoItemPage',
  components: {
    Todo,
    Button
  },
  computed: {
    ...mapState('todoStore', [
      'todos'
    ]),
    getMessage () {
      const { id } = this.$route.params
      return this.todos[id].description
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.button {
  border: 2px solid;
  border-radius: 10px;
  font-size: inherit;
  background-color: skyblue;
  color: white;
}
</style>
