<template>
  <div class="items-list">
      <items-list-item class="item"
        v-for="item in items"
        v-bind:key="item.id"
        :item="item"
        @clicked="showTodo"/>
  </div>
</template>

<script>
import ItemsListItem from '../molecules/ItemsListItem.vue'
import { mapState } from 'vuex'

const isTodo = item => {
  if (!item.status) {
    return 'todoList'
  } else {
    return 'done'
  }
}

export default {
  name: 'ItemsList',
  components: {
    ItemsListItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState('todoStore', [
      'todos'
    ])
  },
  methods: {
    showTodo (id) {
      this.$router.push({
        name: 'todoItem',
        params: {
          id: id,
          name: isTodo(this.todos[id])
        }
      })
    }
  }
}
</script>

<style scoped>
.item{
  cursor: pointer;
}
</style>
