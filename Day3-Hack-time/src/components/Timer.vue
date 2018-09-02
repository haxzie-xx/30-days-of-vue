<template>
  <div class="container">
    <p class="time">
      <input type="text" v-model="hour"/>:<input type="text" v-model="minute"/>:<input type="text" v-model="second"/>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    msg: String
  },
  data() {
    return {
      cTime: "00:00:00",
      hour: 0,
      minute: 1,
      second: 5,
      interval: null,
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.second = this.second === 0? 
        (this.minute > 0 ? this.second = 59 : clearInterval(this.interval)) 
        : this.second - 1;
    }, 1000);
  },
  watch: {
    second(value) {
      if(this.second == 0){
        this.minute -= 1;
      }
    },
    minute(value) {
      if(this.minute < 0 && this.hour > 0) {
        this.minute = 59;
        this.hour -= 1;
      }
    },
    hour(value) {
      if (this.hour < 0) {
        clearInterval(this.interval);
      }
    }
  },
  methods: {
    updateSecond: function() {
      this.second++;
    }
  },
  filters: {
    twoDigits(value) {
        if ( value.toString().length <= 1 ) {
            return '0'+value.toString()
        }
        return value.toString()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkslategray;
}
.time {
  font-size: 10em;
  color: white;
  font-family: 'Overpass Mono', monospace;
}

.time input {
  border: 0;
  margin: 0;
  padding: 0;
  text-decoration: none;
  margin: none;
  font-size: 1em;
  width: 200px;
}
</style>
