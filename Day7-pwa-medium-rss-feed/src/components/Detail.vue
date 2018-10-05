<template>
	<div>
  	<header>
      <ul>
        <li>
          <router-link to="/" class="brand"> WWWID - MEDIUM </router-link>
        </li>
        <li>
          <a href="" @click="back" class="back"> Back </a>
        </li>
      </ul>
    </header>
		<div class="wrapper-book">
			<div class="books">
				<img v-lazy="article.thumbnail" alt="article.title" class="img-cat"> <br/>
				<span class="a-pubdate"> by {{ article.author }} at {{ article.pubDate }} </span>
				<h2> {{ article.title }} </h2>
				<p class="content" v-html="article.description"></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		article () {
			return this.$store.state.article
		}
	},
	methods: {
		back() {
			this.$store.commit('setArticle', {})
			this.$router.replace({ path: '/' })
		}
	} 
}
</script>

<style scoped>
.wrapper-book {
  width: 50%;
	margin: 90px auto;
}
.img-cat {
	width: 95%;
	margin-top: 10px;
}
.books {
	background: #f9f9f9;
	color: #000;
	padding: 5px;
	height: 0 auto;
	margin-bottom: 20px;
}
.content >>> img {
	width: 100%;
}
.content >>> ul li {
	font-size: 12px;
	overflow: hidden;
	margin-left: 350px;
}
.content >>> a {
	color: rgb(155, 151, 151);
}
.content >>> pre {
	background: #efeded;
}
.content >>> p a {
	display: inline;
	text-align: left;
	padding: 0px 10px;
}
.content >>> figcaption {
	width: 100%;
	color: #000;
	display: none;
}
.back {
	background: #fff;
	color: #000;
	font-weight: bold;
	border-radius: 3px;
}
h2 {
	padding: 0px 15px;
	line-height: 30px;
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
	padding: 10px;
	line-height: 30px;
	text-align: left;
	color: black;
}
.back {
	text-align: center;
	font-size: 17px;
	cursor: pointer;
	color: #3498db;
}
ul {
  list-style: none;
  margin-left: -550px;
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
	.back {
		margin-left: 100px;
	}
}

</style>