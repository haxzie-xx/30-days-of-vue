<template>
    <div class="input-form">
        <text-input class="input font-size"
          placeholder="write your new task here..."
          :value="todoForm"
          @inputChanged="updataForm" />
        <Button class="button font-size"
          @clicked= addTodo :displayIcon="displayIcon" icon-name="plus" message="add">
        </button>
    </div>
</template>

<script>
import TextInput from '../atoms/BaseInputText.vue'
import Button from '../atoms/BaseButton.vue'
import { mapState } from 'vuex'

export default {
  name: 'InputForm',
  data: function () {
    return {
      displayIcon: true
    }
  },
  state: {
    number: 0
  },
  components: {
    TextInput,
    Button
  },
  computed: {
    ...mapState('todoStore', ['todoForm'])
  },
  methods: {
    updataForm (payload) {
      this.$store.dispatch('todoStore/updateTodoForm', payload)
    },
    addTodo () {
      this.$store.dispatch('todoStore/addTodo')
      this.$store.dispatch('todoStore/updateTodoForm', '')
    }
  }
}
</script>

<style scoped>
.input-form {
  display: flex;
}
.font-size {
  font-size: inherit;
}
.input {
  border-color: grey;
  border: 2px solid;
  border-radius: 5px;
  flex: 1;
  padding: 5px;
}
.button {
  border: 2px solid;
  border-radius: 10px;
  margin-left: 1%;
}
</style>
