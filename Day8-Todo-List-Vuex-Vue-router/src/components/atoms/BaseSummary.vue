<template>
  <p class="summary">
    <span>
      <b>Summary</b></span><br/>
      {{description}}: <strong>{{value}}</strong><br/>
  </p>
</template>

<script>
export default {
  name: 'BaseSummary',
  props: {
    description: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      defaultStatus: 0
    }
  }
}
</script>

<style scoped>
  .summary {
    line-height: 1.6;
  }
</style>
