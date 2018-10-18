<template>
  <div class="title">
    <message class="message"
      :message="messageOnLeft" />
    <font-awesome-icon icon="list-ul" />
    <message class="message"
      :message="messageOnRight" />
  </div>
</template>

<script>
import Message from '../atoms/TextMessage.vue'

export default {
  name: 'Title',
  props: {
    messageOnLeft: {
      type: String
    },
    messageOnRight: {
      type: String
    }
  },
  components: {
    Message
  }
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.message {
  padding: 5px;
}
</style>
