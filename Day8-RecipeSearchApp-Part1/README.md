![titleImg](https://github.com/markrmessmore/Day8-Recipe-Search-App-Part1/blob/master/images/3.jpg?raw=true)
# 30 Days of View Recipe App - Part 1

### Purpose:
Creaing a ***Recipe App Tutorial*** to add to the 30 days of view project during ***Hacktoberfest***

### Objectives:
During this project you should grow in familiarity with the following:
* Getting a project up and running using ***vue-cli 3***
* Displaying a list of data within a view component (***v-for***)
* Binding a button to a function, allowing on-demand search capabilities (***methods and @click***)
* Use the search field to make an API call and display the returned results (***axios***)

### Prerequisites:
While it would likely be beneficial if you have gone through some other tutorials -- for instance [haxie's 30-days-of-vue](https://github.com/haxzie/30-days-of-vue) of which this tutorial is a part-- I will be working from the basis that more detail is better than less and therefore will try to state when I am assuming knowledge of a particular topic.

That said you will need the following for this to work. If you are not familiar with these, back up and start there:
* Node & npm
* An editor you like (I most often use [Atom](http://atom.io))
* A basic knowledge of HTML, CSS and JavaScript
* A basic understanding of how to use a command line interface.

### Step 1: Vue-Cli => Installation and Project Creation
[Vue](http://vuejs.org) is a JavaScript framework and can be utilized in a variety of methods. I have found the simplest and quickest way to get out of ***setup*** and into ***coding*** with is ***vue-cli***. More info about ***vue-cli*** can be found [here](https://cli.vuejs.org/).
* Open your command line window and navigate to the eventual destination where your project will reside.
* Enter `npm install -g @vue/cli` and vue-cli will now install across your system.
* Once installation is complete type `vue create recipe-app` (rename as you wish but ***recipe-app*** will be the name referred to within this tutorial).
* You will now be given several options; don't worry if you are not familiar with all of these. I would recommend just hit `Manually select features`
* Again do not worry about the various options. My recommendation, however, would be to have `babel` selected and hit `<Enter>
* Finally, I choose to keep my config `In dedicated config files` and hitting `N` to not save this as a default. However do what you choose it should not impact this tutorial.
* Vue-cli will now create your project, generating all necessary files. After installation completes enter the folder by typing `cd recipe-app`
* Now type `npm run serve`. Open your editor to this folder and your browser to `http://localhost:8080`. It's time to code!

### Step 2: Initial prep work
Upon opening up `http://localhost:8080` you'll see the standard ***Hello World*** example. Let's clean up some unnecessary code and put a couple other background pieces in here.
#### App.vue
* Beginning in the `src` folder with the `App.vue` file remove everything between `<div id="app">` and `</div>`
* You will also find a line reading `import HelloWorld from './components/HelloWorld.vue'` that can be removed as well as the `HelloWorld` found under ***components***
* Finally (for this file at least) I'd recommend removing everything between `<style>` and `</style>`. That just makes sure our styles don't end up conflicting.

#### index.html (optional)
* As noted, this part is entirely optional. Basically I have provided a [styles.css](http://#) to help this all look a bit better.
* In this very repo above you will see a `styles.css` file. Feel free to download (or click above, copy the contents and paste into your own css file in the `public` directory).
* Now open up the `public` folder and edit the `index.html`. Somewhere between `<head>` and `</head>` include the following line: `<link rel="stylesheet" href="styles.css">`. Of course if you named the file something other than `styles.css`, put that there instead.

### Step 3: Begin truly coding: displaying data lists (i.e. using `v-for`)
Back to our `src/App.vue` file. While there are a ***TON*** of cool things that can be done with the file components, for this project everything we do is going to be here.
* First we need some data before we can display it. Feel free to copy/paste this, but basically make your `<script>` area look something like this:

```
<script>
export default {
  name: 'app',
  data(){
    return{
      food: [
        {
          "title"        : "Pizza",
          "source_url"  : "http://pizzahut.com"
        },
        {
          "title"        : "Taco",
          "source_url"  : "http://tacobell.com"
        },
        {
          "title"        : "Burgers",
          "source_url"  : "http://fiveguys.com"
        },
        {
          "title"        : "Subs",
          "source_url"  : "http://subway.com"
        }
      ]
    }
  },
}
</script>
```
* In case you've forgotten this far down, we're making a ***Recipe App***. The plan, then, is to display ***recipe names*** and ***links***. The `data()` section holds just that...***data***. Therefore here we have defined an array named ***food***. The keys `title` and `source_url` are being used because eventually the ***API*** will be providing us those values.
* Now that we have some data, let's get ***Vue*** to display it. No formatting yet, just display. To do so, above in your `<template>` section place `{{food}}` within your `div`. The result should look something like this:

```
[ { "title": "Pizza", "source_url": "http://pizzahut.com" }, { "title": "Taco", "source_url": "http://tacobell.com" }, { "title": "Burgers", "source_url": "http://fiveguys.com" }, { "title": "Subs", "source_url": "http://subway.com" } ]
```
Here we are just demonstrating how by putting a variable in double squiggly braces `{{}}`, Vue understands that as a variable and places the data there.
* Now let's fix how some things are displayed. In this example we are going to use a table. Remove the `{{food}}` from within your div and replace it with this:

```
<table class="blueTable">
  <tr>
    <th>Recipe</th>
    <th>Link</th>
  </tr>
  <tr v-for="recipe in food">
    <td>
      {{recipe.title}}
    </td>
    <td>
      <a :href="recipe.source_url" target="_blank">Click here</a>
    </td>
  </tr>
</table>
```
If you are familiar with HTML (which, if you are not...how have you made it this far?) you can see all we are doing is creating a table, making two columns (Recipe and Link), then displaying the lists of recipe titles and corresponding links in the rows below.

#### So what is going on here?
* On a single row we define the cells we want to display. Much the same as a ***for*** loop in JavaScript, `recipe` is the variable we will iterate over every time within the `food` array. In each instance, we will then display both the title, and the link.
* "***NOW WAIT A MINUTE***" I can hear you saying. We are only displaying four rows, why not just do it the old fashioned way? My response is two-fold:
  - That takes more code, which means more things can go wrong. Even four rows of two columns would multiply this four times.
  - You would need to know precisely how many lines to add. If you do not know the number of your results, how can you add that many lines?
* This  method, in eight lines of code, ensures no matter how many responses - we have a place for them all.
* Save this and the result should look something like this:
![img1](https://github.com/markrmessmore/Day8-Recipe-Search-App/blob/master/images/1.jpg?raw=true)
* We have recipes. We have links. Excellent!

### In [part 2](https://github.com/markrmessmore/Day9-Recipe-Search-App-Part2) we will build upon this by querying an API to receive recipes and display what we get!
