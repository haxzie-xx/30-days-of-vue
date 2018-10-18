<template>
  <div>
    <p>
      <alert-message
        v-if="alert.displayAlert"
        :message="alert.message" />
    </p>
    <p>
      <input-form />
    </p>
  </div>
</template>

<script>
import AlertMessage from '../molecules/AlertMessage.vue'
import InputForm from '../molecules/InputForm.vue'
import { mapState } from 'vuex'

export default {
  name: 'Input',
  components: {
    AlertMessage,
    InputForm
  },
  computed: {
    ...mapState('todoStore', [
      'alert'
    ])
  }
}
</script>

<style>

</style>
