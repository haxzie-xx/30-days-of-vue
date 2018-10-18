<template>
    <input type="value" v-model="text" />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    value: String
  },
  computed: {
    text: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('inputChanged', value)
      }
    }
  }
}
</script>
