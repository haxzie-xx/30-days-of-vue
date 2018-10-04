<template>
  <div class="chat-client">
    <div v-if="!clientReady" class="p-1">
      <h5>Select a Username and color</h5>
      <input type="text" placeholder="username" v-model="username"/>
      <input type="color" v-model="color"/>
      <br>
      <button type="button" class="btn btn-sm mt-3 float-right" :disabled="!username || !color" @click="startChat">Start</button>
    </div>
    <div v-else-if="activeClientCount <= 1" class="p-2 alert alert-warning m-0">
      Waiting for more people to join
    </div>
    <div v-else>
      <div class="alert alert-info">
        {{ activeClientCount }} users Online
      </div>
      <div class="container-fluid chat-window">
        <p class="message" v-for="(item, i) in messages" :key="i" :class="item.username === username ? 'text-right' : 'text-left'">
          <small :style="`color: ${item.color}`">{{item.username}}:</small> <span>{{item.message}}</span>
        </p>
      </div>
      <textarea v-model="messageInputBox" placeholder="Enter your message" @keyup.enter="sendMessage"></textarea>
      <button type="button" class="btn btn-danger float-right" @click="removeClient(id)">Exit Chat</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ChatClient',
  props: { id: Number },
  data: () => ({
    clientReady: false,
    username: null,
    color: null,
    messageInputBox: ''
  }),
  methods: {
    ...mapActions(['setClientActive', 'setMessage', 'removeClient']),
    startChat () {
      this.clientReady = true
      const clientState = { id: this.id, isActive: this.clientReady }
      this.setClientActive(clientState)
    },
    sendMessage () {
      const messagePayload = {
        username: this.username,
        color: this.color,
        message: this.messageInputBox
      }

      this.messageInputBox = ''

      this.setMessage(messagePayload)
    }
  },
  computed: {
    ...mapGetters(['activeClientCount', 'messages'])
  }
}
</script>

<style scoped>
.chat-client {
  margin: 1em;
  border: solid 1px slategray;
}
.chat-window {
  background-color: #efefef;
  color: darkslategray;
  height: 60vh;
  min-width: 60vh;
  overflow-y: auto;
}

.chat-window .username {
  color: blue;
}

.message {
  font-size: 1.5em;
}

textarea {
  width: 100%;
}
</style>
