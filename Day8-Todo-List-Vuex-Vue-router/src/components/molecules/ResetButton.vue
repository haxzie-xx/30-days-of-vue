<template>
  <Button class="button" :displayIcon=true iconName="trash" message="clear all tasks" @clicked="clearTodos" />
</template>

<script>
import Button from '../atoms/BaseButton.vue'

export default {
  name: 'ResetButton',
  components: {
    Button
  },
  methods: {
    clearTodos () {
      const confirmation = confirm('Are you sure you want to clear all tasks? Tasks deleted can not be recover.')
      if (confirmation) {
        this.$store.dispatch('todoStore/clearTodos')
      }
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
