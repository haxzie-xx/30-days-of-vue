<template>
  <div class="container">
    <div class="nav">
      <p class="header">{{title}}</p>
    </div>
    <div class="md-container">
      <div class="editor">
        <textarea v-model="markdown" class="textarea"/>
      </div>
      <div class="converter">
        <div 
          v-markdown 
          class="c-textarea" 
          :key="markdown">{{markdown}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  },
  data() {
    return {
      markdown: '### Hello world\n'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.md-container {
  display: flex;
  flex-direction: row;
  margin-top: 80px;
}

.editor {
  width: 50%;
  border-right: 1px solid #eee;
  height: 100vh;
  padding: 5px;
  display: flex;
}

.textarea {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
  border: 0;
  font-size: 1.5em;
  color: #525151;
}

.converter {
  width: 50%;
  display: flex;
  border-right: 1px solid #eee;
  height: auto;
}

.c-textarea {
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: left;
  background-color: white;
  border: 0;
  font-size: 1.5em;
  color: #525151;
}

.nav {
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  position: fixed;
  width: 100%;
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
}

.nav .header {
  display: flex;
  width: auto;
  font-size: 1.2em;
  margin-left: 20px;
  font-family: 'Ubuntu';
  font-weight: bold;
}


</style>
