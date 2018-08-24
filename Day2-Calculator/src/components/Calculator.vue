<template>
  <div class="hello">
    <div class="calculator">
      <div class="screen">{{current || 0}}</div>
      <div @click="clear" class="btn">C</div>
      <div @click="sign" class="btn">+/-</div>
      <div @click="percent" class="btn">%</div>
      <div @click="add" class="operator">+</div>
      <div @click="append('8')" class="btn">8</div>
      <div @click="append('7')" class="btn">7</div>
      <div @click="append('9')" class="btn">9</div>
      <div @click="minus" class="operator">-</div>
      <div @click="append('6')" class="btn">6</div>
      <div @click="append('5')" class="btn">5</div>
      <div @click="append('4')" class="btn">4</div>
      <div @click="times" class="operator">x</div>
      <div @click="append('3')" class="btn">3</div>
      <div @click="append('2')" class="btn">2</div>
      <div @click="append('1')" class="btn">1</div>
      <div @click="divide" class="operator">/</div>
      <div @click="append('0')" class="btn zero">0</div>
      <div @click="dot" class="btn">.</div>
      <div @click="equal" class="operator equalto">=</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      current: '',
      operator: null,
      previous: null,
      operatorClicked: false
    }
  },
  methods: {
    clear: function() {
      this.current = ''
    },
    sign: function() {
      this.current = this.current.charAt(0) == '-' ?
        this.current.slice(1) : `-${this.current}`;
    },
    percent: function() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append: function(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot: function() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious: function() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide: function() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times: function() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    add: function() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    minus: function() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    equal: function() {
      this.current = `${this.operator(parseFloat(this.previous), parseFloat(this.current))}`;
      this.setPrevious();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  width: 300px;
  height: 400px;
  display: grid;
  background-color: #eee;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(50px, auto);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(55, 65, 83, 0.384);
}

.screen {
  grid-column: 1/5;
  background-color: rgb(27, 53, 102); 
  color: #fff;
  font-size: 3em;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  overflow: hidden;
}

.btn {
  font-size: 1.5em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in-out;
}

.btn:hover {
  background-color: rgb(212, 211, 211);
}

.zero {
  grid-column: 1/3;
  border-radius: 0px 0px 0px 10px;
}

.equalto {
  border-radius: 0px 0px 10px 0px;
}

.operator {
  font-size: 1.5em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  color: #fff;
  transition: all 0.1s ease-in-out;
}

.operator:hover {
  background-color: rgb(255, 153, 0);
}


</style>
