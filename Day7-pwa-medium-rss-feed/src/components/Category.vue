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
    <div class="wrapper-book">
      <h4> Articles in category <strong> {{ $route.params.slug }} </strong> </h4>
      <div class="books" v-for="(item, index) in items" :key="index">
        <img v-lazy="item.thumbnail" alt="item.title">
        <h3 @click="detailArticle(item)" class="title"> {{ item.title }} </h3>
        <p class="a-pubdate"> by {{ item.author }} at {{ item.pubDate }} </p>
        <p v-if="item.guid === 'https://medium.com/p/c1e27e7e2742'"> {{ item.description | regcontentunik }} ... </p>
        <p v-else> {{ item.description | regcontent }} ... </p>
      </div>
	  </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.articleCategory(this.$route.params.slug)
    }
  },
  filters: {
    regcontent: function (value) {
      if (!value) return ''
        value = value.replace(/(<([^>]+)>)/ig,"").substr(1, 110)
      return value
    },
    regcontentunik: function (value) {
      if (!value) return ''
        value = value.replace(/(<([^>]+)>)/ig,"").substr(80, 56)
      return value
    }
  },
  methods: {
    detailArticle(data) {
      this.$store.commit('setArticle', data)
      this.$router.replace({ 'path': '/category/post/article-detail' })
    }
  }
}
</script>

<style scoped>
.wrapper-book {
  width: 40%;
  margin: 90px auto;
}
.books {
  background: #f9f9f9;
  color: #000;
	transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
  padding: 5px;
  height: auto;
  margin-bottom: 20px;
}
.a-pubdate {
  font-size: 12px;
}
h4 {
  text-align: left;
  padding: 0px 0px;
}
strong {
  padding: 5px;
  background-color: slategrey;
  color: #fff;
  font-size: 14px;
}
.title {
  cursor: pointer;
}
h2 {
  padding: 0px 15px;
  line-height: 30px;
}
img {
	display: block;
	width: 100%;
  height: 300px;
}
p {
  font-size: 17px;
}
span {
  font-size: 12px;
  padding: 0px 3px;
}
.content {
  font-size: 14px;
  padding: 0px 30px;
  line-height: 30px;
  text-align: justify;
}
.back {
  text-align: center;
  font-size: 17px;
  cursor: pointer;
  color: #3498db;
}
/*RESPONSIVE*/
@media only screen and (max-width: 750px) {
  .wrapper-book {
    width: 80%;
    margin: 90px auto;
  }
.books {
    padding: 5px;
    height: auto;
  }
  .brand {
    display: none;
  }
}

</style>