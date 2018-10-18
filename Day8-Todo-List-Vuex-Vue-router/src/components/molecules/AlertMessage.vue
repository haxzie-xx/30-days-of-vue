<template>
    <div class="alert-message">
        <font-awesome-icon class="icon" icon="exclamation-triangle" />
        <message class="message" :message="message" />
    </div>
</template>

<script>
import Message from '../atoms/TextMessage.vue'

export default {
  name: 'AlertMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  components: {
    Message
  }
}
</script>

<style scoped>
.alert-message {
  display: flex;
  font-size: 2vh;
  color: red;
}
.icon {
  margin-right: 1%;
  align-self: center;
}
.message {
  flex: 1;
}
</style>
