![titleImg](https://github.com/markrmessmore/Day8-Recipe-Search-App-Part1/blob/master/images/3.jpg?raw=true)

# 30 Days of View Recipe App - Part 2

### Purpose:
Creaing a ***Recipe App Tutorial*** to add to the 30 days of view project during ***Hacktoberfest***

### Objectives:
During this project you should grow in familiarity with the following:
* Getting a project up and running using ***vue-cli 3***
* Displaying a list of data within a view component (***v-for***)
* Binding a button to a function, allowing on-demand search capabilities (***methods and @click***)
* Use the search field to make an API call and display the returned results (***axios***)

### Recap:
In [part one](https://github.com/markrmessmore/Day8-Recipe-Search-App-Part1) we created a new Vue project, prepped our files, added some dummy data and showed how to display lists using `v-for`. Now we take this project a bit further.

### Step 4 (step numbers continued from part 1): Make this a bit prettier (optional).
* Don't just have a good functioning app...have one that looks good too! Fire up your app using `npm run serve` and open up to `localhost:8080`.
* We will not do a ton yet but just add this above your `<table>`:
```
<div class="titleBox">
  <h1>{{title}}</h1>
</div>
<div class="searchBox">
  <input type="text" v-model="search"></input>
</div>
```
* If you save now you'll get an error about variables `title` and `search`. That's because we have not added them yet! Let's do so now. 
* Previously the only variables we had in the `data()` portion was our list of food and corresponding links. Now add the following to that area:
```
title: "Recipe Search App",
search: "",
```
Now, like before, Vue will see these as variable values (in this case strings) which can be used by the app in a variety of ways. The result should look something like this:
![img2](https://github.com/markrmessmore/Day8-Recipe-Search-App-Part1/blob/master/images/2.jpg?raw=true)
*Note the search box is there but isn't being used yet. We will get to that.

### Step 5: Call an API for data.
To this point we've used some dummy data. Now we are going to reach out to a real bonifide API to get data to display. To do so I am going to introduce two new things:
* [axios](https://github.com/axios/axios)
* [food2fork.com](https://www.food2fork.com)

#### First let's install axios.
If the API is the bank of data, ***axios*** is the truck that hauls the data back and forth to and from it's destination. 
* Stop your command line process by typing `Ctrl + C`. Now, still in the ***recipe-app*** type: `npm install axios --save`. This will take care of the installation. Now you can restart your app by typing `npm run serve`.

#### We have axios, but now we need access.
API's commonly require what is called an ***apiKey*** which is just what it sounds like; a key granting access. Since we are using [Food 2 Fork](https://www.food2fork.com/default)'s API, we need to ask them for a key so we can get in.
* Head over to [Food 2 Fork](https://www.food2fork.com/default) and register for an account
  * *In case you're wondering the basic account (giving 50 calls a day) is free. And no, I am not in any way reimbursed by this service. I'm simply using it because it's free and provides recipes.*
* Once you have created a free account click on `Browse` in the top-right corner and select `Recipe API`. Here you will find your apiKey. You'll want to leave this open so you can copy it later...but treat it like a password and do not broadcast it everywhere. 

#### Now back in our App.vue...
* Axios will not work if we do not import it. So let's start there. Right after your `<script>` tag add: `import axios from 'axios'`. This is telling Vue there is a library you want to use and it is called 'axios.'
* Head back down to where you held that dummy data in the ***food*** array. Leave the array, but delete all the items inside. Essentially the result will end up looking like this:
```
data(){
  return{
    title: "Recipe Search App",
    food: [],
    search: "",
    apiKey: "***********"
  }
},
```
*You may notice that I have a variable `apiKey`. I choose to keep my key there. You can choose to do it that way or place the string in the url later. Your choice.*
* ***Don't panic if you look up and your app suddenly is displaying no data!*** Remember, you just removed the data for it to display!
* Next, we will create a ***method*** which is essentially just a function to call the API.
* Following your `data()` area listed above place in the following:
```
methods: {
  getRecipes(searchString){
    axios.get(`https://www.food2fork.com/api/search?key=${this.apiKey}&q=${searchString}`)
    .then(res => {
      this.food = res.data.recipes
    })
    .catch(err => {
      console.log(e)
    })
  }
},
```
Again...what is happening here? I'll walk through it line by line.
* Immediately after designating to Vue that we are in the ***methods*** section we are naming our first method `getRecipes` which will accept one parameter. 
* We then call the axios library specifying that we are performing a ***get***. The url is from ***food2fork*** however within this string we ***MUST*** include our API key we received earlier or we will be denied. 
  * *Note 1: If you are not familiar with the syntax I used it is called a [Javascript template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) and I love them.*
  * *Note 2: If no search string is supplied the food2fork API will return 30 random recipes. Just want you to know in case the results are not what you expect.*
* Following the axios call we have a `.then` where we are awaiting our response (in this case *res*). Once we have the response we are telling Vue to change the value of our `food` variable to the array that comes back in `res.data.recipes`.
* Our `.catch` is our error handling. If something goes wrong, you should see an error on the browser console.

### Step 6: Trigger the API call using whatever search string the user has entered.
Remember that search box we made earlier? Now we are going to use it by adding a button so that the `.searchBox` div looks like this:
```
<div class="searchBox">
  <input type="text" v-model="search"></input>
  <button @click="getRecipes(search)">Search for Recipe</button>
</div>
```
* A couple points that I haven't mentioned yet:
  * `v-model` binds whatever the user places in that field to the variable `search`.
  * `@click` is what you would assume...a click-event listener. When this button is clicked the app will fire off the `getRecipes()` function we created, using the search query we just bound.
  
Now, for a test let's see what happens when we look for ***Sloppy Joe*** recipes:
* Put *sloppy joe* into the search field.
* Click *Search*
* The result will likely be something like this:
[img3](https://github.com/markrmessmore/Day8-Recipe-Search-App-Part1/blob/master/images/3.jpg?raw=true)

### In Conclusion:
I hope you see there are ***LOTS*** of extra things you could do with this: personal recipe listing, transitions, code it to make supper for you, etc. But was for this to be a primer to some of the things that can be done with a basic set-up of ***VueJS***.

I hope you found some value in this tutorial. ***Happy Coding!***
