<template>
    <button class="button theme" @click="$emit('clicked')">
        <font-awesome-icon class="button-icon theme" v-if="displayIcon" :icon="iconName" /> {{ message }}
    </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    message: {
      type: String,
      required: true
    },
    iconName: {
      type: String
    },
    displayIcon: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.theme{
  padding:5px;
}
.button{
  display:flex;
  justify-content: center;
  align-items: center;
  border: 3px solid;
  border-radius: 10px;
  background: inherit;
  cursor: pointer;
}
.button-icon{
  align-self:center;
}
</style>
