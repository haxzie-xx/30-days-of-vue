<template>
    <div class="todo-item">
        <input class="status"
          type="checkbox"
          :checked="item.status"
          @change="setStatus(item)"/>
        <to-do-item-message class="details"
          :message="item.description"
          :class="{done: item.status}"
          @clicked="$emit('clicked', item.id)"/>
    </div>
</template>

<script>
import ToDoItemMessage from '../atoms/TextMessage.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ItemsListItem',
  props: [
    'item'
  ],
  components: {
    ToDoItemMessage
  },
  methods: {
    ...mapActions('todoStore', [
      'setStatus'
    ])
  }
}
</script>

<style scoped>
.todo-item {
  margin-top: 2%;
  margin-bottom: 2%;
  border: 2px solid;
  border-radius: 10px;
  border-color: skyblue;
  vertical-align: middle;
  display: flex;
}
.status {
  margin-left: 1%;
  align-self: center;
}
.details {
  padding: 1%;
  flex: 1;
}
.done {
  text-decoration: line-through;
  color: grey;
}
</style>
