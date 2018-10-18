<template>
  <div>
    <Summary
      description="Total tasks to do"
      :value="taskToDo" />
    <p>
      <Todos :items="getTodos"/>
    </p>
  </div>
</template>

<script>
import Summary from '../atoms/BaseSummary.vue'
import Todos from '../organisms/ItemsList.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'TodosPage',
  components: {
    Summary,
    Todos
  },
  computed: {
    ...mapGetters('todoStore', [
      'taskToDo',
      'getTodos'
    ])
  }
}
</script>
