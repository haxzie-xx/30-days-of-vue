<template>
    <div class="header">
        <app-title message-on-left="To" message-on-right="Do" />
    </div>
</template>

<script>
import AppTitle from '../molecules/AppTitle.vue'

export default {
  name: 'AppHeader',
  components: {
    AppTitle
  }
}
</script>

<style scoped>
.header {
  padding: 5px;
}
</style>
