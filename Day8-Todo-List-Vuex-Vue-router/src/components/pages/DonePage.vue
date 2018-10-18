<template>
  <div class="done-items">
    <Summary :description="summaryDescription" :value="taskCompleted" />
    <p>
      <done-items :items="getDone"/>
    </p>
  </div>
</template>

<script>
import DoneItems from '../organisms/ItemsList.vue'
import Summary from '../atoms/BaseSummary.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'DonePage',
  data: function () {
    return {
      summaryDescription: 'Total tasks done',
      value: 100
    }
  },
  components: {
    DoneItems,
    Summary
  },
  computed: {
    ...mapGetters('todoStore', [
      'taskCompleted',
      'getDone'
    ])
  }
}
</script>

<style scoped>
.done-items {
  font-size:2vh;
}
</style>
