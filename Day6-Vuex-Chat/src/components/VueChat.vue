<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="d-flex f-wrap">
      <ChatClient v-for="client in clients" :key="client.id" :id="client.id" />
    </div>
    <div>
      <button type="button" class="btn btn-info" @click="addClient">Add new client</button>
    </div>
  </div>
</template>

<script>
import ChatClient from './ChatClient.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'VueChat',
  components: { ChatClient },
  data: () => ({
    msg: 'Vue Chat Sample App'
  }),
  methods: {
    ...mapActions(['addClient'])
  },
  computed: {
    ...mapGetters(['clients'])
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.d-flex {
  display: flex;
  justify-content: center;
}

.f-wrap {
  flex-wrap: wrap;
}
</style>
