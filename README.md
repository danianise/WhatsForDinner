# WhatsForDinner
## Overview
My family has a bunch of recipes that we like to have at dinnertime, but we still struggle to decide what to eat. When we do decide, we have to remember where to find the recipe.

My project is a collection of these dinner recipes. The recipes can be filtered by different criteria, such as ingredients or (lack of) allergens.
## Languages used:
- HTML
- EJS
- CSS
- JavaScript
- Express
- Node.js
- Mongoose
## Wireframes
![Screen Shot 2022-04-12 at 9 20 44 PM](https://user-images.githubusercontent.com/97096664/166089586-d5fe6438-66c6-4d2f-98f6-6ec3cb05dab3.png)

## Links
[GitHub Repository](https://github.com/danianise/WhatsForDinner)

[Heroku Deployment](https://danianise-whats-for-dinner.herokuapp.com/recipes)
## Screen Captures
### Index Page
<img width="1438" alt="Screen Shot 2022-04-29 at 11 24 52 PM" src="https://user-images.githubusercontent.com/97096664/166089158-2d9bfc66-5159-4fee-b377-a76d23b9ce8d.png">

### Each Recipe
<img width="1439" alt="Screen Shot 2022-04-29 at 11 26 44 PM" src="https://user-images.githubusercontent.com/97096664/166088727-7305e60f-2868-4cbd-ae2b-12b138946302.png">

### Edit a Recipe
![Recording 2022-04-29 at 23 38 22](https://user-images.githubusercontent.com/97096664/166089086-dbb66f5d-aafe-49e3-a68a-3e09fe85e7f6.gif)

### Add a Recipe
<img width="1434" alt="Screen Shot 2022-04-29 at 11 27 44 PM" src="https://user-images.githubusercontent.com/97096664/166088747-2c9fbd66-c0e8-497a-82ad-117a850113fc.png">

### Search by Ingredients
![Recording 2022-04-29 at 23 33 25](https://user-images.githubusercontent.com/97096664/166088945-263c6b08-70d0-4163-a4f1-5e33943cda08.gif)

### Allergen Filter
![Recording 2022-04-29 at 23 35 53](https://user-images.githubusercontent.com/97096664/166089013-dfb4331d-adb1-4a87-9046-478f3c3b855e.gif)

## User Stories
### MVP Goals
As a user I would like to see a list of recipes with images to generate ideas for dinner.
As a user I would like to see which recipes DO NOT contain the ingredients I am allergic to.
As a user I would like to search through the recipes based on which ingredients I already have.
As a user I would like to be able to add a recipe to the list.

### Stretch Goals
As a user I would like to save the recipes I want to find later in a list of favorites.
As a user I would like to be able to remove a recipe from the list if my family didn't like it.
As a user I would like to be able to filter my saved recipes based on the preferences of whichever family members are home to eat the meal.
As a user I would like to see randomly generated recipes for when I am struggling to come up with a dinner plan.
EXTRA STRETCH As a user I would like to see a NEW ( from an API?) recipe based on my criteria (ingredients, lack of allergens, etc)

## Major Hurdles
My recipe model contains arrays: ingredients and allergensContained. Any time I attempted CRUD on these arrays I would encounter problems with formatting, as the information put in would be in the form of a string. It took some work to get the data in the format I needed.

Knowing the user will input data differently than I would myself, I wanted to make sure the ingredient search gave as much prompting as possible. I used a placeholder in the field to provide an example, and I used a tutorial to set up search suggestions. I wanted the search suggestions to pull from the ingredients in the database, but I was not able to figure out how to do that and instead I hard-coded the ingredients I had so far into an array. When recipes are added, their ingredients will not automatically be a part of this search suggestions array. I also wanted the search suggestions to appear for the second and third ingredients input by the user, but again I wasn't able to figure it out.

One of my stretch goals was to fetch a random recipe from an API for when the user wants something new. I got part way through an attempt, and I'd like to go back to it later to get this feature functioning the way I want it to.
