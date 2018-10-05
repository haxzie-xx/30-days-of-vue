<template>
  <div>
    <header>
      <ul>
        <li>
          <router-link to="/" class="brand"> WWWID - MEDIUM </router-link>
        </li>
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/about"> About </router-link>
        </li>
      </ul>
    </header>
    <div class="container">
      <p> 
        <h2> vuejs pwa for wwwid by @mfaridzia </h2>
        <p> Source Code : <p>
        <a href="https://github.com/mfaridzia/vuejs-pwa-wwwid" class="source"> https://github.com/mfaridzia/vuejs-pwa-wwwid </a> 
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 200px auto;
}
h2 {
  font-size: 20px;
}
p {
  font-size: 17px;
}
.source {
  color: #000;
  margin-top: -10px;
}
ul {
  list-style: none;
  margin-left: -270px;
}

@media only screen and (max-width: 750px) {
  .container {
      width: 100%;
  }
  h2 {
      font-size: 14px;
  }
  p {
    font-size: 12px;
  }
  .brand {
    display: none;
  }
}
</style>
